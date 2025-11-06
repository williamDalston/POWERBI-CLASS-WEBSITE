export interface CapstoneProject {
  id: string
  title: string
  description: string
  level: 'beginner' | 'intermediate' | 'advanced'
  moduleNumber: number
  estimatedHours: number
  objectives: string[]
  requirements: string[]
  tasks: Array<{
    title: string
    description: string
    checklist: string[]
  }>
  deliverables: string[]
  rubric: Array<{
    criterion: string
    points: number
    description: string
  }>
  resources: Array<{
    name: string
    url: string
    type: 'dataset' | 'template' | 'guide' | 'video'
  }>
  exampleDomain?: string
  isCompleted?: boolean
}

export const capstoneProjects: CapstoneProject[] = [
  {
    id: 'capstone-1-beginner',
    title: 'Beginner\'s End-to-End Report',
    description: 'Build your first complete BI report from a messy Excel dataset. This capstone reinforces all foundational skills from Part 1: connecting to data, transforming with Power Query, and creating visualizations.',
    level: 'beginner',
    moduleNumber: 4,
    estimatedHours: 8,
    objectives: [
      'Successfully connect to and transform messy data',
      'Create a professional single-page dashboard',
      'Apply Power Query transformations including Unpivot',
      'Demonstrate understanding of basic visuals',
      'Publish to Power BI Service'
    ],
    requirements: [
      'Complete Modules 1-4',
      'Access to Power BI Desktop',
      'Access to Power BI Service (free account)',
      'Download the Superstore Sales dataset'
    ],
    tasks: [
      {
        title: 'Get Data',
        description: 'Connect to an Excel file and navigate the Power BI Desktop interface.',
        checklist: [
          'Open Power BI Desktop',
          'Download Superstore_Sales.xlsx dataset',
          'Use Get Data > Excel to connect',
          'Preview tables in Navigator',
          'Select Transform (not Load)'
        ]
      },
      {
        title: 'Transform Data',
        description: 'Clean and shape the data using Power Query Editor.',
        checklist: [
          'Promote first row as headers',
          'Remove null and blank values',
          'Fix data types (dates, numbers, text)',
          'Use Unpivot to reshape wide data (if applicable)',
          'Remove unnecessary columns',
          'Apply and review all steps',
          'Close & Apply to load data'
        ]
      },
      {
        title: 'Visualize',
        description: 'Build a single-page dashboard with key metrics and charts.',
        checklist: [
          'Create Card visual: Total Sales',
          'Create Line Chart: Sales over Time (by Month)',
          'Create Bar Chart: Sales by Product Category',
          'Create Map visual: Sales by Region',
          'Add Year slicer',
          'Add Product Category slicer',
          'Format and align all visuals'
        ]
      },
      {
        title: 'Publish & Share',
        description: 'Export to Power BI Service and prepare for presentation.',
        checklist: [
          'Click Publish to Power BI Service',
          'Select or create workspace',
          'Verify report uploaded successfully',
          'Create optional dashboard by pinning visuals',
          'Prepare a brief summary of insights'
        ]
      }
    ],
    deliverables: [
      'A .pbix file of your report',
      'Screenshot of the published dashboard in Power BI Service',
      'Brief written summary (200-300 words) describing:',
      '  - What insights you discovered',
      '  - Key transformations applied',
      '  - Areas you found challenging'
    ],
    rubric: [
      {
        criterion: 'Data Transformation',
        points: 25,
        description: 'Successfully cleans data, fixes types, removes nulls, and applies Unpivot where appropriate'
      },
      {
        criterion: 'Visualization Quality',
        points: 30,
        description: 'Creates all required visuals with proper formatting, clear titles, and good use of color'
      },
      {
        criterion: 'Dashboard Design',
        points: 20,
        description: 'Organizes visuals logically, uses white space effectively, and creates a professional layout'
      },
      {
        criterion: 'Interactivity',
        points: 15,
        description: 'Successfully implements slicers that filter all visuals appropriately'
      },
      {
        criterion: 'Publication',
        points: 10,
        description: 'Successfully publishes to Power BI Service and completes all documentation'
      }
    ],
    resources: [
      {
        name: 'Superstore Sales Dataset (Excel)',
        url: 'https://example.com/datasets/superstore-sales.xlsx',
        type: 'dataset'
      },
      {
        name: 'Power Query Unpivot Tutorial',
        url: 'https://learn.microsoft.com/power-bi',
        type: 'guide'
      },
      {
        name: 'Report Design Best Practices',
        url: 'https://learn.microsoft.com/power-bi',
        type: 'guide'
      },
      {
        name: 'Publishing to Power BI Service',
        url: 'https://learn.microsoft.com/power-bi',
        type: 'video'
      }
    ]
  },
  {
    id: 'capstone-2-intermediate',
    title: 'Interactive Sales Dashboard',
    description: 'Design and build a multi-page, enterprise-ready dashboard showcasing advanced DAX, data modeling, and storytelling techniques.',
    level: 'intermediate',
    moduleNumber: 11,
    estimatedHours: 16,
    objectives: [
      'Build a proper Star Schema data model',
      'Write sophisticated DAX measures',
      'Create interactive multi-page reports',
      'Implement advanced features (drill-through, bookmarks, AI visuals)',
      'Demonstrate data storytelling principles'
    ],
    requirements: [
      'Complete Modules 5-11',
      'Advanced DAX knowledge (CALCULATE, ALL, iterators)',
      'Understanding of star schema design',
      'Proficient with Power BI Service'
    ],
    tasks: [
      {
        title: 'Data Modeling',
        description: 'Load multiple tables and build a proper star schema.',
        checklist: [
          'Import Fact_Sales, Dim_Product, Dim_Customer, Dim_Date tables',
          'Disable Auto-detect relationships in Options',
          'Open Model View',
          'Create relationships manually (drag-and-drop keys)',
          'Set correct cardinality (One-to-Many)',
          'Set correct cross-filter direction (Single)',
          'Verify star schema structure',
          'Hide unnecessary fields from Report View'
        ]
      },
      {
        title: 'DAX Measures',
        description: 'Create a comprehensive Measures table with advanced calculations.',
        checklist: [
          'Create empty Measures table',
          'Write Total Sales measure using SUMX',
          'Write Sales YTD using TOTALYTD',
          'Write Sales PY using SAMEPERIODLASTYEAR',
          'Write Sales YoY % using DIVIDE',
          'Write % of Total Category Sales using CALCULATE and ALL',
          'Create Order Count measure',
          'Format all measures appropriately'
        ]
      },
      {
        title: 'Multi-Page Report',
        description: 'Build a comprehensive report with multiple pages and advanced interactivity.',
        checklist: [
          'Create Summary page with KPIs',
          'Create Details page with drill-down tables',
          'Configure drill-through from Summary to Details',
          'Add Bookmarks for Sales vs. Profit view toggle',
          'Add Custom Report Tooltips to key visuals',
          'Apply conditional formatting to profit table',
          'Include one AI Visual (Key Influencers)',
          'Ensure mobile-optimized layout'
        ]
      },
      {
        title: 'Data Storytelling',
        description: 'Create a narrative that guides users through insights.',
        checklist: [
          'Add dynamic text measures to explain data',
          'Use color strategically (red for negative, green for positive)',
          'Create clear page titles and sections',
          'Add navigation buttons',
          'Test drill-through functionality',
          'Test bookmark toggles',
          'Review overall user experience'
        ]
      }
    ],
    deliverables: [
      'A .pbix file with proper star schema and advanced DAX',
      'Screenshots of both report pages',
      'Video walkthrough (5 minutes) demonstrating key features'
    ],
    rubric: [
      {
        criterion: 'Data Model Design',
        points: 20,
        description: 'Implements correct star schema with proper relationships, cardinality, and cross-filter direction'
      },
      {
        criterion: 'DAX Mastery',
        points: 25,
        description: 'Writes all required measures correctly, demonstrates understanding of context and CALCULATE'
      },
      {
        criterion: 'Report Design',
        points: 20,
        description: 'Creates professional multi-page report with clear hierarchy, proper formatting, and visual best practices'
      },
      {
        criterion: 'Advanced Features',
        points: 20,
        description: 'Successfully implements drill-through, bookmarks, tooltips, conditional formatting, and AI visuals'
      },
      {
        criterion: 'Data Storytelling',
        points: 15,
        description: 'Uses narrative techniques to guide user through insights with clear annotations and explanations'
      }
    ],
    resources: [
      {
        name: 'Multi-Table Retail Dataset',
        url: 'https://example.com/datasets/retail-dataset.zip',
        type: 'dataset'
      },
      {
        name: 'DAX Measure Template',
        url: 'https://example.com/templates/dax-measures.txt',
        type: 'template'
      },
      {
        name: 'Star Schema Design Guide',
        url: 'https://learn.microsoft.com/power-bi',
        type: 'guide'
      }
    ]
  },
  {
    id: 'capstone-3-advanced',
    title: 'Advanced-Level Portfolio Project',
    description: 'Create a self-directed, portfolio-worthy project showcasing enterprise BI mastery. Choose your domain, design your solution, and build a complete end-to-end Power BI solution.',
    level: 'advanced',
    moduleNumber: 18,
    estimatedHours: 40,
    objectives: [
      'Demonstrate mastery of the entire Power BI workflow',
      'Build an enterprise-grade solution',
      'Implement advanced security and governance',
      'Optimize for performance',
      'Create portfolio-ready documentation'
    ],
    requirements: [
      'Complete all 18 modules',
      'Deep understanding of DAX, modeling, and service features',
      'Access to Power BI Premium or Pro license',
      'Understanding of Microsoft Fabric (optional but recommended)',
      'Domain knowledge in chosen business area'
    ],
    tasks: [
      {
        title: 'Project Planning',
        description: 'Choose your domain and design your solution.',
        checklist: [
          'Select business domain (Healthcare, Supply Chain, HR, Finance, etc.)',
          'Identify 3-5 key business questions',
          'Design data model architecture',
          'Create project timeline',
          'Gather or prepare sample data'
        ]
      },
      {
        title: 'Data Preparation',
        description: 'Connect to multiple messy sources and transform data.',
        checklist: [
          'Connect to 3+ disparate data sources',
          'Clean and transform data in Power Query',
          'Handle data quality issues',
          'Create reusable transformation logic',
          'Build comprehensive star schema'
        ]
      },
      {
        title: 'Advanced DAX & Modeling',
        description: 'Implement sophisticated calculations and model design.',
        checklist: [
          'Write Time Intelligence measures',
          'Implement Calculation Groups (optional but recommended)',
          'Create complex CALCULATE filters',
          'Build role-playing dimensions if needed',
          'Optimize model for performance'
        ]
      },
      {
        title: 'Security & Governance',
        description: 'Implement enterprise security features.',
        checklist: [
          'Create User Permissions table',
          'Implement Dynamic Row-Level Security',
          'Test RLS with different user roles',
          'Configure semantic model security in Service',
          'Document security architecture'
        ]
      },
      {
        title: 'Performance Optimization',
        description: 'Identify and fix performance bottlenecks.',
        checklist: [
          'Use Performance Analyzer to find slow visuals',
          'Analyze DAX queries in DAX Studio (optional)',
          'Document one performance issue found',
          'Implement optimization (model, DAX, or visual)',
          'Measure improvement in query times'
        ]
      },
      {
        title: 'Advanced Features',
        description: 'Showcase mastery of Power BI features.',
        checklist: [
          'Build multi-page interactive report',
          'Implement Bookmarks for navigation',
          'Create Custom Report Tooltips',
          'Add Drill-through pages',
          'Include AI Visuals (Key Influencers or Decomposition Tree)',
          'Integrate with Microsoft Fabric Lakehouse (optional)',
          'Use Copilot to generate narrative insights'
        ]
      }
    ],
    deliverables: [
      'Complete .pbix file with all features implemented',
      'Published report in Power BI Service or App',
      '5-minute video presentation',
      'Project documentation (1000+ words)',
      'Portfolio submission link'
    ],
    rubric: [
      {
        criterion: 'Domain & Business Value',
        points: 15,
        description: 'Chooses relevant domain, addresses real business questions, and delivers actionable insights'
      },
      {
        criterion: 'Data Model Excellence',
        points: 20,
        description: 'Builds optimized star schema, handles complex data relationships, demonstrates modeling best practices'
      },
      {
        criterion: 'DAX Mastery',
        points: 20,
        description: 'Writes sophisticated DAX, uses advanced patterns, demonstrates deep understanding of context and evaluation'
      },
      {
        criterion: 'Security & Governance',
        points: 15,
        description: 'Successfully implements Dynamic RLS, documents security approach, follows enterprise best practices'
      },
      {
        criterion: 'Performance Optimization',
        points: 10,
        description: 'Identifies performance bottleneck, implements optimization, measures and documents improvement'
      },
      {
        criterion: 'Advanced Features',
        points: 10,
        description: 'Implements multiple advanced features (bookmarks, tooltips, AI visuals, drill-through, Copilot)'
      },
      {
        criterion: 'Documentation & Communication',
        points: 10,
        description: 'Creates comprehensive documentation, delivers clear video presentation, effectively communicates value'
      }
    ],
    resources: [
      {
        name: 'Healthcare Claims Dataset',
        url: 'https://example.com/datasets/healthcare-claims.zip',
        type: 'dataset'
      },
      {
        name: 'Supply Chain Analytics Dataset',
        url: 'https://example.com/datasets/supply-chain.zip',
        type: 'dataset'
      },
      {
        name: 'Dynamic RLS Template',
        url: 'https://example.com/templates/dynamic-rls.txt',
        type: 'template'
      }
    ]
  }
]

export function getCapstoneById(id: string): CapstoneProject | undefined {
  return capstoneProjects.find(capstone => capstone.id === id)
}

export function getCapstonesByLevel(level: 'beginner' | 'intermediate' | 'advanced'): CapstoneProject[] {
  return capstoneProjects.filter(capstone => capstone.level === level)
}

export function getNextCapstone(completedCapstones: string[]): CapstoneProject | undefined {
  return capstoneProjects.find(capstone => !completedCapstones.includes(capstone.id))
}





