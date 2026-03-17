import { LucideIcon, Home, Building2, Factory, Briefcase, FileText, Package } from 'lucide-react'

export interface ProductData {
  name: string
  category: string
  icon: LucideIcon
  description: string
  longDescription: string
  gallery: string[]
  variants: { variantName: string; variantImage: string; variantInterior: string; }[]
  advantages: { title: string; description: string; icon: string }[]
  faq: { question: string; answer: string }[]
  trustBand: {
    citiesCovered: number
    completedProjects: number
    customerSatisfaction: number
  }
}

export const productsData: Record<string, ProductData> = {
  'A-Frame Cabin': {
  name: 'A-Frame Cabin',
  category: 'Wooden Series',
  icon: Home,
  description: 'Elegant A-frame wooden cabins blending modern design with natural aesthetics',
  longDescription: `Our A-Frame Cabins represent the pinnacle of wooden architecture, combining timeless A-frame design with contemporary comfort. Crafted from premium sustainable timber, these cabins offer a perfect retreat that harmonizes with nature while providing all modern amenities.

The distinctive A-frame structure not only provides excellent structural integrity but also creates a spacious, cathedral-like interior with abundant natural light. Each cabin is meticulously crafted using traditional joinery techniques and modern engineering, ensuring longevity and comfort for generations.

Whether used as a vacation home, guest house, or permanent residence, our A-Frame Cabins offer unparalleled living spaces that connect you with nature while maintaining the comforts of modern living.`,
  gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
  faq: [
    {
      question: 'How long does construction take?',
      answer: 'Typically 4-6 weeks from design approval to completion, depending on customization requirements.'
    },
    {
      question: 'Are the cabins weather-resistant?',
      answer: 'Yes, our cabins are treated with weather-resistant finishes and designed to withstand various climates.'
    },
    {
      question: 'Can I customize the interior?',
      answer: 'Absolutely! We offer full customization options for interiors, including layouts, finishes, and amenities.'
    }
  ],
  trustBand: {
    citiesCovered: 150,
    completedProjects: 250,
    customerSatisfaction: 98
  }
},
  'Arc Pod': {
    name: 'Arc Pod',
    category: 'Wooden Series',
    icon: Home,
    description: 'Curved wooden pods offering unique living spaces with panoramic views',
    longDescription: `The Arc Pod represents innovation in curved wooden architecture, creating living spaces that flow seamlessly with their surroundings. These pods feature elegant curved timber frames that maximize space utilization while providing stunning panoramic views.

Each Arc Pod is engineered for optimal structural performance, with the curved design distributing loads efficiently and creating a sense of openness. The interior spaces are designed to maximize comfort and functionality, making them ideal for various applications from luxury accommodations to creative workspaces.

Our Arc Pods are crafted using advanced CNC technology combined with traditional woodworking skills, ensuring precision and quality in every curve and joint.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What is the size range?',
        answer: 'Our Arc Pods range from 20-50 square meters, customizable to your needs.'
      },
      {
        question: 'Can they be used year-round?',
        answer: 'Yes, with proper insulation and heating systems, they are suitable for year-round use.'
      },
      {
        question: 'What utilities are included?',
        answer: 'Standard utilities include electricity, plumbing, and optional heating/cooling systems.'
      }
    ],
    trustBand: {
      citiesCovered: 120,
      completedProjects: 180,
      customerSatisfaction: 96
    }
  },
  'Wooden House': {
    name: 'Wooden House',
    category: 'Wooden Series',
    icon: Home,
    description: 'Traditional wooden houses with modern amenities and sustainable construction',
    longDescription: `Our Wooden Houses capture the essence of traditional timber construction while incorporating modern building techniques and amenities. Each house is crafted from carefully selected sustainable timber, ensuring both environmental responsibility and lasting quality.

The design philosophy combines classic wooden architecture with contemporary living requirements, creating homes that are both beautiful and functional. From the foundation to the finishing touches, every aspect is considered to provide comfortable, healthy living spaces that stand the test of time.

Whether you're building your dream home or creating a family retreat, our Wooden Houses offer the perfect blend of tradition and modernity.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What timber species are used?',
        answer: 'We use sustainably sourced pine, cedar, and oak, depending on the design requirements.'
      },
      {
        question: 'How long do wooden houses last?',
        answer: 'With proper maintenance, our wooden houses can last 50+ years.'
      },
      {
        question: 'Are they earthquake-resistant?',
        answer: 'Yes, our designs incorporate earthquake-resistant features and can be built to local seismic codes.'
      }
    ],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 400,
      customerSatisfaction: 97
    }
  },
  'Smart House': {
    name: 'Smart House',
    category: 'Wooden Series',
    icon: Home,
    description: 'Intelligent wooden homes with integrated smart technology and automation',
    longDescription: `The Smart House represents the future of wooden living, combining traditional timber construction with cutting-edge smart home technology. These intelligent homes feature integrated automation systems that enhance comfort, security, and energy efficiency.

Every aspect of the Smart House is designed for modern living, from automated climate control to intelligent lighting and security systems. The wooden structure provides natural beauty and sustainability, while the smart features ensure convenience and peace of mind.

Our Smart Houses are built with scalability in mind, allowing you to start with basic automation and expand as technology advances.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What smart features are included?',
        answer: 'Standard features include automated lighting, climate control, security systems, and energy monitoring.'
      },
      {
        question: 'Can I control it remotely?',
        answer: 'Yes, all Smart Houses come with mobile apps for remote control and monitoring.'
      },
      {
        question: 'Is it compatible with other smart devices?',
        answer: 'Yes, our systems are designed to integrate with popular smart home ecosystems.'
      }
    ],
    trustBand: {
      citiesCovered: 80,
      completedProjects: 95,
      customerSatisfaction: 99
    }
  },
  
  'Porta Cabin': {
    name: 'Porta Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Versatile portable cabins for temporary and mobile accommodation needs',
    longDescription: `Porta Cabins are the ultimate solution for flexible accommodation requirements. These prefabricated structures offer quick deployment and can be easily relocated as needs change. Built with durability and comfort in mind, our Porta Cabins serve various applications from construction sites to emergency housing.

Each Porta Cabin is constructed using high-quality materials and modular design principles, ensuring rapid assembly and disassembly. The interiors are designed for functionality while maintaining comfort standards, making them suitable for both short-term and extended use.

Our Porta Cabins are engineered to withstand transportation and various environmental conditions, providing reliable shelter wherever it's needed.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'How quickly can it be deployed?',
        answer: 'Most Porta Cabins can be fully deployed within 24-48 hours of delivery.'
      },
      {
        question: 'Can they be customized?',
        answer: 'Yes, we offer various sizes and interior configurations to meet specific requirements.'
      },
      {
        question: 'What utilities are available?',
        answer: 'Standard utilities include electricity and basic plumbing; additional systems can be added.'
      }
    ],
    trustBand: {
      citiesCovered: 300,
      completedProjects: 1200,
      customerSatisfaction: 95
    }
  },
  'Farmhouse': {
    name: 'Farmhouse',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Rural-style portable cabins perfect for agricultural and countryside applications',
    longDescription: `Our Farmhouse designs bring the charm of traditional rural architecture to portable structures. These cabins are specifically engineered for agricultural environments, providing comfortable living and working spaces for farmers, ranchers, and rural workers.

The design incorporates practical features like easy maintenance access, durable exteriors resistant to agricultural chemicals, and layouts optimized for rural living. Despite their portable nature, Farmhouses offer the comfort and functionality of permanent homes.

Each Farmhouse is built to last, with reinforced structures that can withstand the demands of rural environments while providing a cozy retreat from daily farm work.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'Are they suitable for livestock areas?',
        answer: 'While designed for human habitation, they can be placed near livestock areas with proper ventilation.'
      },
      {
        question: 'What about utilities in rural areas?',
        answer: 'They can be equipped with off-grid solutions like solar power and water collection systems.'
      },
      {
        question: 'How do they handle rough terrain?',
        answer: 'They can be installed on concrete foundations or adjustable supports for uneven ground.'
      }
    ],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 350,
      customerSatisfaction: 94
    }
  },
  'Portable Cabin': {
    name: 'Portable Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Standard portable cabins offering reliable temporary accommodation',
    longDescription: `The Portable Cabin is our versatile standard offering, designed to provide reliable temporary accommodation across various industries. These cabins combine practicality with comfort, making them ideal for construction sites, mining operations, and temporary housing needs.

Constructed with modular components, Portable Cabins can be quickly assembled and disassembled as required. The design focuses on durability, functionality, and ease of maintenance, ensuring they remain cost-effective solutions for temporary accommodation.

Our Portable Cabins are built to industry standards, providing safe and comfortable environments for workers and staff in demanding conditions.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What sizes are available?',
        answer: 'Standard sizes range from 20-100 square meters, with custom sizes available.'
      },
      {
        question: 'How long can they be used?',
        answer: 'They are designed for extended use, up to several years with proper maintenance.'
      },
      {
        question: 'Can they be stacked?',
        answer: 'Yes, multi-story configurations are available for increased capacity.'
      }
    ],
    trustBand: {
      citiesCovered: 250,
      completedProjects: 800,
      customerSatisfaction: 93
    }
  },
  'Bunk House Cabin': {
    name: 'Bunk House Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Multi-occupancy cabins designed for group accommodation and labor camps',
    longDescription: `Bunk House Cabins are specialized for accommodating multiple occupants efficiently. These structures are ideal for labor camps, mining operations, and large-scale construction projects where group housing is required.

The design maximizes space utilization with bunk bed configurations and shared facilities, while maintaining comfort and privacy standards. Each cabin includes proper ventilation, lighting, and safety features to ensure a healthy living environment.

Our Bunk House Cabins are engineered for durability and can be equipped with additional amenities like communal kitchens and recreational areas.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What is the maximum capacity?',
        answer: 'Standard Bunk Houses accommodate 10-20 people, depending on the configuration.'
      },
      {
        question: 'Are there separate facilities?',
        answer: 'Yes, we provide separate male/female sections and communal areas as required.'
      },
      {
        question: 'What safety features are included?',
        answer: 'Fire safety equipment, emergency exits, and proper ventilation are standard.'
      }
    ],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 600,
      customerSatisfaction: 92
    }
  },
  'Containers House': {
    name: 'Containers House',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Shipping container converted homes offering unique and sustainable living',
    longDescription: `Container Houses transform shipping containers into unique, sustainable living spaces. This innovative approach to housing utilizes recycled shipping containers, creating affordable and environmentally friendly homes.

Each Container House is customized to provide comfortable living spaces while maintaining the industrial aesthetic of the original containers. The modular nature allows for creative configurations, from single containers to multi-unit complexes.

Our Container Houses combine the strength and durability of shipping containers with modern interior design, creating distinctive homes that stand out.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'Are shipping containers safe for living?',
        answer: 'Yes, we reinforce and treat containers to meet residential safety standards.'
      },
      {
        question: 'Can they be expanded?',
        answer: 'Yes, containers can be stacked or connected to create larger living spaces.'
      },
      {
        question: 'What about insulation?',
        answer: 'We add proper insulation and climate control systems for year-round comfort.'
      }
    ],
    trustBand: {
      citiesCovered: 150,
      completedProjects: 280,
      customerSatisfaction: 96
    }
  },
  'Modular Toilet': {
    name: 'Modular Toilet',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Clean and hygienic portable toilet facilities for various applications',
    longDescription: `Modular Toilets provide clean, hygienic sanitation solutions for construction sites, events, and remote locations. These portable facilities combine modern sanitation technology with durable construction to deliver reliable service in any environment.

Each unit is equipped with flushing toilets, sinks, and proper ventilation systems, ensuring comfort and hygiene standards are maintained. The modular design allows for easy transportation and quick setup, making them ideal for temporary or mobile requirements.

Our Modular Toilets are built to withstand heavy use and can be equipped with additional features like solar power and water recycling systems.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'How often are they serviced?',
        answer: 'Regular servicing schedules depend on usage, typically weekly for high-traffic sites.'
      },
      {
        question: 'Are they suitable for events?',
        answer: 'Yes, they are perfect for festivals, construction sites, and outdoor events.'
      },
      {
        question: 'What utilities are required?',
        answer: 'They can operate with basic water and electricity connections.'
      }
    ],
    trustBand: {
      citiesCovered: 400,
      completedProjects: 1500,
      customerSatisfaction: 91
    }
  },
  'Mobile Toilet': {
    name: 'Mobile Toilet',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Fully mobile toilet units for maximum flexibility and convenience',
    longDescription: `Mobile Toilets offer the ultimate in flexibility, providing fully transportable sanitation facilities that can be moved as needed. These units are ideal for dynamic environments where fixed facilities aren't practical.

Each Mobile Toilet is mounted on wheels and can be towed to different locations, making them perfect for construction sites, events, and emergency situations. Despite their mobility, they maintain high standards of comfort and hygiene.

Our Mobile Toilets are equipped with stabilizing systems for safe operation and can be quickly connected to utilities at each location.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'Can they be towed by regular vehicles?',
        answer: 'Yes, most models can be towed by standard pickup trucks or SUVs.'
      },
      {
        question: 'How long can they operate independently?',
        answer: 'With proper tank capacity, they can operate for several days without servicing.'
      },
      {
        question: 'Are they weatherproof?',
        answer: 'Yes, they are designed to operate in various weather conditions.'
      }
    ],
    trustBand: {
      citiesCovered: 350,
      completedProjects: 1100,
      customerSatisfaction: 90
    }
  },
  'Portable Toilet Cabin': {
    name: 'Portable Toilet Cabin',
    category: 'Portable Solutions',
    icon: Building2,
    description: 'Complete portable toilet cabins with enhanced comfort features',
    longDescription: `Portable Toilet Cabins combine the convenience of mobile sanitation with enhanced comfort features. These complete units provide self-contained facilities that can be deployed anywhere reliable sanitation is needed.

Each cabin includes multiple toilet compartments, handwashing stations, and proper ventilation, creating comfortable and hygienic environments. The portable design allows for easy transportation and setup in remote or temporary locations.

Our Portable Toilet Cabins are built for durability and can handle high-traffic situations while maintaining cleanliness and functionality.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'How many people can use one cabin?',
        answer: 'Depending on the model, cabins can serve 20-50 people per day.'
      },
      {
        question: 'What cleaning facilities are included?',
        answer: 'Handwashing stations and optional shower facilities are available.'
      },
      {
        question: 'Can they be used indoors?',
        answer: 'Yes, they can be placed indoors for permanent or temporary installations.'
      }
    ],
    trustBand: {
      citiesCovered: 300,
      completedProjects: 950,
      customerSatisfaction: 89
    }
  },
  'Prefab Site Offices': {
    name: 'Prefab Site Offices',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Professional prefabricated offices for construction and project sites',
    longDescription: `Prefab Site Offices provide professional working environments for construction sites and project locations. These prefabricated structures offer the functionality of permanent offices with the flexibility of temporary installations.

Each office is designed with productivity in mind, featuring proper workspaces, meeting areas, and storage solutions. The prefabricated construction ensures quick deployment and can be equipped with modern office amenities.

Our Prefab Site Offices are built to withstand construction site conditions while providing comfortable and efficient working spaces for project teams.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What office equipment is included?',
        answer: 'Basic furnishings and utilities; specialized equipment can be added as needed.'
      },
      {
        question: 'Can they be used long-term?',
        answer: 'Yes, they are suitable for extended project durations.'
      },
      {
        question: 'What about IT infrastructure?',
        answer: 'They can be equipped with internet, phone systems, and computer networking.'
      }
    ],
    trustBand: {
      citiesCovered: 280,
      completedProjects: 720,
      customerSatisfaction: 94
    }
  },
  'Prefab Structures': {
    name: 'Prefab Structures',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Versatile prefabricated buildings for various commercial and industrial applications',
    longDescription: `Prefab Structures offer versatile building solutions for a wide range of applications. These prefabricated buildings combine speed of construction with the quality and durability of traditional buildings.

Each structure is engineered for specific use cases, whether it's warehousing, manufacturing, or commercial space. The modular design allows for easy expansion and modification as needs change.

Our Prefab Structures are built with high-quality materials and can be customized to meet specific architectural and functional requirements.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What sizes are available?',
        answer: 'We offer structures from small buildings to large industrial facilities.'
      },
      {
        question: 'Can they be insulated?',
        answer: 'Yes, various insulation options are available for different climates.'
      },
      {
        question: 'What foundation is required?',
        answer: 'Foundation requirements vary; we provide guidance for each project.'
      }
    ],
    trustBand: {
      citiesCovered: 320,
      completedProjects: 850,
      customerSatisfaction: 93
    }
  },
  'Prefabricated Accommodation': {
    name: 'Prefabricated Accommodation',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'High-quality prefabricated housing solutions for residential and temporary needs',
    longDescription: `Prefabricated Accommodation provides comfortable and efficient housing solutions using advanced prefabrication techniques. These structures offer the quality of traditional homes with the speed and cost-effectiveness of modular construction.

Each accommodation unit is designed for comfortable living, featuring proper insulation, modern amenities, and flexible layouts. The prefabricated approach ensures consistent quality and rapid deployment.

Our Prefabricated Accommodation is ideal for housing developments, temporary communities, and emergency situations requiring quick housing solutions.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'Are they suitable for permanent housing?',
        answer: 'Yes, many of our units are designed for long-term residential use.'
      },
      {
        question: 'What utilities are included?',
        answer: 'Full utilities including electricity, plumbing, heating, and ventilation.'
      },
      {
        question: 'Can they be customized?',
        answer: 'Yes, extensive customization options are available for interiors and exteriors.'
      }
    ],
    trustBand: {
      citiesCovered: 250,
      completedProjects: 650,
      customerSatisfaction: 95
    }
  },
  'Prefab House': {
    name: 'Prefab House',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Complete prefabricated homes offering modern living with traditional appeal',
    longDescription: `Prefab Houses combine the charm of traditional homes with the efficiency of modern prefabrication. These complete homes are manufactured off-site and assembled on location, ensuring quality control and rapid construction.

Each Prefab House features modern design elements, sustainable materials, and customizable interiors. The prefabricated construction method reduces waste and construction time while maintaining high standards of quality.

Our Prefab Houses are designed for comfortable family living, with spacious layouts and modern amenities that rival traditional construction.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'How long does construction take?',
        answer: 'Most homes can be completed in 4-8 weeks from foundation to finish.'
      },
      {
        question: 'Are they as durable as traditional homes?',
        answer: 'Yes, they meet or exceed traditional building standards.'
      },
      {
        question: 'What warranties are provided?',
        answer: 'We offer comprehensive warranties covering structure and systems.'
      }
    ],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 480,
      customerSatisfaction: 96
    }
  },
  'Prefab Schools': {
    name: 'Prefab Schools',
    category: 'Prefab Solutions',
    icon: Factory,
    description: 'Educational facilities built with prefabricated technology for quick deployment',
    longDescription: `Prefab Schools provide educational facilities that can be rapidly deployed to meet growing demand or emergency situations. These prefabricated structures offer modern learning environments with the speed of modular construction.

Each school is designed with educational needs in mind, featuring proper classroom layouts, safety features, and modern amenities. The prefabricated approach ensures consistent quality and allows for quick expansion as student populations grow.

Our Prefab Schools are built to educational standards and can be equipped with modern teaching technology and facilities.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'Do they meet educational standards?',
        answer: 'Yes, all our schools are built to meet local educational and safety standards.'
      },
      {
        question: 'What classroom sizes are available?',
        answer: 'Standard classrooms accommodate 20-30 students, with various configurations.'
      },
      {
        question: 'Can they include specialized facilities?',
        answer: 'Yes, we can include laboratories, libraries, and recreational facilities.'
      }
    ],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 320,
      customerSatisfaction: 97
    }
  },
  'Clinic Cabin': {
    name: 'Clinic Cabin',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Medical facilities in portable cabins for healthcare services',
    longDescription: `Clinic Cabins provide accessible healthcare facilities in portable formats. These specialized structures bring medical services to remote areas or temporary locations where traditional clinics aren't feasible.

Each Clinic Cabin is equipped with medical examination rooms, waiting areas, and basic medical equipment setups. The design ensures proper hygiene, ventilation, and accessibility standards required for healthcare facilities.

Our Clinic Cabins are designed for quick deployment and can be equipped with solar power and other off-grid capabilities for remote locations.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],

    faq: [
      {
        question: 'What medical equipment is included?',
        answer: 'Basic examination equipment; specialized equipment can be added based on requirements.'
      },
      {
        question: 'Are they suitable for emergency response?',
        answer: 'Yes, they can be rapidly deployed for disaster relief and emergency medical services.'
      },
      {
        question: 'What utilities are required?',
        answer: 'Electricity and basic plumbing; off-grid options available.'
      }
    ],
    trustBand: {
      citiesCovered: 220,
      completedProjects: 180,
      customerSatisfaction: 98
    }
  },
  'Restaurant Cabin': {
    name: 'Restaurant Cabin',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Portable restaurant facilities for food service operations',
    longDescription: `Restaurant Cabins offer complete food service facilities in portable formats. These specialized structures provide professional kitchen and dining areas for various food service applications.

Each Restaurant Cabin includes commercial kitchen equipment, dining areas, and proper ventilation systems. The design ensures food safety standards and comfortable dining experiences.

Our Restaurant Cabins are ideal for events, construction sites, resorts, and temporary food service needs.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What kitchen equipment is included?',
        answer: 'Basic commercial equipment; full customization available for specific menus.'
      },
      {
        question: 'How many people can it serve?',
        answer: 'Depending on configuration, can serve 50-200 people per day.'
      },
      {
        question: 'Are they weatherproof?',
        answer: 'Yes, designed for outdoor operation with proper weather protection.'
      }
    ],
    trustBand: {
      citiesCovered: 160,
      completedProjects: 140,
      customerSatisfaction: 95
    }
  },
  'Smoking Room': {
    name: 'Smoking Room',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Designated smoking areas with proper ventilation and safety features',
    longDescription: `Smoking Rooms provide designated areas for smoking with proper ventilation and safety systems. These specialized structures ensure compliance with smoking regulations while providing comfortable environments for smokers.

Each Smoking Room features advanced ventilation systems that effectively remove smoke and odors, maintaining air quality and safety. The design includes comfortable seating, lighting, and safety features.

Our Smoking Rooms are suitable for offices, hotels, restaurants, and public facilities requiring designated smoking areas.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What ventilation system is used?',
        answer: 'Advanced HVAC systems with HEPA filters and negative pressure design.'
      },
      {
        question: 'Are they suitable for outdoor use?',
        answer: 'Yes, they can be designed for outdoor installation with weather protection.'
      },
      {
        question: 'What safety features are included?',
        answer: 'Fire safety equipment, emergency exits, and proper lighting.'
      }
    ],
    trustBand: {
      citiesCovered: 190,
      completedProjects: 220,
      customerSatisfaction: 92
    }
  },
  'Electrical Room': {
    name: 'Electrical Room',
    category: 'Specialized Structures',
    icon: Briefcase,
    description: 'Secure electrical equipment enclosures with safety and ventilation features',
    longDescription: `Electrical Rooms provide secure and safe enclosures for electrical equipment and systems. These specialized structures protect critical electrical infrastructure while ensuring proper ventilation and safety standards.

Each Electrical Room is designed with electrical safety in mind, featuring proper grounding, ventilation, and fire suppression systems. The construction materials provide electromagnetic shielding and protection from environmental factors.

Our Electrical Rooms are essential for power distribution, data centers, and industrial facilities requiring secure electrical infrastructure.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What electrical standards are met?',
        answer: 'Built to meet international electrical safety and building codes.'
      },
      {
        question: 'Are they suitable for outdoor installation?',
        answer: 'Yes, weatherproof designs available for outdoor electrical equipment.'
      },
      {
        question: 'What cooling systems are included?',
        answer: 'Advanced ventilation and optional air conditioning for temperature control.'
      }
    ],
    trustBand: {
      citiesCovered: 240,
      completedProjects: 300,
      customerSatisfaction: 96
    }
  },
  'Security Cabins': {
    name: 'Security Cabins',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Professional security posts with monitoring and communication equipment',
    longDescription: `Security Cabins serve as command centers for security operations, providing professional environments for security personnel. These specialized structures combine comfort with functionality for effective security monitoring.

Each Security Cabin is equipped with communication systems, monitoring equipment, and emergency response capabilities. The design ensures visibility, safety, and efficient operations for security teams.

Our Security Cabins are used in residential complexes, commercial facilities, and public spaces requiring professional security presence.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What security equipment is included?',
        answer: 'Basic monitoring equipment; advanced systems can be integrated.'
      },
      {
        question: 'Are they suitable for 24/7 operation?',
        answer: 'Yes, designed for continuous operation with proper amenities.'
      },
      {
        question: 'What communication systems are available?',
        answer: 'Radio systems, phone lines, and emergency communication equipment.'
      }
    ],
    trustBand: {
      citiesCovered: 280,
      completedProjects: 450,
      customerSatisfaction: 94
    }
  },
  'Toll Booth': {
    name: 'Toll Booth',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Efficient toll collection facilities with modern payment systems',
    longDescription: `Toll Booths provide efficient toll collection facilities for highways and bridges. These specialized structures combine functionality with modern payment technology for smooth traffic flow.

Each Toll Booth is designed for quick transactions, featuring multiple payment options, safety barriers, and communication systems. The construction ensures durability and visibility for toll operators.

Our Toll Booths are equipped with modern payment systems including cash, card, and electronic toll collection capabilities.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],

    faq: [
      {
        question: 'What payment methods are supported?',
        answer: 'Cash, credit cards, and electronic toll collection systems.'
      },
      {
        question: 'Are they suitable for high-traffic areas?',
        answer: 'Yes, designed for high-volume toll collection with quick transaction times.'
      },
      {
        question: 'What safety features are included?',
        answer: 'Safety barriers, emergency buttons, and proper lighting.'
      }
    ],
    trustBand: {
      citiesCovered: 150,
      completedProjects: 200,
      customerSatisfaction: 93
    }
  },
  'ATM Cabin': {
    name: 'ATM Cabin',
    category: 'Security Solutions',
    icon: FileText,
    description: 'Secure ATM facilities with surveillance and safety features',
    longDescription: `ATM Cabins provide secure environments for automated teller machines, ensuring customer safety and equipment protection. These specialized structures combine security features with accessibility for banking customers.

Each ATM Cabin features advanced security systems, surveillance equipment, and proper lighting for safe transactions. The design ensures compliance with banking security standards while providing a welcoming environment for customers.

Our ATM Cabins are suitable for various locations including retail centers, gas stations, and public spaces.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What security features are included?',
        answer: 'CCTV surveillance, alarm systems, and secure locking mechanisms.'
      },
      {
        question: 'Are they suitable for outdoor installation?',
        answer: 'Yes, weatherproof designs for outdoor ATM placement.'
      },
      {
        question: 'What utilities are required?',
        answer: 'Electricity and internet connectivity for transaction processing.'
      }
    ],
    trustBand: {
      citiesCovered: 200,
      completedProjects: 350,
      customerSatisfaction: 95
    }
  },
  'Control Room': {
    name: 'Control Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Temperature-controlled control rooms for industrial and technical operations',
    longDescription: `Control Rooms provide climate-controlled environments for monitoring and controlling industrial processes. These PUF-insulated structures maintain precise temperature and humidity conditions for sensitive equipment and operations.

Each Control Room features advanced insulation, climate control systems, and ergonomic workspaces. The design ensures optimal conditions for operators and equipment performance.

Our Control Rooms are essential for industries requiring precise environmental control and continuous monitoring.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What temperature range is maintained?',
        answer: 'Typically 18-25°C with humidity control, customizable for specific requirements.'
      },
      {
        question: 'What insulation material is used?',
        answer: 'High-quality PUF (Polyurethane Foam) for excellent thermal insulation.'
      },
      {
        question: 'Are they suitable for 24/7 operation?',
        answer: 'Yes, designed for continuous operation with backup systems.'
      }
    ],
    trustBand: {
      citiesCovered: 180,
      completedProjects: 280,
      customerSatisfaction: 97
    }
  },
  'Solar Control Room': {
    name: 'Solar Control Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Solar-powered control rooms with sustainable energy solutions',
    longDescription: `Solar Control Rooms combine climate control with sustainable solar power systems. These insulated structures provide efficient monitoring environments while minimizing environmental impact through renewable energy.

Each Solar Control Room features solar panels, battery storage, and energy-efficient climate control. The design ensures reliable operation even in remote locations without grid power.

Our Solar Control Rooms are ideal for environmental monitoring, renewable energy facilities, and off-grid operations.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'How much solar power is generated?',
        answer: 'Depends on location and panel size; typically sufficient for full operation.'
      },
      {
        question: 'What backup systems are included?',
        answer: 'Battery storage and optional generator backup for continuous operation.'
      },
      {
        question: 'Are they suitable for remote locations?',
        answer: 'Yes, designed for off-grid operation in remote areas.'
      }
    ],
    trustBand: {
      citiesCovered: 120,
      completedProjects: 160,
      customerSatisfaction: 98
    }
  },
  'Clean Room': {
    name: 'Clean Room',
    category: 'PUF Insulated Cabin',
    icon: Package,
    description: 'Sterile environments with HEPA filtration and contamination control',
    longDescription: `Clean Rooms provide controlled environments for applications requiring strict contamination control. These PUF-insulated structures maintain clean air standards for pharmaceutical, electronics, and research facilities.

Each Clean Room features HEPA filtration, positive pressure systems, and contamination monitoring. The design ensures compliance with clean room standards while maintaining comfortable working conditions.

Our Clean Rooms are essential for industries where particle contamination must be minimized.`,
    gallery: ['/products-hero.png', '/siteoffice-2.webp', '/products-hero.png', '/siteoffice-2.webp',],
  advantages: [
  {
    icon: 'Trees',
    title: 'Sustainable timber construction',
    description: 'Built using responsibly sourced and durable timber materials that ensure environmental sustainability while maintaining long-term structural strength.'
  },
  {
    icon: 'Zap',
    title: 'Energy-efficient design',
    description: 'The A-frame structure and material selection help regulate indoor temperatures, reducing energy consumption for heating and cooling.'
  },
  {
    icon: 'Wrench',
    title: 'Low maintenance requirements',
    description: 'High-quality treated wood and protective finishes minimize upkeep, allowing the cabin to retain its beauty with minimal maintenance.'
  },
  {
    icon: 'Thermometer',
    title: 'Excellent insulation properties',
    description: 'Natural wood combined with modern insulation techniques helps maintain comfortable indoor temperatures throughout the year.'
  },
  {
    icon: 'LayoutDashboard',
    title: 'Customizable interior layouts',
    description: 'Flexible interior configurations allow homeowners to personalize spaces such as lofts, living areas, kitchens, and bedrooms.'
  },
  {
    icon: 'CloudRain',
    title: 'Weather-resistant finishes',
    description: 'Special protective coatings and treatments shield the structure from rain, sun exposure, and varying climatic conditions.'
  }
],
variants: [
  {
    variantName: 'Studio',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '1-BHK',
    variantImage: '/siteoffice-2.webp',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '2-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  },
  {
    variantName: '3-BHK',
    variantImage: '/products-hero.png',
    variantInterior: '/siteoffice-2.webp'
  }
],
    faq: [
      {
        question: 'What clean room class is achieved?',
        answer: 'ISO Class 7-8 standards, with higher classes available upon request.'
      },
      {
        question: 'What industries use clean rooms?',
        answer: 'Pharmaceuticals, electronics, biotechnology, and precision manufacturing.'
      },
      {
        question: 'How is air quality maintained?',
        answer: 'Through HEPA filters, positive pressure, and continuous monitoring.'
      }
    ],
    trustBand: {
      citiesCovered: 140,
      completedProjects: 190,
      customerSatisfaction: 99
    }
  }
}

export const getProductsByCategory = (category: string): ProductData[] => {
  return Object.values(productsData).filter(product => product.category === category)
}

export const getProductByName = (name: string): ProductData | undefined => {
  return productsData[name]
}