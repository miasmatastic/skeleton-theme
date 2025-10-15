# Custom Hero Blend Modes Guide

## 🎨 Complete Blend Mode Options

The Custom Hero section now includes ALL CSS mix-blend-mode options for maximum creative control. Here's what each blend mode does:

### **Core Blend Modes**

#### **Normal** (Default)
- Standard overlay behavior
- Overlay sits on top without blending
- Best for: Simple color overlays

#### **Multiply**
- Darkens the image by multiplying colors
- Black becomes black, white becomes the overlay color
- Best for: Dark overlays on bright images, dramatic effects

#### **Screen**
- Lightens the image (opposite of multiply)
- White becomes white, black becomes the overlay color
- Best for: Light overlays on dark images, bright effects

#### **Overlay**
- Combines multiply and screen modes
- Multiplies dark areas, screens light areas
- Best for: Enhanced contrast and saturation

### **Comparative Blend Modes**

#### **Darken**
- Only affects areas lighter than the overlay
- Preserves dark areas of the image
- Best for: Selective darkening effects

#### **Lighten**
- Only affects areas darker than the overlay
- Preserves bright areas of the image
- Best for: Selective brightening effects

### **Contractive Blend Modes**

#### **Color Burn**
- Increases contrast and darkens
- Creates intense, high-contrast effects
- Best for: Bold, striking visuals with deep shadows

#### **Color Dodge**
- Decreases contrast and brightens
- Creates bright, glowing effects
- Best for: Ethereal, dreamy looks with highlights

### **Light Blend Modes**

#### **Hard Light**
- Strong contrast effect
- Similar to overlay but more intense
- Overlays darker than 50% gray multiply, lighter ones screen
- Best for: Bold, high-impact visuals

#### **Soft Light**
- Subtle lighting effect
- Gentle contrast enhancement
- Similar to hard light but much softer
- Best for: Natural, refined looks

### **Inversion Blend Modes**

#### **Difference**
- Subtracts colors, creating inversions
- Creates psychedelic, high-contrast effects
- White inverts completely, black shows original
- Best for: Creative, artistic designs

#### **Exclusion**
- Similar to difference but softer
- Creates muted inversion effects with lower contrast
- Best for: Subtle creative effects

### **Color Component Blend Modes**

#### **Hue**
- Uses hue of overlay, keeps saturation/lightness of background
- Changes color while preserving image details
- Best for: Color tinting while maintaining image contrast

#### **Saturation**
- Uses saturation of overlay, keeps hue/lightness of background
- Controls color intensity without changing colors
- Best for: Boosting or reducing color vibrancy

#### **Color**
- Uses hue and saturation of overlay, lightness of background
- Colorizes while preserving luminosity
- Best for: Colorizing black & white images, dramatic color shifts

#### **Luminosity**
- Uses lightness of overlay, hue/saturation of background
- Controls brightness while preserving colors
- Best for: Brightness adjustments without color shifts

### **Additive Blend Modes** (Limited Browser Support)

#### **Plus Darker**
- Adds color values, capped at 100% (darker result)
- Creates additive darkening effects
- Best for: Experimental dark effects

#### **Plus Lighter**
- Adds color values, can exceed 100% (brighter result)
- Creates additive brightening effects
- Best for: Experimental bright effects

## 💡 Advanced Usage Tips

### **Creative Combinations**
1. **Hue + Low Opacity** - Subtle color tinting
2. **Color Burn + Dark Overlay** - Dramatic shadows
3. **Color Dodge + Light Overlay** - Ethereal glows
4. **Luminosity + Gradient** - Professional brightness control
5. **Saturation + Colored Overlay** - Vintage film effects

### **Professional Techniques**
- **Multiply with Blues** - Classic cinematic look
- **Screen with Oranges** - Warm, inviting feel
- **Overlay with Purples** - Luxury, premium feel
- **Color with Sepia** - Vintage, nostalgic mood
- **Soft Light with Whites** - Clean, minimal aesthetic

### **Responsive Considerations**
- Test blend modes on both desktop and mobile images
- Some effects work better with high-contrast images
- Consider readability of text over blended backgrounds

## 🎯 Quick Reference

**For Drama:** Multiply, Color Burn, Hard Light  
**For Softness:** Soft Light, Screen, Lighten  
**For Creativity:** Difference, Exclusion, Hue  
**For Professional:** Overlay, Luminosity, Color  
**For Vintage:** Color + Sepia, Saturation adjustments  

## 🔧 Browser Support
- **Full Support:** Normal, Multiply, Screen, Overlay, Darken, Lighten, Color-dodge, Color-burn, Hard-light, Soft-light, Difference, Exclusion
- **Good Support:** Hue, Saturation, Color, Luminosity  
- **Limited Support:** Plus-darker, Plus-lighter (newer browsers only)

Experiment with different combinations of blend modes, overlay colors, and opacity levels to create unique visual effects that match your brand aesthetic!