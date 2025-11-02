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
            content: {
              concept: "Business Intelligence (BI) is the comprehensive process of transforming raw data into coherent, visually immersive, and interactive insights to drive informed business decisions.8 This stands in contrast to traditional, static data analysis often performed in spreadsheets",
              discussion: "Traditional spreadsheets like Microsoft Excel, while familiar, have significant limitations when faced with modern data challenges. They often struggle with large data volumes, require time-consuming manual refresh processes, and produce static visualizations that are difficult to collaborate on.9 Modern BI platforms like Power BI are designed to solve these specific problems through scalable data handling, automated data refresh, and the creation of dynamic, interactive reports",
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
              discussion: "Installing Power BI Desktop is straightforward, but choosing the right installation method matters. The Microsoft Store version (recommended) updates automatically in the background, ensuring you always have the latest features and security updates. This version integrates seamlessly with Windows Update and requires minimal maintenance. The Direct Download (executable) version requires manual updates but offers more control for enterprise environments where IT departments need to manage software deployments centrally. For Mac users, Power BI Desktop is Windows-only, so you'll need a virtual machine environment like Parallels Desktop or VMware Fusion, or use a cloud-based Windows instance. As of September/October 2025, Power BI Desktop now supports native ARM-based Windows PCs, meaning it works on modern Windows laptops without x86 emulation, improving performance significantly.",
              labs: [
                "Open Microsoft Store on your Windows PC",
                "Search for 'Power BI Desktop'",
                "Click Install (the app is free)",
                "Wait for installation to complete",
                "Launch Power BI Desktop from Start menu or Store",
                "Verify installation: You should see the Power BI Desktop welcome screen",
                "Check version: File > Account to see your current version",
                "Note: The Store version will auto-update monthly with new features"
              ],
              keyPoints: [
                "Microsoft Store version auto-updates and is recommended for most users",
                "Direct Download version gives more control for enterprise environments",
                "Power BI Desktop is Windows-only (Mac users need virtualization)",
                "ARM support (2025) means native performance on modern Windows laptops",
                "The application is completely free with no licensing required"
              ],
              insiderTips: [
                "Always install from Microsoft Store for automatic updates - saves time in the long run",
                "If your organization blocks Store, use Direct Download but set calendar reminders for monthly updates",
                "For Mac users, Parallels Desktop offers the best performance for running Power BI Desktop",
                "ARM support means Surface Pro 9, Lenovo ThinkPad X13s, and similar devices now run Power BI natively",
                "After installation, check Preview Features in Options to enable the latest capabilities"
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
            content: {
              concept: "Power BI is updated on a monthly basis. Many of the most powerful new features are first released in \"preview\" and must be manually enabled by the user",
              discussion: "A critical first step for any new user is to navigate to File > Options and settings > Options > Preview features.1 Enabling these features (e.g., the new Model Explorer 26 or On-object interaction 1) not only provides access to the latest tools but also reinforces a core concept: the tool is in a constant state of evolution, and staying current is essential",
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
              discussion: "Power BI Desktop provides three distinct views that correspond to the three main stages of the BI workflow: Model, Inspect, and Visualize. Report View (the default view) is the canvas where visualizations are created and arranged. This is the \"what you see is what you get\" (WYSIWYG) editor where you drag fields into visuals, format them, and arrange them on pages. Data View resembles a spreadsheet interface where you can inspect the raw data after it's been loaded into the model. This view shows actual row data and allows you to create calculated columns. Model View is the \"engine room\" or diagram view that provides a visual representation of all tables in your data model and shows the relationships between them. Understanding these three views helps you navigate Power BI Desktop efficiently and understand where different tasks should be performed.",
              keyPoints: [
                "Report View = Visualize (build charts and reports)",
                "Data View = Inspect (see raw data and create calculated columns)",
                "Model View = Model (see relationships and data model structure)",
                "Each view serves a specific purpose in the Power BI workflow",
                "Switch between views using the icons on the left sidebar"
              ],
              insiderTips: [
                "Use Report View for building and formatting visualizations",
                "Use Data View to verify data after transformations and to create calculated columns",
                "Use Model View to understand relationships and troubleshoot filter propagation issues",
                "Keyboard shortcuts: Ctrl+D (Model View), Ctrl+E (Data View), Ctrl+R (Report View)",
                "The view icons are located on the left sidebar - learn their locations for quick navigation"
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
            content: {
              concept: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services",
              discussion: "The Get Data experience in Power BI Desktop is your gateway to connecting to data sources. Located in the Home ribbon, clicking Get Data opens a comprehensive dialog showing all available data connectors organized by categories: File (Excel, CSV, PDF, etc.), Database (SQL Server, Oracle, MySQL, etc.), Power Platform (Power BI datasets, Dataflows), Online Services (Salesforce, Dynamics 365, etc.), and many others. Power BI supports over 200 connectors out of the box, with additional connectors available in preview or through custom connectors. The Get Data dialog provides search functionality to quickly find the connector you need, and each connector typically has configuration options for authentication, connection settings, and data selection. After selecting a connector and configuring the connection, Power BI's Navigator dialog allows you to preview tables and data before loading, giving you the option to load the data directly or transform it first using Power Query Editor.",
              keyPoints: [
                "Get Data is the starting point for all Power BI projects",
                "Power BI supports 200+ data connectors covering files, databases, and cloud services",
                "Connectors are organized by category for easy navigation",
                "The Navigator dialog lets you preview data before loading",
                "You can Load data directly or Transform it first in Power Query"
              ],
              insiderTips: [
                "Use the search box in Get Data to quickly find connectors",
                "Always choose Transform instead of Load when possible - you'll almost always need to clean data",
                "Premium connectors (indicated by a diamond icon) require Premium or Pro licenses",
                "Check Preview Features for new connectors that might be in preview mode",
                "If you don't see a connector you need, check Microsoft's documentation for custom connector options"
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
            content: {
              concept: "Connecting to the most common flat-file data sources",
              discussion: "Connecting to files is one of the most common data acquisition tasks in Power BI. Excel Workbooks (.xlsx) can be connected to tables and worksheets. Power BI recognizes Excel Tables (created with Ctrl+T) and named ranges, making them easy to load. Best practices for Excel data include using proper Excel Tables, avoiding merged cells in headers, ensuring each column has a header, and keeping data in a single worksheet. Text/CSV Files (.csv) are ubiquitous for data export and easy to connect. Power BI automatically detects delimiters and data types. PDF files can extract data from tables found within documents - useful for legacy reports or documents that weren't designed for Power BI. Each file type has specific connection options, and Power BI provides preview functionality before loading. Always choose 'Transform Data' instead of 'Load' to clean data before loading into the model.",
              labs: [
                "Click Get Data in the Home ribbon",
                "Select 'Excel workbook' from the File category",
                "Browse to and select an Excel file",
                "In Navigator dialog, select the table/worksheet you want",
                "Click 'Transform Data' (not Load) to open Power Query",
                "Review the data preview to understand the structure",
                "Connect to a CSV file: Get Data > Text/CSV",
                "Select a CSV file and preview the data",
                "Power BI should auto-detect delimiter (comma, semicolon, etc.)",
                "Verify column headers and data types",
                "Click 'Transform Data' to open Power Query Editor",
                "Note: Always Transform first, then Close & Apply"
              ],
              keyPoints: [
                "Excel files: Connect to tables or worksheets - use Excel Tables for best results",
                "CSV files: Auto-detects delimiters and data types",
                "PDF files: Can extract tables from PDF documents",
                "Always choose 'Transform Data' instead of 'Load'",
                "Power BI provides preview functionality before loading"
              ],
              insiderTips: [
                "Use Excel Tables (Ctrl+T) in Excel for clean Power BI connections",
                "Avoid merged cells in Excel - Power BI will struggle with headers",
                "CSV delimiter auto-detection usually works, but you can manually set it",
                "PDF extraction works best with simple tables - complex formatting may fail",
                "Always preview data in Navigator before loading",
                "Best practice: Clean data in Excel before importing, or use Power Query transformations"
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
            tags: ["Data Acquisition", "Databases"],
            topic: 'Data Acquisition',
            content: {
              concept: "Connecting to relational databases, which form the backbone of most enterprise data systems",
              discussion: "Connecting to relational databases like SQL Server, Oracle, MySQL, or PostgreSQL is essential for enterprise Power BI projects. The primary example is SQL Server, which requires understanding Server Name (the computer/instance hosting the database, e.g., 'SERVER01' or 'SERVER01\\SQLEXPRESS' for named instances), Database Name (the specific database on the server, e.g., 'SalesDB'), and Authentication Mode. Windows Authentication uses your current Windows credentials to authenticate - seamless if you have database access. SQL Server Authentication requires a username and password provided by your DBA. Power BI supports both authentication methods, with Windows Authentication being more secure for on-premises databases. After connecting, Power BI's Navigator shows all tables, views, and stored procedures available. You can select specific tables or write custom SQL queries. Connection strings are saved in the .pbix file, but credentials are not stored for security.",
              keyPoints: [
                "Database connections require Server Name and Database Name",
                "Windows Authentication uses your Windows credentials",
                "SQL Server Authentication requires username/password",
                "Navigator shows tables, views, and stored procedures",
                "You can select tables or write custom SQL queries"
              ],
              labs: [
                "Click Get Data > Database > SQL Server database",
                "Enter Server Name (e.g., 'localhost' or 'SERVER01')",
                "Enter Database Name (e.g., 'AdventureWorks')",
                "Select authentication mode: Windows or SQL Server",
                "If SQL Server auth, enter username and password",
                "Click OK to connect",
                "In Navigator, browse available tables and views",
                "Select tables you need (check boxes)",
                "Click 'Transform Data' to open Power Query",
                "Optional: Click 'Advanced options' to write custom SQL"
              ],
              insiderTips: [
                "Get Server Name from your DBA or IT department",
                "Windows Authentication is preferred for on-premises databases",
                "SQL Server Authentication requires credentials provided by DBA",
                "Use views instead of tables when possible - views are pre-filtered/optimized",
                "Custom SQL lets you join tables or filter data before loading",
                "Test connection button verifies connectivity before proceeding",
                "Firewall issues? Work with IT to allow Power BI Desktop connections",
                "For production, use connection strings managed by IT/DBA"
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
            content: {
              concept: "Acquiring data directly from online sources",
              discussion: "A simple demonstration will involve the \"From Web\" connector to pull tabular data from a web page (e.g., a table from a Wikipedia article).35 This will also introduce the existence of connectors for cloud services like SharePoint folders 32 and Azure SQL Databases",
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
            description: "Applying the most common steps to clean messy data",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "Applying the most common steps to clean messy data",
              discussion: "Basic table transformations are the foundation of data cleaning in Power Query. These operations are used in nearly every Power BI project and should become second nature. Choosing and Removing Columns lets you select only the columns you need, reducing data size and improving performance. Removing unnecessary columns early in the transformation process saves memory and improves refresh times. Filtering Rows removes unwanted data (e.g., removing null or blank values, excluding test records, filtering by date ranges). Row filters are critical for data quality - removing bad data prevents misleading analysis. Sorting Data helps you understand data structure and identify outliers - it's also useful for organizing data before grouping or aggregating. Using 'Use First Row as Headers' (promoting headers) converts the first row of data into column headers - essential when headers aren't in the first row or when data comes from poorly formatted sources. These basic transformations form the foundation of data cleaning in Power Query.",
              labs: [
                "Open Power Query Editor: Click 'Transform Data' after connecting to data",
                "Remove unnecessary columns: Select columns > Right-click > Remove Columns",
                "Or choose specific columns: Home > Choose Columns > Select columns to keep",
                "Filter rows: Click the filter dropdown on a column header",
                "Remove blanks: Filter dropdown > Remove empty",
                "Remove nulls: Filter dropdown > Remove nulls",
                "Filter by value: Filter dropdown > Text filters > Equals/Contains/etc.",
                "Sort data: Click column header > Home > Sort Ascending/Descending",
                "Promote headers: If headers aren't in first row, Home > Use First Row as Headers",
                "Observe: All transformations appear in Applied Steps pane",
                "Undo: Right-click a step in Applied Steps > Delete",
                "Preview: Check data preview after each transformation"
              ],
              keyPoints: [
                "Remove unnecessary columns early to improve performance",
                "Filter rows to remove unwanted or bad data",
                "Sort data to understand structure and identify issues",
                "Promote headers when headers aren't in the first row",
                "All transformations are recorded in Applied Steps pane"
              ],
              insiderTips: [
                "Remove columns you don't need - reduces file size and improves performance",
                "Filter early in the pipeline - better to remove rows before expensive operations",
                "Use 'Choose Columns' to select exactly what you need (more control than Remove)",
                "Sort before Group By - helps you understand data structure",
                "Applied Steps are your audit trail - review them to understand transformations",
                "You can delete steps in Applied Steps pane to undo changes",
                "Always preview data after transformations to catch issues early"
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
            description: "Using Power Query parameters to make queries dynamic",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power Query"],
            topic: 'Power Query',
            content: {
              concept: "Using Power Query parameters to make queries dynamic",
              discussion: "Parameters make Power Query queries dynamic and reusable by allowing you to change inputs without modifying the query code. Instead of hardcoding values like file paths, server names, or date ranges in your queries, you create parameters that can be changed easily. For example, instead of hardcoding 'C:\\Data\\Sales_2023.xlsx', you create a parameter called 'FilePath' that you can change to point to different files. Parameters are created in the Power Query Editor under Manage Parameters, where you define a name, data type, suggested values, and default value. Once created, parameters appear in the Fields pane and can be used in queries by referencing them with ParameterName syntax (e.g., \"FilePath\"). Parameters make queries reusable across different files, servers, or time periods, and are essential for building maintainable Power BI solutions. They're particularly useful when you need to refresh data from different sources or filter data by different date ranges.",
              keyPoints: [
                "Parameters make queries dynamic and reusable",
                "Use parameters instead of hardcoding values (file paths, dates, etc.)",
                "Parameters are created in Manage Parameters dialog",
                "Reference parameters in queries using ParameterName syntax",
                "Parameters make queries maintainable and flexible"
              ],
              labs: [
                "Open Power Query Editor",
                "Click Manage Parameters > New Parameter",
                "Name: FilePath, Type: Text",
                "Set suggested values or default value",
                "Click OK to create parameter",
                "Use parameter in a query: In formula bar, reference as \"FilePath\"",
                "Create a Date parameter: Name: StartDate, Type: Date",
                "Use in date filter: Filter rows where Date >= StartDate",
                "Change parameter values: Manage Parameters > Edit Parameter",
                "Test: Change parameter value and refresh query"
              ],
              insiderTips: [
                "Use parameters for file paths - makes queries portable across environments",
                "Date parameters are great for filtering time-series data",
                "Parameter values can be changed in Power BI Desktop without editing queries",
                "Parameters appear in Fields pane after creation",
                "Use parameters for server names, database names, or connection strings",
                "Parameters make your queries reusable across different scenarios",
                "Pro tip: Create a parameter table in Excel to manage parameter values centrally"
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
            tags: ["Power Query", "M Language"],
            topic: 'Power Query',
            content: {
              concept: "This lesson serves to demystify the code behind Power Query, not to teach it (yet)",
              discussion: "Power Query's Advanced Editor reveals the code behind every transformation you perform in the UI. By clicking the 'Advanced Editor' button in the Home ribbon, you can see that every click made in the UI has been writing code in a functional language called 'M' (named after 'Mashup'). The M language is a functional programming language that uses a 'let...in' structure, where 'let' defines variables and 'in' returns the result. Each step in the Applied Steps pane corresponds to a line of M code. Understanding this connection helps you see that Power Query is actually writing code for you, making it easier to transition to writing M code manually when needed. Advanced Editor is useful for copying and pasting transformations, fixing errors, and understanding complex queries. This lesson demystifies the code to show that M isn't mysterious - it's just a different way of expressing the transformations you've already been doing visually.",
              keyPoints: [
                "Advanced Editor shows the M code behind UI transformations",
                "M is a functional programming language (not to be confused with DAX)",
                "Each Applied Step corresponds to M code",
                "M uses 'let...in' structure for variables and results",
                "Understanding M helps with debugging and advanced transformations"
              ],
              labs: [
                "Open Power Query Editor",
                "Perform some transformations: Remove columns, filter rows, change types",
                "Review Applied Steps pane - notice each transformation",
                "Click Advanced Editor button in Home ribbon",
                "Observe: M code showing all your transformations",
                "Notice: 'let' statements define steps, 'in' returns final result",
                "Copy M code: Select all > Copy (useful for sharing/queries)",
                "Close Advanced Editor (don't modify code yet)",
                "Compare: Each Applied Step matches M code sections"
              ],
              insiderTips: [
                "Advanced Editor is useful for copying queries between files",
                "M code can be shared via forums/Stack Overflow for troubleshooting",
                "Don't be intimidated by M code - it's just expressing what you did visually",
                "Use Advanced Editor to understand complex transformations",
                "M syntax: 'let' defines steps, 'in' returns result",
                "Advanced Editor provides syntax highlighting and error detection",
                "Pro tip: Learn M gradually - start by reading code, then write simple modifications"
              ]
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
              discussion: "Clicking 'Close & Apply' is the final step in Power Query that executes all applied transformations, closes the Power Query Editor, and loads the clean, transformed data into the Power BI data model. This action triggers Power BI to process all the M code transformations you've created, execute them against your data source(s), and load the results into the VertiPaq in-memory engine. The process can take time depending on data size and transformation complexity - you'll see a progress dialog. Once complete, the transformed data appears in Power BI Desktop's Data View, and you can build reports using the cleaned data. 'Close & Apply' is different from just closing the editor - it actually runs the transformations. You can also use 'Apply' (without closing) to load data and keep the editor open, or 'Close' to cancel changes. Always review your Applied Steps before closing to ensure you haven't introduced errors.",
              keyPoints: [
                "'Close & Apply' executes all transformations and loads data into Power BI",
                "This triggers data processing and loads results into the data model",
                "Process can take time depending on data size and transformations",
                "Transformed data appears in Data View after loading",
                "Review Applied Steps before closing to catch errors"
              ],
              labs: [
                "Complete all transformations in Power Query Editor",
                "Review Applied Steps pane - verify all transformations are correct",
                "Check data preview - ensure final data looks correct",
                "Click 'Close & Apply' button (top-left of Home ribbon)",
                "Observe: Progress dialog showing transformation execution",
                "Wait for loading to complete (may take several minutes for large datasets)",
                "Verify: Power Query Editor closes automatically",
                "Switch to Data View (left sidebar)",
                "Verify: Transformed data appears in tables",
                "Test: Switch to Report View and build a simple visual to verify data loaded"
              ],
              insiderTips: [
                "Always review Applied Steps before Close & Apply - catches errors early",
                "Close & Apply can take time for large datasets - be patient",
                "You can cancel Close & Apply if it's taking too long (Ctrl+C)",
                "After Close & Apply, data is loaded into memory - file size increases",
                "If transformations fail, check Applied Steps for errors (red X marks)",
                "Use 'Close' (not 'Close & Apply') if you want to discard changes",
                "Pro tip: Save your .pbix file before Close & Apply - provides recovery point"
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
            moduleNumber: 4,
            lessonNumber: 1,
            title: "Introduction to the Visualizations Pane",
            description: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types",
              discussion: "The Visualizations pane (right side of Power BI Desktop) contains all available chart types and visual options. The Fields pane (far right) contains your data model - all tables, columns, and measures. The core workflow for building a report is: 1. Select a visual type (e.g., Bar chart) from the Visualizations pane, which creates an empty visual on the canvas. 2. Drag data fields from the Fields pane into the visual's \"wells\" (configuration areas) - like X-axis, Y-axis, Legend, Values, Tooltips, etc. Each visual type has different wells for different purposes. For example, a bar chart has X-axis (categories), Y-axis (values), Legend (series), and Color wells. A table visual has Rows, Columns, and Values wells. Understanding which fields go into which wells is key to building effective visuals. Power BI provides over 30 built-in visual types, each optimized for different analytical purposes.",
              keyPoints: [
                "Visualizations pane contains chart types and visual options",
                "Fields pane contains data model (tables, columns, measures)",
                "Workflow: Select visual type, then drag fields into wells",
                "Each visual type has different wells (X-axis, Y-axis, Legend, etc.)",
                "Power BI provides 30+ built-in visual types"
              ],
              labs: [
                "Open Report View (default view in Power BI Desktop)",
                "Locate the Visualizations pane on the right",
                "Click the 'Stacked Bar Chart' icon to create a visual",
                "An empty visual appears on the canvas",
                "Open the Fields pane (rightmost pane)",
                "Drag a category field (e.g., Product Category) to X-axis well",
                "Drag a measure (e.g., Total Sales) to Y-axis well",
                "Observe: The chart updates automatically",
                "Try different visual types: Column Chart, Line Chart, Pie Chart",
                "Notice how wells change for different visual types"
              ],
              insiderTips: [
                "Right-click a visual to access Format options and settings",
                "Wells are color-coded - match field types to well types",
                "Numeric fields go to Values, text fields go to Axes/Legend",
                "Use Ctrl+click to select multiple visuals for bulk formatting",
                "Format pane (paint roller icon) customizes visual appearance",
                "Fields pane can be filtered - use the search box to find fields quickly",
                "Pro tip: Learn the keyboard shortcuts for common visuals (Alt+1, Alt+2, etc.)"
              ]
            },
          },
          {
            id: "4-2",
            moduleNumber: 4,
            lessonNumber: 2,
            title: "Creating Core Visuals (Hands-On Lab)",
            description: "Building the most common and effective chart types",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Building the most common and effective chart types",
              discussion: "This hands-on lab guides you through creating the most common and effective chart types in Power BI. Bar/Column Charts are perfect for categorical comparisons (e.g., Sales by Product Category) - use horizontal bars for long category names, vertical columns for shorter names. Line Charts excel at showing trends over time (e.g., Sales by Month) - they reveal patterns, seasonality, and trends that bar charts can't show. Pie Charts and Treemaps both show part-to-whole relationships, but Treemaps are generally preferred because they're easier to read and compare. Maps visualize geographical data (e.g., Sales by State) and provide spatial context that tables can't. Each visual type serves a specific analytical purpose, and choosing the right visual is crucial for effective data communication. This lab provides hands-on practice building each visual type with real data.",
              labs: [
                "Create a Bar Chart: Click Stacked Bar Chart in Visualizations pane",
                "Drag Product Category to Y-axis (horizontal bars)",
                "Drag Total Sales to X-axis (values)",
                "Observe: Horizontal bars comparing categories",
                "Create a Line Chart: Click Line Chart visual",
                "Drag Date (Month) to X-axis",
                "Drag Total Sales to Y-axis",
                "Observe: Trend line over time",
                "Create a Pie Chart: Click Pie Chart visual",
                "Drag Product Category to Legend",
                "Drag Total Sales to Values",
                "Observe: Proportion of total sales by category",
                "Create a Map: Click Map visual",
                "Drag State to Location field",
                "Drag Total Sales to Size or Color",
                "Observe: Geographic visualization of sales",
                "Format each visual: Use Format pane to customize colors, labels, titles"
              ],
              keyPoints: [
                "Bar/Column Charts: Best for categorical comparisons",
                "Line Charts: Best for trends over time",
                "Pie/Treemap: Best for part-to-whole relationships",
                "Maps: Best for geographical data visualization",
                "Choose visual type based on analytical purpose"
              ],
              insiderTips: [
                "Use horizontal bars when category names are long",
                "Line charts reveal trends better than bar charts for time series",
                "Treemaps are generally better than pie charts - easier to compare",
                "Maps require location fields (State, Country, City) to work",
                "Format visuals consistently across your report for professional appearance",
                "Add titles to visuals - helps users understand what they're seeing",
                "Pro tip: Use Alt text for accessibility - right-click visual > Format > Alt text"
              ]
            },
          },
          {
            id: "4-3",
            moduleNumber: 4,
            lessonNumber: 3,
            title: "Using Slicers for Interactivity",
            description: "Slicers are on-page visual filters (like a dropdown or list) that allow the end-user to interact with and filter the entire report page.49Lab: Add a \"Year\" slicer and a \"Region\" slicer. Demonstrate ho",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Slicers are on-page visual filters (like a dropdown or list) that allow the end-user to interact with and filter the entire report page.49Lab: Add a \"Year\" slicer and a \"Region\" slicer. Demonstrate how selecting a value in a slicer dynamically filters all other visuals on the page",
              discussion: "Slicers are interactive visual filters that allow end-users to filter reports without understanding the underlying data model. Unlike filters in the Filters pane (which are hidden), slicers are visible on the report page and provide a user-friendly way to interact with data. Slicers come in various formats: dropdown lists, lists with checkboxes, buttons, and slider ranges. Each format serves different use cases: dropdowns save space, lists with checkboxes allow multi-select, buttons provide quick selections, and sliders work well for numeric ranges like dates or quantities. When a user selects a value in a slicer, Power BI automatically filters all other visuals on the same page (and optionally across pages) through cross-filtering. This creates an interactive, exploratory experience where users can drill down into data by selecting different filter combinations. Slicers are essential for creating self-service BI reports that empower business users to explore data independently.",
              keyPoints: [
                "Slicers are visible, interactive filters on the report page",
                "Different slicer formats serve different use cases (dropdown, list, button, slider)",
                "Slicers automatically filter all visuals on the same page through cross-filtering",
                "Slicers create interactive, self-service BI experiences for end-users",
                "You can configure slicers to filter multiple pages or just the current page"
              ],
              labs: [
                "Add a Slicer visual to your report page",
                "Drag a Year field into the slicer",
                "Select a year value and observe how it filters other visuals",
                "Add a second slicer for Region",
                "Select both Year and Region and see combined filtering",
                "Change slicer format: Right-click slicer > Format > Style",
                "Try different formats: Dropdown, List, Button",
                "Verify all visuals update when slicer values change"
              ],
              insiderTips: [
                "Use dropdown slicers to save space on crowded report pages",
                "Use button slicers for common selections (e.g., 'This Month', 'Last Quarter')",
                "Slider slicers work great for date ranges and numeric ranges",
                "Multi-select in list slicers allows users to select multiple values at once",
                "You can configure slicers to sync across multiple pages in Format > Sync slicers",
                "Modern slicers (2025) offer app-like cross-highlighting features"
              ]
            },
          },
          {
            id: "4-4",
            moduleNumber: 4,
            lessonNumber: 4,
            title: "Displaying Key Metrics: Cards, KPIs, and Gauges",
            description: "Highlighting the most important, single-number metrics",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals"],
            topic: 'AI Features',
            content: {
              concept: "Highlighting the most important, single-number metrics",
              discussion: "Key performance indicators (KPIs) are single-number metrics that summarize business performance at a glance. Power BI provides three visual types specifically designed for displaying KPIs: Cards, KPI indicators, and Gauges. The Card visual displays a large, single number (like Total Sales, Customer Count, or Average Order Value) with optional labels and formatting. Cards are perfect for summary metrics at the top of dashboards. The KPI visual shows a metric against a target, with visual indicators (colors or icons) showing whether the metric is above or below the target. KPIs help executives quickly understand performance status without reading numbers. The Gauge visual displays a metric on a semi-circular gauge, showing progress toward a target or goal. Gauges are visually intuitive but take more space than cards, so use them sparingly. Understanding when to use each visual type helps create effective executive dashboards where key metrics are immediately visible and understandable.",
              keyPoints: [
                "Cards display single numbers and are perfect for summary metrics",
                "KPI visuals show metrics against targets with status indicators",
                "Gauges display metrics on semi-circular scales showing progress",
                "Use Cards for simple numbers, KPIs for target comparisons, Gauges for progress tracking",
                "Place key metrics at the top of dashboards for immediate visibility"
              ],
              labs: [
                "Add a Card visual to your report",
                "Drag Total Sales measure into the Card visual",
                "Format the card: Increase font size, add label",
                "Add a KPI visual to compare Sales to Target",
                "Set Target value in the KPI visual",
                "Observe the status indicator (green/yellow/red)",
                "Add a Gauge visual showing Sales progress",
                "Configure gauge thresholds and colors"
              ],
              insiderTips: [
                "Cards are the simplest and most space-efficient for summary metrics",
                "Use KPIs when you need to show performance against targets or goals",
                "Gauges are visually appealing but take space - use for critical metrics only",
                "Format cards with large fonts and clear labels for executive dashboards",
                "KPI status colors can be customized in Format > Status colors",
                "Cards can display measures, calculated columns, or direct column aggregations",
                "For multiple related metrics, consider using a Multi-row card visual"
              ]
            },
          },
          {
            id: "4-5",
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
              discussion: "Calculated columns are created in Data View or Model View and evaluated row-by-row using Row Context. This means the formula is applied to each row individually, similar to Excel formulas. To create a calculated column, navigate to Data View, select the table where you want to add the column, then click 'New Column' in the ribbon. The formula bar appears at the top, and you can write DAX expressions that reference other columns in the same table. The row context automatically provides access to all columns in the current row, so you can reference them directly by name (e.g., [FirstName], [Price]). Calculated columns are useful for text concatenation (like combining first and last names), categorization (like price ranges), and creating lookup values. Remember: use calculated columns sparingly and only when the result is needed in a slicer, axis, or filter.",
              labs: [
                "Open Data View: Click the Data View icon in the left sidebar",
                "Select the Customer table in the Fields pane",
                "Click 'New Column' in the Home ribbon",
                "Type the formula: Full Name = [FirstName] & \" \" & [LastName]",
                "Press Enter to create the column",
                "Verify: The Full Name column appears in the table",
                "Create a second column: Price Category",
                "Type: Price Category = IF([UnitPrice] > 100, \"High\", IF([UnitPrice] > 50, \"Medium\", \"Low\"))",
                "Verify: The Price Category column shows High/Medium/Low",
                "Switch to Model View and observe the new calculated columns"
              ],
              keyPoints: [
                "Calculated columns are created in Data View or Model View",
                "Row Context allows direct column references like [ColumnName]",
                "Calculated columns are evaluated row-by-row at refresh time",
                "Use calculated columns for text concatenation and categorization",
                "Remember: Only use when result is needed in slicers, axes, or filters"
              ],
              insiderTips: [
                "Use & operator for text concatenation (not + which is for numbers)",
                "IF statements can be nested for multiple conditions",
                "SWITCH() function is cleaner than nested IFs for multiple categories",
                "Calculated columns appear immediately in the table in Data View",
                "You can reference other calculated columns in the same table",
                "Always verify calculated column results by checking a few rows",
                "Calculated columns increase file size - avoid if you can use a measure instead"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Writing basic aggregation measures.77Lab:Total Sales = SUM(Sales)Avg. Price = AVERAGE(Sales[UnitPrice])Order Count = COUNT(Sales[OrderLineKey])",
              discussion: "Measures are the primary way to create calculations in Power BI. Unlike calculated columns, measures are evaluated at query time based on Filter Context, meaning they respond dynamically to slicers, filters, and visual selections. To create a measure, you can right-click a table in the Fields pane and select 'New Measure', or use the Measure button in the Home ribbon. Measures are stored in tables but can reference columns from any table in the model. Basic aggregation measures use functions like SUM(), AVERAGE(), COUNT(), MIN(), MAX(), and COUNTA(). These functions operate on entire columns within the current filter context. When you place a measure in a visual, Power BI evaluates it for each cell in that visual, applying the filters from slicers, other visuals, and the visual's own axes. This dynamic behavior makes measures incredibly powerful and flexible.",
              labs: [
                "Right-click the Sales table in the Fields pane",
                "Select 'New Measure' from the context menu",
                "Type the formula: Total Sales = SUM(Sales[SalesAmount])",
                "Press Enter or click the checkmark to create the measure",
                "Verify: Total Sales appears in the Sales table in the Fields pane",
                "Create a second measure: Avg. Price = AVERAGE(Sales[UnitPrice])",
                "Create a third measure: Order Count = COUNT(Sales[OrderLineKey])",
                "Drag Total Sales into a Card visual",
                "Observe: The measure calculates total sales",
                "Add a slicer and verify the measure updates dynamically"
              ],
              keyPoints: [
                "Measures are created by right-clicking a table and selecting 'New Measure'",
                "Measures use aggregation functions: SUM(), AVERAGE(), COUNT(), etc.",
                "Measures are evaluated at query time based on Filter Context",
                "Measures respond dynamically to slicers and filters",
                "Measures are stored in tables but can reference any table in the model"
              ],
              insiderTips: [
                "Always name measures clearly: 'Total Sales' not 'Sales' (avoids confusion with columns)",
                "Measures appear with a calculator icon (fx) in the Fields pane",
                "You can create measures in Report View, Data View, or Model View",
                "Format measures: Right-click measure > Format to set number format",
                "Use DAX IntelliSense in the formula bar for function suggestions",
                "Test measures by placing them in visuals and changing filters",
                "Measures are case-insensitive, but use consistent naming conventions",
                "Pro tip: Create a dedicated 'Measures' table to organize all measures in one place"
              ]
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
              concept: "Power BI creates measures in two ways: implicitly (automatically) and explicitly (manually). Understanding this distinction is crucial for professional Power BI development.",
              discussion: "Implicit measures are created automatically when you drag a numeric column into the Values area of a visual. Power BI automatically applies an aggregation (usually SUM for numbers, COUNT for text). For example, dragging SalesAmount into a bar chart creates an implicit measure called 'SalesAmount' with SUM aggregation. These measures appear in the Fields pane with a calculator icon but are temporary and disappear if you remove them from the visual. Explicit measures are those you create manually using DAX formulas (like 'Total Sales = SUM(Sales[SalesAmount])'). These measures are permanent, reusable, and give you full control over the calculation logic. Best Practice: Professional developers always create explicit measures. This provides central control, reusability, clarity, and consistency. Implicit measures should be disabled in model settings to force developers to create explicit measures. This prevents accidental aggregation mismatches and ensures all calculations are intentional and documented.",
              keyPoints: [
                "Implicit measures are auto-created when dragging columns into visuals",
                "Explicit measures are manually created with DAX formulas",
                "Professional developers always create explicit measures",
                "Explicit measures provide central control and reusability",
                "Implicit measures should be disabled in model settings"
              ],
              insiderTips: [
                "Disable implicit measures: File > Options > Current File > Data Load > Uncheck 'Allow measures to be implicitly created'",
                "Explicit measures give you control - implicit measures are always SUM (may not be what you want)",
                "Implicit measures can't be reused across visuals - you'd have to drag the column again",
                "Explicit measures can be formatted once and applied consistently everywhere",
                "If your measure shows as 'SalesAmount' (column name), it's implicit - create an explicit 'Total Sales' measure instead",
                "Explicit measures are essential for complex calculations - implicit measures can't do time intelligence, ratios, etc.",
                "Best practice: Create all measures explicitly, even simple ones like SUM()"
              ]
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
              discussion: "Quick Measures are a powerful learning tool that generate DAX code automatically through a user-friendly interface. Located in the Home ribbon (New Quick Measure), Quick Measures provides templates for common calculations like Running Totals, Percent of Grand Total, Year-over-Year Growth, Moving Averages, and more. To create a Quick Measure, you select a template, fill in the required fields (base measure, field for calculation, etc.), and Power BI generates the DAX code automatically. This is incredibly valuable for beginners because you can see the DAX code Power BI generates, study it, and learn how to write similar formulas yourself. Quick Measures help bridge the gap between knowing what you want to calculate and knowing how to write the DAX code. After creating a Quick Measure, you can view and modify the generated DAX code, making it a great learning resource. Many professional developers use Quick Measures as a starting point and then customize the code for their specific needs.",
              keyPoints: [
                "Quick Measures generate DAX code automatically through UI",
                "Provides templates for common calculations (running totals, percentages, etc.)",
                "View generated DAX code to learn how calculations work",
                "Great learning tool for understanding DAX patterns",
                "You can modify Quick Measure code after creation"
              ],
              labs: [
                "Right-click a table in Fields pane > New Quick Measure",
                "Browse Quick Measure templates: Running total, % of grand total, YoY growth, etc.",
                "Select 'Running Total' template",
                "Fill in required fields: Base measure, Date field",
                "Click OK to create Quick Measure",
                "Observe: Quick Measure appears in Fields pane",
                "View DAX code: Right-click Quick Measure > Edit",
                "Study the generated DAX code",
                "Create another: 'Percent of Grand Total'",
                "Review generated code to understand pattern",
                "Modify generated code if needed for customization"
              ],
              insiderTips: [
                "Quick Measures are a great way to learn DAX patterns",
                "Always review the generated DAX code - that's where the learning happens",
                "Use Quick Measures as starting points, then customize for your needs",
                "Common Quick Measures: Running Total, % of Total, YoY Growth, Moving Average",
                "Quick Measures save time for common calculations",
                "Generated code follows DAX best practices - study the patterns",
                "Pro tip: Create Quick Measures, study the code, then write similar measures manually to reinforce learning"
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
              discussion: "Evaluation Context is the fundamental concept that makes DAX powerful and, for beginners, confusing. Unlike Excel formulas that always return the same value for a cell, DAX formulas return different values depending on the context in which they're evaluated. There are two types of evaluation context: Row Context and Filter Context. Row Context is the context that iterates through a table one row at a time, like when you're in a calculated column or using an iterator function like SUMX(). Filter Context is the set of filters applied when evaluating a measure - including slicers, visual axes, and other filters. Understanding evaluation context is the secret to mastering DAX because it determines how your formulas behave. A measure that works correctly in one visual might behave differently in another visual if the filter context changes. Mastering this concept separates DAX beginners from experts.",
              keyPoints: [
                "Evaluation context determines how DAX formulas behave",
                "Row Context: iterates through rows (calculated columns, iterators)",
                "Filter Context: filters applied to measures (slicers, visual axes)",
                "DAX results change based on context - same formula, different results",
                "Understanding context is essential for debugging DAX formulas"
              ],
              insiderTips: [
                "When a measure returns unexpected values, first check the filter context",
                "Use the 'Evaluate Formula' feature (right-click measure) to see the current context",
                "Row Context exists by default in calculated columns - no need to create it",
                "Filter Context is created by visual selections - measures respond to this automatically",
                "The most common DAX mistakes come from misunderstanding evaluation context",
                "Pro tip: Test measures in different visuals to understand how context affects them",
                "Context Transition occurs when CALCULATE() is used in Row Context - this is advanced"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "A context that iterates through a table one row at a time",
              discussion: "Row Context is the evaluation context that iterates through a table one row at a time, similar to how Excel formulas work on individual cells. This context exists automatically in Calculated Columns - when you write a formula like [Quantity] * [UnitPrice], Power BI evaluates it for each row individually. The Row Context provides access to all columns in the current row, so you can reference them directly by name (like [Quantity], [Price]) without needing table references. Row Context is also created by iterator functions (functions ending in 'X' like SUMX, AVERAGEX, COUNTX) when they iterate through a table. Understanding Row Context is crucial because it's the default behavior in calculated columns, and it's how you perform row-by-row calculations. When Row Context doesn't exist (like in simple measures), you need to use aggregation functions or create Row Context with iterators.",
              keyPoints: [
                "Row Context iterates through a table row-by-row",
                "Row Context exists automatically in calculated columns",
                "Row Context allows direct column references like [ColumnName]",
                "Iterator functions (SUMX, etc.) create Row Context",
                "Row Context is needed for row-by-row calculations"
              ],
              insiderTips: [
                "In calculated columns, Row Context exists automatically - just reference columns directly",
                "Iterator functions create Row Context within measures - that's why SUMX() works",
                "If you get 'A table of multiple values was supplied' error, you need Row Context (use an iterator)",
                "Row Context + Filter Context can coexist - iterator functions maintain both",
                "Common mistake: Trying to use [Column] directly in a measure without SUMX() - need to create Row Context first",
                "Debugging tip: If a formula works in a calculated column but not in a measure, check if you need Row Context"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "The set of all filters applied to a measure before it is calculated",
              discussion: "Filter Context is the set of all filters applied when evaluating a measure. Imagine a matrix visual with Total Sales in the Values, Region on Rows, and Year on Columns. The Total Sales value for the cell at the intersection of \"East\" and \"2023\" is calculated within a filter context of Region = \"East\" AND Year = 2023. Filter Context comes from three sources: slicers (user selections), filters on other visuals (cross-filtering), and the visual's own coordinates (rows, columns, axes). All these filters combine to create the Filter Context for each cell in the visual. This is why the same measure shows different values in different cells - each cell has a different Filter Context. Filter Context is what makes measures dynamic and responsive to user interactions. Understanding Filter Context is essential because it explains why measures change when you interact with slicers or visuals - the Filter Context changes, so the measure result changes.",
              keyPoints: [
                "Filter Context is the set of all filters applied to a measure",
                "Filter Context comes from slicers, visual filters, and visual axes",
                "Each cell in a visual has its own Filter Context",
                "Filter Context makes measures dynamic and responsive",
                "Measures automatically respect Filter Context - this is their power"
              ],
              insiderTips: [
                "Filter Context is always active in measures - you don't need to create it",
                "Slicers automatically modify Filter Context for all visuals on the page",
                "Cross-filtering between visuals creates Filter Context",
                "The same measure shows different values in different cells because Filter Context differs",
                "Debugging tip: If a measure shows unexpected values, check the Filter Context",
                "CALCULATE() is the only function that can modify Filter Context",
                "Understanding Filter Context is the key to understanding why measures work as they do"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Iterators, or \"X-functions,\" are functions that create a row context within a measure, allowing for row-by-row calculations",
              discussion: "Iterator functions (functions ending in 'X' like SUMX, AVERAGEX, COUNTX, MINX, MAXX) are the solution to the \"Total Price\" problem from Module 6. Instead of creating a memory-intensive calculated column for [Quantity] * [UnitPrice], you create a measure: Total Sales = SUMX(Sales, Sales[Quantity] * Sales[UnitPrice]). This formula instructs Power BI to: go to the Sales table (within the current Filter Context), iterate row-by-row (creating Row Context), for each row calculate [Quantity] * [UnitPrice] and store the result in temporary memory, after iterating all rows SUM up all the temporary results. This provides the correct aggregation without bloating the model, adhering to the \"Measures > Columns\" golden rule. Iterator functions create Row Context within measures, allowing you to perform row-by-row calculations that can then be aggregated. This is essential for calculations like weighted averages, conditional aggregations, and row-by-row logic.",
              keyPoints: [
                "Iterator functions (SUMX, AVERAGEX, etc.) create Row Context in measures",
                "Use iterators for row-by-row calculations that need aggregation",
                "SUMX() is the solution to the 'Total Price' problem - avoids calculated columns",
                "Iterator functions iterate through a table, then aggregate the results",
                "This is the professional way to do row-by-row calculations in measures"
              ],
              labs: [
                "Create a measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create another measure: Total Sales with SUMX = SUMX(Sales, Sales[Quantity] * Sales[UnitPrice])",
                "Compare both measures in visuals - they should show the same result",
                "Create a weighted average: Weighted Avg Price = AVERAGEX(Sales, Sales[UnitPrice] * Sales[Quantity]) / SUM(Sales[Quantity])",
                "Create a conditional sum: High Value Sales = SUMX(Sales, IF(Sales[SalesAmount] > 100, Sales[SalesAmount], 0))",
                "Test measures with different slicer selections",
                "Verify measures update dynamically with Filter Context"
              ],
              insiderTips: [
                "SUMX() is usually the first iterator you'll learn - it's the most common",
                "Use iterators when you need row-by-row logic before aggregation",
                "Iterators work within Filter Context - they respect slicers and filters",
                "Performance tip: Iterators can be slower than simple aggregations - use them only when needed",
                "Common pattern: SUMX(table, [column1] * [column2]) for calculated totals",
                "AVERAGEX() is useful for weighted averages or conditional averages",
                "If you're thinking of creating a calculated column for math, consider SUMX() instead"
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
            moduleNumber: 8,
            lessonNumber: 1,
            title: "The Most Important Function in DAX: CALCULATE()",
            description: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context.90Syntax: CALCULATE( <expression>, <filter1>, <filter2>,... )",
            duration: 10,
            difficulty: 'intermediate',
            tags: ["DAX", "Critical Concept"],
            topic: 'DAX',
            content: {
              concept: "CALCULATE() is the most powerful and important function in DAX. It is the only function that can modify the filter context.90Syntax: CALCULATE( <expression>, <filter1>, <filter2>,... )",
              discussion: "CALCULATE() is the most important function in DAX because it's the only function that can modify Filter Context. The syntax is CALCULATE(<expression>, <filter1>, <filter2>, ...). The first argument is the measure or expression to be evaluated. All subsequent arguments are new filters that modify the existing Filter Context. These filters can override existing filters (e.g., ignore a slicer selection) or add new filters (e.g., filter by a specific region). CALCULATE() is used everywhere in advanced DAX - for percentages, time intelligence, conditional aggregations, and complex business logic. Understanding CALCULATE() is the gateway to advanced DAX mastery. The mental model: CALCULATE evaluates the expression in a modified Filter Context - it takes the current Filter Context, applies your new filters, then evaluates the expression in that new context.",
              keyPoints: [
                "CALCULATE() is the only function that can modify Filter Context",
                "Syntax: CALCULATE(expression, filter1, filter2, ...)",
                "First argument = what to calculate, subsequent arguments = filters to apply",
                "CALCULATE can override existing filters or add new filters",
                "Mastering CALCULATE() is essential for advanced DAX"
              ],
              labs: [
                "Create a base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create a filtered measure: East Sales = CALCULATE([Total Sales], Customers[Region] = \"East\")",
                "Test both measures in a visual with a Region slicer",
                "Observe: East Sales always shows East region, ignoring slicer",
                "Create: All Region Sales = CALCULATE([Total Sales], ALL(Customers[Region]))",
                "Observe: This measure ignores Region filters",
                "Create: Multiple Filters = CALCULATE([Total Sales], Customers[Region] = \"East\", Date[Year] = 2023)",
                "Test how CALCULATE modifies Filter Context"
              ],
              insiderTips: [
                "CALCULATE() is used in 80%+ of advanced DAX formulas",
                "Mental model: CALCULATE = 'calculate this expression with these filters'",
                "Filters in CALCULATE are additive (AND logic) unless you use ALL()",
                "CALCULATE filters override existing filters on the same column",
                "Common pattern: CALCULATE([Measure], Table[Column] = \"Value\")",
                "CALCULATE respects Filter Context from slicers unless you explicitly override it",
                "Pro tip: Learn CALCULATE() thoroughly - it's the foundation of advanced DAX",
                "If a measure isn't working, check if you need CALCULATE() to modify Filter Context"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "The ALL() function removes filters from a table or column.96 Its primary use is as a filter modifier inside CALCULATE()",
              discussion: "The ALL() function removes filters from a table or column. Its primary use is as a filter modifier inside CALCULATE() to create 'Percent of Total' calculations. For example: % of Total Sales = DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Customers))). Here, ALL(Customers) removes all filters on the Customers table, so the denominator calculates total sales for all customers, regardless of slicer selections. This is the key to creating percentage calculations. ALL() can remove filters from a specific column (ALL(Customers[Region])), a specific table (ALL(Customers)), or multiple tables (ALL(Customers, Date)). When used in CALCULATE(), ALL() removes the specified filters from the Filter Context, allowing you to compare filtered values to unfiltered totals. This pattern is used extensively in business analytics for comparing actuals to totals, categories to overall averages, and time periods to full periods.",
              keyPoints: [
                "ALL() removes filters from a table or column",
                "ALL() is primarily used inside CALCULATE() as a filter modifier",
                "ALL() is the key to creating 'Percent of Total' calculations",
                "ALL() can remove filters from a column, table, or multiple tables",
                "This pattern compares filtered values to unfiltered totals"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create measure: All Region Sales = CALCULATE([Total Sales], ALL(Customers[Region]))",
                "Test: All Region Sales should ignore Region slicer",
                "Create: % of Total Sales = DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Customers)))",
                "Place in a matrix with Region on rows",
                "Observe: Each row shows % of total for that region",
                "Add a Year slicer and verify percentage recalculates",
                "Create: % of Category = DIVIDE([Total Sales], CALCULATE([Total Sales], ALL(Products[Category])))"
              ],
              insiderTips: [
                "ALL() is the most common filter modifier in CALCULATE()",
                "Pattern: DIVIDE([Filtered Measure], CALCULATE([Same Measure], ALL(...))) = % of Total",
                "ALL(Customers[Region]) removes only Region filter; ALL(Customers) removes all Customer filters",
                "Use ALL() when you need to compare a filtered value to an unfiltered total",
                "ALL() works with CALCULATE() to modify Filter Context",
                "Common mistake: Forgetting ALL() when calculating percentages",
                "Pro tip: ALL() is your friend for 'ignore slicer' calculations"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "Nuanced versions of ALL() for more complex scenarios",
              discussion: "ALLEXCEPT() and ALLSELECTED() are sophisticated variations of ALL() for complex filtering scenarios. ALLEXCEPT(Table, Column1, Column2, ...) removes all filters from a table EXCEPT for the specified columns. This is useful when you want to remove most filters but keep specific ones (e.g., keep Year filter but remove Month filter). ALLSELECTED() removes filters from the visual context but respects filters from slicers or other visuals. This is perfect for 'Percent of Visible Total' calculations where you want the percentage relative to what's visible in the visual, not the entire dataset. For example: % of Visible Total = DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED())). This calculates the percentage relative to the total of all rows visible in the current visual, regardless of slicer selections. Understanding these nuanced functions is essential for complex business scenarios where simple ALL() isn't sufficient.",
              keyPoints: [
                "ALLEXCEPT() removes all filters EXCEPT specified columns",
                "ALLSELECTED() removes visual context but respects slicers",
                "ALLEXCEPT() is useful for keeping specific filters while removing others",
                "ALLSELECTED() is perfect for 'Percent of Visible Total' calculations",
                "These functions handle complex filtering scenarios"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create: Sales All Except Year = CALCULATE([Total Sales], ALLEXCEPT(Date, Date[Year]))",
                "Test: This should remove Month/Day filters but keep Year filter",
                "Create: % of Visible = DIVIDE([Total Sales], CALCULATE([Total Sales], ALLSELECTED()))",
                "Place in a matrix with Region and Category",
                "Observe: % calculated relative to visible rows, not entire dataset",
                "Add slicers and verify ALLSELECTED() behavior",
                "Compare ALL() vs ALLSELECTED() vs ALLEXCEPT() behaviors"
              ],
              insiderTips: [
                "ALLEXCEPT() syntax: ALLEXCEPT(Table, Column1, Column2) - removes all EXCEPT these columns",
                "ALLSELECTED() respects slicer selections - that's its key behavior",
                "Use ALLEXCEPT() when you want partial filtering (keep some, remove others)",
                "Use ALLSELECTED() for 'visible total' percentages in matrix visuals",
                "ALLSELECTED() is particularly useful in matrix tables with multiple row/column groupings",
                "These functions are advanced - master basic ALL() first",
                "Common scenario: ALLEXCEPT(Date, Date[Year]) for year-level totals while filtering by month"
              ]
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
            tags: ["DAX"],
            topic: 'DAX',
            content: {
              concept: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\"",
              discussion: "Context Transition is an advanced but powerful mechanism that occurs when CALCULATE() is used inside a Row Context. This transitions the current row's values into an equivalent Filter Context. For example, create a calculated column in the Customer table: Total Spend = CALCULATE(SUM(Sales[SalesAmount])). For each row in the Customer table, Context Transition converts the CustomerKey into a filter, calculating the total sales for only that specific customer. This is powerful because it allows you to use measures (which need Filter Context) inside calculated columns (which have Row Context). Context Transition happens automatically when CALCULATE() is used in Row Context - you don't need to do anything special. Understanding Context Transition is essential for advanced DAX scenarios like calculating row-level aggregations, customer-level totals, and hierarchical calculations. This is one of the most advanced DAX concepts and is commonly misunderstood by beginners.",
              keyPoints: [
                "Context Transition occurs when CALCULATE() is used in Row Context",
                "Converts row values into Filter Context automatically",
                "Allows using measures in calculated columns",
                "Powerful for row-level aggregations",
                "Advanced concept - requires understanding both Row and Filter Context"
              ],
              labs: [
                "Open Data View and select Customer table",
                "Create calculated column: Total Spend = CALCULATE(SUM(Sales[SalesAmount]))",
                "Observe: Each customer row shows that customer's total sales",
                "Verify: Context Transition converted CustomerKey to filter",
                "Create another: Order Count = CALCULATE(COUNT(Sales[OrderID]))",
                "Test with different customer rows",
                "Compare: Calculated column vs Measure behavior"
              ],
              insiderTips: [
                "Context Transition happens automatically - CALCULATE() in Row Context triggers it",
                "This is why CALCULATE(SUM()) works in calculated columns",
                "Context Transition is powerful but can be confusing - understand Row Context first",
                "Common use case: Calculate customer-level totals in Customer table",
                "Context Transition + Filter Context can combine for complex calculations",
                "This is advanced DAX - master basics before diving deep",
                "Pro tip: Use Context Transition for row-level aggregations in calculated columns"
              ]
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
              discussion: "USERELATIONSHIP() is a CALCULATE() filter modifier that activates an inactive relationship in the model. This is essential for role-playing dimensions where one Date table needs to filter the fact table through multiple foreign keys (e.g., OrderDateKey, ShipDateKey, DueDateKey). In the model, only one relationship between Date and Fact can be active at a time. USERELATIONSHIP() allows you to activate a different relationship for a specific measure calculation. For example: Sales by Ship Date = CALCULATE([Total Sales], USERELATIONSHIP('Date'[Date], Sales[ShipDateKey])). This measure uses the ShipDate relationship instead of the default OrderDate relationship. USERELATIONSHIP() is only used inside CALCULATE() and only works with inactive relationships. This advanced pattern is essential for complex data models with multiple date relationships and is commonly tested on the PL-300 certification exam.",
              keyPoints: [
                "USERELATIONSHIP() activates inactive relationships in CALCULATE()",
                "Essential for role-playing dimensions (multiple date relationships)",
                "Only one relationship can be active between two tables",
                "USERELATIONSHIP() allows using different relationships per measure",
                "Common pattern: Multiple date columns (OrderDate, ShipDate, etc.)"
              ],
              labs: [
                "Review model: Check for inactive relationships in Model View",
                "Create measure: Sales by Order Date = [Total Sales]",
                "Create measure: Sales by Ship Date = CALCULATE([Total Sales], USERELATIONSHIP('Date'[Date], Sales[ShipDateKey]))",
                "Compare both measures in visuals - they should show different values",
                "Create: Sales by Due Date = CALCULATE([Total Sales], USERELATIONSHIP('Date'[Date], Sales[DueDateKey]))",
                "Place all three measures in a matrix with Date on rows",
                "Observe: Each measure uses a different date relationship",
                "Test with date slicers to verify relationship behavior"
              ],
              insiderTips: [
                "USERELATIONSHIP() requires an inactive relationship - create it in Model View first",
                "Only use USERELATIONSHIP() inside CALCULATE() - it won't work elsewhere",
                "Role-playing dimensions are the most common use case for USERELATIONSHIP()",
                "Mark default relationship as active, others as inactive",
                "Test USERELATIONSHIP() measures carefully - wrong relationship = wrong results",
                "This is a PL-300 exam favorite - understand it thoroughly",
                "Pro tip: Name inactive relationships clearly in Model View for easy reference"
              ]
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
              discussion: "Visual Calculations (GA Oct 2025) are a new, simpler way to add calculations directly on visuals without writing DAX measures. Instead of creating complex DAX measures for calculations like running totals or moving averages, Visual Calculations operate on the visual's data matrix directly. To use Visual Calculations, select a visual, then click 'Add calculation' in the format pane. You can choose from pre-built calculation types like Running Total, Percent of Total, Moving Average, Difference from Previous, and more. Visual Calculations are simpler because they work on the visual's structure (rows, columns) rather than the full data model, making them more intuitive for beginners. However, DAX measures are still more powerful for complex business logic. Visual Calculations are perfect for quick calculations directly on visuals, while DAX measures remain essential for reusable, complex calculations. This feature represents Microsoft's commitment to making Power BI more accessible to users without deep DAX knowledge.",
              keyPoints: [
                "Visual Calculations add calculations directly on visuals without DAX",
                "Simpler than writing DAX measures for common calculations",
                "Operate on visual's data matrix, not full data model",
                "Pre-built calculation types: Running Total, Moving Average, etc.",
                "DAX measures still more powerful for complex business logic"
              ],
              labs: [
                "Create a line chart with Date (Month) on X-axis and Total Sales on Y-axis",
                "Select the visual and open Format pane",
                "Find 'Add calculation' option in format settings",
                "Click 'Add calculation' > Select 'Running Total'",
                "Observe: Running total appears automatically",
                "Add another: 'Moving Average' (3-month)",
                "Compare to traditional DAX measures",
                "Try 'Percent of Total' calculation",
                "Compare Visual Calculations vs DAX measures"
              ],
              insiderTips: [
                "Visual Calculations are simpler but less flexible than DAX",
                "Perfect for beginners who want quick calculations without DAX",
                "DAX measures are still essential for complex business logic",
                "Visual Calculations work on visual structure (rows/columns)",
                "Pre-built types: Running Total, Moving Avg, % of Total, Difference, etc.",
                "Pro tip: Use Visual Calculations for prototyping, DAX measures for production",
                "Visual Calculations (Oct 2025 GA) - ensure you have latest Power BI Desktop version"
              ]
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
              discussion: "A Date table is absolutely required for Time Intelligence functions to work in Power BI. This dedicated table must contain one row for every day in the desired range (e.g., Jan 1, 2020 to Dec 31, 2030), with no gaps or missing dates. The Date table must be 'Marked as Date Table' in Model View (right-click table > Mark as Date Table) so Power BI recognizes it as a time dimension. This table can be created in Power Query using 'New Source > Blank Query' and M code, or using DAX with CALENDARAUTO() or CALENDAR() functions. The Date table should have a Date column (the primary key) and additional columns like Year, Month, MonthName, Quarter, Weekday, etc. for easy filtering and grouping. Time Intelligence functions like TOTALYTD(), SAMEPERIODLASTYEAR(), and DATESINPERIOD() all require this Date table to function correctly. Without a properly marked Date table, these functions will return errors or incorrect results.",
              keyPoints: [
                "Date table is required for Time Intelligence functions",
                "Must contain one row per day with no gaps",
                "Must be 'Marked as Date Table' in Model View",
                "Can be created in Power Query (M) or DAX (CALENDARAUTO())",
                "Date column should have additional columns (Year, Month, etc.)"
              ],
              labs: [
                "Create Date table: Right-click Fields pane > New Table",
                "Type: Date = CALENDARAUTO()",
                "Press Enter to create the table",
                "Verify: Table contains one row per day",
                "Add columns: Year = YEAR(Date[Date]), Month = MONTH(Date[Date]), etc.",
                "Go to Model View: Click Model View icon (left sidebar)",
                "Right-click Date table > Mark as Date Table",
                "Select Date column as the date column",
                "Verify: Date table shows calendar icon",
                "Create relationship: Link Date[Date] to Sales[OrderDate]"
              ],
              insiderTips: [
                "CALENDARAUTO() automatically detects date range from your data model",
                "CALENDAR(start, end) creates specific date range",
                "Always mark Date table - Time Intelligence won't work without it",
                "Add useful columns: Year, Month, Quarter, Weekday for easy grouping",
                "Date table should cover your full date range plus future dates",
                "Common mistake: Using actual date columns from fact table - won't work!",
                "Pro tip: Use CALENDARAUTO() - it automatically updates when data changes"
              ]
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
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Calculating running totals for common time periods.99Lab: Create Sales YTD = TOTALYTD(, 'Date' ).99 This single function replaces complex, manual sum logic",
              discussion: "Time Intelligence functions provide simple, powerful ways to calculate running totals and period-to-date values. TOTALYTD() calculates Year-to-Date totals - the sum of all values from the start of the year to the current date. For example, if you're viewing March 2023, YTD shows the sum of January + February + March 2023. Similarly, TOTALQTD() calculates Quarter-to-Date, and TOTALMTD() calculates Month-to-Date. These functions automatically handle the date logic, eliminating the need for complex conditional logic. The syntax is TOTALYTD(<expression>, <date_column>, [<filter>], [<year_end_date>]). The expression is typically a measure like [Total Sales], the date_column is the Date column from your Date table, and optional filters can further restrict the calculation. These functions are essential for business reporting where executives need to see cumulative performance throughout the year. Without Time Intelligence functions, you'd need complex nested IF statements or calculated columns - Time Intelligence makes it elegant and simple.",
              keyPoints: [
                "TOTALYTD() calculates running total from start of year to current date",
                "TOTALQTD() calculates quarter-to-date totals",
                "TOTALMTD() calculates month-to-date totals",
                "These functions automatically handle date logic",
                "Essential for business reporting and executive dashboards"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create YTD measure: Sales YTD = TOTALYTD([Total Sales], 'Date'[Date])",
                "Place in a matrix with Date (Month) on rows",
                "Observe: YTD shows cumulative totals (Jan, Jan+Feb, Jan+Feb+Mar, etc.)",
                "Create QTD measure: Sales QTD = TOTALQTD([Total Sales], 'Date'[Date])",
                "Create MTD measure: Sales MTD = TOTALMTD([Total Sales], 'Date'[Date])",
                "Compare all three measures in visuals",
                "Add Year slicer and verify measures update correctly",
                "Test with different date filters"
              ],
              insiderTips: [
                "TOTALYTD() requires Date table marked as Date Table",
                "Date column must be the Date column from your Date table (not fact table date)",
                "YTD resets at start of each year automatically",
                "Use TOTALQTD() for quarterly reporting",
                "Use TOTALMTD() for monthly reporting",
                "These functions respect Filter Context from slicers",
                "Pro tip: Combine YTD with CALCULATE for additional filters (e.g., YTD for specific region)"
              ]
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
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Comparing performance to the equivalent period in the past.99Lab: Create Sales PY = CALCULATE(, SAMEPERIODLASTYEAR('Date') ).99 Also demonstrate DATEADD and PARALLELPERIOD for more flexible period shifts",
              discussion: "Prior period comparisons are essential for understanding business performance. Comparing current sales to last year's sales reveals growth trends and seasonality patterns. SAMEPERIODLASTYEAR() is the simplest function for this - it shifts dates exactly one year back. For example, March 2023 compares to March 2022. The syntax is: Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])). DATEADD() provides more flexibility, allowing you to shift dates by any interval (days, months, quarters, years). For example, DATEADD('Date'[Date], -1, MONTH) shifts dates back one month. PARALLELPERIOD() shifts dates to the equivalent period in the previous interval (e.g., current month to same month last year, or current quarter to same quarter last year). These functions are filter modifiers used inside CALCULATE() to modify the date filter context, enabling powerful time-based comparisons that drive business decisions.",
              keyPoints: [
                "SAMEPERIODLASTYEAR() compares current period to same period last year",
                "DATEADD() provides flexible date shifting (days, months, quarters, years)",
                "PARALLELPERIOD() shifts to equivalent period in previous interval",
                "These functions are used inside CALCULATE() as filter modifiers",
                "Essential for growth analysis and trend identification"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create PY measure: Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
                "Place in matrix with Date (Month) on rows",
                "Observe: PY shows last year's values for same periods",
                "Create PM measure: Sales PM = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, MONTH))",
                "Compare: PM shows previous month, PY shows same month last year",
                "Create PQ measure: Sales PQ = CALCULATE([Total Sales], PARALLELPERIOD('Date'[Date], -1, YEAR))",
                "Test all measures with different date filters",
                "Verify measures compare correctly"
              ],
              insiderTips: [
                "SAMEPERIODLASTYEAR() is the simplest - use for year-over-year comparisons",
                "DATEADD() is flexible - specify interval (DAY, MONTH, QUARTER, YEAR)",
                "PARALLELPERIOD() is useful for quarter or year comparisons",
                "All these functions require Date table marked as Date Table",
                "Common pattern: Current vs Previous Year, Current vs Previous Month",
                "Pro tip: Combine with CALCULATE for additional filters",
                "These functions respect Filter Context - work with slicers automatically"
              ]
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
              discussion: "This lesson highlights the elegance of DAX. Three simple, reusable measures are stacked on top of each other to produce a sophisticated and critical business insight. Year-over-Year (YoY) growth is a fundamental business KPI that shows how current performance compares to the same period last year. The formula is: Sales YoY % = DIVIDE(([Total Sales] - [Sales PY]), [Sales PY]). This calculates the percentage change: (Current - Previous Year) / Previous Year. The result shows growth as positive percentages (e.g., +15%) and decline as negative percentages (e.g., -5%). YoY growth accounts for seasonality - comparing March 2023 to March 2022 eliminates seasonal factors that would affect month-to-month comparisons. This measure is essential for executive dashboards because it provides context for whether current performance is improving or declining. The elegance of DAX is that you build reusable measures ([Total Sales], [Sales PY]) and combine them into more sophisticated calculations ([Sales YoY %]), creating a hierarchy of measures that are easy to maintain and understand.",
              keyPoints: [
                "YoY Growth = (Current - Previous Year) / Previous Year",
                "Formula: DIVIDE(([Total Sales] - [Sales PY]), [Sales PY])",
                "Builds on reusable measures: [Total Sales] and [Sales PY]",
                "Accounts for seasonality by comparing same periods",
                "Essential KPI for executive dashboards"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create PY measure: Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
                "Create YoY measure: Sales YoY % = DIVIDE(([Total Sales] - [Sales PY]), [Sales PY])",
                "Format measure: Right-click > Format > Percentage",
                "Place in matrix with Date (Month) on rows",
                "Observe: YoY shows growth/decline percentages",
                "Add Year slicer and verify calculation updates",
                "Test with different periods to verify accuracy"
              ],
              insiderTips: [
                "Use DIVIDE() instead of / operator - DIVIDE() handles divide-by-zero gracefully",
                "Format YoY measure as percentage (0.15 = 15%)",
                "Positive percentages = growth, negative = decline",
                "YoY accounts for seasonality - comparing same months eliminates seasonal effects",
                "Common pattern: Current, Previous Year, and YoY % in same visual",
                "Pro tip: Create conditional formatting to highlight positive (green) vs negative (red) growth",
                "YoY is a critical executive KPI - place prominently in dashboards"
              ]
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
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Smoothing volatile data by calculating rolling averages (e.g., 3-month rolling average).Lab: Demonstrate using DATESINPERIOD inside a CALCULATE function to achieve a rolling average calculation",
              discussion: "Rolling averages smooth out volatile data by calculating the average over a moving window of time periods. A 3-month rolling average for March 2023 would average January, February, and March 2023, eliminating month-to-month volatility and revealing underlying trends. The formula uses DATESINPERIOD() inside CALCULATE() to define the date range for the average. DATESINPERIOD() returns a table of dates within a specified period (e.g., last 3 months from the current date). The syntax is: Sales 3M Avg = AVERAGE(CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH))). This creates a rolling window that moves with each period, smoothing out fluctuations and revealing trends. Rolling averages are essential for identifying patterns in noisy data - they help distinguish real trends from random variation. Common rolling periods include 3-month, 6-month, and 12-month averages, each serving different analytical purposes.",
              keyPoints: [
                "Rolling averages smooth volatile data over a moving time window",
                "Use DATESINPERIOD() inside CALCULATE() to define the period",
                "3-month rolling average: averages last 3 months from current date",
                "Rolling averages reveal underlying trends in noisy data",
                "Common periods: 3M, 6M, 12M rolling averages"
              ],
              labs: [
                "Create base measure: Total Sales = SUM(Sales[SalesAmount])",
                "Create rolling average: Sales 3M Avg = AVERAGE(CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH)))",
                "Place in line chart with Date (Month) on X-axis",
                "Observe: Rolling average smooths out monthly volatility",
                "Create 6M rolling average: Sales 6M Avg = AVERAGE(CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -6, MONTH)))",
                "Create 12M rolling average: Sales 12M Avg = AVERAGE(CALCULATE([Total Sales], DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -12, MONTH)))",
                "Compare all rolling averages in same chart",
                "Observe: Longer periods = smoother lines, shorter periods = more responsive"
              ],
              insiderTips: [
                "DATESINPERIOD() syntax: (Date column, End date, Number of intervals, Interval type)",
                "MAX('Date'[Date]) gets current date from Filter Context",
                "Negative number (-3) means 'last 3 months'",
                "Use AVERAGE() with CALCULATE() for rolling averages",
                "3M average is responsive, 12M average is smoother",
                "Choose rolling period based on volatility and analysis needs",
                "Pro tip: Combine rolling average with actual values to see trend vs actual"
              ]
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
              discussion: "Drill-through pages provide powerful navigation and detail exploration capabilities in Power BI reports. When a user right-clicks a data point on a summary visual (e.g., 'East' region in a sales summary), they can navigate to a separate, detailed report page that is automatically filtered for that specific region. This creates a hierarchical navigation pattern where summary pages lead to detail pages. To create a drill-through page, first create the detail page (e.g., 'Region Details'), then drag the field you want to drill through on (e.g., Region) into the 'Drill through' well in the Fields pane. This configures the page as a drill-through destination. On the summary page, right-clicking a data point shows 'Drill through' in the context menu, allowing navigation to the detail page. Drill-through can also be triggered from buttons, providing a more intuitive navigation experience. This pattern is essential for creating professional, user-friendly reports that allow deep exploration of data.",
              labs: [
                "Create a new page: 'Summary' page with sales summary by region",
                "Create another page: 'Region Details' page with detailed sales data",
                "On Region Details page, drag Region field to 'Drill through' well",
                "Right-click a region in Summary page visual",
                "Select 'Drill through > Region Details' from context menu",
                "Observe: Region Details page opens filtered to selected region",
                "Create a button on Summary page",
                "Configure button: Action = Drill through > Region Details",
                "Click button and verify drill-through works",
                "Test drill-through from different visuals"
              ],
              keyPoints: [
                "Drill-through navigates from summary to detail pages",
                "Detail page automatically filters to selected data point",
                "Configure drill-through by dragging field to 'Drill through' well",
                "Can be triggered from right-click menu or buttons",
                "Essential for hierarchical report navigation"
              ],
              insiderTips: [
                "Use drill-through for summary-to-detail navigation patterns",
                "Multiple fields can be added to 'Drill through' well for multi-field filtering",
                "Buttons provide better UX than right-click menus for non-technical users",
                "Drill-through pages should show detailed information relevant to the summary",
                "Common pattern: Sales Summary > Region Details, Product Summary > Product Details",
                "Pro tip: Use drill-through to create focused, detailed analysis pages",
                "Drill-through respects page-level security settings"
              ]
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
              discussion: "Custom report tooltips transform basic hover-over tooltips into rich, interactive mini-reports. The default tooltip shows only basic data points (value, category), but custom tooltips allow you to create an entirely new, small report page with multiple visuals, KPIs, and formatted text. To create a custom tooltip, first create a new report page, then set its page type to 'Tooltip' in the Format pane. This resizes the page to tooltip dimensions (typically 320x240 pixels). Add visuals like line charts, KPI cards, or tables to show additional context when hovering over a data point. On the main report page, select a visual and in its Format pane, set the Tooltip type to 'Report Page' and select your custom tooltip page. When users hover over data points in that visual, the custom tooltip appears, providing rich context and additional insights. Custom tooltips are powerful for providing detailed information without cluttering the main report page.",
              labs: [
                "Create a new page: 'Sales Tooltip'",
                "Set page type: Format pane > Page information > Type = Tooltip",
                "Observe: Page resizes to tooltip dimensions",
                "Add a line chart showing monthly trend",
                "Add a KPI card showing total sales",
                "Format tooltip page for clean appearance",
                "On main report, select a visual (e.g., bar chart)",
                "Format pane > Tooltip > Type = Report Page",
                "Select 'Sales Tooltip' page",
                "Hover over data points to see custom tooltip"
              ],
              keyPoints: [
                "Custom tooltips use entire report pages as tooltips",
                "Set page type to 'Tooltip' to resize to tooltip dimensions",
                "Add visuals, KPIs, and formatted text to tooltip page",
                "Configure visual: Format pane > Tooltip > Type = Report Page",
                "Rich, interactive tooltips provide detailed context"
              ],
              insiderTips: [
                "Keep tooltip pages simple - they're small and need to load quickly",
                "Use small visuals - line charts and KPI cards work well",
                "Custom tooltips can show related data not visible in main visual",
                "Common pattern: Bar chart with trend line tooltip, KPI card with detail tooltip",
                "Tooltip pages automatically filter to hovered data point",
                "Pro tip: Use custom tooltips to provide context without cluttering main page",
                "Test tooltips on different screen sizes - they should be readable"
              ]
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
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "Dynamically changing a visual's appearance (e.g., color) based on its data value",
              discussion: "Conditional formatting dynamically changes a visual's appearance (e.g., color, font, icons) based on data values or DAX measures. This provides visual cues that help users quickly identify patterns, outliers, and key insights. For tables, you can conditionally format data bars, background colors, or font colors based on values. For example, set data bar colors to green for positive values and red for negative values, or change font color based on whether sales exceeded targets. For KPI cards, you can conditionally format the font color based on DAX measures (e.g., green if sales are above target, red if below). Conditional formatting uses rules: Field value (format based on the field itself), Rules (custom rules like 'if value > 1000 then green'), or DAX measures (format based on calculated values). Conditional formatting makes reports more intuitive and helps users identify important information at a glance.",
              labs: [
                "Create a table visual with Sales and Target columns",
                "Select Sales column > Conditional formatting > Data bars",
                "Configure: Green for positive, red for negative",
                "Apply data bars and observe formatting",
                "Select Target column > Conditional formatting > Font color",
                "Set rule: If Sales >= Target then Green, else Red",
                "Apply font color formatting",
                "Create a KPI card showing Sales vs Target",
                "Format KPI card value > Conditional formatting > Font color",
                "Use DAX measure: IF([Sales] >= [Target], \"Green\", \"Red\")",
                "Apply formatting and verify colors change based on values"
              ],
              keyPoints: [
                "Conditional formatting changes visual appearance based on data values",
                "Can format colors, fonts, icons, and data bars",
                "Uses rules: Field value, Custom rules, or DAX measures",
                "Provides visual cues for quick pattern identification",
                "Essential for highlighting key insights"
              ],
              insiderTips: [
                "Use conditional formatting to highlight important information",
                "Data bars in tables provide quick visual comparison",
                "KPI card font colors help identify performance status",
                "DAX measures in conditional formatting enable complex logic",
                "Common pattern: Green = good, Red = bad, Yellow = warning",
                "Pro tip: Use consistent color schemes across report for professional appearance",
                "Conditional formatting makes reports more intuitive and user-friendly"
              ]
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
              concept: "Expanding Power BI's capabilities by importing new visuals from the AppSource marketplace enables you to create specialized visualizations that standard visuals can't provide. Custom visuals extend Power BI's functionality with unique chart types, advanced formatting options, and specialized use cases.",
              discussion: "Demonstrate how to find, import, and use a popular custom visual (e.g., a Word Cloud or Sankey diagram) when standard visuals are not enough. Custom visuals are community-created or Microsoft-certified visualizations available in the Microsoft AppSource marketplace. To use custom visuals: 1. Open Power BI Desktop, click the 'Get more visuals' icon in the Visualizations pane, 2. Browse or search the AppSource marketplace for visuals, 3. Click 'Add' to import the visual into your report, 4. The visual appears in your Visualizations pane and can be used like any built-in visual. Popular custom visuals include: Word Cloud (visualize text data, great for survey responses or tags), Sankey Diagram (show flow relationships between categories), Gantt Chart (project timeline visualization), Radar Chart (multi-dimensional comparison), and many more specialized charts. Custom visuals can be: Microsoft Certified (tested by Microsoft for security and quality), Community visuals (created by the community, use with caution in enterprise), and Premium visuals (require Power BI Premium or Pro license). Best practices: Use certified visuals for enterprise reports (security and reliability), Test custom visuals thoroughly before deploying to production, Be aware that custom visuals may not render in all Power BI clients (mobile, embedded), Some custom visuals may have performance implications for large datasets, Custom visuals update independently of Power BI Desktop - check for updates regularly.",
              keyPoints: [
                "Custom visuals extend Power BI with specialized chart types not available in standard visuals",
                "Available in Microsoft AppSource marketplace - accessible via 'Get more visuals' icon",
                "Microsoft Certified visuals are tested for security and quality - prefer these for enterprise",
                "Custom visuals work like built-in visuals - drag into report and configure fields",
                "Test custom visuals thoroughly - they may have different performance characteristics",
                "Some custom visuals require Premium licenses or have rendering limitations"
              ],
              insiderTips: [
                "Use Microsoft Certified visuals when possible - they're tested for security",
                "Search AppSource by use case (e.g., 'project management', 'flow analysis')",
                "Test custom visuals with your actual data before deploying to production",
                "Some custom visuals may not work in Power BI Service or mobile apps",
                "Community visuals can be powerful but require extra security review",
                "Read reviews and ratings before importing custom visuals",
                "Custom visuals update independently - check for updates periodically",
                "Popular visuals: Word Cloud, Sankey Diagram, Gantt Chart, Radar Chart",
                "Be mindful of licensing - some premium visuals require Power BI Premium"
              ]
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
              concept: "Using the \"Publish\" button in Power BI Desktop to send the .pbix file to the cloud (Power BI Service) transforms your local report into a shared, cloud-based resource. Publishing is the bridge between development (Desktop) and collaboration (Service).",
              discussion: "A tour of the Service UI, identifying the three main content types: Workspaces, Reports, and Semantic Models (the new name for Datasets). Publishing a report is straightforward: Click the 'Publish' button in Power BI Desktop's Home ribbon, select a workspace (or create one), wait for upload to complete, then click 'Open in Power BI Service' to view your report in the cloud. The Power BI Service interface organizes content into three main types: Workspaces are collaborative containers where teams publish and manage reports (think of them as shared folders or project spaces). Workspaces have different types: My Workspace (personal, private), Workspaces (shared team spaces), and Microsoft Fabric Workspaces (unified data platform). Reports are the interactive, multi-page analyses published from Power BI Desktop (.pbix files). Reports maintain all interactivity from Desktop including cross-filtering, drill-through, and bookmarks. Reports can be viewed in the browser, embedded in apps, or consumed via mobile apps. Semantic Models (formerly called Datasets) are the data models that power reports. When you publish a report, Power BI Service extracts the data model and publishes it as a Semantic Model. Multiple reports can share the same Semantic Model (they connect to it). Semantic Models store the data, relationships, measures, and calculated columns - they're the foundation that reports are built upon. Understanding these three types is crucial: Workspaces organize content, Reports provide the user interface, and Semantic Models provide the data foundation.",
              keyPoints: [
                "Publishing uploads your .pbix file from Desktop to the cloud (Power BI Service)",
                "Three main content types: Workspaces (organize), Reports (UI), Semantic Models (data)",
                "Workspaces are collaborative containers for managing content as a team",
                "Reports are interactive analyses published from Desktop - maintain full interactivity",
                "Semantic Models (formerly Datasets) are the data models that power reports",
                "Multiple reports can share the same Semantic Model for consistency"
              ],
              insiderTips: [
                "Always select the correct workspace when publishing - content goes to that workspace",
                "First publish may take longer - Power BI is uploading and processing your model",
                "After publishing, check 'Open in Power BI Service' to verify it worked",
                "Semantic Model name matches your .pbix file name by default",
                "You can publish multiple times - it updates the existing report/model",
                "Use descriptive workspace names - they help organize content logically",
                "Reports and Semantic Models are linked - updating one may affect the other",
                "Check workspace permissions before publishing - only workspace members can access",
                "Publishing requires Power BI Pro license (or Premium capacity)"
              ]
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
              concept: "A Workspace is the fundamental unit of collaboration in the Power BI Service. Workspaces are shared containers where teams publish, organize, and collaborate on Power BI content (reports, dashboards, semantic models). Think of workspaces as project folders or shared drives for Power BI content.",
              discussion: "A Workspace (e.g., \"Finance Team\") is created, and reports are published to it. This is the \"development folder\" where colleagues with \"Admin,\" \"Member,\" or \"Contributor\" roles can co-create and manage content. Workspaces provide collaboration through role-based access: Admin role can manage workspace settings, add/remove members, publish content, and manage content. Member role can publish content, edit existing content, and view all content. Contributor role can edit existing content and view all content (but can't publish new content). Viewer role can only view content (read-only). Creating a workspace: In Power BI Service, click Workspaces > New workspace, provide a name and description, add members with appropriate roles, set workspace access (who can view workspace content), and configure advanced settings (storage, data lineage, etc.). Workspaces enable: Content organization (group related reports together), Team collaboration (multiple people work on same reports), Access control (manage who can see and edit content), Version management (track changes to reports over time), and Centralized governance (manage content lifecycle as a team). Workspace types: My Workspace (personal, private workspace for individual work), Workspaces (shared team workspaces for collaboration), Microsoft Fabric Workspaces (unified data platform with Power BI, Data Factory, Synapse, etc.). Best practices: Use descriptive workspace names that reflect the team or project, Organize workspaces by department, project, or function, Assign appropriate roles - don't give everyone Admin access, Use consistent naming conventions across workspaces, Document workspace purpose and members in workspace description.",
              keyPoints: [
                "Workspaces are shared containers for Power BI content (reports, dashboards, models)",
                "Role-based access: Admin, Member, Contributor, Viewer with different permissions",
                "Workspaces enable team collaboration and centralized content management",
                "My Workspace is personal; Workspaces are for team collaboration",
                "Workspaces organize content logically by team, project, or department",
                "Proper role assignment ensures security while enabling collaboration"
              ],
              insiderTips: [
                "Create workspaces before publishing - organize content from the start",
                "Use descriptive workspace names - 'Finance Team' not 'Workspace1'",
                "Assign minimal permissions needed - not everyone needs Admin role",
                "Workspace Admin can manage members - regular Admins manage content",
                "My Workspace is private - use Workspaces for shared content",
                "Workspace access controls who sees the workspace - different from content permissions",
                "Fabric Workspaces provide unified platform - use for advanced data scenarios",
                "Document workspace purpose in description - helps team members understand its role",
                "Regularly review workspace members - remove people who no longer need access"
              ]
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
              concept: "End-users (e.g., executives, consumers) should never be given direct access to the developer Workspace.132 The correct method for distribution is publishing the Workspace content as an App",
              discussion: "An App is a clean, read-only \"launcher\" that bundles the reports and dashboards from a workspace into a professional, curated package for consumers.135 This hides all the backend complexity (like semantic models) and provides a much cleaner user experience.137 This is the core governance model of Power BI: Workspaces are for developers (the kitchen); Apps are for consumers (the restaurant).132 This lesson also covers other sharing methods like exporting to PDF/PPT or embedding in Microsoft Teams and SharePoint",
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
              concept: "A \"Master\" never publishes a change directly to the live production report. A professional Continuous Integration/Continuous Deployment (CI/CD) workflow is used to de-risk changes",
              discussion: "Deployment Pipelines in the Power BI Service provide a simple, visual interface for this",
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
              concept: "Making reports actionable by integrating with the other components of the Power Platform",
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
              concept: "For \"Master\" level developers, this is the process of embedding Power BI content inside their own custom applications for external customers (a SaaS scenario)",
              discussion: "This is a highly technical, API-driven 184 topic. It involves App Registration in Microsoft Entra ID (formerly Azure AD), workspace management, and using client-side APIs (JavaScript) to render the content securely",
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
              concept: "Power BI changes every single month",
              discussion: "Mastery is not a final destination; it is a process of continuous learning. The most important skill is \"learning how to learn.\" This lesson will point students to the critical resources for staying current: the official Microsoft Power BI Blog, key community YouTube channels 7, and community forums",
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
              concept: "Providing students with downloadable datasets, solution files (.pbix), and quick-reference \"cheat sheets.\"",
              discussion: "This includes a DAX formula reference, a Power Query M tips sheet, and a visualization design checklist to support continued learning and on-the-job application",
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
