import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Hourly or 24-Hour Care',
          href: getPermalink('/services/hourly-or-24-hour-care'),
        },
        {
          text: 'Live-in Home Care',
          href: getPermalink('/services/live-in-home-care'),
        },
        {
          text: 'Skilled Nursing',
          href: getPermalink('/services/skilled-nursing'),
        },
        {
          text: 'Staffing Services',
          href: getPermalink('/services/staffing-services'),
        },
        {
          text: 'Senior Care Advisors',
          href: getPermalink('/services/senior-care-advisors'),
        },
        {
          text: 'Home Care Packages',
          href: getPermalink('/services/home-care-packages'),
        },
        {
          text: 'Veteran Aid & Attendant Benefits',
          href: getPermalink('/services/veteran-aid-attendant-benefits'),
        },
        {
          text: 'Long Term Care Insurance',
          href: getPermalink('/services/long-term-care-insurance'),
        },
      ],
    },
    {
      text: 'Specialty Care',
      links: [
        {
          text: "Alzheimer's & Dementia Care",
          href: getPermalink('/specialty-care/alzheimers-dementia-care'),
        },
        {
          text: "Parkinson's Disease Care",
          href: getPermalink('/specialty-care/parkinsons-disease-care'),
        },
        {
          text: 'After Stroke In-Home Care',
          href: getPermalink('/specialty-care/after-stroke-in-home-care'),
        },
        {
          text: 'Post Surgical Recovery and Rehabilitation Care',
          href: getPermalink('/specialty-care/post-surgical-recovery-and-rehabilitation-care'),
        },
        {
          text: 'Hospice & End of Life Care',
          href: getPermalink('/specialty-care/hospice-end-of-life-care'),
        },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      text: 'Caregivers',
      links: [
        {
          text: 'Application for Employment',
          href: getPermalink('/caregivers/application-for-employment'),
        },
        // {
        //   text: 'Caregiver Continuing Education',
        //   href: getPermalink('/caregivers/caregiver-continuing-education'),
        // },
        // {
        //   text: 'Caregiver Resources',
        //   href: getPermalink('/caregivers/caregiver-resources'),
        // },
        // {
        //   text: 'Caregiver Support',
        //   href: getPermalink('/caregivers/caregiver-support'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      text: 'Family Services',
      links: [
        {
          text: 'Getting Started',
          href: getPermalink('/family-services/getting-started'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/family-services/frequently-asked-questions'),
        },
        {
          text: 'Family Portal - ERSP',
          href: getPermalink('/family-services/family-portal-ersp'),
        },
        {
          text: 'Family Caregiver Support',
          href: getPermalink('/family-services/family-caregiver-support'),
        },
        {
          text: 'Community Care Resources',
          href: getPermalink('/family-services/community-care-resources'),
        },
        {
          text: 'Payors for Home Care',
          href: getPermalink('/family-services/payors-for-home-care'),
        },
        // {
        //   text: 'Getting Started',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: 'Family Portal - ESP',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Community Care Resources',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      text: 'About Us',
      links: [
        {
          text: 'About RIGHT ACCORD',
          href: getPermalink('/about-us/about-right-accord'),
        },
        {
          text: 'About the Founder',
          href: getPermalink('/about-us/about-the-founder'),
        },
        {
          text: 'Our Mission',
          href: getPermalink('/about-us/our-mission'),
        },
        {
          text: 'Our Locations',
          href: getPermalink('/about-us/our-locations'),
        },
        {
          text: 'Why Choose RIGHT ACCORD?',
          href: getPermalink('/about-us/why-choose-right-accord'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/about-us/testimonials'),
        },
        {
          text: 'Blog',
          href: getPermalink('/blog'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        {
          text: 'Hourly or 24-Hour Care',
          href: getPermalink('/services/hourly-or-24-hour-care'),
        },
        {
          text: 'Live-in Home Care',
          href: getPermalink('/services/live-in-home-care'),
        },
        {
          text: 'Skilled Nursing',
          href: getPermalink('/services/skilled-nursing'),
        },
        {
          text: 'Staffing Services',
          href: getPermalink('/services/staffing-services'),
        },
        {
          text: 'Senior Care Advisors',
          href: getPermalink('/services/senior-care-advisors'),
        },
        {
          text: 'Home Care Packages',
          href: getPermalink('/services/home-care-packages'),
        },
        {
          text: 'Veteran Aid & Attendant Benefits',
          href: getPermalink('/services/veteran-aid-attendant-benefits'),
        },
        {
          text: 'Long Term Care Insurance',
          href: getPermalink('/services/long-term-care-insurance'),
        },
      ],
    },
    {
      title: 'Specialty Care',
      links: [
        {
          text: "Alzheimer's & Dementia Care",
          href: getPermalink('/specialty-care/alzheimers-dementia-care'),
        },
        {
          text: "Parkinson's Disease Care",
          href: getPermalink('/specialty-care/parkinsons-disease-care'),
        },
        {
          text: 'After Stroke In-Home Care',
          href: getPermalink('/specialty-care/after-stroke-in-home-care'),
        },
        {
          text: 'Post Surgical Recovery and Rehabilitation Care',
          href: getPermalink('/specialty-care/post-surgical-recovery-and-rehabilitation-care'),
        },
        {
          text: 'Hospice & End of Life Care',
          href: getPermalink('/specialty-care/hospice-end-of-life-care'),
        },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        // {
        //   text: 'Privacy policy',
        //   href: getPermalink('/privacy'),
        // },
      ],
    },
    {
      title: 'Caregivers',
      links: [
        {
          text: 'Application for Employment',
          href: getPermalink('/caregivers/application-for-employment'),
        },
        // {
        //   text: 'Caregiver Continuing Education',
        //   href: getPermalink('/caregivers/caregiver-continuing-education'),
        // },
        // {
        //   text: 'Caregiver Resources',
        //   href: getPermalink('/caregivers/caregiver-resources'),
        // },
        // {
        //   text: 'Caregiver Support',
        //   href: getPermalink('/caregivers/caregiver-support'),
        // },
        // {
        //   text: 'Coming Soon or Pre-Launch',
        //   href: getPermalink('/landing/pre-launch'),
        // },
        // {
        //   text: 'Subscription',
        //   href: getPermalink('/landing/subscription'),
        // },
      ],
    },
    {
      title: 'Family Services',
      links: [
        {
          text: 'Getting Started',
          href: getPermalink('/family-services/getting-started'),
        },
        {
          text: 'FAQs',
          href: getPermalink('/family-services/frequently-asked-questions'),
        },
        {
          text: 'Family Portal - ERSP',
          href: getPermalink('/family-services/family-portal-ersp'),
        },
        {
          text: 'Family Caregiver Support',
          href: getPermalink('/family-services/family-caregiver-support'),
        },
        {
          text: 'Community Care Resources',
          href: getPermalink('/family-services/community-care-resources'),
        },
        {
          text: 'Payors for Home Care',
          href: getPermalink('/family-services/payors-for-home-care'),
        },
        // {
        //   text: 'Getting Started',
        //   href: getBlogPermalink(),
        // },
        // {
        //   text: 'Family Portal - ESP',
        //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        // },
        // {
        //   text: 'Community Care Resources',
        //   href: getPermalink('markdown-elements-demo-post', 'post'),
        // },
        // {
        //   text: 'Category Page',
        //   href: getPermalink('tutorials', 'category'),
        // },
        // {
        //   text: 'Tag Page',
        //   href: getPermalink('astro', 'tag'),
        // },
      ],
    },
    {
      title: 'About Us',
      links: [
        {
          text: 'About RIGHT ACCORD',
          href: getPermalink('/about-us/about-right-accord'),
        },
        {
          text: 'About the Founder',
          href: getPermalink('/about-us/about-the-founder'),
        },
        {
          text: 'Our Mission',
          href: getPermalink('/about-us/our-mission'),
        },
        {
          text: 'Our Locations',
          href: getPermalink('/about-us/our-locations'),
        },
        {
          text: 'Why Choose RIGHT ACCORD?',
          href: getPermalink('/about-us/why-choose-right-accord'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/about-us/testimonials'),
        },
        {
          text: 'Blog',
          href: getPermalink('/blog'),
        },
      ],
    },
  ],
  secondaryLinks: [
    /* { text: 'Terms', href: getPermalink('/terms') }, */
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/company/right-accord-home-care/',
    },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCL2zO8c8QN3fQBYsrTbNyuA',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/RightAccord/' },
  ],
  footNote: `
    All rights reserved.
  `,
};
