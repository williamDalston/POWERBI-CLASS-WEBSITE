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
            description: "Business Intelligence (BI) is the comprehensive process of transforming raw data into coherent, visually immersive, and interactive insights to drive informed business decisions.8 This stands in contr",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-0-1",
            videoChapters: [
              { title: "Introduction: What is BI?", timestamp: 0 },
              { title: "Understanding Business Intelligence", timestamp: 180 },
              { title: "Limitations of Traditional Spreadsheets", timestamp: 480 },
              { title: "Modern BI Platforms and Solutions", timestamp: 780 },
              { title: "Why Power BI Now?", timestamp: 1080 },
            ],
            content: {
              concept: "Business Intelligence (BI) is the comprehensive process of transforming raw data into coherent, visually immersive, and interactive insights to drive informed business decisions. This stands in contrast to traditional, static data analysis often performed in spreadsheets. BI represents a paradigm shift from reactive reporting to proactive data-driven decision making, enabling organizations to identify trends, patterns, and opportunities in real-time.",
              discussion: "Traditional spreadsheets like Microsoft Excel, while familiar and powerful for small datasets, have significant limitations when faced with modern data challenges. They often struggle with large data volumes (Excel slows down with >100K rows), require time-consuming manual refresh processes, and produce static visualizations that are difficult to collaborate on. Modern BI platforms like Power BI are designed to solve these specific problems through scalable data handling (millions of rows), automated data refresh (scheduled updates), and the creation of dynamic, interactive reports that respond instantly to user selections. The key distinction is that BI tools treat data as a living, breathing asset rather than a static snapshot, enabling stakeholders to explore and discover insights independently rather than waiting for custom reports from IT departments.",
              keyPoints: [
                "BI transforms static spreadsheets into dynamic, interactive analytics platforms",
                "Modern BI tools handle millions of rows vs. Excel's limitation to hundreds of thousands",
                "Automated refresh schedules eliminate manual data updates and reduce errors",
                "Interactive dashboards enable self-service analytics, reducing dependency on IT",
                "BI platforms are designed for collaboration and sharing across teams and departments"
              ],
              insiderTips: [
                "Think of BI as moving from 'snapshots' (Excel reports) to 'live feeds' (Power BI dashboards)",
                "The ROI of BI isn't just in faster reports - it's in empowering business users to ask their own questions",
                "If you find yourself constantly refreshing Excel files or emailing reports, you need BI",
                "Modern organizations expect real-time insights - static reports are becoming obsolete",
                "BI platforms like Power BI integrate directly with data sources, eliminating the 'download, transform, upload' cycle"
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-0-2",
            videoChapters: [
              { title: "Course Introduction", timestamp: 0 },
              { title: "Three-Part Learning Path", timestamp: 180 },
              { title: "Case Study Overview", timestamp: 480 },
              { title: "Target Audience", timestamp: 780 },
              { title: "Learning Outcomes", timestamp: 1080 },
            ],
            content: {
              concept: "This curriculum follows a three-part structure, guiding a student from \"Beginner\" to \"Analyst\" and finally to \"Master.\" A \"Case Study Scenario\" (e.g., analyzing sales for a retail company) will be used throughout the course to provide real-world context. This progressive structure ensures you build skills systematically, with each part building upon the previous knowledge while introducing increasingly sophisticated concepts and techniques.",
              discussion: "The course is designed for any professional who works with data, regardless of their current title. It is particularly impactful for \"Excel power users\" who are seeking to advance their analytical capabilities beyond the constraints of spreadsheets. Excel expertise provides an excellent foundation since Power BI shares many concepts (Power Query, DAX formulas) with modern Excel. It is also the ideal learning path for aspiring Data Analysts, Business Analysts, and IT professionals who need to leverage data for decision-making. The course structure accommodates different learning styles with hands-on labs, video explanations, and real-world case studies. By the end of Part 1 (Beginner), you'll build your first complete report. By Part 2 (Analyst), you'll master data modeling and DAX. By Part 3 (Master), you'll handle enterprise deployments and administration.",
              keyPoints: [
                "Three progressive parts: Beginner → Analyst → Master, each building on the previous",
                "Continuous case study approach provides real-world context throughout the entire course",
                "Designed for Excel power users, data analysts, business analysts, and IT professionals",
                "Hands-on labs ensure practical application of every concept taught",
                "Progressive complexity: Start simple, add sophistication as you advance through parts"
              ],
              insiderTips: [
                "Don't skip lessons even if they seem basic - foundational concepts reappear in advanced topics",
                "The case study approach means you're building real skills, not just learning abstract concepts",
                "Excel users have a head start - leverage your existing formula knowledge when learning DAX",
                "Each part ends with a capstone project to consolidate learning and build portfolio pieces",
                "The progression from Beginner to Master mirrors real career advancement in data analytics"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-0-3",
            videoChapters: [
              { title: "Prerequisites Overview", timestamp: 0 },
              { title: "Required Skills", timestamp: 180 },
              { title: "Excel Skills as Accelerators", timestamp: 480 },
              { title: "Helpful Background Knowledge", timestamp: 780 },
              { title: "Getting Started Without Prerequisites", timestamp: 1080 },
            ],
            content: {
              concept: "While there are no formal prerequisites to begin, a baseline of data literacy is highly beneficial. This course welcomes absolute beginners, but students with some data experience will progress faster. Data literacy here means understanding that data exists in structured formats (tables with rows and columns), recognizing common data types (text, numbers, dates), and having basic computer skills (file navigation, installing software).",
              discussion: "Certain existing skills can be considered \"accelerators\" for the learning process. A strong familiarity with Microsoft Excel, especially functions (like SUM, IF, VLOOKUP), formulas, and Pivot Tables, provides a significant advantage. This is because core components of Power BI, such as Power Query and the DAX formula language, are shared with modern Excel. Power Query in Excel is nearly identical to Power Query in Power BI, making it familiar territory. DAX formulas have similar syntax to Excel formulas, so Excel users can leverage existing knowledge. Other helpful, though not required, concepts include a basic understanding of databases (e.g., the concept of a table, relationships between tables), data visualization principles (e.g., when to use a bar chart vs. a line chart), and basic statistics (mean, median, totals). However, even without these skills, dedicated students can succeed by investing extra time in the foundational lessons.",
              keyPoints: [
                "No formal prerequisites required - absolute beginners are welcome",
                "Excel experience significantly accelerates learning, especially with formulas and Pivot Tables",
                "Power Query knowledge from Excel transfers directly to Power BI",
                "Basic data literacy (understanding tables, rows, columns) helps but can be learned",
                "Dedicated practice can overcome lack of prior experience"
              ],
              insiderTips: [
                "If you're new to Excel, consider a quick Excel basics course first - it will pay dividends",
                "Don't let lack of prerequisites stop you - the course teaches everything you need",
                "Excel power users often progress 2-3x faster through early modules",
                "Understanding relational databases (table relationships) helps in Part 2 but isn't required for Part 1",
                "The hardest part is often getting started - once you complete your first report, momentum builds quickly",
                "If you feel overwhelmed, focus on completing Part 1 first before worrying about advanced topics"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-0-4",
            videoChapters: [
              { title: "BI Landscape Overview", timestamp: 0 },
              { title: "Excel vs. Tableau vs. Power BI", timestamp: 120 },
              { title: "Feature Comparison", timestamp: 240 },
              { title: "Power BI's Competitive Advantages", timestamp: 360 },
              { title: "Choosing the Right Tool", timestamp: 480 },
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-1-1",
            videoChapters: [
              { title: "Introduction to Power BI Ecosystem", timestamp: 0 },
              { title: "Power BI Desktop - The Authoring Tool", timestamp: 180 },
              { title: "Power BI Service - Collaboration Hub", timestamp: 480 },
              { title: "Power BI Mobile - Consumption Tool", timestamp: 780 },
              { title: "How They Work Together", timestamp: 1080 },
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-1-2",
            videoChapters: [
              { title: "Installation Overview", timestamp: 0 },
              { title: "Microsoft Store Installation (Recommended)", timestamp: 180 },
              { title: "Direct Download Installation", timestamp: 480 },
              { title: "Mac and ARM Considerations", timestamp: 780 },
              { title: "Verifying Installation", timestamp: 1080 },
            ],
            content: {
              concept: "Installing the free Power BI Desktop application is the first step in your Power BI journey. Power BI Desktop is completely free and can be installed alongside Excel or other Office applications without conflicts. The installation process is straightforward, but choosing the right installation method can impact your workflow and update experience.",
              discussion: "There are two primary installation methods: Microsoft Store (Recommended): This version updates automatically in the background, ensuring the user always has the latest features without manual intervention. This is the best choice for individual learners and small teams. Direct Download (Executable): This version requires manual updates but offers more control for enterprise environments where IT departments need to manage software versions. Note for Mac Users: Power BI Desktop is a Windows-only application. Mac users must utilize a virtual machine environment, such as Parallels or VMware Fusion, to run a Windows instance. Alternatively, Mac users can use Power BI Service (browser-based) for consuming reports, though report authoring requires Windows. Note for ARM Users (New in 2025): As of September/October 2025, Power BI Desktop is now supported to run natively on ARM-based Windows PCs (like Surface Pro X), eliminating the need for emulation and improving performance.",
              labs: [
                "Choose your installation method: Microsoft Store (recommended) or Direct Download",
                "If using Microsoft Store: Open Microsoft Store, search for 'Power BI Desktop', and click Install",
                "If using Direct Download: Visit powerbi.microsoft.com/desktop and download the installer",
                "Follow the installation wizard (accept license terms, choose installation location)",
                "Launch Power BI Desktop for the first time and accept the license agreement",
                "Verify installation: You should see the Power BI Desktop welcome screen",
                "Check version number: Help > About Power BI Desktop to see your current version"
              ],
              keyPoints: [
                "Power BI Desktop is completely free - no license required for individual use",
                "Microsoft Store version auto-updates, keeping you current with latest features",
                "Direct Download offers more control but requires manual updates",
                "Mac users need a Windows virtual machine (Parallels, VMware Fusion) to run Desktop",
                "ARM support (2025) enables native performance on ARM-based Windows devices"
              ],
              insiderTips: [
                "Always install via Microsoft Store if possible - automatic updates are worth the slight delay",
                "Set aside 20-30 minutes for first-time installation and setup",
                "If installation fails, check Windows Update first - some updates are prerequisites",
                "Mac users: Parallels is the most popular VM solution, but VMware Fusion works too",
                "For enterprise deployments, IT often prefers Direct Download for version control",
                "Bookmark the Power BI Desktop download page - you'll need it for manual updates if not using Store",
                "First launch may take longer - Power BI Desktop initializes settings and creates default folders"
              ]
            },
          },
          {
            id: "1-3",
            moduleNumber: 1,
            lessonNumber: 3,
            title: "Post-Install: Enabling Preview Features",
            description: "Power BI is updated on a monthly basis. Many of the most powerful new features are first released in \"preview\" and must be manually enabled by the user",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-1-3",
            videoChapters: [
              { title: "Understanding Preview Features", timestamp: 0 },
              { title: "Accessing Options and Settings", timestamp: 180 },
              { title: "Key Preview Features to Enable", timestamp: 480 },
              { title: "Model Explorer and On-Object Interaction", timestamp: 780 },
              { title: "Staying Current with Updates", timestamp: 1080 },
            ],
            content: {
              concept: "Power BI is updated on a monthly basis. Many of the most powerful new features are first released in \"preview\" and must be manually enabled by the user. Preview features allow Microsoft to test new capabilities with real users before general release. Enabling preview features gives you early access to cutting-edge tools and improvements, though they may have occasional bugs or behavior changes before final release.",
              discussion: "A critical first step for any new user is to navigate to File > Options and settings > Options > Preview features. Enabling these features (e.g., the new Model Explorer or On-object interaction) not only provides access to the latest tools but also reinforces a core concept: the tool is in a constant state of evolution, and staying current is essential. Preview features are Microsoft's way of beta-testing with the Power BI community. Once features are stable and widely adopted, they graduate to general availability (GA). Some preview features, like Model Explorer (2025), fundamentally change how you work with data models. Model Explorer provides a tree-view of your model, making it easier to navigate complex models with many tables and relationships. On-object interaction allows direct formatting of visuals without opening format panes. Preview features are generally stable but may have minor quirks - they're recommended for learning and development but use caution in production reports.",
              keyPoints: [
                "Power BI receives monthly updates with new features and improvements",
                "Preview features must be manually enabled in Options > Preview features",
                "Preview features give early access to cutting-edge tools before general release",
                "Model Explorer and On-object interaction are game-changing preview features (2025)",
                "Staying current with preview features helps you leverage the latest capabilities"
              ],
              insiderTips: [
                "Always check Preview features after each Power BI Desktop update - new previews appear monthly",
                "Enable all preview features for learning, but be selective in production reports",
                "Preview features that graduate to GA often become essential - get familiar early",
                "Model Explorer (2025) is a must-enable - it dramatically improves model navigation",
                "On-object interaction speeds up report formatting - enable it to work faster",
                "If a preview feature causes issues, you can always disable it in Options",
                "Follow Power BI community blogs to learn about new preview features as they're announced",
                "Preview features may have different UIs in final release - be prepared for changes"
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-1-4",
            videoChapters: [
              { title: "Interface Overview", timestamp: 0 },
              { title: "Report View (Canvas)", timestamp: 120 },
              { title: "Data View", timestamp: 240 },
              { title: "Model View", timestamp: 360 },
              { title: "Navigating Between Views", timestamp: 480 },
            ],
            content: {
              concept: "Understanding the three main \"views\" within Power BI Desktop is key to navigating the workflow. Power BI Desktop organizes functionality into three distinct views, each optimized for a specific part of the BI development process. These views are accessible via icons on the left sidebar and represent the three fundamental stages: data transformation, data modeling, and report creation.",
              discussion: "The three views are Report View (the canvas), Data View (table inspection), and Model View (relationship management). Report View is where you spend most of your time - it's the visual design canvas where you build charts, graphs, and interactive dashboards. This is analogous to PowerPoint's slide editor. Data View lets you inspect the actual data in your tables after it's loaded - useful for verifying transformations worked correctly. You can see row values, check data types, and spot data quality issues. Think of it as a spreadsheet view of your tables. Model View shows the relational structure of your data model - tables as boxes connected by relationship lines. This is where you create and manage relationships between tables, essential for star schema design (covered in Module 5). The view switcher on the left sidebar lets you move between these views instantly. Understanding when to use each view dramatically improves your workflow efficiency.",
              keyPoints: [
                "Three main views: Report View (visuals), Data View (inspect data), Model View (relationships)",
                "Report View is where you spend 80% of your time building charts and dashboards",
                "Data View lets you inspect table data after loading to verify transformations",
                "Model View shows the relational model structure - critical for managing relationships",
                "Each view is optimized for its specific purpose in the BI workflow"
              ],
              insiderTips: [
                "Use keyboard shortcuts: Ctrl+R for Report View, Ctrl+D for Model View, Ctrl+T for Data View",
                "Report View has a visual selection pane - use it to select and format multiple visuals at once",
                "Data View is great for spot-checking data but don't try to edit data here - use Power Query",
                "Model View's auto-layout can get messy - manually arrange tables for clarity in complex models",
                "The ribbon changes based on which view you're in - learn which tools appear in each view",
                "Right-click in any view for context menus with view-specific options",
                "You can't delete data in Data View - it's read-only for inspection purposes",
                "Model View relationship lines show cardinality - one-to-many relationships show 1 and * symbols"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-2-1",
            videoChapters: [
              { title: "Introduction to Get Data", timestamp: 0 },
              { title: "Exploring Data Source Options", timestamp: 120 },
              { title: "Connector Categories", timestamp: 240 },
              { title: "Getting Started with Connections", timestamp: 360 },
            ],
            content: {
              concept: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services. Get Data opens the Power BI data connector ecosystem, which supports over 100 different data sources including Excel, SQL Server, SharePoint, Salesforce, Google Analytics, and many more. Every Power BI report begins with Get Data - it's your gateway to connecting your data sources to Power BI's analytical engine.",
              discussion: "The Get Data experience in Power BI Desktop is accessed via the Home ribbon or by clicking \"Get data\" when creating a new report. It presents a categorized list of data connectors organized by type: File (Excel, CSV, PDF, JSON), Database (SQL Server, Oracle, MySQL, PostgreSQL), Power Platform (Power BI datasets, Power Apps), Online Services (SharePoint, Salesforce, Dynamics 365), and many more. Each connector is optimized for its specific data source, handling authentication, data type conversion, and query optimization automatically. The connector ecosystem is constantly expanding - new connectors are added monthly, and existing connectors are improved based on user feedback. Once you select a connector, you'll proceed through a connection wizard that guides you through authentication, data selection, and loading options. This lesson introduces you to the vast array of data sources Power BI can connect to, setting the stage for hands-on labs with specific connectors in subsequent lessons.",
              keyPoints: [
                "Get Data is the starting point for all Power BI projects - located on the Home ribbon",
                "Power BI supports 100+ data connectors across files, databases, and cloud services",
                "Connectors are categorized by type: File, Database, Online Services, Power Platform",
                "Each connector handles authentication, data types, and query optimization automatically",
                "The connector ecosystem expands monthly with new connectors and improvements"
              ],
              insiderTips: [
                "Bookmark commonly used connectors - File and Database categories are used most frequently",
                "Use search in Get Data dialog to quickly find connectors - it searches by name and description",
                "Some connectors require authentication - set up credentials in Data source settings for reuse",
                "Premium connectors (marked with * or lock icon) require Power BI Premium or Pro license",
                "If you don't see a connector you need, check the Microsoft AppSource for community connectors",
                "DirectQuery connectors show a 'DirectQuery' badge - these query live data vs. importing",
                "Most popular connectors: Excel, SQL Server, CSV files, SharePoint lists, Power BI datasets",
                "New connectors often appear in preview first - enable preview features to access them"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-2-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Connecting to Excel Files", timestamp: 120 },
              { title: "Connecting to CSV Files", timestamp: 240 },
              { title: "Working with PDF Files", timestamp: 360 },
              { title: "Lab Summary", timestamp: 480 },
            ],
            content: {
              concept: "Connecting to the most common flat-file data sources is where most beginners start their Power BI journey. Flat files are standalone data files (not databases) that contain structured data in rows and columns. The three most common flat-file formats are Excel workbooks, CSV files, and PDF documents. Each format has specific connection considerations and best practices.",
              discussion: "This lab will walk through connecting to: Excel Workbooks (.xlsx): Power BI can connect to Excel tables and worksheets. Power BI recognizes Excel Tables (created via Insert > Table) as named data sources, making them easy to select. If your Excel file uses raw worksheets without tables, Power BI can still read the data but you'll need to select specific sheets. This lesson will also cover best practices for structuring Excel data (e.g., using proper Excel Tables, avoiding merged cells, ensuring first row contains headers) to make it ready for Power BI. Text/CSV Files (.csv): A ubiquitous format for data export from virtually any system. CSV files are simple text files with comma-separated values. Power BI automatically detects delimiters (commas, tabs, semicolons) and data types. Large CSV files may take longer to preview and load. PDF: Power BI can extract data from tables found within PDF documents. This is a newer capability that uses AI to identify and extract tabular data from PDFs. The extraction quality depends on PDF formatting - well-structured PDF tables work best. After connecting to any flat file, you'll see the Navigator dialog where you can preview data before loading or transforming.",
              labs: [
                "Click Get Data > File > Excel, navigate to a sample Excel workbook",
                "In Navigator dialog, select the table or worksheet you want to connect to",
                "Click 'Transform Data' (best practice) or 'Load' (if data is already clean)",
                "Repeat for CSV: Get Data > File > Text/CSV, select a .csv file",
                "Preview the CSV data in Navigator - verify delimiter detection is correct",
                "Try PDF: Get Data > File > PDF (if available), select a PDF with tables",
                "Preview extracted PDF tables - check if extraction captured data correctly",
                "Practice with 'Transform Data' option - opens Power Query Editor for cleaning"
              ],
              keyPoints: [
                "Excel workbooks: Use Excel Tables for easiest connection, or select specific worksheets",
                "CSV files: Automatic delimiter detection, handle large files carefully",
                "PDF extraction: Uses AI to find tables, works best with well-formatted PDFs",
                "Always click 'Transform Data' first to review data before loading",
                "Navigator dialog lets you preview data and select what to load"
              ],
              insiderTips: [
                "Excel best practice: Convert your data to an Excel Table (Insert > Table) for cleaner connections",
                "Avoid merged cells in Excel - Power BI will struggle with them",
                "CSV files over 100MB may be slow - consider splitting or using database connection instead",
                "PDF extraction is imperfect - verify extracted data matches source PDF",
                "Use 'Edit' in Navigator to modify the connection if you selected wrong table",
                "Check 'Select multiple items' in Navigator if you need multiple tables from one file",
                "Excel connections remember file paths - update paths if you move files",
                "For production reports, consider replacing file connections with database connections for better performance"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-2-3",
            videoChapters: [
              { title: "Introduction to Database Connections", timestamp: 0 },
              { title: "SQL Server Connection", timestamp: 120 },
              { title: "Server and Database Names", timestamp: 240 },
              { title: "Authentication Modes", timestamp: 360 },
            ],
            content: {
              concept: "Connecting to relational databases, which form the backbone of most enterprise data systems, is essential for working with production data. While flat files are great for learning and small datasets, enterprise data typically lives in databases like SQL Server, Oracle, MySQL, or PostgreSQL. Database connections enable you to query live or recent data, handle large datasets efficiently, and leverage existing IT infrastructure.",
              discussion: "The primary example will be SQL Server, which is the most common database in Microsoft shops. This lesson will explain the concepts of a Server Name (the network address of the database server) and Database Name (the specific database within that server), as well as the different authentication modes (e.g., Windows authentication vs. SQL Server credentials). Windows authentication uses your Windows login credentials, which is convenient but requires your Windows account to have database access. SQL Server authentication requires a username and password specific to the database. Connection strings typically look like: Server=MyServer\\Instance;Database=MyDatabase. After establishing a connection, you'll see a Navigator-like interface showing tables and views available in the database. You can select specific tables/views to load or write custom SQL queries. For large databases, you typically want to connect to pre-built views or write SQL queries that filter and aggregate data before loading, rather than loading entire tables. This lesson introduces the concept of DirectQuery vs. Import mode, which is covered in detail in lesson 2-5.",
              keyPoints: [
                "Relational databases store most enterprise data - SQL Server is the most common example",
                "Connection requires Server Name (address) and Database Name (specific database)",
                "Authentication options: Windows (uses your Windows login) or SQL Server (username/password)",
                "Database connections enable querying large datasets efficiently",
                "You can select specific tables/views or write custom SQL queries"
              ],
              insiderTips: [
                "Get connection details from your DBA (Database Administrator) - don't guess server names",
                "Windows authentication is simpler but requires database access permissions",
                "Save credentials in Data source settings for reuse across multiple reports",
                "For large tables, write SQL queries to filter/aggregate before loading (better performance)",
                "Test connection before selecting tables - connection errors are easier to debug separately",
                "Database views are often better than base tables - they're pre-filtered and aggregated",
                "Use parameterized queries for dynamic date ranges (e.g., last 30 days)",
                "If connection is slow, check network latency and database server load",
                "Enterprise databases often require VPN connection or whitelisted IP addresses"
              ]
            },
          },
          {
            id: "2-4",
            moduleNumber: 2,
            lessonNumber: 4,
            title: "Connecting to Web and Cloud Services",
            description: "Acquiring data directly from online sources",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Power BI Service',
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-2-4",
            videoChapters: [
              { title: "Web Data Connector Overview", timestamp: 0 },
              { title: "From Web Connector Demo", timestamp: 120 },
              { title: "SharePoint Connectors", timestamp: 240 },
              { title: "Azure Cloud Services", timestamp: 360 },
            ],
            content: {
              concept: "Acquiring data directly from online sources opens up a world of external data beyond your local files and databases. Power BI can connect to web pages, cloud services, APIs, and online platforms to bring external data into your reports. This capability enables you to combine internal data (from your databases) with external data (from the web, APIs, or cloud services) for richer analysis.",
              discussion: "A simple demonstration will involve the \"From Web\" connector to pull tabular data from a web page (e.g., a table from a Wikipedia article). The From Web connector uses browser-like technology to access web pages and can automatically detect HTML tables on the page. You simply paste the URL, and Power BI presents detected tables for selection. This is useful for scraping public data, government statistics, or any web-based tabular information. This will also introduce the existence of connectors for cloud services like SharePoint folders and Azure SQL Databases. SharePoint connectors enable you to connect to SharePoint lists (structured data) or SharePoint folders (files in cloud storage). Azure SQL Databases are cloud-hosted SQL Server databases, using the same connection process as on-premises SQL Server but with cloud-specific authentication (often Azure Active Directory). Other notable online connectors include REST APIs (for custom integrations), OData feeds, and online services like Salesforce, Dynamics 365, and Google Analytics.",
              keyPoints: [
                "From Web connector extracts tabular data from HTML web pages",
                "Cloud services like SharePoint and Azure SQL provide cloud-based data access",
                "Power BI supports REST APIs and OData feeds for custom integrations",
                "Online connectors enable combining internal and external data sources",
                "Authentication varies by service - some use OAuth, others use API keys"
              ],
              insiderTips: [
                "From Web is powerful but fragile - web page structure changes break the connection",
                "Use From Web for public data - not recommended for production reports due to instability",
                "SharePoint folders are great for accessing cloud-stored Excel/CSV files",
                "Azure SQL uses Azure Active Directory authentication - same as on-premises otherwise",
                "REST API connections often require API keys - store securely in Power BI",
                "OData feeds are standardized - more reliable than web scraping",
                "Online service connectors (Salesforce, Dynamics) require appropriate licenses",
                "If web scraping breaks, check if the website structure changed",
                "For production, prefer APIs over web scraping for reliability"
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-2-5",
            videoChapters: [
              { title: "Connection Modes Overview", timestamp: 0 },
              { title: "Import Mode Explained", timestamp: 120 },
              { title: "DirectQuery Mode Explained", timestamp: 240 },
              { title: "Composite Mode", timestamp: 360 },
              { title: "Making the Right Choice", timestamp: 480 },
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Hands-On Lab", timestamp: 360 },
              { title: "Summary", timestamp: 510 }
            ],
            moduleNumber: 3,
            lessonNumber: 2,
            title: "Basic Table Transformations (Hands-On Lab)",
            description: "Applying the most common steps to clean messy data",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Applying the most common steps to clean messy data is the core of Power Query. Most real-world data needs cleaning before it's ready for analysis. This lab introduces the fundamental transformations that you'll use in almost every Power Query project: selecting columns, filtering rows, sorting data, and promoting headers.",
              discussion: "Using a sample dataset, this lab will cover: Choosing and Removing Columns - Select only the columns you need for your analysis. Removing unnecessary columns reduces model size and improves performance. Filtering Rows - Remove unwanted rows like null values, blank rows, or rows that don't meet your criteria. Common filters include removing nulls, filtering by date ranges, or excluding specific categories. Sorting Data - Organize rows in a specific order. Sorting helps you identify patterns, find outliers, and prepare data for further analysis. 'Use First Row as Headers' (promoting headers) - When Power BI doesn't recognize headers (common in Excel files), you need to promote the first row to become column names. This is one of the most common first steps. These basic transformations form the foundation of data cleaning. As you progress, you'll combine these with more advanced transformations to handle increasingly complex data cleaning scenarios.",
              labs: [
                "Load a sample messy dataset (Excel file with unorganized data)",
                "Promote first row as headers: Right-click first row > Use First Row as Headers",
                "Select columns: Ctrl+Click column headers to select multiple, right-click > Remove Other Columns",
                "Filter rows: Click column filter dropdown, remove nulls/blanks, or filter by criteria",
                "Sort data: Click column header to sort ascending, click again for descending",
                "Remove duplicate rows: Select columns, Home > Remove Rows > Remove Duplicates",
                "Inspect Applied Steps: Review transformation history in Applied Steps pane",
                "Practice: Start over and try different sequences of transformations"
              ],
              keyPoints: [
                "Basic transformations: Promote headers, select columns, filter rows, sort data",
                "These fundamental steps appear in almost every Power Query project",
                "Applied Steps pane shows your transformation history - each step can be edited or deleted",
                "Order matters - transformations execute from top to bottom in Applied Steps",
                "You can preview data after each step to verify transformations worked correctly"
              ],
              insiderTips: [
                "Always promote headers first - it makes all subsequent steps easier",
                "Remove columns early in the pipeline - reduces processing time for downstream steps",
                "Use 'Remove Other Columns' when you need only a few columns - faster than removing many",
                "Filter out nulls/blanks before aggregating - they can cause unexpected results",
                "Applied Steps are your undo history - you can delete any step to revert that change",
                "Click the gear icon next to any step to modify it without deleting and redoing",
                "Preview data frequently - catch issues early before they compound",
                "Rename query steps for clarity - double-click step name in Applied Steps pane to rename"
              ]
            },
          },
          {
            id: "3-3",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 3,
            lessonNumber: 6,
            title: "Introduction to Parameters",
            description: "Using Power Query parameters to make queries dynamic",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "Using Power Query parameters to make queries dynamic is a critical skill for reusable, maintainable data transformations. Parameters are variables that you can change once to update an entire query. Instead of hard-coding file paths, dates, or other values in your queries, parameters let you define them once and reference them throughout your transformations. This makes your queries flexible and easy to maintain.",
              discussion: "Introduce the concept of parameters to easily change inputs like a file path or a start date, making the query reusable. For example, if you connect to a monthly sales file, instead of hard-coding 'Sales_January.xlsx' in your query, you can create a parameter called 'MonthName' and reference it. When January ends and you need February data, you simply change the parameter value once, and the entire query updates automatically. Common parameter use cases include: File paths (when files are in predictable locations with date-based names), Date ranges (start date and end date for filtering), Connection strings (server names, database names for database connections), Threshold values (e.g., minimum sales amount for filtering). Parameters are created in the Power Query Editor via Manage Parameters. Once created, they appear in the Parameters folder and can be referenced in any step using [ParameterName] syntax. Parameters can have default values, data types, and even lists of allowed values (for dropdown selection). For advanced scenarios, you can prompt users for parameter values when refreshing data.",
              keyPoints: [
                "Parameters are variables that make queries dynamic and reusable",
                "Common uses: file paths, date ranges, connection strings, threshold values",
                "Parameters eliminate hard-coding - change once, update entire query",
                "Create parameters in Power Query Editor via Manage Parameters dialog",
                "Reference parameters using [ParameterName] syntax in query steps"
              ],
              insiderTips: [
                "Use parameters for file paths - especially when files have date-based names (Sales_2024_01.xlsx)",
                "Date parameters are powerful - filter data by parameter-driven date ranges",
                "Parameters can have default values - set realistic defaults for easier development",
                "Use 'List of values' parameter type for dropdown selection - user-friendly for non-technical users",
                "Parameters are stored with the query - they persist when you save and reopen the file",
                "For production reports, consider using parameters to switch between dev/test/prod environments",
                "Parameter values can be changed in Power Query Editor or in Power BI Service (when published)",
                "Advanced: Use parameters with custom M functions for even more flexibility"
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-7",
                        videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-8",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 3,
            lessonNumber: 8,
            title: "Introduction to the Advanced Editor (The M Language)",
            description: "This lesson serves to demystify the code behind Power Query, not to teach it (yet)",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "This lesson serves to demystify the code behind Power Query, not to teach it (yet). Every action you take in the Power Query UI is translated into M code behind the scenes. Understanding this connection helps you appreciate the power of Power Query and prepares you for advanced scenarios where writing M code directly is more efficient than using the UI. This lesson shows you that M code exists and is accessible, planting the seed for advanced work later in your learning journey.",
              discussion: "By clicking the \"Advanced Editor\" button, a user can see that every click made in the UI has been writing code in a functional language called \"M\". M (short for 'Data Mashup') is Power Query's functional programming language. Every transformation you perform through the UI generates M code that you can view, edit, and even write manually. For example, selecting 'Remove Columns' generates M code like: Table.RemoveColumns(Source, {\"UnnecessaryColumn\"}). The Advanced Editor shows you the complete M query in its raw form. You can copy this code, modify it, or even write M code from scratch for transformations that are difficult or impossible through the UI. While you don't need to write M code as a beginner, understanding that it exists and seeing how your UI actions translate to code is valuable. Advanced users often mix UI-based transformations with custom M code for maximum flexibility and efficiency. This lesson plants the seed for advanced work where you'll write custom M functions, handle complex data structures, and optimize query performance through M code.",
              keyPoints: [
                "Every Power Query UI action generates M code behind the scenes",
                "M (Data Mashup) is Power Query's functional programming language",
                "Advanced Editor lets you view, edit, and write M code directly",
                "UI-based transformations can be replicated or extended with M code",
                "Understanding M code opens doors to advanced Power Query scenarios"
              ],
              insiderTips: [
                "Open Advanced Editor regularly - it's the best way to learn M code structure",
                "Compare UI transformations with generated M code - you'll see the pattern",
                "Copy M code from Advanced Editor to share transformations or reuse elsewhere",
                "You can modify generated M code for custom behavior the UI doesn't support",
                "Advanced M techniques include custom functions, error handling, and performance optimization",
                "Don't be intimidated by M code - it's more readable than it first appears",
                "Bookmark common M patterns you discover - build your own reference library",
                "Advanced Editor has syntax highlighting and basic IntelliSense - helpful for writing code"
              ]
            },
          },
          {
            id: "3-9",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-3-9",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 3,
            lessonNumber: 9,
            title: "Close & Apply",
            description: "The final step in the Power Query Editor",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "The final step in the Power Query Editor is closing the editor and loading your transformed data into the Power BI data model. After you've completed all your transformations in Power Query, you need to exit the editor and apply your changes. This step loads the cleaned, transformed data into Power BI's in-memory engine (VertiPaq), making it available for building visualizations and creating relationships. The 'Close & Apply' button is your gateway from data transformation to data modeling and visualization.",
              discussion: "Clicking \"Close & Apply\" executes all the applied steps, closes the editor, and loads the clean, transformed data into the Power BI data model. This is when Power Query actually runs your transformations for the first time (up until now, you've been previewing transformations). The process can take seconds for small datasets or minutes for large, complex transformations. Power Query will show a progress dialog indicating which step is executing. Once complete, the Power Query Editor closes, and you're returned to Power BI Desktop's main interface. Your transformed data now appears in the Fields pane, ready for building visualizations. If any step generates an error during execution, Power Query will pause and show you which step failed and why. You can then return to the editor, fix the issue, and try Close & Apply again. Alternatively, clicking 'Close' (instead of 'Close & Apply') closes the editor without applying changes - useful if you want to review your work before loading. Remember: Close & Apply runs all transformations and loads data; this is when performance matters most, as large or complex transformations can take significant time.",
              keyPoints: [
                "Close & Apply executes all transformation steps and loads data into Power BI model",
                "This is when Power Query actually runs your transformations (not just previews)",
                "Load time depends on data size and transformation complexity",
                "Errors during execution pause the process - fix issues and retry",
                "Close (without Apply) lets you review transformations before loading"
              ],
              insiderTips: [
                "First Close & Apply after major transformations may take longer - be patient",
                "Watch the progress dialog to see which step is executing if it's slow",
                "If Close & Apply fails, check the error message - it usually tells you which step failed",
                "Large datasets: Consider disabling 'Enable load' for queries you don't immediately need",
                "You can close the editor without applying - changes are saved but not loaded until you Apply",
                "After Close & Apply, check Data View to verify your transformations worked correctly",
                "Performance tip: Remove unnecessary columns before Close & Apply to speed up loading",
                "If transformations are very slow, break complex queries into multiple simpler queries"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-4-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 4,
            lessonNumber: 1,
            title: "Introduction to the Visualizations Pane",
            description: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types. Understanding these two panes is fundamental to building reports in Power BI. The Fields pane (left side) shows your data model - all tables, columns, and measures available for visualization. The Visualizations pane (right side) contains all available chart types and visual formatting options. Together, they form the visual design interface of Power BI Desktop.",
              discussion: "The core workflow for building a report is: 1. Select a visual type (e.g., Bar chart) from the Visualizations pane - this creates an empty visual on your canvas. 2. Drag data fields from the Fields pane into the visual's \"wells\" (e.g., X-axis, Y-axis, Legend, Values). Each visual type has specific fields wells designed for different data types. For example, a bar chart has wells for Axis (categorical data like Category), Values (numeric data like Sales), Legend (for grouping/color coding), and Tooltip (for additional context). The Fields pane organizes your data hierarchically - tables at the top level, columns nested beneath their tables, and measures shown with a calculator icon. Measures (created with DAX) are distinguished from columns - you'll learn about this in Part 2. The Visualizations pane shows 30+ built-in visuals, from basic charts (bar, line, pie) to advanced visuals (maps, scatter plots, waterfall charts). You can also install custom visuals from Microsoft AppSource. Once you've selected a visual and populated its fields, Power BI automatically generates the visualization based on your data model relationships.",
              keyPoints: [
                "Fields pane (left) shows your data model - tables, columns, and measures",
                "Visualizations pane (right) contains chart types and formatting options",
                "Workflow: Select visual type → Drag fields into visual wells → Power BI generates visualization",
                "Each visual type has specific fields wells designed for different data types",
                "Measures are distinguished from columns with a calculator icon in Fields pane"
              ],
              insiderTips: [
                "Use Ctrl+Click to select multiple visuals and format them at once",
                "Right-click in Fields pane to access options: New Measure, New Column, etc.",
                "The Visualizations pane updates based on selected visual - formatting options change dynamically",
                "Drag fields directly onto the visual itself for quick field assignment",
                "Use the search box in Fields pane to quickly find columns in large models",
                "Expand/collapse tables in Fields pane to organize your view of the model",
                "Custom visuals from AppSource appear in Visualizations pane after installation",
                "The Format visual button in Visualizations pane reveals all formatting options"
              ]
            },
          },
          {
            id: "4-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-4-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Hands-On Lab", timestamp: 360 },
              { title: "Summary", timestamp: 510 }
            ],
            moduleNumber: 4,
            lessonNumber: 2,
            title: "Creating Core Visuals (Hands-On Lab)",
            description: "Building the most common and effective chart types",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Data Modeling',
            content: {
              concept: "Building the most common and effective chart types is the core of Power BI report creation. Different chart types communicate different types of insights effectively. Choosing the right visual for your data and message is a critical skill. This lab introduces the four most commonly used visual types, each optimized for specific analytical scenarios.",
              discussion: "This lab will guide students to build: Bar/Column Chart: For categorical comparisons (e.g., Sales by Category). Bar charts are ideal for comparing values across categories. Use horizontal bars when category names are long. Use vertical columns (column charts) for time series data. Line Chart: For trends over time (e.g., Sales by Month). Line charts excel at showing trends, patterns, and changes over continuous time periods. Multiple lines can show trends for different categories simultaneously. Pie/Treemap: For part-to-whole relationships. Pie charts show proportions but work best with few categories (5 or fewer). Treemaps are an alternative that scales better to many categories by using size and color to represent both value and category. Map: For visualizing geographical data (e.g., Sales by State). Maps bring geographic data to life, making spatial patterns immediately apparent. Power BI supports different map types: Filled Map (choropleth), Shape Map, and ArcGIS maps. Each visual type has specific requirements: Bar charts need one category (Axis) and one measure (Values). Line charts need a date/time field (Axis) and one or more measures (Values). Pie charts need one category (Legend) and one measure (Values). Maps need geographic fields (Location) and optionally a measure (Color saturation or Size).",
              labs: [
                "Bar Chart: Select Bar chart from Visualizations pane, drag Category to Axis, drag Sales to Values",
                "Column Chart: Select Column chart, drag Year to Axis, drag Sales to Values (time series comparison)",
                "Line Chart: Select Line chart, drag Date/Month to Axis, drag Sales to Values",
                "Multiple Line Chart: Add Product Category to Legend to show trends for each category",
                "Pie Chart: Select Pie chart, drag Region to Legend, drag Sales to Values",
                "Treemap: Select Treemap, drag Product Category to Category, drag Sales to Values",
                "Map: Select Filled Map, drag State/Country to Location, drag Sales to Color saturation",
                "Practice: Format each visual - add titles, adjust colors, improve readability"
              ],
              keyPoints: [
                "Bar/Column charts: Best for categorical comparisons - horizontal for long names, vertical for time",
                "Line charts: Ideal for trends over time - multiple lines show trends for different categories",
                "Pie/Treemap: Show part-to-whole relationships - Treemap scales better than pie for many categories",
                "Maps: Visualize geographic patterns - Filled Map is most common",
                "Each visual type has specific field requirements - mismatch causes errors"
              ],
              insiderTips: [
                "Default to bar charts for comparisons - they're easier to read than pie charts",
                "Line charts work best with continuous data (dates, numbers) on the X-axis",
                "Avoid pie charts with more than 5 categories - use treemap or bar chart instead",
                "Maps require proper geographic field formatting - use address fields or geographic hierarchies",
                "Use multiple measures on one chart sparingly - can become cluttered",
                "Format visuals immediately after creating - it's easier than reformatting many later",
                "Test different visual types with the same data - see which communicates best",
                "Consider your audience - executives prefer simple visuals, analysts prefer detailed ones"
              ]
            },
          },
          {
            id: "4-3",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-4-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 4,
            lessonNumber: 3,
            title: "Using Slicers for Interactivity",
            description: "Slicers are on-page visual filters (like a dropdown or list) that allow the end-user to interact with and filter the entire report page.49Lab: Add a \"Year\" slicer and a \"Region\" slicer. Demonstrate ho",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Slicers are on-page visual filters (like a dropdown or list) that allow the end-user to interact with and filter the entire report page. Slicers put filtering power directly in the hands of report consumers, enabling self-service analytics without requiring report author permissions. Unlike hidden filters (which are set by report authors), slicers are visible, interactive controls that report users can manipulate to explore data dynamically.",
              discussion: "Lab: Add a \"Year\" slicer and a \"Region\" slicer. Demonstrate how selecting a value in a slicer dynamically filters all other visuals on the page. Slicers come in several formats: List (checkboxes for multiple selections), Dropdown (single selection), Between (for date ranges), Relative Date (for 'last 30 days' type filters), and Tiles (visual buttons). When you add a slicer to your report page, you assign a field to it (e.g., Year, Region, Product Category). Selecting values in the slicer creates a filter context that automatically applies to all visuals on the same page (and optionally other pages). This is different from visual-level filters, which only affect one visual. Slicers work through relationships in your data model - when you select '2023' in a Year slicer, Power BI filters all related fact tables through the Date table relationship. The filter propagation follows your star schema relationships automatically. You can configure slicers for single-select (one value) or multi-select (multiple values with Ctrl+Click), and you can format slicers to match your report theme. Slicers are the primary interactivity mechanism in Power BI reports, making static dashboards into dynamic analytical tools.",
              labs: [
                "Add Year slicer: Select Slicer visual, drag Year field to Field well",
                "Format Year slicer: Change to Dropdown style, set single-select",
                "Add Region slicer: Select another Slicer, drag Region field to Field well",
                "Format Region slicer: Keep as List style, enable multi-select",
                "Test interactivity: Select different years - observe all charts update dynamically",
                "Test multi-select: Select multiple regions with Ctrl+Click - see combined results",
                "Add Date slicer: Use Between style for date range selection",
                "Practice: Format slicers to match report theme - colors, fonts, sizing"
              ],
              keyPoints: [
                "Slicers are interactive filters that users control - different from author-set filters",
                "Slicers automatically filter all visuals on the same report page",
                "Multiple slicer formats: List, Dropdown, Between, Relative Date, Tiles",
                "Slicers work through data model relationships - filter propagation is automatic",
                "Single-select or multi-select - configure based on analytical needs"
              ],
              insiderTips: [
                "Place slicers at the top or side of report page for consistent user experience",
                "Use Dropdown slicers for fields with many values (saves space)",
                "Use List slicers for fields with few values (shows all options at once)",
                "Date slicers work best with dedicated Date tables (covered in Part 2)",
                "Multiple slicers on same field create 'OR' logic - any selection filters visuals",
                "Sync slicers across pages in Power BI Service for consistent filtering across report",
                "Format slicers consistently - they're part of your report's visual design",
                "Test slicer interactions thoroughly - users will discover edge cases you didn't expect",
                "Consider slicer placement for mobile reports - top placement works best for phones"
              ]
            },
          },
          {
            id: "4-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-4-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 4,
            lessonNumber: 4,
            title: "Displaying Key Metrics: Cards, KPIs, and Gauges",
            description: "Highlighting the most important, single-number metrics",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'AI Features',
            content: {
              concept: "Highlighting the most important, single-number metrics is essential for executive dashboards and KPI tracking. While charts show trends and comparisons, sometimes you need to emphasize a single, critical number. Power BI provides three visual types specifically designed for single metrics: Card, KPI, and Gauge. Each serves a different purpose in communicating key performance indicators.",
              discussion: "Use the \"Card\" visual to display a large, single number like \"Total Sales\". Card visuals are the simplest single-metric display - they show one measure in large, bold text with optional labels. Cards are perfect for totals, averages, or any single number that needs emphasis. They're commonly placed at the top of dashboards to establish key context before viewers drill into detailed charts. Briefly introduce the \"KPI\" and \"Gauge\" visuals, which are designed to track a metric against a target or goal. KPI visuals show a metric with visual indicators (traffic lights: green/yellow/red) based on whether the metric meets a target or threshold. KPIs are ideal for metrics that have clear targets (e.g., Sales Target, Customer Satisfaction Score). Gauge visuals show a metric as a percentage or value on a semicircular gauge, with visual zones (e.g., green/yellow/red bands) indicating performance ranges. Gauges work well for percentage-based metrics (e.g., \"85% of target\" shows visually how close you are). Both KPI and Gauge visuals require you to define targets or thresholds, which can be hard-coded values, measures, or columns. The visual indicators provide immediate context about performance - green means good, yellow means warning, red means critical. These visuals are essential for executive dashboards where decision-makers need quick performance assessment at a glance.",
              keyPoints: [
                "Card visual: Simple single-number display - best for totals and key metrics",
                "KPI visual: Shows metric vs. target with traffic light indicators (green/yellow/red)",
                "Gauge visual: Shows metric as percentage on semicircular gauge with performance zones",
                "KPIs and Gauges require target/threshold definitions for visual indicators",
                "These visuals are essential for executive dashboards and KPI tracking"
              ],
              insiderTips: [
                "Place Card visuals at top of dashboard - they establish key context",
                "Use KPIs for metrics with clear targets - traffic lights communicate status instantly",
                "Gauges work best for percentage metrics - visual zones show performance ranges",
                "Define targets as measures (not hard-coded) for dynamic thresholds",
                "Use consistent color coding: Green = good, Yellow = warning, Red = critical",
                "Cards can show measures with formatting (currency, percentages, decimals)",
                "KPI visual supports trend indicators - shows if metric is improving or declining",
                "Gauge visual supports multiple zones - customize colors and thresholds for your needs",
                "For mobile dashboards, Cards and KPIs work better than Gauges (simpler layouts)"
              ]
            },
          },
          {
            id: "4-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-4-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
            moduleNumber: 4,
            lessonNumber: 5,
            title: "Basic Report Formatting",
            description: "Applying basic design principles for a professional look",
            duration: 20,
            difficulty: 'beginner',
            tags: ["DAX", "Visualizations", "Power Query", "Microsoft Fabric"],
            topic: 'DAX',
            content: {
              concept: "Applying basic design principles for a professional look",
              discussion: "This includes aligning visuals on the canvas, adding clear titles, and applying built-in report themes to ensure color and font consistency.51 This module provides a \"quick win\": by its end, the student has completed the entire BI workflow (Get -> Transform -> Visualize) 8, building a strong sense of accomplishment.Capstone Project 1: Beginner's End-to-End ReportProject Brief: 8Dataset: A single, moderately-messy Excel file (e.g., a Superstore Sales dataset).2Task 1 (Get Data): Connect to the Excel file.32Task 2 (Transform): Use the Power Query Editor to clean the data. This must include fixing data types, removing nulls, and using \"Unpivot\" to tidy a set of columns.38Task 3 (Visualize): Build a single-page dashboard that includes:\"Total Sales\" (Card visual) 50\"Sales over Time\" (Line Chart)\"Sales by Product Category\" (Bar Chart)\"Sales by Region\" (Map visual)Interactive filters for \"Year\" and \"Product Category\" (Slicers).49Task 4 (Fabric Integration): Publish the report to a Fabric-enabled workspace and export the data to a OneLake Lakehouse.Learning Outcome: The student has successfully built and can interact with a complete BI report, reinforcing all lessons from Part 1.Part 2: The Power BI Analyst – Modeling, DAX, and Design",
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 1620 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Hands-On Lab", timestamp: 1260 },
              { title: "Summary", timestamp: 1620 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-5",
                        videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 1350 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-5-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 1620 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 2160 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Hands-On Lab", timestamp: 360 },
              { title: "Summary", timestamp: 510 }
            ],
            moduleNumber: 6,
            lessonNumber: 3,
            title: "Creating Calculated Columns (Hands-On Lab)",
            description: "Writing basic row-context DAX formulas in the Data View.77Lab: Create a Full Name column ([FirstName] & \" \" & [LastName]). Create a Price Category column using logical functions like IF and SWITCH",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Writing basic row-context DAX formulas in the Data View is where you'll create calculated columns. Calculated columns use row context automatically, making them intuitive for Excel users. This lab introduces fundamental DAX syntax for string concatenation and conditional logic - skills you'll use throughout your Power BI journey.",
              discussion: "Lab: Create a Full Name column ([FirstName] & \" \" & [LastName]). This demonstrates DAX string concatenation using the ampersand (&) operator. DAX supports string concatenation just like Excel, but uses & instead of CONCATENATE(). Create a Price Category column using logical functions like IF and SWITCH. IF statements work similarly to Excel: IF(condition, value_if_true, value_if_false). For multiple conditions, use nested IFs or the SWITCH function. SWITCH is more readable for multiple conditions: SWITCH([Price], 100, \"High\", 50, \"Medium\", \"Low\"). Calculated columns are created in Data View or Model View by right-clicking a table and selecting 'New Column'. The DAX formula bar appears at the top, providing IntelliSense for function names and column references. Row context automatically iterates through each row, so you can reference column names directly using [ColumnName] syntax.",
              labs: [
                "Open Data View (Ctrl+T or click Data icon in left sidebar)",
                "Right-click a table (e.g., Customer) > New Column",
                "Create Full Name: Type = [FirstName] & \" \" & [LastName], press Enter",
                "Verify: Check the new Full Name column - should combine first and last names",
                "Create Price Category: Right-click Sales table > New Column",
                "Use IF: Type = IF([UnitPrice] > 100, \"High\", IF([UnitPrice] > 50, \"Medium\", \"Low\"))",
                "Alternative SWITCH: Type = SWITCH(TRUE(), [UnitPrice] > 100, \"High\", [UnitPrice] > 50, \"Medium\", \"Low\")",
                "Practice: Create additional calculated columns using different DAX functions"
              ],
              keyPoints: [
                "Calculated columns use row context automatically - formulas evaluate row-by-row",
                "String concatenation uses & operator: [FirstName] & \" \" & [LastName]",
                "IF statements work like Excel: IF(condition, true_value, false_value)",
                "SWITCH is more readable for multiple conditions than nested IFs",
                "Use [ColumnName] syntax to reference columns in calculated columns"
              ],
              insiderTips: [
                "Calculated columns feel natural - they work like Excel formulas row-by-row",
                "Use SWITCH instead of nested IFs for 3+ conditions - much more readable",
                "Double-check column references - DAX IntelliSense helps but verify spelling",
                "Calculated columns are evaluated at refresh - not dynamically like measures",
                "Remember: Use calculated columns only when needed in slicers/axes/filters",
                "DAX syntax is case-insensitive - but maintain consistency for readability",
                "Use quotes for text values in IF/SWITCH - DAX uses double quotes for strings",
                "Test calculated columns with sample data before committing to large tables"
              ]
            },
          },
          {
            id: "6-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Hands-On Lab", timestamp: 360 },
              { title: "Summary", timestamp: 510 }
            ],
            moduleNumber: 6,
            lessonNumber: 4,
            title: "Creating Measures (Hands-On Lab)",
            description: "Writing basic aggregation measures.77Lab:Total Sales = SUM(Sales)Avg. Price = AVERAGE(Sales[UnitPrice])Order Count = COUNT(Sales[OrderLineKey])",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Writing basic aggregation measures is the foundation of DAX measures. Measures use filter context automatically, making them respond dynamically to slicers, filters, and visual selections. This lab introduces the most common aggregation functions: SUM, AVERAGE, and COUNT - functions you'll use in almost every Power BI report.",
              discussion: "Lab: Create three basic measures. Total Sales = SUM(Sales[SalesAmount]) - This aggregates the SalesAmount column using the SUM function. Note: Use column reference syntax TableName[ColumnName] in measures, or just [ColumnName] if unambiguous. Avg. Price = AVERAGE(Sales[UnitPrice]) - This calculates the average of UnitPrice values. AVERAGE handles numeric columns and ignores text or blank values. Order Count = COUNT(Sales[OrderLineKey]) - This counts the number of rows. COUNT counts numeric values only; use COUNTROWS(Sales) to count all rows regardless of data type. Measures are created in Report View, Data View, or Model View by right-clicking a table and selecting 'New Measure'. Measures can be created in any table, but professional practice is to create a dedicated 'Measures' table to organize all measures in one place. Measures are evaluated at query time, not at refresh time, so they respond dynamically to filter context.",
              labs: [
                "Open Report View (Ctrl+R or click Report icon in left sidebar)",
                "Right-click a table (or create Measures table) > New Measure",
                "Create Total Sales: Type = SUM(Sales[SalesAmount]), press Enter",
                "Name the measure: Change default name to 'Total Sales' in formula bar",
                "Create Avg. Price: Right-click > New Measure, Type = AVERAGE(Sales[UnitPrice])",
                "Create Order Count: Right-click > New Measure, Type = COUNT(Sales[OrderLineKey])",
                "Test measures: Drag measures into a visual (e.g., Card visual) to verify they work",
                "Test filter context: Add a slicer and observe how measures respond dynamically"
              ],
              keyPoints: [
                "Measures use filter context automatically - results change based on filters/selections",
                "SUM() aggregates numeric values - most common aggregation function",
                "AVERAGE() calculates mean - ignores text and blank values",
                "COUNT() counts numeric values - use COUNTROWS() for all rows",
                "Measures are evaluated at query time - dynamic and responsive to user interactions"
              ],
              insiderTips: [
                "Always use explicit table references in measures: Sales[SalesAmount] not just SalesAmount",
                "Create a dedicated 'Measures' table - organize all measures in one place",
                "Measures respond to slicers automatically - no DAX code needed for basic filtering",
                "Use COUNTROWS() instead of COUNT() when you want to count all rows (including blanks)",
                "Test measures in visuals immediately after creating - catch errors early",
                "Measures appear with calculator icon in Fields pane - distinguishes them from columns",
                "Filter context is automatic in measures - understanding this is key to DAX mastery",
                "Professional practice: All measures in one table, named clearly, organized logically"
              ]
            },
          },
          {
            id: "6-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 6,
            lessonNumber: 5,
            title: "Implicit vs. Explicit Measures",
            description: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM).77 \"Explicit\" measures are those created manually with DAX, as",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM). \"Explicit\" measures are those created manually with DAX, as in the lab. Understanding this distinction is critical for professional Power BI development. Best Practice: A professional developer always creates explicit measures. This provides central control, reusability, and clarity. Implicit measures should be disabled in the model settings.",
              discussion: "When you drag a numeric column (e.g., Sales[SalesAmount]) into a visual's Values well, Power BI automatically creates an implicit measure like 'Sum of SalesAmount'. This seems convenient, but it creates problems: You can't control the name (it's auto-generated), you can't reuse it across visuals (each visual creates its own), you can't modify the formula (it's locked), and it clutters the Fields pane with auto-generated measures. Explicit measures, created manually with DAX (e.g., Total Sales = SUM(Sales[SalesAmount])), solve all these problems: You control the name (professional naming), you can reuse the measure across all visuals, you can modify the formula as needed, and you organize measures in a dedicated Measures table. Best practice: Always disable implicit measures in File > Options and Settings > Options > Current File > Data Load > Uncheck 'Auto date/time' and ensure implicit measures are disabled. This forces you to create explicit measures, leading to better, more maintainable models.",
              keyPoints: [
                "Implicit measures: Auto-created when dragging numeric columns into visuals",
                "Explicit measures: Manually created with DAX - professional best practice",
                "Always disable implicit measures - forces explicit measure creation",
                "Explicit measures provide: Name control, reusability, modifiability, organization",
                "Professional models use 100% explicit measures - no implicit measures"
              ],
              insiderTips: [
                "RED FLAG: If you see 'Sum of Column' in your Fields pane, you're using implicit measures - stop!",
                "Disable implicit measures immediately - it's a one-time setting that prevents bad habits",
                "Explicit measures allow you to add formatting (currency, percentages) to the formula",
                "You can rename explicit measures anytime - implicit measures are locked",
                "Explicit measures work better with tooltips, KPIs, and advanced features",
                "Professional practice: Every aggregation should be an explicit measure with a clear name",
                "If you forget and create an implicit measure, you can promote it to explicit (right-click > Promote)",
                "Explicit measures are required for complex calculations - implicit measures can't handle IF/SWITCH/etc."
              ]
            },
          },
          {
            id: "6-6",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-6-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 6,
            lessonNumber: 6,
            title: "Using Quick Measures",
            description: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations is a powerful learning tool. Quick Measures let you create complex DAX formulas through a visual interface, then show you the generated DAX code. This is excellent for beginners learning DAX patterns and for experienced users who want to quickly create common calculations without writing DAX from scratch.",
              discussion: "Demonstrate creating a running total or percent of grand total using the Quick Measure tool, and then review the DAX code that Power BI generated. Quick Measures are accessed via the Modeling ribbon > Quick Measures, or by right-clicking a table > New Quick Measure. The gallery offers 30+ common calculation patterns: Running Total, Percent of Grand Total, Year-over-Year Growth, Moving Average, Rank, and many more. Each pattern has a visual form where you select measures, columns, and parameters. Power BI then generates the DAX code automatically. This is a powerful learning tool for beginners because you can see how complex DAX patterns are constructed. After creating a Quick Measure, you can edit the generated DAX code to customize it further. Quick Measures create explicit measures (not implicit), so they follow professional best practices. Common use cases: Running totals for time series, Percent calculations for breakdowns, Year-over-year comparisons, Rankings and percentiles.",
              keyPoints: [
                "Quick Measures generate complex DAX through a visual interface",
                "Quick Measures create explicit measures - professional best practice",
                "30+ calculation patterns available: Running Total, YoY, Percent of Total, etc.",
                "Generated DAX code is visible and editable - excellent for learning",
                "Quick Measures speed up development for common calculation patterns"
              ],
              insiderTips: [
                "Use Quick Measures to learn DAX patterns - study the generated code",
                "Edit Quick Measures after creation to customize the generated DAX",
                "Quick Measures are explicit measures - they appear in Fields pane with calculator icon",
                "Common patterns: Running Total, Percent of Grand Total, Year-over-Year Growth",
                "Quick Measures work with any measure - select your measure in the interface",
                "Don't rely on Quick Measures forever - learn to write DAX yourself for flexibility",
                "Quick Measures are great starting points - modify them for advanced requirements",
                "Use Quick Measures when you need a common calculation fast - then study the code"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-7-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 7,
            lessonNumber: 1,
            title: "The \"Secret Sauce\" of DAX: Evaluation Context",
            description: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated.87 There are two types of context",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated. This is the single most important concept in DAX - understanding context is the key to mastering DAX. The same DAX formula can return different values depending on where it appears in a report, what filters are applied, and what visual selection has been made. There are two types of context: Row Context (for calculated columns) and Filter Context (for measures).",
              discussion: "Evaluation context determines how DAX formulas calculate results. Row Context exists when DAX iterates through table rows one at a time - this happens automatically in calculated columns and when using iterator functions (SUMX, AVERAGEX, etc.) in measures. Filter Context exists when filters are applied before calculation - this happens automatically in measures based on visual selections, slicers, and filters. Understanding context is the 'secret sauce' that separates beginners from advanced DAX users. When you see the same measure showing different values in different parts of a report, it's because the filter context changed. When a calculated column seems to work correctly, it's because row context automatically iterates through each row. Context transition occurs when CALCULATE() converts row context into filter context - this is one of DAX's most powerful and confusing features. Mastery of context evaluation is what enables you to write complex, sophisticated DAX formulas that respond dynamically to user interactions and report selections.",
              keyPoints: [
                "DAX results depend on evaluation context - same formula, different results in different contexts",
                "Row Context: Iterates row-by-row (calculated columns, iterator functions)",
                "Filter Context: Applies filters before calculation (measures, visual selections)",
                "Context Transition: CALCULATE() converts row context to filter context",
                "Understanding context is the key to mastering DAX"
              ],
              insiderTips: [
                "When a measure shows wrong value, check the filter context first - that's usually the problem",
                "Calculated columns have row context automatically - no need to create it manually",
                "Measures have filter context automatically - filters from visuals, slicers, and filters pane",
                "Context transition is the cause of many DAX 'bugs' - understand CALCULATE() behavior",
                "Use DAX Studio or Performance Analyzer to inspect context when debugging formulas",
                "Filter context is additive - multiple filters combine with AND logic",
                "ALL() removes filters from context - essential for 'Total' calculations",
                "Understanding context makes complex DAX formulas click - study this concept deeply"
              ]
            },
          },
          {
            id: "7-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-7-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 7,
            lessonNumber: 2,
            title: "Row Context (The \"Current Row\")",
            description: "A context that iterates through a table one row at a time",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "A context that iterates through a table one row at a time is called Row Context. Row Context is DAX's way of evaluating formulas for each row individually, similar to how Excel formulas work row-by-row in a spreadsheet. This context exists automatically in calculated columns, making them intuitive for Excel users transitioning to Power BI.",
              discussion: "This context exists by default in Calculated Columns. This is why the formula [Quantity] * [Unit Price] works in a calculated column—it is evaluated for each row individually. When you create a calculated column with Total Price = [Quantity] * [Unit Price], DAX automatically creates row context that iterates through each row of the table. For Row 1, it evaluates [Quantity] from Row 1 and [Unit Price] from Row 1, then multiplies them. For Row 2, it evaluates [Quantity] from Row 2 and [Unit Price] from Row 2, and so on. This is intuitive for Excel users because it matches Excel formula behavior. Row Context also exists when using iterator functions (SUMX, AVERAGEX, MINX, MAXX) in measures - these functions create row context explicitly. The key difference: Calculated columns have row context automatically; Measures need iterator functions to create row context. Understanding row context is essential for transitioning from calculated columns (row-by-row) to measures (aggregated calculations).",
              keyPoints: [
                "Row Context: Iterates through table rows one at a time",
                "Row Context exists automatically in calculated columns",
                "Row Context is created explicitly by iterator functions (SUMX, AVERAGEX, etc.) in measures",
                "Row Context makes calculated columns intuitive for Excel users",
                "Row Context evaluates formulas row-by-row, similar to Excel formulas"
              ],
              insiderTips: [
                "Calculated columns feel natural because row context is automatic - no thinking required",
                "If you need row-by-row calculation in a measure, use an iterator function (SUMX, etc.)",
                "Row Context cannot filter tables - it only iterates through existing rows",
                "The formula [Column] works in row context - it automatically references current row",
                "You can't modify row context - it's read-only (unlike filter context which can be modified)",
                "Context Transition: When you use CALCULATE() inside row context, it converts to filter context",
                "Common mistake: Trying to use row-context formula syntax in measures without iterators",
                "Row Context is simple - filter context is where DAX gets complex"
              ]
            },
          },
          {
            id: "7-3",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-7-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 7,
            lessonNumber: 3,
            title: "Filter Context (The \"Current Cell\")",
            description: "The set of all filters applied to a measure before it is calculated",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "The set of all filters applied to a measure before it is calculated is called Filter Context. Filter Context is DAX's way of applying filters from visual selections, slicers, and explicit filters before calculating a measure. This is why the same measure shows different values in different parts of a report - the filter context changes based on where the measure appears and what filters are active.",
              discussion: "Imagine a matrix visual with Total Sales in the Values, Region on Rows, and Year on Columns. The Total Sales value for the cell at the intersection of \"East\" and \"2023\" is calculated within a filter context of Region = \"East\" AND Year = 2023. Slicers, filters on other visuals, and the visual's own coordinates all contribute to this filter context. Multiple filters combine with AND logic - all must be true simultaneously. Filter Context is dynamic - it changes automatically as users interact with slicers, select different values in visuals, or navigate between report pages. This automatic filter propagation is what makes Power BI reports interactive and responsive. Filter Context flows through relationships in your data model - when you filter a dimension table (e.g., select '2023' in Year slicer), the filter automatically propagates to related fact tables through one-to-many relationships. This filter propagation is why star schema design is so powerful - filters flow naturally from dimensions to facts. Understanding filter context is essential for writing measures that respond correctly to user interactions and report selections.",
              keyPoints: [
                "Filter Context: Set of filters applied before measure calculation",
                "Filter Context is dynamic - changes based on visual selections, slicers, and filters",
                "Multiple filters combine with AND logic - all must be true",
                "Filter Context flows through relationships in data model (dimensions → facts)",
                "Understanding Filter Context is essential for writing responsive measures"
              ],
              insiderTips: [
                "Filter Context is why the same measure shows different values in different visuals",
                "Slicers create filter context automatically - no DAX code needed",
                "Visual coordinates (rows, columns, legend) contribute to filter context",
                "Filters from Filters pane combine with slicer and visual filters with AND logic",
                "Filter Context flows through relationships automatically in star schema",
                "Use ALL() to remove filters from context for 'Total' calculations",
                "CALCULATE() can modify filter context - add or remove filters",
                "Debugging tip: Use DAX Studio to inspect filter context when measures return wrong values",
                "Filter Context is dynamic - changes as users interact with report",
                "Understanding Filter Context makes complex DAX formulas make sense"
              ]
            },
          },
          {
            id: "7-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-7-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 7,
            lessonNumber: 4,
            title: "Iterator Functions (SUMX, AVERAGEX, MINX)",
            description: "Iterators, or \"X-functions,\" are functions that create a row context within a measure, allowing for row-by-row calculations",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Iterators, or \"X-functions,\" are functions that create a row context within a measure, allowing for row-by-row calculations. Iterator functions are the correct solution when you need row-by-row calculations in measures. Unlike calculated columns which have row context automatically, measures need iterator functions to create row context explicitly.",
              discussion: "This is the correct solution to the \"Total Price\" problem. If you want to calculate Total Price ([Quantity] * [UnitPrice]) as a measure, you can't use a calculated column because you need aggregation. The solution is to use SUMX() which creates row context and iterates through each row. The formula would be: Total Price = SUMX(Sales, Sales[Quantity] * Sales[UnitPrice]). SUMX() iterates through the Sales table, creates row context for each row, evaluates [Quantity] * [UnitPrice] for each row, then sums all the results. Common iterator functions include: SUMX() - sums expression evaluated row-by-row, AVERAGEX() - averages expression evaluated row-by-row, MINX() - finds minimum expression value row-by-row, MAXX() - finds maximum expression value row-by-row, COUNTX() - counts rows where expression is not blank. Iterator functions are essential when you need row-by-row calculations that aggregate to a single value in a measure. They're also useful when you need to iterate through a filtered table or when the calculation requires access to multiple columns from the same row.",
              keyPoints: [
                "Iterator functions (X-functions) create row context within measures",
                "SUMX() iterates through table, evaluates expression row-by-row, then sums results",
                "Common iterators: SUMX, AVERAGEX, MINX, MAXX, COUNTX",
                "Iterators are essential for row-by-row calculations in measures",
                "This is the correct solution for 'Total Price' type calculations in measures"
              ],
              insiderTips: [
                "When you need row-by-row calculation in a measure, use an iterator (SUMX, AVERAGEX, etc.)",
                "SUMX(Table, Expression) syntax: Table to iterate, Expression to evaluate per row",
                "Iterators can be slow on large tables - use judiciously",
                "SUMX() is the most common iterator - you'll use it frequently",
                "Common pattern: SUMX(FactTable, FactTable[Column1] * FactTable[Column2])",
                "Iterators evaluate in filter context - they respect slicers and filters automatically",
                "Performance tip: Prefer calculated columns for row-by-row math IF you need the column in slicers/axes",
                "If your measure needs row-by-row calculation, an iterator is usually the right solution"
              ]
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 8,
            lessonNumber: 1,
            title: "The Most Important Function in DAX: CALCULATE()",
            description: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context.90Syntax: CALCULATE( <expression>, <filter1>, <filter2>,... )",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context. Syntax: CALCULATE(<expression>, <filter1>, <filter2>, ...). CALCULATE() is the gateway to advanced DAX - mastery of CALCULATE() separates intermediate from advanced DAX users. Almost every complex DAX formula uses CALCULATE() to modify filter context.",
              discussion: "The first argument is the measure or expression to be evaluated (e.g., [Total Sales]). All subsequent arguments are new filters that are applied, which can override or add to the existing filter context. CALCULATE() evaluates the expression in a modified filter context. The filters you provide in CALCULATE() can: Add new filters (e.g., CALCULATE([Total Sales], Dim_Product[Category] = \"Electronics\")), Remove existing filters (e.g., CALCULATE([Total Sales], ALL(Dim_Date)) removes date filters), Override existing filters (e.g., CALCULATE([Total Sales], Dim_Date[Year] = 2024) overrides year filter). Filter modification order: 1. CALCULATE first removes filters (using ALL, ALLEXCEPT, etc.), 2. Then applies new filters you specify, 3. Then evaluates the expression. This order is crucial - filters are evaluated in sequence. Common use cases: Filtering measures by specific categories, Removing filters to calculate totals, Comparing current vs. previous period, Implementing complex business logic through filter modifications.",
              keyPoints: [
                "CALCULATE() is the ONLY function that can modify filter context in DAX",
                "Syntax: CALCULATE(expression, filter1, filter2, ...) - expression first, then filters",
                "CALCULATE() can add, remove, or override filters in the current context",
                "Filter modification happens in sequence: Remove filters, then apply new filters",
                "CALCULATE() is essential for advanced DAX calculations"
              ],
              insiderTips: [
                "CALCULATE() is the most important function in DAX - invest time learning it deeply",
                "When a measure needs different filtering, wrap it in CALCULATE() with new filters",
                "CALCULATE() respects existing filters unless you use ALL() to remove them",
                "Common pattern: CALCULATE([Measure], Dim_Table[Column] = \"Value\")",
                "CALCULATE() can have multiple filter arguments - they combine with AND logic",
                "Use CALCULATE() with ALL() to remove filters: CALCULATE([Total], ALL(Dim_Date))",
                "Filter modification order matters - CALCULATE removes filters before applying new ones",
                "When debugging DAX, check CALCULATE() first - it's usually involved in complex formulas"
              ]
            },
          },
          {
            id: "8-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 8,
            lessonNumber: 2,
            title: "Removing Filters with ALL()",
            description: "The ALL() function removes filters from a table or column.96 Its primary use is as a filter modifier inside CALCULATE()",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "The ALL() function removes filters from a table or column. Its primary use is as a filter modifier inside CALCULATE(). ALL() is essential for calculating totals that ignore current filter context. This is the key to creating \"Percent of Total\" calculations and many other common business metrics.",
              discussion: "This is the key to creating \"Percent of Total\" calculations. ALL() can remove filters from: A table (e.g., ALL(Sales) removes all filters from Sales table), A column (e.g., ALL(Dim_Product[Category]) removes filters from Category column), Multiple columns (e.g., ALL(Dim_Product[Category], Dim_Product[Subcategory]) removes filters from both columns). When used inside CALCULATE(), ALL() removes filters before the expression is evaluated. For example: Sales Percent of Total = DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Dim_Product))). This calculates Total Sales divided by Total Sales ignoring all Product filters - resulting in a percent of total. ALL() is often used with CALCULATE() to create totals that ignore slicer selections or visual filters. Common use cases: Percent of Total calculations, Comparisons to overall totals, Rank calculations that ignore current filters, YoY calculations that need unfiltered totals.",
              keyPoints: [
                "ALL() removes filters from tables or columns",
                "ALL() is typically used inside CALCULATE() as a filter modifier",
                "ALL() removes filters BEFORE the expression in CALCULATE() is evaluated",
                "This enables \"Percent of Total\" calculations and total comparisons",
                "ALL() can remove filters from entire tables or specific columns"
              ],
              insiderTips: [
                "ALL() inside CALCULATE() removes filters before evaluation - essential for totals",
                "Pattern: CALCULATE([Measure], ALL(Table)) removes all filters from that table",
                "Percent of Total pattern: DIVIDE([Measure], CALCULATE([Measure], ALL(...)))",
                "ALL() works on table, column, or multiple columns - be specific",
                "Use ALL() to calculate overall totals that ignore current filter context",
                "Common mistake: Forgetting ALL() when you need unfiltered totals",
                "ALL() is read-only - it doesn't modify data, just removes filter context",
                "Test ALL() calculations with slicers - totals should remain constant"
              ]
            },
          },
          {
            id: "8-3",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 8,
            lessonNumber: 3,
            title: "Related ALL Functions: ALLEXCEPT(), ALLSELECTED()",
            description: "Nuanced versions of ALL() for more complex scenarios",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Nuanced versions of ALL() for more complex scenarios provide more precise filter control than ALL(). ALLEXCEPT() and ALLSELECTED() are powerful filter modifiers that handle advanced filtering requirements. These functions give you granular control over which filters to remove and which to preserve.",
              discussion: "ALLEXCEPT() removes filters from all columns EXCEPT those you specify. Syntax: ALLEXCEPT(Table, Column1, Column2, ...). This is useful when you want to preserve some filters while removing others. For example: ALLEXCEPT(Dim_Product, Dim_Product[Category]) removes all Product filters except Category - useful for calculating totals within a category. ALLSELECTED() removes filters EXCEPT those explicitly selected by the user in slicers or visual selections. Syntax: ALLSELECTED(Table or Column). This is useful for calculating totals that respect user selections but ignore other filters. For example, if a user selects \"2023\" and \"Electronics\" in slicers, ALLSELECTED() preserves those selections while removing other filters. Common use cases: ALLEXCEPT() - Calculate subtotals within categories while preserving category filter, Rank calculations within groups, Filtered totals that preserve some dimensions. ALLSELECTED() - Totals that respect explicit user selections, Dynamic comparisons based on user selection, Percent calculations relative to selected context.",
              keyPoints: [
                "ALLEXCEPT() removes all filters EXCEPT specified columns",
                "ALLSELECTED() preserves filters from explicit user selections (slicers, visuals)",
                "These functions provide granular control over filter removal",
                "ALLEXCEPT() is useful for preserving some filters while removing others",
                "ALLSELECTED() is useful for totals that respect user selections"
              ],
              insiderTips: [
                "ALLEXCEPT() syntax: ALLEXCEPT(Table, Column1, Column2) - keep these, remove others",
                "ALLSELECTED() preserves slicer selections - useful for user-driven totals",
                "Use ALLEXCEPT() when you need subtotals within categories",
                "ALLSELECTED() is powerful for creating dynamic comparisons",
                "Common pattern: CALCULATE([Measure], ALLEXCEPT(Dim_Table, Dim_Table[Column]))",
                "ALLSELECTED() respects visual selections too - not just slicers",
                "Test ALLEXCEPT() and ALLSELECTED() carefully - filter behavior can be subtle",
                "These functions are advanced - master ALL() first, then learn these"
              ]
            },
          },
          {
            id: "8-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 8,
            lessonNumber: 4,
            title: "Context Transition (The Advanced Concept)",
            description: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\"",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\". This complex but powerful mechanism transitions the current row's values into an equivalent filter context. Context Transition is one of DAX's most confusing concepts, but understanding it unlocks advanced DAX capabilities.",
              discussion: "This complex but powerful mechanism transitions the current row's values into an equivalent filter context. Example: Create a calculated column in the Customer table: Total Spend = CALCULATE(SUM(Sales[SalesAmount])). For each row in the Customer table, context transition converts the CustomerKey into a filter, calculating the total sales for only that specific customer. Here's what happens: 1. Row Context: DAX iterates through Customer table row-by-row, 2. CALCULATE() triggers Context Transition: Current row's CustomerKey becomes a filter, 3. Filter Context: The measure (SUM(Sales)) evaluates with CustomerKey = current row's value, 4. Result: Each row gets the total sales for that specific customer. Context Transition only occurs when CALCULATE() is used inside row context. This is why calculated columns with CALCULATE() behave differently than measures. Common use cases: Calculating totals for each row (e.g., customer's total spend), Comparing row-level values to totals, Implementing row-level security, Creating aggregations within calculated columns.",
              keyPoints: [
                "Context Transition occurs when CALCULATE() is used inside row context",
                "Context Transition converts row context (current row) into filter context (filter)",
                "This enables row-level aggregations in calculated columns",
                "Context Transition only happens with CALCULATE() - other functions don't trigger it",
                "Understanding Context Transition is essential for advanced DAX"
              ],
              insiderTips: [
                "Context Transition is confusing - study examples carefully",
                "Pattern: Calculated Column = CALCULATE([Measure]) - triggers context transition",
                "Context Transition is automatic - you don't write code to trigger it",
                "This is why CALCULATE() in calculated columns works differently than expected",
                "Use Context Transition to calculate row-level totals (e.g., customer's total spend)",
                "Performance warning: Context Transition in calculated columns can be slow on large tables",
                "Consider using measures instead of calculated columns with CALCULATE() when possible",
                "Context Transition is one of DAX's most powerful and confusing features"
              ]
            },
          },
          {
            id: "8-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-8-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-9-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-9-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Hands-On Lab", timestamp: 360 },
              { title: "Summary", timestamp: 510 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-9-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-9-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-9-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-10-7",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-11-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-11-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-11-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 1620 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-12-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-12-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-12-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-12-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
            moduleNumber: 12,
            lessonNumber: 4,
            title: "Distribution with Apps (The \"End-User\" Experience)",
            description: "End-users (e.g., executives, consumers) should never be given direct access to the developer Workspace.132 The correct method for distribution is publishing the Workspace content as an App",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "End-users (e.g., executives, consumers) should never be given direct access to the developer Workspace.132 The correct method for distribution is publishing the Workspace content as an App",
              discussion: "An App is a clean, read-only \"launcher\" that bundles the reports and dashboards from a workspace into a professional, curated package for consumers.135 This hides all the backend complexity (like semantic models) and provides a much cleaner user experience.137 This is the core governance model of Power BI: Workspaces are for developers (the kitchen); Apps are for consumers (the restaurant).132 This lesson also covers other sharing methods like exporting to PDF/PPT or embedding in Microsoft Teams and SharePoint",
            },
          },
          {
            id: "12-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-12-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-13-6",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-14-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-14-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-14-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-14-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 14,
            lessonNumber: 4,
            title: "Overview of the Power BI Admin Portal",
            description: "A brief tour of the central, tenant-wide settings for Power BI governance",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "A brief tour of the central, tenant-wide settings for Power BI governance",
              discussion: "This includes Usage Metrics, auditing, and Tenant Settings (e.g., \"Allow publish to web,\" \"Enable external sharing,\" \"Manage custom visuals\").164 This is also where to manage data sensitivity labels, promote certified datasets, and view data lineage",
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-15-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 15,
            lessonNumber: 1,
            title: "Introduction to Tabular Editor (External Tool)",
            description: "Tabular Editor is the professional's tool for data modeling. It connects to the Power BI model and exposes many properties and features not visible in the Desktop UI",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Data Modeling"],
            topic: 'Data Modeling',
            content: {
              concept: "Tabular Editor is the professional's tool for data modeling. It connects to the Power BI model and exposes many properties and features not visible in the Desktop UI",
            },
          },
          {
            id: "15-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-15-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-15-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-15-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-16-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 16,
            lessonNumber: 1,
            title: "CI/CD with Deployment Pipelines",
            description: "A \"Master\" never publishes a change directly to the live production report. A professional Continuous Integration/Continuous Deployment (CI/CD) workflow is used to de-risk changes",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A \"Master\" never publishes a change directly to the live production report. A professional Continuous Integration/Continuous Deployment (CI/CD) workflow is used to de-risk changes",
              discussion: "Deployment Pipelines in the Power BI Service provide a simple, visual interface for this",
            },
          },
          {
            id: "16-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-16-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 480 },
              { title: "Best Practices", timestamp: 780 },
              { title: "Summary", timestamp: 1080 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-16-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 16,
            lessonNumber: 3,
            title: "Integrating with the Power Platform (Power Apps & Power Automate)",
            description: "Making reports actionable by integrating with the other components of the Power Platform",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Making reports actionable by integrating with the other components of the Power Platform",
            },
          },
          {
            id: "16-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-16-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 16,
            lessonNumber: 4,
            title: "Developer Focus: Power BI Embedded Analytics",
            description: "For \"Master\" level developers, this is the process of embedding Power BI content inside their own custom applications for external customers (a SaaS scenario)",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Power BI Service',
            content: {
              concept: "For \"Master\" level developers, this is the process of embedding Power BI content inside their own custom applications for external customers (a SaaS scenario)",
              discussion: "This is a highly technical, API-driven 184 topic. It involves App Registration in Microsoft Entra ID (formerly Azure AD), workspace management, and using client-side APIs (JavaScript) to render the content securely",
            },
          },
          {
            id: "16-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-16-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 16,
            lessonNumber: 5,
            title: "Introduction to Streaming and Real-Time Dashboards",
            description: "A brief overview of connecting to streaming data sources (e.g., IoT sensor data via Azure Stream Analytics)",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "A brief overview of connecting to streaming data sources (e.g., IoT sensor data via Azure Stream Analytics)",
              discussion: "This illustrates how Power BI can be used for real-time analytics, moving beyond static, refreshed reports.NEW",
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-17-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 17,
            lessonNumber: 1,
            title: "Introduction to Copilot (The AI Assistant)",
            description: "Using the new Copilot pane to summarize reports and generate insights using natural language.Lab: Use the Copilot pane to \"Summarize sales trends\" on a report page and ask follow-up questions about th",
            duration: 10,
            difficulty: 'advanced',
            tags: ["AI Features", "Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Using the new Copilot pane to summarize reports and generate insights using natural language.Lab: Use the Copilot pane to \"Summarize sales trends\" on a report page and ask follow-up questions about the data",
            },
          },
          {
            id: "17-2",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-17-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 17,
            lessonNumber: 2,
            title: "Copilot for DAX Generation (GA Oct 2025)",
            description: "Using Copilot in the DAX Query View to write and explain complex DAX measures from a natural language prompt.Lab: In the DAX Query View, prompt Copilot to \"Write a DAX query for YoY growth\" and then a",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "AI Features", "Time Intelligence", "2025 Features"],
            topic: 'DAX',
            content: {
              concept: "Using Copilot in the DAX Query View to write and explain complex DAX measures from a natural language prompt.Lab: In the DAX Query View, prompt Copilot to \"Write a DAX query for YoY growth\" and then ask it to \"Explain this query\" to understand the code",
            },
          },
          {
            id: "17-3",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-17-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 17,
            lessonNumber: 3,
            title: "Copilot for Report Building",
            description: "Using Copilot's natural language capabilities to generate full, multi-page reports from a high-level prompt.Lab: Prompt Copilot to \"Create a report page showing sales by region and category\" and refin",
            duration: 10,
            difficulty: 'advanced',
            tags: ["AI Features", "Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Using Copilot's natural language capabilities to generate full, multi-page reports from a high-level prompt.Lab: Prompt Copilot to \"Create a report page showing sales by region and category\" and refine the visuals it produces",
            },
          },
          {
            id: "17-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-17-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Key Concepts", timestamp: 180 },
              { title: "Detailed Discussion", timestamp: 540 },
              { title: "Advanced Topics", timestamp: 900 },
              { title: "Best Practices", timestamp: 1260 },
              { title: "Summary", timestamp: 1620 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-18-1",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-18-2",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
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
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-18-3",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 18,
            lessonNumber: 3,
            title: "Staying Current (The Power BI Monthly Update)",
            description: "Power BI changes every single month",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Power BI changes every single month",
              discussion: "Mastery is not a final destination; it is a process of continuous learning. The most important skill is \"learning how to learn.\" This lesson will point students to the critical resources for staying current: the official Microsoft Power BI Blog, key community YouTube channels 7, and community forums",
            },
          },
          {
            id: "18-4",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-18-4",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 18,
            lessonNumber: 4,
            title: "Downloadable Resources and Cheat-Sheets",
            description: "Providing students with downloadable datasets, solution files (.pbix), and quick-reference \"cheat sheets.\"",
            duration: 10,
            difficulty: 'advanced',
            tags: ["DAX", "Visualizations", "Power Query"],
            topic: 'DAX',
            content: {
              concept: "Providing students with downloadable datasets, solution files (.pbix), and quick-reference \"cheat sheets.\"",
              discussion: "This includes a DAX formula reference, a Power Query M tips sheet, and a visualization design checklist to support continued learning and on-the-job application",
            },
          },
          {
            id: "18-5",
            videoUrl: "https://www.youtube.com/watch?v=PLACEHOLDER-18-5",
            videoChapters: [
              { title: "Introduction", timestamp: 0 },
              { title: "Core Concepts", timestamp: 240 },
              { title: "Summary", timestamp: 480 }
            ],
            moduleNumber: 18,
            lessonNumber: 5,
            title: "Final Deliverable: Your LinkedIn Portfolio",
            description: "How to present the three capstone projects and your PL-300 certification badge on your professional profile to attract employers",
            duration: 10,
            difficulty: 'advanced',
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "How to present the three capstone projects and your PL-300 certification badge on your professional profile to attract employers",
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
