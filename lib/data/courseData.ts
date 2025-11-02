export interface VideoChapter {
  title: string
  timestamp: number // in seconds
}

export interface Lesson {
  id: string
  title: string
  description: string
  moduleNumber: number
  lessonNumber: number
  duration?: number // in minutes
  videoUrl?: string
  videoChapters?: VideoChapter[]
  content?: {
    concept?: string
    discussion?: string
    tables?: Array<{
      title: string
      headers: string[]
      rows: string[][]
    }>
    labs?: string[]
    keyPoints?: string[]
    insiderTips?: string[]
  }
  exerciseMaterials?: Array<{
    name: string
    url: string
    type?: 'pdf' | 'dataset' | 'code' | 'cheatsheet' | 'pbix' | 'other'
  }>
  isCompleted?: boolean
  tags?: string[]
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  topic?: string
  timeSpent?: number
  lastAccessed?: string
  completionDate?: string
}

export interface Module {
  id: string
  title: string
  description: string
  moduleNumber: number
  lessons: Lesson[]
}

export interface Part {
  id: string
  title: string
  description: string
  modules: Module[]
}

export const courseData: Part[] = [
  {
    id: "part-0",
    title: "Course Introduction and Foundations",
    description: "Foundation of BI and course orientation",
    modules: [
      {
        id: "module-0",
        title: "Setting the Stage - Your Journey to Mastery",
        description: "Power BI fundamentals and basics",
        moduleNumber: 0,
        lessons: [
          {
            id: "0-1",
            moduleNumber: 0,
            lessonNumber: 1,
            title: "What is Business Intelligence (BI) and Why Now?",
            description: "Business Intelligence (BI) is the comprehensive process of transforming raw data into coherent, visually immersive, and interactive insights to drive informed business decisions. This stands in contrast to traditional, static data analysis often performed in spreadsheets.",
            duration: 30,
            difficulty: 'beginner',
            tags: ["Business Intelligence", "BI Fundamentals", "Data Analysis"],
            topic: 'Business Intelligence',
            content: {
              concept: "Business Intelligence (BI) is the comprehensive process of transforming raw data into coherent, visually immersive, and interactive insights to drive informed business decisions. Unlike traditional reporting, BI enables organizations to move from reactive (historical reporting) to proactive (predictive analytics) decision-making. BI encompasses data preparation, analysis, visualization, and sharing of insights across an organization.",
              discussion: "Traditional spreadsheets like Microsoft Excel, while familiar and accessible, have significant limitations when faced with modern data challenges. They often struggle with large data volumes (Excel's row limit is 1,048,576 rows), require time-consuming manual refresh processes that are error-prone, and produce static visualizations that are difficult to collaborate on and don't automatically update. Modern BI platforms like Power BI are designed to solve these specific problems through scalable data handling (unlimited rows with cloud storage), automated data refresh (scheduled updates from multiple sources), and the creation of dynamic, interactive reports that respond to user selections in real-time. BI tools have evolved from simple reporting to sophisticated analytics platforms that integrate machine learning, natural language processing, and cloud-scale data processing. The shift to remote work and distributed teams has made collaborative BI more critical than ever, as teams need shared dashboards and real-time insights accessible from anywhere.",
              keyPoints: [
                "BI transforms raw data into actionable insights through visualization and analysis",
                "Modern BI platforms solve scalability, automation, and collaboration challenges that spreadsheets cannot",
                "BI enables proactive decision-making through real-time analytics and predictive insights",
                "Cloud-based BI platforms like Power BI offer unlimited data scale and automatic updates",
                "BI is now accessible to business users, not just data scientists, democratizing analytics",
                "The COVID-19 pandemic accelerated adoption of BI tools as organizations needed remote access to data"
              ],
              insiderTips: [
                "Think of BI as 'Excel on steroids' - familiar concepts (like formulas) but at enterprise scale",
                "The key differentiator of modern BI is automation: data refreshes automatically, eliminating manual errors",
                "BI adoption is accelerating because business users can now build reports without IT involvement",
                "Power BI's integration with Microsoft 365 means your Excel skills translate directly to BI",
                "Start thinking about BI use cases in your current role: what reports do you create manually that could be automated?",
                "BI is not just for large enterprises - small businesses benefit from Power BI's free Desktop version"
              ],
              tables: [
                {
                  title: "Spreadsheet vs. Modern BI Comparison",
                  headers: ["Aspect", "Traditional Spreadsheets", "Modern BI (Power BI)"],
                  rows: [
                    ["Data Volume Limit", "~1 million rows (Excel)", "Unlimited (cloud storage)"],
                    ["Data Refresh", "Manual copy-paste or formulas", "Automated scheduled refreshes"],
                    ["Collaboration", "Email files back and forth", "Cloud-based shared workspaces"],
                    ["Interactivity", "Static charts", "Dynamic, filterable dashboards"],
                    ["Data Sources", "Single file or manual imports", "200+ connectors (databases, APIs, files)"],
                    ["Mobile Access", "Limited (Excel Mobile)", "Native mobile apps with full interactivity"],
                    ["Cost", "One-time purchase or subscription", "Free Desktop + $10/month Pro per user"],
                    ["Learning Curve", "Most people know basics", "Similar to Excel, but more powerful"]
                  ]
                }
              ]
            },
          },
          {
            id: "0-2",
            moduleNumber: 0,
            lessonNumber: 2,
            title: "Course Overview and Target Audience",
            description: "This curriculum follows a three-part structure, guiding a student from \"Beginner\" to \"Analyst\" and finally to \"Master.\" A \"Case Study Scenario\" (e.g., analyzing sales for a retail company) will be use",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'AI Features',
            content: {
              concept: "This curriculum follows a three-part structure, guiding a student from \"Beginner\" to \"Analyst\" and finally to \"Master.\" A \"Case Study Scenario\" (e.g., analyzing sales for a retail company) will be used throughout the course to provide real-world context",
              discussion: "The course is designed for any professional who works with data, regardless of their current title.11 It is particularly impactful for \"Excel power users\" who are seeking to advance their analytical capabilities beyond the constraints of spreadsheets.11 It is also the ideal learning path for aspiring Data Analysts 12, Business Analysts, and IT professionals who need to leverage data for decision-making",
            },
          },
          {
            id: "0-3",
            moduleNumber: 0,
            lessonNumber: 3,
            title: "Prerequisites: What Do You Really Need?",
            description: "While there are no formal prerequisites to begin 13, a baseline of data literacy is highly beneficial",
            duration: 20,
            difficulty: 'beginner',
            tags: ["DAX", "Visualizations", "Power Query"],
            topic: 'DAX',
            content: {
              concept: "While there are no formal prerequisites to begin 13, a baseline of data literacy is highly beneficial",
              discussion: "Certain existing skills can be considered \"accelerators\" for the learning process. A strong familiarity with Microsoft Excel, especially functions, formulas, and Pivot Tables, provides a significant advantage.11 This is because core components of Power BI, such as Power Query and the DAX formula language, are shared with modern Excel. Other helpful, though not required, concepts include a basic understanding of databases (e.g., the concept of a table) and data visualization (e.g., the purpose of a bar chart)",
            },
          },
          {
            id: "0-4",
            moduleNumber: 0,
            lessonNumber: 4,
            title: "The BI Landscape: Power BI vs. Tableau vs. Excel",
            description: "This lesson positions Power BI within its competitive landscape to establish why it is a critical tool to learn",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "This lesson positions Power BI within its competitive landscape to establish why it is a critical tool to learn. The choice of a BI tool is not purely technical; it is strategic and impacts your organization's data culture, cost structure, and scalability.",
              discussion: "Each BI tool serves different needs. Excel excels at ad-hoc analysis for small datasets, Tableau focuses on powerful visualization capabilities for large datasets, while Power BI provides an end-to-end solution from data ingestion to sharing, with seamless Microsoft ecosystem integration. Understanding these differences helps you make informed decisions and understand Power BI's unique value proposition. Power BI's integration with Microsoft Fabric (OneLake) positions it as the future of analytics in the Microsoft ecosystem, offering unlimited data scale and modern AI capabilities like Copilot.",
              tables: [
                {
                  title: "BI Tool Comparison (Updated Nov 2025)",
                  headers: ["Feature", "Excel", "Tableau", "Power BI"],
                  rows: [
                    ["Strength", "Ad-hoc analysis", "Viz-first approach", "End-to-End + Fabric"],
                    ["Data Volume", "Small (< 1M rows)", "Large", "Unlimited (OneLake)"],
                    ["Cost", "Free (basic)", "$$$ (per user)", "Free Desktop + Pro $10/mo"],
                    ["AI Capabilities", "Basic", "Limited", "Copilot GA (Oct 2025)"],
                    ["Microsoft Integration", "Native", "Limited", "Seamless"],
                    ["Learning Curve", "Low (familiar)", "Moderate", "Low to Moderate"],
                    ["Best For", "Personal analysis, small teams", "Visualization-focused orgs", "Enterprise BI, Microsoft shops"]
                  ]
                }
              ],
              keyPoints: [
                "Power BI provides the best balance of capability, cost, and Microsoft ecosystem integration",
                "OneLake integration makes Power BI future-proof for enterprise data scenarios",
                "Copilot integration gives Power BI a significant AI advantage over competitors",
                "Free Desktop version makes Power BI accessible for learning and small teams"
              ],
              insiderTips: [
                "If your organization uses Microsoft 365, Power BI is often the natural choice for seamless integration",
                "Power BI's cost structure (free Desktop + affordable Pro) makes it accessible for individuals and small businesses",
                "The Fabric ecosystem positions Power BI as more than just a visualization tool - it's a complete analytics platform",
                "Copilot features are continuously improving, making Power BI increasingly competitive in the AI space"
              ]
            },
          },
        ],
      },
    ],
  },
  {
    id: "part-1",
    title: "The Power BI Beginner – From Blank Canvas to First Report",
    description: "Learn to connect to data, transform it with Power Query, and build your first interactive reports",
    modules: [
      {
        id: "module-1",
        title: "The Power BI Ecosystem: Components and Setup",
        description: "Power BI fundamentals and basics",
        moduleNumber: 1,
        lessons: [
          {
            id: "1-1",
            moduleNumber: 1,
            lessonNumber: 1,
            title: "The Three Parts of Power BI",
            description: "Power BI is not a single program but a collection of software services, apps, and connectors that work together",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Data Modeling',
            content: {
              concept: "Power BI is not a single program but a collection of software services, apps, and connectors that work together. Understanding this ecosystem is crucial for effective Power BI usage.",
              discussion: "A student's foundational mental model must include these three components and their interactions (including cloud vs. on-premises options): Power BI Desktop is a free, standalone Windows application and the primary \"authoring\" tool where all development happens—connecting to data, transforming, modeling, and building reports. Power BI Service is the cloud-based SaaS offering that serves as the \"collaboration and sharing\" hub where reports from Desktop are published, shared, collaborated on, and assembled into dashboards. Power BI Mobile provides native apps for iOS and Android devices, serving as the \"consumption\" tool that allows users to access and interact with reports and dashboards on the go.",
              tables: [
                {
                  title: "Power BI Ecosystem Components",
                  headers: ["Component", "Primary Use", "Key Action", "Environment"],
                  rows: [
                    ["Power BI Desktop", "Authoring & Development", "Build Reports", "Windows PC / ARM"],
                    ["Power BI Service", "Sharing & Collaboration", "Create Dashboards", "Cloud (Browser)"],
                    ["Power BI Mobile", "Consumption & Viewing", "Access Anywhere", "Phone/Tablet"]
                  ]
                }
              ],
              keyPoints: [
                "Desktop is where you BUILD, Service is where you SHARE, Mobile is where you CONSUME",
                "All three components work together to provide a complete BI solution",
                "Desktop is free forever, making Power BI accessible for learning and professional development",
                "Service requires a Pro license ($10/month) or Premium capacity for sharing"
              ],
              insiderTips: [
                "Always build and test in Desktop first before publishing to Service",
                "Use Desktop's free license to learn Power BI without any cost barriers",
                "Mobile apps are perfect for executives who need quick insights on the go",
                "ARM support (2025) means Power BI Desktop now works on modern Windows laptops without x86 emulation"
              ]
            },
          },
          {
            id: "1-2",
            moduleNumber: 1,
            lessonNumber: 2,
            title: "Installation and Setup (Hands-On Lab)",
            description: "Installing the free Power BI Desktop application",
            duration: 20,
            difficulty: 'beginner',
            tags: ["2025 Features"],
            topic: 'Business Intelligence',
            content: {
              concept: "Installing the free Power BI Desktop application",
              discussion: "There are two primary installation methods 24:Microsoft Store (Recommended): This version updates automatically in the background, ensuring the user always has the latest features.24Direct Download (Executable): This version requires manual updates but offers more control for enterprise environments.24Note for Mac Users: Power BI Desktop is a Windows-only application. Mac users must utilize a virtual machine environment, such as Parallels, to run a Windows instance.25Note for ARM Users (New in 2025): As of September/October 2025, Power BI Desktop is now supported to run natively on ARM-based Windows PCs",
            },
          },
          {
            id: "1-3",
            moduleNumber: 1,
            lessonNumber: 3,
            title: "Post-Install: Enabling Preview Features",
            description: "Power BI is updated on a monthly basis. Many of the most powerful new features are first released in \"preview\" and must be manually enabled by the user. This lesson shows you how to access cutting-edge features before they become standard.",
            duration: 20,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding Preview Features', timestamp: 0 },
              { title: 'Navigating to Preview Settings', timestamp: 240 },
              { title: 'Important Preview Features (2025)', timestamp: 480 },
              { title: 'Enabling and Using Preview Features', timestamp: 780 },
              { title: 'Best Practices for Preview Features', timestamp: 1020 }
            ],
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals", "2025 Features", "Setup"],
            topic: 'Power BI Setup',
            content: {
              concept: "Power BI is updated on a monthly basis. Many of the most powerful new features are first released in \"preview\" and must be manually enabled by the user. Preview features allow you to access cutting-edge capabilities before they become generally available, giving you early access to improvements in modeling, visualization, and AI capabilities.",
              discussion: "A critical first step for any new user is to navigate to File > Options and settings > Options > Preview features. Enabling these features (e.g., the new Model Explorer, On-object interaction, or Copilot capabilities) not only provides access to the latest tools but also reinforces a core concept: the tool is in a constant state of evolution, and staying current is essential. Preview features are Microsoft's way of testing new functionality with users before making it standard. While preview features are generally stable, they may change before general availability. Key preview features to enable include: Model Explorer (better navigation of complex data models), On-object interaction (new way to interact with visuals directly), DAX Query View (for advanced DAX debugging), Visual Calculations (simpler alternative to complex DAX), and Copilot integration (AI-powered assistance). After enabling preview features, Power BI will prompt you to restart. Once restarted, you'll have access to the latest capabilities. Note that preview features may have slight performance differences or UI changes that could affect reports, so test thoroughly before deploying to production.",
              keyPoints: [
                "Preview features give early access to the latest Power BI capabilities",
                "Access via File > Options and settings > Options > Preview features",
                "Preview features require a Power BI Desktop restart to activate",
                "Model Explorer, On-object interaction, and Copilot are key 2025 preview features",
                "Preview features may change before general availability",
                "Enable preview features to stay current with Power BI evolution"
              ],
              insiderTips: [
                "Enable ALL preview features - they're Microsoft's way of testing, not beta software",
                "Preview features are safe to use - Microsoft only promotes stable features to preview",
                "Model Explorer is a game-changer for complex models - enable it immediately",
                "On-object interaction (2025) makes building visuals faster and more intuitive",
                "DAX Query View preview is essential for advanced DAX users",
                "If a preview feature breaks something, you can always disable it",
                "Check preview features monthly after Power BI updates - new ones appear regularly",
                "Some features require Fabric/Service connections - you'll learn about this later"
              ],
              labs: [
                "Open Power BI Desktop (if not already open)",
                "Navigate to File > Options and settings > Options",
                "Click 'Preview features' in the left sidebar",
                "Review the list of available preview features",
                "Enable 'Model explorer' (if not already enabled)",
                "Enable 'On-object interaction' (new in 2025)",
                "Enable 'DAX query view' (if you plan to learn advanced DAX)",
                "Enable 'Visual calculations' (simpler DAX alternative)",
                "Enable 'Copilot' features (AI-powered assistance)",
                "Click OK and restart Power BI Desktop when prompted",
                "After restart, verify preview features are active in the interface",
                "Note: Preview features may appear in different locations depending on the feature"
              ],
              tables: [
                {
                  title: "Key Preview Features (2025)",
                  headers: ["Feature", "What It Does", "Why Enable It", "Risk Level"],
                  rows: [
                    ["Model Explorer", "Better navigation of complex data models", "Essential for multi-table models", "Low"],
                    ["On-object Interaction", "New visual interaction model", "Faster report building", "Low"],
                    ["DAX Query View", "Advanced DAX debugging tool", "For mastering DAX", "Low"],
                    ["Visual Calculations", "Simpler alternative to complex DAX", "Easier calculations on visuals", "Low"],
                    ["Copilot", "AI-powered report building and DAX generation", "Future of Power BI development", "Low"],
                    ["Enhanced Tooltips", "Custom tooltip improvements", "Better user experience", "Low"],
                    ["New Connectors", "Early access to new data sources", "Access latest integrations", "Low"]
                  ]
                }
              ]
            },
          },
          {
            id: "1-4",
            moduleNumber: 1,
            lessonNumber: 4,
            title: "Tour of the Power BI Desktop Interface",
            description: "Understanding the three main \"views\" within Power BI Desktop is key to navigating the workflow",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'AI Features',
            content: {
              concept: "Understanding the three main \"views\" within Power BI Desktop is key to navigating the workflow",
            },
          },
        ],
      },
      {
        id: "module-2",
        title: "Data Acquisition – Connecting to Your World",
        description: "Power BI fundamentals and basics",
        moduleNumber: 2,
        lessons: [
          {
            id: "2-1",
            moduleNumber: 2,
            lessonNumber: 1,
            title: "The \"Get Data\" Experience",
            description: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Power BI Service',
            content: {
              concept: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services",
            },
          },
          {
            id: "2-2",
            moduleNumber: 2,
            lessonNumber: 2,
            title: "Connecting to Files (Hands-On Lab)",
            description: "Connecting to the most common flat-file data sources",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Connecting to the most common flat-file data sources",
              discussion: "This lab will walk through connecting to:Excel Workbooks (.xlsx): Power BI can connect to Excel tables and worksheets.32 This lesson will also cover best practices for structuring Excel data (e.g., using proper tables, avoiding merged cells) to make it ready for Power BI.Text/CSV Files (.csv): A ubiquitous format for data export.32PDF: Power BI can extract data from tables found within PDF documents",
            },
          },
          {
            id: "2-3",
            moduleNumber: 2,
            lessonNumber: 3,
            title: "Connecting to Databases",
            description: "Connecting to relational databases, which form the backbone of most enterprise data systems",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'AI Features',
            content: {
              concept: "Connecting to relational databases, which form the backbone of most enterprise data systems",
              discussion: "The primary example will be SQL Server.10 This lesson will explain the concepts of a Server Name and Database Name, as well as the different authentication modes (e.g., Windows vs. SQL Server credentials)",
            },
          },
          {
            id: "2-4",
            moduleNumber: 2,
            lessonNumber: 4,
            title: "Connecting to Web and Cloud Services",
            description: "Acquiring data directly from online sources including web pages, SharePoint, and Azure cloud services. Learn how to connect to modern cloud-based data sources.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Overview of Web and Cloud Connectors', timestamp: 0 },
              { title: 'Connecting to Web Pages', timestamp: 180 },
              { title: 'Connecting to SharePoint', timestamp: 480 },
              { title: 'Connecting to Azure Services', timestamp: 780 },
              { title: 'Authentication Methods', timestamp: 1080 },
              { title: 'Hands-On Lab: Web Connection', timestamp: 1320 }
            ],
            difficulty: 'beginner',
            tags: ["Data Acquisition", "Web", "Cloud Services", "SharePoint"],
            topic: 'Data Acquisition',
            content: {
              concept: "Power BI can acquire data directly from online sources, eliminating the need to download files manually. The \"From Web\" connector allows you to pull tabular data from web pages, while cloud service connectors enable direct connections to SharePoint, Azure SQL Database, and hundreds of other online services. This enables real-time data access and eliminates manual file management.",
              discussion: "From Web connector: A simple demonstration involves using the \"From Web\" connector to pull tabular data from a web page (e.g., a table from a Wikipedia article). Power BI analyzes the HTML structure and identifies tables that can be extracted. This is useful for regularly updated data on websites, government datasets, or public APIs that return HTML tables. The connector requires a valid URL and may require authentication for protected pages. SharePoint folders: SharePoint connector allows connection to SharePoint document libraries, enabling you to combine multiple files from a folder automatically. This is particularly powerful for scenarios where multiple users upload files to a SharePoint folder - Power BI can automatically include new files as they're added. Azure SQL Database: Azure SQL is Microsoft's cloud database service. Connecting to Azure SQL is similar to connecting to on-premises SQL Server but uses cloud-specific authentication (often Azure Active Directory). Other cloud connectors include Salesforce, Dynamics 365, Google Analytics, and hundreds more. Each connector may have specific authentication requirements (OAuth, API keys, username/password). Premium connectors (indicated by a diamond icon) require a Pro or Premium license.",
              keyPoints: [
                "From Web connector extracts tables from web pages automatically",
                "SharePoint connector enables automatic file combining from document libraries",
                "Azure SQL Database and other cloud services connect directly",
                "200+ cloud connectors available for different services",
                "Premium connectors require Pro or Premium licenses",
                "Web connections refresh automatically when data is updated online"
              ],
              insiderTips: [
                "From Web works best with simple HTML tables - complex JavaScript-rendered tables may not work",
                "SharePoint folder connector is powerful for automatically combining files from multiple users",
                "Azure SQL connections use Azure AD authentication - more secure than SQL auth",
                "Premium connectors are indicated by a diamond icon in the Get Data dialog",
                "Web scraping may violate terms of service - always check website policies",
                "For frequently changing web data, consider Power Automate to download to a file first",
                "Cloud connectors often require authentication - save credentials securely",
                "SharePoint Online requires a Power BI Pro license or higher"
              ],
              labs: [
                "Connect to a web page: Get Data > Web",
                "Enter a URL with tabular data (e.g., Wikipedia page with a data table)",
                "Power BI will analyze the page and show available tables",
                "Select a table and preview the data",
                "Click 'Transform Data' to clean the data",
                "Connect to SharePoint: Get Data > SharePoint folder (or SharePoint Online List)",
                "Enter SharePoint site URL",
                "Authenticate with your Microsoft account",
                "Browse available lists or folders",
                "Select a SharePoint list or folder with files",
                "Preview the data structure",
                "Transform data as needed",
                "Optional: Connect to Azure SQL Database",
                "Enter Azure SQL server name (e.g., 'server.database.windows.net')",
                "Enter database name",
                "Select authentication method (Azure AD recommended)",
                "Authenticate and select tables or views"
              ],
              tables: [
                {
                  title: "Web and Cloud Connector Categories",
                  headers: ["Category", "Examples", "Use Case", "License Required"],
                  rows: [
                    ["Web", "Any URL with HTML tables", "Public data, government datasets", "None (free)"],
                    ["SharePoint", "SharePoint Online, Lists, Folders", "Team collaboration files", "Pro or higher"],
                    ["Azure", "Azure SQL, Azure Blob Storage", "Cloud databases and storage", "Pro or higher"],
                    ["SaaS Apps", "Salesforce, Dynamics 365, Google Analytics", "Business application data", "Pro or higher"],
                    ["Files in Cloud", "OneDrive, Google Drive", "Cloud file storage", "Pro or higher"]
                  ]
                }
              ]
            },
          },
          {
            id: "2-5",
            moduleNumber: 2,
            lessonNumber: 5,
            title: "Understanding Connection Modes (A Critical Choice)",
            description: "When connecting to a data source, the user must choose how the data is accessed. This choice has profound and lasting implications for performance, data freshness, and their trade-offs",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Performance"],
            topic: 'Performance',
            content: {
              concept: "When connecting to a data source, the user must choose how the data is accessed. This choice has profound and lasting implications for performance, data freshness, and their trade-offs. This is one of the first and most critical architectural decisions you'll make in Power BI.",
              discussion: "Import mode is the default, most common, and highest-performance option. Power BI makes a copy of the data and stores it in its highly compressed in-memory (VertiPaq) engine inside the .pbix file. Reports are very fast because all data is local, but the data is only as fresh as the last refresh. DirectQuery mode does not copy the data—instead, it sends queries directly to the source database in real-time. This is ideal for extremely large datasets (that would exceed file size limits) or when \"live\" data is a strict requirement. The trade-off is that report performance is now dependent on the speed of the underlying database. Composite mode allows a \"mix\" of both approaches, enabling a developer to Import dimension tables (small, rarely changing) while using DirectQuery for a massive fact table. This choice is the first and most critical performance decision a developer makes. The choice of \"Import\" necessitates learning about data refresh schedules and gateways (covered in Module 12). The choice of \"DirectQuery\" necessitates learning about query optimization and database performance (covered in Module 13).",
              tables: [
                {
                  title: "Connection Mode Comparison (Import vs. DirectQuery)",
                  headers: ["Mode", "Data Location", "Report Performance", "Data Freshness", "Common Use Case"],
                  rows: [
                    ["Import", "Stored inside Power BI file", "Very Fast (seconds)", "Stale (snapshot)", "Most standard reports (< 100M rows)"],
                    ["DirectQuery", "Stays in source database", "Depends on source DB (seconds to minutes)", "Real-time (live)", "Massive datasets; real-time needs"],
                    ["Composite", "Mix: Dims imported, Facts queried", "Variable (depends on query)", "Hybrid", "Large fact tables with small dimensions"]
                  ]
                }
              ],
              keyPoints: [
                "Import is the default choice and works for 90% of use cases",
                "DirectQuery requires careful database optimization and can lead to slower reports",
                "Composite mode offers a middle ground but adds complexity",
                "This decision impacts everything: refresh schedules, gateway requirements, and report performance"
              ],
              insiderTips: [
                "Always start with Import unless you have a specific reason not to (e.g., data too large, real-time requirement)",
                "DirectQuery works best with well-indexed databases and simple queries",
                "Composite mode is advanced—master Import and DirectQuery separately first",
                "File size limits: Import mode is limited by .pbix file size (1GB compressed, 10GB uncompressed) and Pro license limits"
              ]
            },
          },
        ],
      },
      {
        id: "module-3",
        title: "Data Transformation – The Power Query Editor",
        description: "Power BI fundamentals and basics",
        moduleNumber: 3,
        lessons: [
          {
            id: "3-1",
            moduleNumber: 3,
            lessonNumber: 1,
            title: "Introduction to Power Query (The ETL Mindset)",
            description: "After connecting to data, the \"Navigator\" dialog asks to \"Load\" or \"Transform.\" The best practice is to always select \"Transform\" first.35 This opens the Power Query Editor",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "After connecting to data, the \"Navigator\" dialog asks to \"Load\" or \"Transform.\" The best practice is to always select \"Transform\" first.35 This opens the Power Query Editor",
              discussion: "Power Query is the \"data kitchen\" for Power BI. It is a visual Extract, Transform, and Load (ETL) tool used to clean, shape, and prepare data for analysis.13 The UI consists of the Ribbon, the list of queries, and the Applied Steps pane.37 This pane is the core of Power Query's power: every transformation is recorded as a step that is re-played every time the data is refreshed, making the cleaning process fully automated and non-destructive",
            },
          },
          {
            id: "3-2",
            moduleNumber: 3,
            lessonNumber: 2,
            title: "Basic Table Transformations (Hands-On Lab)",
            description: "Applying the most common steps to clean messy data including removing columns, filtering rows, sorting, and promoting headers.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Overview of Basic Transformations', timestamp: 0 },
              { title: 'Choosing and Removing Columns', timestamp: 240 },
              { title: 'Filtering Rows', timestamp: 600 },
              { title: 'Sorting Data', timestamp: 900 },
              { title: 'Promoting Headers', timestamp: 1140 },
              { title: 'Hands-On Lab Practice', timestamp: 1320 }
            ],
            difficulty: 'beginner',
            tags: ["Power Query", "Data Transformation", "Data Cleaning"],
            topic: 'Power Query',
            content: {
              concept: "Basic table transformations are the foundation of data cleaning in Power Query. These essential operations include choosing which columns to keep, removing unwanted columns, filtering out bad rows, sorting data for readability, and fixing headers. Mastering these four operations will solve 80% of your data cleaning problems.",
              discussion: "Using a sample dataset, this lab covers the most common transformations: Choosing and Removing Columns is about keeping only the data you need - unnecessary columns waste memory and slow down reports. In Power Query, you select columns you want to keep, then right-click to remove other columns. Alternatively, you can select columns to remove and delete them. Filtering Rows removes unwanted data like null values, blanks, or rows that don't meet criteria. Power Query provides filter dropdowns on each column header - click the filter icon to remove blanks, nulls, or apply custom filters. Sorting Data organizes your data for better viewing and can help identify issues. You can sort by clicking the sort icons on column headers or using the Sort button in the Home ribbon. \"Use First Row as Headers\" promotes the first row to become column names when headers are in the data itself. This is crucial for CSV files or Excel imports where the header row is mixed with data rows.",
              labs: [
                "Load a sample dataset into Power Query",
                "Column Operations:",
                "  - Select multiple columns (Ctrl+Click)",
                "  - Right-click and 'Remove Other Columns'",
                "  - Try removing individual columns",
                "  - Notice: Each action creates a new step",
                "Filtering Rows:",
                "  - Click filter icon on a column header",
                "  - Remove blanks: Uncheck 'null' and 'empty'",
                "  - Text Filters: Try 'Does not contain' or 'Does not equal'",
                "  - Number Filters: Try 'Is greater than' or 'Is less than'",
                "  - Apply filter and review results",
                "Sorting Data:",
                "  - Click sort ascending icon (A-Z) on a column",
                "  - Click sort descending icon (Z-A)",
                "  - Sort by multiple columns: Hold Shift, click sort icons",
                "Promoting Headers:",
                "  - Import data where row 1 should be headers",
                "  - Click 'Use First Row as Headers'",
                "  - Notice column names change",
                "Practice combining transformations:",
                "  - Remove unwanted columns",
                "  - Filter out nulls",
                "  - Sort by date",
                "Review all steps in Applied Steps pane"
              ],
              keyPoints: [
                "Remove unnecessary columns to improve performance and reduce memory usage",
                "Filtering rows early in the pipeline improves downstream performance",
                "Sorting can reveal data quality issues and patterns",
                "Promoting headers is essential when headers are in the data itself",
                "Each transformation creates a new step in Applied Steps pane",
                "You can modify or delete any step to change results"
              ],
              insiderTips: [
                "Remove columns as early as possible - they consume memory even if unused",
                "Filter out nulls and blanks early - they cause issues in calculations later",
                "Use 'Keep Top Rows' filter to quickly test transformations on sample data",
                "Sort descending on numeric columns to quickly find outliers or errors",
                "Promoting headers is a common first step - do it immediately after source",
                "You can undo multiple steps by deleting them from Applied Steps pane",
                "Check Applied Steps regularly to understand your transformation pipeline",
                "Filter dropdowns show data quality issues (like unexpected text in number columns)"
              ],
              tables: [
                {
                  title: "Common Basic Transformations",
                  headers: ["Transformation", "When to Use", "Power Query Location", "Example"],
                  rows: [
                    ["Remove Columns", "Columns not needed for analysis", "Right-click column or Transform ribbon", "Remove ID columns used only for joins"],
                    ["Filter Rows", "Remove nulls, blanks, outliers", "Column header filter icon", "Filter out rows where Sales < 0"],
                    ["Sort", "Organize data, find issues", "Column header sort icons", "Sort by Date descending to see latest"],
                    ["Promote Headers", "Headers are in first data row", "Home ribbon, Transform ribbon", "CSV import where row 1 has headers"]
                  ]
                }
              ]
            },
          },
          {
            id: "3-3",
            moduleNumber: 3,
            lessonNumber: 3,
            title: "Data Cleaning and Formatting",
            description: "Fixing \"dirty\" data to make it usable for analysis",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Fixing \"dirty\" data to make it usable for analysis is a fundamental skill in Power BI. Real-world data is rarely clean and ready for visualization.",
              discussion: "Data cleaning involves identifying and fixing issues that prevent accurate analysis. Common problems include misspellings, inconsistent formatting, missing values, and incorrect data types. Replace Values corrects misspellings or standardizes categories (e.g., 'USA', 'United States', 'U.S.A.' → 'United States'). Change Data Type converts columns from text to whole numbers, decimals, or dates—critical for proper calculations and sorting. Handle Errors removes or replaces error values that occur during transformations. Fill Down/Up is a powerful tool for \"un-merging\" cells from messy Excel exports where merged cells create blank values. Split and Merge Columns allows combining or separating text data (e.g., splitting 'John Smith' into 'First Name' and 'Last Name', or merging them back).",
              labs: [
                "Open a messy dataset with various data quality issues",
                "Use Replace Values to standardize category names (e.g., all variations of 'USA' to 'United States')",
                "Change data types: Convert text numbers to numeric types, text dates to date types",
                "Handle errors: Remove rows with errors or replace error values with nulls",
                "Use Fill Down to complete missing values in merged cell scenarios",
                "Split a 'Full Name' column into 'First Name' and 'Last Name'",
                "Practice the reverse: Merge 'First Name' and 'Last Name' back into 'Full Name'",
                "Review all applied steps to understand the transformation pipeline"
              ],
              keyPoints: [
                "Data cleaning is often 80% of the work in data analysis",
                "Power Query's non-destructive approach means you can always undo or modify steps",
                "Applied Steps pane shows the complete transformation history",
                "Clean data = reliable insights; dirty data = misleading reports"
              ],
              insiderTips: [
                "Always check data types first—text numbers won't sort or calculate correctly",
                "Use Replace Values with 'Match entire cell contents' for precise replacements",
                "Fill Down is your friend when dealing with Excel exports with merged headers",
                "Handle errors early in the pipeline to avoid cascading issues",
                "Preview data frequently to catch issues before they compound"
              ]
            },
          },
          {
            id: "3-4",
            moduleNumber: 3,
            lessonNumber: 4,
            title: "Shaping Data – Pivot and Unpivot",
            description: "Restructuring data to be suitable for analysis",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Restructuring data to be suitable for analysis is a critical transformation skill. Power BI requires data in a specific \"tall\" format rather than the \"wide\" format common in Excel.",
              discussion: "Unpivot is a crucial operation that transforms wide data (e.g., columns for Jan, Feb, Mar, Apr) into tall data (one 'Month' column, one 'Value' column). This tall format is the correct, tidy format for BI tools. Power BI visuals work best when data is structured with one row per observation. Pivot is the reverse operation, used less frequently, that aggregates data into a wide format. Understanding when to use each transformation is key to building effective data models.",
              labs: [
                "Start with a wide dataset: Sales data with columns for each month (Jan, Feb, Mar, etc.)",
                "Select all month columns and use Unpivot Columns",
                "Rename the 'Attribute' column to 'Month' and 'Value' column to 'Sales'",
                "Verify the transformation: You should now have one row per month per product",
                "Practice the reverse: Pivot the Month column to see how it restructures the data",
                "Understand why Unpivot is preferred for Power BI visualizations"
              ],
              keyPoints: [
                "BI tools prefer 'tall' data (many rows, few columns) over 'wide' data (few rows, many columns)",
                "Unpivot is one of the most common transformations you'll perform",
                "Pivot can aggregate data but reduces granularity",
                "Time series data in Excel often needs unpivoting for Power BI"
              ],
              insiderTips: [
                "If your data has months/years as columns, you'll almost certainly need to unpivot",
                "Use 'Unpivot Other Columns' to keep certain columns while unpivoting others",
                "Unpivoted data is easier to filter and aggregate in Power BI",
                "Remember: Unpivot preserves all data; Pivot aggregates it"
              ]
            },
          },
          {
            id: "3-5",
            moduleNumber: 3,
            lessonNumber: 5,
            title: "Advanced Shaping (Conditional Columns & Grouping)",
            description: "Using Power Query's UI to perform more advanced logic",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "Using Power Query's UI to perform more advanced logic allows you to create calculated columns and aggregations without writing code.",
              discussion: "Conditional Columns create new columns based on IF/THEN logic (e.g., categorizing sales amounts into 'High,' 'Medium,' or 'Low' based on thresholds). This is done through a visual interface that generates M code behind the scenes. Grouping and Aggregating performs a 'Group By' operation to summarize data before it's even loaded into the model (e.g., calculating total sales per region). This can significantly reduce model size by pre-aggregating data at the source, improving both refresh time and report performance.",
              labs: [
                "Create a conditional column: 'Price Category' based on UnitPrice thresholds",
                "Use IF statements: If Price > 100 then 'High', else if Price > 50 then 'Medium', else 'Low'",
                "Practice grouping: Group by Region and calculate SUM of Sales",
                "Group by multiple columns: Region and Year, calculating COUNT and SUM",
                "Compare data before and after grouping to understand the transformation",
                "Experiment with different aggregation functions: SUM, AVERAGE, COUNT, MIN, MAX"
              ],
              keyPoints: [
                "Conditional columns are user-friendly alternatives to writing M code",
                "Grouping can dramatically reduce data size by pre-aggregating",
                "Pre-aggregation improves performance but reduces granularity",
                "These transformations happen at refresh time, not query time"
              ],
              insiderTips: [
                "Group early if you don't need row-level detail—it speeds up everything downstream",
                "Conditional columns are easier to maintain than complex M formulas for simple logic",
                "Use grouping to create summary tables for executive dashboards",
                "Remember: Once grouped, you lose the ability to drill down to individual transactions"
              ]
            },
          },
          {
            id: "3-6",
            moduleNumber: 3,
            lessonNumber: 6,
            title: "Introduction to Parameters",
            description: "Using Power Query parameters to make queries dynamic and reusable. Learn how to create parameters for file paths, dates, and other values that change frequently.",
            duration: 20,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What are Parameters?', timestamp: 0 },
              { title: 'Creating Your First Parameter', timestamp: 240 },
              { title: 'Using Parameters in Queries', timestamp: 480 },
              { title: 'Common Parameter Use Cases', timestamp: 720 },
              { title: 'Parameters for File Paths', timestamp: 960 },
              { title: 'Parameters for Dates and Filters', timestamp: 1200 }
            ],
            difficulty: 'beginner',
            tags: ["Power Query", "Parameters", "Reusability"],
            topic: 'Power Query',
            content: {
              concept: "Power Query parameters allow you to make queries dynamic and reusable by replacing hard-coded values with variables. Parameters enable you to change inputs like file paths, dates, server names, or filter values without modifying the query code. This makes your Power BI solution more flexible and easier to maintain.",
              discussion: "Parameters are essential for creating reusable Power BI solutions. Instead of hard-coding a file path like 'C:\\Data\\Sales_2024.xlsx', you create a parameter 'File_Path' that can be changed by the user. Common use cases include: file paths (allowing users to point to different data sources), date ranges (changing start and end dates for filtering), server/database names (switching between dev/test/prod environments), and filter values (allowing dynamic filtering based on user input). Parameters can be created manually through Manage Parameters, or automatically when using certain features like Folder connector. Parameters can be text, numbers, dates, or even references to other queries. Once created, parameters appear in the Queries pane and can be referenced in any query using the parameter name. This creates a single point of change - update the parameter value, and all queries using it will update automatically. Parameters are especially powerful when combined with functions and query folding, allowing you to create dynamic data refresh scenarios.",
              keyPoints: [
                "Parameters make queries dynamic by replacing hard-coded values with variables",
                "Common uses: file paths, dates, server names, filter values",
                "Parameters can be text, numbers, dates, or query references",
                "Update the parameter once, and all queries using it update automatically",
                "Parameters enable reusable solutions that work across different environments",
                "Parameters can be created manually or automatically (e.g., Folder connector)"
              ],
              insiderTips: [
                "Use parameters for file paths when combining multiple files - makes adding new files easy",
                "Parameters for dates enable dynamic date filtering without query modification",
                "Server/database parameters are essential for dev/test/prod deployment scenarios",
                "Parameters with default values provide fallbacks if users don't specify values",
                "You can reference parameters in M code using the parameter name directly",
                "Create a parameter list from a query for user-friendly dropdown selection",
                "Parameters are saved with your .pbix file but can be refreshed independently"
              ],
              labs: [
                "Navigate to Home > Manage Parameters > New Parameter",
                "Create a text parameter: Name = 'File_Path', Type = Text",
                "Set a default value (e.g., 'C:\\Data\\Sales.xlsx')",
                "Use the parameter in a query: Replace hard-coded file path with parameter name",
                "Test: Change the parameter value and refresh to see the query update",
                "Create a date parameter: Name = 'Start_Date', Type = Date",
                "Use the date parameter in a filter step",
                "Create a number parameter: Name = 'Sales_Threshold', Type = Decimal",
                "Use the number parameter to filter sales above threshold",
                "Practice: Create parameters for a multi-file scenario (folder of CSV files)",
                "Verify: Changing parameter values updates queries automatically"
              ],
              tables: [
                {
                  title: "Common Parameter Types and Use Cases",
                  headers: ["Parameter Type", "Common Use Case", "Example Value", "Benefit"],
                  rows: [
                    ["Text", "File paths, server names", "'C:\\Data\\Sales.xlsx'", "Easy file switching"],
                    ["Date", "Start/end dates for filtering", "2024-01-01", "Dynamic date ranges"],
                    ["Decimal/Integer", "Threshold values, limits", "1000 or 100", "Flexible filtering"],
                    ["True/False", "Feature toggles", "true or false", "Enable/disable logic"],
                    ["Query", "Dynamic list of values", "List of products", "User-selected values"]
                  ]
                }
              ]
            },
          },
          {
            id: "3-7",
            moduleNumber: 3,
            lessonNumber: 7,
            title: "Combining Queries: Merge vs. Append (A Critical Concept)",
            description: "Combining multiple tables (queries) into a single, unified table.13 The distinction between these two operations is fundamental",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Combining multiple tables (queries) into a single, unified table. The distinction between Merge and Append is fundamental and often confuses beginners.",
              discussion: "Append stacks data vertically, adding more rows. This is used when you have files of the same structure (e.g., Sales_2023 and Sales_2024). The tables must have the same column headers to append correctly. Merge joins data horizontally, adding more columns. This is analogous to a VLOOKUP in Excel. It is used to join two different tables (e.g., a Sales table and a Product table) based on a common key (e.g., ProductID). This lesson also introduces Join Kinds (Inner, Left Outer, Right Outer, Full Outer, Left Anti, Right Anti) which determine which rows are included in the result.",
              tables: [
                {
                  title: "Merge vs. Append",
                  headers: ["Operation", "Analogy", "Data Direction", "Result", "Use Case"],
                  rows: [
                    ["Append", "Stacking", "Vertical (adds rows)", "More rows", "Combining Sales_2023 and Sales_2024"],
                    ["Merge", "VLOOKUP", "Horizontal (adds columns)", "More columns", "Adding Product Names to a Sales table"]
                  ]
                },
                {
                  title: "Join Kinds (for Merge)",
                  headers: ["Join Kind", "What it Keeps", "When to Use"],
                  rows: [
                    ["Inner", "Only matching rows from both tables", "When you only want complete matches"],
                    ["Left Outer", "All rows from left table + matches from right", "Most common - keeps all sales, adds product info"],
                    ["Right Outer", "All rows from right table + matches from left", "Rare - when right table is primary"],
                    ["Full Outer", "All rows from both tables", "When you want everything, matching or not"],
                    ["Left Anti", "Only rows from left with NO match in right", "Finding orphaned records"],
                    ["Right Anti", "Only rows from right with NO match in left", "Finding unused lookup values"]
                  ]
                }
              ],
              labs: [
                "Append: Combine three monthly sales files (Jan, Feb, Mar) into one table",
                "Verify: The appended table should have the sum of all rows from the three files",
                "Merge: Join Sales table with Product table using ProductID as the key",
                "Try different join kinds: Start with Left Outer, then compare with Inner",
                "Understand when each join kind is appropriate",
                "Practice with mismatched keys to see how merge handles missing values"
              ],
              keyPoints: [
                "Append = stacking (rows), Merge = joining (columns)",
                "Tables must have same structure for Append; need a common key for Merge",
                "Left Outer Join is the most commonly used join kind",
                "Merge is NOT for creating relationships—use Model View for that"
              ],
              insiderTips: [
                "Use Append for time series data from multiple periods",
                "Merge in Power Query is for ETL; Relationships in Model View are for analysis",
                "Left Outer Join is usually what you want—it keeps all your fact table rows",
                "If you're merging to add lookup values, consider if a relationship would be better",
                "Check for duplicate keys before merging—they can cause row multiplication"
              ]
            },
          },
          {
            id: "3-8",
            moduleNumber: 3,
            lessonNumber: 8,
            title: "Introduction to the Advanced Editor (The M Language)",
            description: "This lesson serves to demystify the code behind Power Query, not to teach it (yet)",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "This lesson serves to demystify the code behind Power Query, not to teach it (yet)",
              discussion: "By clicking the \"Advanced Editor\" button 38, a user can see that every click made in the UI has been writing code in a functional language called \"M\".46 This plants the seed for advanced work in",
            },
          },
          {
            id: "3-9",
            moduleNumber: 3,
            lessonNumber: 9,
            title: "Close & Apply",
            description: "The final step in the Power Query Editor",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "The final step in the Power Query Editor",
              discussion: "Clicking \"Close & Apply\" executes all the applied steps, closes the editor, and loads the clean, transformed data into the Power BI data model",
            },
          },
        ],
      },
      {
        id: "module-4",
        title: "Data Visualization – Building Your First Report",
        description: "Power BI fundamentals and basics",
        moduleNumber: 4,
        lessons: [
          {
            id: "4-1",
            moduleNumber: 4,
            lessonNumber: 1,
            title: "Introduction to the Visualizations Pane",
            description: "Learn how to use the Visualizations and Fields panes to build your first charts. Understanding these two panes is the foundation of Power BI report building.",
            duration: 20,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding the Visualizations Pane', timestamp: 0 },
              { title: 'Understanding the Fields Pane', timestamp: 240 },
              { title: 'How Visuals and Fields Work Together', timestamp: 600 },
              { title: 'Visual Fields Well', timestamp: 900 },
              { title: 'Adding Your First Visual', timestamp: 1140 },
              { title: 'Practice Exercise', timestamp: 1380 }
            ],
            difficulty: 'beginner',
            tags: ["Visualizations", "Report Building"],
            topic: 'Visualizations',
            content: {
              concept: "The Visualizations pane contains chart types (bar charts, line charts, tables, etc.), while the Fields pane contains your data tables and columns. These two panes work together to create visualizations: you select a visual type from one pane, then drag data fields from the other pane to populate it. Understanding these panes is the foundation of Power BI report building.",
              discussion: "The core workflow for building a report is: 1. Select a visual type (e.g., Bar chart) from the Visualizations pane. 2. Drag data fields from the Fields pane into the visual's \"wells\" (e.g., X-axis, Y-axis, Legend, Values). The Visualizations pane shows 33+ built-in visual types ranging from basic (Bar, Line, Pie) to advanced (Gauge, KPI, Scatter). Each visual type has specific \"fields wells\" that accept certain data types - for example, a map needs geographic data, a bar chart needs categorical data for the axis and numeric data for values. The Fields pane shows all your tables (from Power Query) with their columns organized hierarchically. Clicking the dropdown arrow next to a table shows all columns. Icons next to field names indicate data type (text, number, date, etc.). When you drag a field to a well, Power BI automatically aggregates numeric fields (SUM, AVERAGE, etc.) and uses categorical fields for grouping. Understanding which fields to use in which wells comes from understanding chart best practices and your data structure.",
              keyPoints: [
                "Visualizations pane = chart types, Fields pane = your data",
                "Building a visual = select chart type + drag fields to wells",
                "Each visual type has specific wells (X-axis, Y-axis, Legend, Values, etc.)",
                "Drag numeric fields to Values well for aggregation (SUM, COUNT, etc.)",
                "Drag categorical fields to Axis or Legend wells for grouping",
                "Power BI automatically suggests appropriate aggregations"
              ],
              insiderTips: [
                "Start with basic visuals (Bar, Line, Table) - they're most universally understood",
                "Hover over visual types in the pane to see their names and recommended use",
                "Use Ctrl+Click to select multiple fields at once before dragging",
                "Wrong data in wrong well? No problem - just drag it to the correct well",
                "Fields wells expand as you add more fields to complex visuals",
                "Red fields indicate errors or incompatible data types",
                "You can change a visual's type after creating it - just click a different visual icon",
                "The Format pane (paintbrush icon) appears when you select a visual"
              ],
              labs: [
                "Ensure you're in Report View (not Data or Model view)",
                "Familiarize yourself with the interface:",
                "  - Visualizations pane (right side) - chart types",
                "  - Fields pane (right side) - data tables and columns",
                "  - Report canvas (center) - where visuals appear",
                "Build your first visual:",
                "  - Click 'Bar chart' icon in Visualizations pane",
                "  - Notice it appears on canvas as an empty visual",
                "  - Notice Fields pane shows fields wells for the visual",
                "  - Drag a category field to 'Axis' well (e.g., Product Category)",
                "  - Drag a numeric field to 'Values' well (e.g., Sales)",
                "  - Visual instantly updates with data",
                "Explore visual wells:",
                "  - Drag another field to 'Legend' well",
                "  - Notice how visual changes",
                "  - Click X on fields in wells to remove them",
                "  - Drag fields to different wells to see the effect",
                "Try different visual types:",
                "  - Remove the visual (click Delete)",
                "  - Click 'Line chart' icon and rebuild",
                "  - Try 'Table' visual - notice different wells",
                "Practice: Build a basic bar chart successfully"
              ],
              tables: [
                {
                  title: "Understanding Visual Wells",
                  headers: ["Well Name", "Typical Data Type", "Purpose", "Example"],
                  rows: [
                    ["Axis/X-axis", "Categorical", "Groups data, bottom of chart", "Product Category, Month"],
                    ["Values/Y-axis", "Numeric", "Aggregated measure", "Sum of Sales, Count of Orders"],
                    ["Legend", "Categorical", "Creates series/colors", "Region, Year"],
                    ["Tooltip", "Any", "Additional detail on hover", "Customer Name, Notes"],
                    ["Visual-level Filters", "Any", "Filters this visual only", "Top 10 products"],
                    ["Drillthrough", "Categorical", "Navigation to detail page", "Region, Product"]
                  ]
                },
                {
                  title: "Common Visual Types for Beginners",
                  headers: ["Visual Type", "Best For", "Required Wells", "Example Use Case"],
                  rows: [
                    ["Bar/Column", "Comparing categories", "Axis + Values", "Sales by Product Category"],
                    ["Line", "Trends over time", "Axis (time) + Values", "Monthly Sales Trend"],
                    ["Table", "Raw data display", "Values columns", "Top 10 Customers"],
                    ["Card", "Single number KPI", "Values only", "Total Sales"],
                    ["Pie", "Part-to-whole", "Legend + Values", "Sales by Region"],
                    ["Map", "Geographic data", "Location + Size/Color", "Sales by State"]
                  ]
                }
              ]
            },
          },
          {
            id: "4-2",
            moduleNumber: 4,
            lessonNumber: 2,
            title: "Creating Core Visuals (Hands-On Lab)",
            description: "Building the most common and effective chart types including bar/column charts, line charts, pie charts, and maps. Master these five essential visualizations.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Bar and Column Charts', timestamp: 0 },
              { title: 'Line Charts for Trends', timestamp: 480 },
              { title: 'Pie and Treemap Charts', timestamp: 900 },
              { title: 'Map Visualizations', timestamp: 1260 },
              { title: 'Choosing the Right Chart Type', timestamp: 1500 },
              { title: 'Lab: Build All Chart Types', timestamp: 1740 }
            ],
            difficulty: 'beginner',
            tags: ["Visualizations", "Charts", "Report Building"],
            topic: 'Visualizations',
            content: {
              concept: "This hands-on lab guides you through building the most common and effective chart types in Power BI. Each chart type serves a specific purpose: bar/column charts for comparing categories, line charts for showing trends over time, pie/treemap charts for part-to-whole relationships, and maps for geographic visualizations. Mastering these five chart types will enable you to create most business reports effectively.",
              discussion: "Bar/Column Chart: Best for categorical comparisons where you want to compare values across different categories. Example: Sales by Product Category, where each bar represents total sales for a category. Column charts are vertical bars (good for category names), bar charts are horizontal (better for long category names). Line Chart: Ideal for showing trends over time. Example: Monthly Sales Trend where the x-axis shows months and y-axis shows sales amount. Line charts excel at showing how a metric changes over time periods (days, weeks, months, years). Pie/Treemap: Perfect for part-to-whole relationships where you want to show how components contribute to a total. Example: Sales by Region showing what percentage of total sales each region represents. Pie charts work well with 5-7 categories; Treemap is better for more categories as it uses rectangles instead of wedges. Map: Essential for geographic data visualization. Example: Sales by State where each state is colored by sales amount. Power BI supports various map visuals including filled maps, bubble maps, and shape maps (for custom geographies like sales territories). Table: Not technically a chart but essential for showing detailed data. Example: Top 10 Customers table showing names, sales, and other attributes. Tables are perfect when you need to show specific row-level details.",
              keyPoints: [
                "Bar/Column charts: Best for comparing categories",
                "Line charts: Best for showing trends over time",
                "Pie/Treemap: Best for part-to-whole relationships",
                "Map: Essential for geographic data visualization",
                "Table: Perfect for showing detailed row-level data",
                "Choose chart type based on your story and data type"
              ],
              insiderTips: [
                "Horizontal bar charts (vs. vertical columns) when category names are long",
                "Line charts should always have time on the x-axis - never use them for categories",
                "Avoid pie charts with more than 7 slices - use treemap instead",
                "Maps require specific geographic data types (State, City, Country) to work properly",
                "Tables are underrated - often the most useful visual for detail analysis",
                "You can change a visual's type anytime by clicking a different chart icon",
                "Format visuals consistently across your report for professional appearance",
                "Test charts with sample data before building the full report"
              ],
              labs: [
                "Bar/Column Chart:",
                "  - Click Column chart icon in Visualizations pane",
                "  - Drag Category field to Axis well",
                "  - Drag Sales field to Values well",
                "  - Chart appears showing comparisons",
                "  - Try changing to Bar chart (horizontal)",
                "Line Chart:",
                "  - Click Line chart icon",
                "  - Drag Date/Time field to Axis well",
                "  - Drag Sales field to Values well",
                "  - Trend line appears",
                "  - Add Legend field to create multiple lines",
                "Pie Chart:",
                "  - Click Pie chart icon",
                "  - Drag Category field to Legend well",
                "  - Drag Sales field to Values well",
                "  - Slices appear showing proportions",
                "  - Try changing to Treemap visual",
                "Map Visual:",
                "  - Click Map icon (or Filled Map)",
                "  - Drag Geographic field (State, City, Country) to Location well",
                "  - Drag Sales field to Size or Color saturation well",
                "  - Map appears with geographic data",
                "Table:",
                "  - Click Table icon",
                "  - Drag multiple fields to Values well",
                "  - Add any fields you want in the table",
                "  - Table shows detailed data",
                "Practice: Build a dashboard with one of each chart type"
              ],
              tables: [
                {
                  title: "Chart Type Selection Guide",
                  headers: ["Chart Type", "Best For", "Data Requirement", "Example Question"],
                  rows: [
                    ["Bar/Column", "Comparing categories", "1 categorical + 1 numeric", "Which product category has highest sales?"],
                    ["Line", "Trends over time", "Time field + numeric", "How has sales trended over months?"],
                    ["Pie", "Part-to-whole", "1 categorical + 1 numeric", "What % of sales is each region?"],
                    ["Treemap", "Part-to-whole (many categories)", "1 categorical + 1 numeric", "How do 20 products contribute to revenue?"],
                    ["Map", "Geographic patterns", "Geographic field + numeric", "Which states have highest sales?"],
                    ["Table", "Detail data", "Multiple fields", "Show me top 10 customers with details"]
                  ]
                }
              ]
            },
          },
          {
            id: "4-3",
            moduleNumber: 4,
            lessonNumber: 3,
            title: "Using Slicers for Interactivity",
            description: "Slicers are on-page visual filters (like a dropdown or list) that allow the end-user to interact with and filter the entire report page. Learn how to create interactive dashboards with slicers.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What are Slicers?', timestamp: 0 },
              { title: 'Adding Slicers to Reports', timestamp: 240 },
              { title: 'Slicer Visual Types', timestamp: 600 },
              { title: 'Multi-Select and Interactions', timestamp: 900 },
              { title: 'Formatting Slicers', timestamp: 1140 },
              { title: 'Lab: Build Interactive Dashboard', timestamp: 1320 }
            ],
            difficulty: 'beginner',
            tags: ["Visualizations", "Interactivity", "Slicers"],
            topic: 'Visualizations',
            content: {
              concept: "Slicers are on-page visual filters that allow end-users to interact with and filter the entire report page dynamically. Unlike page-level filters (which are hidden), slicers are visible visual elements that users can click to filter all visuals on the page. Slicers transform static reports into interactive dashboards, making Power BI reports powerful and user-friendly.",
              discussion: "Slicers provide an intuitive way for users to filter data without understanding the underlying data model. When a user selects a value in a slicer (e.g., '2024' in a Year slicer), all visuals on the page automatically filter to show only data matching that selection. This cross-filtering capability is what makes Power BI reports interactive. Slicer types include: List (dropdown or list box showing all values), Dropdown (collapsed list that expands when clicked), Between (for numeric ranges or date ranges), and Tiles (modern visual tiles for selection). Slicers support single-select or multi-select modes, allowing users to filter by one or multiple values. Slicers can sync across multiple pages, creating a unified filtering experience. Best practices include: placing slicers in consistent locations (often top or left side), limiting the number of slicers (3-5 per page is ideal), using clear labels, and ensuring slicers are visible and easy to use. Slicers work with any data type: text, numbers, dates, and even hierarchies.",
              keyPoints: [
                "Slicers are visible visual filters that users can interact with",
                "Selecting a slicer value filters ALL visuals on the page automatically",
                "Multiple slicer types: List, Dropdown, Between, Tiles",
                "Slicers support single-select or multi-select modes",
                "Slicers can sync across multiple report pages",
                "3-5 slicers per page is optimal for usability"
              ],
              insiderTips: [
                "Place slicers at the top or left side of reports for consistency",
                "Use Dropdown slicers to save space when you have many values",
                "Use 'Between' slicers for date ranges or numeric ranges (sales between $1000-$5000)",
                "Enable 'Select all' option for multi-select slicers with many values",
                "Format slicers to match your report theme for professional appearance",
                "Hide slicer values that don't apply using visual-level filters",
                "Use 'Sync slicers' to share slicers across multiple pages",
                "Test slicers with different data selections to ensure they work correctly"
              ],
              labs: [
                "Add a Year slicer:",
                "  - Click Slicer icon in Visualizations pane",
                "  - Drag Year field to Field well",
                "  - Slicer appears on canvas",
                "  - Click a year value - notice all visuals filter",
                "Add a Region slicer:",
                "  - Add another slicer visual",
                "  - Drag Region field to Field well",
                "  - Select a region - notice both slicers filter all visuals",
                "Configure slicer type:",
                "  - Select the Year slicer",
                "  - In Format pane, change from 'List' to 'Dropdown'",
                "  - Notice how it collapses to save space",
                "Enable multi-select:",
                "  - Select Region slicer",
                "  - In Format pane, enable 'Multi-select'",
                "  - Try selecting multiple regions",
                "Format slicers:",
                "  - Adjust slicer size and position",
                "  - Change colors to match report theme",
                "  - Add titles: 'Select Year' and 'Select Region'",
                "Test interactivity:",
                "  - Select different values in slicers",
                "  - Verify all visuals update correctly",
                "  - Clear selections to show all data",
                "Practice: Build a dashboard with 3 slicers (Year, Region, Product Category)"
              ],
              tables: [
                {
                  title: "Slicer Types Comparison",
                  headers: ["Slicer Type", "Best For", "Space Usage", "User Experience"],
                  rows: [
                    ["List", "Few values (under 10)", "Takes more space", "Shows all options at once"],
                    ["Dropdown", "Many values", "Saves space", "Must click to see options"],
                    ["Between", "Date ranges, numeric ranges", "Compact", "Range selection interface"],
                    ["Tiles", "Visual selection", "Takes space", "Modern, app-like interface"]
                  ]
                },
                {
                  title: "Slicer Best Practices",
                  headers: ["Practice", "Why", "Example"],
                  rows: [
                    ["3-5 slicers max per page", "Too many slicers confuse users", "Year, Region, Product Category"],
                    ["Place consistently", "Users know where to find filters", "Top or left side of report"],
                    ["Use clear labels", "Users understand what they're filtering", "Select Year vs. Year"],
                    ["Enable Select All", "Users can quickly clear filters", "Useful for multi-select"],
                    ["Sync across pages", "Consistent filtering experience", "Same Year filter on all pages"],
                    ["Format consistently", "Professional appearance", "Match report theme colors"]
                  ]
                }
              ]
            },
          },
          {
            id: "4-4",
            moduleNumber: 4,
            lessonNumber: 4,
            title: "Displaying Key Metrics: Cards, KPIs, and Gauges",
            description: "Highlighting the most important, single-number metrics using Card, KPI, and Gauge visuals. Learn how to create impactful dashboard KPIs.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What are KPIs and Metrics?', timestamp: 0 },
              { title: 'Card Visual for Simple Numbers', timestamp: 240 },
              { title: 'KPI Visual for Metrics vs. Targets', timestamp: 600 },
              { title: 'Gauge Visual for Ranges', timestamp: 900 },
              { title: 'Choosing the Right Visual', timestamp: 1140 },
              { title: 'Lab: Build KPI Dashboard', timestamp: 1320 }
            ],
            difficulty: 'beginner',
            tags: ["Visualizations", "KPIs", "Metrics"],
            topic: 'Visualizations',
            content: {
              concept: "Highlighting the most important, single-number metrics is essential for executive dashboards and quick decision-making. Power BI provides three key visuals for displaying metrics: Card (simple single number), KPI (metric vs. target with status indicator), and Gauge (metric within a range). These visuals are typically placed at the top of dashboards to immediately communicate key business performance.",
              discussion: "Card Visual: Use the Card visual to display a large, single number like \"Total Sales\" or \"Number of Customers.\" Cards are simple and clean - they show just the number, making them perfect for quick glances. Cards automatically format large numbers (e.g., 1,234,567 becomes 1.2M) and can include labels. KPI Visual: The KPI visual is designed to track a metric against a target or goal. It shows the metric value, a target value, and a status indicator (trend indicator or percentage variance). KPIs typically show whether you're on track (green), at risk (yellow), or off track (red). This visual is perfect for executive dashboards where you need to show performance at a glance. Gauge Visual: Gauges display a metric within a range, showing minimum, maximum, and current values. They're perfect for showing metrics like \"Percent of Goal\" or \"Capacity Utilization.\" Gauges use visual indicators (needle, arc) to show position within a range. Best practices include: placing key metrics at the top of dashboards, using consistent formatting across all KPI visuals, limiting to 3-5 key metrics per page, and ensuring targets are realistic and meaningful.",
              keyPoints: [
                "Card visual: Simple single number display (e.g., Total Sales)",
                "KPI visual: Metric vs. target with status indicator",
                "Gauge visual: Metric within a range (min, max, current)",
                "Place KPIs at the top of dashboards for immediate visibility",
                "Limit to 3-5 key metrics per page for clarity",
                "Use consistent formatting across all KPI visuals"
              ],
              insiderTips: [
                "Cards are simplest - use for basic numbers without targets",
                "KPIs require a target value - ensure you have target data in your model",
                "Gauges are perfect for showing percentages or capacity metrics",
                "Format KPIs consistently: same font size, color scheme, and layout",
                "Use conditional formatting in KPIs to show status (green/yellow/red)",
                "Place KPIs in a row at the top of your dashboard",
                "Test KPIs with different filters to ensure they calculate correctly",
                "Use DAX measures (not columns) for KPI values for proper aggregation"
              ],
              labs: [
                "Card Visual:",
                "  - Click Card icon in Visualizations pane",
                "  - Drag Sales measure to Fields well",
                "  - Large number appears",
                "  - Add title: 'Total Sales'",
                "  - Format: Adjust font size, color",
                "KPI Visual:",
                "  - Click KPI icon",
                "  - Drag Sales measure to 'Value' well",
                "  - Drag Target measure to 'Target value' well",
                "  - Drag Date field to 'Trend axis' well (optional)",
                "  - KPI shows metric, target, and status",
                "  - Format: Adjust colors, indicators",
                "Gauge Visual:",
                "  - Click Gauge icon",
                "  - Drag Sales measure to 'Value' well",
                "  - Set minimum value (e.g., 0)",
                "  - Set maximum value (e.g., 1000000)",
                "  - Set target value (e.g., 800000)",
                "  - Gauge shows current value within range",
                "Build KPI Dashboard:",
                "  - Create 3-4 KPIs at top of page",
                "  - Total Sales (Card)",
                "  - Sales vs. Target (KPI)",
                "  - Sales Growth % (Gauge)",
                "  - Format consistently",
                "  - Test with slicers"
              ],
              tables: [
                {
                  title: "KPI Visual Comparison",
                  headers: ["Visual Type", "Best For", "Data Requirement", "Example"],
                  rows: [
                    ["Card", "Simple number display", "1 measure", "Total Sales: $1.2M"],
                    ["KPI", "Metric vs. target", "1 measure + 1 target measure", "Sales: $1.2M vs. Target: $1.0M (120%)"],
                    ["Gauge", "Metric in range", "1 measure + min/max/target", "Sales: $1.2M (80% of $1.5M goal)"]
                  ]
                },
                {
                  title: "KPI Dashboard Best Practices",
                  headers: ["Practice", "Why", "Example"],
                  rows: [
                    ["3-5 KPIs max per page", "Too many metrics overwhelm users", "Sales, Profit, Growth, Customers"],
                    ["Place at top", "Immediate visibility", "First row of dashboard"],
                    ["Use consistent formatting", "Professional appearance", "Same font size, colors"],
                    ["Include labels", "Users understand metrics", "Total Sales vs. just a number"],
                    ["Use conditional formatting", "Visual status indication", "Green = good, Red = bad"],
                    ["Test with filters", "Ensure calculations are correct", "Verify slicers update KPIs"]
                  ]
                }
              ]
            },
          },
          {
            id: "4-5",
            moduleNumber: 4,
            lessonNumber: 5,
            title: "Basic Report Formatting",
            description: "Applying basic design principles for a professional look. Learn how to format reports with themes, alignment, titles, and consistent styling.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Why Formatting Matters', timestamp: 0 },
              { title: 'Using Report Themes', timestamp: 240 },
              { title: 'Aligning Visuals', timestamp: 600 },
              { title: 'Adding Titles and Labels', timestamp: 900 },
              { title: 'Formatting Visuals Consistently', timestamp: 1140 },
              { title: 'Lab: Format a Complete Dashboard', timestamp: 1380 }
            ],
            difficulty: 'beginner',
            tags: ["Visualizations", "Report Design", "Formatting"],
            topic: 'Visualizations',
            content: {
              concept: "Applying basic design principles transforms a functional report into a professional dashboard. Good formatting includes aligning visuals on the canvas, adding clear titles and labels, and applying consistent themes for color and font consistency. Well-formatted reports are easier to understand, more visually appealing, and inspire confidence in the data. This module provides a \"quick win\": by its end, you'll have completed the entire BI workflow (Get -> Transform -> Visualize), building a strong sense of accomplishment.",
              discussion: "Report Themes: Power BI includes built-in themes (e.g., Classic, Modern) that apply consistent colors, fonts, and styling across your report. Themes ensure visual consistency and save time by applying formatting automatically. You can customize themes or create your own. Alignment: Aligning visuals creates a professional, organized appearance. Use the alignment guides that appear when moving visuals, or use the Format pane's Position controls for precise alignment. Snap to grid ensures visuals align perfectly. Titles and Labels: Every visual should have a clear title that explains what it shows. Titles should be concise but descriptive (e.g., 'Sales by Product Category' not just 'Sales'). Formatting Consistency: Use consistent font sizes, colors, and styling across all visuals. This creates visual harmony and makes reports easier to scan. Best practices include: using a limited color palette (3-5 colors), consistent font sizes (headers, labels, values), appropriate white space, and clear visual hierarchy. Format Visuals: Each visual has extensive formatting options in the Format pane - backgrounds, borders, data labels, axes, legends, and more. Format similar visuals consistently for a professional appearance.",
              keyPoints: [
                "Report themes ensure consistent colors, fonts, and styling across your report",
                "Alignment creates professional, organized appearance",
                "Clear titles and labels make reports easier to understand",
                "Consistent formatting creates visual harmony",
                "Good formatting inspires confidence in the data",
                "Format similar visuals consistently for professional appearance"
              ],
              insiderTips: [
                "Use built-in themes as a starting point - customize to your needs",
                "Align visuals using snap-to-grid or alignment guides",
                "Title every visual clearly - users should understand what they're looking at",
                "Use a limited color palette (3-5 colors) for professional appearance",
                "White space is important - don't overcrowd the page",
                "Format similar visuals consistently - same fonts, colors, sizing",
                "Test your report on different screen sizes to ensure readability",
                "Use page-level formatting for backgrounds, page titles, and borders"
              ],
              labs: [
                "Apply a Report Theme:",
                "  - Home ribbon > Switch theme",
                "  - Browse available themes (Classic, Modern, etc.)",
                "  - Select a theme",
                "  - Notice colors and fonts change across report",
                "Align Visuals:",
                "  - Select multiple visuals (Ctrl+Click)",
                "  - Use alignment guides to align",
                "  - Use Format pane > Position for precise alignment",
                "  - Enable snap-to-grid in View ribbon",
                "Add Titles:",
                "  - Select a visual",
                "  - Format pane > Visual > Title",
                "  - Enable title, enter text",
                "  - Format: font, size, color, alignment",
                "  - Add titles to all visuals",
                "Format Consistently:",
                "  - Select a bar chart",
                "  - Format colors, fonts, data labels",
                "  - Copy formatting to other bar charts",
                "  - Ensure all similar visuals match",
                "Page Formatting:",
                "  - Format pane > Page background",
                "  - Set background color or image",
                "  - Add page title",
                "  - Format page-level elements",
                "Final Polish:",
                "  - Review all visuals for consistency",
                "  - Ensure proper spacing between visuals",
                "  - Verify titles are clear and descriptive",
                "  - Test report appearance on different screen sizes"
              ],
              tables: [
                {
                  title: "Formatting Elements Checklist",
                  headers: ["Element", "What to Format", "Why", "Best Practice"],
                  rows: [
                    ["Visual Titles", "Font, size, color, position", "Clarity and understanding", "Consistent across all visuals"],
                    ["Data Labels", "Font, format, position", "Readability", "Enable for key metrics"],
                    ["Colors", "Data colors, backgrounds", "Visual appeal", "Use theme colors, limit palette"],
                    ["Fonts", "Type, size, weight", "Readability", "Use 1-2 font families max"],
                    ["Alignment", "Visual positions", "Professional look", "Use guides, snap-to-grid"],
                    ["Spacing", "White space between visuals", "Ease of reading", "Consistent margins"],
                    ["Legends", "Position, formatting", "Understanding", "Place consistently"]
                  ]
                },
                {
                  title: "Report Themes Comparison",
                  headers: ["Theme", "Style", "Best For", "Color Scheme"],
                  rows: [
                    ["Classic", "Traditional, corporate", "Business reports", "Blues, grays"],
                    ["Modern", "Contemporary, clean", "Executive dashboards", "Modern colors"],
                    ["Colorblind-friendly", "Accessibility-focused", "Accessibility requirements", "Colorblind-safe"],
                    ["Custom", "Your brand colors", "Branded reports", "Your color palette"]
                  ]
                }
              ]
            },
          },
        ],
      },
    ],
  },
  {
    id: "part-2",
    title: "The Power BI Analyst – Modeling, DAX, and Design",
    description: "Advanced modeling, DAX, and report design",
    modules: [
      {
        id: "module-5",
        title: "Data Modeling – The Relational Foundation",
        description: "Intermediate Power BI concepts",
        moduleNumber: 5,
        lessons: [
          {
            id: "5-1",
            moduleNumber: 5,
            lessonNumber: 1,
            title: "Why Data Modeling is the Most Critical Skill",
            description: "This module addresses the limitations of the single-table model built in Part 1. Data modeling involves creating a relational model of multiple, interconnected tables",
            duration: 20,
            difficulty: 'intermediate',
            tags: ["DAX", "Power Query", "Visualizations", "Data Modeling", "Performance"],
            topic: 'Data Modeling',
            content: {
              concept: "This module addresses the limitations of the single-table model built in Part 1. Data modeling involves creating a relational model of multiple, interconnected tables",
              discussion: "A user will eventually try to add more data (e.g., Product Details) to their single Sales table. Their first instinct will be to use \"Merge\" in Power Query, creating one massive, wide, and inefficient table. This makes DAX formulas complex and report performance slow. This module provides the solution: A proper data model is the most important form of performance tuning. A bad model (one big table) is slow and difficult to use. A good model (a star schema) is fast, efficient, and makes writing DAX simple. In enterprise environments, senior analysts spend 60-70% of their time on data modeling because it's the foundation that everything else builds upon.",
              keyPoints: [
                "Data modeling is the foundation of all Power BI reports and directly impacts performance",
                "A poorly designed model leads to slow queries, complex DAX, and difficult maintenance",
                "Star schema design is the industry standard for Power BI models due to VertiPaq optimization",
                "The time invested in proper modeling saves exponentially more time in DAX development and troubleshooting"
              ],
              insiderTips: [
                "Always design your model BEFORE building visualizations - resist the temptation to rush",
                "Use Power Query to create fact and dimension tables separately, don't merge everything into one table",
                "Model size impacts refresh time: aim for fact tables under 100M rows for optimal performance",
                "Document your model decisions - future you will thank you when debugging performance issues",
                "A cardinal rule: if your DAX is getting complex, check your model first - the problem is likely there"
              ]
            },
          },
          {
            id: "5-2",
            moduleNumber: 5,
            lessonNumber: 2,
            title: "Understanding Fact vs. Dimension Tables",
            description: "A data model is composed of two primary types of tables: facts and dimensions",
            duration: 20,
            difficulty: 'intermediate',
            tags: ["Data Modeling"],
            topic: 'Data Modeling',
            content: {
              concept: "A data model is composed of two primary types of tables: facts and dimensions. Understanding this fundamental distinction is critical to building efficient models.",
              discussion: "Fact tables contain the measurements and events you want to analyze - the 'verbs' of your business (Sales, Orders, Transactions). They are typically long and narrow, with many rows containing foreign keys that link to dimensions and numeric columns for measures. Dimension tables contain the descriptive attributes - the 'adjectives' of your business (Product, Customer, Date). They are typically wide and short, with fewer rows but many descriptive columns. The classic mistake is putting descriptive columns into the fact table, which bloats the model and destroys performance.",
              tables: [
                {
                  title: "Fact vs. Dimension Tables",
                  headers: ["Characteristic", "Fact Table", "Dimension Table"],
                  rows: [
                    ["Content", "Numerical measures, events, transactions", "Descriptive attributes, categories, hierarchies"],
                    ["Shape", "Long and narrow (many rows)", "Short and wide (fewer rows, many columns)"],
                    ["Example", "Fact_Sales, Fact_Orders, Fact_Inventory", "Dim_Product, Dim_Customer, Dim_Date"],
                    ["Role", "Stores what is being measured", "Provides context for filtering and slicing"],
                    ["Rows", "Millions to billions", "Hundreds to hundreds of thousands"],
                    ["Primary Keys", "Composite keys or surrogate keys", "Single-column primary keys"]
                  ]
                }
              ],
              keyPoints: [
                "Fact tables contain the numbers and events you analyze; dimension tables provide the context",
                "Fact tables are transactional - they grow continuously; dimensions grow slowly if at all",
                "Never mix fact and dimension logic - each table has a distinct role",
                "Proper normalization: facts measure, dimensions describe"
              ],
              insiderTips: [
                "A quick test: if a table has foreign keys pointing TO it, it's likely a dimension; if it points TO other tables, it's likely a fact",
                "Always include a granularity column in fact tables (TransactionID, OrderLineKey) for debugging",
                "Avoid creating 'junk dimensions' with random boolean flags - keep facts and dimensions pure",
                "In star schema, one fact table connects to multiple dimensions, never dimension-to-dimension directly",
                "Name your tables with prefixes: Fact_ and Dim_ make model navigation instant in large models"
              ]
            },
          },
          {
            id: "5-3",
            moduleNumber: 5,
            lessonNumber: 3,
            title: "Designing a Star Schema (The BI Gold Standard)",
            description: "The Star Schema is the target design for a Power BI data model",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["Data Modeling", "Performance", "Best Practices"],
            topic: 'Data Modeling',
            content: {
              concept: "The Star Schema is the target design for a Power BI data model. It's called a 'star' because one central fact table connects directly to multiple dimension tables, resembling a star. This is the optimal design for Power BI's VertiPaq in-memory engine.",
              discussion: "In a star schema, you have a single, central Fact Table (like Sales) connected directly to multiple Dimension Tables (like Dim_Product, Dim_Customer, Dim_Date). Contrast this with a Snowflake Schema where dimensions are normalized (e.g., Dim_Product links to Dim_Category, which links to Dim_CategoryGroup). Unlike traditional SQL databases, Power BI's in-memory VertiPaq engine is optimized for star schemas. The snowflake design creates longer relationship filter chains, forcing the engine to traverse multiple hops to apply filters, significantly impacting performance. The best practice is to denormalize dimensions into single, wide tables. Additional model best practices include hiding unnecessary fields (like key columns used only for relationships) from Report View, organizing fields into display folders, setting appropriate data types, and creating hierarchies for natural drill-down paths (e.g., Date > Month > Year or Geography > Region > Country > State).",
              tables: [
                {
                  title: "Star Schema vs Snowflake Schema",
                  headers: ["Aspect", "Star Schema", "Snowflake Schema"],
                  rows: [
                    ["Structure", "Flat dimensions directly connected to fact", "Normalized dimensions with sub-dimensions"],
                    ["Relationships", "1-2 hops from fact to dimension", "3+ hops from fact to distant dimension"],
                    ["Performance", "Faster filter propagation", "Slower due to multiple joins"],
                    ["Storage", "More redundant data in dimensions", "Less redundant, more normalized"],
                    ["Best For", "Power BI, Analysis Services", "Traditional OLTP databases"],
                    ["Complexity", "Simpler to understand and maintain", "More complex, harder to debug"]
                  ]
                }
              ],
              keyPoints: [
                "Star schema = 1 fact table connected directly to multiple dimension tables (no dimension-to-dimension joins)",
                "VertiPaq engine is optimized for star schemas - never snowflake unless absolutely necessary",
                "Denormalize dimensions to flatten the model - data redundancy is your friend in Power BI",
                "Use display folders and hide technical fields to keep the model clean for report authors",
                "Create hierarchies for natural navigation paths (Date, Geography, Organization)"
              ],
              insiderTips: [
                "Always disable 'Auto-detect relationships' in Power BI Desktop settings - manually create every relationship to ensure star schema",
                "If you see dimension-to-dimension relationships in your model, you've accidentally created a snowflake - flatten it",
                "The Model View is your canvas - spend time making it visually clear and organized",
                "Use one-to-many relationships almost exclusively (fact:many, dimension:one) for optimal performance",
                "Hide key columns from Report View (right-click > Hide) but keep them visible in Model View for troubleshooting",
                "Organize related columns into display folders (right-click table > Properties) to group logically: 'Sales Measures', 'KPIs', 'Forecasts'"
              ]
            },
          },
          {
            id: "5-4",
            moduleNumber: 5,
            lessonNumber: 4,
            title: "Creating and Managing Relationships (Hands-On Lab)",
            description: "Using the Model View to visually connect the tables into a star schema",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["Data Modeling", "Lab"],
            topic: 'Data Modeling',
            content: {
              concept: "Relationships connect fact and dimension tables in your star schema. Power BI's Model View provides a visual interface for creating and managing these connections through an intuitive drag-and-drop workflow.",
              discussion: "To create a relationship, you drag the primary key from the dimension table (e.g., ProductID from Dim_Product) onto the corresponding foreign key in the fact table (e.g., ProductID in Fact_Sales). Power BI automatically detects common data types and suggests relationships, but you should always verify cardinality and cross-filter direction. Critical best practice: Go to File > Options and Settings > Options > Current File > Data Load and disable 'Autodetect new relationships'. Manually building every relationship ensures you understand your model and prevents accidental incorrect connections. You can also right-click a relationship to edit properties like cardinality, cross-filter direction, and whether to make relationships active or inactive.",
              labs: [
                "Disable Auto-detect relationships: File > Options and settings > Options > Current file > Data Load > Uncheck 'Autodetect new relationships'",
                "Switch to Model View (left sidebar icon or Ctrl+D)",
                "Arrange tables visually: Position Fact_Sales in the center, dimension tables around it",
                "Create relationship: Drag ProductID from Dim_Product onto ProductID in Fact_Sales",
                "Verify cardinality: Should be 'One-to-many' (one product, many sales records)",
                "Verify cross-filter direction: Should be 'Both' or 'Single' based on your needs",
                "Repeat for all dimension tables: Dim_Customer, Dim_Date, Dim_Region, etc.",
                "Use Manage relationships dialog (Home > Manage relationships) to see all relationships at once",
                "Test relationships: Switch to Report View and verify filters work correctly",
                "Hide key columns: Right-click foreign key columns in Fact table > Hide from Report View"
              ],
              keyPoints: [
                "Always manually create relationships - never rely on auto-detect",
                "Drag from dimension TO fact table (dimension's primary key → fact's foreign key)",
                "Verify cardinality: Most relationships should be 'One-to-many'",
                "Set cross-filter direction based on filtering requirements",
                "Hide relationship keys from report view but keep them visible in model view"
              ],
              insiderTips: [
                "First time setup: Always start in Model View to build relationships before creating visualizations",
                "Multiple relationship arrows from one table? Check for role-playing dimensions (multiple date fields)",
                "The Manage Relationships dialog is essential for maintaining large models with many relationships",
                "If cardinality doesn't show 'One-to-many', investigate data quality - you may have duplicates",
                "Blue lines indicate active relationships; gray indicates inactive (useful for USERELATIONSHIP in DAX)",
                "Rename relationships for clarity in complex models (right-click relationship > Properties)",
                "Use Ctrl+Click to select and delete multiple relationships at once in Manage Relationships",
                "Refresh your memory: Cardinality = uniqueness, Cross-filter = filter propagation direction"
              ]
            },
            exerciseMaterials: [
              { name: "Starter Dataset: Sales Data", url: "/resources/module-5-sales-data.xlsx", type: "dataset" },
              { name: "Sample Solution File", url: "/resources/module-5-solution.pbix", type: "pbix" }
            ]
          },
          {
            id: "5-5",
            moduleNumber: 5,
            lessonNumber: 5,
            title: "Cardinality and Cross-Filter Direction",
            description: "Configuring the rules that govern the relationship flow",
            duration: 25,
            difficulty: 'intermediate',
            tags: ["Data Modeling"],
            topic: 'Data Modeling',
            content: {
              concept: "Cardinality and cross-filter direction are two critical relationship properties that govern how filters flow through your model and how relationships behave. Cardinality describes the uniqueness constraint between related columns, while cross-filter direction controls filter propagation.",
              discussion: "Cardinality has three options: One-to-many (1:*), Many-to-one (*:1), One-to-one (1:1), and Many-to-many (*:*). In star schemas, you almost exclusively use one-to-many relationships where one dimension row relates to many fact rows. Cross-filter direction has two options: Single and Both. 'Single' means filters flow from the one side to the many side only (dimension → fact). 'Both' enables bidirectional filtering. The default and safest choice is 'Single' to prevent ambiguity and performance issues. 'Both' is useful for special cases but should be used sparingly as it can create circular dependencies and slow down queries. Advanced scenarios may require 'Both' for complex filtering requirements, but always test performance impact.",
              tables: [
                {
                  title: "Relationship Cardinality Types",
                  headers: ["Cardinality", "One Side", "Many Side", "Use Case", "Common?"],
                  rows: [
                    ["One-to-Many", "Dimension table", "Fact table", "Sales to Products, Orders to Customers", "95% of relationships"],
                    ["Many-to-One", "Fact table", "Dimension table", "Same as One-to-Many, just reversed", "Same as above"],
                    ["One-to-One", "Both sides unique", "Both sides unique", "Rare, usually merge instead", "<1%"],
                    ["Many-to-Many", "Both sides non-unique", "Both sides non-unique", "Avoid - causes ambiguity", "0% (use bridge table)"]
                  ]
                },
                {
                  title: "Cross-Filter Direction",
                  headers: ["Direction", "Filter Flow", "Use When", "Performance Impact", "Best Practice"],
                  rows: [
                    ["Single", "Dimension → Fact only", "Standard star schema relationships", "Fastest, no ambiguity", "Default choice for all relationships"],
                    ["Both", "Dimension ↔ Fact", "Need to filter dimension based on fact", "Can be slower, circular risks", "Use sparingly, test performance"]
                  ]
                }
              ],
              keyPoints: [
                "Cardinality: One-to-many is the standard for star schemas (one product → many sales)",
                "Cross-filter direction: Single is the default and usually correct choice",
                "Both direction enables bidirectional filtering but can cause ambiguity and performance issues",
                "Many-to-many relationships should be avoided - use bridge tables instead",
                "Always verify Power BI detected the correct cardinality - check for duplicates"
              ],
              insiderTips: [
                "Red relationship lines in Model View indicate many-to-many - investigate immediately!",
                "If Power BI shows 'both' as default, change to 'single' unless you have a specific need",
                "Performance issue? Check for accidental 'both' cross-filter on large tables",
                "Ambiguous relationship error? Usually caused by 'both' direction on two tables",
                "One-to-one relationships are usually a mistake - just merge the tables in Power Query",
                "Verify cardinality by checking for unique values in dimension key columns",
                "Pro tip: Model View shows 1 and * symbols on relationship lines to indicate cardinality",
                "When debugging filter issues, trace filter propagation through relationships manually"
              ]
            },
            exerciseMaterials: [
              { name: "Cardinality Cheat Sheet", url: "/resources/cardinality-reference.pdf", type: "pdf" }
            ]
          },
          {
            id: "5-6",
            moduleNumber: 5,
            lessonNumber: 6,
            title: "Advanced Modeling Concepts (PL-300)",
            description: "Handling more complex modeling scenarios required for the PL-300 exam",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["Data Modeling", "PL-300"],
            topic: 'Data Modeling',
            content: {
              concept: "Real-world data models require handling complex scenarios that go beyond simple star schemas. Three critical advanced concepts are role-playing dimensions, calculated tables, and bridge tables. Mastery of these patterns is essential for the PL-300 exam and senior analyst roles.",
              discussion: "Role-playing dimensions occur when a single dimension table (most commonly a Date table) needs to filter the same fact table through multiple foreign keys. For example, a sales fact table might have OrderDateKey, ShipDateKey, and DueDateKey - all connecting to the same Dim_Date table. Power BI allows only one active relationship per pair of tables, so you create one active relationship and mark others as inactive. Then use USERELATIONSHIP() in DAX to activate specific relationships for different measures. Calculated tables are tables created entirely within DAX using functions like CALENDARAUTO(), DATESBETWEEN(), SUMMARIZE(), or CROSSJOIN(). They're computed at model refresh and useful for creating custom date tables, aggregated tables, or bridge tables. Bridge tables resolve many-to-many relationships by creating an intermediate table that breaks the complex relationship into two simpler one-to-many relationships.",
              keyPoints: [
                "Role-playing dimensions: One dimension used in multiple contexts (e.g., multiple date columns in fact table)",
                "Only one active relationship per table pair - mark others inactive and use USERELATIONSHIP()",
                "Calculated tables: Created with DAX at refresh time (CALENDARAUTO(), SUMMARIZE(), etc.)",
                "Bridge tables: Resolve many-to-many relationships through intermediate junction table",
                "These patterns are essential for PL-300 certification and real-world modeling"
              ],
              insiderTips: [
                "Role-playing dimensions are most common with Date tables but can occur with other dimensions",
                "Always name inactive relationships clearly in Manage Relationships dialog for easy debugging",
                "USERELATIONSHIP() in CALCULATE() requires inactive relationship - plan your model accordingly",
                "Calculated tables refresh with model but don't support DirectQuery - be aware of limitations",
                "Bridge tables: Create in Power Query or DAX, then connect both sides with one-to-many",
                "Bridge table cardinality: Always Many-to-Many-to-One (Fact-Bridge-Dimension)",
                "Test role-playing dimensions carefully - wrong USERELATIONSHIP() usage is a common exam trap",
                "Calculated tables vs Power Query: Use calculated for business logic, Power Query for ETL",
                "Many-to-many patterns are a red flag on PL-300 - always propose bridge table solution"
              ]
            },
            exerciseMaterials: [
              { name: "Advanced Modeling Lab", url: "/resources/module-5-advanced-lab.pbix", type: "pbix" },
              { name: "PL-300 Modeling Practice", url: "/resources/pl300-modeling-scenarios.xlsx", type: "dataset" }
            ]
          },
        ],
      },
      {
        id: "module-6",
        title: "Introduction to DAX (Data Analysis Expressions)",
        description: "Intermediate Power BI concepts",
        moduleNumber: 6,
        lessons: [
          {
            id: "6-1",
            moduleNumber: 6,
            lessonNumber: 1,
            title: "What is DAX?",
            description: "DAX (Data Analysis Expressions) is the formula language used in Power BI, as well as in SQL Server Analysis Services (SSAS) Tabular and Power Pivot in Excel",
            duration: 20,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "DAX (Data Analysis Expressions) is the formula language used in Power BI, as well as in SQL Server Analysis Services (SSAS) Tabular and Power Pivot in Excel. It's a functional, time-aware language designed specifically for analytical calculations on columnar, in-memory data models.",
              discussion: "DAX is fundamentally different from both SQL and Excel formulas. SQL is a query language for retrieving data from databases. Excel formulas work on individual cells. DAX operates on entire tables and columns within an in-memory model called VertiPaq. This means DAX expressions evaluate in the context of the data model and can dynamically respond to filters, slicers, and visual selections. DAX is case-insensitive, doesn't use semicolons, and provides powerful time intelligence functions for business analytics. Understanding this paradigm shift is critical - DAX isn't Excel with better functions; it's an entirely different way of thinking about data calculations.",
              keyPoints: [
                "DAX is a functional language designed for in-memory columnar data models (VertiPaq)",
                "DAX operates on entire tables and columns, not individual cells or rows like Excel",
                "DAX is context-aware - results change based on filters and visual selections",
                "Time intelligence functions make DAX uniquely powerful for business analytics",
                "Case-insensitive syntax makes DAX forgiving but naming consistency matters for collaboration"
              ],
              insiderTips: [
                "Don't try to 'translate' Excel formulas to DAX - think in terms of tables and filters instead",
                "DAX has over 250 functions organized by category: Aggregation, Filter, Time Intelligence, etc.",
                "The DAX formula bar provides IntelliSense - use it to explore functions as you type",
                "Comments in DAX use // for single-line or /* */ for multi-line",
                "White space is your friend - format DAX with line breaks for readability",
                "The VertiPaq engine compresses data 10x on average, making DAX fast on large datasets",
                "Pro tip: Keep DAX reference material handy - even experts don't memorize all 250+ functions"
              ]
            },
            exerciseMaterials: [
              { name: "DAX Function Reference Card", url: "/resources/dax-function-reference.pdf", type: "pdf" }
            ]
          },
          {
            id: "6-2",
            moduleNumber: 6,
            lessonNumber: 2,
            title: "The Core Concept: Calculated Columns vs. Measures",
            description: "This is the single-most critical concept for new DAX learners. A simple formula can be created in two different ways, and the choice has massive implications.",
            duration: 40,
            difficulty: 'intermediate',
            tags: ["DAX", "Critical Concept"],
            topic: 'DAX',
            content: {
              concept: "This is the single-most critical concept for new DAX learners. A simple formula like 'Total Price' ([Quantity] * [Unit Price]) can be created in two different ways, and the choice has massive implications for performance, flexibility, and maintainability. This lesson is where many students struggle, but mastery of this concept separates professionals from beginners.",
              discussion: "Calculated Columns and Measures are both created with DAX, but they work fundamentally differently. A Calculated Column is created in Data View or Model View, evaluated at data refresh row-by-row based on 'Row Context,' and stored in the model consuming RAM. Use calculated columns when the result is needed in a slicer, on an axis, or as a filter (e.g., categorizing products by 'High/Low' price). A Measure is created in Report View, Data View, or Model View, evaluated at query time when a visual renders based on 'Filter Context,' and is not stored (consumes CPU instead). Use measures for any aggregation appearing in the Values area of a visual (e.g., Total Sales, Average Price). The Golden Rule: Beginners from Excel backgrounds try to do everything in calculated columns because it mimics Excel tables. This is the primary mistake and leads to bloated, slow, inflexible reports. The professional rule is: Use a calculated column ONLY when you must. Use a measure for everything else. In enterprise models, you'll find 90%+ measures and 10% calculated columns. If your model has more calculated columns than measures, you're likely doing it wrong.",
              tables: [
                {
                  title: "Calculated Columns vs. Measures (Expanded)",
                  headers: ["Feature", "Calculated Column", "Measure"],
                  rows: [
                    ["Evaluation Context", "Row Context (current row)", "Filter Context (visual context)"],
                    ["When Calculated", "At Data Refresh", "At Query Time (on-the-fly)"],
                    ["Storage", "Consumes RAM (stored in model)", "Consumes CPU (not stored)"],
                    ["Primary Use", "Slicers, Axes, Filters, Row-level categorization", "Values in charts, KPIs, aggregations"],
                    ["Common Mistake", "Using for simple aggregations", "Rarely the wrong choice"],
                    ["Created In", "Data View or Model View", "Report View, Data View, or Model View"],
                    ["Flexibility", "Fixed at refresh time", "Dynamic based on filters"],
                    ["Performance Impact", "Increases file size, slows refresh", "Increases query time"]
                  ]
                }
              ],
              keyPoints: [
                "Calculated columns: evaluated at refresh, stored in memory, use for slicers/axes/filters",
                "Measures: evaluated at query time, not stored, use for aggregations in visuals",
                "The Golden Rule: Use calculated columns only when you MUST, use measures for everything else",
                "Row Context (calculated columns) vs Filter Context (measures) determines how each is evaluated",
                "Most enterprise models have 90%+ measures and <10% calculated columns"
              ],
              insiderTips: [
                "RED FLAG: If your model has more calculated columns than measures, you're doing it wrong!",
                "Quick test: Need it in a slicer or on an axis? → Calculated Column. Need it in Values? → Measure",
                "Performance killer: Avoid calculated columns for simple math like [Quantity] * [UnitPrice]",
                "Solution: Use measures with SUMX() for row-by-row calculations that need aggregation",
                "Storage impact: Each calculated column increases .pbix file size and slows refresh time",
                "Filter behavior: Measures respond to all filters dynamically; calculated columns don't change after refresh",
                "Pro tip: Create a dedicated 'Measures' table to organize all your measures in one place",
                "Common beginner mistake: Trying to create 'Sales YTD' as a calculated column - impossible! Must be a measure",
                "Debugging: When a measure returns wrong value, check your filter context, not the formula"
              ]
            },
          },
          {
            id: "6-3",
            moduleNumber: 6,
            lessonNumber: 3,
            title: "Creating Calculated Columns (Hands-On Lab)",
            description: "Writing basic row-context DAX formulas in the Data View.77Lab: Create a Full Name column ([FirstName] & \" \" & [LastName]). Create a Price Category column using logical functions like IF and SWITCH",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Writing basic row-context DAX formulas in the Data View.77Lab: Create a Full Name column ([FirstName] & \" \" & [LastName]). Create a Price Category column using logical functions like IF and SWITCH",
            },
          },
          {
            id: "6-4",
            moduleNumber: 6,
            lessonNumber: 4,
            title: "Creating Measures (Hands-On Lab)",
            description: "Writing basic aggregation measures.77Lab:Total Sales = SUM(Sales)Avg. Price = AVERAGE(Sales[UnitPrice])Order Count = COUNT(Sales[OrderLineKey])",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Writing basic aggregation measures.77Lab:Total Sales = SUM(Sales)Avg. Price = AVERAGE(Sales[UnitPrice])Order Count = COUNT(Sales[OrderLineKey])",
            },
          },
          {
            id: "6-5",
            moduleNumber: 6,
            lessonNumber: 5,
            title: "Implicit vs. Explicit Measures",
            description: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM).77 \"Explicit\" measures are those created manually with DAX, as",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM).77 \"Explicit\" measures are those created manually with DAX, as in the lab.77Best Practice: A professional developer always creates explicit measures. This provides central control, reusability, and clarity.84 Implicit measures should be disabled in the model settings",
            },
          },
          {
            id: "6-6",
            moduleNumber: 6,
            lessonNumber: 6,
            title: "Using Quick Measures",
            description: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations",
              discussion: "Demonstrate creating a running total or percent of grand total using the Quick Measure tool, and then review the DAX code that Power BI generated. This is a powerful learning tool for beginners",
            },
          },
        ],
      },
      {
        id: "module-7",
        title: "Intermediate DAX – Understanding Evaluation Context",
        description: "Intermediate Power BI concepts",
        moduleNumber: 7,
        lessons: [
          {
            id: "7-1",
            moduleNumber: 7,
            lessonNumber: 1,
            title: "The \"Secret Sauce\" of DAX: Evaluation Context",
            description: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated.87 There are two types of context",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated.87 There are two types of context",
            },
          },
          {
            id: "7-2",
            moduleNumber: 7,
            lessonNumber: 2,
            title: "Row Context (The \"Current Row\")",
            description: "A context that iterates through a table one row at a time",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "A context that iterates through a table one row at a time",
              discussion: "This context exists by default in Calculated Columns.83 This is why the formula [Quantity] * [Unit Price] works in a calculated column—it is evaluated for each row individually",
            },
          },
          {
            id: "7-3",
            moduleNumber: 7,
            lessonNumber: 3,
            title: "Filter Context (The \"Current Cell\")",
            description: "The set of all filters applied to a measure before it is calculated",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "The set of all filters applied to a measure before it is calculated",
              discussion: "Imagine a matrix visual with Total Sales in the Values, Region on Rows, and Year on Columns. The Total Sales value for the cell at the intersection of \"East\" and \"2023\" is calculated within a filter context of  = \"East\" AND  = 2023. Slicers, filters on other visuals, and the visual's own coordinates all contribute to this filter context",
            },
          },
          {
            id: "7-4",
            moduleNumber: 7,
            lessonNumber: 4,
            title: "Iterator Functions (SUMX, AVERAGEX, MINX)",
            description: "Iterators, or \"X-functions,\" are functions that create a row context within a measure, allowing for row-by-row calculations",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Iterators, or \"X-functions,\" are functions that create a row context within a measure, allowing for row-by-row calculations",
              discussion: "This is the correct solution to the \"Total Price\" problem from",
            },
          },
        ],
      },
      {
        id: "module-8",
        title: "Advanced DAX – Modifying Filter Context",
        description: "Intermediate Power BI concepts",
        moduleNumber: 8,
        lessons: [
          {
            id: "8-1",
            moduleNumber: 8,
            lessonNumber: 1,
            title: "The Most Important Function in DAX: CALCULATE()",
            description: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context.90Syntax: CALCULATE( <expression>, <filter1>, <filter2>,... )",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context.90Syntax: CALCULATE( <expression>, <filter1>, <filter2>,... )",
              discussion: "The first argument is the measure to be evaluated (e.g., ``). All subsequent arguments are new filters that are applied, which can override or add to the existing filter context",
            },
          },
          {
            id: "8-2",
            moduleNumber: 8,
            lessonNumber: 2,
            title: "Removing Filters with ALL()",
            description: "The ALL() function removes filters from a table or column.96 Its primary use is as a filter modifier inside CALCULATE()",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "The ALL() function removes filters from a table or column.96 Its primary use is as a filter modifier inside CALCULATE()",
              discussion: "This is the key to creating \"Percent of Total\" calculations",
            },
          },
          {
            id: "8-3",
            moduleNumber: 8,
            lessonNumber: 3,
            title: "Related ALL Functions: ALLEXCEPT(), ALLSELECTED()",
            description: "Nuanced versions of ALL() for more complex scenarios",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Nuanced versions of ALL() for more complex scenarios",
            },
          },
          {
            id: "8-4",
            moduleNumber: 8,
            lessonNumber: 4,
            title: "Context Transition (The Advanced Concept)",
            description: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\"",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\"",
              discussion: "This complex but powerful mechanism transitions the current row's values into an equivalent filter context.89Example: Create a calculated column in the Customer table: Total Spend = CALCULATE(SUM(Sales)).98 For each row in the Customer table, context transition converts the CustomerKey into a filter, calculating the total sales for only that specific customer",
            },
          },
          {
            id: "8-5",
            moduleNumber: 8,
            lessonNumber: 5,
            title: "Advanced DAX Scenarios (USERELATIONSHIP)",
            description: "Solving complex modeling problems with DAX",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Solving complex modeling problems with DAX",
            },
          },
          {
            id: "8-6",
            moduleNumber: 8,
            lessonNumber: 6,
            title: "Introduction to Visual Calculations (Oct 2025 GA)",
            description: "A new, simpler way to add calculations (like running totals or moving averages) directly on a visual, operating on the visual's data matrix rather than the full data model.Lab: Create a \"Running Total",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX", "2025 Features"],
            topic: 'DAX',
            content: {
              concept: "A new, simpler way to add calculations (like running totals or moving averages) directly on a visual, operating on the visual's data matrix rather than the full data model.Lab: Create a \"Running Total\" and a \"Moving Average\" using the new Visual Calculations interface, and compare this to the traditional DAX measure approach",
            },
          },
        ],
      },
      {
        id: "module-9",
        title: "Specialized DAX – Time Intelligence",
        description: "Intermediate Power BI concepts",
        moduleNumber: 9,
        lessons: [
          {
            id: "9-1",
            moduleNumber: 9,
            lessonNumber: 1,
            title: "The Prerequisite: A Date Table",
            description: "DAX Time Intelligence functions will not work unless a proper, dedicated Date table exists in the model",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Time Intelligence", "DAX", "Power Query"],
            topic: 'DAX',
            content: {
              concept: "DAX Time Intelligence functions will not work unless a proper, dedicated Date table exists in the model",
              discussion: "This table must contain one row for every day in the desired range, with no gaps. It must be \"Marked as Date Table\" in the Model View. This table can be created in Power Query or using DAX (e.g., CALENDARAUTO())",
            },
          },
          {
            id: "9-2",
            moduleNumber: 9,
            lessonNumber: 2,
            title: "Year-to-Date (YTD) and Period-to-Date (Hands-On Lab)",
            description: "Calculating running totals for common time periods.99Lab: Create Sales YTD = TOTALYTD(, 'Date' ).99 This single function replaces complex, manual sum logic",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Time Intelligence"],
            topic: 'Business Intelligence',
            content: {
              concept: "Calculating running totals for common time periods.99Lab: Create Sales YTD = TOTALYTD(, 'Date' ).99 This single function replaces complex, manual sum logic",
            },
          },
          {
            id: "9-3",
            moduleNumber: 9,
            lessonNumber: 3,
            title: "Prior Period Comparisons",
            description: "Comparing performance to the equivalent period in the past.99Lab: Create Sales PY = CALCULATE(, SAMEPERIODLASTYEAR('Date') ).99 Also demonstrate DATEADD and PARALLELPERIOD for more flexible period shi",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Performance"],
            topic: 'Performance',
            content: {
              concept: "Comparing performance to the equivalent period in the past.99Lab: Create Sales PY = CALCULATE(, SAMEPERIODLASTYEAR('Date') ).99 Also demonstrate DATEADD and PARALLELPERIOD for more flexible period shifts",
            },
          },
          {
            id: "9-4",
            moduleNumber: 9,
            lessonNumber: 4,
            title: "Calculating Year-over-Year (YoY) Growth",
            description: "Combining the previous measures to create a key business KPI.Lab: Sales YoY % = DIVIDE( ( - ), )",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX", "Time Intelligence"],
            topic: 'DAX',
            content: {
              concept: "Combining the previous measures to create a key business KPI.Lab: Sales YoY % = DIVIDE( ( - ), )",
              discussion: "This lesson highlights the elegance of DAX. Three simple, reusable measures (, , ``) are stacked on top of each other to produce a sophisticated and critical insight",
            },
          },
          {
            id: "9-5",
            moduleNumber: 9,
            lessonNumber: 5,
            title: "Calculating Rolling Averages",
            description: "Smoothing volatile data by calculating rolling averages (e.g., 3-month rolling average).Lab: Demonstrate using DATESINPERIOD inside a CALCULATE function to achieve a rolling average calculation",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Smoothing volatile data by calculating rolling averages (e.g., 3-month rolling average).Lab: Demonstrate using DATESINPERIOD inside a CALCULATE function to achieve a rolling average calculation",
            },
          },
        ],
      },
      {
        id: "module-10",
        title: "Report Design and Data Storytelling",
        description: "Intermediate Power BI concepts",
        moduleNumber: 10,
        lessons: [
          {
            id: "10-1",
            moduleNumber: 10,
            lessonNumber: 1,
            title: "Principles of Effective Report Design & Chart Selection (UI/UX)",
            description: "A report can be analytically correct but visually useless. Good design (UI/UX) is not decoration; it is about guiding the user's eye and communicating insights with clarity",
            duration: 20,
            difficulty: 'intermediate',
            tags: ["Visualizations", "2025 Features"],
            topic: 'Visualizations',
            content: {
              concept: "A report can be analytically correct but visually useless. Good design (UI/UX) is not decoration; it is about guiding the user's eye and communicating insights with clarity",
              discussion: "Core principles include 4:Chart Selection: When to use a bar chart (comparison) vs. a line chart (trend).109Visual Hierarchy: Place the most important information (e.g., KPIs) in the top-left, as users read in a \"Z\" pattern.104White Space: Do not clutter the page. White space is essential for readability.105Color with Purpose: Use color to highlight key information or signal status (e.g., red for bad), not just for decoration.105Consistency: Use consistent fonts, colors, and alignment throughout the report.105Mobile Design: Separately design a layout optimized for mobile consumption.105New Slicers: Use modern slicers like the \"Button Slicer\" (GA Oct 2025) for app-like cross-highlighting",
            },
          },
          {
            id: "10-2",
            moduleNumber: 10,
            lessonNumber: 2,
            title: "Advanced Interactivity: Drill-through Pages",
            description: "Drill-through allows a user to right-click a data point on a summary visual (e.g., \"East\" region) and navigate to a separate, detailed report page that is automatically filtered for the \"East\" region",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Drill-through allows a user to right-click a data point on a summary visual (e.g., \"East\" region) and navigate to a separate, detailed report page that is automatically filtered for the \"East\" region.107Lab: Create a \"Summary\" page and a \"Region Details\" page. Configure the \"Region Details\" page as a drill-through destination by dragging the Region field into the \"Drill through\" well.110 This can also be triggered from a button",
            },
          },
          {
            id: "10-3",
            moduleNumber: 10,
            lessonNumber: 3,
            title: "Advanced Interactivity: Bookmarks and the Selection Pane",
            description: "Bookmarks capture and save the state of a report page, including all filters, slicers, and visual visibility states",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Bookmarks capture and save the state of a report page, including all filters, slicers, and visual visibility states",
              discussion: "The Selection Pane allows visuals to be shown or hidden. The Bookmarks pane saves these states.49 By assigning bookmarks to buttons, a developer can create custom, app-like navigation experiences.106 This is a core technique for \"data storytelling,\" allowing the user to be guided through a narrative",
            },
          },
          {
            id: "10-4",
            moduleNumber: 10,
            lessonNumber: 4,
            title: "Enhancing Visuals: Custom Report Tooltips",
            description: "The default hover-over tooltip is basic, showing only the data points.115 Power BI allows a developer to create an entirely new, small report page and use it as a custom tooltip.113Lab: Create a new p",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "The default hover-over tooltip is basic, showing only the data points.115 Power BI allows a developer to create an entirely new, small report page and use it as a custom tooltip.113Lab: Create a new page, set its type to \"Tooltip.\" Add a small line chart and a KPI card. On the main report, select a visual and, in its formatting options, set the \"Tooltip\" type to \"Report Page\" and select the new tooltip page",
            },
          },
          {
            id: "10-5",
            moduleNumber: 10,
            lessonNumber: 5,
            title: "Enhancing Visuals: Conditional Formatting",
            description: "Dynamically changing a visual's appearance (e.g., color) based on its data value",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Dynamically changing a visual's appearance (e.g., color) based on its data value",
              discussion: "Demonstrate how to set the color of data bars in a table, or how to change the font color of a KPI card to be red or green based on a DAX measure",
            },
          },
          {
            id: "10-6",
            moduleNumber: 10,
            lessonNumber: 6,
            title: "The Art of Data Storytelling",
            description: "A report should be more than a collection of charts; it must be a narrative that leads to a decision",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A report should be more than a collection of charts; it must be a narrative that leads to a decision",
              discussion: "An effective data story follows a clear flow: 1. Set the Context (what are we looking at?). 2. Present the key Finding (e.g., \"Sales are down 15%\"). 3. Drill down to the \"Why\" (e.g., \"...this is driven entirely by the East region\"). 4. Propose an Action (e.g., \"Investigate East region logistics\").108 This can be enhanced with annotations and dynamic text measures",
            },
          },
          {
            id: "10-7",
            moduleNumber: 10,
            lessonNumber: 7,
            title: "Enhancing Reports with Custom Visuals",
            description: "Expanding Power BI's capabilities by importing new visuals from the AppSource marketplace",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Expanding Power BI's capabilities by importing new visuals from the AppSource marketplace",
              discussion: "Demonstrate how to find, import, and use a popular custom visual (e.g., a Word Cloud or Sankey diagram) when standard visuals are not enough.NEW",
            },
          },
        ],
      },
      {
        id: "module-11",
        title: "Deep-Dive with AI Visuals & Insights",
        description: "Intermediate Power BI concepts",
        moduleNumber: 11,
        lessons: [
          {
            id: "11-1",
            moduleNumber: 11,
            lessonNumber: 1,
            title: "The Key Influencers Visual",
            description: "Using the Key Influencers visual to understand what factors drive a specific metric (e.g., \"What influences a customer to churn?\").55Lab: Use the Key Influencers visual to analyze what factors contrib",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Data Modeling"],
            topic: 'Business Intelligence',
            content: {
              concept: "The Key Influencers visual is an AI-powered visual that automatically analyzes your data to identify what factors drive a specific metric or outcome. It answers questions like 'What influences a customer to churn?' or 'What drives high sales performance?'",
              discussion: "This visual uses machine learning algorithms to analyze relationships in your data and identify the factors that most strongly influence a target metric. Unlike traditional analysis where you manually explore relationships, Key Influencers does this automatically. It works by analyzing categorical and numeric fields to determine which values are associated with higher or lower instances of your target metric. The visual displays results showing both positive influences (factors that increase the metric) and negative influences (factors that decrease it), along with statistical confidence levels.",
              labs: [
                "Add the Key Influencers visual to your report",
                "Set 'Total Profit' as the measure to analyze",
                "Set 'Explain by' to include fields like Product Category, Region, Customer Segment, Sales Rep",
                "Run the analysis and review the influencers",
                "Interpret the results: Which factors contribute most to High Profit?",
                "Drill down into specific influencers to understand the relationships",
                "Compare positive vs. negative influencers",
                "Use insights to inform business decisions"
              ],
              keyPoints: [
                "Key Influencers automatically discovers relationships you might not find manually",
                "Works best with categorical data and clearly defined target metrics",
                "Results include statistical confidence to help you trust the insights",
                "Great for exploratory analysis when you don't know what to look for"
              ],
              insiderTips: [
                "Use with clean, well-structured data for best results",
                "Combine with other visuals to validate findings",
                "Don't confuse correlation with causation—use business knowledge to interpret",
                "Key Influencers works well for binary outcomes (High/Low, Yes/No, Churn/Retain)",
                "Include 3-5 relevant fields in 'Explain by'—too many can dilute insights"
              ]
            },
          },
          {
            id: "11-2",
            moduleNumber: 11,
            lessonNumber: 2,
            title: "The Decomposition Tree Visual",
            description: "Using the Decomposition Tree to perform root-cause analysis by breaking down a measure across multiple dimensions in a flexible, ad-hoc way.Lab: Create a Decomposition Tree to allow users to dynamical",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Data Modeling"],
            topic: 'Business Intelligence',
            content: {
              concept: "The Decomposition Tree is an AI-powered visual that allows users to dynamically explore data by breaking down a measure across multiple dimensions in a flexible, ad-hoc way. It's perfect for root-cause analysis and answering 'why' questions.",
              discussion: "The Decomposition Tree provides an interactive way to drill down into data to understand what's driving a metric. Users can click on different branches to explore the data hierarchy, and the visual automatically suggests the next best dimension to drill into based on impact. It supports both manual exploration (user chooses dimensions) and AI-driven exploration (visual suggests optimal paths). This makes it powerful for ad-hoc analysis where users want to investigate anomalies or understand variance. The tree structure visually represents the hierarchical breakdown, making it easy to see how different dimensions contribute to the overall metric.",
              labs: [
                "Add the Decomposition Tree visual to your report",
                "Set 'Total Sales' as the measure to decompose",
                "Add dimensions: Region, Product Category, Sub-Category, Sales Rep",
                "Start at the root level to see total sales",
                "Manually drill down: Click on a Region to see sales by that region",
                "Continue drilling: Select a Category within that region",
                "Use AI suggestions: Let the visual suggest optimal drill-down paths",
                "Switch between different analysis paths to explore multiple perspectives",
                "Use the 'Find where' feature to quickly locate high or low values",
                "Reset and explore different starting points"
              ],
              keyPoints: [
                "Decomposition Tree enables flexible, interactive root-cause analysis",
                "AI suggestions guide users to the most impactful dimensions",
                "Supports both hierarchical (pre-defined) and ad-hoc exploration",
                "Visual representation makes complex breakdowns easy to understand"
              ],
              insiderTips: [
                "Best used for exploratory analysis when investigating specific issues",
                "Great for executive presentations—let them explore interactively",
                "Use 'Find where' feature to quickly locate problem areas",
                "Combine with Key Influencers: Use Key Influencers to find what matters, Decomposition Tree to explore it",
                "Limit dimensions to 5-7 for best performance and usability",
                "Works particularly well with sales, revenue, and performance metrics"
              ]
            },
          },
          {
            id: "11-3",
            moduleNumber: 11,
            lessonNumber: 3,
            title: "Anomaly Detection & Forecasting",
            description: "Using the built-in AI features on line charts to automatically detect anomalies (unexpected spikes or dips) and to generate a time-series forecast.Lab: Apply Anomaly Detection to the \"Sales over Time\"",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["AI Features", "Visualizations", "Data Modeling", "DAX", "Time Intelligence"],
            topic: 'DAX',
            content: {
              concept: "Power BI includes built-in AI features directly in line charts that automatically detect anomalies (unexpected spikes or dips) and generate time-series forecasts. These features require no machine learning expertise—they're accessible with a single click.",
              discussion: "Anomaly Detection uses machine learning to identify data points that deviate significantly from expected patterns in your time series data. It analyzes historical trends and seasonality to flag unusual values that may require investigation. The Forecasting feature uses time series analysis to predict future values based on historical patterns. It considers trends, seasonality, and cycles to generate forecasts with confidence intervals. Both features are powered by Azure Machine Learning but require no setup—they work automatically when enabled on a line chart with a date axis. These AI capabilities transform static charts into intelligent insights that help users identify issues and plan for the future.",
              labs: [
                "Create a line chart showing 'Sales over Time' with a date field on the X-axis",
                "Enable Anomaly Detection: Right-click the chart, select 'Analyze', then 'Detect anomalies'",
                "Review detected anomalies: Examine the flagged data points",
                "Understand anomaly explanations: Read why each point is considered anomalous",
                "Disable anomaly detection and enable Forecasting",
                "Set forecast parameters: Specify number of periods to forecast (e.g., 3 months)",
                "Review forecast: Examine predicted values and confidence intervals",
                "Adjust forecast settings: Modify seasonality and trend assumptions if needed",
                "Compare forecast to actuals (if available) to assess accuracy",
                "Combine both features: Enable both anomaly detection and forecasting on the same chart"
              ],
              keyPoints: [
                "Anomaly Detection helps identify outliers that may indicate problems or opportunities",
                "Forecasting provides data-driven predictions for planning and budgeting",
                "Both features work automatically—no machine learning setup required",
                "Confidence intervals in forecasts show the range of uncertainty"
              ],
              insiderTips: [
                "Anomaly Detection works best with consistent, regularly-spaced time series data",
                "Review anomalies with business context—some 'anomalies' may be expected events",
                "Forecasts assume historical patterns will continue—adjust for known future changes",
                "Use forecasting for short to medium-term predictions (3-12 months) for best accuracy",
                "Both features require sufficient historical data (at least 2-3 full cycles for seasonality)",
                "Enable these features in final reports to provide value to end users automatically"
              ]
            },
          },
        ],
      },
    ],
  },
  {
    id: "part-3",
    title: "The Power BI Master – Enterprise and Administration",
    description: "Enterprise deployment, optimization, and advanced topics",
    modules: [
      {
        id: "module-12",
        title: "The Power BI Service – Collaboration and Deployment",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 12,
        lessons: [
          {
            id: "12-1",
            moduleNumber: 12,
            lessonNumber: 1,
            title: "Publishing and Exploring the Power BI Service",
            description: "Using the \"Publish\" button in Power BI Desktop to send the .pbix file to the cloud (Power BI Service)",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Using the \"Publish\" button in Power BI Desktop to send the .pbix file to the cloud (Power BI Service)",
              discussion: "A tour of the Service UI, identifying the three main content types: Workspaces, Reports, and Semantic Models (the new name for Datasets)",
            },
          },
          {
            id: "12-2",
            moduleNumber: 12,
            lessonNumber: 2,
            title: "Reports vs. Dashboards (A Critical Distinction)",
            description: "In the Power BI Service, Reports and Dashboards are distinct, and the terms are not interchangeable. A Dashboard is a feature unique to the Service",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "In the Power BI Service, Reports and Dashboards are distinct entities, and the terms are not interchangeable. A Dashboard is a feature unique to the Power BI Service (not available in Desktop).",
              discussion: "A Report is the multi-page, interactive analysis created in Power BI Desktop and published to the Service. Reports are designed for deep-dive analysis with full interactivity including cross-filtering, drill-through, and bookmarks. A Dashboard is a single-page monitoring tool created directly in the Service. Visuals (or 'tiles') are 'pinned' from one or more reports to create a 'greatest hits' collection or high-level summary. Dashboards are optimized for at-a-glance monitoring rather than detailed analysis. This distinction is a common point of confusion. A 'Master' must educate stakeholders on the difference to set proper expectations about what each tool can do.",
              tables: [
                {
                  title: "Reports vs. Dashboards (in Power BI Service)",
                  headers: ["Feature", "Report", "Dashboard"],
                  rows: [
                    ["Source", "1 report = 1 .pbix file from Desktop", "Tiles can come from many reports"],
                    ["Pages", "Can have many pages", "Single page only"],
                    ["Interactivity", "Highly interactive (cross-filtering, drill-through)", "Less interactive (clicking tile links to report)"],
                    ["Where Created", "Power BI Desktop", "Power BI Service"],
                    ["Use Case", "Deep-dive Analysis", "At-a-glance Monitoring"],
                    ["Editing", "Edit in Desktop, republish", "Edit tiles, layout in Service"],
                    ["Filters", "Full filtering capabilities", "Limited filtering (dashboard-level filters)"]
                  ]
                }
              ],
              keyPoints: [
                "Reports are for analysis; Dashboards are for monitoring",
                "Reports come from Desktop; Dashboards are created in Service",
                "Reports are multi-page and interactive; Dashboards are single-page summaries",
                "Dashboards can aggregate visuals from multiple reports"
              ],
              insiderTips: [
                "Use Dashboards for executives who want high-level KPIs at a glance",
                "Use Reports for analysts who need to explore and drill into details",
                "Pin key visuals from reports to dashboards for visibility",
                "Set up dashboards as landing pages for different user groups",
                "Remember: You can't create dashboards in Desktop—only in Service"
              ]
            },
          },
          {
            id: "12-3",
            moduleNumber: 12,
            lessonNumber: 3,
            title: "Collaboration with Workspaces",
            description: "A Workspace is the fundamental unit of collaboration in the Power BI Service",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A Workspace is the fundamental unit of collaboration in the Power BI Service",
              discussion: "A Workspace (e.g., \"Finance Team\") is created, and reports are published to it. This is the \"development folder\" where colleagues with \"Admin,\" \"Member,\" or \"Contributor\" roles can co-create and manage content",
            },
          },
          {
            id: "12-4",
            moduleNumber: 12,
            lessonNumber: 4,
            title: "Distribution with Apps (The \"End-User\" Experience)",
            description: "End-users (e.g., executives, consumers) should never be given direct access to the developer Workspace.132 The correct method for distribution is publishing the Workspace content as an App",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "End-users (e.g., executives, consumers) should never be given direct access to the developer Workspace. The correct method for distribution is publishing the Workspace content as an App. This separation between development and consumption is the core governance model of Power BI.",
              discussion: "An App is a clean, read-only \"launcher\" that bundles the reports and dashboards from a workspace into a professional, curated package for consumers. This hides all the backend complexity (like semantic models) and provides a much cleaner user experience. This is the core governance model of Power BI: Workspaces are for developers (the kitchen); Apps are for consumers (the restaurant). Why Apps matter: Workspaces are messy—they contain semantic models, development reports, and technical artifacts that confuse end-users. Apps are clean—they contain only finished reports and dashboards in a professional interface. Workspaces are for collaboration—multiple developers work together on content. Apps are for consumption—users simply view and interact with reports. Creating an App: In Power BI Service, navigate to a workspace, click 'Create app' button, configure app settings (name, description, logo, color theme), select content to include (reports, dashboards), set permissions (who can access the app), and publish the app. App features include: Custom branding (add logo, colors, and description to match your organization), Content curation (select only finished reports—hide development work), Permissions management (control who can access the app), Update notifications (notify users when app content is updated), and Professional interface (clean, organized experience for end-users). Best practices: Never share workspace access directly with end-users—use Apps instead, Update apps regularly—publish updates from workspace to app, Configure app branding—add logo and colors for professional appearance, Select finished content only—hide development work and technical artifacts, Set appropriate permissions—control who can access what content, and Document app purpose—clear descriptions help users understand what they're accessing. This lesson also covers other sharing methods: Export to PDF/PPT (generate static reports for presentations or emails), Embed in Microsoft Teams (embed reports directly in Teams channels for collaboration), Embed in SharePoint (embed reports in SharePoint pages for intranet integration), and Direct sharing (share individual reports with specific users for ad-hoc collaboration). The key insight: Professional Power BI governance separates development (workspaces) from consumption (apps). This separation enables collaboration while maintaining a clean user experience. Master users understand that Apps are the proper way to distribute content to end-users—direct workspace access is for developers only.",
              keyPoints: [
                "Apps bundle workspace content into professional packages for end-users",
                "Workspaces are for developers; Apps are for consumers",
                "Apps provide clean interface—hide backend complexity and technical artifacts",
                "Apps enable controlled distribution with permissions and branding",
                "Professional governance separates development from consumption",
                "Never share workspace access directly with end-users—use Apps instead"
              ],
              insiderTips: [
                "Never share workspace access with end-users—Apps are the proper distribution method",
                "Update apps regularly—publish updates from workspace to keep content current",
                "Configure app branding—add logo and colors for professional appearance",
                "Select finished content only—hide development work and technical artifacts",
                "Set appropriate permissions—control who can access what content",
                "Document app purpose—clear descriptions help users understand content",
                "Pro tip: Use App update notifications to keep users informed of changes",
                "Master users understand Apps are essential for professional governance",
                "Apps transform Power BI from developer tool to business solution"
              ]
            },
          },
          {
            id: "12-5",
            moduleNumber: 12,
            lessonNumber: 5,
            title: "Data Refresh and On-Premises Data Gateways",
            description: "Keeping the data in an \"Import\" model fresh in the Power BI Service",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Power BI Service',
            content: {
              concept: "Keeping the data in an \"Import\" model fresh in the Power BI Service requires understanding refresh schedules, data gateways, and the differences between cloud and on-premises data sources.",
              discussion: "Scheduled Refresh allows you to configure automatic updates for cloud data sources (e.g., Azure SQL, SharePoint, Excel Online) directly in the Service. Pro licenses allow up to 8 refreshes per day, while Premium capacity allows up to 48 refreshes per day. For on-premises data sources (e.g., local SQL Server, file shares), an On-Premises Data Gateway must be installed on a local machine. The Gateway acts as a secure \"tunnel\" that allows the Power BI Service (in the cloud) to reach your local data and perform the refresh. This is essential because the Power BI Service cannot directly access resources behind your organization's firewall. Gateways support both scheduled refresh and real-time data queries for DirectQuery scenarios.",
              keyPoints: [
                "Cloud data sources can refresh automatically without a gateway",
                "On-premises sources require a Data Gateway",
                "Pro license: 8 refreshes/day; Premium: up to 48 refreshes/day",
                "Gateways enable secure access to on-premises resources from the cloud"
              ],
              insiderTips: [
                "Install the gateway on a machine that's always on (or use a server)",
                "Use a dedicated service account for the gateway, not a personal account",
                "Test gateway connectivity before setting up refresh schedules",
                "For multiple data sources, use the same gateway—no need to install multiple instances",
                "Monitor gateway status in the Service to ensure refreshes are successful",
                "Consider incremental refresh for large datasets to reduce refresh time"
              ]
            },
          },
        ],
      },
      {
        id: "module-13",
        title: "Optimization and Performance Tuning",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 13,
        lessons: [
          {
            id: "13-1",
            moduleNumber: 13,
            lessonNumber: 1,
            title: "Identifying Bottlenecks with Performance Analyzer",
            description: "A \"Master\" must build fast, efficient reports. The first step is diagnostics, using the built-in Performance Analyzer",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Performance", "Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A \"Master\" must build fast, efficient reports. The first step is diagnostics, using the built-in Performance Analyzer to identify which visuals and queries are slow.",
              discussion: "Performance Analyzer is found in the Optimize ribbon in Power BI Desktop. It provides detailed timing information for each visual on a report page. To use it, start recording, interact with slicers or filters, and then analyze the log. The key metrics recorded for each visual are: DAX Query time (time spent by the DAX engine executing the query), Visual Display time (time spent rendering the visual on-screen), and Other time (time spent waiting for other visuals to complete). If 'DAX Query' time is slow, the issue is likely with the DAX formula or data model. If 'Visual Display' time is slow, the visual itself may be complex or there are too many visuals on the page competing for resources.",
              labs: [
                "Open a report with multiple visuals",
                "Go to View > Performance Analyzer to open the pane",
                "Click 'Start Recording'",
                "Interact with a slicer or filter",
                "Review the performance log for each visual",
                "Identify which visuals have the highest DAX Query times",
                "Click 'Copy query' for a slow visual to analyze the DAX",
                "Focus optimization efforts on the slowest visuals first"
              ],
              keyPoints: [
                "Performance Analyzer identifies which visuals are slow",
                "DAX Query time indicates model or DAX issues",
                "Visual Display time indicates rendering issues",
                "Always measure before optimizing—don't guess"
              ],
              insiderTips: [
                "Record performance with realistic data volumes, not just sample data",
                "Test performance with filters applied—empty visuals are always fast",
                "Use Performance Analyzer after major changes to catch regressions",
                "Share performance logs with team members to troubleshoot together",
                "Consider using Performance Analyzer in the Service (Oct 2025) for production performance testing"
              ]
            },
          },
          {
            id: "13-2",
            moduleNumber: 13,
            lessonNumber: 2,
            title: "Deep-Dive Analysis with DAX Studio",
            description: "Performance Analyzer identifies which visual is slow. DAX Studio is a free, external tool that shows why the DAX query is slow",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Performance", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Performance Analyzer identifies which visual is slow. DAX Studio is a free, external tool that shows why the DAX query is slow",
              discussion: "This is a \"pro\" tool. It can connect directly to a Power BI Desktop file",
            },
          },
          {
            id: "13-3",
            moduleNumber: 13,
            lessonNumber: 3,
            title: "Core Optimization Strategies",
            description: "A summary of how to fix the problems identified",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Performance"],
            topic: 'Performance',
            content: {
              concept: "Once Performance Analyzer identifies bottlenecks, you need strategies to fix them. Optimization priorities matter—some fixes have much larger impacts than others.",
              discussion: "Data Model optimization has the highest priority. A proper Star Schema (Module 5) is the single-best performance optimization. Poor relationships, unnecessary columns, and incorrect cardinality can cause massive performance issues. Power Query optimization involves filtering data as early as possible and removing all unneeded columns before loading into the model. DAX optimization means writing efficient DAX by prioritizing Measures over Calculated Columns (Module 6) and using DAX variables to store intermediate results instead of recalculating expressions multiple times. Visual optimization involves reducing the number of visuals on the page and avoiding slicers with high-cardinality (e.g., 1 million distinct customers). Focus on the biggest impact first—often improving the data model solves multiple performance issues at once.",
              tables: [
                {
                  title: "Optimization Priority & Impact",
                  headers: ["Area", "Priority", "Typical Impact", "Effort"],
                  rows: [
                    ["Data Model (Star Schema)", "Highest", "10-100x improvement", "Medium"],
                    ["Remove Unnecessary Columns", "Very High", "2-10x improvement", "Low"],
                    ["DAX Optimization", "High", "2-5x improvement", "Medium"],
                    ["Visual Reduction", "Medium", "1.5-3x improvement", "Low"],
                    ["Slicer Optimization", "Medium", "1.5-2x improvement", "Low"]
                  ]
                }
              ],
              keyPoints: [
                "Fix the data model first—it has the biggest impact",
                "Remove unused columns early in Power Query",
                "Use measures, not calculated columns, for aggregations",
                "Reduce visual count and simplify complex visuals"
              ],
              insiderTips: [
                "Measure before and after optimization to prove the improvement",
                "Start with the slowest visual—fixing one often helps others",
                "Use DAX variables to avoid recalculating the same expression multiple times",
                "Avoid high-cardinality slicers (use a search box instead)",
                "Consider splitting complex reports into multiple pages",
                "Test optimizations with realistic data volumes, not just test data"
              ]
            },
          },
          {
            id: "13-4",
            moduleNumber: 13,
            lessonNumber: 4,
            title: "Optimizing for Big Data (Aggregations)",
            description: "Using aggregations to pre-summarize large fact tables",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Performance", "Data Modeling"],
            topic: 'AI Features',
            content: {
              concept: "Using aggregations to pre-summarize large fact tables",
              discussion: "This feature allows Power BI to query a smaller, pre-aggregated table for high-level visuals (e.g., \"Sales by Year\") while still retaining the granular data for drill-down, offering a hybrid approach with massive performance gains",
            },
          },
          {
            id: "13-5",
            moduleNumber: 13,
            lessonNumber: 5,
            title: "Incremental Refresh",
            description: "Setting up an incremental refresh policy for large datasets",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Setting up an incremental refresh policy for large datasets",
              discussion: "Instead of refreshing the entire 10-year dataset every day, configure incremental refresh to only refresh the last 7 days of data, while archiving the older data. This drastically reduces refresh times and resource load",
            },
          },
          {
            id: "13-6",
            moduleNumber: 13,
            lessonNumber: 6,
            title: "Using Performance Analyzer in the Web (New in 2025)",
            description: "The Performance Analyzer tool is now also available directly in the Power BI Service (GA Oct 2025), allowing for performance testing in the production environment.Lab: Run the Performance Analyzer in",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Performance", "2025 Features"],
            topic: 'Power BI Service',
            content: {
              concept: "The Performance Analyzer tool is now also available directly in the Power BI Service (GA Oct 2025), allowing for performance testing in the production environment.Lab: Run the Performance Analyzer in the Power BI Service 144 and compare the results of a slow visual to the timings captured in Power BI Desktop",
            },
          },
        ],
      },
      {
        id: "module-14",
        title: "Governance and Security",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 14,
        lessons: [
          {
            id: "14-1",
            moduleNumber: 14,
            lessonNumber: 1,
            title: "Row-Level Security (RLS) – Static Method",
            description: "RLS is a security feature that restricts data access at the row level, ensuring users only see the data they are authorized to see.148Lab (Static RLS):In Power BI Desktop, navigate to Modeling > Manag",
            duration: 20,
            difficulty: 'advanced',
            tags: ["DAX", "Security"],
            topic: 'DAX',
            content: {
              concept: "RLS is a security feature that restricts data access at the row level, ensuring users only see the data they are authorized to see.148Lab (Static RLS):In Power BI Desktop, navigate to Modeling > Manage Roles.150Create a new role, e.g., Role_East.150Apply a DAX filter to the Region table:  = \"East\".148Test the role using the View as feature.150Publish to the Power BI Service. In the Security settings of the Semantic Model, assign users or groups to the Role_East",
              discussion: "This method is simple but has high maintenance. A new role is required for every new region",
            },
          },
          {
            id: "14-2",
            moduleNumber: 14,
            lessonNumber: 2,
            title: "Dynamic Row-Level Security (RLS) (The \"Master\" Method)",
            description: "A scalable, enterprise-grade solution where one role dynamically filters data based on the logged-in user's identity.149Prerequisite: This method requires a \"User Permissions\" or \"lookup\" table in the",
            duration: 20,
            difficulty: 'advanced',
            tags: ["DAX", "Visualizations", "Security"],
            topic: 'DAX',
            content: {
              concept: "A scalable, enterprise-grade solution where one role dynamically filters data based on the logged-in user's identity.149Prerequisite: This method requires a \"User Permissions\" or \"lookup\" table in the data model that maps users (by their email) to the data they are allowed to see (e.g., user@company.com | East).154Lab (Dynamic RLS):Create a single role, e.g., User_Role.154Apply a DAX filter to the User Permissions table: [UserEmail] = USERPRINCIPALNAME().150Ensure the User Permissions table has a relationship to the rest of the data model (e.g., to the Dim_Region table)",
              discussion: "This is the superior method. Security is now data-driven. To grant a new user access, a developer doesn't change the Power BI report; an admin simply adds a row to the User Permissions table",
            },
          },
          {
            id: "14-3",
            moduleNumber: 14,
            lessonNumber: 3,
            title: "Object-Level Security (OLS)",
            description: "RLS hides rows of data. OLS hides entire columns or tables",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Security"],
            topic: 'Security',
            content: {
              concept: "RLS hides rows of data. OLS hides entire columns or tables",
              discussion: "For example, hiding a `` column from \"Analyst\" users while making it visible to \"Manager\" users.Implementation: OLS cannot be configured inside the Power BI Desktop interface.157 It requires an external tool, such as Tabular Editor",
            },
          },
          {
            id: "14-4",
            moduleNumber: 14,
            lessonNumber: 4,
            title: "Overview of the Power BI Admin Portal",
            description: "A brief tour of the central, tenant-wide settings for Power BI governance",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "A brief tour of the central, tenant-wide settings for Power BI governance provides administrators with comprehensive control over Power BI usage, security, and compliance across the entire organization. The Admin Portal is where Power BI governance is configured and enforced.",
              discussion: "This includes Usage Metrics (detailed analytics on Power BI usage across the tenant—who's using what, how often, and where. Essential for understanding adoption, identifying popular content, and optimizing licenses), auditing (comprehensive audit logs tracking all Power BI activities—who accessed what, when, and from where. Essential for compliance and security monitoring), and Tenant Settings (organization-wide configuration options like \"Allow publish to web\" (controls whether users can publish reports publicly), \"Enable external sharing\" (controls whether users can share reports with external users), \"Manage custom visuals\" (controls whether users can import custom visuals), \"Enable Copilot features\" (controls AI assistant availability), and many other settings). Additional Admin Portal features include: Data sensitivity labels (classify and protect data based on sensitivity levels—Public, Internal, Confidential, etc.), Certified datasets (promote trusted datasets for enterprise-wide use—users can identify certified content), Data lineage (visualize data flow from source to report—understand dependencies and impacts), Capacity monitoring (track Premium capacity usage and performance), and User management (manage licenses, roles, and permissions across the organization). The key insight: The Admin Portal is where Power BI governance happens. Professional organizations use these settings to balance security, compliance, and user productivity. Best practices: Review tenant settings regularly—ensure security without blocking productivity, Enable auditing—essential for compliance and security monitoring, Use sensitivity labels—protect sensitive data appropriately, Certify trusted datasets—help users identify reliable data sources, Monitor usage metrics—understand adoption and optimize licenses, and Document settings—future administrators need to understand configuration decisions. Master users understand that governance isn't about restricting users—it's about enabling safe, compliant, and effective use of Power BI across the organization.",
              keyPoints: [
                "Admin Portal provides tenant-wide settings for Power BI governance",
                "Usage Metrics track adoption and help optimize licenses",
                "Auditing provides compliance and security monitoring",
                "Tenant Settings control organization-wide behavior",
                "Sensitivity labels and certified datasets enhance data governance",
                "Professional governance balances security, compliance, and productivity"
              ],
              insiderTips: [
                "Review tenant settings regularly—ensure security without blocking productivity",
                "Enable auditing—essential for compliance and security monitoring",
                "Use sensitivity labels—protect sensitive data appropriately",
                "Certify trusted datasets—help users identify reliable data sources",
                "Monitor usage metrics—understand adoption and optimize licenses",
                "Document settings—future administrators need to understand configuration",
                "Pro tip: Create a governance policy document explaining tenant settings",
                "Master users understand governance enables safe, compliant use of Power BI",
                "Admin Portal is where professional organizations manage Power BI at scale"
              ]
            },
          },
        ],
      },
      {
        id: "module-15",
        title: "Advanced Data Modeling",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 15,
        lessons: [
          {
            id: "15-1",
            moduleNumber: 15,
            lessonNumber: 1,
            title: "Introduction to Tabular Editor (External Tool)",
            description: "Tabular Editor is the professional's tool for data modeling. It connects to the Power BI model and exposes many properties and features not visible in the Desktop UI",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Data Modeling"],
            topic: 'Data Modeling',
            content: {
              concept: "Tabular Editor is the professional's tool for data modeling. It connects to the Power BI model and exposes many properties and features not visible in the Desktop UI, enabling advanced modeling capabilities that aren't available in Power BI Desktop alone.",
              discussion: "Tabular Editor is a free, open-source tool that connects directly to Power BI Desktop files and exposes the underlying Tabular Object Model (TOM). While Power BI Desktop provides a user-friendly interface for most modeling tasks, Tabular Editor reveals advanced properties and features hidden in the UI. Key capabilities include: Advanced Properties (access to metadata properties not visible in Desktop—descriptions, display names, formatting, etc.), Calculation Groups (create reusable calculation patterns that can be applied to any measure—requires Tabular Editor), Bulk Operations (modify multiple objects at once using scripts—rename columns, set properties, create hierarchies), Scripting (use C# scripts to automate modeling tasks—bulk updates, property changes, object creation), Formatting (apply consistent formatting across measures and columns using scripts), and Performance Tuning (access advanced performance properties like DirectQuery mode settings, aggregation settings, etc.). The key insight: Tabular Editor is essential for enterprise modeling. Professional organizations use it for: Creating Calculation Groups (reusable calculation patterns for Time Intelligence, YTD, PY, etc.), Bulk operations (renaming columns, setting properties across multiple objects), Scripting automation (automating repetitive modeling tasks), and Advanced configuration (setting properties not available in Desktop UI). Best practices: Download Tabular Editor from GitHub (it's free and open-source), Learn basic operations before scripting, Use scripts for bulk operations—saves time on large models, Document scripts—future maintenance requires understanding, Test scripts on development models before production, and Understand TOM—Tabular Object Model is the underlying structure. Master users understand that Tabular Editor is where advanced modeling happens. Power BI Desktop is great for most tasks, but enterprise modeling requires Tabular Editor for Calculation Groups, bulk operations, and advanced configuration.",
              keyPoints: [
                "Tabular Editor exposes advanced modeling properties not available in Desktop UI",
                "Essential for Calculation Groups—cannot be created in Desktop alone",
                "Enables bulk operations and scripting automation",
                "Connects directly to Power BI Desktop files via TOM (Tabular Object Model)",
                "Free, open-source tool used by enterprise organizations",
                "Essential for advanced modeling scenarios and enterprise deployments"
              ],
              insiderTips: [
                "Download Tabular Editor from GitHub—it's free and open-source",
                "Learn basic operations before scripting—understand the UI first",
                "Use scripts for bulk operations—renaming columns, setting properties saves time",
                "Calculation Groups require Tabular Editor—cannot be created in Desktop",
                "Test scripts on development models before production—safety first",
                "Document scripts—future maintenance requires understanding your code",
                "Pro tip: Learn C# basics—scripting in Tabular Editor uses C# syntax",
                "Master users understand Tabular Editor is essential for enterprise modeling",
                "Desktop + Tabular Editor = complete modeling toolkit"
              ]
            },
          },
          {
            id: "15-2",
            moduleNumber: 15,
            lessonNumber: 2,
            title: "Creating and Using Calculation Groups",
            description: "Calculation Groups are the ultimate DAX reusability tool. They are, in effect, \"measures for measures,\" allowing a developer to define calculation logic that can be applied to any base measure",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Calculation Groups are the ultimate DAX reusability tool. They are, in effect, \"measures for measures,\" allowing a developer to define calculation logic that can be applied to any base measure",
              discussion: "A developer from",
            },
          },
          {
            id: "15-3",
            moduleNumber: 15,
            lessonNumber: 3,
            title: "Advanced M Language Concepts",
            description: "Moving beyond the UI in Power Query to write M code",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "Moving beyond the UI in Power Query to write M code",
              discussion: "A brief introduction to creating Power Query Parameters (e.g., for a server name or file path) 13 and custom M functions 46 for reusable transformation logic",
            },
          },
          {
            id: "15-4",
            moduleNumber: 15,
            lessonNumber: 4,
            title: "Creating Reusable ETL with Dataflows Gen",
            description: "Using Power BI Dataflows (Gen2) as a cloud-based ETL tool that integrates with Microsoft Fabric",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations", "Power Query", "Microsoft Fabric"],
            topic: 'Power Query',
            content: {
              concept: "Using Power BI Dataflows (Gen2) as a cloud-based ETL tool that integrates with Microsoft Fabric",
              discussion: "A Dataflow is \"Power Query in the cloud.\" It allows a developer to prepare data once in the Service, storing the clean data in Azure Data Lake. Multiple reports can then connect to this single, certified Dataflow.126 Dataflows Gen2 allows this data to be directly loaded as a destination into a Fabric Lakehouse or Warehouse",
            },
          },
        ],
      },
      {
        id: "module-16",
        title: "Enterprise Deployment and Integration",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 16,
        lessons: [
          {
            id: "16-1",
            moduleNumber: 16,
            lessonNumber: 1,
            title: "CI/CD with Deployment Pipelines",
            description: "A \"Master\" never publishes a change directly to the live production report. A professional Continuous Integration/Continuous Deployment (CI/CD) workflow is used to de-risk changes",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A \"Master\" never publishes a change directly to the live production report. A professional Continuous Integration/Continuous Deployment (CI/CD) workflow is used to de-risk changes by testing and validating updates before they reach production. This is essential for enterprise deployments where reliability and stability are critical.",
              discussion: "Deployment Pipelines in the Power BI Service provide a simple, visual interface for CI/CD workflows. Deployment Pipelines enable a three-stage deployment process: Development (where developers build and test new features), Test (where updates are validated before production), and Production (where end-users access finalized reports). This workflow de-risks changes by: Testing before production (validate updates in Test stage before deploying to Production), Validation (review changes, test functionality, ensure quality), and Rollback capability (if issues arise, revert to previous version). Creating a Deployment Pipeline: In Power BI Service, navigate to a workspace, click 'Deployment pipelines' in the workspace menu, click 'Create pipeline', select source workspace (Development), add Test and Production stages, and configure pipeline settings. Deployment workflow: Build report in Development workspace, Deploy to Test stage for validation, Test functionality and validate changes, Deploy to Production after validation, and Monitor production for issues. Best practices: Never skip Test stage—always validate before production, Use version control—track changes across stages, Document changes—explain what changed and why, Test thoroughly—validate functionality, performance, and security, and Monitor production—watch for issues after deployment. The key insight: Professional Power BI development requires CI/CD workflows. Direct publishing to production is risky—use Deployment Pipelines to ensure reliability and stability. Master users understand that CI/CD is not optional for enterprise deployments—it's essential for maintaining production quality.",
              keyPoints: [
                "Deployment Pipelines provide CI/CD workflows for Power BI reports",
                "Three-stage process: Development → Test → Production",
                "Testing before production de-risks changes and ensures quality",
                "Professional deployments require validation before production",
                "CI/CD is essential for enterprise deployments",
                "Never skip Test stage—always validate before production"
              ],
              insiderTips: [
                "Always use Deployment Pipelines for production reports—never publish directly",
                "Test stage is critical—validate changes before production deployment",
                "Use version control—track changes across stages",
                "Document changes—explain what changed and why for future reference",
                "Test thoroughly—validate functionality, performance, and security",
                "Monitor production after deployment—watch for issues",
                "Pro tip: Create deployment checklist—ensures nothing is missed",
                "Master users understand CI/CD is essential for professional deployments",
                "Deployment Pipelines separate professionals from beginners"
              ]
            },
          },
          {
            id: "16-2",
            moduleNumber: 16,
            lessonNumber: 2,
            title: "The Future: Microsoft Fabric and OneLake",
            description: "Power BI is no longer just a standalone tool; it is the visualization experience for Microsoft Fabric",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Visualizations", "Data Modeling", "Microsoft Fabric"],
            topic: 'Visualizations',
            content: {
              concept: "Power BI is no longer just a standalone tool; it is the visualization experience for Microsoft Fabric",
              discussion: "Fabric is Microsoft's new, all-in-one analytics platform.10 It unifies Data Engineering (Data Factory, Spark), Data Warehousing (SQL), and Business Intelligence (Power BI) into a single SaaS product.10The central concept is OneLake.21 OneLake is the \"OneDrive for Data.\" All Fabric tools read from and write to this single, unified data lake. This eliminates data duplication, silos, and the need for constant data movement. The \"Master\" developer must understand this shift: the future is less about \"importing files\" and more about \"connecting to the OneLake.\"",
            },
          },
          {
            id: "16-3",
            moduleNumber: 16,
            lessonNumber: 3,
            title: "Integrating with the Power Platform (Power Apps & Power Automate)",
            description: "Making reports actionable by integrating with the other components of the Power Platform",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Making reports actionable by integrating with the other components of the Power Platform transforms Power BI from a reporting tool into an interactive business application. Integration with Power Apps and Power Automate enables users to take action directly from reports, closing the loop from insight to execution.",
              discussion: "Power BI is part of Microsoft's Power Platform—a suite of tools that work together: Power BI (analytics and reporting), Power Apps (custom business applications), Power Automate (workflow automation), and Power Virtual Agents (chatbots). Integrating these tools transforms reports from passive dashboards into actionable business solutions. Integration scenarios include: Power Apps Integration (embed Power Apps forms directly into Power BI reports—users can input data, update records, or trigger actions without leaving the report. Example: Sales report with embedded form to update customer information), Power Automate Integration (trigger automated workflows from Power BI reports—when a KPI exceeds threshold, automatically send email, create task, or update system. Example: Sales threshold alert automatically creates support ticket), Data Action Buttons (add action buttons to reports that trigger Power Automate flows—users click 'Approve' button to start approval workflow, or 'Create Task' to generate task in project management system), and Cross-Platform Navigation (embed Power BI visuals in Power Apps apps—combine interactive analytics with business applications). The key insight: Integration transforms Power BI from 'what happened' to 'what should I do about it.' This closes the loop between analytics and action, making Power BI a complete business solution, not just a reporting tool. Best practices: Start with simple integrations—embed a Power App form before building complex workflows, Test thoroughly—automated actions have consequences, ensure reliability, Document integration points—future maintenance requires understanding how systems connect, Secure appropriately—automated actions may need approval workflows, and Understand licensing—Power Apps and Power Automate require separate licenses. Master users understand that integration is where Power BI becomes transformative—reports that drive action are more valuable than reports that just show data.",
              keyPoints: [
                "Power Platform integration makes reports actionable, not just informative",
                "Power Apps integration embeds forms and apps directly into Power BI reports",
                "Power Automate integration triggers automated workflows from report insights",
                "Action buttons enable users to take action directly from reports",
                "Integration closes the loop from insight to execution",
                "Transforms Power BI from reporting tool to complete business solution"
              ],
              insiderTips: [
                "Start with simple integrations—embed Power App form before building complex workflows",
                "Test automated actions thoroughly—reliability is critical for production",
                "Document integration points—future maintenance requires understanding connections",
                "Secure appropriately—automated actions may need approval workflows",
                "Understand licensing—Power Apps and Power Automate require separate licenses",
                "Integration is transformative—reports that drive action are more valuable",
                "Pro tip: Build proof-of-concept integrations first—validate value before full deployment",
                "Master users understand integration is where Power BI becomes truly powerful",
                "Close the loop: Analytics → Insight → Action → Result → Analytics"
              ]
            },
          },
          {
            id: "16-4",
            moduleNumber: 16,
            lessonNumber: 4,
            title: "Developer Focus: Power BI Embedded Analytics",
            description: "For \"Master\" level developers, this is the process of embedding Power BI content inside their own custom applications for external customers (a SaaS scenario)",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Power BI Service',
            content: {
              concept: "For \"Master\" level developers, this is the process of embedding Power BI content inside their own custom applications for external customers (a SaaS scenario). Power BI Embedded Analytics enables you to integrate Power BI reports and dashboards directly into custom web applications, providing a seamless analytics experience within your own application.",
              discussion: "This is a highly technical, API-driven topic. It involves App Registration in Microsoft Entra ID (formerly Azure AD), workspace management, and using client-side APIs (JavaScript) to render the content securely. Power BI Embedded Analytics enables organizations to integrate Power BI reports into custom applications without requiring users to have Power BI licenses—they access reports through your application. Key components include: App Registration (register your application in Microsoft Entra ID to authenticate users and access Power BI APIs), Service Principal Authentication (create a service principal for automated authentication—your app authenticates on behalf of users), Workspace Management (create and manage workspaces programmatically—deploy reports, manage content, control access), and Client-Side APIs (use JavaScript SDK to embed reports in web applications—render Power BI content in your UI). The key insight: Embedded Analytics transforms Power BI from a standalone BI tool into an integrated analytics component. Your application becomes the interface—Power BI provides the analytics engine. This is essential for SaaS scenarios where you want to provide analytics to customers without requiring Power BI licenses. Best practices: Understand authentication—service principals vs user authentication, Secure properly—embedded content still needs security, Test thoroughly—embedded reports have different behavior, Monitor usage—track API calls and performance, and Document integration—future maintenance requires understanding. Master users understand that Embedded Analytics is where Power BI becomes truly integrated—reports aren't just in Power BI Service, they're part of your application ecosystem.",
              keyPoints: [
                "Embedded Analytics integrates Power BI into custom applications",
                "Requires App Registration in Microsoft Entra ID",
                "Uses Service Principal authentication for automated access",
                "Client-side APIs (JavaScript) render reports in web applications",
                "Essential for SaaS scenarios without Power BI licenses",
                "Transforms Power BI from standalone tool to integrated component"
              ],
              insiderTips: [
                "Embedded Analytics requires Premium or Premium Per User licenses",
                "App Registration in Entra ID is the first step—create service principal",
                "Use JavaScript SDK to embed reports—Power BI provides client-side APIs",
                "Secure properly—embedded content still needs RLS and authentication",
                "Test thoroughly—embedded reports behave differently than Service reports",
                "Monitor API usage—embedded reports consume API calls",
                "Pro tip: Start with proof-of-concept—validate integration before full deployment",
                "Master users understand Embedded Analytics is advanced—requires API knowledge",
                "Embedded Analytics is where Power BI becomes truly integrated"
              ]
            },
          },
          {
            id: "16-5",
            moduleNumber: 16,
            lessonNumber: 5,
            title: "Introduction to Streaming and Real-Time Dashboards",
            description: "A brief overview of connecting to streaming data sources (e.g., IoT sensor data via Azure Stream Analytics)",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A brief overview of connecting to streaming data sources (e.g., IoT sensor data via Azure Stream Analytics) demonstrates how Power BI can be used for real-time analytics, moving beyond static, refreshed reports. Streaming data enables live dashboards that update in real-time as events occur.",
              discussion: "This illustrates how Power BI can be used for real-time analytics, moving beyond static, refreshed reports. Power BI supports streaming data through several mechanisms: Push Datasets (use REST API to push data directly to Power BI—data appears immediately in visuals), Streaming Datasets (configure datasets to accept streaming data—real-time updates without refresh), and Azure Stream Analytics Integration (connect Power BI to Azure Stream Analytics for large-scale streaming scenarios—IoT sensors, telemetry, event streams). Real-time use cases include: IoT Monitoring (sensor data updating in real-time—temperature, pressure, etc.), Live Operations Dashboards (operations center displays updating as events occur), Social Media Monitoring (Twitter feeds, social mentions updating live), Financial Markets (stock prices, trading data updating in real-time), and Manufacturing (production line status, machine health updating continuously). The key insight: Streaming data transforms Power BI from periodic reporting (refreshed hourly/daily) to real-time analytics (updated continuously). This is essential for operational dashboards where decisions must be made in real-time. Best practices: Understand latency—streaming data has different latency than refresh, Monitor performance—real-time updates can impact performance, Use appropriate visuals—some visuals work better with streaming data, Set update intervals—balance real-time needs with performance, and Test thoroughly—streaming scenarios have unique requirements. Master users understand that streaming data is a specialized use case—most reports don't need real-time updates, but when you do need real-time analytics, Power BI provides the capabilities.",
              keyPoints: [
                "Streaming data enables real-time analytics beyond static reports",
                "Push Datasets use REST API to push data directly to Power BI",
                "Streaming Datasets accept real-time updates without refresh",
                "Azure Stream Analytics integration enables large-scale streaming",
                "Essential for operational dashboards requiring real-time updates",
                "Streaming transforms Power BI from periodic to real-time analytics"
              ],
              insiderTips: [
                "Streaming data requires Premium or Premium Per User licenses",
                "Push Datasets are best for small-scale real-time scenarios",
                "Streaming Datasets work well for moderate-scale real-time needs",
                "Azure Stream Analytics is essential for large-scale streaming scenarios",
                "Understand latency—real-time has different characteristics than refresh",
                "Monitor performance—streaming updates can impact report performance",
                "Pro tip: Use streaming for operational dashboards, refresh for analytical reports",
                "Master users understand streaming is specialized—not needed for most reports",
                "Real-time analytics is where Power BI becomes operational, not just analytical"
              ]
            },
          },
        ],
      },
      {
        id: "module-17",
        title: "Copilot & Fabric Mastery",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 17,
        lessons: [
          {
            id: "17-1",
            moduleNumber: 17,
            lessonNumber: 1,
            title: "Introduction to Copilot (The AI Assistant)",
            description: "Using the new Copilot pane to summarize reports and generate insights using natural language.Lab: Use the Copilot pane to \"Summarize sales trends\" on a report page and ask follow-up questions about th",
            duration: 10,
            difficulty: 'advanced',
            tags: ["AI Features", "Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Using the new Copilot pane to summarize reports and generate insights using natural language transforms how users interact with Power BI reports. Copilot (GA Oct 2025) is an AI-powered assistant that understands your data and can answer questions, generate insights, and explain visualizations in plain English, making Power BI accessible to users without deep analytical expertise.",
              discussion: "Copilot is Microsoft's AI assistant integrated directly into Power BI Service and Desktop (Oct 2025 GA). It uses advanced language models to understand your data model and report context, allowing users to ask questions in natural language and receive intelligent answers. Key capabilities include: Report Summarization (Copilot can analyze an entire report page and provide a narrative summary of key insights), Insight Generation (Ask questions like 'What are the main trends in sales?' and Copilot analyzes the data to provide answers), Visual Explanations (Hover over a visual and ask Copilot 'What does this chart show?' for context-aware explanations), and Follow-up Questions (Have a conversation with your data—ask follow-up questions based on previous answers). Copilot represents the future of BI interaction—moving from 'building reports' to 'having conversations with data.' This democratizes analytics, making advanced data analysis accessible to business users who don't know DAX or data modeling. For analysts, Copilot accelerates insight generation by handling routine queries, allowing you to focus on complex analysis. For executives, Copilot provides instant answers without waiting for analysts. The key insight: Copilot doesn't replace analytical skills—it augments them. You still need to understand data modeling and DAX to build effective reports, but Copilot makes consuming and exploring reports dramatically easier. Best practices: Use Copilot for quick insights and report summaries, Verify Copilot's insights—always validate AI-generated findings with your own analysis, Use Copilot to explore data before building formal reports, Combine Copilot with traditional analysis for comprehensive insights, and Understand Copilot's limitations—it's powerful but not infallible.",
              keyPoints: [
                "Copilot is an AI assistant that understands your data and answers questions in natural language",
                "Can summarize reports, generate insights, and explain visualizations",
                "Democratizes analytics—makes advanced analysis accessible to non-technical users",
                "Augments analytical skills—doesn't replace understanding data modeling and DAX",
                "Represents the future of BI interaction—conversational analytics",
                "Use Copilot for quick insights and report summaries, verify findings with your own analysis"
              ],
              insiderTips: [
                "Copilot (GA Oct 2025) requires Power BI Premium or Pro license—check your tenant settings",
                "Use Copilot to explore data before building formal reports—faster than manual analysis",
                "Verify Copilot's insights—AI can be confident but wrong, always validate findings",
                "Copilot works best with well-structured data models—poor models = poor AI insights",
                "Use follow-up questions to dive deeper—Copilot maintains context throughout the conversation",
                "Copilot can generate narrative summaries for executive presentations—saves time",
                "Combine Copilot with traditional analysis—AI insights + human expertise = best results",
                "Pro tip: Use Copilot to explain complex DAX measures to non-technical stakeholders",
                "Master users understand Copilot's limitations—use it as a tool, not a replacement for analytical thinking"
              ],
              labs: [
                "Open Power BI Service or Desktop with Copilot enabled",
                "Navigate to a report page with multiple visuals",
                "Open the Copilot pane (typically in the sidebar or ribbon)",
                "Ask Copilot: 'Summarize sales trends on this page'",
                "Review Copilot's summary and key insights",
                "Ask follow-up question: 'What region has the highest growth?'",
                "Observe how Copilot maintains context from previous questions",
                "Ask: 'Explain this chart' while hovering over a visual",
                "Test Copilot's understanding: Ask complex questions about relationships between metrics",
                "Compare Copilot insights to your own analysis to verify accuracy"
              ]
            },
          },
          {
            id: "17-2",
            moduleNumber: 17,
            lessonNumber: 2,
            title: "Copilot for DAX Generation (GA Oct 2025)",
            description: "Using Copilot in the DAX Query View to write and explain complex DAX measures from a natural language prompt.Lab: In the DAX Query View, prompt Copilot to \"Write a DAX query for YoY growth\" and then a",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "AI Features", "Time Intelligence", "2025 Features"],
            topic: 'DAX',
            content: {
              concept: "Using Copilot in the DAX Query View to write and explain complex DAX measures from a natural language prompt revolutionizes how analysts create calculations. Instead of memorizing DAX syntax, you describe what you want in plain English, and Copilot generates the DAX code for you.",
              discussion: "Copilot for DAX (GA Oct 2025) is integrated into the DAX Query View in Power BI Desktop, allowing you to generate DAX measures using natural language. This is transformative for analysts because: DAX Generation (describe what you want: 'Create a measure that calculates year-over-year sales growth' and Copilot generates the DAX), Code Explanation (select existing DAX code and ask 'Explain this query' to understand how complex formulas work), Code Optimization (ask 'How can I optimize this measure?' for performance suggestions), Pattern Learning (Copilot learns your model structure and suggests appropriate functions based on your schema), and Error Debugging (when DAX returns errors, ask Copilot 'Why is this formula failing?' for diagnostic help). The key insight: Copilot doesn't replace DAX knowledge—you still need to understand DAX concepts to validate generated code, troubleshoot issues, and create complex measures. However, Copilot dramatically accelerates DAX development, especially for common patterns like time intelligence, percentages, and aggregations. Best practices: Start with natural language descriptions—describe what you want, not how to write DAX, Review generated code—understand what Copilot created before using it, Use Copilot to learn DAX—study the generated code to understand patterns, Iterate and refine—ask follow-up questions to adjust the measure, Test thoroughly—AI-generated code needs validation just like manual code, and Explain complex measures—use Copilot's explanation feature to document your work.",
              keyPoints: [
                "Copilot generates DAX measures from natural language descriptions",
                "Can explain existing DAX code and suggest optimizations",
                "Accelerates DAX development, especially for common patterns",
                "Doesn't replace DAX knowledge—validation and troubleshooting still required",
                "Excellent learning tool—study generated code to understand DAX patterns",
                "Use for common patterns; complex business logic may need manual coding"
              ],
              insiderTips: [
                "Start simple—describe what you want: 'Calculate total sales' not 'Use SUM function'",
                "Review all generated code—Copilot can make mistakes, especially with complex logic",
                "Use Copilot's explanation feature to learn DAX—ask 'Why did you use CALCULATE here?'",
                "Copilot understands your model—it knows your table names and relationships",
                "Iterate with follow-ups—'Add a filter for current year' to refine the measure",
                "Use for common patterns—time intelligence, percentages, aggregations work well",
                "Complex business logic may still need manual coding—Copilot isn't perfect",
                "Pro tip: Use Copilot to explain your own DAX code—great for documentation",
                "Master users validate AI-generated code—test thoroughly before production use"
              ],
              labs: [
                "Open Power BI Desktop with Copilot enabled",
                "Navigate to DAX Query View (or create a new measure)",
                "Open the Copilot pane in DAX Query View",
                "Prompt Copilot: 'Write a DAX measure for year-over-year sales growth'",
                "Review the generated DAX code",
                "Ask Copilot: 'Explain this query' to understand the code",
                "Refine the measure: 'Add a filter for only the current year'",
                "Test the generated measure in a visual",
                "Compare Copilot's code to manual DAX to understand differences",
                "Use Copilot to explain an existing complex measure"
              ]
            },
          },
          {
            id: "17-3",
            moduleNumber: 17,
            lessonNumber: 3,
            title: "Copilot for Report Building",
            description: "Using Copilot's natural language capabilities to generate full, multi-page reports from a high-level prompt.Lab: Prompt Copilot to \"Create a report page showing sales by region and category\" and refin",
            duration: 10,
            difficulty: 'advanced',
            tags: ["AI Features", "Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Using Copilot's natural language capabilities to generate full, multi-page reports from a high-level prompt represents the next evolution in report creation. Instead of manually dragging fields and configuring visuals, you describe what you want in plain English, and Copilot generates the report structure for you.",
              discussion: "Copilot for Report Building (GA Oct 2025) allows you to generate entire report pages using natural language prompts. This is transformative because: Report Generation (describe what you want: 'Create a report page showing sales by region and category with year-over-year growth' and Copilot generates the visual layout), Visual Selection (Copilot intelligently chooses appropriate chart types based on your data and requirements), Layout Optimization (Copilot arranges visuals using best practices for visual hierarchy and readability), Field Selection (Copilot selects relevant fields from your data model based on the prompt), and Iterative Refinement (ask follow-up prompts: 'Add a trend line' or 'Change the bar chart to a line chart' to refine the report). The key insight: Copilot doesn't replace report design skills—you still need to understand visualization best practices, data storytelling, and user experience. However, Copilot dramatically accelerates initial report creation, especially for standard analytical patterns. For master users, Copilot is a starting point—you generate the structure, then refine it with professional design principles. For beginners, Copilot helps overcome the blank canvas problem—getting started is often the hardest part. Best practices: Start with clear, specific prompts—'Sales dashboard by region' is better than 'Dashboard', Review and refine—Copilot generates a starting point, not a finished product, Use Copilot for standard patterns—complex custom requirements may need manual design, Combine Copilot generation with manual refinement for professional results, Test the generated report—ensure visuals accurately represent your data, and Understand Copilot's limitations—it follows common patterns, which may not fit all use cases.",
              keyPoints: [
                "Copilot generates entire report pages from natural language prompts",
                "Intelligently selects chart types and arranges visuals using best practices",
                "Accelerates initial report creation, especially for standard patterns",
                "Doesn't replace report design skills—refinement and customization still needed",
                "Excellent starting point—generate structure, then refine with professional design",
                "Use for standard patterns; complex custom requirements may need manual design"
              ],
              insiderTips: [
                "Start with specific prompts—'Sales dashboard by region with KPIs' not 'Dashboard'",
                "Review all generated visuals—Copilot makes assumptions that may not fit your needs",
                "Use Copilot for standard patterns—sales dashboards, KPI reports, trend analysis work well",
                "Refine after generation—Copilot creates structure, you add professional polish",
                "Combine Copilot generation with manual design—best of both worlds",
                "Copilot understands your model—it knows your table names and relationships",
                "Iterate with follow-ups—'Add a slicer for year' to refine the report",
                "Pro tip: Use Copilot to generate initial structure, then apply your design standards",
                "Master users use Copilot as a starting point, not a final product"
              ],
              labs: [
                "Open Power BI Desktop with Copilot enabled",
                "Navigate to a new or existing report page",
                "Open the Copilot pane",
                "Prompt Copilot: 'Create a report page showing sales by region and category'",
                "Review the generated visuals and layout",
                "Observe how Copilot selected chart types and arranged visuals",
                "Refine the report: 'Add a year-over-year growth measure'",
                "Modify visuals: 'Change the bar chart to a stacked column chart'",
                "Add elements: 'Add slicers for year and region'",
                "Compare Copilot's design to your own manual designs to understand patterns"
              ]
            },
          },
          {
            id: "17-4",
            moduleNumber: 17,
            lessonNumber: 4,
            title: "Fabric Integration: The OneLake Shortcut",
            description: "Connecting a Power BI semantic model directly to data in a Fabric Lakehouse using a \"OneLake shortcut,\" eliminating data movement and enabling a single source of truth.Lab: In a Fabric Lakehouse, crea",
            duration: 30,
            difficulty: 'advanced',
            tags: ["Visualizations", "AI Features", "Security", "Performance", "Data Modeling", "Microsoft Fabric", "DAX", "Time Intelligence"],
            topic: 'DAX',
            content: {
              concept: "Connecting a Power BI semantic model directly to data in a Fabric Lakehouse using a \"OneLake shortcut,\" eliminating data movement and enabling a single source of truth.Lab: In a Fabric Lakehouse, create a shortcut to an external data source. Then, connect to this Lakehouse from Power BI Desktop and build a report.Capstone Project 3: Advanced-Level Portfolio ProjectProject Brief: 55Task: This is a self-directed, portfolio-worthy project where the student must create an end-to-end solution from scratch.Domain Choice: The student can choose a complex domain, such as Healthcare Claims Fraud 55, Global Supply Chain Analysis 55, HR Analytics 190, Sales & Marketing 187, or Finance Analytics.190Requirements (Must Include):Complex Data Model: Must source data from multiple, messy files and build an optimized Star Schema.Advanced DAX: Must include Time Intelligence measures and at least one other complex pattern (e.g., Calculation Groups 167 or complex CALCULATE filters 95).Security: Must implement Dynamic Row-Level Security (RLS).155Storytelling: Must use Bookmarks, Drill-through, or Custom Tooltips to create a guided narrative.113Performance: The student must use the Performance Analyzer 144 to identify one performance bottleneck and document the steps taken to fix it (e.g., \"My bar chart was slow, Perf Analyzer showed high DAX query time, I fixed it by...\").AI/Fabric Integration: The report must be connected to a Fabric Lakehouse and include a Copilot-generated narrative summary explaining the key insights.Deliverable: A published Power BI report (or App) and a 5-minute video presentation where the student \"walks through\" their report, explaining the insights, the narrative, and the advanced technical features (like RLS and Copilot) they implemented.Learning Outcome: The student has proven they are a \"Master.\" They can successfully manage a complex BI project from ingestion to deployment, implement enterprise-grade security, tune for performance, and—most importantly—communicate the value of their work",
            },
          },
        ],
      },
      {
        id: "module-18",
        title: "Certification & Career",
        description: "Advanced and enterprise Power BI topics",
        moduleNumber: 18,
        lessons: [
          {
            id: "18-1",
            moduleNumber: 18,
            lessonNumber: 1,
            title: "Certification: The PL-300 Exam",
            description: "The PL-300 is the official \"Microsoft Power BI Data Analyst\" certification",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "Visualizations", "Power Query", "Data Modeling"],
            topic: 'DAX',
            content: {
              concept: "The PL-300 is the official \"Microsoft Power BI Data Analyst\" certification",
              discussion: "This entire course has been structured to align with the key domains of the PL-300 exam: Prepare data (Power Query), Model data (Star Schema, DAX), Visualize data (Reports, Storytelling), and Deploy and maintain assets (Service, Governance).191PL-300 Skills Mapping:PL-300 Section%Curriculum CoveragePrepare Data25-30Part 1 (",
            },
          },
          {
            id: "18-2",
            moduleNumber: 18,
            lessonNumber: 2,
            title: "Learning Paths by Role",
            description: "\"Mastery\" can take many forms, and the next steps depend on career goals",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "Power Query", "Microsoft Fabric"],
            topic: 'DAX',
            content: {
              concept: "\"Mastery\" can take many forms, and the next steps depend on career goals",
              discussion: "How to apply these skills in specialized roles:BI Analyst: Double-down on DAX, Modeling, and Data Storytelling.190Data Engineer: Focus on advanced Power Query (M), Dataflows Gen2, and Microsoft Fabric.176BI Developer: Specialize in Power BI Embedded, CI/CD, and Governance",
            },
          },
          {
            id: "18-3",
            moduleNumber: 18,
            lessonNumber: 3,
            title: "Staying Current (The Power BI Monthly Update)",
            description: "Power BI changes every single month",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Power BI changes every single month with new features, improvements, and capabilities. Mastery is not a final destination; it is a process of continuous learning. The most important skill for Power BI professionals is \"learning how to learn\" and staying current with monthly updates.",
              discussion: "Mastery is not a final destination; it is a process of continuous learning. The most important skill is \"learning how to learn.\" Power BI's monthly update cycle means new features are released constantly—what you learned last month may be outdated today. Staying current is essential for professional success. Critical resources for staying current: The official Microsoft Power BI Blog (published monthly, covers all new features with detailed explanations and examples), Key community YouTube channels (experts share tutorials on new features, advanced techniques, and real-world use cases), Community forums (Power BI Community, Reddit r/PowerBI—ask questions, learn from others, share knowledge), Microsoft Learn (structured learning paths updated with new features), and Power BI monthly release notes (comprehensive list of all changes, organized by feature area). Best practices for staying current: Block time monthly—schedule 30-60 minutes each month to review the latest updates, Enable preview features—test new capabilities before they're generally available, Follow key influencers—subscribe to YouTube channels and blogs of Power BI experts, Participate in communities—ask questions, share knowledge, learn from others, Build a learning habit—make staying current part of your professional routine, and Prioritize impactful features—not every new feature matters to your work, focus on what's relevant. The key insight: Mastery in Power BI isn't about knowing everything—it's about staying current with relevant features and continuously improving. The professionals who succeed long-term are those who embrace continuous learning. Learning how to learn is more valuable than memorizing features—features change, but the ability to adapt and learn stays valuable.",
              keyPoints: [
                "Power BI updates monthly—new features released constantly",
                "Mastery requires continuous learning, not one-time knowledge acquisition",
                "Learning how to learn is the most valuable skill for Power BI professionals",
                "Stay current through blogs, YouTube, forums, and Microsoft Learn",
                "Build a monthly learning habit—block time to review updates",
                "Focus on features relevant to your work—not every feature matters to everyone"
              ],
              insiderTips: [
                "Subscribe to the Power BI Blog—it's published monthly with detailed feature explanations",
                "Follow 2-3 key YouTube channels—experts share tutorials on new features",
                "Join Power BI Community forum—ask questions, learn from others, share knowledge",
                "Enable preview features—test new capabilities before GA to stay ahead",
                "Block monthly time—30-60 minutes each month to review updates",
                "Prioritize impactful features—focus on what's relevant to your work, not everything",
                "Pro tip: Create a personal 'Power BI Update Review' checklist—track what you've learned",
                "Master users understand that staying current is a professional responsibility",
                "Continuous learning separates professionals from beginners—embrace the monthly cycle"
              ]
            },
          },
          {
            id: "18-4",
            moduleNumber: 18,
            lessonNumber: 4,
            title: "Downloadable Resources and Cheat-Sheets",
            description: "Providing students with downloadable datasets, solution files (.pbix), and quick-reference \"cheat sheets.\"",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "Visualizations", "Power Query"],
            topic: 'DAX',
            content: {
              concept: "Providing students with downloadable datasets, solution files (.pbix), and quick-reference \"cheat sheets\" supports continued learning and on-the-job application. These resources serve as references that professionals return to throughout their Power BI careers, making them invaluable for long-term success.",
              discussion: "This includes a DAX formula reference (comprehensive guide to all DAX functions organized by category—Aggregation, Filter, Time Intelligence, etc.—with syntax examples and use cases. Essential for quick lookups when writing measures), a Power Query M tips sheet (common M patterns, functions, and best practices. Helps when writing custom M code or troubleshooting transformations), and a visualization design checklist (best practices for report design, chart selection, color usage, and visual hierarchy. Use before publishing reports to ensure professional quality). Additional resources include: Sample datasets (practice data for hands-on learning—Superstore Sales, AdventureWorks, etc.), Solution files (.pbix files showing completed exercises for comparison and learning), DAX pattern library (common DAX patterns with explanations—running totals, percent of total, time intelligence, etc.), Power Query template library (reusable M code patterns for common transformations), and Video tutorial library (comprehensive video walkthroughs of all course lessons). The key insight: These resources extend learning beyond the course. Professional Power BI users don't memorize everything—they reference cheat sheets and examples regularly. Building a personal resource library is a professional habit. Best practices: Download all resources at course completion, Organize resources in a personal folder structure for easy access, Reference cheat sheets regularly—don't try to memorize everything, Update resources as Power BI evolves, Share resources with team members to standardize practices, and Build your own resource collection—add templates and patterns you discover. These resources transform the course from a one-time learning experience into an ongoing professional development tool.",
              keyPoints: [
                "Downloadable resources support continued learning beyond the course",
                "DAX formula reference provides quick lookups for function syntax and examples",
                "Power Query M tips sheet helps with custom transformations and troubleshooting",
                "Visualization checklist ensures professional report quality",
                "Sample datasets and solution files enable hands-on practice",
                "Resources serve as ongoing references throughout your Power BI career"
              ],
              insiderTips: [
                "Download all resources at course completion—create a personal Power BI resource library",
                "Organize resources in folders—DAX, Power Query, Design, etc.—for easy access",
                "Reference cheat sheets regularly—don't try to memorize everything",
                "DAX formula reference is your best friend—even experts use it daily",
                "Power Query M tips sheet saves time when writing custom transformations",
                "Use visualization checklist before publishing—catch design issues before deployment",
                "Pro tip: Build your own resource collection—add patterns and templates you discover",
                "Master users maintain personal resource libraries—professional development is ongoing",
                "Share resources with your team—standardize practices and accelerate learning"
              ]
            },
          },
          {
            id: "18-5",
            moduleNumber: 18,
            lessonNumber: 5,
            title: "Final Deliverable: Your LinkedIn Portfolio",
            description: "How to present the three capstone projects and your PL-300 certification badge on your professional profile to attract employers",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "How to present the three capstone projects and your PL-300 certification badge on your professional profile to attract employers is the final step in transforming your learning into career advancement. A well-crafted LinkedIn portfolio demonstrates your Power BI expertise and differentiates you from other candidates.",
              discussion: "Your LinkedIn profile is your digital business card—it's often the first impression employers have of you. Presenting your Power BI work professionally can open doors to opportunities. The three capstone projects demonstrate your progression: Capstone 1 (Beginner) shows foundational skills—data connection, transformation, basic visualization. Capstone 2 (Analyst) demonstrates intermediate expertise—data modeling, DAX, advanced design. Capstone 3 (Master) proves enterprise-level competency—complex modeling, security, performance optimization, AI integration. Presenting your work effectively: Project Descriptions (write clear, concise descriptions highlighting business impact—'Built sales analytics dashboard reducing report generation time by 80%' not just 'Created dashboard'), Screenshots (include high-quality screenshots of your reports—showcase professional design and visual appeal), Links (provide links to published reports or portfolio website if possible—demonstrate real deployment), Technical Details (mention key skills demonstrated—'Implemented star schema data model' or 'Created DAX measures with time intelligence'), Business Impact (emphasize business value—'Enabled executives to make data-driven decisions' not just technical achievements), and PL-300 Badge (add your certification badge prominently—shows commitment to professional development). LinkedIn best practices: Add projects to your LinkedIn profile's Projects section, Write compelling project descriptions emphasizing business value, Include relevant skills (Power BI, DAX, Data Modeling, etc.) in your Skills section, Request recommendations from course instructors or peers, Share your capstone work in LinkedIn posts to showcase your learning, Engage with Power BI community content to demonstrate ongoing learning, and Join Power BI professional groups to network and stay current. The key insight: Your portfolio is a marketing tool—it demonstrates not just what you can do, but how you think and communicate. Professional presentation matters as much as technical skills. Master users understand that career advancement requires both technical competency and professional presentation—your portfolio bridges that gap.",
              keyPoints: [
                "LinkedIn portfolio demonstrates Power BI expertise to potential employers",
                "Three capstone projects show progression from Beginner to Analyst to Master",
                "Present work with clear descriptions, screenshots, and business impact",
                "PL-300 certification badge validates your skills with industry-recognized credential",
                "Professional presentation matters—treat your portfolio as a marketing tool",
                "Your portfolio bridges technical competency and career advancement"
              ],
              insiderTips: [
                "Write project descriptions emphasizing business impact, not just technical details",
                "Include high-quality screenshots—visual appeal matters to non-technical viewers",
                "Add PL-300 badge prominently—certifications differentiate you from other candidates",
                "Use relevant keywords in descriptions—Power BI, DAX, Data Modeling—for recruiters to find you",
                "Share your capstone work in LinkedIn posts—showcase learning and engage community",
                "Request recommendations—peer endorsements add credibility",
                "Join Power BI professional groups—network and stay current",
                "Pro tip: Create a personal portfolio website showcasing your work with detailed case studies",
                "Master users understand career advancement requires both skills and presentation—invest in both"
              ]
            },
          },
        ],
      },
    ],
  },
]

export function getAllLessons(): Lesson[] {
  const lessons: Lesson[] = []
  courseData.forEach(part => {
    part.modules.forEach(module => {
      lessons.push(...module.lessons)
    })
  })
  return lessons
}

export function getAllModules(): Module[] {
  const modules: Module[] = []
  courseData.forEach(part => {
    modules.push(...part.modules)
  })
  return modules
}

export function getLessonById(id: string): Lesson | undefined {
  const lessons = getAllLessons()
  return lessons.find(lesson => lesson.id === id)
}

export function getLessonByNumber(moduleNumber: number, lessonNumber: number): Lesson | undefined {
  return getLessonById(`${moduleNumber}-${lessonNumber}`)
}

export function getModuleForLesson(lessonId: string): { module: Module, part: Part } | undefined {
  for (const part of courseData) {
    for (const module of part.modules) {
      const found = module.lessons.find(lesson => lesson.id === lessonId)
      if (found) {
        return { module, part }
      }
    }
  }
  return undefined
}

export function getLessonPositionInModule(lessonId: string): { lessonIndex: number, totalLessons: number } | undefined {
  const result = getModuleForLesson(lessonId)
  if (!result) return undefined
  
  const { module } = result
  const index = module.lessons.findIndex(lesson => lesson.id === lessonId)
  return index >= 0 ? { lessonIndex: index + 1, totalLessons: module.lessons.length } : undefined
}

export function getNextLesson(lessonId: string): Lesson | undefined {
  const allLessons = getAllLessons()
  const currentIndex = allLessons.findIndex(lesson => lesson.id === lessonId)
  
  if (currentIndex < 0 || currentIndex >= allLessons.length - 1) {
    return undefined
  }
  
  return allLessons[currentIndex + 1]
}

export function getPreviousLesson(lessonId: string): Lesson | undefined {
  const allLessons = getAllLessons()
  const currentIndex = allLessons.findIndex(lesson => lesson.id === lessonId)
  
  if (currentIndex <= 0) {
    return undefined
  }
  
  return allLessons[currentIndex - 1]
}
