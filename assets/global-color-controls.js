/**
 * Global Color Controls - Interactive Panel
 * 
 * Provides real-time color scheme updates in the Shopify theme editor.
 * Allows users to see changes instantly as they adjust colors.
 */

class GlobalColorControls {
  constructor() {
    this.init();
  }

  init() {
    // Only run in the theme editor
    if (!window.Shopify || !window.Shopify.designMode) return;
    
    this.bindPresetButtons();
    this.bindColorInputs();
    this.checkContrast();
    this.initLivePreview();
  }

  /**
   * Bind preset color scheme buttons for quick application
   */
  bindPresetButtons() {
    const presets = {
      'blue-scheme': {
        brand_primary: '#3b82f6',
        brand_secondary: '#1e40af',
        brand_accent: '#60a5fa',
        brand_danger: '#dc2626',
        brand_success: '#10b981',
        base_background: '#ffffff',
        base_text: '#1e293b',
        base_text_secondary: '#64748b',
        base_border: '#e2e8f0'
      },
      'green-scheme': {
        brand_primary: '#10b981',
        brand_secondary: '#047857',
        brand_accent: '#34d399',
        brand_danger: '#dc2626',
        brand_success: '#22c55e',
        base_background: '#ffffff',
        base_text: '#064e3b',
        base_text_secondary: '#6b7280',
        base_border: '#d1fae5'
      },
      'purple-scheme': {
        brand_primary: '#8b5cf6',
        brand_secondary: '#7c3aed',
        brand_accent: '#a78bfa',
        brand_danger: '#dc2626',
        brand_success: '#10b981',
        base_background: '#ffffff',
        base_text: '#581c87',
        base_text_secondary: '#7c3aed',
        base_border: '#e9d5ff'
      },
      'orange-scheme': {
        brand_primary: '#f97316',
        brand_secondary: '#ea580c',
        brand_accent: '#fb923c',
        brand_danger: '#dc2626',
        brand_success: '#22c55e',
        base_background: '#ffffff',
        base_text: '#9a3412',
        base_text_secondary: '#c2410c',
        base_border: '#fed7aa'
      },
      'dark-scheme': {
        brand_primary: '#60a5fa',
        brand_secondary: '#3b82f6',
        brand_accent: '#fbbf24',
        brand_danger: '#f87171',
        brand_success: '#34d399',
        base_background: '#1e293b',
        base_text: '#f8fafc',
        base_text_secondary: '#cbd5e1',
        base_border: '#475569'
      }
    };

    document.querySelectorAll('.preset-button').forEach(button => {
      button.addEventListener('click', (e) => {
        const scheme = e.currentTarget.classList[1]; // e.g., 'blue-scheme'
        if (presets[scheme]) {
          this.applyColorScheme(presets[scheme]);
          this.showToast(`${scheme.replace('-', ' ')} applied!`);
        }
      });
    });
  }

  /**
   * Apply a complete color scheme
   */
  applyColorScheme(colors) {
    // Update CSS variables immediately for preview
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      const cssVar = `--${key.replace(/_/g, '-')}`;
      root.style.setProperty(cssVar, value);
    });

    // Update form inputs if they exist
    Object.entries(colors).forEach(([key, value]) => {
      const input = document.querySelector(`#section-settings-${key}`);
      if (input) {
        input.value = value;
        // Trigger change event to update Shopify's form state
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });

    this.checkContrast();
  }

  /**
   * Bind individual color input changes for real-time updates
   */
  bindColorInputs() {
    // Find all color inputs in the global color controls section
    const colorInputs = document.querySelectorAll('[id*="brand_"], [id*="base_"], [id*="product_"]');
    
    colorInputs.forEach(input => {
      input.addEventListener('input', (e) => {
        this.updateCSSVariable(e.target);
        this.checkContrast();
      });
    });
  }

  /**
   * Update CSS variable when color input changes
   */
  updateCSSVariable(input) {
    const settingName = input.id.replace('section-settings-', '');
    const cssVar = `--${settingName.replace(/_/g, '-')}`;
    document.documentElement.style.setProperty(cssVar, input.value);
  }

  /**
   * Check color contrast for accessibility
   */
  checkContrast() {
    const background = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-base-background').trim();
    const text = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-base-text').trim();

    if (background && text) {
      const contrast = this.calculateContrast(background, text);
      const isAccessible = contrast >= 4.5; // WCAG AA standard

      // Show contrast warning if needed
      this.showContrastWarning(!isAccessible, contrast);
    }
  }

  /**
   * Calculate color contrast ratio
   */
  calculateContrast(color1, color2) {
    const rgb1 = this.hexToRgb(color1);
    const rgb2 = this.hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return 21; // Default to good contrast if conversion fails

    const l1 = this.getRelativeLuminance(rgb1);
    const l2 = this.getRelativeLuminance(rgb2);

    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);

    return (lighter + 0.05) / (darker + 0.05);
  }

  /**
   * Convert hex color to RGB
   */
  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  /**
   * Calculate relative luminance for contrast ratio
   */
  getRelativeLuminance(rgb) {
    const rsRGB = rgb.r / 255;
    const gsRGB = rgb.g / 255;
    const bsRGB = rgb.b / 255;

    const r = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
    const g = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
    const b = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  /**
   * Show contrast accessibility warning
   */
  showContrastWarning(show, contrast) {
    let warning = document.querySelector('.contrast-warning');
    
    if (show && !warning) {
      warning = document.createElement('div');
      warning.className = 'contrast-warning';
      warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #fee2e2;
        color: #991b1b;
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid #fca5a5;
        z-index: 10000;
        max-width: 300px;
        font-size: 0.875rem;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      `;
      warning.innerHTML = `
        <strong>⚠️ Accessibility Warning</strong><br>
        Color contrast ratio: ${contrast.toFixed(2)}<br>
        Recommended: 4.5 or higher for WCAG AA compliance
      `;
      document.body.appendChild(warning);

      // Auto-hide after 5 seconds
      setTimeout(() => {
        if (warning.parentNode) {
          warning.parentNode.removeChild(warning);
        }
      }, 5000);
    } else if (!show && warning) {
      warning.parentNode.removeChild(warning);
    }
  }

  /**
   * Show toast notification
   */
  showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #10b981;
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      z-index: 10000;
      font-weight: 600;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      toast.style.transform = 'translateX(0)';
    });

    // Animate out and remove
    setTimeout(() => {
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }, 2000);
  }

  /**
   * Initialize live preview updates
   */
  initLivePreview() {
    // Update preview colors every second to catch external changes
    setInterval(() => {
      this.updatePreviewColors();
    }, 1000);
  }

  /**
   * Update preview color swatches
   */
  updatePreviewColors() {
    const colorItems = document.querySelectorAll('.color-preview-item');
    const root = getComputedStyle(document.documentElement);

    colorItems.forEach(item => {
      const colorClass = item.classList[1]; // primary, secondary, etc.
      const cssVar = `--brand-${colorClass}`;
      const color = root.getPropertyValue(cssVar);
      
      if (color) {
        item.style.backgroundColor = color;
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GlobalColorControls();
  });
} else {
  new GlobalColorControls();
}

// Also initialize when section is loaded via AJAX in theme editor
document.addEventListener('shopify:section:load', () => {
  new GlobalColorControls();
});