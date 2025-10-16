# 📦 Universal Block System Documentation

## Overview
The Universal Block System is an extensible, modular content management system for Shopify themes. It allows users to create flexible page layouts by combining different types of content blocks in customizable containers.

## System Architecture

### 🏗️ **Core Components**

#### **1. Universal Container Section**
- **File**: `sections/universal-container.liquid`
- **Purpose**: Main container that accepts and renders any block type
- **Features**: Multiple layout types, responsive controls, animation support

#### **2. Block Types**
- **Content Blocks**: Text, Heading, Image, Video
- **Layout Blocks**: Spacer, Container, Grid, Flex
- **Interactive Blocks**: Button, Accordion, Tabs
- **E-commerce Blocks**: Product Cards, Collection Grids

#### **3. Rendering System**
- **Snippets**: Individual renderers for each block type
- **Dynamic Rendering**: Automatic block type detection and rendering
- **Fallback Handling**: Graceful degradation for unknown blocks

#### **4. Styling System**
- **CSS Framework**: `assets/universal-blocks.css`
- **Responsive Design**: Mobile-first approach
- **Theme Integration**: Uses global color and typography variables

---

## 🎯 **Available Block Types**

### **Content Blocks**

#### **📝 Text Block**
- **Rich text content** with HTML support
- **Typography controls**: Size, weight, alignment, color
- **Responsive text scaling**
- **Maximum width control** for readability
- **Animation effects**

#### **📰 Heading Block**
- **SEO-optimized** heading levels (H1-H6)
- **Visual size independence** from semantic structure
- **Advanced typography**: Font family, weight, transform, spacing
- **Optional subheading** support
- **Color customization**

#### **🖼️ Image Block**
- **Responsive image handling** with srcset
- **WebP optimization** support
- **Aspect ratio control** (square, widescreen, portrait, etc.)
- **Image fit options** (cover, contain, fill)
- **Overlay effects** with blend modes
- **Caption support** (overlay and external)
- **Lazy loading** for performance

#### **🎬 Video Block**
- **Multiple sources**: Upload, YouTube, Vimeo
- **Responsive embedding** with aspect ratio control
- **Custom poster images** for uploaded videos
- **Playback controls**: Autoplay, loop, mute, controls
- **Accessibility features** with proper ARIA labels

### **Layout Blocks**

#### **📏 Spacer Block**
- **Responsive spacing** (desktop/mobile specific)
- **Multiple units**: px, rem, vh, %
- **Visual indicators** in design mode
- **Optional divider lines** with text
- **Background color support**

### **Interactive Blocks**

#### **🔘 Button Block**
- **Multiple styles**: Primary, Secondary, Ghost, Gradient, Custom
- **Size options**: Small, Medium, Large, Extra Large
- **Width control**: Auto, Half, Full width
- **Icon support** with position control
- **Link types**: URL, email, phone, anchor
- **Accessibility optimized** with proper ARIA attributes
- **Animation effects**

---

## 🎨 **Layout Types**

### **📚 Stack Layout**
- **Vertical arrangement** of blocks
- **Consistent spacing** between elements
- **Best for**: Traditional content flows, articles, landing pages

### **⚏ Grid Layout**
- **CSS Grid-based** responsive layout
- **Configurable columns**: 1-6 desktop, 1-4 tablet, 1-2 mobile
- **Automatic responsive behavior**
- **Best for**: Card layouts, image galleries, feature grids

### **🔄 Flexible Layout**
- **CSS Flexbox-based** with advanced controls
- **Direction control**: Row, column, reverse options
- **Alignment options**: Start, center, end, space-between, space-around
- **Wrapping control** for responsive behavior
- **Best for**: Navigation bars, button groups, balanced layouts

### **🧱 Masonry Layout**
- **Pinterest-style** cascading layout
- **Automatic height balancing**
- **Responsive column counts**
- **Best for**: Blog posts, portfolios, mixed content

---

## ⚙️ **Configuration Options**

### **Container Settings**

#### **📐 Layout Controls**
- **Layout Type**: Stack, Grid, Flexible, Masonry
- **Container Width**: Narrow (800px), Medium (1200px), Wide (1600px), Full
- **Content Alignment**: Left, Center, Right
- **Spacing Controls**: Vertical, horizontal, and gap spacing

#### **⚏ Grid-Specific**
- **Desktop Columns**: 1-6 columns
- **Tablet Columns**: 1-4 columns  
- **Mobile Columns**: 1-2 columns
- **Gap Control**: None to Extra Large

#### **🔄 Flex-Specific**
- **Direction**: Horizontal, Vertical, Reverse options
- **Horizontal Alignment**: Start, Center, End, Space Between/Around/Evenly
- **Vertical Alignment**: Top, Center, Bottom, Stretch
- **Wrapping**: Allow/prevent wrapping

#### **🎨 Styling**
- **Background**: Color or gradient
- **Text Color**: Override theme default
- **Border Radius**: 0-50px
- **Animation**: Fade In, Slide Up, Scale In

---

## 🚀 **Usage Examples**

### **Example 1: Hero Section**
```liquid
<!-- Use Stack layout with centered content -->
Layout: Stack
Container Width: Wide
Content Alignment: Center

Blocks:
1. Heading Block (H1, Large, Center aligned)
2. Text Block (Medium, Center aligned, Max width: 600px)
3. Button Block (Primary, Large, Center aligned, Arrow icon)
4. Spacer Block (40px desktop, 20px mobile)
```

### **Example 2: Feature Grid**
```liquid
<!-- Use Grid layout for feature cards -->
Layout: Grid
Desktop Columns: 3
Tablet Columns: 2
Mobile Columns: 1
Gap: Medium

Blocks:
1. Image Block (Square aspect, Small size)
2. Heading Block (H3, Medium)
3. Text Block (Small, Left aligned)
4. Button Block (Secondary, Small)
<!-- Repeat for each feature -->
```

### **Example 3: Content Article**
```liquid
<!-- Use Stack layout for article content -->
Layout: Stack
Container Width: Narrow
Content Alignment: Left

Blocks:
1. Heading Block (H1, Auto size, Left aligned)
2. Text Block (Medium, Left aligned)
3. Image Block (16:9 aspect, Full width, Caption)
4. Text Block (Medium, Left aligned)
5. Spacer Block (Divider with text)
6. Text Block (Medium, Left aligned)
```

### **Example 4: Call-to-Action Banner**
```liquid
<!-- Use Flex layout for CTA -->
Layout: Flexible
Direction: Row
Horizontal Alignment: Space Between
Vertical Alignment: Center
Background: Gradient

Blocks:
1. Heading Block (H2, Large, Left aligned)
2. Button Block (Primary, Large, Right aligned)
```

---

## 📱 **Responsive Behavior**

### **Breakpoints**
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 767px and below

### **Automatic Adaptations**
- **Grid layouts** automatically reduce columns on smaller screens
- **Flex layouts** stack vertically on mobile (unless overridden)
- **Typography** scales appropriately for readability
- **Spacing** reduces on mobile for better use of space
- **Images** maintain aspect ratios while fitting containers

---

## ♿ **Accessibility Features**

### **Built-in Compliance**
- **Semantic HTML**: Proper heading hierarchy, meaningful markup
- **ARIA Labels**: Screen reader support for complex elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators
- **Alt Text**: Required for images with fallbacks
- **Color Contrast**: Integration with theme color system
- **Reduced Motion**: Respects user motion preferences

### **Best Practices**
- Use proper heading hierarchy (H1 → H2 → H3)
- Provide meaningful alt text for images
- Ensure sufficient color contrast
- Test with keyboard navigation
- Verify screen reader compatibility

---

## 🎨 **Theme Integration**

### **Color System**
- **Global Variables**: Inherits from theme color scheme
- **Brand Colors**: Primary, secondary, accent, danger, success
- **Base Colors**: Background, text, borders
- **Override Capability**: Block-level color customization

### **Typography System**
- **Font Integration**: Works with theme font settings
- **Adobe Fonts**: Supports external font loading
- **Responsive Scaling**: Automatic size adjustments
- **Weight Options**: Light to extra bold
- **Line Height**: Optimized for readability

### **Performance**
- **CSS Variables**: Efficient color and font management
- **Lazy Loading**: Images load when needed
- **Minimal JavaScript**: Only loads when required
- **Critical CSS**: Essential styles inlined
- **WebP Support**: Modern image formats

---

## 🛠️ **Development Guide**

### **Adding New Block Types**

#### **1. Create Block File**
```liquid
<!-- blocks/category/new-block.liquid -->
{% comment %}
  New Block - Description of functionality
{% endcomment %}

<div class="block-new" data-block-id="{{ block.id }}">
  <!-- Block content -->
</div>

{% schema %}
{
  "name": "🆕 New Block",
  "settings": [
    <!-- Block settings -->
  ]
}
{% endschema %}
```

#### **2. Create Snippet Renderer**
```liquid
<!-- snippets/block-new.liquid -->
{% comment %}
  Block New Renderer - Renders new blocks from universal container
{% endcomment %}

<div class="block-new" data-block-id="{{ block.id }}">
  <!-- Rendering logic -->
</div>
```

#### **3. Update Universal Container**
```liquid
<!-- Add to case statement in universal-container.liquid -->
{% when 'new' %}
  {% render 'block-new', block: block %}
```

#### **4. Add to Schema**
```json
{
  "type": "new",
  "name": "🆕 New Block",
  "limit": 5
}
```

#### **5. Add CSS Styles**
```css
/* Add to universal-blocks.css */
.block-new {
  /* Block-specific styles */
}
```

### **Best Practices**
- Follow naming conventions (`block-[name]`)
- Include design mode placeholders
- Provide comprehensive settings
- Ensure responsive behavior
- Add proper accessibility attributes
- Document new features

---

## 🐛 **Troubleshooting**

### **Common Issues**

#### **Blocks Not Rendering**
- Check snippet file exists in `snippets/block-[name].liquid`
- Verify case statement in universal container includes block type
- Ensure block schema is valid JSON

#### **Styling Issues**
- Confirm `universal-blocks.css` is loading
- Check CSS class naming matches between files
- Verify color variables are available

#### **Responsive Problems**
- Test across different screen sizes
- Check media query syntax
- Verify grid/flex responsive settings

#### **Performance Issues**
- Optimize images before upload
- Enable lazy loading for images
- Minimize custom CSS and JavaScript
- Use WebP images when possible

### **Debug Mode**
Enable Shopify's design mode to see:
- Block placeholders for empty content
- Visual spacing indicators
- Block type information
- Error messages for missing content

---

## 🔮 **Roadmap**

### **Phase 2 Features**
- **Advanced Interactive Blocks**: Tabs, Accordions, Modals
- **E-commerce Blocks**: Product cards, Collection grids, Cart widgets
- **Animation System**: Scroll triggers, Intersection Observer
- **Conditional Logic**: Device, customer, cart-based rendering

### **Phase 3 Features**
- **Dynamic Content**: Auto-populating feeds
- **Advanced Layouts**: CSS Subgrid, Container queries
- **Third-party Integration**: App block support
- **Visual Editor**: Drag-and-drop interface

### **Phase 4 Features**
- **AI Content**: Smart content suggestions
- **Performance Monitoring**: Real-time optimization
- **Advanced Analytics**: Block usage tracking
- **Multi-language**: I18n support

---

## 📞 **Support**

### **Documentation**
- [Theme Documentation](./README.md)
- [Color System Guide](./GLOBAL-COLOR-CONTROLS-GUIDE.md)
- [Schema System Guide](./SCHEMA-SYSTEM-README.md)

### **Community**
- GitHub Issues: Report bugs and request features
- Email Support: support@purejunkmedia.com
- Documentation Updates: Submit improvements via PR

### **Resources**
- [Shopify Liquid Documentation](https://shopify.dev/api/liquid)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

*The Universal Block System is part of the PJM Skeleton Plus theme enhancement package. Built for developers, designed for users.*