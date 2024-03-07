import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Hourly or 24-Hour Care',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Live-in Home Care',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Skilled Nursing',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Staffing Services',
          href: getPermalink('/homes/personal'),
        },
        {
          text: 'Senior Care Advisors',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Home Care Packages',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Veteran Aid & Attendant Benefits',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Long Term Care Insurance',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Specialty Care',
      links: [
        {
          text: "Alzheimer's & Dementia Care",
          href: getPermalink('/#features'),
        },
        {
          text: "Parkinson's Disease Care",
          href: getPermalink('/pricing'),
        },
        {
          text: 'After Stroke In-Home Care',
          href: getPermalink('/services'),
        },
        {
          text: 'Post Surgical Recovery and Rehabilitation Care',
          href: getPermalink('/about'),
        },
        {
          text: 'Hospice & End of Life Care',
          href: getPermalink('/contact'),
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
        {
          text: 'Caregiver Continuing Education',
          href: getPermalink('/caregivers/caregiver-continuing-education'),
        },
        {
          text: 'Caregiver Resources',
          href: getPermalink('/caregivers/caregiver-resources'),
        },
        {
          text: 'Caregiver Support',
          href: getPermalink('/caregivers/caregiver-support'),
        },
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
          text: 'Payers for Home Care',
          href: getPermalink('/family-services/payers-for-home-care'),
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
          text: 'About Right Accord',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'About the Founder',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Our Mission',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Why Choose Right Accord?',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Testimonials',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Blog',
          href: getPermalink('/landing/product'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contact Us', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
