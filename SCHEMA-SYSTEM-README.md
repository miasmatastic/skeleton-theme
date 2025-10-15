# 🏷️ Schema/JSON-LD System Documentation

## Overview
This theme includes a comprehensive Schema.org structured data system that improves SEO and enables rich snippets in search results.

## 📁 File Structure

### Master Configuration
- `snippets/schema-config.liquid` - **EDIT THIS FILE** for all your business details

### Schema Generators  
- `snippets/schema-organization.liquid` - Business/organization data
- `snippets/schema-product.liquid` - Product page schema
- `snippets/schema-collection.liquid` - Collection page schema
- `snippets/schema-website.liquid` - Website and search functionality
- `snippets/schema-breadcrumbs.liquid` - Navigation breadcrumbs

## 🔧 Configuration

### 1. Edit Master Configuration
Open `snippets/schema-config.liquid` and update:

```liquid
🏢 BUSINESS INFORMATION
assign schema_business_name = 'Your Actual Business Name'
assign schema_business_legal_name = 'Your Legal Business Name LLC'
assign schema_business_description = 'Your SEO-optimized business description'

📍 LOCATION & ADDRESS  
assign schema_street_address = '123 Your Real Street'
assign schema_address_locality = 'Your City'
assign schema_postal_code = 'Your ZIP'

📞 CONTACT INFORMATION
assign schema_phone = '+1-555-YOUR-PHONE'
assign schema_email = 'your-real-email@business.com'

🌐 SOCIAL MEDIA
assign schema_facebook_url = 'https://www.facebook.com/yourbusiness'
assign schema_instagram_url = 'https://www.instagram.com/yourbusiness'
```

### 2. Logo and Images
Add these files to your assets folder:
- `logo.webp` (400x400px recommended)
- `default-image.webp` (1200x630px recommended)

### 3. Business Hours
Update the operating hours in schema-config.liquid:
```liquid
assign schema_monday_hours = '09:00-17:00'
assign schema_tuesday_hours = '09:00-17:00'
assign schema_sunday_hours = 'closed'
```

## 🎯 What This Enables

### Rich Search Results
- ⭐ Product ratings and prices in search
- 🏢 Business information panels
- 📍 Local business listings
- 🔍 Sitelinks search box
- 🧭 Breadcrumb navigation

### SEO Benefits
- Better search engine understanding
- Enhanced click-through rates
- Improved local SEO
- Product rich snippets
- Knowledge graph integration

## 🔄 Schema Types Generated

### Organization Schema
```json
{
  "@type": "Organization",
  "name": "Your Business",
  "address": {...},
  "contactPoint": {...},
  "sameAs": [social media URLs]
}
```

### Product Schema  
```json
{
  "@type": "Product",
  "name": "Product Name",
  "offers": {...},
  "brand": {...},
  "aggregateRating": {...}
}
```

### Collection Schema
```json
{
  "@type": "CollectionPage",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [products...]
  }
}
```

### Website Schema
```json
{
  "@type": "WebSite", 
  "potentialAction": {
    "@type": "SearchAction",
    "target": "search URL template"
  }
}
```

## 🧪 Testing Your Schema

### Google Tools
1. **Rich Results Test**: https://search.google.com/test/rich-results
2. **Structured Data Testing**: https://validator.schema.org/
3. **Search Console**: Monitor rich snippet performance

### Testing Process
1. Configure your business details in `schema-config.liquid`
2. Deploy to your live store
3. Test product pages with Google's Rich Results Test
4. Verify organization data appears correctly
5. Check breadcrumbs on collection/product pages

## 🚀 Advanced Features

### Review Integration
The product schema automatically detects review metafields:
```liquid
{% if product.metafields.reviews.rating != blank %}
"aggregateRating": {
  "@type": "AggregateRating", 
  "ratingValue": "{{ product.metafields.reviews.rating }}"
}
{% endif %}
```

### Multiple Variants
Automatically generates schema for product variants with individual pricing and availability.

### Related Products
Includes related product suggestions in product schema for enhanced discovery.

### WebP Image Support
All image references use `.webp` format for optimal performance:
- Faster loading times
- Better compression than JPEG/PNG
- Supported by all modern browsers

## 📈 Performance Impact

- **Minimal**: Schema adds ~2-4KB per page
- **Efficient**: Cached by browsers and CDN
- **Fast**: No external API calls
- **Smart**: Only loads relevant schema per page type
- **Optimized**: WebP images for faster loading

## 🔧 Troubleshooting

### Common Issues
1. **Business hours not showing**: Check 24-hour format (09:00-17:00)
2. **Images not loading**: Verify logo.webp and default-image.webp exist in assets
3. **Social links broken**: Ensure full URLs with https://
4. **Rich snippets not appearing**: Allow 2-4 weeks for Google indexing

### Validation Errors
Use Schema.org validator to check for:
- Missing required properties
- Invalid date formats  
- Incorrect URL structures
- Malformed JSON syntax

## 🎨 Customization

### Adding New Schema Types
1. Create new snippet: `snippets/schema-[type].liquid`
2. Follow existing pattern with schema-config integration
3. Add to appropriate templates
4. Test with validation tools

### Business Type Customization
Update `schema_business_type` in config for specialized businesses:
- `LocalBusiness` - Physical stores
- `OnlineStore` - E-commerce only
- `ClothingStore` - Fashion retailers
- `AutoDealer` - Car dealerships

## 📊 Schema Coverage

### ✅ Implemented
- **Organization/Business** - Complete business information
- **Products** - Individual product pages with variants
- **Collections** - Product listing pages  
- **Website** - Site structure and search
- **Breadcrumbs** - Navigation hierarchy

### 🔄 Available Extensions
- **Articles/Blog** - Blog post schema
- **Reviews** - Customer review aggregation
- **Events** - Store events and promotions
- **Local Business** - Enhanced location data
- **FAQ** - Frequently asked questions

## 📞 Support

For schema-related questions:
1. Check Google's Structured Data Guidelines
2. Consult Schema.org documentation  
3. Use Google Search Console for monitoring
4. Contact Pure Junk Media for custom schema needs

## 🔍 Quick Reference

### File Locations
```
snippets/
├── schema-config.liquid      (EDIT THIS - Master config)
├── schema-organization.liquid (Business details)
├── schema-product.liquid     (Product pages)
├── schema-collection.liquid  (Collection pages)
├── schema-website.liquid     (Site structure)
└── schema-breadcrumbs.liquid (Navigation)

assets/
├── logo.webp               (400x400px business logo)
└── default-image.webp      (1200x630px default image)
```

### Testing URLs
- Rich Results Test: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/
- Search Console: https://search.google.com/search-console

---

**✅ Your theme now has enterprise-level schema markup for maximum SEO performance!**

This system provides:
- 🎯 **Better Search Rankings** - Structured data helps Google understand your content
- ⭐ **Rich Snippets** - Enhanced search results with ratings, prices, and business info
- 📍 **Local SEO** - Improved visibility for location-based searches
- 🔍 **Enhanced Discovery** - Sitelinks and knowledge panels
- 📱 **Mobile Optimization** - WebP images for faster mobile loading