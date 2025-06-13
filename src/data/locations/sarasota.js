import IconTime from '~/assets/icons/icon-time.svg?raw';
import IconHome from '~/assets/icons/icon-home.svg?raw';
import IconNurse from '~/assets/icons/icon-nurse.svg?raw';
import IconStaff from '~/assets/icons/icon-staff.svg?raw';
import IconElder from '~/assets/icons/icon-elder.svg?raw';
import IconPackage from '~/assets/icons/icon-package.svg?raw';
import IconVeteran from '~/assets/icons/icon-veteran.svg?raw';
import IconInsurance from '~/assets/icons/icon-insurance.svg?raw';
import IconFacility from '~/assets/icons/icon-facility.svg?raw';

const data = {
  metaData: {
    title: 'Home Health Care Sarasota, FL | RIGHT ACCORD Private Duty Home Health Care',
    ignoreTitleTemplate: true,
  },
  city: "Sarasota",
  stateShort: "FL",
  stateLong: "Florida",
  slug: "sarasota-fl",
  county: "Sarasota County",
  description:
    "RIGHT ACCORD Home Health Care proudly serves Sarasota with compassionate, in-home care services. Whether your loved one needs hourly support or 24-hour specialized care, we tailor every plan to their unique needs.",
  nearbyLocations: [
    "Bradenton",
    "Lakewood Ranch",
    "Siesta Key",
    "Longboat Key",
    "Venice"
  ],
  headerImages: [
    "/src/assets/images/right-accord-health-florida-HOMEPAGE_FIRSTPICTURE.jpg",
    "/src/assets/images/right-accord-health-florida-HOMEPAGE_ALZHAIMERS.jpg",
    "/src/assets/images/right-accord-health-florida-HOMEPAGE_PARKINSONS.jpg",
    "/src/assets/images/right-accord-health-florida-HOMEPAGE_AFTERSTROKE.jpg",
    "/src/assets/images/right-accord-health-florida-HOMEPAGE_HOSPICE.jpg"
  ],
  headLines: [
    "In-Home Senior Care in Sarasota, FL",
    "Dependable Hourly & 24-Hour Caregivers",
    "Specialized Alzheimer’s and Dementia Support",
    "Trusted Care from a Local, Nurse-Owned Agency",
    "Home Care That Feels Like Family"
  ],
  keywords: [
    "Sarasota home health care",
    "in-home senior care Sarasota",
    "dementia care Sarasota FL",
    "private duty caregivers Sarasota",
    "elderly care Sarasota Florida",
    "companion care Sarasota",
    "Florida senior care services",
    "RIGHT ACCORD Sarasota"
  ],
  googleMapEmbed:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14185.55753792691!2d-82.4930632!3d27.2696738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd63ddd79e3387a8c!2sRight%20Accord%20Private%20Duty-Home%20Health%20Care%20-%20Caregivers%20%26%20Companions!5e0!3m2!1sen!2sph!4v1573807050260!5m2!1sen!2sph",
  specialties: [
    {
      title: "Alzheimer's Care",
      description:
        "Our dementia-trained caregivers provide respectful, personalized support for clients experiencing memory loss.",
      icon: "flat-color-icons:document",
      link: "/specialty-care/alzheimers-dementia-care",
      image: {
        src: "/src/assets/images/right-accord-health-florida-HOMEPAGE_ALZHAIMERS.jpg",
        alt: "Sarasota Alzheimer’s in-home care"
      }
    },
    {
      title: "Parkinson’s Care",
      description:
        "Helping clients with Parkinson’s manage daily tasks with dignity and safety in their own homes.",
      icon: "flat-color-icons:template",
      link: "/specialty-care/parkinsons-disease-care",
      image: {
        src: "/src/assets/images/right-accord-health-florida-HOMEPAGE_PARKINSONS.jpg",
        alt: "Sarasota Parkinson’s home care"
      }
    },
    {
      title: "Afterstroke Care",
      description:
        "Rehabilitation-focused home care for stroke survivors to recover mobility, speech, and daily routines.",
      icon: "flat-color-icons:voice-presentation",
      link: "/specialty-care/after-stroke-in-home-care",
      image: {
        src: "/src/assets/images/right-accord-health-florida-HOMEPAGE_AFTERSTROKE.jpg",
        alt: "Afterstroke care in Sarasota"
      }
    },
    {
      title: "Post-Surgical Care",
      description:
        "Home assistance after hospital discharge to ensure a safe, supported recovery process.",
      icon: "flat-color-icons:voice-presentation",
      link: "/specialty-care/post-surgical-recovery-and-rehabilitation-care",
      image: {
        src: "/src/assets/images/right-accord-health-florida-HOMEPAGE_POSTSURGICAL.jpg",
        alt: "Post-surgical care Sarasota"
      }
    },
    {
      title: "Hospice Support",
      description:
        "We partner with Tidewell Hospice to ensure comfort and dignity during end-of-life care.",
      icon: "flat-color-icons:voice-presentation",
      link: "/specialty-care/hospice-end-of-life-care",
      image: {
        src: "/src/assets/images/right-accord-health-florida-HOMEPAGE_HOSPICE.jpg",
        alt: "Hospice home care Sarasota"
      }
    }
  ],
  services: [
      {
        title: 'Hourly Care or 24-Hour Care',
        description:
          'We provide hourly care or 24-hour care. Our caregivers are available 24/7 to provide the care and support you need.',
        icon: IconTime,
      },
      {
        title: 'Live-in Home Care',
        description:
          'Our live-in home care services are a great option for those who need around-the-clock care and support.',
        icon: IconHome,
      },
      {
        title: 'Skilled Nursing',
        description:
          'Our skilled nursing services are provided by licensed and certified nurses who are experienced in providing care to seniors.',
        icon: IconNurse,
      },
      {
        title: 'Staffing Services',
        description:
          'We provide staffing services to hospitals, nursing homes, and other healthcare facilities in Sarasota, FL.',
        icon: IconStaff,
      },
      {
        title: 'Senior Care Advisors',
        description:
          "Our senior care advisors are available to help you find the right care solution for your loved one's needs.",
        icon: IconElder,
      },
      {
        title: 'Home Care Packages',
        description:
          'We offer home care packages that are designed to meet the needs of our clients and their families.',
        icon: IconPackage,
      },
      {
        title: 'Veteran Aid & Attendant Benefits',
        description:
          'We provide assistance to veterans and their spouses in applying for the VA Aid & Attendance benefits.',
        icon: IconVeteran,
      },
      {
        title: 'Long Term Care Insurance',
        description: 'We work with long term care insurance companies to help you get the most out of your policy.',
        icon: IconInsurance,
      },
      {
        title: 'Senior Facility Relocation',
        description: 'We provide assistance to seniors who are moving to a new home or senior living facility.',
        icon: IconFacility,
      },
  ],
  faqs: [
    {
      description: "Is RIGHT ACCORD licensed by the state of Florida?",
      icon: "tabler:chevrons-right"
    },
    {
      description: "Do you offer 24/7 caregiver availability?",
      icon: "tabler:chevrons-right"
    },
    {
      description: "What makes RIGHT ACCORD different from other agencies?",
      icon: "tabler:chevrons-right"
    }
  ],
  testimonials: [
      {
        testimonial: `Thank you for the cooperative and professional way that Rosemarie and the Caregivers have served us. We look forward to a long future and pleasant relationship with you.`,
        name: 'Cary Kennedy',
        job: 'Sarasota, FL',
      },
      {
        testimonial: `Yes, I would recommend RIGHT ACCORD for obtaining professional and skilled Care Providers. I am pleased with the service and I know that I have skilled help on a daily basis.`,
        name: 'Josh Wilkinson',
        job: 'Sarasota, FL',
      },
      {
        testimonial:
          'I will definitely use RIGHT ACCORD again. It is a very well run organization and all the people I was in contact with were very kind and considerate.',
        name: 'Sidney Hansen',
        job: 'Sarasota, FL',
      },
  ],
  affiliations: [
    {
      image: {
        src: "/src/assets/images/LWRBA-Logo-WEB.png",
        alt: "Lakewood Ranch Business Alliance"
      }
    },
    {
      image: {
        src: "/src/assets/images/Chamber-Logo-Homepage-1.png",
        alt: "Manatee Chamber of Commerce"
      }
    },
    {
      image: {
        src: "/src/assets/images/Longboat-Key-Rebrand-1.jpg",
        alt: "Longboat Key Chamber of Commerce"
      }
    }
  ]
};

export default { data };
