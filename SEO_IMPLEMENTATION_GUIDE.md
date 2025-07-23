# SEO Implementation Guide

This guide provides instructions for implementing the enhanced SEO components across your Astro website.

## Component Overview

1. **EnhancedSEO.astro** - Core SEO enhancements with structured data
2. **FAQSchema.astro** - FAQ structured data for better search visibility
3. **LocalBusinessSchema.astro** - Location-specific business schema
4. **ArticleSchema.astro** - Blog post and article structured data
5. **TechnicalSEO.astro** - Performance and technical optimizations

## Implementation Examples

### 1. Homepage Implementation

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import EnhancedSEO from '~/components/common/EnhancedSEO.astro';
import FAQSchema from '~/components/common/FAQSchema.astro';

const faqs = [
  {
    question: 'What home health care services do you provide?',
    answer:
      "We provide comprehensive home health care including senior care, Alzheimer's care, post-surgical care, companion care, and live-in care services.",
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Sarasota, Bradenton, Venice, North Port, Fort Myers, Cape Coral, and surrounding areas in Southwest Florida.',
  },
];

const metadata = {
  title: 'Home Health Care Sarasota, FL | RIGHT ACCORD Private Duty Home Health Care',
  ignoreTitleTemplate: true,
  description:
    "RIGHT ACCORD Home Health Care provides compassionate, professional home health services in Sarasota, FL. Senior care, Alzheimer's care, post-surgical care, and more.",
};
---

<Layout metadata={metadata}>
  <EnhancedSEO
    pageType="homepage"
    services={['Senior Care', "Alzheimer's Care", 'Post-Surgical Care', 'Companion Care']}
  />
  <FAQSchema faqs={faqs} />

  <!-- Your page content -->
</Layout>
```

### 2. Location Page Implementation

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import LocalBusinessSchema from '~/components/common/LocalBusinessSchema.astro';
import EnhancedSEO from '~/components/common/EnhancedSEO.astro';

const locationData = {
  city: 'Sarasota',
  state: 'FL',
  county: 'Sarasota County',
  address: '1541 S Tuttle Ave',
  phone: '(941) 366-0801',
  coordinates: {
    latitude: 27.270490288676417,
    longitude: -82.492179,
  },
  servicesOffered: ['Senior Care', "Alzheimer's Care", 'Post-Surgical Care', 'Companion Care'],
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Locations', url: '/about-us/our-locations' },
  { name: 'Sarasota', url: '/locations/sarasota-fl' },
];

const metadata = {
  title: 'Home Health Care Sarasota, FL | RIGHT ACCORD',
  description:
    "Professional home health care services in Sarasota, FL. Compassionate senior care, Alzheimer's care, and post-surgical care from RIGHT ACCORD.",
};
---

<Layout metadata={metadata}>
  <LocalBusinessSchema locationData={locationData} />
  <EnhancedSEO
    pageType="location"
    breadcrumbs={breadcrumbs}
    location={{ city: locationData.city, state: locationData.state }}
  />

  <!-- Your page content -->
</Layout>
```

### 3. Blog Post Implementation

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import ArticleSchema from '~/components/common/ArticleSchema.astro';
import EnhancedSEO from '~/components/common/EnhancedSEO.astro';

const { post } = Astro.props;

const article = {
  title: post.title,
  description: post.excerpt,
  publishDate: new Date(post.publishDate),
  modifiedDate: post.modifiedDate ? new Date(post.modifiedDate) : undefined,
  author: post.author || 'RIGHT ACCORD Home Health Care',
  image: post.image,
  url: `https://rightaccordhealth.com/blog/${post.slug}`,
  category: post.category,
  tags: post.tags,
  readingTime: post.readingTime,
};

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: post.title, url: `/blog/${post.slug}` },
];

const metadata = {
  title: post.title,
  description: post.excerpt,
  openGraph: {
    type: 'article',
    images: post.image ? [{ url: post.image }] : undefined,
  },
};
---

<Layout metadata={metadata}>
  <ArticleSchema article={article} />
  <EnhancedSEO pageType="blog" breadcrumbs={breadcrumbs} />

  <!-- Your article content -->
</Layout>
```

### 4. Service Page Implementation

```astro
---
import Layout from '~/layouts/PageLayout.astro';
import EnhancedSEO from '~/components/common/EnhancedSEO.astro';
import FAQSchema from '~/components/common/FAQSchema.astro';

const serviceFaqs = [
  {
    question: 'What is included in hourly care services?',
    answer:
      'Our hourly care includes personal care assistance, companionship, light housekeeping, meal preparation, medication reminders, and transportation to appointments.',
  },
  {
    question: 'Do you provide 24-hour care?',
    answer:
      "Yes, we offer both live-in care and 24-hour rotating care services to meet your loved one's needs around the clock.",
  },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
  { name: 'Hourly Care', url: '/services/hourly-care' },
];

const metadata = {
  title: 'Hourly Care Services | RIGHT ACCORD Home Health',
  description:
    'Flexible hourly home care services in Sarasota, FL. Professional caregivers providing personalized senior care by the hour.',
};
---

<Layout metadata={metadata}>
  <EnhancedSEO
    pageType="service"
    breadcrumbs={breadcrumbs}
    services={['Hourly Care', 'Personal Care', 'Companion Care']}
  />
  <FAQSchema faqs={serviceFaqs} />

  <!-- Your service content -->
</Layout>
```

## SEO Checklist

### Technical SEO ✅

- [x] Sitemap generation enabled
- [x] Robots.txt optimized
- [x] Meta robots directives
- [x] Canonical URLs
- [x] SSL/HTTPS
- [x] Mobile optimization
- [x] Page speed optimization
- [x] Core Web Vitals tracking

### Content SEO ✅

- [x] Title tag optimization
- [x] Meta descriptions
- [x] Header structure (H1, H2, H3)
- [x] Image alt text
- [x] Internal linking
- [x] Content quality and relevance

### Local SEO ✅

- [x] Google Business Profile optimization
- [x] Local business schema
- [x] NAP consistency
- [x] Location pages
- [x] Local keywords
- [x] Service area coverage

### Structured Data ✅

- [x] Organization schema
- [x] LocalBusiness schema
- [x] Service schema
- [x] Article schema
- [x] FAQ schema
- [x] Breadcrumb schema

### Social & Open Graph ✅

- [x] Open Graph tags
- [x] Twitter Cards
- [x] Social media links
- [x] Share buttons

## Performance Optimizations

1. **Image Optimization**

   - Use WebP format when possible
   - Implement lazy loading
   - Optimize image sizes for different devices

2. **Critical CSS**

   - Inline critical CSS
   - Defer non-critical CSS

3. **JavaScript Optimization**

   - Code splitting
   - Lazy load non-critical scripts
   - Use modern JavaScript features

4. **Caching Strategy**
   - Browser caching headers
   - CDN implementation
   - Service worker caching

## Monitoring & Analytics

1. **Google Search Console**

   - Monitor indexing status
   - Track search performance
   - Identify and fix issues

2. **Google Analytics**

   - Track user behavior
   - Monitor conversion goals
   - Analyze traffic sources

3. **Core Web Vitals**
   - Monitor page speed
   - Track user experience metrics
   - Optimize based on data

## Next Steps

1. Implement the enhanced SEO components on key pages
2. Test structured data using Google's Rich Results Test
3. Submit updated sitemap to Google Search Console
4. Monitor performance and rankings
5. Regularly update and optimize content

## Testing URLs

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)
