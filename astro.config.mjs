import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import tasks from './src/utils/tasks';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';

import { ANALYTICS, SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'static',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  redirects: {
    "/manatee": "/about-us/sarasota",
    "/services" : "/services/hourly-care",
    "/testimonials" : "/about-us/testimonials",
    "/caregivers" : "/caregivers/application-for-employment",
    "family-services" : "/family-services/getting-started",
    "contact-us" : "/contact",
    "about-us" : "/about-us/about-right-accord",
    "specialty-care" : "/specialty-care/alzheimers-dementia-care",
    "privacy-policy" : "/privacy",
    "/family-services/faq" : "/family-services/frequently-asked-questions",
    "/sitemap" : "/about-us/why-choose-right-accord",
    "/caregivers/continuing-education" : "/caregivers/application-for-employment",
    "/about-us/about-homecare" : "/about-us/about-right-accord",
    // "/blog/[...slug]": "/[...slug],"
    // below are addresses found on google search console
    "/blog/2020/april/start-a-caregiver-agency-business" : "/blog/start-a-caregiver-agency-business",
    "/blog/2020/may/7-ways-to-pay-your-senior-care" : "/blog/7-ways-to-pay-your-senior-care",
    "/blog/2019/october/malnutrition-among-elderly" : "/blog/malnutrition-among-elderly.html",
    "/blog/2020/april/covid-19-treatment-and-the-elderly" : "/blog/covid-19-treatment-and-the-elderly.html",
    "/blog/2020/april/5-crucial-senior-home-care-options" : "/blog/5-crucial-senior-home-care-options.html",
    "/blog/2020/march/home-care-after-surgery" : "/blog/home-care-after-surgery.html",
    "/blog/2019/september/caregiver-stress-burnout" : "/blog/caregiver-stress-burnout.html",
    "/blog/2020/january/dementia-and-alzheimers-disease" : "/blog/dementia-and-alzheimers-disease",
    "/blog/2020/june/5-senior-home-caregiving-tips" : "/blog/5-senior-home-caregiving-tips.html",
    "/blog/2019/october/sleep-disorders-elderly" : "/blog/sleep-disorders-elderly",
    "/blog/2020/march/covid-19-and-elderly-faq" : "blog/covid-19-and-elderly-faq",
    "/blog/2019/november/beat-holiday-stress" : "/blog/beat-holiday-stress",
    "/blog/2020/january/COVID-19-and-the-elderly" : "/blog/COVID-19-and-the-elderly" ,
    "/services/senior-facility-relocation" : "/services/senior-care-advisors", 
    "/specialty-care/after-stroke-care" : "/specialty-care/after-stroke-in-home-care",
    "long-term-care-insurance" : "/services/long-term-care-insurance",
    "/blog/2020/february/home-care-and-home-health-care" : "/blog/home-care-and-home-health-care",
    "/services/live-in-homecare" : "/services/home-care-packages",
    "/family-services/family-caregiver" : "/family-services/frequently-asked-questions",
    "/specialty-care/parkinson-disease-care" : "/specialty-care/parkinsons-disease-care",
    "/family-services/community-care" : "/family-services/community-care-resources",
    "/blog/2020/march/elderly-driving-guide" : "/blog/elderly-driving-guide",
    "/blog/2019/august/aging-parent-needs" : "/blog/aging-parent-needs",
    "/services/veteran-aid" : "/services/veteran-aid-attendant-benefits",
    "/blog/2019/december/dealing-with-grief" : "/blog/dealing-with-grief",
    "services/long-term-care" : "/services/long-term-care-insurance",
    "/specialty-care/hospice-care" : "/specialty-care/hospice-end-of-life-care",
    "/specialty-care/post-surgical-care" : "/specialty-care/post-surgical-recovery-and-rehabilitation-care",
    "/blog/2020/march/senior-home-health-care-for-parent" : "/blog/senior-home-health-care-for-parent",
    "/about-us/why-choose" : "/about-us/why-choose-right-accord",
    "/blog/2020/february/coping-with-cancer-diagnosis" : "/blog/coping-with-cancer-diagnosis.html",
    "/manatee/family-services/faq" : "/about-us/sarasota",
    "/venice/services/live-in-homecare" : "/about-us/venice",
    "/specialty-care/alzheimer-disease-care" : "/specialty-care/alzheimers-dementia-care",
    "/blog/2019/march/what-is-dementia" : "/blog/what-is-dementia",
    "/manatee/specialty-care/post-surgical-care" : "/specialty-care/post-surgical-recovery-and-rehabilitation-care",
    "/venice/services/home-care-packages" : "/services/home-care-packages",
    "/family-services/payers-for-home" : "/family-services/payors-for-home-care",
    "/family-services/family-portal" : "/family-services/family-portal-ersp",

  },
});
