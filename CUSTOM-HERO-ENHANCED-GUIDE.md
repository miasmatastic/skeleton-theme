# Custom Hero Enhanced Features Guide

## 🎨 Adobe Fonts Integration

### **Global Setup**
1. **Theme Settings** → **Typography** → **Adobe Fonts Integration**
2. **Add your Adobe font families** with proper fallbacks:
   - `proxima-nova, 'Helvetica Neue', Arial, sans-serif`
   - `source-sans-pro, Georgia, serif`
   - `futura-pt, Impact, sans-serif`

### **Font Selection Options**
- **Theme Primary/Secondary** - Uses Shopify font picker fonts
- **Adobe Heading/Body/Display/Accent** - Uses your configured Adobe fonts
- **Shopify Font Picker** - Choose from Shopify's library
- **Custom Font** - Enter any font family manually

### **Benefits**
✅ Mix Adobe and Shopify fonts seamlessly  
✅ Global font management from theme settings  
✅ Proper fallback fonts for performance  
✅ Clean, organized typography system  

---

## ✨ Highlight Image Overlay

### **What It Does**
Adds a decorative image that overlays your hero section with advanced positioning and effects.

### **Settings Available**

#### **🖼️ Image & Basic Settings**
- **Highlight Image** - Choose your decorative image
- **Image Size** - Enter with units (300px, 15vh, 20vw, 25%, etc.)
- **Image Opacity** - 0-100% transparency

#### **📍 Positioning**
- **Horizontal Alignment** - Left, Center, Right
- **Vertical Alignment** - Top, Center, Bottom
- **Horizontal Offset** - Fine-tune position (0px, 5%, 2rem, etc.)
- **Vertical Offset** - Move up/down from base position

#### **🎨 Visual Effects**
- **Blend Mode** - All 16 CSS blend modes available
- **Rotation** - -180° to +180° rotation
- **Layer Order** - Z-index control (1-10)

#### **📱 Responsive Behavior**
- **Mobile** - Automatically scales to 70% of desktop size
- **Small Mobile** - Scales to 50% of desktop size
- **Maintains aspect ratio** and positioning

### **Creative Use Cases**

#### **🌟 Decorative Elements**
- **Floating shapes** or geometric patterns
- **Brand logos** or watermarks
- **Decorative borders** or frames

#### **🎯 Product Highlights**
- **Product silhouettes** with blend modes
- **Hero product images** with transparency
- **Badge or seal overlays**

#### **🎨 Artistic Effects**
- **Texture overlays** with blend modes
- **Color splash effects** using Color or Hue blend modes
- **Vintage film grain** with Overlay blend mode

### **Pro Tips**

#### **Positioning Combinations**
- **Top Right + Offset** - Perfect for badges/seals
- **Center + Rotation** - Dynamic diagonal elements
- **Bottom Left + Blend Mode** - Subtle texture overlays

#### **Blend Mode Suggestions**
- **Multiply** - Dark decorative elements
- **Screen** - Light, airy overlays
- **Overlay** - Enhanced contrast effects
- **Soft Light** - Natural, subtle integration

#### **Size Guidelines**
- **Large screens** - 300px to 500px works well
- **Use viewport units** - 15vh, 20vw for responsive scaling
- **Test mobile** - Ensure readability isn't affected

---

## 🚀 Quick Setup Examples

### **Adobe Font Setup**
```
Adobe Heading Font: proxima-nova, 'Helvetica Neue', Arial, sans-serif
Adobe Body Font: source-sans-pro, Georgia, serif
Adobe Display Font: futura-pt, Impact, sans-serif
Adobe Accent Font: bebas-neue, 'Arial Black', sans-serif
```

### **Highlight Image Examples**
```
Decorative Badge (Top Right):
- Size: 150px
- Position: Right, Top
- Offset: 20px, 20px
- Blend: Normal
- Opacity: 90%

Artistic Overlay (Center):
- Size: 80vh
- Position: Center, Center
- Rotation: 15°
- Blend: Soft Light
- Opacity: 30%
```

This enhanced system gives you complete creative control over typography and visual overlays while maintaining performance and accessibility standards!