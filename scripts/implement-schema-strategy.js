#!/usr/bin/env node

/**
 * Script to implement SchemaStrategy across all pages
 * This script will automatically add schema data to pages based on their type
 */

const fs = require('fs');
const path = require('path');

// Page type configurations
const pageConfigs = {
  services: {
    type: 'service',
    schemaType: 'service',
    baseUrl: 'https://rightaccordhealth.com/services/',
  },
  'specialty-care': {
    type: 'specialty',
    schemaType: 'medicalProcedure',
    baseUrl: 'https://rightaccordhealth.com/specialty-care/',
  },
  'family-services': {
    type: 'service',
    schemaType: 'service',
    baseUrl: 'https://rightaccordhealth.com/family-services/',
  },
  locations: {
    type: 'location',
    schemaType: 'location',
    baseUrl: 'https://rightaccordhealth.com/locations/',
  },
  about: {
    type: 'about',
    schemaType: 'organization',
    baseUrl: 'https://rightaccordhealth.com/about-us/',
  },
  caregivers: {
    type: 'service',
    schemaType: 'service',
    baseUrl: 'https://rightaccordhealth.com/caregivers/',
  },
};

// Service definitions for different page types
const serviceDefinitions = {
  '24-hour-care': {
    name: '24-Hour In-Home Care',
    description: 'Comprehensive 24-hour in-home care services for seniors who need round-the-clock assistance.',
    serviceType: 'Home Health Care Services',
    specialties: ['24-Hour Care', 'Safety Monitoring', 'Cognitive Care'],
  },
  'hourly-care': {
    name: 'Hourly Home Care',
    description: 'Flexible hourly home care services for seniors needing assistance with daily activities.',
    serviceType: 'Home Health Care Services',
    specialties: ['Personal Care', 'Companion Care', 'Light Housekeeping'],
  },
  'skilled-nursing': {
    name: 'Skilled Nursing Services',
    description: 'Professional skilled nursing care delivered in the comfort of your home.',
    serviceType: 'Medical Services',
    specialties: ['Skilled Nursing', 'Medical Care', 'Health Monitoring'],
  },
  'home-care-packages': {
    name: 'Home Care Packages',
    description: 'Comprehensive home care packages tailored to individual needs and preferences.',
    serviceType: 'Home Health Care Services',
    specialties: ['Personal Care', 'Companion Care', 'Household Management'],
  },
  'alzheimers-dementia-care': {
    name: "Alzheimer's & Dementia Care",
    description: "Specialized memory care services for individuals with Alzheimer's disease and related dementias.",
    serviceType: 'Memory Care Services',
    specialties: ['Memory Care', 'Dementia Support', 'Behavioral Management'],
    medicalCondition: "Alzheimer's Disease",
  },
  'parkinsons-disease-care': {
    name: "Parkinson's Disease Care",
    description: "Specialized care and support for individuals living with Parkinson's disease.",
    serviceType: 'Neurological Care Services',
    specialties: ["Parkinson's Care", 'Movement Assistance', 'Medication Management'],
    medicalCondition: "Parkinson's Disease",
  },
  'after-stroke-in-home-care': {
    name: 'After Stroke In-Home Care',
    description: 'Comprehensive post-stroke care and rehabilitation services in the home environment.',
    serviceType: 'Rehabilitation Services',
    specialties: ['Stroke Recovery', 'Physical Therapy Support', 'Speech Therapy Support'],
    medicalCondition: 'Stroke Recovery',
  },
  'hospice-end-of-life-care': {
    name: 'Hospice & End-of-Life Care',
    description: 'Compassionate hospice and end-of-life care services providing comfort and dignity.',
    serviceType: 'Hospice Care Services',
    specialties: ['Hospice Care', 'Palliative Care', 'End-of-Life Support'],
    medicalCondition: 'Terminal Illness',
  },
  'post-surgical-recovery-and-rehabilitation-care': {
    name: 'Post-Surgical Recovery Care',
    description: 'Professional post-surgical care and rehabilitation services for safe recovery at home.',
    serviceType: 'Recovery Services',
    specialties: ['Post-Surgical Care', 'Wound Care', 'Recovery Support'],
    medicalCondition: 'Post-Surgical Recovery',
  },
};

function generateSchemaData(pageType, slug, pageConfig, serviceInfo) {
  const baseSchema = {
    page: {
      type: pageConfig.type,
      title: '', // Will be filled from existing metadata
      description: '', // Will be filled from existing metadata
      url: pageConfig.baseUrl + slug,
    },
  };

  if (pageConfig.schemaType === 'service' && serviceInfo) {
    baseSchema.service = {
      name: serviceInfo.name,
      description: serviceInfo.description,
      url: pageConfig.baseUrl + slug,
      serviceType: serviceInfo.serviceType,
      provider: {
        name: 'RIGHT ACCORD Home Health Care',
        url: 'https://rightaccordhealth.com',
        areaServed: ['Sarasota', 'Bradenton', 'Venice', 'North Port', 'Fort Myers', 'Cape Coral'],
      },
      category: 'Healthcare Services',
      additionalType: 'https://schema.org/MedicalService',
    };
  }

  if (pageConfig.schemaType === 'medicalProcedure' && serviceInfo) {
    baseSchema.medicalProcedure = {
      name: serviceInfo.name,
      description: serviceInfo.description,
      procedureType: serviceInfo.serviceType,
      provider: {
        name: 'RIGHT ACCORD Home Health Care',
        url: 'https://rightaccordhealth.com',
      },
    };

    if (serviceInfo.medicalCondition) {
      baseSchema.medicalProcedure.medicalCondition = {
        name: serviceInfo.medicalCondition,
        description: serviceInfo.description,
        possibleTreatment: serviceInfo.specialties || [],
      };
    }
  }

  return baseSchema;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Extract page type and slug from file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 1].replace('.astro', '');
    const pageTypeDir = pathParts[pathParts.length - 2];

    const pageConfig = pageConfigs[pageTypeDir];
    if (!pageConfig) {
      console.log(`Skipping ${filePath} - no configuration for ${pageTypeDir}`);
      return;
    }

    const serviceInfo = serviceDefinitions[fileName];

    // Check if file already has schemaData
    if (content.includes('const schemaData')) {
      console.log(`Skipping ${filePath} - already has schema data`);
      return;
    }

    // Check if file uses Layout component
    if (!content.includes('<Layout metadata={metadata}>')) {
      console.log(`Skipping ${filePath} - doesn't use standard Layout pattern`);
      return;
    }

    console.log(`Processing ${filePath}...`);

    // Generate schema data
    const schemaData = generateSchemaData(pageTypeDir, fileName, pageConfig, serviceInfo);

    // Generate schema code
    const schemaCode = `
// Schema data for ${serviceInfo ? serviceInfo.name : fileName} page
const schemaData = ${JSON.stringify(schemaData, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"/g, "'")};
`;

    // Find the metadata definition and add schema after it
    const metadataRegex = /(const metadata = \{[^}]+\};)/;
    const metadataMatch = content.match(metadataRegex);

    if (metadataMatch) {
      const newContent = content.replace(metadataMatch[1], metadataMatch[1] + schemaCode);

      // Update Layout component call
      const updatedContent = newContent.replace(
        '<Layout metadata={metadata}>',
        '<Layout metadata={metadata} schemaData={schemaData}>'
      );

      fs.writeFileSync(filePath, updatedContent);
      console.log(`✅ Updated ${filePath}`);
    } else {
      console.log(`⚠️  Could not find metadata definition in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Find all .astro files in pages directory
function findAstroFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...findAstroFiles(fullPath));
    } else if (item.endsWith('.astro') && !item.startsWith('[')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const pagesDir = path.join(__dirname, '../src/pages');
const astroFiles = findAstroFiles(pagesDir);

console.log(`Found ${astroFiles.length} .astro files to process...`);

// Filter for files in directories we want to process
const targetFiles = astroFiles.filter((file) => {
  const pathParts = file.split('/');
  const pageTypeDir = pathParts[pathParts.length - 2];
  return pageConfigs[pageTypeDir];
});

console.log(`Processing ${targetFiles.length} target files...`);

targetFiles.forEach(processFile);

console.log('✅ Schema strategy implementation complete!');
