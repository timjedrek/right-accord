#!/usr/bin/env node

/**
 * Script to implement SchemaStrategy on remaining important pages
 */

const fs = require('fs');
const path = require('path');

// Pages to implement schema on
const pages = [
  {
    path: 'src/pages/about.astro',
    schemaData: {
      page: {
        type: 'about',
        title: 'About RIGHT ACCORD Home Health Care',
        description:
          'Learn about RIGHT ACCORD Private Duty Home Health Care, providing compassionate and professional healthcare services throughout Florida.',
        url: 'https://rightaccordhealth.com/about',
      },
      organization: {
        name: 'RIGHT ACCORD Home Health Care',
        description: 'Private duty home health care services throughout Florida',
        url: 'https://rightaccordhealth.com',
        areaServed: ['Sarasota', 'Bradenton', 'Venice', 'North Port', 'Fort Myers', 'Cape Coral'],
        foundingDate: '2013',
        serviceType: 'Home Health Care Services',
      },
    },
  },
  {
    path: 'src/pages/contact.astro',
    schemaData: {
      page: {
        type: 'contact',
        title: 'Contact RIGHT ACCORD Home Health Care',
        description:
          'Contact RIGHT ACCORD for home health care services in Florida. Call us or schedule a consultation.',
        url: 'https://rightaccordhealth.com/contact',
      },
      organization: {
        name: 'RIGHT ACCORD Home Health Care',
        telephone: '+1-941-366-0801',
        email: 'info@rightaccordhealth.com',
        url: 'https://rightaccordhealth.com',
        areaServed: ['Sarasota', 'Bradenton', 'Venice', 'North Port', 'Fort Myers', 'Cape Coral'],
        address: {
          streetAddress: '1337 Fruitville Road',
          addressLocality: 'Sarasota',
          addressRegion: 'FL',
          postalCode: '34236',
          addressCountry: 'US',
        },
      },
    },
  },
];

function processFile(pageConfig) {
  try {
    const filePath = path.join(__dirname, '../', pageConfig.path);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file already has schemaData
    if (content.includes('const schemaData')) {
      console.log(`Skipping ${pageConfig.path} - already has schema data`);
      return;
    }

    // Check if file uses Layout component
    if (!content.includes('<Layout metadata={metadata}>')) {
      console.log(`Skipping ${pageConfig.path} - doesn't use standard Layout pattern`);
      return;
    }

    console.log(`Processing ${pageConfig.path}...`);

    // Generate schema code
    const schemaCode = `
// Schema data for ${pageConfig.schemaData.page.title}
const schemaData = ${JSON.stringify(pageConfig.schemaData, null, 2)
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
      console.log(`✅ Updated ${pageConfig.path}`);
    } else {
      console.log(`⚠️  Could not find metadata definition in ${pageConfig.path}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${pageConfig.path}:`, error.message);
  }
}

// Process all pages
console.log('Implementing schema strategy on remaining important pages...');

pages.forEach(processFile);

console.log('✅ Additional schema strategy implementation complete!');
