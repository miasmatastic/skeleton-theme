# 📝 Typography System Documentation

The Typography System provides professional, semantic typography controls with Adobe Fonts integration, responsive scaling, and accessibility optimizations.

## 🎯 System Overview

### Core Components

1. **Typography Configuration** (`snippets/typography-config.liquid`)
   - Semantic token definitions (display-1, heading-1, body, etc.)
   - Adobe Fonts + Shopify Fonts dual integration
   - Responsive scaling with clamp() functions
   - Accessibility and performance settings

2. **CSS Variables Renderer** (`snippets/typography-renderer.liquid`)
   - Generates CSS custom properties for all tokens
   - Advanced utility classes with responsive behavior
   - Animation and effects support
   - Accessibility enhancements

3. **Typography Utilities** (`assets/typography-utilities.css`)
   - Comprehensive utility classes for all typography tokens
   - Text alignment, transformation, and decoration utilities
   - Responsive typography classes
   - Content typography styles (.prose)

4. **Text+ Block** (`blocks/content/text-plus.liquid`)
   - Advanced typography block with preset/custom modes
   - Real-time typography controls
   - Animation and effects options
   - Accessibility and SEO optimizations

5. **Global Styles Panel** (`sections/global-styles-panel.liquid`)
   - Unified control interface for colors and typography
   - Live preview functionality
   - Preset management system
   - Adobe Fonts integration controls

## 🎨 Typography Tokens

### Display Tokens (Hero Content)
- `display-1`: clamp(3.5rem, 8vw, 6rem) - Primary hero text
- `display-2`: clamp(2.5rem, 6vw, 4.5rem) - Secondary hero text
- `display-3`: clamp(2rem, 5vw, 3.5rem) - Tertiary hero text

### Heading Tokens (Section Hierarchy)
- `heading-1`: clamp(2.25rem, 4vw, 3rem) - Main section headings
- `heading-2`: clamp(1.875rem, 3.5vw, 2.5rem) - Sub-section headings
- `heading-3`: clamp(1.5rem, 3vw, 2rem) - Card and component headings
- `heading-4`: clamp(1.25rem, 2.5vw, 1.5rem) - Small headings
- `heading-5`: clamp(1.125rem, 2vw, 1.25rem) - Micro headings
- `heading-6`: clamp(1rem, 1.5vw, 1.125rem) - Smallest headings

### Body Tokens (Content Text)
- `body-large`: clamp(1.125rem, 2vw, 1.25rem) - Lead paragraphs
- `body`: clamp(1rem, 1.5vw, 1.125rem) - Standard body text
- `body-small`: clamp(0.875rem, 1.25vw, 1rem) - Small body text

### Subtitle Tokens (Supporting Text)
- `subtitle-1`: clamp(1.125rem, 2vw, 1.25rem) - Primary subtitles
- `subtitle-2`: clamp(1rem, 1.5vw, 1.125rem) - Secondary subtitles

### UI Tokens (Interface Elements)
- `caption`: clamp(0.75rem, 1vw, 0.875rem) - Captions and meta text
- `overline`: clamp(0.75rem, 1vw, 0.875rem) - Small caps labels
- `button`: clamp(0.875rem, 1.25vw, 1rem) - Button text

## 🔧 Implementation Guide

### Basic Usage

#### 1. Load Typography System
```liquid
{% render 'typography-config' %}
{% render 'typography-renderer' %}
{{ 'typography-utilities.css' | asset_url | stylesheet_tag }}
```

#### 2. Use Typography Tokens
```html
<!-- Preset token classes -->
<h1 class="text-display-1">Hero Title</h1>
<h2 class="text-heading-1">Section Title</h2>
<p class="text-body">Body content with optimal readability.</p>

<!-- Semantic classes -->
<h1 class="hero-title">Hero Title</h1>
<h2 class="section-title">Section Title</h2>
<p class="card-body">Card content text.</p>
```

#### 3. Custom Typography with CSS Variables
```css
.custom-element {
  font-family: var(--font-heading);
  font-size: var(--typography-heading-2-size);
  line-height: var(--typography-heading-2-line-height);
  font-weight: var(--typography-heading-2-weight);
  letter-spacing: var(--typography-heading-2-spacing);
}
```

### Advanced Features

#### 1. Responsive Typography
```html
<!-- Different alignment on mobile -->
<h2 class="text-heading-1 text-center md:text-left">Responsive Heading</h2>

<!-- Different sizes across breakpoints -->
<p class="text-body lg:text-body-large">Responsive body text</p>
```

#### 2. Typography Effects
```html
<!-- Text shadows -->
<h1 class="text-display-1 text-shadow-lg">Shadowed Hero</h1>

<!-- Gradient text -->
<h2 class="text-heading-1 text-gradient-primary">Gradient Heading</h2>

<!-- Drop cap -->
<p class="text-body drop-cap">First letter is styled as a drop cap...</p>
```

#### 3. Accessibility Features
```html
<!-- High contrast mode -->
<p class="text-body high-contrast">Enhanced contrast text</p>

<!-- Screen reader optimized -->
<h1 class="text-heading-1" aria-label="Descriptive heading text">Visual Heading</h1>
```

## 🎨 Adobe Fonts Integration

### Setup Process

1. **Create Adobe Fonts Project**
   - Visit [Adobe Fonts](https://fonts.adobe.com)
   - Create a new web project
   - Add desired fonts to your project
   - Note your Kit ID

2. **Configure Theme Settings**
   ```liquid
   <!-- In theme settings -->
   Typography Adobe Fonts Enabled: true
   Adobe Fonts Kit ID: abc123def
   Adobe Primary Font: source-sans-pro
   Adobe Heading Font: proxima-nova
   Adobe Display Font: futura-pt
   Adobe UI Font: sofia-pro
   ```

3. **Font Family Mapping**
   - Use exact Adobe font family names (CSS names)
   - Include fallback fonts in typography config
   - Test font loading across different devices

### Example Configuration
```liquid
{% comment 'Adobe Fonts Configuration' %}
{% assign adobe_fonts_enabled = true %}
{% assign adobe_fonts_kit_id = 'abc123def' %}
{% assign adobe_primary = 'source-sans-pro' %}
{% assign adobe_heading = 'proxima-nova' %}
{% assign adobe_display = 'futura-pt' %}
{% assign adobe_ui = 'sofia-pro' %}
```

## 🛠️ Customization Options

### Theme Settings Controls

#### Typography System
- Enable/disable typography system
- Debug mode for development
- Performance and loading options
- Accessibility enhancements

#### Font Configuration
- Shopify font picker integration
- Adobe Fonts setup and mapping
- Font display strategies
- Preloading options

#### Typography Scale
- Base scale multiplier (0.8x - 1.4x)
- Mathematical scale ratios
- Custom token size overrides
- Responsive scaling controls

#### Accessibility
- High contrast mode
- Large text support
- Reduced motion preferences
- Enhanced focus indicators

### Custom Token Creation

#### 1. Define New Token
```liquid
{% comment 'Add to typography-config.liquid' %}
{% assign custom_token = 'custom-large|clamp(1.5rem, 3vw, 2rem)|1.4|500|normal' | split: '|' %}
{% assign typography_tokens = typography_tokens | concat: custom_token %}
```

#### 2. Create Utility Class
```css
/* Add to typography-utilities.css */
.text-custom-large {
  font-family: var(--font-primary);
  font-size: var(--typography-custom-large-size);
  line-height: var(--typography-custom-large-line-height);
  font-weight: var(--typography-custom-large-weight);
  letter-spacing: var(--typography-custom-large-spacing);
}
```

#### 3. Use in Templates
```html
<h3 class="text-custom-large">Custom styled heading</h3>
```

## 📱 Responsive Behavior

### Automatic Scaling
All typography tokens use `clamp()` for responsive scaling:
```css
font-size: clamp([minimum], [preferred], [maximum]);
```

### Breakpoint Utilities
```html
<!-- Mobile-first responsive classes -->
<h1 class="text-heading-3 md:text-heading-2 lg:text-heading-1">
  Responsive Heading
</h1>

<!-- Text alignment -->
<p class="text-center md:text-left lg:text-justify">
  Responsive alignment
</p>
```

### Custom Responsive Tokens
```css
/* Define custom responsive behavior */
.responsive-hero {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: clamp(1.1, 2vw, 1.3);
}

@media (max-width: 768px) {
  .responsive-hero {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
  }
}
```

## ♿ Accessibility Features

### Built-in Accessibility
- Semantic HTML support
- High contrast mode
- Large text scaling
- Reduced motion support
- Focus indicators
- Screen reader optimization

### Implementation
```html
<!-- Semantic HTML with typography -->
<article class="prose">
  <h1 class="text-heading-1">Article Title</h1>
  <h2 class="text-heading-2">Section Title</h2>
  <p class="text-body">Accessible body content...</p>
</article>

<!-- ARIA labels for complex typography -->
<div class="text-display-1 text-gradient-primary" 
     aria-label="Welcome to our store" 
     role="heading" 
     aria-level="1">
  Stylized Welcome Text
</div>
```

### Accessibility Settings
```liquid
{% comment 'Accessibility configuration' %}
{% assign typography_high_contrast = settings.typography_high_contrast %}
{% assign typography_large_text = settings.typography_large_text %}
{% assign typography_reduce_motion = settings.typography_reduce_motion %}
{% assign typography_focus_indicators = settings.typography_focus_indicators %}
```

## 🚀 Performance Optimization

### Font Loading Strategy
```html
<!-- Preload critical fonts -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- Adobe Fonts with performance optimization -->
<link rel="preload" href="https://use.typekit.net/kit-id.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="https://use.typekit.net/kit-id.css"></noscript>
```

### CSS Optimization
- CSS custom properties for efficient updates
- Minimal DOM manipulation
- Optimized utility classes
- Critical CSS inlining support

### JavaScript Optimization
```javascript
// Efficient typography updates
const updateTypographyScale = (scale) => {
  document.documentElement.style.setProperty('--typography-scale-base', scale);
};

// Debounced font loading
const loadFonts = debounce(() => {
  document.fonts.load('1rem proxima-nova');
}, 100);
```

## 🔍 Debugging & Development

### Debug Mode
Enable debug mode in theme settings to see:
- Typography token information
- CSS variable values
- Font loading status
- Performance metrics

### Development Tools
```liquid
{% if settings.typography_debug_mode %}
<style>
.typography-debug * {
  outline: 1px solid rgba(255, 0, 0, 0.2);
  position: relative;
}

.typography-debug *::before {
  content: attr(class);
  position: absolute;
  top: -1.5em;
  left: 0;
  font-size: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 4px;
  border-radius: 2px;
  z-index: 1000;
}
</style>
{% endif %}
```

### Testing Checklist
- [ ] All typography tokens render correctly
- [ ] Adobe Fonts load properly
- [ ] Responsive scaling works across devices
- [ ] Accessibility features function
- [ ] Performance metrics are acceptable
- [ ] Cross-browser compatibility verified

## 🔄 Migration Guide

### From Basic Typography
1. **Backup existing styles**
2. **Enable typography system**
3. **Replace existing font classes**
4. **Test responsive behavior**
5. **Update custom CSS**

### Class Migration Map
```
Old Class → New Class
.heading-large → .text-display-1
.heading-medium → .text-heading-1
.body-text → .text-body
.small-text → .text-caption
```

### Custom Font Migration
```css
/* Old approach */
.custom-heading {
  font-family: 'Custom Font', sans-serif;
  font-size: 2rem;
  line-height: 1.2;
}

/* New approach */
.custom-heading {
  font-family: var(--font-heading);
  font-size: var(--typography-heading-1-size);
  line-height: var(--typography-heading-1-line-height);
  font-weight: var(--typography-heading-1-weight);
  letter-spacing: var(--typography-heading-1-spacing);
}
```

## 📚 Resources & References

### Documentation Links
- [Adobe Fonts Documentation](https://helpx.adobe.com/fonts/using/embed-fonts.html)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Clamp Function](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Typography Resources
- [Modular Scale Calculator](https://www.modularscale.com/)
- [Typography Scale Generator](https://type-scale.com/)
- [Font Pairing Guide](https://fontpair.co/)
- [Web Typography Checklist](https://web.dev/font-display/)

### Performance Tools
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Font Loading Performance](https://web.dev/optimize-webfont-loading/)

## 🐛 Troubleshooting

### Common Issues

#### Adobe Fonts Not Loading
1. Verify Kit ID is correct
2. Check font family names match Adobe CSS names
3. Ensure domain is authorized in Adobe project
4. Test network connectivity and CORS settings

#### Typography Tokens Not Applying
1. Confirm typography system is enabled
2. Check CSS load order
3. Verify CSS custom properties are defined
4. Inspect element for conflicting styles

#### Responsive Scaling Issues
1. Test clamp() browser support
2. Verify viewport meta tag
3. Check custom CSS overrides
4. Test across different screen sizes

#### Performance Problems
1. Reduce number of font weights/styles
2. Implement font-display: swap
3. Preload critical fonts
4. Optimize font file sizes

### Debug Commands
```javascript
// Check typography system status
console.log(getComputedStyle(document.documentElement).getPropertyValue('--font-primary'));

// Test font loading
document.fonts.ready.then(() => {
  console.log('All fonts loaded');
});

// Measure typography performance
performance.mark('typography-start');
// ... typography operations
performance.mark('typography-end');
performance.measure('typography', 'typography-start', 'typography-end');
```

## 🎉 Best Practices

### Typography Hierarchy
1. Use semantic tokens consistently
2. Maintain clear visual hierarchy
3. Limit number of different sizes
4. Test readability across devices

### Performance
1. Preload critical fonts
2. Use font-display: swap
3. Minimize font variations
4. Implement fallback fonts

### Accessibility
1. Maintain sufficient contrast ratios
2. Support user font size preferences
3. Provide alternative text methods
4. Test with screen readers

### Maintenance
1. Document custom modifications
2. Test after theme updates
3. Monitor performance metrics
4. Keep Adobe Fonts projects organized

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Compatibility:** Shopify 2.0+ themes

For additional support, please refer to the [main documentation](README.md) or contact the development team.