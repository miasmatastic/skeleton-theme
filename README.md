# PJM Skeleton Plus Theme<h1 align="center" style="position: relative;">

  <br>

**Pure Junk Media's Enhanced Shopify Theme Development Framework**    <img src="./assets/shoppy-x-ray.svg" alt="logo" width="200">

  <br>

Built on Shopify's official Skeleton theme foundation  Shopify Skeleton Theme

</h1>

[Getting started](#getting-started) |

[Custom features](#custom-features) |A minimal, carefully structured Shopify theme designed to help you quickly get started. Designed with modularity, maintainability, and Shopify's best practices in mind.

[Migration status](#migration-status) |

[Developer tools](#developer-tools) |<p align="center">

[License](#license)  <a href="./LICENSE.md"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License"></a>

  <a href="./actions/workflows/ci.yml"><img alt="CI" src="https://github.com/Shopify/skeleton-theme/actions/workflows/ci.yml/badge.svg"></a>

This is Pure Junk Media's enhanced Shopify theme built on the official Skeleton theme foundation. Unlike our previous Horizon-based theme, this version is **Theme Store eligible** and provides a cleaner, more maintainable foundation while preserving all our custom functionality.</p>



## Overview## Getting started



PJM Skeleton Plus extends the minimal Skeleton theme with our proven enhancements from the Horizon-based version. This migration ensures long-term compatibility and Theme Store eligibility while maintaining all advanced features.### Prerequisites



## Migration StatusBefore starting, ensure you have the latest Shopify CLI installed:



**🚀 Phase 1: Core Components** *(In Progress)*- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) – helps you download, upload, preview themes, and streamline your workflows



- ✅ **Dynamic Product Grid Section** - Fully migrated with all 4 presetsIf you use VS Code:

  - Conversion Spotlight preset

  - Cinematic Carousel preset- [Shopify Liquid VS Code Extension](https://shopify.dev/docs/storefronts/themes/tools/shopify-liquid-vscode) – provides syntax highlighting, linting, inline documentation, and auto-completion specifically designed for Liquid templates

  - Editorial Focus preset

  - Essential Showcase preset### Clone

- ✅ **Supporting Snippets** - Core dependencies migrated

  - card-product-dynamic.liquidClone this repository using Git or Shopify CLI:

  - spacing-style.liquid

  - gap-style.liquid```bash

  - price.liquidgit clone git@github.com:Shopify/skeleton-theme.git

# or

**📋 Phase 2: Planned Components**shopify theme init

```

- ⏳ Enhanced Header System

- ⏳ Collection List Enhancements  ### Preview

- ⏳ Custom Showcase Section

- ⏳ Dismissible Announcement BannerPreview this theme using Shopify CLI:

- ⏳ Adobe Fonts Integration

- ⏳ Custom Collection Tabs```bash

shopify theme dev

## Custom Features```



### 🎯 **Dynamic Product Grid Section** ✅ **MIGRATED**## Theme architecture

**File:** `sections/dynamic-product-grid.liquid` + `snippets/card-product-dynamic.liquid`

```bash

A versatile, high-conversion product display section with four preset layouts:.

├── assets          # Stores static assets (CSS, JS, images, fonts, etc.)

- **Conversion Spotlight**: 3-column layout with prominent badges and quick-add functionality├── blocks          # Reusable, nestable, customizable UI components

- **Cinematic Carousel**: 4-column full-bleed images with minimal UI elements├── config          # Global theme settings and customization options

- **Editorial Focus**: 2-column minimal layout for curated collections├── layout          # Top-level wrappers for pages (layout templates)

- **Essential Showcase**: 3-column with quick-add overlays directly on product images├── locales         # Translation files for theme internationalization

├── sections        # Modular full-width page components

**Key Features:**├── snippets        # Reusable Liquid code or HTML fragments

- Custom badge system (up to 3 badges per product with configurable colors)└── templates       # Templates combining sections to define page structures

- AJAX quick-add functionality with smart variant handling```

- Responsive carousel with touch/swipe support

- Advanced hover effects including secondary image displayTo learn more, refer to the [theme architecture documentation](https://shopify.dev/docs/storefronts/themes/architecture).

- Color swatch display for variant options

- Mobile-optimized layouts with always-visible CTAs### Templates

- Full accessibility support and reduced motion preferences

[Templates](https://shopify.dev/docs/storefronts/themes/architecture/templates#template-types) control what's rendered on each type of page in a theme.

## Benefits of Skeleton Foundation

The Skeleton Theme scaffolds [JSON templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/json-templates) to make it easy for merchants to customize their store.

**vs. Horizon-based version:**

None of the template types are required, and not all of them are included in the Skeleton Theme. Refer to the [template types reference](https://shopify.dev/docs/storefronts/themes/architecture/templates#template-types) for a full list.

- ✅ **Theme Store Eligible** - Can be submitted to Shopify Theme Store

- ✅ **Cleaner Codebase** - Minimal foundation, easier to maintain### Sections

- ✅ **Better Performance** - Smaller base theme, faster loading

- ✅ **Enhanced Compatibility** - Official Shopify foundation ensures better app compatibility[Sections](https://shopify.dev/docs/storefronts/themes/architecture/sections) are Liquid files that allow you to create reusable modules of content that can be customized by merchants. They can also include blocks which allow merchants to add, remove, and reorder content within a section.

- ✅ **Future-Proof** - Official theme receives ongoing Shopify support

- ✅ **Industry Standard** - Built on the recommended starting point for custom themesSections are made customizable by including a `{% schema %}` in the body. For more information, refer to the [section schema documentation](https://shopify.dev/docs/storefronts/themes/architecture/sections/section-schema).



## Getting started### Blocks



This theme requires Shopify CLI and basic knowledge of Liquid templating.[Blocks](https://shopify.dev/docs/storefronts/themes/architecture/blocks) let developers create flexible layouts by breaking down sections into smaller, reusable pieces of Liquid. Each block has its own set of settings, and can be added, removed, and reordered within a section.



### PrerequisitesBlocks are made customizable by including a `{% schema %}` in the body. For more information, refer to the [block schema documentation](https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/schema).



- Shopify CLI## Schemas

- Git

- Understanding of Shopify theme developmentWhen developing components defined by schema settings, we recommend these guidelines to simplify your code:

- Node.js (for build tools if needed)

- **Single property settings**: For settings that correspond to a single CSS property, use CSS variables:

### Installation

  ```liquid

1. Clone this repository to your local machine  <div class="collection" style="--gap: {{ block.settings.gap }}px">

2. Navigate to the theme directory    ...

3. Use Shopify CLI to connect to your development store  </div>

4. Deploy and test the enhanced features

  {% stylesheet %}

```bash    .collection {

shopify theme dev      gap: var(--gap);

```    }

  {% endstylesheet %}

### Development Workflow

  {% schema %}

```bash  {

# Start development server    "settings": [{

shopify theme dev      "type": "range",

      "label": "gap",

# Deploy to staging      "id": "gap",

shopify theme push --store your-dev-store.myshopify.com      "min": 0,

      "max": 100,

# Pull changes from live theme      "unit": "px",

shopify theme pull      "default": 0,

```    }]

  }

## Migration Progress  {% endschema %}

  ```

**Completed:**

- ✅ Repository setup and Skeleton foundation- **Multiple property settings**: For settings that control multiple CSS properties, use CSS classes:

- ✅ Dynamic Product Grid section (full feature parity)

- ✅ Supporting snippet infrastructure  ```liquid

- ✅ Documentation foundation  <div class="collection {{ block.settings.layout }}">

    ...

**Next Steps:**  </div>

1. Adobe Fonts integration in layout/theme.liquid

2. Enhanced header system migration  {% stylesheet %}

3. Collection list enhancements    .collection--full-width {

4. Dismissible announcement functionality      /* multiple styles */

5. Custom showcase section    }

6. Collection tabs system    .collection--narrow {

      /* multiple styles */

**Timeline:** Expected completion within 1-2 weeks for full feature parity.    }

  {% endstylesheet %}

## Developer Features

  {% schema %}

### Enhanced Customization System  {

    "settings": [{

**CSS Variables Integration:** All custom sections utilize CSS variables for dynamic styling, enabling:      "type": "select",

- Real-time customization through Shopify admin      "id": "layout",

- Consistent theming across components      "label": "layout",

- Responsive scaling and adaptation      "values": [

- Easy maintenance and updates        { "value": "collection--full-width", "label": "t:options.full" },

        { "value": "collection--narrow", "label": "t:options.narrow" }

**JavaScript Enhancement:** Modern JavaScript implementation featuring:      ]

- Custom elements for interactive components    }]

- Event-driven architecture  }

- Local storage for user preferences  {% endschema %}

- Touch/swipe support for mobile  ```

- Accessibility-first design

## CSS & JavaScript

**Liquid Architecture:** Advanced Liquid templating including:

- Modular snippet systemFor CSS and JavaScript, we recommend using the [`{% stylesheet %}`](https://shopify.dev/docs/api/liquid/tags#stylesheet) and [`{% javascript %}`](https://shopify.dev/docs/api/liquid/tags/javascript) tags. They can be included multiple times, but the code will only appear once.

- Conditional feature rendering

- Dynamic preset application### `critical.css`

- Schema-driven customization

The Skeleton Theme explicitly separates essential CSS necessary for every page into a dedicated `critical.css` file.

### Performance Optimization

## Contributing

- **Lazy Loading**: Optimized image loading with responsive srcsets

- **Progressive Enhancement**: Features degrade gracefullyWe're excited for your contributions to the Skeleton Theme! This repository aims to remain as lean, lightweight, and fundamental as possible, and we kindly ask your contributions to align with this intention.

- **Mobile-First**: Responsive design prioritizes mobile experience

- **Minimal JavaScript**: Essential functionality onlyVisit our [CONTRIBUTING.md](./CONTRIBUTING.md) for a detailed overview of our process, guidelines, and recommendations.

- **CSS Variables**: Dynamic styling without inline styles

## License

## File Structure

Skeleton Theme is open-sourced under the [MIT](./LICENSE.md) License.

```
PJM-skeleton-plus-theme/
├── sections/
│   ├── dynamic-product-grid.liquid     ✅ Migrated
│   └── [other skeleton sections]       ⏳ Core Skeleton
├── snippets/
│   ├── card-product-dynamic.liquid     ✅ Migrated
│   ├── spacing-style.liquid            ✅ Migrated  
│   ├── gap-style.liquid                ✅ Migrated
│   ├── price.liquid                    ✅ Migrated
│   └── [other snippets]                ⏳ Core/Enhanced
├── layout/
│   └── theme.liquid                    ⏳ To be enhanced
├── assets/
│   └── [Enhanced CSS and JS files]     ⏳ To be added
└── README.md                           ✅ This documentation
```

## Contributing

This is Pure Junk Media's internal development framework. All contributions are managed internally.

**⚠️ PowerShell Note:** When using git commands in Windows PowerShell, use `Select-Object -First` instead of `head`:

```powershell
# ✅ Correct for PowerShell
git log --oneline | Select-Object -First 10

# ❌ Don't use (Unix command)
git log --oneline | head -10
```

## Support & Maintenance

For internal Pure Junk Media team members:
- Report issues through internal ticketing system
- Feature requests should be discussed with development team
- Emergency fixes follow standard deployment procedures

## License

**Skeleton Base:** Copyright (c) 2023-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.

**PJM Enhancements:** Pure Junk Media proprietary enhancements for internal use.

---

**Built with ❤️ by Pure Junk Media Development Team**
**Migration from Horizon to Skeleton - Phase 1 Complete** ✅