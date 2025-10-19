# 📦 Custom Blocks Index - PJM Skeleton Plus Theme

Complete catalog of all custom blocks, their attributes, and implementation details.

**Last Updated:** October 19, 2025  
**Theme Version:** 0.02 Pre-Alpha  
**Total Blocks:** 17 (7 theme blocks + 10 universal blocks)

---

## 🎯 Block Categories

### 1. Theme Blocks (Root `/blocks/`)
Native Shopify theme blocks available in sections that support `@theme` blocks.

### 2. Universal Container Blocks (Organized `/blocks/`)
Specialized blocks for use within the Universal Container section, rendered via snippets.

---

## 📋 Theme Blocks (Root `/blocks/`)

### 🔘 Button Block
**File:** `blocks/button.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Simple button component for theme sections  

**Key Attributes:**
- `button_text` (text) - Button label
- `button_url` (url) - Link destination
- `button_style` (select) - primary, secondary, outline
- `button_size` (select) - small, medium, large
- `open_in_new_tab` (checkbox) - Target new window

**Usage:** Available in sections supporting `"blocks": [{ "type": "@theme" }]`

---

### 👥 Group Block
**File:** `blocks/group.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Container block for nesting other theme blocks  

**Key Attributes:**
- Accepts nested `@theme` blocks
- Provides grouping and organization

**Usage:** Container for organizing multiple theme blocks

---

### ⭐ Icon Block
**File:** `blocks/icon.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Display icons in theme sections  

**Key Attributes:**
- `icon_name` (text) - Icon identifier
- `icon_size` (range) - Icon dimensions
- `icon_color` (color) - Icon color

**Usage:** Decorative icons for features, benefits, social links

---

### 🖼️ Image Block (Theme)
**File:** `blocks/image.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Simple image display for theme sections  

**Key Attributes:**
- `image` (image_picker) - Image source
- `image_alt` (text) - Alt text for accessibility
- `image_width` (range) - Display width

**Usage:** Basic image display in theme sections

---

### 📏 Spacer Block (Theme)
**File:** `blocks/spacer.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Add vertical spacing in theme sections  

**Key Attributes:**
- `height` (range) - Spacer height in pixels
- `height_mobile` (range) - Mobile-specific height

**Usage:** Create vertical spacing between elements

---

### 📝 Text Block (Theme)
**File:** `blocks/text.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Display text content in theme sections  

**Key Attributes:**
- `text` (text) - Text content
- `text_style` (select) - title, subtitle, normal
- `type_preset` (select) - Typography preset (h1-h6, body)
- `alignment` (select) - left, center, right

**Usage:** Text content with basic styling options

---

### 🎬 Video Block (Theme)
**File:** `blocks/video.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Embed videos in theme sections  

**Key Attributes:**
- `video_url` (url) - YouTube or Vimeo URL
- `video_file` (file) - Direct video upload
- `video_width` (range) - Display width
- `autoplay` (checkbox) - Auto-play video

**Usage:** Video content in theme sections

---

## 🎨 Universal Container Blocks

### Content Blocks (`/blocks/content/`)

#### 📰 Heading Block
**File:** `blocks/content/heading-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** SEO-optimized headings with advanced typography controls  

**Key Attributes:**
- `heading` (text) - Heading text
- `subheading` (text) - Optional subtitle
- `heading_level` (select) - h1-h6 for SEO
- `heading_size` (select) - Visual size (auto, small, medium, large, xl, 2xl, 3xl)
- `heading_align` (select) - left, center, right
- `font_family` (select) - primary, secondary, adobe-heading, adobe-display
- `heading_weight` (select) - light, normal, medium, semibold, bold, extrabold
- `heading_color` (color) - Custom color
- `text_transform` (select) - none, uppercase, lowercase, capitalize
- `letter_spacing` (select) - normal, tight, wide, extra-wide
- `line_height` (select) - 1.0, 1.2, 1.4, 1.6
- `animation_type` (select) - none, fade-in, slide-up, slide-left, typewriter

**Features:**
- Semantic HTML structure for SEO
- Independent visual size from heading level
- Advanced typography controls
- Animation support
- Accessibility compliant

**Usage:** Headers and titles within Universal Container

---

#### 🖼️ Image Block (Universal)
**File:** `blocks/content/image-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Responsive images with advanced controls  

**Key Attributes:**
- `image` (image_picker) - Image source
- `image_alt` (text) - Alt text
- `image_size` (select) - small, medium, large, full
- `aspect_ratio` (select) - auto, square, 16:9, 4:3, 3:2, 21:9
- `image_position` (select) - left, center, right
- `image_border_radius` (range) - 0-50px
- `enable_lightbox` (checkbox) - Click to enlarge
- `caption` (text) - Image caption
- `caption_position` (select) - below, overlay
- `link_url` (url) - Make image clickable
- `animation_type` (select) - none, fade-in, zoom-in, slide-up

**Features:**
- Responsive images with srcset
- Multiple aspect ratios
- Lightbox functionality
- Caption support
- Click-through links

**Usage:** Images within Universal Container layouts

---

#### 📝 Text Block (Universal)
**File:** `blocks/content/text-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Rich text content with typography controls  

**Key Attributes:**
- `content` (richtext) - Rich text content
- `text_size` (select) - small, medium, large, xl, 2xl
- `text_weight` (select) - light, normal, medium, semibold, bold
- `text_align` (select) - left, center, right, justify
- `text_color` (color) - Custom text color
- `max_width` (text) - Maximum width constraint
- `animation_type` (select) - none, fade-in, slide-up, slide-left, scale-in

**Features:**
- HTML support in content
- Typography controls
- Max width for readability
- Text alignment
- Animation support

**Usage:** Body text and paragraphs in Universal Container

---

#### ✨ Text Plus Block
**File:** `blocks/content/text-plus.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Enhanced text block with advanced formatting  

**Key Attributes:**
- Enhanced text formatting options
- Additional styling controls
- Extended typography features

**Features:**
- Advanced text formatting
- Extended style options
- Premium typography controls

**Usage:** Advanced text content requiring extra formatting

---

#### 🎬 Video Block (Universal)
**File:** `blocks/content/video-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Multi-source video support with controls  

**Key Attributes:**
- `video_source` (select) - url, upload, youtube, vimeo
- `video_url` (url) - Video URL
- `video_file` (file) - Direct upload
- `youtube_id` (text) - YouTube video ID
- `vimeo_id` (text) - Vimeo video ID
- `video_size` (select) - small, medium, large, full
- `aspect_ratio` (select) - 16:9, 4:3, 21:9, 1:1
- `autoplay` (checkbox) - Auto-play video
- `muted` (checkbox) - Mute by default
- `loop` (checkbox) - Loop video
- `controls` (checkbox) - Show controls
- `thumbnail` (image_picker) - Custom thumbnail
- `animation_type` (select) - none, fade-in, zoom-in

**Features:**
- Multiple video sources
- Responsive embedding
- Full playback controls
- Custom thumbnails
- Performance optimized

**Usage:** Video content in Universal Container

---

### Layout Blocks (`/blocks/layout/`)

#### 📏 Spacer Block (Universal)
**File:** `blocks/layout/spacer-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Responsive spacing control with visual indicators  

**Key Attributes:**
- `spacer_height_desktop` (range) - Desktop height (0-200px)
- `spacer_height_tablet` (range) - Tablet height (0-150px)
- `spacer_height_mobile` (range) - Mobile height (0-100px)
- `show_divider` (checkbox) - Display divider line
- `divider_style` (select) - solid, dashed, dotted
- `divider_color` (color) - Divider color
- `divider_width` (range) - Divider thickness
- `divider_text` (text) - Optional divider text

**Features:**
- Responsive spacing for all devices
- Optional visual dividers
- Divider text labels
- Design mode indicators

**Usage:** Vertical spacing and visual separation

---

### Interactive Blocks (`/blocks/interactive/`)

#### 🔘 Button Block (Universal)
**File:** `blocks/interactive/button-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Advanced button with extensive styling options  

**Key Attributes:**
- `button_text` (text) - Button label
- `button_url` (url) - Link destination
- `button_style` (select) - primary, secondary, outline, ghost, link
- `button_size` (select) - small, medium, large, xl
- `button_width` (select) - auto, full, half
- `button_alignment` (select) - left, center, right
- `icon_name` (text) - Optional icon
- `icon_position` (select) - left, right
- `open_in_new_tab` (checkbox) - Open in new window
- `custom_color` (color) - Custom background
- `custom_text_color` (color) - Custom text color
- `animation_type` (select) - none, pulse, bounce, shake

**Features:**
- Multiple button styles
- Icon support with positioning
- Full width options
- Custom colors
- Animation effects
- Accessibility compliant

**Usage:** Call-to-action buttons in Universal Container

---

#### 🙋 FAQ Schema Block
**File:** `blocks/interactive/faq-schema-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Interactive FAQ with auto-generated schema markup  

**Key Attributes:**
- `block_title` (text) - FAQ section title
- `block_description` (text) - Section description
- `accordion_style` (select) - modern, minimal, card
- `show_icons` (checkbox) - Show expand/collapse icons
- `open_first` (checkbox) - First item open by default
- `allow_multiple` (checkbox) - Multiple items open
- `animation_speed` (select) - fast, normal, slow
- `faq_question_1` through `faq_question_20` (text) - Questions
- `faq_answer_1` through `faq_answer_20` (richtext) - Answers

**Features:**
- Support for 20 FAQ pairs
- Interactive accordion interface
- Auto-generated FAQPage schema
- Multiple visual styles
- Keyboard navigation
- ARIA compliant
- Rich snippet optimization

**Schema Generated:** FAQPage JSON-LD for enhanced search results

**Usage:** FAQ sections with SEO benefits

---

#### 📍 Location Schema Block
**File:** `blocks/interactive/location-schema-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Business location with LocalBusiness schema  

**Key Attributes:**
- `business_name` (text) - Business name
- `business_type` (select) - Restaurant, Store, Hotel, etc.
- `address_street` (text) - Street address
- `address_city` (text) - City
- `address_state` (text) - State/Province
- `address_zip` (text) - ZIP/Postal code
- `address_country` (text) - Country
- `phone` (text) - Phone number
- `email` (text) - Email address
- `website` (url) - Website URL
- `google_maps_embed` (textarea) - Google Maps embed code
- `map_position` (select) - left, right, top
- `business_hours` - Hours for each day of week
- `show_closed_days` (checkbox) - Display closed days

**Features:**
- Complete business information
- Google Maps integration
- Business hours management
- Auto-generated LocalBusiness schema
- Multiple layout options
- Local SEO optimization

**Schema Generated:** LocalBusiness JSON-LD for local search

**Usage:** Location and contact information with SEO

---

### E-commerce Blocks (`/blocks/ecommerce/`)

#### 🛍️ Product Card Block
**File:** `blocks/ecommerce/product-card-block.liquid`  
**Added:** October 16, 2025 (v2.1.0)  
**Purpose:** Display product information with dynamic data  

**Key Attributes:**
- `product` (product_picker) - Select product
- `show_vendor` (checkbox) - Display vendor
- `show_price` (checkbox) - Display price
- `show_compare_price` (checkbox) - Show compare at price
- `show_rating` (checkbox) - Product rating
- `show_quick_add` (checkbox) - Quick add button
- `image_ratio` (select) - square, portrait, landscape
- `show_secondary_image` (checkbox) - Show on hover
- `enable_badges` (checkbox) - Sale/new badges

**Features:**
- Dynamic product data
- Hover effects
- Quick add functionality
- Badge system
- Responsive images
- Price formatting

**Usage:** Product display in Universal Container

---

## 📊 Block Usage Statistics

### By Category
- **Theme Blocks:** 7 blocks
- **Content Blocks:** 5 blocks
- **Layout Blocks:** 1 block
- **Interactive Blocks:** 3 blocks
- **E-commerce Blocks:** 1 block

### Feature Distribution
- **Text Alignment:** 8 blocks (47%)
- **Animation Support:** 7 blocks (41%)
- **Color Customization:** 6 blocks (35%)
- **Responsive Controls:** 10 blocks (59%)
- **SEO Optimization:** 4 blocks (24%)

---

## 🎯 Block Compatibility

### Universal Container Section
**Compatible Blocks:**
- Text Block (Universal)
- Heading Block
- Image Block (Universal)
- Video Block (Universal)
- Spacer Block (Universal)
- Button Block (Universal)
- Product Card Block
- FAQ Schema Block (via accordion renderer)
- Location Schema Block (pending integration)

### Theme Sections with @theme Blocks
**Compatible Blocks:**
- Button Block (Theme)
- Group Block
- Icon Block
- Image Block (Theme)
- Spacer Block (Theme)
- Text Block (Theme)
- Video Block (Theme)

---

## 🔄 Rendering Architecture

### Theme Blocks
- Rendered directly by Shopify
- Use `{{ block.shopify_attributes }}`
- Support block-level settings

### Universal Container Blocks
- Rendered via snippets in `/snippets/`
- Snippet naming: `block-{type}.liquid`
- Support for nested rendering
- Advanced layout integration

---

## 📝 Block Naming Conventions

### Theme Blocks (Root)
- Simple names: `text.liquid`, `button.liquid`
- Follow Shopify conventions
- Translation keys: `t:general.{name}`

### Universal Blocks (Organized)
- Descriptive names: `text-block.liquid`, `heading-block.liquid`
- Organized by category subfolder
- Emoji icons in schema names
- Clear documentation in file headers

---

## 🎨 Styling System

### CSS Organization
- **Theme blocks:** Inline `{% stylesheet %}` tags
- **Universal blocks:** External `universal-blocks.css` (9,168 lines)
- **Typography:** `typography-utilities.css` for text controls
- **SEO blocks:** `seo-schema-blocks.css` for schema blocks

### CSS Variables
All blocks support theme CSS variables:
- `--color-base-text`
- `--color-base-background`
- `--font-family-primary`
- `--font-family-secondary`

---

## ♿ Accessibility Features

### ARIA Support
- All interactive blocks include ARIA attributes
- Keyboard navigation support
- Screen reader optimization

### Reduced Motion
- Respects `prefers-reduced-motion`
- Graceful animation fallbacks
- Accessibility-first design

---

## 🚀 Performance Considerations

### Image Blocks
- Lazy loading by default
- Responsive srcset generation
- Optimal format selection

### Video Blocks
- Deferred loading
- Thumbnail optimization
- Bandwidth-aware playback

### Animation
- CSS-based animations
- Intersection Observer for triggers
- Performance-optimized transitions

---

## 📚 Related Documentation

- **[Universal Blocks Guide](UNIVERSAL-BLOCKS-GUIDE.md)** - Detailed usage guide
- **[Typography System](TYPOGRAPHY-SYSTEM-GUIDE.md)** - Typography implementation
- **[SEO Blocks](SEO-BLOCKS-IMPLEMENTATION.md)** - Schema markup details
- **[Changelog](CHANGELOG.md)** - Version history

---

**Document Version:** 1.0  
**Last Updated:** October 19, 2025  
**Maintained By:** PJM Development Team
