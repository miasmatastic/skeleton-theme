# 🎨 Global Color Controls System

## Overview
The Global Color Controls system provides a unified interface for managing all colors across your PJM Skeleton Plus theme. This system ensures consistency, accessibility, and ease of customization.

## Features

### 🎯 **Quick Access Panel**
- **Location**: Available as a section in your theme customizer
- **Real-time Preview**: See changes instantly in the editor
- **Preset Schemes**: One-click professional color schemes
- **Accessibility Warnings**: Automatic contrast ratio checking

### 🌈 **Color Categories**

#### **Brand Colors**
- **Primary**: Main brand color for buttons, links, CTAs
- **Secondary**: Supporting brand color for variety
- **Accent**: Highlight color for special elements
- **Danger**: Error states, sale badges, warnings
- **Success**: Confirmations, positive actions

#### **Base Colors**
- **Background**: Main page background
- **Text**: Primary content text
- **Secondary Text**: Captions, descriptions
- **Border**: Cards, dividers, input borders
- **Shadow**: Drop shadows and overlays

#### **Product Colors**
- **Sale Badge**: Discount and sale indicators
- **Sold Out**: Unavailable product state
- **New Product**: New arrival badges
- **Featured**: Special product highlights

## How to Use

### 📍 **Adding the Control Panel**

1. **In Theme Customizer**:
   - Go to `Customize theme`
   - Click `Add section`
   - Select `🎨 Global Color Controls`
   - Position anywhere (usually at top for easy access)

2. **Using Quick Presets**:
   - Click any preset button for instant application
   - **Professional Blue**: Tech & business themes
   - **Nature Green**: Eco & health focused
   - **Creative Purple**: Art & design brands
   - **Energetic Orange**: Sports & energy brands
   - **Luxury Dark**: Premium & elegant styling

3. **Custom Color Adjustments**:
   - Use individual color pickers for fine-tuning
   - Changes apply globally across the entire theme
   - Live preview shows immediate results

### 🔧 **Advanced Settings**

#### **Sync with Global Settings**
- When enabled: Changes update theme-wide settings
- When disabled: Changes only affect the current section

#### **Accessibility Warnings**
- Automatically checks color contrast ratios
- Warns when combinations fall below WCAG AA standards
- Helps ensure your site is accessible to all users

## Technical Details

### **CSS Variable System**
All colors are automatically converted to CSS custom properties:

```css
:root {
  --brand-primary: #3b82f6;
  --brand-secondary: #10b981;
  --brand-accent: #f59e0b;
  /* ... etc */
}
```

### **Theme Integration**
The system integrates with existing theme settings:
- Updates `settings_schema.json` values
- Syncs with legacy color variables
- Maintains backward compatibility

### **JavaScript Features**
- Real-time color updates in theme editor
- Contrast ratio calculations
- Toast notifications for preset applications
- Accessibility warnings with specific recommendations

## Best Practices

### 🎨 **Color Selection**
1. **Start with a preset** that matches your brand personality
2. **Adjust the primary brand color** to match your logo
3. **Fine-tune secondary colors** for harmony
4. **Test accessibility** - aim for 4.5+ contrast ratio
5. **Check mobile appearance** with various screen sizes

### 🔍 **Accessibility Guidelines**
- **Text on background**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI elements**: Minimum 3:1 contrast ratio
- **Use the built-in warnings** to maintain compliance

### 🚀 **Performance Tips**
- The system only loads JavaScript in the theme editor
- Colors are applied via CSS variables for optimal performance
- Changes don't require page reloads in the editor

## Troubleshooting

### **Colors Not Updating**
1. Ensure "Sync with Global Settings" is enabled
2. Try refreshing the theme editor
3. Check that you're editing the correct section

### **Accessibility Warnings**
1. Review the specific contrast ratio provided
2. Adjust either background or text color
3. Test with actual content, not just the preview

### **Preset Not Working**
1. Make sure you're in the theme editor (design mode)
2. JavaScript may need a moment to load
3. Try clicking the preset again after a brief pause

## Integration with Other Sections

The Global Color Controls work seamlessly with all PJM enhanced sections:
- **Custom Hero**: Respects global brand colors
- **Lifestyle Showcase**: Uses base and accent colors
- **Enhanced Headers**: Applies brand color schemes
- **Product Grids**: Uses product-specific colors

## Support

For additional help or custom color schemes:
- 📧 Email: support@purejunkmedia.com
- 🌐 Documentation: [Theme Guide](./README.md)
- 🎨 Color Inspiration: [Adobe Color](https://color.adobe.com)

---

*This system is part of the PJM Skeleton Plus theme enhancement package.*