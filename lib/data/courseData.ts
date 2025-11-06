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
            description: "This curriculum follows a three-part structure, guiding a student from \"Beginner\" to \"Analyst\" and finally to \"Master.\" A \"Case Study Scenario\" (e.g., analyzing sales for a retail company) will be used throughout the course to provide real-world context",
            duration: 30,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals", "Course Structure", "Learning Path"],
            topic: 'Course Overview',
            content: {
              concept: "This curriculum follows a three-part structure, guiding a student from \"Beginner\" to \"Analyst\" and finally to \"Master.\" A \"Case Study Scenario\" (e.g., analyzing sales for a retail company) will be used throughout the course to provide real-world context. Each part builds upon the previous one, ensuring a logical progression from basic concepts to advanced enterprise-level skills. The course is designed to take you from zero Power BI knowledge to PL-300 certification readiness, with hands-on labs, real-world projects, and comprehensive coverage of all Power BI capabilities.",
              discussion: "The course is designed for any professional who works with data, regardless of their current title. It is particularly impactful for \"Excel power users\" who are seeking to advance their analytical capabilities beyond the constraints of spreadsheets. These professionals often find themselves creating complex Excel workbooks with multiple sheets, pivot tables, and VLOOKUPs, and are ready to move to a more powerful, scalable solution. The course is also the ideal learning path for aspiring Data Analysts, Business Analysts, and IT professionals who need to leverage data for decision-making. Part 1 (Beginner) focuses on the fundamentals: connecting to data, transforming it with Power Query, and building your first interactive reports. You'll learn the complete BI workflow from data ingestion to visualization. Part 2 (Analyst) dives deep into data modeling, DAX formulas, and advanced report design. This is where you'll learn to build professional, enterprise-grade reports with sophisticated calculations and storytelling. Part 3 (Master) covers enterprise deployment, security, performance optimization, and advanced topics like Microsoft Fabric integration and Copilot. Throughout the course, you'll work with a consistent retail sales case study, allowing you to see how concepts build upon each other in a real-world scenario. The course includes three capstone projects that demonstrate your progression: Capstone 1 (Beginner) shows foundational skills, Capstone 2 (Analyst) demonstrates intermediate expertise, and Capstone 3 (Master) proves enterprise-level competency. By the end, you'll have a portfolio of work and the knowledge to pass the PL-300 certification exam.",
              keyPoints: [
                "Three-part structure: Beginner → Analyst → Master ensures logical skill progression",
                "Consistent case study throughout provides real-world context and continuity",
                "Designed for Excel power users ready to advance to enterprise BI tools",
                "Ideal for aspiring Data Analysts, Business Analysts, and IT professionals",
                "Three capstone projects demonstrate progression and build your portfolio",
                "100% aligned with PL-300 certification exam requirements",
                "Hands-on labs in every module ensure practical, applicable learning",
                "120 hours total content (16 weeks at 7-8 hours/week)"
              ],
              insiderTips: [
                "Don't skip the case study - it's designed to show how concepts connect in real scenarios",
                "The three-part structure mirrors real career progression - Beginner skills get you hired, Analyst skills get you promoted, Master skills make you indispensable",
                "Each capstone project builds your portfolio - these are what employers want to see",
                "The course is self-paced, but following the order is critical - concepts build on each other",
                "Excel users will find Part 1 familiar - this is intentional to ease the transition",
                "Part 2 (DAX and Modeling) is where most students struggle - budget extra time here",
                "Part 3 (Enterprise) is what separates professionals from hobbyists - don't skip it",
                "The PL-300 alignment means completing this course = exam readiness"
              ],
              tables: [
                {
                  title: "Course Structure Overview",
                  headers: ["Part", "Focus", "Modules", "Key Skills", "Outcome"],
                  rows: [
                    ["Part 0", "Foundations", "Module 0", "BI Concepts, Course Orientation", "Understanding of BI landscape"],
                    ["Part 1: Beginner", "Fundamentals", "Modules 1-4", "Get Data, Power Query, Basic Reports", "First complete report"],
                    ["Part 2: Analyst", "Advanced Skills", "Modules 5-11", "Data Modeling, DAX, Advanced Design", "Professional reports"],
                    ["Part 3: Master", "Enterprise", "Modules 12-18", "Deployment, Security, Performance, Fabric", "Enterprise-ready skills"]
                  ]
                },
                {
                  title: "Target Audience Breakdown",
                  headers: ["Role", "Why This Course", "Key Benefits", "Time Investment"],
                  rows: [
                    ["Excel Power User", "Outgrowing spreadsheet limitations", "Scalable analytics, automation", "16 weeks"],
                    ["Aspiring Data Analyst", "Career transition into analytics", "Complete BI skillset, portfolio", "16 weeks"],
                    ["Business Analyst", "Better data storytelling", "Advanced reports, DAX mastery", "12-16 weeks"],
                    ["IT Professional", "BI platform expertise", "Enterprise deployment, security", "12-16 weeks"],
                    ["Current BI User", "Power BI specialization", "Advanced features, certification", "8-12 weeks"]
                  ]
                }
              ]
            },
          },
          {
            id: "0-3",
            moduleNumber: 0,
            lessonNumber: 3,
            title: "Prerequisites: What Do You Really Need?",
            description: "While there are no formal prerequisites to begin, a baseline of data literacy is highly beneficial. This lesson clarifies what you truly need to succeed and what skills will accelerate your learning.",
            duration: 25,
            difficulty: 'beginner',
            tags: ["Prerequisites", "Excel", "Data Literacy", "Getting Started"],
            topic: 'Prerequisites',
            content: {
              concept: "While there are no formal prerequisites to begin, a baseline of data literacy is highly beneficial. Power BI is designed to be accessible to business users, not just IT professionals. However, certain existing skills can significantly accelerate your learning journey. The most important prerequisite is a willingness to learn and experiment - Power BI rewards hands-on practice. You don't need programming experience, database administration skills, or advanced mathematics. What you do need is comfort with basic computer operations, file management, and a logical mindset for working with data.",
              discussion: "Certain existing skills can be considered \"accelerators\" for the learning process. A strong familiarity with Microsoft Excel, especially functions, formulas, and Pivot Tables, provides a significant advantage. This is because core components of Power BI, such as Power Query and the DAX formula language, are shared with modern Excel. If you're comfortable with Excel formulas like SUMIF, VLOOKUP, and IF statements, you'll find DAX familiar (though more powerful). If you've used Excel Pivot Tables, you'll understand the concept of aggregating and summarizing data - a core BI skill. Power Query in Excel (available since Excel 2016) is nearly identical to Power Query in Power BI, so Excel users with Power Query experience will breeze through the data transformation modules. Other helpful, though not required, concepts include: Basic database understanding (knowing what a table is, understanding rows and columns) - this helps with data modeling concepts. Data visualization basics (understanding when to use a bar chart vs. line chart) - this helps with report design. Basic statistics (mean, median, sum, count) - this helps with understanding aggregations. If you don't have these skills, don't worry - the course covers them. But if you do have Excel experience, you'll progress faster. The course assumes no prior Power BI knowledge, so even complete beginners can succeed. However, if you're completely new to data analysis, consider spending a few hours learning Excel basics first - it will make the Power BI journey smoother.",
              keyPoints: [
                "No formal prerequisites required - course designed for complete beginners",
                "Excel experience (especially formulas and Pivot Tables) significantly accelerates learning",
                "Power Query in Excel is nearly identical to Power Query in Power BI",
                "DAX formulas share concepts with Excel formulas (SUMIF, VLOOKUP, etc.)",
                "Basic data literacy (tables, rows, columns) is helpful but not required",
                "Willingness to learn and experiment is the most important prerequisite",
                "No programming experience needed - Power BI is visual and user-friendly",
                "Course covers all foundational concepts, so beginners can succeed"
              ],
              insiderTips: [
                "If you're new to Excel, spend 2-3 hours learning basic formulas and Pivot Tables before starting - it's worth it",
                "Excel users: Your VLOOKUP knowledge translates directly to Power Query Merge operations",
                "Excel users: Your Pivot Table knowledge translates directly to Power BI visuals",
                "Excel users: Your SUMIF knowledge translates directly to DAX CALCULATE functions",
                "Don't let lack of Excel experience stop you - the course teaches everything you need",
                "If you know SQL, you'll find Power Query familiar (it's like visual SQL)",
                "If you know Tableau, you'll find Power BI similar but with better data modeling",
                "The course includes 'Excel to Power BI' translation guides for Excel users",
                "Complete beginners: Budget extra time for Part 1 - it's foundational",
                "Advanced users: You can skip some Part 1 basics, but don't skip the Power Query fundamentals"
              ],
              tables: [
                {
                  title: "Skill Level Assessment",
                  headers: ["Your Experience", "What This Means", "Recommended Approach", "Time Estimate"],
                  rows: [
                    ["Excel Beginner", "New to spreadsheets", "Take time with Part 1, practice Excel basics", "18-20 weeks"],
                    ["Excel Intermediate", "Know formulas, basic Pivot Tables", "Normal pace, Excel skills help", "16 weeks"],
                    ["Excel Advanced", "Power Query, complex formulas", "Fast pace through Part 1, focus on Part 2", "12-14 weeks"],
                    ["SQL/Database Experience", "Understand data modeling", "Fast through modeling, focus on DAX", "12-14 weeks"],
                    ["Other BI Tool (Tableau, Qlik)", "Understand BI concepts", "Fast through basics, learn Power BI specifics", "10-12 weeks"]
                  ]
                },
                {
                  title: "Excel Skills That Translate to Power BI",
                  headers: ["Excel Skill", "Power BI Equivalent", "Translation Difficulty", "Module Where You'll See It"],
                  rows: [
                    ["VLOOKUP", "Power Query Merge", "Easy - same concept", "Module 3"],
                    ["Pivot Tables", "Power BI Visuals", "Easy - same concept", "Module 4"],
                    ["SUMIF/COUNTIF", "DAX CALCULATE", "Moderate - more powerful", "Module 6-8"],
                    ["Excel Tables", "Power BI Tables", "Easy - same concept", "Module 1"],
                    ["Power Query (Excel)", "Power Query (Power BI)", "Very Easy - nearly identical", "Module 3"],
                    ["Excel Formulas", "DAX Measures", "Moderate - different syntax", "Module 6-8"],
                    ["Charts", "Power BI Visuals", "Easy - similar concepts", "Module 4"],
                    ["Data Validation", "Data Types in Power BI", "Easy - similar concept", "Module 3"]
                  ]
                }
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
            description: "Installing the free Power BI Desktop application. This hands-on lab walks you through the installation process, choosing the right installation method, and verifying your installation works correctly.",
            duration: 30,
            difficulty: 'beginner',
            tags: ["Installation", "Setup", "2025 Features", "Power BI Desktop"],
            topic: 'Power BI Setup',
            content: {
              concept: "Installing the free Power BI Desktop application is your first step into the Power BI ecosystem. Power BI Desktop is completely free and can be installed on any Windows PC (or ARM-based Windows device as of 2025). There are two primary installation methods, each with different benefits. The Microsoft Store version (recommended) updates automatically, ensuring you always have the latest features. The direct download version gives you more control but requires manual updates. This lab will guide you through the installation process, help you choose the right method for your needs, and verify your installation is working correctly.",
              discussion: "There are two primary installation methods, each suited to different needs. Microsoft Store (Recommended): This version updates automatically in the background, ensuring you always have the latest features without manual intervention. The Store version is ideal for individual users and small teams who want hassle-free updates. It's installed through the Microsoft Store app on Windows 10/11, and updates are managed automatically. The Store version is also digitally signed and verified, providing an extra layer of security. Direct Download (Executable): This version requires manual updates but offers more control for enterprise environments. IT departments often prefer this method because it allows them to control when updates are deployed, test updates before rolling them out, and manage installations through enterprise deployment tools. The direct download is available from the official Power BI website (powerbi.microsoft.com) and comes as a standalone .msi installer. Note for Mac Users: Power BI Desktop is a Windows-only application. Mac users must utilize a virtual machine environment, such as Parallels Desktop, VMware Fusion, or Boot Camp, to run a Windows instance. Alternatively, Mac users can use Power BI Service (the web version) for viewing and interacting with reports, but report creation requires Windows. Note for ARM Users (New in 2025): As of September/October 2025, Power BI Desktop is now supported to run natively on ARM-based Windows PCs (like Surface Pro X, Surface Laptop Studio, and other ARM devices). This means no emulation is required, and performance is significantly better than running through x86 emulation. The ARM version is available through both installation methods. System Requirements: Power BI Desktop requires Windows 10 (version 1903 or later) or Windows 11, .NET Framework 4.8 or later, and at least 2GB of RAM (4GB recommended). The installation requires approximately 500MB of disk space, though reports and data can consume much more. After installation, you'll need to sign in with a Microsoft account (free) or work/school account to access cloud features, though you can use Power BI Desktop offline for local development.",
              keyPoints: [
                "Two installation methods: Microsoft Store (auto-updates) or Direct Download (manual control)",
                "Microsoft Store version recommended for individual users - automatic updates",
                "Direct Download preferred for enterprise - controlled deployment",
                "Power BI Desktop is Windows-only (Mac users need virtual machine)",
                "ARM support (2025) enables native ARM Windows installation",
                "Free forever - no cost for Power BI Desktop",
                "Requires Windows 10/11, .NET Framework 4.8+, 2GB+ RAM",
                "Sign in with Microsoft account to access cloud features (optional)"
              ],
              insiderTips: [
                "Always use Microsoft Store version unless you have a specific enterprise requirement",
                "Store version updates automatically - you'll always have the latest features",
                "If you're on a managed corporate PC, IT may require the direct download version",
                "Mac users: Parallels Desktop is the most popular VM solution for Power BI",
                "ARM users: The native ARM version (2025) is much faster than x86 emulation",
                "Installation takes 5-10 minutes depending on your internet speed",
                "After installation, restart your computer if prompted - this ensures all components are properly registered",
                "First launch may take longer as Power BI initializes - this is normal",
                "If installation fails, check Windows Update - Power BI requires current Windows updates",
                "You can have both Store and Direct Download versions, but this is not recommended"
              ],
              labs: [
                "Determine your installation method: Microsoft Store (recommended) or Direct Download",
                "For Microsoft Store: Open Microsoft Store app, search for 'Power BI Desktop', click Install",
                "For Direct Download: Visit powerbi.microsoft.com/desktop, click 'Download free', run the installer",
                "Follow the installation wizard (accept license terms, choose installation location)",
                "Wait for installation to complete (5-10 minutes depending on internet speed)",
                "Launch Power BI Desktop from Start menu or desktop shortcut",
                "On first launch, you may see a welcome screen - click 'Get started'",
                "Optional: Sign in with your Microsoft account (free account works) to access cloud features",
                "Verify installation: You should see the Power BI Desktop interface with three views (Report, Data, Model)",
                "Check version: File > Options and settings > Options > About - note your version number",
                "Test basic functionality: Click 'Get Data' button - you should see the data source selection dialog",
                "If you encounter errors, check Windows Event Viewer for detailed error messages",
                "For ARM devices: Verify you downloaded the ARM version (check file name or Store listing)"
              ],
              tables: [
                {
                  title: "Installation Method Comparison",
                  headers: ["Method", "Updates", "Best For", "Control Level", "Enterprise Support"],
                  rows: [
                    ["Microsoft Store", "Automatic", "Individual users, small teams", "Low (auto-updates)", "Limited"],
                    ["Direct Download", "Manual", "Enterprise, IT-managed PCs", "High (manual updates)", "Full (MSI deployment)"]
                  ]
                },
                {
                  title: "System Requirements",
                  headers: ["Component", "Minimum", "Recommended", "Notes"],
                  rows: [
                    ["Operating System", "Windows 10 (1903+)", "Windows 11", "Windows Server 2016+ also supported"],
                    ["RAM", "2GB", "4GB+", "More RAM = better performance with large datasets"],
                    ["Disk Space", "500MB", "2GB+", "Additional space needed for reports and data"],
                    [".NET Framework", "4.8", "Latest", "Usually pre-installed on Windows 10/11"],
                    ["Display", "1024x768", "1920x1080+", "Higher resolution = better report design experience"],
                    ["Internet", "Not required", "Recommended", "Needed for cloud features and updates"]
                  ]
                }
              ]
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
            description: "Understanding the three main \"views\" within Power BI Desktop is key to navigating the workflow. This comprehensive tour introduces you to every part of the interface, from the ribbon to the panes, and explains how they work together.",
            duration: 45,
            difficulty: 'beginner',
            tags: ["Power BI Fundamentals", "Interface", "Navigation", "Getting Started"],
            topic: 'Power BI Interface',
            content: {
              concept: "Understanding the three main \"views\" within Power BI Desktop is key to navigating the workflow. Power BI Desktop has a sophisticated interface designed to support the complete BI workflow: connecting to data, transforming it, modeling relationships, and building visualizations. The interface consists of three primary views (Report View, Data View, and Model View), a ribbon with contextual tabs, and multiple panes for fields, visualizations, and properties. Each view serves a specific purpose in the BI workflow, and understanding when to use each view is fundamental to efficient Power BI development.",
              discussion: "The three main views correspond directly to the BI workflow stages. Report View (Canvas) is the default view and the primary workspace for building visualizations. This is the \"what you see is what you get\" (WYSIWYG) editor where you create the final report that users will interact with. The Report View contains the canvas (the blank page where visuals are placed), the Visualizations pane (chart types and formatting options), the Fields pane (your data tables and columns), and the Filters pane (for applying filters to visuals or entire pages). This view is where you spend most of your time as a report developer. Data View resembles a spreadsheet and allows you to inspect the raw data after it has been loaded into the model. This view shows the actual data in your tables, row by row, column by column. It's where you can see the data values, verify data types, and create calculated columns. Data View is particularly useful for data exploration, understanding your data structure, and debugging data issues. You can sort, filter, and search data in this view, just like in Excel. Model View is the \"engine room\" or \"diagram\" view that provides a visual representation of all tables in your data model and the relationships between them. This is where you create and manage relationships between tables, view the overall structure of your data model, and understand how tables connect. Model View is essential for data modeling - you'll use it extensively in Part 2 when building star schemas. The interface also includes a ribbon (similar to Microsoft Office) with contextual tabs that change based on what you're doing. The Home tab contains common operations like Get Data, Transform Data, and Refresh. The View tab controls which panes are visible. The Modeling tab (visible in Data and Model views) contains tools for creating relationships, calculated columns, and measures. The ribbon adapts to your current context, showing relevant tools for the view you're in. Key panes include: Fields pane (shows your data model - tables and columns), Visualizations pane (chart types and formatting), Filters pane (applies filters to visuals or pages), and Properties pane (detailed settings for selected objects). Understanding this interface is the foundation for everything else you'll learn in Power BI.",
              keyPoints: [
                "Three main views: Report View (visualizations), Data View (data inspection), Model View (relationships)",
                "Report View is where you build the final report - the primary workspace",
                "Data View shows raw data in spreadsheet format - useful for exploration and calculated columns",
                "Model View shows the data model diagram - essential for understanding relationships",
                "Ribbon contains contextual tabs that change based on your current view",
                "Fields pane shows your data model - tables and columns available for use",
                "Visualizations pane contains chart types and formatting options",
                "Filters pane allows you to apply filters to visuals, pages, or the entire report"
              ],
              insiderTips: [
                "Report View is where you'll spend 80% of your time - get comfortable with it",
                "Use Data View to explore your data and verify it loaded correctly",
                "Model View is your best friend for understanding complex data models",
                "Right-click in any pane to access context menus with additional options",
                "You can resize and rearrange panes - customize the interface to your workflow",
                "Use View tab to show/hide panes - clean up the interface when needed",
                "The ribbon adapts to your context - different tools appear in different views",
                "Keyboard shortcuts work throughout - learn them for faster development",
                "The Fields pane search box is powerful - use it to find columns in large models",
                "Model View's zoom controls help you navigate large data models",
                "You can have multiple report pages - use the page tabs at the bottom",
                "The status bar (bottom) shows useful information like row counts and filter status"
              ],
              labs: [
                "Open Power BI Desktop (if not already open)",
                "Observe the three view icons in the left sidebar: Report, Data, Model",
                "Click Report View (if not already selected) - this is the default view",
                "Explore the ribbon: Home tab, Insert tab, View tab, Modeling tab (contextual)",
                "Observe the Fields pane on the right - currently empty (no data loaded yet)",
                "Observe the Visualizations pane on the right - shows available chart types",
                "Click Data View icon - notice the interface changes (no canvas, shows data grid)",
                "In Data View, observe the Fields pane still visible on the right",
                "Click Model View icon - notice the diagram view (currently empty)",
                "In Model View, observe the relationship diagram area (currently empty)",
                "Return to Report View - this is where you'll build reports",
                "Right-click in the Fields pane - observe context menu options",
                "Right-click in the Visualizations pane - observe context menu options",
                "Go to View tab in the ribbon - observe options to show/hide panes",
                "Experiment with showing/hiding panes: Filters, Bookmarks, Selection, etc.",
                "Observe the page tabs at the bottom (currently shows 'Page 1')",
                "Right-click on 'Page 1' tab - observe options to add, duplicate, or delete pages",
                "Click the '+' icon next to page tabs to add a new page",
                "Observe the status bar at the bottom - shows page information",
                "Familiarize yourself with the interface - you'll use it throughout the course"
              ],
              tables: [
                {
                  title: "Power BI Desktop Views Comparison",
                  headers: ["View", "Primary Use", "Key Features", "When to Use"],
                  rows: [
                    ["Report View", "Building visualizations and reports", "Canvas, Visualizations pane, Fields pane", "Creating and designing reports"],
                    ["Data View", "Inspecting and exploring data", "Spreadsheet-like grid, data values", "Verifying data, creating calculated columns"],
                    ["Model View", "Managing data model and relationships", "Diagram view, relationship lines", "Building relationships, understanding model structure"]
                  ]
                },
                {
                  title: "Key Interface Panes",
                  headers: ["Pane", "Location", "Purpose", "Visibility"],
                  rows: [
                    ["Fields", "Right side", "Shows data model (tables and columns)", "Always visible"],
                    ["Visualizations", "Right side (Report View)", "Chart types and formatting options", "Report View only"],
                    ["Filters", "Right side", "Apply filters to visuals/pages/report", "Toggle via View tab"],
                    ["Properties", "Right side", "Detailed settings for selected objects", "When object selected"],
                    ["Bookmarks", "Right side", "Save and restore report states", "Toggle via View tab"],
                    ["Selection", "Right side", "Manage visual layers and visibility", "Toggle via View tab"]
                  ]
                }
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
            description: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services. This lesson introduces you to the Get Data dialog and helps you understand the vast array of data sources available.",
            duration: 30,
            difficulty: 'beginner',
            tags: ["Data Acquisition", "Get Data", "Data Sources", "Power BI Fundamentals"],
            topic: 'Data Acquisition',
            content: {
              concept: "The \"Get Data\" function is the universal starting point for all Power BI projects. It provides access to hundreds of different data sources, from simple files to cloud databases and web services. Get Data is Power BI's gateway to connecting with virtually any data source in your organization or on the internet. Whether you need to connect to an Excel file on your computer, a SQL Server database, a cloud service like Salesforce, or a web page with tabular data, Get Data is where you begin. The Get Data dialog organizes data sources into categories (Files, Databases, Power Platform, Azure, Online Services, and more) making it easy to find the right connector for your needs. Understanding Get Data is fundamental because every Power BI project starts here - you can't build reports without data.",
              discussion: "The Get Data experience in Power BI Desktop is designed to be intuitive yet powerful. When you click the \"Get Data\" button (or use the Home tab > Get Data), you're presented with a dialog that organizes hundreds of data sources into logical categories. The most common categories include: Files (Excel, CSV, PDF, JSON, XML, Text files) - these are the most common starting points for beginners. Databases (SQL Server, Oracle, MySQL, PostgreSQL, Access) - these are the backbone of enterprise data systems. Power Platform (Power BI datasets, Power BI dataflows) - these connect to other Power BI content. Azure (Azure SQL Database, Azure Blob Storage, Azure Data Lake) - Microsoft's cloud data services. Online Services (SharePoint, Dynamics 365, Salesforce, Google Analytics) - cloud-based business applications. Other (Web, OData, REST APIs) - miscellaneous data sources. Each connector may have different authentication requirements (none for files, username/password for databases, OAuth for cloud services). Some connectors are marked with a diamond icon (Premium connectors) which require a Pro or Premium license. The Get Data dialog also includes a search box, allowing you to quickly find specific connectors. After selecting a data source, Power BI guides you through the connection process, which varies by source type. For files, you'll browse to the file location. For databases, you'll enter server and database names. For cloud services, you'll authenticate with your credentials. The connection process is designed to be user-friendly, with wizards and dialogs that guide you through each step. Once connected, you'll see the Navigator dialog (for databases and files) or the Power Query Editor (for files that need transformation). The Get Data experience is your entry point into the entire Power BI workflow - mastering it is essential for efficient BI development.",
              keyPoints: [
                "Get Data is the universal starting point for all Power BI projects",
                "Hundreds of data sources organized into logical categories",
                "Common categories: Files, Databases, Azure, Online Services, Web",
                "Each connector has specific authentication requirements",
                "Premium connectors (diamond icon) require Pro or Premium license",
                "Search box helps you quickly find specific connectors",
                "Connection process varies by source type but is guided by wizards",
                "Get Data leads to Navigator dialog or Power Query Editor"
              ],
              insiderTips: [
                "Use the search box in Get Data dialog - it's faster than browsing categories",
                "Premium connectors are marked with a diamond icon - check your license",
                "Most common starting point: Excel or CSV files for beginners",
                "Enterprise users: SQL Server is the most common database connector",
                "Cloud users: SharePoint and Azure SQL are popular cloud connectors",
                "The connector list updates monthly - new connectors appear regularly",
                "If you don't see a connector you need, check if it's in a different category",
                "Some connectors require specific versions or configurations - check documentation",
                "You can connect to multiple data sources in a single Power BI file",
                "Get Data remembers your recent connections - use them for faster access",
                "For web scraping, use the Web connector - it extracts tables from HTML",
                "For APIs, use the REST API connector or OData connector"
              ],
              labs: [
                "Open Power BI Desktop (if not already open)",
                "Click the 'Get Data' button in the Home tab (or use the dropdown arrow)",
                "Observe the Get Data dialog - notice the categories on the left",
                "Browse through categories: Files, Databases, Power Platform, Azure, Online Services",
                "Use the search box to search for 'Excel' - observe how it filters results",
                "Click on 'Excel' under Files category - observe the connection dialog",
                "Cancel the Excel connection dialog (we'll connect in the next lesson)",
                "Browse to 'Database' category - observe SQL Server, Oracle, MySQL, etc.",
                "Browse to 'Azure' category - observe Azure SQL Database, Azure Blob Storage, etc.",
                "Browse to 'Online Services' category - observe SharePoint, Dynamics 365, Salesforce, etc.",
                "Look for connectors with diamond icons - these are Premium connectors",
                "Use search box to find 'Web' connector - this is for web scraping",
                "Use search box to find 'CSV' connector - this is for CSV files",
                "Observe the 'Recent' section at the top - currently empty (will populate as you use connectors)",
                "Familiarize yourself with the Get Data dialog - you'll use it frequently"
              ],
              tables: [
                {
                  title: "Get Data Categories Overview",
                  headers: ["Category", "Common Connectors", "Use Case", "License Required"],
                  rows: [
                    ["Files", "Excel, CSV, PDF, JSON, XML", "Local files, exports", "None (free)"],
                    ["Databases", "SQL Server, Oracle, MySQL, PostgreSQL", "Enterprise databases", "None (free)"],
                    ["Power Platform", "Power BI datasets, Dataflows", "Reuse existing Power BI content", "Pro or higher"],
                    ["Azure", "Azure SQL, Blob Storage, Data Lake", "Microsoft cloud services", "Pro or higher"],
                    ["Online Services", "SharePoint, Dynamics 365, Salesforce", "Cloud business applications", "Pro or higher"],
                    ["Other", "Web, OData, REST APIs", "Web scraping, APIs", "None (free)"]
                  ]
                },
                {
                  title: "Most Common Data Sources by User Type",
                  headers: ["User Type", "Most Common Connectors", "Why", "Difficulty"],
                  rows: [
                    ["Beginner", "Excel, CSV", "Familiar format, easy to start", "Easy"],
                    ["Business User", "SharePoint, Excel Online", "Cloud files, collaboration", "Easy"],
                    ["Data Analyst", "SQL Server, Excel, CSV", "Mix of databases and files", "Moderate"],
                    ["Enterprise User", "SQL Server, Azure SQL, SharePoint", "Enterprise data sources", "Moderate"],
                    ["Developer", "REST APIs, OData, Custom connectors", "Advanced integrations", "Advanced"]
                  ]
                }
              ]
            },
          },
          {
            id: "2-2",
            moduleNumber: 2,
            lessonNumber: 2,
            title: "Connecting to Files (Hands-On Lab)",
            description: "Connecting to the most common flat-file data sources including Excel, CSV, and PDF files. This hands-on lab walks you through connecting to files and covers best practices for preparing your data.",
            duration: 45,
            difficulty: 'beginner',
            tags: ["Data Acquisition", "Files", "Excel", "CSV", "PDF", "Hands-On Lab"],
            topic: 'Data Acquisition',
            content: {
              concept: "Connecting to the most common flat-file data sources is where most Power BI projects begin. Files are the most accessible data source - everyone has Excel files, CSV exports, or PDF reports. Power BI can connect to a wide variety of file formats, with Excel, CSV, and PDF being the most common. This lab will walk you through connecting to each of these file types, understanding the connection process, and learning best practices for preparing your data files. File connections are typically the easiest to set up - no server names, no authentication, just browse to your file and connect. However, file connections require the file to be accessible (either locally or in a cloud location like OneDrive or SharePoint). Understanding file connections is fundamental because files are often the starting point for learning Power BI and are commonly used in real-world scenarios.",
              discussion: "This lab will walk through connecting to the three most common file types. Excel Workbooks (.xlsx): Power BI can connect to Excel tables and worksheets. When you connect to an Excel file, Power BI shows you the Navigator dialog, which lists all tables and worksheets in the workbook. You can select one or more tables/worksheets to import. Excel tables (created with Ctrl+T) are preferred over raw worksheets because they have proper headers and structure. This lesson will also cover best practices for structuring Excel data: use proper Excel tables (not just ranges), avoid merged cells (they cause issues), ensure first row contains headers, remove empty rows and columns, avoid subtotals in the data (Power BI will calculate them), and keep data in a single table per worksheet. Excel files can be large, so Power BI may take time to load them. Text/CSV Files (.csv): A ubiquitous format for data export. CSV files are simple text files with comma-separated values (though other delimiters like semicolons or tabs are supported). When connecting to CSV files, Power BI automatically detects the delimiter and encoding. CSV files are great for data exports from systems that don't support Excel. Best practices for CSV files: ensure proper encoding (UTF-8 is preferred), use consistent delimiters, include headers in the first row, and avoid special characters in headers. PDF: Power BI can extract data from tables found within PDF documents. This is useful for reports that are only available as PDFs. When connecting to PDFs, Power BI analyzes the PDF and identifies tables that can be extracted. PDF extraction is not perfect - it works best with well-formatted tables. Best practices for PDFs: ensure tables are properly formatted (not images), use clear table structures, and verify extracted data (PDF extraction can be inaccurate). After connecting to any file, you'll see the Navigator dialog (for Excel) or go directly to Power Query Editor (for CSV/PDF). The Navigator dialog allows you to preview data before loading it. You can choose to \"Load\" (import directly) or \"Transform Data\" (open Power Query Editor to clean the data first). Best practice: Always choose \"Transform Data\" first - you'll learn why in Module 3.",
              keyPoints: [
                "Three most common file types: Excel (.xlsx), CSV (.csv), PDF (.pdf)",
                "Excel: Connect to tables or worksheets via Navigator dialog",
                "CSV: Simple text files with comma-separated values - Power BI auto-detects format",
                "PDF: Power BI extracts tables from PDF documents (works best with well-formatted tables)",
                "Navigator dialog shows available tables/worksheets before loading",
                "Best practice: Always choose 'Transform Data' instead of 'Load' (you'll learn why in Module 3)",
                "Excel best practices: Use proper tables, avoid merged cells, ensure headers in first row",
                "CSV best practices: Use UTF-8 encoding, consistent delimiters, headers in first row"
              ],
              insiderTips: [
                "Excel tables (Ctrl+T) are preferred over raw worksheets - they have proper structure",
                "Avoid merged cells in Excel - they cause issues in Power BI",
                "Always use 'Transform Data' instead of 'Load' - you'll need to clean data anyway",
                "CSV files are great for data exports - simple and universal",
                "PDF extraction is not perfect - verify extracted data carefully",
                "Large Excel files may take time to load - be patient",
                "Excel files with multiple sheets - you can select multiple in Navigator",
                "CSV files with different delimiters - Power BI usually auto-detects, but you can specify",
                "PDF files with images of tables won't work - need actual table structure",
                "File paths matter - if you move files, connections will break",
                "For cloud files (OneDrive, SharePoint), use the cloud connectors instead of file connectors",
                "Excel files with formulas - Power BI imports the values, not the formulas"
              ],
              labs: [
                "Open Power BI Desktop (if not already open)",
                "Click 'Get Data' > 'Excel' (or 'Text/CSV' or 'PDF' for other file types)",
                "Browse to a sample Excel file (or create one with sample data)",
                "Select the file and click 'Open'",
                "Observe the Navigator dialog - it shows tables and worksheets",
                "Select a table or worksheet - observe the preview on the right",
                "Click 'Transform Data' (not 'Load') - this opens Power Query Editor",
                "In Power Query Editor, observe the data structure",
                "Close Power Query Editor (we'll learn it in Module 3) - click 'Close & Apply'",
                "Repeat for CSV file: Get Data > Text/CSV",
                "Browse to a CSV file (or create one)",
                "Observe how Power BI auto-detects delimiter and encoding",
                "Click 'Transform Data' to open Power Query Editor",
                "Close Power Query Editor",
                "Optional: Try PDF connection: Get Data > PDF",
                "Browse to a PDF with tables (if available)",
                "Observe how Power BI identifies extractable tables",
                "Select a table and click 'Transform Data'",
                "Close Power Query Editor",
                "Practice: Connect to multiple file types to get comfortable with the process"
              ],
              tables: [
                {
                  title: "File Type Comparison",
                  headers: ["File Type", "Best For", "Pros", "Cons"],
                  rows: [
                    ["Excel (.xlsx)", "Structured data, multiple sheets", "Familiar format, supports tables", "Can be large, slower to load"],
                    ["CSV (.csv)", "Simple data exports, universal format", "Lightweight, fast, universal", "No formatting, single sheet only"],
                    ["PDF (.pdf)", "Reports, documents with tables", "Extracts from documents", "Extraction not perfect, limited"]
                  ]
                },
                {
                  title: "Excel Data Preparation Best Practices",
                  headers: ["Practice", "Do", "Don't", "Why"],
                  rows: [
                    ["Structure", "Use Excel tables (Ctrl+T)", "Use raw ranges", "Tables have proper headers and structure"],
                    ["Headers", "First row contains headers", "Headers in multiple rows", "Power BI expects headers in first row"],
                    ["Cells", "No merged cells", "Merged cells", "Merged cells cause data issues"],
                    ["Data", "Clean data, no subtotals", "Subtotals in data", "Power BI calculates aggregations"],
                    ["Format", "Consistent formatting", "Inconsistent formats", "Consistent format = better data quality"],
                    ["Empty", "Remove empty rows/columns", "Keep empty rows/columns", "Empty rows/columns waste space"]
                  ]
                }
              ]
            },
          },
          {
            id: "2-3",
            moduleNumber: 2,
            lessonNumber: 3,
            title: "Connecting to Databases",
            description: "Connecting to relational databases, which form the backbone of most enterprise data systems. Learn how to connect to SQL Server, Oracle, MySQL, and other database systems with proper authentication.",
            duration: 40,
            difficulty: 'beginner',
            tags: ["Data Acquisition", "Databases", "SQL Server", "Authentication"],
            topic: 'Data Acquisition',
            content: {
              concept: "Connecting to relational databases is essential for enterprise Power BI development. Databases form the backbone of most enterprise data systems, containing the structured, transactional data that organizations rely on for reporting and analysis. Power BI can connect to virtually any relational database, with SQL Server being the most common in Microsoft environments. This lesson will teach you how to connect to databases, understand server and database names, configure authentication, and navigate the connection process. Database connections are more complex than file connections because they require server names, database names, and authentication credentials. However, once configured, database connections provide access to large, structured datasets that are the foundation of enterprise BI solutions.",
              discussion: "The primary example will be SQL Server, which is the most common database in Microsoft environments. However, the concepts apply to other databases like Oracle, MySQL, PostgreSQL, and Access. This lesson will explain the concepts of a Server Name and Database Name, as well as the different authentication modes. Server Name: The server name identifies the database server you want to connect to. It can be a computer name (e.g., 'SERVER01'), a fully qualified domain name (e.g., 'sqlserver.company.com'), an IP address (e.g., '192.168.1.100'), or for Azure SQL Database, a server name like 'myserver.database.windows.net'. The server name tells Power BI where to find the database. Database Name: The database name identifies the specific database on the server. A single SQL Server instance can host multiple databases (e.g., 'SalesDB', 'HRDB', 'FinanceDB'). You need to specify which database contains the data you want. Authentication Modes: There are several authentication methods. Windows Authentication (recommended): Uses your Windows credentials to authenticate. This is the most secure method and is preferred in enterprise environments. You don't need to enter credentials - Power BI uses your logged-in Windows account. SQL Server Authentication: Requires a username and password specific to SQL Server. This is less secure but sometimes necessary when Windows authentication isn't available. Database Authentication: Some databases (like Oracle) have their own authentication systems. Azure Active Directory Authentication: For Azure SQL Database, you can use Azure AD authentication, which is more secure and integrates with Microsoft 365. After entering server and database information and selecting authentication, Power BI connects to the database and shows the Navigator dialog, which lists all tables, views, and stored procedures available in the database. You can select one or more objects to import. For large databases, you may want to use the 'Advanced options' to write a SQL query instead of selecting entire tables - this gives you more control over what data is imported. Database connections can be configured to use Import mode (default) or DirectQuery mode (covered in lesson 2-5). Import mode copies data into Power BI, while DirectQuery queries the database in real-time. Most beginners should use Import mode initially.",
              keyPoints: [
                "Databases are the backbone of enterprise data systems",
                "SQL Server is the most common database in Microsoft environments",
                "Server Name identifies the database server (computer name, FQDN, IP, or Azure server name)",
                "Database Name identifies the specific database on the server",
                "Authentication modes: Windows (recommended), SQL Server, Database-specific, Azure AD",
                "Windows Authentication uses your Windows credentials - most secure",
                "SQL Server Authentication requires username/password - less secure but sometimes necessary",
                "Navigator dialog shows tables, views, and stored procedures after connection"
              ],
              insiderTips: [
                "Windows Authentication is preferred - more secure and easier (no password to remember)",
                "For Azure SQL Database, use Azure AD authentication when possible",
                "Server names can be tricky - ask your DBA for the correct server name",
                "Database names are case-sensitive in some databases (like MySQL) - be careful",
                "For large databases, use 'Advanced options' to write SQL queries instead of selecting entire tables",
                "Test your connection before selecting tables - use 'Test Connection' button if available",
                "If connection fails, check firewall settings - database servers often block external connections",
                "For on-premises databases, you may need a gateway (covered in Module 12)",
                "Database connections can be slow - be patient, especially for large databases",
                "You can connect to multiple databases in a single Power BI file",
                "For production reports, use parameterized connections (covered in Module 3)",
                "Always use 'Transform Data' instead of 'Load' - you'll need to clean data anyway"
              ],
              labs: [
                "Open Power BI Desktop (if not already open)",
                "Click 'Get Data' > 'Database' > 'SQL Server database' (or your database type)",
                "Enter Server name (e.g., 'localhost' for local SQL Server, or ask your DBA)",
                "Enter Database name (e.g., 'AdventureWorks' or your database name)",
                "Select Authentication mode: Windows (recommended) or SQL Server",
                "If using SQL Server Authentication, enter Username and Password",
                "Click 'OK' to connect",
                "Wait for connection (may take a moment)",
                "Observe the Navigator dialog - it shows tables, views, and stored procedures",
                "Expand 'Tables' to see available tables",
                "Select a table - observe the preview on the right",
                "Click 'Transform Data' (not 'Load') - this opens Power Query Editor",
                "In Power Query Editor, observe the data structure",
                "Close Power Query Editor (we'll learn it in Module 3) - click 'Close & Apply'",
                "Optional: Try 'Advanced options' to write a SQL query",
                "Enter a simple SQL query (e.g., 'SELECT TOP 100 * FROM Sales')",
                "Click 'OK' and observe how Power BI imports only the query results",
                "Practice: Connect to different database types if available (Oracle, MySQL, etc.)"
              ],
              tables: [
                {
                  title: "Database Connection Components",
                  headers: ["Component", "Description", "Example", "Notes"],
                  rows: [
                    ["Server Name", "Identifies the database server", "SERVER01, sqlserver.company.com, myserver.database.windows.net", "Can be computer name, FQDN, IP, or Azure server"],
                    ["Database Name", "Identifies the specific database", "SalesDB, AdventureWorks", "Case-sensitive in some databases"],
                    ["Authentication", "How to authenticate", "Windows, SQL Server, Azure AD", "Windows recommended for security"],
                    ["Username", "Database username (if SQL auth)", "sa, dbuser", "Only needed for SQL Server auth"],
                    ["Password", "Database password (if SQL auth)", "********", "Only needed for SQL Server auth"]
                  ]
                },
                {
                  title: "Authentication Mode Comparison",
                  headers: ["Mode", "How It Works", "Security", "When to Use"],
                  rows: [
                    ["Windows Authentication", "Uses your Windows credentials", "High (integrated security)", "Enterprise environments, recommended"],
                    ["SQL Server Authentication", "Username/password for SQL Server", "Medium (password-based)", "When Windows auth not available"],
                    ["Azure AD Authentication", "Uses Azure Active Directory", "High (cloud-based)", "Azure SQL Database, Microsoft 365 integration"],
                    ["Database Authentication", "Database-specific credentials", "Varies by database", "Oracle, MySQL, PostgreSQL"]
                  ]
                }
              ]
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
            description: "After connecting to data, the \"Navigator\" dialog asks to \"Load\" or \"Transform.\" The best practice is to always select \"Transform\" first. This opens the Power Query Editor, where you'll spend significant time cleaning and shaping your data. This lesson introduces you to Power Query and the ETL mindset.",
            duration: 35,
            difficulty: 'beginner',
            tags: ["Power Query", "ETL", "Data Transformation", "Data Cleaning"],
            topic: 'Power Query',
            content: {
              concept: "After connecting to data, the \"Navigator\" dialog asks to \"Load\" or \"Transform.\" The best practice is to always select \"Transform\" first. This opens the Power Query Editor, where you'll spend significant time cleaning and shaping your data. Power Query is Power BI's data preparation engine - it's where raw, messy data becomes clean, analysis-ready data. Understanding Power Query is fundamental because real-world data is rarely perfect. Data comes with inconsistencies, errors, missing values, and structural problems that must be fixed before analysis. Power Query provides a visual, non-destructive way to clean and transform data, making it the most important tool in your Power BI toolkit.",
              discussion: "Power Query is the \"data kitchen\" for Power BI. It is a visual Extract, Transform, and Load (ETL) tool used to clean, shape, and prepare data for analysis. The ETL mindset is crucial: Extract (get data from source), Transform (clean and shape it), Load (bring it into Power BI model). The UI consists of the Ribbon (with transformation tools), the Query List (showing all your queries), the Data Preview (showing the current state of your data), and the Applied Steps pane (showing every transformation you've applied). This Applied Steps pane is the core of Power Query's power: every transformation is recorded as a step that is re-played every time the data is refreshed, making the cleaning process fully automated and non-destructive. You can modify, delete, or reorder steps at any time. The ETL mindset means thinking about data preparation as a pipeline: data flows from source through transformations to the final model. Each transformation should have a clear purpose: removing unwanted columns, fixing data types, cleaning values, filtering rows, etc. Power Query uses a functional language called M behind the scenes, but you don't need to learn M to use Power Query effectively - the visual interface handles everything. However, understanding that each click generates M code helps you understand how Power Query works. The key insight: Power Query transformations are repeatable and automated. Once you set up your transformations, they run automatically every time you refresh your data. This means you can connect to a messy Excel file, clean it once, and then every time that Excel file is updated, Power Query will automatically apply all your cleaning steps. This automation is what makes Power Query powerful - you clean data once, and it stays clean forever (as long as your transformations handle new data correctly).",
              keyPoints: [
                "Always choose 'Transform Data' instead of 'Load' - you'll need to clean data anyway",
                "Power Query is a visual ETL tool: Extract, Transform, Load",
                "Applied Steps pane records every transformation - fully automated and repeatable",
                "Transformations are non-destructive - you can modify or delete steps anytime",
                "Power Query uses M language behind the scenes, but visual interface is sufficient",
                "Transformations run automatically on every data refresh",
                "Clean data once, it stays clean forever (if transformations are correct)",
                "Power Query is where you'll spend 30-40% of your Power BI development time"
              ],
              insiderTips: [
                "Always choose 'Transform Data' - even if data looks clean, you'll find issues",
                "The Applied Steps pane is your best friend - review it regularly to understand your pipeline",
                "You can click on any step in Applied Steps to see the data at that point",
                "Right-click on steps to delete, rename, or modify them",
                "Power Query preview shows first 1000 rows - use 'Keep Top Rows' to test on sample data",
                "The formula bar shows the M code for the selected step - great for learning",
                "You can copy M code from Advanced Editor and reuse it in other queries",
                "Power Query transformations are cached - first run is slower, subsequent runs are faster",
                "Use 'Close & Apply' to save transformations and load data into Power BI model",
                "You can have multiple queries in Power Query - each is independent",
                "Queries can reference other queries - powerful for building complex transformations",
                "The 'Refresh Preview' button updates the preview without closing Power Query"
              ],
              labs: [
                "Connect to a sample data source (Excel or CSV file)",
                "In Navigator dialog, select a table/worksheet",
                "Click 'Transform Data' (not 'Load') - this opens Power Query Editor",
                "Observe the Power Query Editor interface:",
                "  - Ribbon at top (Home, Transform, Add Column, View tabs)",
                "  - Query List on left (shows all queries)",
                "  - Data Preview in center (shows current data state)",
                "  - Applied Steps pane on right (shows transformation history)",
                "  - Formula bar below ribbon (shows M code for selected step)",
                "Click on 'Source' step in Applied Steps pane - observe data at that point",
                "Click on different steps (if any) - observe how data changes",
                "Right-click on a step - observe options: Delete, Rename, Insert Step After, etc.",
                "Click on 'Source' step again",
                "Try a simple transformation: Click on a column header, then Home > Remove Columns",
                "Observe: A new step appears in Applied Steps pane",
                "Click on the new step - observe the M code in formula bar",
                "Right-click on the new step > Delete - step is removed, data reverts",
                "Try another transformation: Transform > Data Type > Whole Number (on a numeric column)",
                "Observe: Another step appears in Applied Steps",
                "Review all steps in Applied Steps pane - understand the transformation pipeline",
                "Click 'Close & Apply' to save transformations and load data into Power BI",
                "Return to Power Query: Home > Transform Data",
                "Familiarize yourself with the interface - you'll use it extensively"
              ],
              tables: [
                {
                  title: "Power Query Editor Components",
                  headers: ["Component", "Location", "Purpose", "Key Feature"],
                  rows: [
                    ["Ribbon", "Top", "Transformation tools and commands", "Contextual tabs (Home, Transform, Add Column, View)"],
                    ["Query List", "Left", "Shows all queries in your file", "Can have multiple queries, can reference each other"],
                    ["Data Preview", "Center", "Shows current state of data", "First 1000 rows, updates as you transform"],
                    ["Applied Steps", "Right", "History of all transformations", "Click any step to see data at that point"],
                    ["Formula Bar", "Below ribbon", "Shows M code for selected step", "Can edit M code directly (advanced)"]
                  ]
                },
                {
                  title: "ETL Process in Power Query",
                  headers: ["Stage", "What Happens", "Power Query Tools", "Example"],
                  rows: [
                    ["Extract", "Get data from source", "Get Data, Navigator", "Connect to Excel file, select worksheet"],
                    ["Transform", "Clean and shape data", "All transformation tools", "Remove columns, fix types, filter rows"],
                    ["Load", "Bring data into model", "Close & Apply", "Data appears in Power BI model"]
                  ]
                }
              ]
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
            description: "Fixing \"dirty\" data to make it usable for analysis. This lesson covers essential data cleaning techniques including replacing values, changing data types, handling errors, and splitting/merging columns.",
            duration: 45,
            difficulty: 'beginner',
            tags: ["Power Query", "Data Cleaning", "Data Formatting", "Data Quality"],
            topic: 'Power Query',
            content: {
              concept: "Fixing \"dirty\" data to make it usable for analysis is a fundamental skill in Power BI. Real-world data is rarely clean and ready for visualization. Data cleaning involves identifying and fixing issues that prevent accurate analysis, including misspellings, inconsistent formatting, missing values, incorrect data types, and structural problems. Power Query provides powerful tools for cleaning data, and mastering these tools is essential for producing reliable reports. The key insight: clean data = reliable insights; dirty data = misleading reports. Data cleaning is often 80% of the work in data analysis, but Power Query makes it efficient and repeatable.",
              discussion: "Data cleaning involves identifying and fixing issues that prevent accurate analysis. Common problems include misspellings, inconsistent formatting, missing values, and incorrect data types. Replace Values corrects misspellings or standardizes categories (e.g., 'USA', 'United States', 'U.S.A.' → 'United States'). This is crucial for categorical data where consistency matters. You can replace values in a column by right-clicking the column > Replace Values, or using Transform > Replace Values. The 'Match entire cell contents' option ensures precise replacements. Change Data Type converts columns from text to whole numbers, decimals, or dates—critical for proper calculations and sorting. Text numbers won't sort correctly (e.g., '10' comes before '2' in text sorting). Dates stored as text won't work in date calculations. You can change data types by clicking the data type icon in the column header or using Transform > Data Type. Handle Errors removes or replaces error values that occur during transformations. Errors can occur when converting data types (e.g., trying to convert 'ABC' to a number) or when applying transformations to incompatible data. You can handle errors by right-clicking a column with errors > Remove Errors, or by using Transform > Replace Errors to replace errors with nulls or specific values. Fill Down/Up is a powerful tool for \"un-merging\" cells from messy Excel exports where merged cells create blank values. This is common when Excel files have merged header cells or grouped data. Fill Down copies the value from the cell above into blank cells below, effectively un-merging merged cells. Split and Merge Columns allows combining or separating text data. Split Columns splits a single column into multiple columns (e.g., splitting 'John Smith' into 'First Name' and 'Last Name' using space as delimiter). Merge Columns combines multiple columns into one (e.g., merging 'First Name' and 'Last Name' back into 'Full Name'). These operations are essential for restructuring data to fit your analysis needs.",
              keyPoints: [
                "Data cleaning is often 80% of the work in data analysis",
                "Replace Values standardizes categories and fixes misspellings",
                "Change Data Type is critical for proper calculations and sorting",
                "Handle Errors prevents error values from breaking your analysis",
                "Fill Down/Up fixes merged cell issues from Excel exports",
                "Split and Merge Columns restructures data to fit analysis needs",
                "Power Query's non-destructive approach means you can always undo or modify steps",
                "Applied Steps pane shows the complete transformation history",
                "Clean data = reliable insights; dirty data = misleading reports"
              ],
              insiderTips: [
                "Always check data types first—text numbers won't sort or calculate correctly",
                "Use Replace Values with 'Match entire cell contents' for precise replacements",
                "Fill Down is your friend when dealing with Excel exports with merged headers",
                "Handle errors early in the pipeline to avoid cascading issues",
                "Preview data frequently to catch issues before they compound",
                "When changing data types, Power Query shows a warning if errors will occur—review it",
                "Split Columns by delimiter is most common—use space, comma, or custom delimiter",
                "Merge Columns with a separator (like space or comma) for readable combined values",
                "Use 'Remove Errors' to quickly clean columns with many errors",
                "Replace Errors with nulls is often better than removing rows—preserves data structure",
                "Fill Down works on selected columns—select multiple columns to fill all at once",
                "Split Columns can split by number of characters, positions, or delimiters"
              ],
              labs: [
                "Open a messy dataset with various data quality issues",
                "Replace Values:",
                "  - Right-click a column with inconsistent values (e.g., 'USA', 'United States', 'U.S.A.')",
                "  - Select 'Replace Values'",
                "  - Enter value to find (e.g., 'U.S.A.')",
                "  - Enter value to replace (e.g., 'United States')",
                "  - Check 'Match entire cell contents' for precise replacement",
                "  - Click OK and observe the change",
                "  - Repeat for other variations",
                "Change Data Types:",
                "  - Click data type icon on a column header (e.g., 'ABC123' for text)",
                "  - Select new data type (e.g., 'Whole Number' for numeric text)",
                "  - If errors occur, observe the warning dialog",
                "  - Choose to 'Replace current' or 'Add new step'",
                "  - Review any errors that occurred",
                "Handle Errors:",
                "  - Right-click a column with errors",
                "  - Select 'Remove Errors' to remove rows with errors",
                "  - OR select 'Replace Errors' to replace errors with nulls or specific values",
                "  - Observe how errors are handled",
                "Fill Down:",
                "  - Select a column with blank values (from merged cells)",
                "  - Transform > Fill > Down",
                "  - Observe how blank values are filled with values from above",
                "Split Columns:",
                "  - Select a column with combined data (e.g., 'First Name Last Name')",
                "  - Transform > Split Column > By Delimiter",
                "  - Choose delimiter (e.g., space)",
                "  - Choose split position (e.g., 'Left-most delimiter')",
                "  - Click OK and observe new columns created",
                "Merge Columns:",
                "  - Select multiple columns (e.g., 'First Name' and 'Last Name')",
                "  - Transform > Merge Columns",
                "  - Choose separator (e.g., space)",
                "  - Enter new column name (e.g., 'Full Name')",
                "  - Click OK and observe merged column",
                "Review all applied steps in Applied Steps pane",
                "Practice: Combine multiple cleaning operations on a messy dataset"
              ],
              tables: [
                {
                  title: "Common Data Cleaning Operations",
                  headers: ["Operation", "Purpose", "When to Use", "Power Query Location"],
                  rows: [
                    ["Replace Values", "Standardize categories, fix misspellings", "Inconsistent category names", "Right-click column > Replace Values"],
                    ["Change Data Type", "Convert text to numbers/dates", "Text numbers, text dates", "Column header data type icon"],
                    ["Handle Errors", "Remove or replace error values", "Columns with transformation errors", "Right-click column > Remove/Replace Errors"],
                    ["Fill Down/Up", "Fix merged cell issues", "Excel exports with merged cells", "Transform > Fill > Down/Up"],
                    ["Split Columns", "Separate combined data", "Full names, addresses, codes", "Transform > Split Column"],
                    ["Merge Columns", "Combine separate data", "First/Last name, address parts", "Transform > Merge Columns"]
                  ]
                },
                {
                  title: "Data Type Conversion Guide",
                  headers: ["From", "To", "Common Issues", "Solution"],
                  rows: [
                    ["Text Number", "Whole Number/Decimal", "Leading zeros, formatting", "Change Data Type, handle errors"],
                    ["Text Date", "Date", "Different date formats", "Change Data Type, may need format standardization"],
                    ["Text", "Text", "Inconsistent formatting", "Replace Values, Trim, Clean"],
                    ["Any", "Any", "Error values", "Handle Errors before conversion"]
                  ]
                }
              ]
            },
          },
          {
            id: "3-4",
            moduleNumber: 3,
            lessonNumber: 4,
            title: "Shaping Data – Pivot and Unpivot",
            description: "Restructuring data to be suitable for analysis. This lesson covers the critical Pivot and Unpivot operations that transform data between wide and tall formats, which is essential for Power BI visualizations.",
            duration: 40,
            difficulty: 'beginner',
            tags: ["Power Query", "Data Shaping", "Pivot", "Unpivot", "Data Transformation"],
            topic: 'Power Query',
            content: {
              concept: "Restructuring data to be suitable for analysis is a critical transformation skill. Power BI requires data in a specific \"tall\" format rather than the \"wide\" format common in Excel. The tall format (also called normalized or tidy format) has one row per observation, with values in rows rather than columns. The wide format (also called denormalized or crosstab format) has multiple values in columns, which is common in Excel pivot tables and reports. Understanding when to use Pivot vs. Unpivot is crucial because Power BI visuals work best with tall data, but source data is often in wide format. Unpivot is one of the most common transformations you'll perform - it's essential for time series data, budget vs. actual comparisons, and any data where periods or categories are in columns.",
              discussion: "Unpivot is a crucial operation that transforms wide data (e.g., columns for Jan, Feb, Mar, Apr) into tall data (one 'Month' column, one 'Value' column). This tall format is the correct, tidy format for BI tools. Power BI visuals work best when data is structured with one row per observation. When you unpivot, you select columns to unpivot (e.g., month columns), and Power Query creates two new columns: 'Attribute' (containing the original column names) and 'Value' (containing the values). You then rename these columns appropriately (e.g., 'Attribute' → 'Month', 'Value' → 'Sales'). Unpivot preserves all data - no information is lost. This is different from Pivot, which aggregates data. Common scenarios requiring Unpivot: time series data with months/years as columns, budget vs. actual comparisons with columns for each scenario, survey data with questions as columns, and any Excel report with periods or categories as column headers. Pivot is the reverse operation, used less frequently, that aggregates data into a wide format. Pivot takes a column of values and creates new columns from unique values in another column. For example, pivoting 'Month' column creates columns for each month, with values aggregated from the 'Sales' column. Pivot requires aggregation (SUM, COUNT, AVERAGE, etc.) because multiple rows may map to the same cell. Pivot is useful when you need to create a summary table or when exporting data back to Excel format. However, Pivot reduces granularity - you lose the ability to drill down to individual rows. Understanding when to use each transformation is key to building effective data models. As a general rule: use Unpivot for Power BI (tall format is preferred), use Pivot only when you need a specific wide format output.",
              keyPoints: [
                "BI tools prefer 'tall' data (many rows, few columns) over 'wide' data (few rows, many columns)",
                "Unpivot transforms wide data to tall format - essential for Power BI",
                "Unpivot preserves all data - no information is lost",
                "Pivot aggregates data into wide format - reduces granularity",
                "Unpivot is one of the most common transformations you'll perform",
                "Time series data in Excel often needs unpivoting for Power BI",
                "Tall format enables better filtering, sorting, and visualization",
                "Use 'Unpivot Other Columns' to keep certain columns while unpivoting others"
              ],
              insiderTips: [
                "If your data has months/years as columns, you'll almost certainly need to unpivot",
                "Use 'Unpivot Other Columns' to keep certain columns (like Product, Region) while unpivoting time periods",
                "Unpivoted data is easier to filter and aggregate in Power BI",
                "Remember: Unpivot preserves all data; Pivot aggregates it",
                "After unpivoting, rename 'Attribute' and 'Value' columns to meaningful names",
                "Unpivot works on multiple columns at once - select all columns to unpivot",
                "Pivot requires choosing an aggregation function - choose carefully (SUM, COUNT, AVERAGE)",
                "Pivot can create many columns if the pivot column has many unique values - be careful",
                "Use 'Unpivot Only Selected Columns' to unpivot specific columns while keeping others",
                "Unpivot is non-destructive - you can always pivot back if needed",
                "For time series data, unpivot first, then create a proper date column from the month names",
                "Unpivot is faster than Pivot because it doesn't require aggregation"
              ],
              labs: [
                "Start with a wide dataset: Sales data with columns for each month (Jan, Feb, Mar, etc.)",
                "Observe the wide format: One row per product, multiple columns for months",
                "Select all month columns (Jan, Feb, Mar, etc.)",
                "Right-click selected columns > Unpivot Columns",
                "Observe the transformation:",
                "  - New 'Attribute' column contains month names (Jan, Feb, Mar, etc.)",
                "  - New 'Value' column contains sales values",
                "  - Product column is preserved",
                "Rename columns:",
                "  - Right-click 'Attribute' column > Rename > 'Month'",
                "  - Right-click 'Value' column > Rename > 'Sales'",
                "Verify the transformation: You should now have one row per month per product",
                "Observe the tall format: Many rows, few columns",
                "Practice with 'Unpivot Other Columns':",
                "  - Select only month columns to unpivot",
                "  - Use 'Unpivot Other Columns' to keep Product and Region columns",
                "Practice the reverse: Pivot the Month column",
                "  - Select Month column",
                "  - Transform > Pivot Column",
                "  - Choose 'Sales' as Values Column",
                "  - Choose aggregation (e.g., SUM)",
                "  - Observe how data returns to wide format",
                "Compare: Unpivot preserves all data, Pivot aggregates it",
                "Practice: Unpivot a budget vs. actual dataset with columns for Budget and Actual",
                "Review all applied steps in Applied Steps pane",
                "Understand why Unpivot is preferred for Power BI visualizations"
              ],
              tables: [
                {
                  title: "Pivot vs. Unpivot Comparison",
                  headers: ["Aspect", "Unpivot", "Pivot", "When to Use"],
                  rows: [
                    ["Data Format", "Wide → Tall", "Tall → Wide", "Unpivot for Power BI, Pivot for exports"],
                    ["Data Loss", "None (preserves all data)", "Aggregates (reduces granularity)", "Unpivot when you need detail"],
                    ["Common Use", "Time series, categories as columns", "Summary tables, Excel exports", "Unpivot is more common"],
                    ["Aggregation", "Not required", "Required (SUM, COUNT, etc.)", "Pivot needs aggregation function"],
                    ["Performance", "Fast (no aggregation)", "Slower (requires aggregation)", "Unpivot is faster"],
                    ["Power BI Preference", "Preferred (tall format)", "Rarely used", "Always unpivot for Power BI"]
                  ]
                },
                {
                  title: "Common Unpivot Scenarios",
                  headers: ["Scenario", "Wide Format Example", "Tall Format Result", "Why Unpivot"],
                  rows: [
                    ["Time Series", "Columns: Jan, Feb, Mar, Apr", "Rows: Month, Value", "Power BI needs time in rows"],
                    ["Budget vs. Actual", "Columns: Budget, Actual", "Rows: Scenario, Value", "Easier to compare in visuals"],
                    ["Survey Data", "Columns: Q1, Q2, Q3", "Rows: Question, Answer", "Better for analysis"],
                    ["Multi-Year Data", "Columns: 2022, 2023, 2024", "Rows: Year, Value", "Enables time intelligence"]
                  ]
                }
              ]
            },
          },
          {
            id: "3-5",
            moduleNumber: 3,
            lessonNumber: 5,
            title: "Advanced Shaping (Conditional Columns & Grouping)",
            description: "Using Power Query's UI to perform more advanced logic including conditional columns and grouping operations. Learn how to create calculated columns and pre-aggregate data without writing code.",
            duration: 40,
            difficulty: 'beginner',
            tags: ["Power Query", "Conditional Columns", "Grouping", "Aggregation"],
            topic: 'Power Query',
            content: {
              concept: "Using Power Query's UI to perform more advanced logic allows you to create calculated columns and aggregations without writing code. Conditional Columns create new columns based on IF/THEN logic, enabling you to categorize or classify data based on conditions. Grouping and Aggregating performs a 'Group By' operation to summarize data before it's even loaded into the model, which can dramatically reduce model size and improve performance. These operations are essential for data preparation and can often replace complex DAX calculations by doing the work in Power Query instead. The key insight: do as much transformation as possible in Power Query (at refresh time) rather than in DAX (at query time) for better performance.",
              discussion: "Conditional Columns create new columns based on IF/THEN logic (e.g., categorizing sales amounts into 'High,' 'Medium,' or 'Low' based on thresholds). This is done through a visual interface that generates M code behind the scenes. You access conditional columns through Add Column > Conditional Column. The interface allows you to build complex IF/THEN/ELSE logic with multiple conditions. For example, you can create a 'Price Category' column: If Price > 100 then 'High', else if Price > 50 then 'Medium', else 'Low'. Conditional columns are user-friendly alternatives to writing M code directly, making them accessible to non-programmers. However, for very complex logic, you may need to write M code in a custom column. Grouping and Aggregating performs a 'Group By' operation to summarize data before it's even loaded into the model (e.g., calculating total sales per region). This can significantly reduce model size by pre-aggregating data at the source, improving both refresh time and report performance. Grouping is accessed through Transform > Group By. You select columns to group by (e.g., Region, Year) and choose aggregation functions (SUM, COUNT, AVERAGE, MIN, MAX, etc.) for numeric columns. Grouping creates a summary table with one row per unique combination of group-by columns. This is powerful for creating summary tables for executive dashboards or when you don't need row-level detail. However, grouping reduces granularity - once grouped, you lose the ability to drill down to individual transactions. The decision to group depends on your analysis needs: if you need detail, don't group; if you only need summaries, group early in the pipeline. Grouping at the source (in Power Query) is often better than aggregating in DAX because it reduces data size and improves performance. However, grouping means you can't drill down later - make sure you don't need detail before grouping.",
              keyPoints: [
                "Conditional columns create calculated columns using IF/THEN logic without writing code",
                "Conditional columns are user-friendly alternatives to M code for simple logic",
                "Grouping pre-aggregates data at refresh time, reducing model size",
                "Pre-aggregation improves performance but reduces granularity",
                "Group early if you don't need row-level detail—it speeds up everything downstream",
                "These transformations happen at refresh time, not query time",
                "Grouping in Power Query is often better than aggregating in DAX",
                "Once grouped, you lose the ability to drill down to individual transactions"
              ],
              insiderTips: [
                "Group early if you don't need row-level detail—it speeds up everything downstream",
                "Conditional columns are easier to maintain than complex M formulas for simple logic",
                "Use grouping to create summary tables for executive dashboards",
                "Remember: Once grouped, you lose the ability to drill down to individual transactions",
                "Conditional columns support multiple conditions - use 'Add Clause' for complex logic",
                "Grouping can dramatically reduce refresh time for large datasets",
                "Use grouping when you have millions of rows but only need summaries",
                "Conditional columns generate M code - you can view it in Advanced Editor",
                "For very complex conditional logic, consider a custom column with M code",
                "Grouping by date (e.g., Year, Month) is common for time-based summaries",
                "You can group by multiple columns - creates one row per unique combination",
                "Grouping preserves group-by columns and creates aggregated columns"
              ],
              labs: [
                "Create a conditional column:",
                "  - Add Column > Conditional Column",
                "  - Column name: 'Price Category'",
                "  - If UnitPrice > 100 then 'High'",
                "  - Else if UnitPrice > 50 then 'Medium'",
                "  - Else 'Low'",
                "  - Click OK and observe the new column",
                "Practice with multiple conditions:",
                "  - Create 'Sales Category' based on SalesAmount",
                "  - Add multiple clauses using 'Add Clause'",
                "  - Test different threshold values",
                "Practice grouping:",
                "  - Transform > Group By",
                "  - Group by: Region",
                "  - New column name: 'Total Sales'",
                "  - Operation: Sum",
                "  - Column: SalesAmount",
                "  - Click OK and observe the summary table",
                "Group by multiple columns:",
                "  - Transform > Group By",
                "  - Group by: Region, Year",
                "  - Add multiple aggregations:",
                "    - Total Sales (Sum of SalesAmount)",
                "    - Order Count (Count of OrderID)",
                "    - Average Sales (Average of SalesAmount)",
                "  - Click OK and observe the grouped data",
                "Compare data before and after grouping:",
                "  - Note the row count reduction",
                "  - Note the column structure change",
                "Experiment with different aggregation functions:",
                "  - SUM, COUNT, AVERAGE, MIN, MAX",
                "  - Observe how each function affects the results",
                "Practice: Create a conditional column and then group by that column",
                "Review all applied steps in Applied Steps pane",
                "Understand when to use conditional columns vs. grouping"
              ],
              tables: [
                {
                  title: "Conditional Column vs. Grouping",
                  headers: ["Aspect", "Conditional Column", "Grouping", "When to Use"],
                  rows: [
                    ["Purpose", "Create calculated columns", "Summarize data", "Conditional: categorization, Grouping: aggregation"],
                    ["Data Size", "No change (adds column)", "Reduces (fewer rows)", "Grouping reduces model size"],
                    ["Granularity", "Preserves detail", "Reduces detail", "Conditional: keep detail, Grouping: summary only"],
                    ["Performance", "Minimal impact", "Improves (fewer rows)", "Grouping improves performance"],
                    ["Complexity", "Simple IF/THEN logic", "Aggregation functions", "Both are user-friendly"]
                  ]
                },
                {
                  title: "Common Aggregation Functions",
                  headers: ["Function", "Purpose", "Use Case", "Example"],
                  rows: [
                    ["SUM", "Total of values", "Total sales, revenue", "Sum of SalesAmount"],
                    ["COUNT", "Count of rows", "Order count, record count", "Count of OrderID"],
                    ["AVERAGE", "Average of values", "Average price, average sales", "Average of UnitPrice"],
                    ["MIN", "Minimum value", "Lowest price, earliest date", "Min of UnitPrice"],
                    ["MAX", "Maximum value", "Highest price, latest date", "Max of SalesAmount"],
                    ["COUNT DISTINCT", "Unique count", "Unique customers, products", "Count distinct of CustomerID"]
                  ]
                }
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
            description: "This lesson serves to demystify the code behind Power Query, not to teach it (yet). Learn how every click in the UI generates M code and how to view and understand the code behind your transformations.",
            duration: 30,
            difficulty: 'beginner',
            tags: ["Power Query", "M Language", "Advanced Editor"],
            topic: 'Power Query',
            content: {
              concept: "This lesson serves to demystify the code behind Power Query, not to teach it (yet). Every click you make in the Power Query UI generates code in a functional language called M. Understanding that your transformations are actually code helps you understand how Power Query works and prepares you for advanced scenarios where you'll need to write M code directly. The Advanced Editor allows you to view and edit the M code directly, giving you full control over your transformations. This lesson introduces you to the Advanced Editor and helps you understand the relationship between UI actions and M code.",
              discussion: "By clicking the \"Advanced Editor\" button, a user can see that every click made in the UI has been writing code in a functional language called \"M\". This plants the seed for advanced work in Module 15 where you'll learn to write M code directly. The Advanced Editor shows the complete M code for your query, including all transformations as a single expression. M is a functional language, meaning it uses functions and expressions rather than imperative statements. The code structure follows a pattern: let...in, where 'let' defines variables (your steps) and 'in' returns the final result. Each step in Applied Steps corresponds to a line or section of M code. Understanding this relationship helps you understand how Power Query works: when you click a button, Power Query generates M code; when you refresh, Power Query executes that M code. The Advanced Editor is useful for: viewing the complete transformation logic, copying code between queries, understanding complex transformations, and writing custom M code for advanced scenarios. You don't need to learn M to use Power Query effectively - the UI handles most scenarios. However, understanding that M code exists and how to view it prepares you for advanced scenarios where the UI isn't sufficient. Common scenarios requiring M code: complex conditional logic, custom functions, advanced text manipulation, and dynamic query generation. For now, this lesson focuses on demystifying M code - showing you that it exists and how to view it, not teaching you to write it (that comes in Module 15).",
              keyPoints: [
                "Every UI action in Power Query generates M code behind the scenes",
                "M is a functional language used by Power Query",
                "Advanced Editor shows the complete M code for your query",
                "Each step in Applied Steps corresponds to M code",
                "M code follows a let...in pattern (variables in 'let', result in 'in')",
                "You don't need to learn M to use Power Query effectively",
                "Understanding M code helps with advanced scenarios",
                "Advanced Editor is useful for viewing, copying, and editing M code"
              ],
              insiderTips: [
                "Open Advanced Editor regularly to understand what your transformations actually do",
                "You can copy M code from one query and paste it into another (useful for reusable logic)",
                "The formula bar shows M code for the selected step - great for learning",
                "M code is case-sensitive - be careful when editing manually",
                "Advanced Editor has syntax highlighting - helps identify errors",
                "You can comment M code using // for single-line or /* */ for multi-line",
                "If Advanced Editor shows errors, check the Applied Steps pane for the problematic step",
                "Don't be intimidated by M code - it's just a different way to express what you did in the UI",
                "For now, use Advanced Editor to view code, not edit it (unless you're comfortable)",
                "M code can be formatted - use the Format button in Advanced Editor",
                "You can undo Advanced Editor changes - Power Query keeps your UI steps",
                "Advanced Editor is your gateway to advanced Power Query scenarios"
              ],
              labs: [
                "Open Power Query Editor with a query that has several transformation steps",
                "Review the Applied Steps pane - note all your transformation steps",
                "Click 'Advanced Editor' button in Home tab",
                "Observe the M code window - this is your complete query code",
                "Notice the 'let' section - this contains all your steps",
                "Notice the 'in' section - this returns the final result",
                "Find a step in Applied Steps (e.g., 'Removed Columns')",
                "Click on that step in Applied Steps pane",
                "Observe the formula bar below the ribbon - it shows M code for that step",
                "Compare: Formula bar shows one step, Advanced Editor shows all steps",
                "In Advanced Editor, try to identify which M code corresponds to which step",
                "Click 'Done' to close Advanced Editor (don't modify code yet)",
                "Practice: Open Advanced Editor for different queries to see different M code patterns",
                "Optional: Try copying M code from one query's Advanced Editor",
                "Paste it into a new query's Advanced Editor (create a blank query first)",
                "Observe how the code creates the same transformations",
                "Understand: This is how you can reuse transformation logic",
                "For now, just view the code - don't edit it unless you're comfortable",
                "Familiarize yourself with the Advanced Editor - you'll use it more in Module 15"
              ],
              tables: [
                {
                  title: "M Code Structure",
                  headers: ["Section", "Purpose", "Contains", "Example"],
                  rows: [
                    ["let", "Define variables/steps", "All transformation steps", "Source = ..., RemovedColumns = ..., etc."],
                    ["in", "Return final result", "Final table/query", "RemovedColumns (or final step name)"],
                    ["Steps", "Individual transformations", "Each UI action", "Source, RemovedColumns, ChangedType"],
                    ["Functions", "M language functions", "Built-in or custom", "Table.SelectColumns, Table.TransformColumns"]
                  ]
                },
                {
                  title: "When to Use Advanced Editor",
                  headers: ["Scenario", "Why Use Advanced Editor", "Difficulty", "Module"],
                  rows: [
                    ["View Code", "Understand what transformations do", "Easy", "This lesson"],
                    ["Copy Code", "Reuse transformation logic", "Easy", "This lesson"],
                    ["Edit Code", "Modify complex transformations", "Moderate", "Module 15"],
                    ["Write Custom", "Advanced scenarios UI can't handle", "Advanced", "Module 15"],
                    ["Debug", "Find errors in transformations", "Moderate", "Module 15"]
                  ]
                }
              ]
            },
          },
          {
            id: "3-9",
            moduleNumber: 3,
            lessonNumber: 9,
            title: "Close & Apply",
            description: "The final step in the Power Query Editor. Learn how to save your transformations and load data into the Power BI model, and understand what happens when you close Power Query.",
            duration: 20,
            difficulty: 'beginner',
            tags: ["Power Query", "Data Loading", "Close & Apply"],
            topic: 'Power Query',
            content: {
              concept: "The final step in the Power Query Editor is closing it and applying your transformations. Clicking \"Close & Apply\" executes all the applied steps, closes the editor, and loads the clean, transformed data into the Power BI data model. This is when your transformations actually run and your data becomes available for visualization. Understanding what happens during Close & Apply is important because it's when Power Query processes your data, which can take time for large datasets or complex transformations.",
              discussion: "Clicking \"Close & Apply\" executes all the applied steps, closes the editor, and loads the clean, transformed data into the Power BI data model. This is a critical moment in your Power BI workflow - it's when your transformations are actually executed and your data is loaded into the model. During Close & Apply, Power Query: executes all M code for all queries (in order), processes all transformations (which can take time for large datasets), loads data into the Power BI in-memory engine (VertiPaq), and makes data available in Report View, Data View, and Model View. The time this takes depends on: data size (more rows = longer processing), transformation complexity (more steps = longer processing), number of queries (more queries = longer processing), and your computer's performance (CPU, RAM, disk speed). You'll see a progress dialog showing which query is being processed. For large datasets, this can take several minutes. You can cancel the process if needed, but you'll need to fix any issues before trying again. After Close & Apply completes, your data is in the Power BI model and ready for visualization. You can now build reports in Report View, inspect data in Data View, and create relationships in Model View. If you need to modify transformations later, you can return to Power Query by clicking \"Transform Data\" in the Home tab. This reopens Power Query with all your steps intact, allowing you to modify, add, or remove transformations. The key insight: Close & Apply is when your work in Power Query becomes real - your transformed data is now part of your Power BI model.",
              keyPoints: [
                "Close & Apply executes all transformations and loads data into Power BI model",
                "This is when Power Query processes your data (can take time for large datasets)",
                "Progress dialog shows which query is being processed",
                "After Close & Apply, data is available in Report, Data, and Model views",
                "You can return to Power Query anytime by clicking 'Transform Data'",
                "Close & Apply is when your transformations become part of your Power BI model",
                "Processing time depends on data size, transformation complexity, and computer performance",
                "You can cancel Close & Apply if needed, but must fix issues before retrying"
              ],
              insiderTips: [
                "Close & Apply can take time for large datasets - be patient",
                "Progress dialog shows which query is processing - useful for debugging slow queries",
                "If Close & Apply fails, check the error message - it usually points to the problematic step",
                "You can cancel Close & Apply if it's taking too long - then fix issues and retry",
                "After Close & Apply, check Data View to verify your data loaded correctly",
                "If you see errors after Close & Apply, return to Power Query to fix them",
                "Close & Apply processes all queries - if one fails, the whole process may fail",
                "For large datasets, consider filtering data early in Power Query to reduce processing time",
                "You can close Power Query without applying (X button) - changes won't be saved",
                "Always use Close & Apply to save your transformations (not just closing the window)",
                "After Close & Apply, your .pbix file size increases (data is stored in the file)",
                "Close & Apply is required before you can build visualizations"
              ],
              labs: [
                "Complete your transformations in Power Query Editor",
                "Review all applied steps in Applied Steps pane - ensure they're correct",
                "Click 'Close & Apply' button in Home tab (top-left)",
                "Observe the progress dialog - it shows which query is being processed",
                "Wait for processing to complete (may take time for large datasets)",
                "After processing completes, Power Query Editor closes automatically",
                "You're now back in Power BI Desktop (Report View)",
                "Verify data loaded correctly:",
                "  - Click Data View icon (left sidebar)",
                "  - Observe your tables and data",
                "  - Check that transformations were applied correctly",
                "Return to Power Query if needed:",
                "  - Home tab > Transform Data",
                "  - Power Query Editor reopens with all your steps intact",
                "  - Make any modifications needed",
                "  - Close & Apply again to save changes",
                "Practice: Make a small change in Power Query, Close & Apply, verify the change",
                "Understand: Close & Apply is when your transformations become part of your model"
              ],
              tables: [
                {
                  title: "Close & Apply Process",
                  headers: ["Step", "What Happens", "Time", "Notes"],
                  rows: [
                    ["Click Close & Apply", "Process starts", "Instant", "Button in Home tab"],
                    ["Execute M Code", "Run all transformations", "Depends on data size", "Can take seconds to minutes"],
                    ["Load to Model", "Data into VertiPaq engine", "Depends on data size", "In-memory compression"],
                    ["Close Editor", "Power Query closes", "Instant", "Back to Power BI Desktop"],
                    ["Data Available", "Ready for visualization", "Instant", "Can build reports now"]
                  ]
                },
                {
                  title: "Factors Affecting Close & Apply Time",
                  headers: ["Factor", "Impact", "How to Optimize", "Example"],
                  rows: [
                    ["Data Size", "More rows = longer time", "Filter early in Power Query", "1M rows vs. 100K rows"],
                    ["Transformation Complexity", "More steps = longer time", "Simplify transformations", "10 steps vs. 50 steps"],
                    ["Number of Queries", "More queries = longer time", "Combine queries if possible", "5 queries vs. 20 queries"],
                    ["Computer Performance", "Faster CPU/RAM = faster", "Use better hardware", "SSD vs. HDD"],
                    ["Data Source Speed", "Slow source = longer time", "Use faster data sources", "Local file vs. slow database"]
                  ]
                }
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
            description: "Writing basic row-context DAX formulas in the Data View. Learn how to create calculated columns for text concatenation, categorization, and conditional logic using IF and SWITCH functions.",
            duration: 40,
            difficulty: 'intermediate',
            tags: ["DAX", "Calculated Columns", "Hands-On Lab"],
            topic: 'DAX',
            content: {
              concept: "Writing basic row-context DAX formulas in the Data View. Calculated columns are evaluated row-by-row at data refresh time, making them perfect for row-level calculations that need to appear in slicers, axes, or filters. This lab teaches you how to create calculated columns for common scenarios like text concatenation, categorization, and conditional logic. Remember: use calculated columns only when you must - when the result is needed in a slicer, on an axis, or as a filter. For aggregations, use measures instead.",
              discussion: "Calculated columns are created in Data View or Model View by right-clicking a table and selecting 'New Column'. The formula bar appears where you write DAX expressions. Calculated columns use Row Context - they evaluate for each row individually. This is why [Quantity] * [UnitPrice] works in a calculated column - it's evaluated row-by-row. Common calculated column patterns include: Text concatenation: Full Name = [FirstName] & \" \" & [LastName] (combines text fields with concatenation operator &). Categorization: Price Category = IF([UnitPrice] > 100, \"High\", IF([UnitPrice] > 50, \"Medium\", \"Low\")) (uses IF for conditional logic). SWITCH for multiple conditions: Category = SWITCH(TRUE(), [Price] > 100, \"High\", [Price] > 50, \"Medium\", \"Low\") (cleaner than nested IFs). Date calculations: Age = YEAR(TODAY()) - YEAR([BirthDate]) (calculates age from birth date). Text manipulation: First Initial = LEFT([FirstName], 1) (extracts first character). Remember: calculated columns are stored in memory, increasing file size. Use them sparingly and only when needed for slicers, axes, or filters.",
              keyPoints: [
                "Calculated columns are created in Data View or Model View",
                "Use row context - evaluated row-by-row at refresh time",
                "Perfect for text concatenation, categorization, and conditional logic",
                "Use calculated columns when result is needed in slicer, axis, or filter",
                "Common functions: IF, SWITCH, & (concatenation), LEFT, RIGHT, YEAR",
                "Calculated columns are stored in memory - use sparingly",
                "Remember: Use measures for aggregations, columns for row-level calculations"
              ],
              insiderTips: [
                "Use SWITCH instead of nested IFs for cleaner code with multiple conditions",
                "Text concatenation uses & operator: [First] & \" \" & [Last]",
                "IF syntax: IF(condition, value_if_true, value_if_false)",
                "SWITCH syntax: SWITCH(TRUE(), condition1, value1, condition2, value2, default)",
                "Calculated columns refresh with data - they're not dynamic like measures",
                "Test calculated columns in Data View to verify they calculate correctly",
                "Use calculated columns for categories that appear in slicers (e.g., Price Category)",
                "Avoid calculated columns for simple math that will be aggregated - use measures instead",
                "Calculated columns can reference other calculated columns in the same table",
                "Use RELATED() to reference columns from related tables in calculated columns",
                "Performance: Each calculated column increases refresh time and file size",
                "Best practice: Create calculated columns in Power Query when possible (faster refresh)"
              ],
              labs: [
                "Create Full Name column:",
                "  - Switch to Data View (left sidebar icon)",
                "  - Right-click Customer table > New Column",
                "  - Column name: 'Full Name'",
                "  - Formula: Full Name = [FirstName] & \" \" & [LastName]",
                "  - Press Enter - column appears",
                "  - Verify in Data View - each row shows full name",
                "Create Price Category column:",
                "  - Right-click Product table > New Column",
                "  - Column name: 'Price Category'",
                "  - Formula using IF:",
                "    Price Category = IF([UnitPrice] > 100, \"High\", IF([UnitPrice] > 50, \"Medium\", \"Low\"))",
                "  - Press Enter - column appears",
                "  - Verify categories are correct",
                "Create Price Category with SWITCH:",
                "  - Create another column: 'Price Category (SWITCH)'",
                "  - Formula using SWITCH:",
                "    Price Category (SWITCH) = SWITCH(TRUE(), [UnitPrice] > 100, \"High\", [UnitPrice] > 50, \"Medium\", \"Low\")",
                "  - Compare to IF version - SWITCH is cleaner",
                "Create Age column:",
                "  - Right-click Customer table > New Column",
                "  - Column name: 'Age'",
                "  - Formula: Age = YEAR(TODAY()) - YEAR([BirthDate])",
                "  - Verify ages are calculated correctly",
                "Create First Initial column:",
                "  - Right-click Customer table > New Column",
                "  - Column name: 'First Initial'",
                "  - Formula: First Initial = LEFT([FirstName], 1)",
                "  - Verify first initials are extracted",
                "Test calculated columns:",
                "  - Switch to Report View",
                "  - Use Price Category in a slicer",
                "  - Use Full Name on an axis",
                "  - Verify calculated columns work in visuals",
                "Practice: Create more calculated columns with different logic",
                "Review: Understand when to use calculated columns vs measures"
              ],
              tables: [
                {
                  title: "Common Calculated Column Patterns",
                  headers: ["Pattern", "Formula Example", "Use Case", "When to Use"],
                  rows: [
                    ["Text Concatenation", "[First] & \" \" & [Last]", "Combine text fields", "When needed in slicer/axis"],
                    ["Categorization (IF)", "IF([Price] > 100, \"High\", \"Low\")", "Simple two-way categorization", "When needed in slicer"],
                    ["Categorization (SWITCH)", "SWITCH(TRUE(), [Price] > 100, \"High\", [Price] > 50, \"Medium\", \"Low\")", "Multi-way categorization", "When needed in slicer"],
                    ["Date Calculation", "YEAR(TODAY()) - YEAR([BirthDate])", "Calculate age, duration", "When needed in slicer/axis"],
                    ["Text Extraction", "LEFT([Name], 1)", "Extract characters", "When needed in slicer/axis"],
                    ["Conditional Text", "IF([Status] = \"Active\", \"Yes\", \"No\")", "Convert values to text", "When needed in slicer"]
                  ]
                },
                {
                  title: "Calculated Column vs Measure Decision",
                  headers: ["Need", "Use", "Example", "Why"],
                  rows: [
                    ["In slicer", "Calculated Column", "Price Category in slicer", "Slicers need column values"],
                    ["On axis", "Calculated Column", "Full Name on axis", "Axes need column values"],
                    ["As filter", "Calculated Column", "Age Category filter", "Filters need column values"],
                    ["In Values well", "Measure", "Total Sales in Values", "Values need aggregations"],
                    ["In KPI", "Measure", "Total Sales in KPI", "KPIs need aggregations"],
                    ["Dynamic calculation", "Measure", "Sales YTD", "Measures are dynamic"]
                  ]
                }
              ]
            },
          },
          {
            id: "6-4",
            moduleNumber: 6,
            lessonNumber: 4,
            title: "Creating Measures (Hands-On Lab)",
            description: "Writing basic aggregation measures. Learn how to create measures using SUM, AVERAGE, COUNT, and other aggregation functions. This is the foundation of all DAX measures.",
            duration: 45,
            difficulty: 'intermediate',
            tags: ["DAX", "Measures", "Aggregation", "Hands-On Lab"],
            topic: 'DAX',
            content: {
              concept: "Writing basic aggregation measures is the foundation of all DAX work. Measures are evaluated at query time based on filter context, making them dynamic and responsive to user selections. This lab teaches you how to create measures using common aggregation functions like SUM, AVERAGE, COUNT, MIN, MAX, and DISTINCTCOUNT. Measures are the primary way to create calculations in Power BI - you'll create many more measures than calculated columns. Understanding how to create basic measures is essential before moving to advanced DAX.",
              discussion: "Measures are created in Report View, Data View, or Model View by right-clicking a table and selecting 'New Measure'. The formula bar appears where you write DAX expressions. Measures use Filter Context - they evaluate based on active filters. This is why the same measure shows different values in different cells of a matrix or when different slicers are selected. Basic aggregation measures include: SUM: Total Sales = SUM(Sales[Amount]) - sums all values in a column. AVERAGE: Avg Price = AVERAGE(Sales[UnitPrice]) - calculates average of values. COUNT: Order Count = COUNT(Sales[OrderID]) - counts rows (ignores blanks). COUNTROWS: Order Count = COUNTROWS(Sales) - counts all rows including blanks. DISTINCTCOUNT: Customer Count = DISTINCTCOUNT(Sales[CustomerID]) - counts unique values. MIN: Min Price = MIN(Sales[UnitPrice]) - finds minimum value. MAX: Max Price = MAX(Sales[UnitPrice]) - finds maximum value. These basic measures are the building blocks for more complex calculations. Best practice: Create a dedicated 'Measures' table to organize all your measures in one place. This makes your model cleaner and easier to navigate.",
              keyPoints: [
                "Measures are created in Report View, Data View, or Model View",
                "Use filter context - evaluated at query time based on active filters",
                "Basic aggregation functions: SUM, AVERAGE, COUNT, MIN, MAX, DISTINCTCOUNT",
                "Measures are dynamic - same measure shows different values in different contexts",
                "Create a dedicated 'Measures' table to organize all measures",
                "Measures are the primary way to create calculations in Power BI",
                "Use measures for aggregations - they're more flexible than calculated columns"
              ],
              insiderTips: [
                "Create a 'Measures' table: Home > Enter Data > Create blank table named 'Measures'",
                "Organize all measures in the Measures table for easy navigation",
                "SUM syntax: SUM(Table[Column]) - sums numeric column",
                "AVERAGE syntax: AVERAGE(Table[Column]) - averages numeric column",
                "COUNT counts non-blank values, COUNTROWS counts all rows",
                "DISTINCTCOUNT counts unique values - useful for customer/product counts",
                "Measures automatically respect filter context - no need to specify filters",
                "Test measures in different visuals to verify they work correctly",
                "Use descriptive measure names: 'Total Sales' not 'Sales'",
                "Format measures: Right-click measure > Format - set currency, percentage, etc.",
                "Measures can reference other measures - build complex calculations step by step",
                "Performance: Simple aggregations (SUM, COUNT) are very fast"
              ],
              labs: [
                "Create a Measures table:",
                "  - Home tab > Enter Data",
                "  - Create blank table named 'Measures'",
                "  - Click Load - empty table appears",
                "Create Total Sales measure:",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Total Sales'",
                "  - Formula: Total Sales = SUM(Sales[Amount])",
                "  - Press Enter - measure appears in Measures table",
                "  - Format: Right-click measure > Format > Currency",
                "Create Average Price measure:",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Average Price'",
                "  - Formula: Average Price = AVERAGE(Sales[UnitPrice])",
                "  - Press Enter - measure created",
                "  - Format: Right-click measure > Format > Currency",
                "Create Order Count measure:",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Order Count'",
                "  - Formula: Order Count = COUNT(Sales[OrderID])",
                "  - Press Enter - measure created",
                "Create Customer Count measure:",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Customer Count'",
                "  - Formula: Customer Count = DISTINCTCOUNT(Sales[CustomerID])",
                "  - Press Enter - measure created",
                "Create Min and Max Price measures:",
                "  - Min Price = MIN(Sales[UnitPrice])",
                "  - Max Price = MAX(Sales[UnitPrice])",
                "  - Format both as Currency",
                "Test measures in visuals:",
                "  - Switch to Report View",
                "  - Create a Card visual",
                "  - Drag Total Sales measure to Values well",
                "  - Large number appears",
                "  - Create a Table visual",
                "  - Drag multiple measures to Values well",
                "  - Observe all measures show values",
                "Test with slicers:",
                "  - Add Region slicer",
                "  - Select 'East' region",
                "  - Observe measures update automatically",
                "  - This demonstrates filter context",
                "Practice: Create more measures with different aggregations",
                "Review: Understand how measures respond to filters"
              ],
              tables: [
                {
                  title: "Basic Aggregation Functions",
                  headers: ["Function", "Returns", "Use Case", "Example"],
                  rows: [
                    ["SUM", "Sum of values", "Total sales, revenue", "SUM(Sales[Amount])"],
                    ["AVERAGE", "Average of values", "Average price, average sales", "AVERAGE(Sales[Price])"],
                    ["COUNT", "Count of non-blank values", "Order count, record count", "COUNT(Sales[OrderID])"],
                    ["COUNTROWS", "Count of all rows", "Total rows including blanks", "COUNTROWS(Sales)"],
                    ["DISTINCTCOUNT", "Count of unique values", "Unique customers, products", "DISTINCTCOUNT(Sales[CustomerID])"],
                    ["MIN", "Minimum value", "Lowest price, earliest date", "MIN(Sales[Price])"],
                    ["MAX", "Maximum value", "Highest price, latest date", "MAX(Sales[Price])"]
                  ]
                },
                {
                  title: "Measure Creation Best Practices",
                  headers: ["Practice", "What to Do", "Why", "Example"],
                  rows: [
                    ["Create Measures table", "Organize all measures in one table", "Easy navigation, clean model", "Measures table with all measures"],
                    ["Use descriptive names", "Clear, specific names", "Easy to understand and find", "Total Sales vs Sales"],
                    ["Format measures", "Set currency, percentage, etc.", "Professional appearance", "Currency for sales, % for ratios"],
                    ["Test in visuals", "Verify measures work correctly", "Catch errors early", "Test in Card, Table, Bar chart"],
                    ["Test with filters", "Verify filter context works", "Ensure measures respond correctly", "Test with slicers"],
                    ["Document measures", "Add descriptions", "Help others understand", "Right-click > Properties > Description"]
                  ]
                }
              ]
            },
          },
          {
            id: "6-5",
            moduleNumber: 6,
            lessonNumber: 5,
            title: "Implicit vs. Explicit Measures",
            description: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM). \"Explicit\" measures are those created manually with DAX. Learn why explicit measures are best practice.",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["DAX", "Measures", "Best Practices"],
            topic: 'DAX',
            content: {
              concept: "\"Implicit\" measures are created when a numeric column is dragged into a visual, and Power BI implicitly applies an aggregation (like SUM). \"Explicit\" measures are those created manually with DAX, as in the lab. Best Practice: A professional developer always creates explicit measures. This provides central control, reusability, and clarity. Implicit measures should be disabled in the model settings. Understanding the difference between implicit and explicit measures is crucial for professional Power BI development.",
              discussion: "Implicit measures are created automatically when you drag a numeric column into a visual's Values well. Power BI automatically applies an aggregation (usually SUM) and creates a measure on-the-fly. For example, dragging Sales[Amount] to a visual creates an implicit measure 'Sum of Amount'. Implicit measures are convenient but have limitations: they're not reusable (must be recreated for each visual), they're not visible in the model (hard to find and manage), they can't be formatted centrally, and they can't be modified or documented. Explicit measures are created manually with DAX using 'New Measure'. For example, Total Sales = SUM(Sales[Amount]) is an explicit measure. Explicit measures provide: central control (one place to manage), reusability (use in multiple visuals), clarity (clear names and descriptions), formatting (set once, applies everywhere), and documentation (add descriptions). Best practice: Always create explicit measures. This is the professional approach and makes your model maintainable. Disable implicit measures in model settings: File > Options and Settings > Options > Current File > Data Load > Uncheck 'Allow implicit measures'. This prevents accidental creation of implicit measures and forces you to create explicit ones.",
              keyPoints: [
                "Implicit measures are created automatically when dragging numeric columns to visuals",
                "Explicit measures are created manually with DAX using 'New Measure'",
                "Best practice: Always create explicit measures for central control and reusability",
                "Explicit measures provide clarity, formatting, and documentation",
                "Implicit measures should be disabled in model settings",
                "Professional developers always use explicit measures",
                "Explicit measures make your model more maintainable"
              ],
              insiderTips: [
                "Disable implicit measures: File > Options > Current File > Data Load > Uncheck 'Allow implicit measures'",
                "Explicit measures are reusable - create once, use everywhere",
                "Explicit measures can be formatted centrally - set currency once, applies everywhere",
                "Explicit measures can be documented - add descriptions for clarity",
                "Explicit measures are visible in Model View - easy to find and manage",
                "Implicit measures are hidden - hard to find and manage",
                "If you see 'Sum of Amount' in a visual, that's an implicit measure - replace it with explicit",
                "Professional models have 100% explicit measures - no implicit measures",
                "Explicit measures enable version control - you can track changes to measures",
                "Explicit measures can reference other measures - build complex calculations",
                "Test: Disable implicit measures and verify you can't create them accidentally",
                "Remember: Explicit measures = professional, Implicit measures = beginner"
              ],
              labs: [
                "Create an implicit measure:",
                "  - Switch to Report View",
                "  - Create a Bar chart visual",
                "  - Drag Sales[Amount] to Values well",
                "  - Notice 'Sum of Amount' appears - this is an implicit measure",
                "  - Observe it's not visible in Fields pane",
                "Create an explicit measure:",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Total Sales'",
                "  - Formula: Total Sales = SUM(Sales[Amount])",
                "  - Press Enter - measure appears in Measures table",
                "  - Format: Right-click measure > Format > Currency",
                "Replace implicit with explicit:",
                "  - Select the Bar chart with implicit measure",
                "  - Remove 'Sum of Amount' from Values well",
                "  - Drag 'Total Sales' measure to Values well",
                "  - Notice it works the same but is now explicit",
                "Disable implicit measures:",
                "  - File > Options and Settings > Options",
                "  - Current File > Data Load",
                "  - Uncheck 'Allow implicit measures'",
                "  - Click OK",
                "Test: Try dragging numeric column to visual",
                "  - Notice implicit measure can't be created",
                "  - Must create explicit measure instead",
                "Compare: Implicit vs Explicit",
                "  - Implicit: 'Sum of Amount' (hidden, not reusable)",
                "  - Explicit: 'Total Sales' (visible, reusable, formatted)",
                "Practice: Create explicit measures for all your aggregations",
                "Review: Understand why explicit measures are best practice"
              ],
              tables: [
                {
                  title: "Implicit vs Explicit Measures",
                  headers: ["Aspect", "Implicit Measures", "Explicit Measures", "Winner"],
                  rows: [
                    ["Creation", "Automatic when dragging column", "Manual with DAX", "Explicit"],
                    ["Visibility", "Hidden in model", "Visible in Measures table", "Explicit"],
                    ["Reusability", "Must recreate for each visual", "Create once, use everywhere", "Explicit"],
                    ["Formatting", "Can't format centrally", "Format once, applies everywhere", "Explicit"],
                    ["Documentation", "Can't add descriptions", "Can add descriptions", "Explicit"],
                    ["Maintainability", "Hard to find and manage", "Easy to find and manage", "Explicit"],
                    ["Professional", "Beginner approach", "Professional approach", "Explicit"],
                    ["Best Practice", "Not recommended", "Recommended", "Explicit"]
                  ]
                },
                {
                  title: "How to Disable Implicit Measures",
                  headers: ["Step", "Action", "Location", "Result"],
                  rows: [
                    ["1", "Open Options", "File > Options and Settings > Options", "Options dialog opens"],
                    ["2", "Navigate to Data Load", "Current File > Data Load", "Data Load settings appear"],
                    ["3", "Uncheck option", "Uncheck 'Allow implicit measures'", "Implicit measures disabled"],
                    ["4", "Click OK", "Save settings", "Settings saved"],
                    ["5", "Test", "Try dragging numeric column to visual", "Implicit measure can't be created"]
                  ]
                }
              ]
            },
          },
          {
            id: "6-6",
            moduleNumber: 6,
            lessonNumber: 6,
            title: "Using Quick Measures",
            description: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations. Learn how to use Quick Measures to learn DAX patterns and create complex calculations without writing code.",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["DAX", "Quick Measures", "Learning Tool"],
            topic: 'DAX',
            content: {
              concept: "Using Power BI's UI-driven \"Quick Measures\" gallery to auto-generate DAX for common calculations. Quick Measures provide a visual interface for creating complex DAX measures without writing code. This is a powerful learning tool for beginners - you can see the DAX code that Power BI generates and learn from it. Quick Measures are especially useful for common calculations like running totals, percent of grand total, year-over-year comparisons, and moving averages.",
              discussion: "Quick Measures are accessed through Home > Quick Measures or by right-clicking a table > Quick Measures. The Quick Measures gallery shows pre-built templates for common calculations. You select a template, fill in the required fields (measures, columns, etc.), and Power BI generates the DAX code automatically. Common Quick Measures include: Running Total (cumulative sum over time), Percent of Grand Total (percentage of total), Year-over-Year Growth (comparing periods), Moving Average (average over rolling window), and Rank (ranking values). After creating a Quick Measure, you can view the generated DAX code in the formula bar. This is a powerful learning tool - you can see how Power BI implements complex calculations and learn the patterns. Best practice: Use Quick Measures to learn DAX patterns, then create your own measures using those patterns. Quick Measures are great for: learning DAX syntax, understanding complex calculations, creating measures quickly, and prototyping calculations. However, Quick Measures have limitations: they're not always optimized, they may not fit your exact needs, and you should understand the generated code before using it in production.",
              keyPoints: [
                "Quick Measures provide a visual interface for creating complex DAX measures",
                "Power BI generates DAX code automatically based on your selections",
                "View the generated DAX code to learn patterns and syntax",
                "Common Quick Measures: Running Total, Percent of Total, YoY Growth, Moving Average",
                "Use Quick Measures to learn DAX, then create your own measures",
                "Quick Measures are great for prototyping and learning",
                "Always review the generated DAX code before using in production"
              ],
              insiderTips: [
                "Access Quick Measures: Home > Quick Measures or right-click table > Quick Measures",
                "Quick Measures gallery shows templates - select one that matches your need",
                "Fill in required fields (measures, columns) in the Quick Measure dialog",
                "After creating, view the DAX code in formula bar to learn the pattern",
                "Use Quick Measures to learn DAX syntax - see how Power BI implements calculations",
                "Common pattern: Quick Measures use CALCULATE() and ALL() - learn these functions",
                "After learning from Quick Measures, create your own measures using those patterns",
                "Quick Measures are great for prototyping - test the calculation, then refine",
                "Review generated DAX code - understand what it does before using in production",
                "Quick Measures may not be optimized - consider rewriting for better performance",
                "Use Quick Measures as a starting point, not the final solution",
                "Remember: Quick Measures are a learning tool - use them to learn DAX"
              ],
              labs: [
                "Access Quick Measures:",
                "  - Home tab > Quick Measures",
                "  - OR right-click Measures table > Quick Measures",
                "  - Quick Measures gallery appears",
                "Create Running Total:",
                "  - Select 'Running Total' template",
                "  - Base value: Total Sales measure",
                "  - Field: Date column",
                "  - Click OK - measure created",
                "  - View DAX code in formula bar",
                "  - Observe how CALCULATE() and ALL() are used",
                "Create Percent of Grand Total:",
                "  - Select 'Percent of Grand Total' template",
                "  - Base value: Total Sales measure",
                "  - Click OK - measure created",
                "  - View DAX code in formula bar",
                "  - Observe how DIVIDE() and ALL() are used",
                "Create Year-over-Year Growth:",
                "  - Select 'Year-over-Year Growth' template",
                "  - Base value: Total Sales measure",
                "  - Date field: Date column",
                "  - Click OK - measure created",
                "  - View DAX code in formula bar",
                "  - Observe how SAMEPERIODLASTYEAR() is used",
                "Test Quick Measures:",
                "  - Switch to Report View",
                "  - Create visuals using Quick Measures",
                "  - Verify they calculate correctly",
                "  - Test with slicers to verify filter context",
                "Learn from Quick Measures:",
                "  - Review DAX code for each Quick Measure",
                "  - Identify common patterns (CALCULATE, ALL, DIVIDE)",
                "  - Understand how these functions work together",
                "  - Use these patterns in your own measures",
                "Practice: Create your own measures using patterns learned from Quick Measures",
                "Review: Understand how Quick Measures can help you learn DAX"
              ],
              tables: [
                {
                  title: "Common Quick Measures Templates",
                  headers: ["Template", "What It Does", "Use Case", "Key DAX Functions"],
                  rows: [
                    ["Running Total", "Cumulative sum over time", "Show cumulative sales over months", "CALCULATE, ALL"],
                    ["Percent of Grand Total", "Percentage of total", "Show each region as % of total", "DIVIDE, ALL"],
                    ["Year-over-Year Growth", "Compare to same period last year", "Show sales growth vs last year", "SAMEPERIODLASTYEAR, DIVIDE"],
                    ["Moving Average", "Average over rolling window", "Show 3-month moving average", "CALCULATE, DATESINPERIOD"],
                    ["Rank", "Rank values", "Rank products by sales", "RANKX, ALL"],
                    ["Difference from Average", "Compare to average", "Show difference from average", "CALCULATE, AVERAGE, ALL"]
                  ]
                },
                {
                  title: "Quick Measures Learning Path",
                  headers: ["Step", "Action", "What You Learn", "Next Step"],
                  rows: [
                    ["1", "Create Quick Measure", "See how Power BI implements calculation", "Review DAX code"],
                    ["2", "Review DAX code", "Learn DAX syntax and patterns", "Identify key functions"],
                    ["3", "Understand pattern", "Learn how functions work together", "Test with different scenarios"],
                    ["4", "Create own measure", "Apply learned pattern to your needs", "Refine and optimize"],
                    ["5", "Master pattern", "Understand when to use this pattern", "Use in other calculations"]
                  ]
                }
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
            description: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated. There are two types of context: Row Context and Filter Context. Understanding evaluation context is the key to mastering DAX.",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["DAX", "Evaluation Context", "Critical Concept"],
            topic: 'DAX',
            content: {
              concept: "A DAX formula's result is not fixed; it depends on the context in which it is evaluated. There are two types of context: Row Context and Filter Context. Understanding evaluation context is the key to mastering DAX. This is the 'secret sauce' that makes DAX powerful but also challenging. Unlike Excel formulas (which calculate the same value in every cell), DAX formulas calculate different values depending on context. This context-awareness is what makes DAX measures dynamic and responsive to user selections.",
              discussion: "Evaluation context determines how a DAX formula is evaluated. There are two types of context: Row Context and Filter Context. Row Context is the context that iterates through a table one row at a time. It exists by default in Calculated Columns and is created by iterator functions (SUMX, AVERAGEX, etc.) in measures. Row Context allows you to reference columns from the current row (e.g., [Quantity] * [UnitPrice] in a calculated column). Filter Context is the context that determines which rows are visible for calculation. It's created by slicers, filters, visual axes, and other filter sources. Filter Context determines which rows are included in aggregations (e.g., SUM(Sales[Amount]) sums only rows matching active filters). Understanding these two contexts is crucial because: Row Context is for row-by-row calculations (calculated columns, iterators), Filter Context is for aggregations (measures), and they can work together (iterators within measures use both contexts). The key insight: DAX formulas are context-aware - the same formula produces different results depending on context. This is why the same measure shows different values in different cells of a matrix or when different slicers are selected.",
              keyPoints: [
                "Evaluation context determines how a DAX formula is evaluated",
                "Two types of context: Row Context and Filter Context",
                "Row Context: iterates through table one row at a time (calculated columns, iterators)",
                "Filter Context: determines which rows are visible (measures, aggregations)",
                "DAX formulas are context-aware - same formula, different results",
                "Understanding context is the key to mastering DAX",
                "Context-awareness makes DAX powerful but also challenging"
              ],
              insiderTips: [
                "Row Context exists in calculated columns by default - that's why [Qty] * [Price] works",
                "Filter Context exists in measures by default - that's why SUM(Sales) respects filters",
                "Iterator functions (SUMX, AVERAGEX) create Row Context within Filter Context",
                "CALCULATE() is the ONLY function that can modify Filter Context",
                "When a measure returns wrong value, check the Filter Context - what filters are active?",
                "When a calculated column returns wrong value, check the Row Context - what row is it evaluating?",
                "Test your formulas with different contexts to verify they work correctly",
                "Understanding context is the difference between beginner and advanced DAX",
                "Context is invisible - always mentally ask 'What context is this formula in?'",
                "Row Context + Filter Context = powerful but complex calculations",
                "Practice: Create formulas and observe how context affects results",
                "Remember: Context is the 'secret sauce' of DAX - master it to master DAX"
              ],
              labs: [
                "Understand Row Context:",
                "  - Create a calculated column: Total Price = [Quantity] * [UnitPrice]",
                "  - Observe it calculates row-by-row",
                "  - This is Row Context in action",
                "Understand Filter Context:",
                "  - Create a measure: Total Sales = SUM(Sales[Amount])",
                "  - Add to a matrix: Region on Rows, Year on Columns",
                "  - Observe different values in each cell",
                "  - This is Filter Context in action",
                "Compare contexts:",
                "  - Calculated column: same value for each row (Row Context)",
                "  - Measure: different value for each cell (Filter Context)",
                "  - Same formula, different contexts, different results",
                "Test with slicers:",
                "  - Add Region slicer",
                "  - Select 'East' region",
                "  - Observe measure updates (Filter Context changed)",
                "  - Calculated column doesn't change (Row Context doesn't change)",
                "Understand context interaction:",
                "  - Create measure with iterator: Total Sales = SUMX(Sales, [Quantity] * [UnitPrice])",
                "  - This uses both Row Context (SUMX iterates) and Filter Context (respects filters)",
                "  - Test with slicers to verify both contexts work",
                "Practice: Create formulas and observe how context affects results",
                "Review: Understand the difference between Row Context and Filter Context"
              ],
              tables: [
                {
                  title: "Row Context vs Filter Context",
                  headers: ["Aspect", "Row Context", "Filter Context", "When Used"],
                  rows: [
                    ["Definition", "Iterates through table one row at a time", "Determines which rows are visible", "Row: calculated columns, Filter: measures"],
                    ["Exists In", "Calculated columns, iterator functions", "Measures, aggregations", "Row: columns, Filter: measures"],
                    ["Example", "[Quantity] * [UnitPrice] in column", "SUM(Sales[Amount]) in measure", "Row: row-by-row, Filter: aggregation"],
                    ["Changes", "Fixed at refresh time", "Dynamic at query time", "Row: static, Filter: dynamic"],
                    ["Modifiable", "No (fixed per row)", "Yes (with CALCULATE)", "Row: no, Filter: yes"],
                    ["Use For", "Row-level calculations", "Aggregations", "Row: columns, Filter: measures"]
                  ]
                },
                {
                  title: "Understanding Context in DAX",
                  headers: ["Scenario", "Context Type", "What Happens", "Example"],
                  rows: [
                    ["Calculated Column", "Row Context", "Evaluates for each row", "[Qty] * [Price] for each row"],
                    ["Simple Measure", "Filter Context", "Aggregates visible rows", "SUM(Sales) respects filters"],
                    ["Iterator Measure", "Both Contexts", "Iterates (Row) within filters (Filter)", "SUMX(Sales, [Qty]*[Price])"],
                    ["CALCULATE Measure", "Modified Filter Context", "Changes Filter Context", "CALCULATE(SUM(Sales), Region=\"East\")"],
                    ["Matrix Cell", "Filter Context", "Filters from axes + slicers", "Region=\"East\", Year=2023"],
                    ["Slicer Selection", "Filter Context", "Adds filter to all visuals", "Selecting 'East' filters all visuals"]
                  ]
                }
              ]
            },
          },
          {
            id: "7-2",
            moduleNumber: 7,
            lessonNumber: 2,
            title: "Row Context (The \"Current Row\")",
            description: "A context that iterates through a table one row at a time. Row Context exists by default in Calculated Columns and is created by iterator functions in measures. Understanding Row Context is essential for DAX mastery.",
            duration: 30,
            difficulty: 'intermediate',
            tags: ["DAX", "Row Context", "Evaluation Context"],
            topic: 'DAX',
            content: {
              concept: "A context that iterates through a table one row at a time. Row Context exists by default in Calculated Columns and is created by iterator functions (SUMX, AVERAGEX, etc.) in measures. This is why the formula [Quantity] * [Unit Price] works in a calculated column—it is evaluated for each row individually. Understanding Row Context is essential for creating calculated columns and using iterator functions effectively.",
              discussion: "Row Context is the context that iterates through a table one row at a time. It exists by default in Calculated Columns - when you create a calculated column, DAX automatically creates Row Context for each row. This is why [Quantity] * [UnitPrice] works in a calculated column - it's evaluated for each row individually, with [Quantity] and [UnitPrice] referring to the current row's values. Row Context is also created by iterator functions (SUMX, AVERAGEX, MINX, MAXX, COUNTX, etc.) in measures. These functions iterate through a table, creating Row Context for each row, then evaluate an expression for that row. For example, SUMX(Sales, [Quantity] * [UnitPrice]) iterates through the Sales table, creating Row Context for each row, calculates Quantity * UnitPrice for that row, then sums all results. Key points about Row Context: it's row-by-row (one row at a time), it's automatic in calculated columns (no need to create it), it's created by iterator functions (SUMX, AVERAGEX, etc.), and it allows column references without table names (e.g., [Quantity] instead of Sales[Quantity] in calculated columns). Understanding Row Context is crucial because: calculated columns use Row Context by default, iterator functions create Row Context in measures, and Row Context allows row-by-row calculations that can't be done with simple aggregations.",
              keyPoints: [
                "Row Context iterates through a table one row at a time",
                "Row Context exists by default in Calculated Columns",
                "Row Context is created by iterator functions (SUMX, AVERAGEX, etc.) in measures",
                "Row Context allows column references without table names in calculated columns",
                "Row Context enables row-by-row calculations",
                "Understanding Row Context is essential for calculated columns and iterators",
                "Row Context is fixed at refresh time (for calculated columns)"
              ],
              insiderTips: [
                "Row Context exists automatically in calculated columns - that's why [Qty] * [Price] works",
                "In calculated columns, you can reference columns without table names: [Quantity] not Sales[Quantity]",
                "Iterator functions (SUMX, AVERAGEX) create Row Context within measures",
                "Row Context allows row-by-row calculations that can't be done with simple aggregations",
                "When a calculated column returns wrong value, check Row Context - what row is it evaluating?",
                "Row Context is fixed at refresh time - calculated columns don't change after refresh",
                "Use Row Context for row-level calculations that need to appear in slicers/axes",
                "Iterator functions combine Row Context (iteration) with Filter Context (filtering)",
                "Test calculated columns in Data View to verify Row Context is working correctly",
                "Remember: Row Context = row-by-row, Filter Context = aggregation",
                "Practice: Create calculated columns and observe Row Context in action",
                "Understanding Row Context is the foundation for understanding iterator functions"
              ],
              labs: [
                "Create calculated column with Row Context:",
                "  - Switch to Data View",
                "  - Right-click Sales table > New Column",
                "  - Column name: 'Total Price'",
                "  - Formula: Total Price = [Quantity] * [UnitPrice]",
                "  - Press Enter - column appears",
                "  - Observe it calculates row-by-row (Row Context)",
                "  - Each row shows its own Total Price",
                "Understand Row Context in calculated columns:",
                "  - In calculated columns, you can reference columns without table names",
                "  - [Quantity] works (Row Context knows the table)",
                "  - Sales[Quantity] also works (explicit reference)",
                "  - Both are equivalent in calculated columns",
                "Create measure with iterator (Row Context in measure):",
                "  - Right-click Measures table > New Measure",
                "  - Measure name: 'Total Sales (Iterator)'",
                "  - Formula: Total Sales (Iterator) = SUMX(Sales, [Quantity] * [UnitPrice])",
                "  - Press Enter - measure created",
                "  - SUMX creates Row Context for each row",
                "  - [Quantity] * [UnitPrice] is evaluated for each row",
                "  - Results are summed",
                "Compare Row Context in column vs measure:",
                "  - Calculated column: Row Context exists by default",
                "  - Measure with iterator: Row Context created by SUMX",
                "  - Both use Row Context but in different ways",
                "Test Row Context:",
                "  - Switch to Report View",
                "  - Create Table visual",
                "  - Add calculated column 'Total Price' to table",
                "  - Observe each row shows its own Total Price",
                "  - Add measure 'Total Sales (Iterator)' to table",
                "  - Observe it aggregates (uses Filter Context too)",
                "Practice: Create more calculated columns and iterator measures",
                "Review: Understand how Row Context works in calculated columns and iterators"
              ],
              tables: [
                {
                  title: "Row Context in Different Scenarios",
                  headers: ["Scenario", "Row Context Source", "How It Works", "Example"],
                  rows: [
                    ["Calculated Column", "Automatic (by default)", "Evaluates for each row", "[Qty] * [Price] for each row"],
                    ["SUMX Measure", "Created by SUMX", "Iterates through table", "SUMX(Sales, [Qty]*[Price])"],
                    ["AVERAGEX Measure", "Created by AVERAGEX", "Iterates through table", "AVERAGEX(Sales, [Amount])"],
                    ["MINX/MAXX Measure", "Created by MINX/MAXX", "Iterates through table", "MINX(Product, [Price])"],
                    ["COUNTX Measure", "Created by COUNTX", "Iterates through table", "COUNTX(Sales, [Amount]>1000)"],
                    ["CONCATENATEX Measure", "Created by CONCATENATEX", "Iterates through table", "CONCATENATEX(Orders, [Item], \", \")"]
                  ]
                },
                {
                  title: "Row Context vs Filter Context",
                  headers: ["Aspect", "Row Context", "Filter Context", "Key Difference"],
                  rows: [
                    ["When", "In calculated columns, iterators", "In measures, aggregations", "Row: row-by-row, Filter: aggregation"],
                    ["What", "Current row being evaluated", "Rows visible for calculation", "Row: one row, Filter: multiple rows"],
                    ["Changes", "Fixed at refresh time", "Dynamic at query time", "Row: static, Filter: dynamic"],
                    ["Use For", "Row-level calculations", "Aggregations", "Row: columns, Filter: measures"],
                    ["Example", "[Qty] * [Price] in column", "SUM(Sales) in measure", "Row: per row, Filter: total"],
                    ["Modifiable", "No (fixed per row)", "Yes (with CALCULATE)", "Row: no, Filter: yes"]
                  ]
                }
              ]
            },
          },
          {
            id: "7-3",
            moduleNumber: 7,
            lessonNumber: 3,
            title: "Filter Context (The \"Current Cell\")",
            description: "Filter context is the set of all filters applied to a measure before it is calculated. Understanding filter context is critical for mastering DAX.",
            duration: 25,
            difficulty: 'intermediate',
            tags: ["DAX", "Filter Context", "Critical Concept"],
            topic: 'DAX',
            content: {
              concept: "Filter context is the set of all filters applied to a measure before it is calculated. Unlike row context (which operates on one row at a time), filter context operates across all visible rows that match the current filter conditions. Every measure calculation occurs within some filter context - understanding this is critical for mastering DAX.",
              discussion: "Imagine a matrix visual with Total Sales in the Values, Region on Rows, and Year on Columns. The Total Sales value for the cell at the intersection of \"East\" and \"2023\" is calculated within a filter context of Region = \"East\" AND Year = 2023. This filter context includes multiple contributors: slicers on the page (user selections), page-level filters (applied to all visuals on a page), visual-level filters (specific to one visual), report-level filters (applied globally), and the visual's own axes/rows/columns (determining which data points to calculate). Filter context is additive - all these filters combine to create the final filter context. When you write a measure like Total Sales = SUM(Sales[Amount]), DAX automatically respects whatever filter context is active. This is why the same measure shows different values in different cells of a matrix or when different slicers are selected. Understanding that measures are context-aware is the key insight that separates DAX from Excel formulas.",
              keyPoints: [
                "Filter context = all active filters that determine which rows are visible for calculation",
                "Filter context contributors: slicers, page filters, visual filters, visual axes, report filters",
                "Filter context is additive - all active filters combine together",
                "Every measure calculation occurs within some filter context",
                "Same measure = different values depending on filter context",
                "Understanding filter context is the foundation of advanced DAX"
              ],
              insiderTips: [
                "Filter context is invisible - always mentally ask 'What filters are active here?' when writing DAX",
                "Visual axes create filter context - dragging Region to Rows creates implicit filters",
                "Slicers modify filter context - selecting '2024' adds that filter globally to all visuals",
                "Use Performance Analyzer to see the DAX query generated for a visual cell",
                "The DAX query will show the filter context explicitly: FILTER(Table, [Region]=\"East\" AND [Year]=2023)",
                "CALCULATE() is the ONLY function that can modify filter context - remember this!",
                "Test your measures with different slicers to verify they respond to filter context correctly",
                "Filter context flows from dimensions to facts via relationships - that's how it works"
              ],
              labs: [
                "Create a simple measure: Total Sales = SUM(Sales[Amount])",
                "Add a matrix visual: Region on Rows, Year on Columns, Total Sales in Values",
                "Observe different values in each cell - these represent different filter contexts",
                "Add a slicer: Select 'East' region",
                "Notice matrix updates - filter context changed",
                "Add another slicer: Select '2023' year",
                "Notice matrix updates again - filter context now includes both filters",
                "Remove slicers one by one, observing how values change",
                "Click on different matrix cells to see how filter context affects values",
                "Practice: Create different visuals and observe how same measure shows different values",
                "Verify filter context works by checking calculations manually"
              ],
              tables: [
                {
                  title: "Filter Context Contributors",
                  headers: ["Contributor", "Where Applied", "Example", "Can Be Modified?"],
                  rows: [
                    ["Slicers", "All visuals on page", "Region slicer selecting 'East'", "User can change"],
                    ["Page Filters", "All visuals on specific page", "Date range filter", "User can change"],
                    ["Visual Filters", "One visual only", "Top 10 products filter", "User can change"],
                    ["Visual Axes", "The visual itself", "Region on Rows", "Visual layout"],
                    ["Report Filters", "All pages in report", "Active Users Only", "User can change"]
                  ]
                },
                {
                  title: "Understanding Filter Context Flow",
                  headers: ["Step", "What Happens", "Example"],
                  rows: [
                    ["1. User selects slicer", "Filter context adds condition", "Region = 'East'"],
                    ["2. Visual queries data", "DAX measure is called", "Total Sales = SUM(Sales)"],
                    ["3. Measure evaluates", "Filter context applied", "Only East region sales summed"],
                    ["4. Result displayed", "Value appears in visual", "Sales for East region shown"],
                    ["5. User changes filter", "Filter context updates", "Region = 'West'"],
                    ["6. Measure re-evaluates", "New context applied", "Only West region sales summed"],
                    ["7. New result displayed", "Updated value", "Sales for West region shown"]
                  ]
                }
              ]
            },
          },
          {
            id: "7-4",
            moduleNumber: 7,
            lessonNumber: 4,
            title: "Iterator Functions (SUMX, AVERAGEX, MINX)",
            description: "Iterator functions (X-functions) create a row context within a measure, allowing for row-by-row calculations. This is the correct solution to the \"Total Price\" problem from earlier.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What are Iterator Functions?', timestamp: 0 },
              { title: 'SUMX: Sum with Expression', timestamp: 240 },
              { title: 'AVERAGEX and Other X-Functions', timestamp: 720 },
              { title: 'When to Use Iterators', timestamp: 1200 },
              { title: 'Performance Considerations', timestamp: 1500 },
              { title: 'Lab: Iterator Functions', timestamp: 1680 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "Iterators", "X-Functions"],
            topic: 'DAX',
            content: {
              concept: "Iterator functions (X-functions) like SUMX, AVERAGEX, and MINX create a row context within a measure, allowing for row-by-row calculations. These functions are essential when you need to perform calculations that can't be done with simple aggregations. For example, instead of multiplying Quantity * UnitPrice in a calculated column, you use SUMX(Sales, Sales[Quantity] * Sales[UnitPrice]) to calculate total revenue dynamically.",
              discussion: "This is the correct solution to the \"Total Price\" problem from earlier lessons. Instead of creating a calculated column [TotalPrice] = [Quantity] * [UnitPrice] (which consumes memory), you create a measure: Total Sales = SUMX(Sales, Sales[Quantity] * Sales[UnitPrice]). How iterators work: 1) SUMX iterates through the Sales table (within current filter context), 2) For each row, calculates Quantity * UnitPrice, 3) Stores result temporarily, 4) Sums all results. This provides the correct aggregation without bloating the model. Common iterator functions include: SUMX (sum with expression), AVERAGEX (average with expression), MINX (minimum with expression), MAXX (maximum with expression), COUNTX (count with expression), and CONCATENATEX (concatenate with expression). Iterators follow the pattern: FUNCTIONX(table, expression) where the expression is evaluated for each row. Performance note: Iterators are slower than simple aggregations like SUM() because they evaluate the expression for every row. For large tables, consider pre-calculating in Power Query if possible, or use aggregation patterns when appropriate. However, iterators are still the right choice when you need dynamic, context-aware calculations.",
              keyPoints: [
                "Iterator functions create row context within measures for row-by-row calculations",
                "Pattern: FUNCTIONX(table, expression) - expression evaluated for each row",
                "Common iterators: SUMX, AVERAGEX, MINX, MAXX, COUNTX, CONCATENATEX",
                "Use iterators when you need per-row calculations that can't be aggregated directly",
                "Iterators are slower than simple aggregations but provide flexibility",
                "This solves the 'Total Price' problem without calculated columns"
              ],
              insiderTips: [
                "Use SUMX for row-by-row multiplication then sum: SUMX(Table, [Qty] * [Price])",
                "AVERAGEX is perfect for weighted averages: AVERAGEX(Sales, Sales[Amount])",
                "Performance: Iterators evaluate for EVERY row - use on filtered tables when possible",
                "Test iterators on small tables first to verify logic before applying to large datasets",
                "When possible, do calculations in Power Query instead of iterators for better performance",
                "Iterators work with filter context - they respect all active filters automatically",
                "Don't overuse iterators - simple SUM() is faster than SUMX() when you don't need per-row logic",
                "Common pattern: SUMX(RELATEDTABLE(...), expression) to iterate related rows"
              ],
              labs: [
                "Create Total Sales measure with SUMX:",
                "  Total Sales = SUMX(Sales, Sales[Quantity] * Sales[UnitPrice])",
                "  Compare to alternative: Total Sales (column) = SUM([TotalPrice])",
                "  Verify both give same results but measure is better",
                "Create Average Order Value with AVERAGEX:",
                "  Avg Order Value = AVERAGEX(Sales, Sales[Quantity] * Sales[UnitPrice])",
                "  This calculates average of individual line item values",
                "Create Percentage of Sales per Customer with SUMX:",
                "  % of Total = DIVIDE([CustomerSales], SUMX(ALL(Customer), [CustomerSales]))",
                "  Uses SUMX with ALL to calculate total across all customers",
                "Practice: Create different iterator measures and test them in visuals",
                "Observe: Iterators recalculate based on filter context automatically",
                "Performance test: Compare SUMX on large table vs filtered table"
              ],
              tables: [
                {
                  title: "Common Iterator Functions",
                  headers: ["Function", "Returns", "Use Case", "Example"],
                  rows: [
                    ["SUMX", "Sum of expression", "Row-by-row multiplication then sum", "SUMX(Sales, Qty*Price)"],
                    ["AVERAGEX", "Average of expression", "Weighted averages, per-row calculations", "AVERAGEX(Sales, Amount)"],
                    ["MINX", "Minimum of expression", "Smallest value across rows", "MINX(Product, [Price]*[Qty])"],
                    ["MAXX", "Maximum of expression", "Largest value across rows", "MAXX(Customer, [Sales])"],
                    ["COUNTX", "Count with filter", "Count rows where condition is true", "COUNTX(Sales, Sales>1000)"],
                    ["CONCATENATEX", "Concatenate values", "Combine text values with delimiters", "CONCATENATEX(Orders, [Item], \", \")"]
                  ]
                },
                {
                  title: "When to Use Iterators vs Simple Aggregations",
                  headers: ["Scenario", "Use", "Example", "Why"],
                  rows: [
                    ["Multiplication then sum", "SUMX", "SUMX(Sales, Qty*Price)", "Can't use SUM on product"],
                    ["Simple addition", "SUM", "SUM(Sales[Amount])", "Faster, simpler"],
                    ["Per-row calculations", "Iterators", "SUMX(Sales, [Amount]*[Margin])", "Need expression evaluation"],
                    ["Aggregation only", "Aggregations", "SUM, AVERAGE, COUNT", "Faster performance"],
                    ["Related table iterations", "Iterator", "SUMX(RELATEDTABLE(...))", "Multiple rows per parent"]
                  ]
                }
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
            description: "CALCULATE() is the most powerful and important function in DAX. It is the ONLY function that can modify filter context. Master CALCULATE() to unlock advanced DAX.",
            duration: 40,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Why CALCULATE() is Critical', timestamp: 0 },
              { title: 'CALCULATE() Syntax and Basics', timestamp: 360 },
              { title: 'Adding Filters with CALCULATE()', timestamp: 900 },
              { title: 'Removing Filters with CALCULATE()', timestamp: 1440 },
              { title: 'Multiple Filters in CALCULATE()', timestamp: 1920 },
              { title: 'Lab: CALCULATE() Practice', timestamp: 2160 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "CALCULATE", "Critical Concept"],
            topic: 'DAX',
            content: {
              concept: "CALCULATE() is the most powerful and important function in DAX. It is the ONLY function that can modify filter context. Most advanced DAX calculations rely on CALCULATE() to override or add filters. Syntax: CALCULATE(<expression>, <filter1>, <filter2>, ...). The first argument is the measure or expression to evaluate, and all subsequent arguments are new filters that modify the context.",
              discussion: "The first argument is the measure to be evaluated (e.g., [Total Sales]). All subsequent arguments are new filters that are applied, which can override or add to the existing filter context. How CALCULATE() works: 1) Takes the existing filter context, 2) Applies new filters from its arguments, 3) Evaluates the expression in this modified context, 4) Returns the result. CALCULATE() is the key to creating measures that behave differently based on context - like 'Sales for this region' vs 'Total Sales across all regions'. Common uses include: adding filters (Sales in East = CALCULATE([Total Sales], Region=\"East\")), removing filters (Total Sales = CALCULATE([Total Sales], ALL(Region))), and replacing filters (Sales FYTD = CALCULATE([Total Sales], FILTER(ALL(Date), Date[Year]=YEAR(TODAY())))). Understanding CALCULATE() is essential because it's the foundation of advanced DAX calculations. Without CALCULATE(), you can't create measures that modify the existing filter context. Most real-world DAX measures contain at least one CALCULATE().",
              keyPoints: [
                "CALCULATE() is the ONLY function that can modify filter context",
                "Syntax: CALCULATE(expression, filter1, filter2, ...)",
                "First argument = what to calculate, remaining arguments = how to filter",
                "CALCULATE() modifies existing filter context, it doesn't replace it",
                "Used in 90%+ of advanced DAX measures",
                "Understanding CALCULATE() is essential for DAX mastery"
              ],
              insiderTips: [
                "CALCULATE() is the most important DAX function - master it completely",
                "Remember: CALCULATE() modifies context, doesn't replace it entirely",
                "You can stack multiple filters: CALCULATE(expression, filter1, filter2, filter3)",
                "CALCULATE() can both add filters and remove them (using ALL, ALLEXCEPT)",
                "When CALCULATE() seems confusing, ask: 'What context am I starting with? What filters am I adding?'",
                "Practice reading CALCULATE() as natural language: 'Calculate Total Sales where Region equals East'",
                "All filter arguments in CALCULATE() are applied AND conditions (all must be true)",
                "Pro tip: Start with simple CALCULATE() examples and gradually add complexity"
              ],
              labs: [
                "Create basic CALCULATE() measure:",
                "  East Sales = CALCULATE([Total Sales], Sales[Region]=\"East\")",
                "  Test in visual - should show only East region sales",
                "Add multiple filters:",
                "  East 2024 Sales = CALCULATE([Total Sales], Sales[Region]=\"East\", Sales[Year]=2024)",
                "  This filters for both conditions",
                "Remove filters:",
                "  All Region Sales = CALCULATE([Total Sales], ALL(Sales[Region]))",
                "  This removes Region filter to show total across all regions",
                "Practice filter combinations:",
                "  Try different filter combinations in CALCULATE()",
                "  Observe how filters interact",
                "Build practical measures:",
                "  Sales % = DIVIDE([This Region Sales], CALCULATE([Total Sales], ALL(Region)))",
                "  This calculates percentage of regional sales vs total",
                "Test: Use different slicers to verify CALCULATE() behavior"
              ],
              tables: [
                {
                  title: "CALCULATE() Patterns",
                  headers: ["Pattern", "Syntax", "What It Does", "Example"],
                  rows: [
                    ["Add Single Filter", "CALCULATE(expr, column=value)", "Adds one filter condition", "CALCULATE(Sales, Region=\"East\")"],
                    ["Add Multiple Filters", "CALCULATE(expr, f1, f2, f3)", "Adds AND conditions", "CALCULATE(Sales, Region=\"E\", Year=2024)"],
                    ["Remove Filter", "CALCULATE(expr, ALL(column))", "Removes column filter", "CALCULATE(Sales, ALL(Region))"],
                    ["Remove Some Filters", "CALCULATE(expr, ALLEXCEPT(table, col))", "Keeps only specified column", "CALCULATE(Sales, ALLEXCEPT(Sales, Year))"],
                    ["Replace Filter", "CALCULATE(expr, FILTER(...))", "Complex filter logic", "CALCULATE(Sales, FILTER(ALL(Date), ...))"]
                  ]
                },
                {
                  title: "CALCULATE() vs Without CALCULATE()",
                  headers: ["Scenario", "Without CALCULATE()", "With CALCULATE()", "Result"],
                  rows: [
                    ["Same filter context", "[Total Sales]", "[Total Sales]", "Same result"],
                    ["Different filter", "Can't change context", "CALCULATE([Total Sales], Region=\"East\")", "Different result"],
                    ["Percentage of total", "Impossible", "CALCULATE(...) / CALCULATE(..., ALL(...))", "Possible"],
                    ["Complex logic", "Limited", "CALCULATE with FILTER", "Full power"]
                  ]
                }
              ]
            },
          },
          {
            id: "8-2",
            moduleNumber: 8,
            lessonNumber: 2,
            title: "Removing Filters with ALL()",
            description: "The ALL() function removes filters from a table or column. Its primary use is as a filter modifier inside CALCULATE(). This is the key to creating \"Percent of Total\" calculations.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What is ALL()?', timestamp: 0 },
              { title: 'ALL() with CALCULATE()', timestamp: 240 },
              { title: 'Percent of Total Pattern', timestamp: 720 },
              { title: 'ALL() vs ALLEXCEPT() vs ALLSELECTED()', timestamp: 1200 },
              { title: 'Common Use Cases', timestamp: 1560 },
              { title: 'Lab: ALL() Practice', timestamp: 1800 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "ALL", "Filter Modifiers"],
            topic: 'DAX',
            content: {
              concept: "The ALL() function removes filters from a table or column. Its primary use is as a filter modifier inside CALCULATE(). When used inside CALCULATE(), ALL() overrides the existing filter context for the specified table or column, allowing you to calculate totals across all data regardless of active filters. This is the key to creating 'Percent of Total' calculations and many other advanced DAX patterns.",
              discussion: "ALL() is a table-returning function that returns all rows in a table (or all unique values in a column) regardless of filter context. When used inside CALCULATE(), it effectively says 'ignore all filters on this table/column'. For example, CALCULATE([Total Sales], ALL(Customer)) calculates total sales ignoring any Customer filters. This is the foundation of percentage calculations: Percent of Total Sales = DIVIDE([Regional Sales], CALCULATE([Regional Sales], ALL(Region))). In this pattern, the numerator respects filters (showing regional sales), while the denominator removes the Region filter (showing total sales), resulting in a percentage. ALL() variations: ALL(table) removes all filters on the table, ALL(column) removes filter on that column, ALL(table[column]) removes filter on that specific column, ALLEXCEPT(table, columns...) removes all filters except specified columns, and ALLSELECTED() removes visual filters but keeps slicer filters. Understanding these variations is crucial for advanced DAX.",
              keyPoints: [
                "ALL() returns all rows/values, ignoring filter context",
                "Used inside CALCULATE() to override existing filters",
                "Key to percentage calculations: numerator with filter, denominator with ALL()",
                "ALL(table) removes all table filters, ALL(column) removes column filter",
                "ALLEXCEPT() removes all filters except specified columns",
                "ALLSELECTED() removes visual filters but keeps slicer filters"
              ],
              insiderTips: [
                "ALL() by itself does nothing - it must be inside CALCULATE() to remove filters",
                "Common pattern: % of Total = DIVIDE(measure, CALCULATE(measure, ALL(...)))",
                "ALL(column) vs ALL(table[column]) - use ALL(column) unless you need specificity",
                "Performance: ALL() on large tables can be slow - use ALL(column) when possible",
                "ALLEXCEPT is powerful: ALLEXCEPT(Sales, [Date]) keeps Date filter, removes others",
                "ALLSELECTED is tricky: Understand when you want slicers vs visual filters",
                "Test ALL() with slicers to verify it's removing filters correctly",
                "Remember: ALL() removes filters - use it when you need 'ignore this filter' logic"
              ],
              labs: [
                "Create Total Sales measure: Total Sales = SUM(Sales[Amount])",
                "Create Regional Sales: Regional Sales = [Total Sales] (inherits Region filter)",
                "Create Total All Regions with ALL:",
                "  Total All Regions = CALCULATE([Total Sales], ALL(Sales[Region]))",
                "  This removes Region filter to show total across all regions",
                "Create Percent of Total:",
                "  % of Total = DIVIDE([Regional Sales], [Total All Regions])",
                "  Shows each region as percentage of total",
                "Test with slicers:",
                "  Add Region slicer, observe how % changes",
                "  Verify numerator changes but denominator stays total",
                "Practice ALLEXCEPT:",
                "  ALLEXCEPT Sales = CALCULATE([Total Sales], ALLEXCEPT(Sales, [Year]))",
                "  This keeps Year filter, removes all other Sales filters",
                "Compare ALL vs ALLEXCEPT vs ALLSELECTED in different scenarios"
              ],
              tables: [
                {
                  title: "ALL() Function Variations",
                  headers: ["Function", "What It Does", "Use Case", "Example"],
                  rows: [
                    ["ALL(table)", "Removes all filters on table", "Total across entire table", "ALL(Sales)"],
                    ["ALL(column)", "Removes filter on column", "Total across column categories", "ALL(Sales[Region])"],
                    ["ALL(table[column])", "Explicit column reference", "Same as ALL(column)", "ALL(Sales[Region])"],
                    ["ALLEXCEPT(table, cols)", "Keep specified columns, remove others", "Keep one filter, remove rest", "ALLEXCEPT(Sales, [Year])"],
                    ["ALLSELECTED()", "Remove visual filters, keep slicers", "Slicer-aware totals", "ALLSELECTED(Sales[Region])"]
                  ]
                },
                {
                  title: "Common ALL() Patterns",
                  headers: ["Pattern", "Formula", "When to Use", "Example Result"],
                  rows: [
                    ["% of Total", "DIVIDE(measure, CALCULATE(measure, ALL(...)))", "Show percentage", "East = 25% of total"],
                    ["Total ignoring filter", "CALCULATE(measure, ALL(...))", "Need grand total", "Show total across all regions"],
                    ["Compare to total", "measure / CALCULATE(measure, ALL(...))", "Ratio to total", "This region / all regions"],
                    ["Ranking", "RANKX(ALL(...), measure)", "Rank across all", "Rank 1-4 for 4 regions"],
                    ["Pareto", "CALCULATE(measure, filter(<80%)) / CALCULATE(measure, ALL(...))", "80/20 analysis", "Top products = 80%"]
                  ]
                }
              ]
            },
          },
          {
            id: "8-3",
            moduleNumber: 8,
            lessonNumber: 3,
            title: "Related ALL Functions: ALLEXCEPT(), ALLSELECTED()",
            description: "Nuanced versions of ALL() for more complex scenarios. Learn ALLEXCEPT(), ALLSELECTED(), and when to use each one.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'ALL() Function Family Overview', timestamp: 0 },
              { title: 'ALLEXCEPT() Deep Dive', timestamp: 300 },
              { title: 'ALLSELECTED() Deep Dive', timestamp: 780 },
              { title: 'When to Use Each Function', timestamp: 1260 },
              { title: 'Complex Scenarios', timestamp: 1620 },
              { title: 'Lab: All ALL() Functions', timestamp: 1860 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "Filter Modifiers", "ALL Variations"],
            topic: 'DAX',
            content: {
              concept: "ALLEXCEPT() and ALLSELECTED() are nuanced versions of ALL() for more complex filter scenarios. ALLEXCEPT() removes all filters except specified columns - perfect when you want to keep some filters while removing others. ALLSELECTED() removes visual-level filters but keeps slicer/filter pane filters - enabling slicer-aware calculations. Understanding these variations is essential for advanced DAX patterns.",
              discussion: "ALLEXCEPT() syntax is ALLEXCEPT(table, column1, column2, ...) and removes all filters from the table EXCEPT the specified columns. For example, ALLEXCEPT(Sales, [Year], [Region]) keeps Year and Region filters active while removing all other Sales table filters. This is powerful when you want partial totals - like 'show total for this year and region across all products'. ALLSELECTED() syntax is ALLSELECTED(table) and removes filters created by visual axes/rows/columns but keeps filters from slicers and filter panes. For example, if you have a matrix with Product on rows and Region on slicer, ALLSELECTED(Sales[Product]) would show total across all products (ignoring the matrix rows) but still respect the Region slicer. This enables calculations like 'this product / all selected products' which can be useful for contribution analysis. Common use cases: ALLEXCEPT() for keeping specific filters while removing others (e.g., year-to-date ignoring time periods), ALLSELECTED() for slicer-aware totals (e.g., ranking within selected items), and combining them for complex filter scenarios. These functions are advanced and require understanding of filter context interaction.",
              keyPoints: [
                "ALLEXCEPT() removes all filters EXCEPT specified columns",
                "ALLSELECTED() removes visual filters but keeps slicer/filter pane filters",
                "ALLEXCEPT() is perfect for keeping some filters while removing others",
                "ALLSELECTED() enables slicer-aware calculations",
                "Use ALLEXCEPT() when you need partial totals",
                "Use ALLSELECTED() when you need slicer-aware measures"
              ],
              insiderTips: [
                "ALLEXCEPT(Sales, [Year]) keeps Year, removes all other Sales filters",
                "ALLEXCEPT can take multiple columns: ALLEXCEPT(Sales, [Year], [Region])",
                "ALLSELECTED respects slicers but ignores visual axes - test carefully",
                "Performance: ALLSELECTED can be slower than ALL - profile your measures",
                "Common mistake: Using ALLSELECTED when you really need ALL",
                "Test ALLSELECTED with and without slicers to verify behavior",
                "ALLEXCEPT is powerful for year-over-year calculations keeping year filter",
                "ALLSELECTED is key for dashboard-level filtering scenarios"
              ],
              labs: [
                "Create ALLEXCEPT() measure:",
                "  Total by Year = CALCULATE([Total Sales], ALLEXCEPT(Sales, [Year]))",
                "  This keeps Year filter, removes all other filters",
                "Use ALLEXCEPT for YTD calculations:",
                "  Sales YTD = CALCULATE([Total Sales], ALLEXCEPT(DateTable, [Year]))",
                "  Keeps Year, removes Month/Day filters",
                "Create ALLSELECTED() measure:",
                "  Selected Total = CALCULATE([Total Sales], ALLSELECTED(Sales[Product]))",
                "  This ignores Product rows but respects other filters",
                "Test with slicers:",
                "  Add Region slicer, Product slicer",
                "  Observe how ALLSELECTED responds to slicers",
                "Combine ALL functions:",
                "  Complex Total = CALCULATE([Total Sales], ALLEXCEPT(Sales, [Year]), ALLSELECTED(Region))",
                "  Keep Year filter, remove visual filters, keep slicer filters",
                "Practice: Build measures using each ALL variation"
              ],
              tables: [
                {
                  title: "ALL() Function Family Comparison",
                  headers: ["Function", "Removes", "Keeps", "Use Case"],
                  rows: [
                    ["ALL(table)", "All table filters", "Nothing", "Grand total"],
                    ["ALL(column)", "One column filter", "All other filters", "Total for this column"],
                    ["ALLEXCEPT(table, cols)", "All except specified", "Specified columns", "Partial totals"],
                    ["ALLSELECTED(table)", "Visual axes filters", "Slicers, filter panes", "Slicer-aware calculations"]
                  ]
                },
                {
                  title: "Choosing the Right ALL Function",
                  headers: ["Need", "Function", "Example", "Result"],
                  rows: [
                    ["Grand total", "ALL(table)", "ALL(Sales)", "Total across everything"],
                    ["Total for one column", "ALL(column)", "ALL(Sales[Region])", "Total ignoring Region"],
                    ["Keep some filters", "ALLEXCEPT", "ALLEXCEPT(Sales, [Year])", "Keep Year, remove rest"],
                    ["Slicer-aware total", "ALLSELECTED", "ALLSELECTED(Sales[Product])", "Total respecting slicers"]
                  ]
                }
              ]
            },
          },
          {
            id: "8-4",
            moduleNumber: 8,
            lessonNumber: 4,
            title: "Context Transition (The Advanced Concept)",
            description: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\" - a powerful but complex mechanism that converts row context to filter context.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What is Context Transition?', timestamp: 0 },
              { title: 'Row Context to Filter Context', timestamp: 300 },
              { title: 'Context Transition in Calculated Columns', timestamp: 720 },
              { title: 'Understanding the Mechanism', timestamp: 1140 },
              { title: 'Performance Implications', timestamp: 1500 },
              { title: 'Lab: Context Transition Examples', timestamp: 1680 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "Context Transition", "Advanced DAX"],
            topic: 'DAX',
            content: {
              concept: "When CALCULATE() is used inside a row context (such as in a calculated column), it performs \"Context Transition\" - a complex but powerful mechanism that automatically converts row context into an equivalent filter context. This allows you to create column-level calculations that behave like measures, making calculated columns more powerful but also potentially slower.",
              discussion: "Context transition is an automatic process that occurs when CALCULATE() appears in a row context. Here's what happens: 1) Power BI identifies the current row's values, 2) CALCULATE() converts those row values into an equivalent filter context, 3) The filter context is then used to evaluate the expression. Example: Create a calculated column in the Customer table: Total Spend = CALCULATE(SUM(Sales)). For each row in the Customer table, context transition automatically converts the current row's CustomerKey into a filter (CustomerKey = current value), then calculates the total sales for only that specific customer. This is powerful because it allows you to create per-row aggregations without explicit filter logic. However, context transition has performance implications - it's relatively expensive because it creates and applies filters for every row. This is why context transition in calculated columns can slow down model refresh. Context transition also occurs in iterator functions (like SUMX), where CALCULATE() inside the expression triggers the transition for each row being iterated. Understanding context transition is key to mastering advanced DAX and avoiding performance pitfalls.",
              keyPoints: [
                "Context transition converts row context into filter context when CALCULATE() is involved",
                "Occurs in calculated columns and iterator functions automatically",
                "Allows row-level aggregations without explicit filter logic",
                "Performance cost: context transition is expensive",
                "Use when you need row-level aggregations in calculated columns",
                "Consider alternatives (measures or Power Query) for better performance"
              ],
              insiderTips: [
                "Context transition is automatic with CALCULATE() in row context - you can't turn it off",
                "Example in calculated column: Customer[TotalSpend] = CALCULATE(SUM(Sales[Amount]))",
                "Performance issue: Context transition in large tables can significantly slow refresh",
                "Alternative: Consider using measures with RELATEDTABLE() instead of context transition",
                "Context transition in iterators (SUMX): One transition per row being iterated",
                "Use context transition sparingly - prefer measures for aggregations when possible",
                "Test performance: Compare context transition in column vs. measure approach",
                "Advanced: Context transition is the key to understanding calculated columns with aggregations"
              ],
              labs: [
                "Create calculated column with context transition:",
                "  In Customer table: Total Spend = CALCULATE(SUM(Sales[Amount]))",
                "  This transitions CustomerKey from row context to filter context",
                "Verify behavior:",
                "  Each row shows total sales for that specific customer",
                "Compare to measure:",
                "  Create measure: Customer Sales Measure = SUM(Sales[Amount])",
                "  Note difference: column = one calculation per customer, measure = dynamic",
                "Use in iterator:",
                "  Create measure: Avg Customer Sales = AVERAGEX(Customer, CALCULATE(SUM(Sales)))",
                "  Context transition happens for each customer row",
                "Performance test:",
                "  Create column with context transition on large table",
                "  Compare refresh time to equivalent measure approach",
                "Practice: Build different context transition scenarios"
              ],
              tables: [
                {
                  title: "Context Transition Scenarios",
                  headers: ["Location", "Example", "When It Happens", "Performance Impact"],
                  rows: [
                    ["Calculated Column", "CALCULATE(SUM(Sales))", "Every row in table", "High - once per row"],
                    ["Inside SUMX", "SUMX(Table, CALCULATE(measure))", "Every row iterated", "High - once per iteration"],
                    ["Inside FILTER", "FILTER(Table, CALCULATE(measure))", "Every row filtered", "Very High - iteration + filter"],
                    ["In Measure", "Not applicable", "Doesn't occur in pure measures", "None - only filter context"]
                  ]
                },
                {
                  title: "Context Transition vs Alternatives",
                  headers: ["Approach", "When to Use", "Performance", "Flexibility"],
                  rows: [
                    ["Context Transition", "Need row-level aggregation", "Slower", "Less flexible"],
                    ["Measure with RELATEDTABLE", "Need related table aggregation", "Medium", "More flexible"],
                    ["Power Query Group By", "Can pre-calculate", "Fast", "Static"],
                    ["Simple Measure", "Standard aggregation", "Fastest", "Most flexible"]
                  ]
                }
              ]
            },
          },
          {
            id: "8-5",
            moduleNumber: 8,
            lessonNumber: 5,
            title: "Advanced DAX Scenarios (USERELATIONSHIP)",
            description: "Solving complex modeling problems with DAX. Learn USERELATIONSHIP() to activate inactive relationships for specific measures.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Inactive Relationships Concept', timestamp: 0 },
              { title: 'Introducing USERELATIONSHIP()', timestamp: 300 },
              { title: 'Role-Playing Dimensions', timestamp: 600 },
              { title: 'Using USERELATIONSHIP()', timestamp: 960 },
              { title: 'Common Use Cases', timestamp: 1260 },
              { title: 'Lab: USERELATIONSHIP() Practice', timestamp: 1500 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "Relationships", "Advanced DAX"],
            topic: 'DAX',
            content: {
              concept: "Solving complex modeling problems with DAX sometimes requires activating different relationships for different measures. USERELATIONSHIP() is a filter modifier used inside CALCULATE() to override which relationship is active for a specific calculation. This is essential when you have role-playing dimensions (like a Date dimension used for multiple purposes) or need to switch between alternative relationships.",
              discussion: "Power BI allows only one active relationship between two tables at a time. However, you can have multiple inactive relationships. USERELATIONSHIP() enables you to activate an inactive relationship for a specific calculation. Common scenario: A sales fact table has OrderDate and ShipDate, both connecting to the same Date dimension. One relationship is active (typically OrderDate), while ShipDate is inactive. To create a 'Sales by Ship Date' measure, use: Ship Date Sales = CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], Date[Date])). This activates the ShipDate relationship just for this measure while leaving others to use the active OrderDate relationship. Syntax: USERELATIONSHIP(column1, column2) where these columns define the inactive relationship. It must be used inside CALCULATE() and requires the specified columns to have an inactive relationship between them. This pattern is common for time-based scenarios (multiple dates in fact table) but can be used whenever you need to alternate between different relationships.",
              keyPoints: [
                "USERELATIONSHIP() activates inactive relationships for specific calculations",
                "Used inside CALCULATE() to override the active relationship",
                "Essential for role-playing dimensions (multiple relationships to same table)",
                "Common use: Multiple date columns (Order Date, Ship Date, etc.)",
                "Only one relationship can be active at a time by default",
                "USERELATIONSHIP() lets you use alternative relationships per measure"
              ],
              insiderTips: [
                "USERELATIONSHIP() requires an existing inactive relationship - create it first in Model View",
                "Syntax: USERELATIONSHIP(column1, column2) - specify both sides of the relationship",
                "Most common use: Role-playing date dimensions (Order Date vs Ship Date vs Due Date)",
                "Performance: USERELATIONSHIP adds slight overhead - use sparingly",
                "Alternative: Create separate date tables for each role (rare, usually not worth it)",
                "Test USERELATIONSHIP thoroughly - wrong relationship yields incorrect results",
                "Document which measures use which relationships for future maintenance",
                "Common PL-300 exam topic: identifying when USERELATIONSHIP is needed"
              ],
              labs: [
                "Create inactive relationship:",
                "  In Model View, drag ShipDate from Sales to Date[Date]",
                "  Relationship is created but inactive",
                "  Active relationship: OrderDate to Date[Date]",
                "Create measure with USERELATIONSHIP:",
                "  Ship Date Sales = CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], Date[Date]))",
                "  This activates the ShipDate relationship for this measure",
                "Compare measures:",
                "  Create: Order Date Sales = [Total Sales] (uses active relationship)",
                "  Create: Ship Date Sales = CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], Date[Date]))",
                "  Add both to visual to see different dates",
                "Test with time intelligence:",
                "  Ship Date YTD = TOTALYTD(CALCULATE([Total Sales], USERELATIONSHIP(Sales[ShipDate], Date[Date])), Date)",
                "  Verify it calculates year-to-date by ship date, not order date",
                "Practice: Build multiple measures using different relationships"
              ],
              tables: [
                {
                  title: "USERELATIONSHIP() Use Cases",
                  headers: ["Scenario", "Why USERELATIONSHIP?", "Example", "Alternative"],
                  rows: [
                    ["Multiple dates", "Need different dates for different measures", "Order Date Sales vs Ship Date Sales", "Separate date tables"],
                    ["Multiple relationships", "Need alternative joins", "Customer Sales vs Salesperson Sales", "Restructure model"],
                    ["Time intelligence", "Different period calculations", "Order YTD vs Ship YTD", "Multiple models"],
                    ["Role-playing dims", "Same dim in multiple contexts", "Purchase Date vs Sell Date", "Duplicate dimension"]
                  ]
                },
                {
                  title: "USERELATIONSHIP() vs Alternatives",
                  headers: ["Approach", "Pros", "Cons", "When to Use"],
                  rows: [
                    ["USERELATIONSHIP()", "Single relationship, flexible", "Slight performance cost", "Common pattern"],
                    ["Multiple dims", "Better performance", "More complex model", "Rare"],
                    ["Snowflake", "Normalized design", "Slower, complex", "Avoid in Power BI"],
                    ["Calculate columns", "No relationship switch", "Storage overhead", "Not for dates"]
                  ]
                }
              ]
            },
          },
          {
            id: "8-6",
            moduleNumber: 8,
            lessonNumber: 6,
            title: "Introduction to Visual Calculations (Oct 2025 GA)",
            description: "Visual Calculations (GA Oct 2025) provide a simpler way to add calculations like running totals or moving averages directly on a visual, operating on the visual's data matrix rather than the full data model.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'What are Visual Calculations?', timestamp: 0 },
              { title: 'Visual Calculations vs DAX', timestamp: 240 },
              { title: 'Creating Visual Calculations', timestamp: 600 },
              { title: 'Common Visual Calculation Types', timestamp: 960 },
              { title: 'Running Totals and Averages', timestamp: 1320 },
              { title: 'Lab: Visual Calculations Practice', timestamp: 1560 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "2025 Features", "Visual Calculations"],
            topic: 'DAX',
            content: {
              concept: "Visual Calculations (GA Oct 2025) provide a new, simpler way to add calculations like running totals or moving averages directly on a visual, operating on the visual's data matrix rather than the full data model. This eliminates the need for complex DAX for common calculation patterns, making Power BI more accessible to users who find DAX challenging.",
              discussion: "Visual Calculations are a breakthrough feature that allows you to add calculations directly to visuals without writing DAX measures. They operate on the visual's data structure (the rows/columns you've added), making them intuitive and easier to understand than traditional DAX. Common visual calculation types include: Running Total (sum of values up to current row), Running Average (average of values up to current row), Percent of Total (value as percentage of grand total), Difference from Previous (change from previous period), and Rank (rank of current value). To create a visual calculation, right-click on a visual field, select 'New calculation', then choose the calculation type. The calculation is specific to that visual and operates on its data structure. This makes complex DAX patterns like running totals much simpler - instead of writing TOTALYTD or cumulative DAX, you can add a visual calculation in seconds. Visual calculations respect the visual's filters but operate independently of the data model, making them perfect for calculations that only need to work within the visual's context. This feature democratizes advanced calculations, making them accessible to users who might struggle with DAX.",
              keyPoints: [
                "Visual Calculations add calculations directly to visuals without DAX",
                "Operate on the visual's data matrix, not the full data model",
                "Common types: Running Total, Running Average, Percent of Total, Rank",
                "Visual-specific: Each calculation is tied to one visual",
                "2025 Feature: Generally available as of October 2025",
                "Simpler alternative to complex DAX for common patterns"
              ],
              insiderTips: [
                "Visual calculations are visual-specific - they don't create reusable measures",
                "Perfect for running totals, moving averages, and ranking without DAX",
                "Much simpler than DAX TOTALYTD or cumulative patterns",
                "Operate on visual's filtered data - great for visual-level calculations",
                "Can't be used across multiple visuals - need DAX for that",
                "Test visual calculations to ensure they work as expected",
                "Combine visual calculations with DAX for maximum flexibility",
                "Visual calculations are the future of simple calculations in Power BI"
              ],
              labs: [
                "Create a line chart with Sales by Month",
                "Add Running Total calculation:",
                "  Right-click Sales field, select 'New calculation'",
                "  Choose 'Running Total'",
                "  Visual calculates running total across months",
                "Add Moving Average calculation:",
                "  Create new calculation, choose 'Moving Average'",
                "  Set period (e.g., 3 months)",
                "  Visual shows smoothed trend",
                "Add Percent of Total:",
                "  Create calculation, choose 'Percent of Total'",
                "  Shows each month as % of total",
                "Compare to DAX:",
                "  Create equivalent DAX measure for Running Total",
                "  Compare complexity - visual calculations are simpler",
                "Practice: Add multiple visual calculations to same visual"
              ],
              tables: [
                {
                  title: "Visual Calculations vs DAX",
                  headers: ["Aspect", "Visual Calculations", "DAX Measures", "Best For"],
                  rows: [
                    ["Complexity", "Simple, visual interface", "Requires DAX knowledge", "Visual calculations for speed"],
                    ["Reusability", "Visual-specific only", "Works across all visuals", "DAX for reusability"],
                    ["Flexibility", "Limited to predefined types", "Unlimited calculation logic", "DAX for complex logic"],
                    ["Learning Curve", "Easy, no coding", "Steeper, requires training", "Visual for beginners"],
                    ["Performance", "Visual-level only", "Model-level optimization", "DAX for performance"]
                  ]
                },
                {
                  title: "Common Visual Calculation Types",
                  headers: ["Calculation Type", "What It Does", "DAX Equivalent", "Use Case"],
                  rows: [
                    ["Running Total", "Sum from first to current", "TOTALYTD, cumulative SUMX", "YTD, cumulative trends"],
                    ["Moving Average", "Average of N periods", "AVERAGEX with DATESINPERIOD", "Smooth trends"],
                    ["% of Total", "Value / grand total", "CALCULATE with ALL", "Contribution analysis"],
                    ["Rank", "Rank of current value", "RANKX", "Performance ranking"],
                    ["Difference from Previous", "Current - previous", "Custom DAX", "Period-over-period"]
                  ]
                }
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
            description: "DAX Time Intelligence functions require a proper, dedicated Date table in the model. Learn how to create and configure a Date table for time intelligence calculations.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Why Date Tables Are Required', timestamp: 0 },
              { title: 'Date Table Requirements', timestamp: 300 },
              { title: 'Creating Date Table in Power Query', timestamp: 720 },
              { title: 'Creating Date Table with DAX', timestamp: 1140 },
              { title: 'Marking as Date Table', timestamp: 1500 },
              { title: 'Lab: Create and Configure Date Table', timestamp: 1680 }
            ],
            difficulty: 'intermediate',
            tags: ["Time Intelligence", "DAX", "Power Query"],
            topic: 'DAX',
            content: {
              concept: "DAX Time Intelligence functions will not work unless a proper, dedicated Date table exists in the model. This table serves as the foundation for all time-based calculations and must meet specific requirements for time intelligence functions to operate correctly. Without a properly configured Date table, functions like TOTALYTD, SAMEPERIODLASTYEAR, and other time intelligence functions simply won't work.",
              discussion: "A Date table must contain one row for every day in the desired range with no gaps. If your data spans 2020-2025, the Date table needs every single day in that range with no missing dates. This table must be \"Marked as Date Table\" in the Model View to enable time intelligence functions. The Date table can be created in Power Query (using 'New Table' or 'Blank Query' with date generation functions) or using DAX (e.g., CALENDARAUTO() which automatically detects the date range from your data). Power Query approach: Create a new query, use List.Dates to generate dates, convert to table, add date-related columns (Year, Month, Quarter, etc.), and load. DAX approach: Use CALENDARAUTO() or CALENDAR() functions to generate dates, then add calculated columns for Year, MonthName, Quarter, etc. After creating the Date table, go to Model View, right-click the table, select 'Mark as date table', and choose the date column. This is critical - time intelligence functions won't work until this is done. Best practice: Create a comprehensive Date table with many columns (Year, Quarter, Month, Week, Day of Week, etc.) for maximum flexibility in time calculations.",
              keyPoints: [
                "Date table required: Time intelligence functions won't work without it",
                "One row per day: No gaps in the date range",
                "Must be marked: 'Mark as date table' in Model View",
                "Can create in Power Query or DAX: Both methods work",
                "Include date columns: Year, Month, Quarter, Week for flexibility",
                "Use CALENDARAUTO() for automatic range detection"
              ],
              insiderTips: [
                "Always create a Date table for any model with time-based data",
                "CALENDARAUTO() is easiest - automatically detects your data's date range",
                "Power Query method gives more control over columns and structure",
                "Marking as Date table is REQUIRED - functions won't work without it",
                "Include more columns than you think you need: Year, Quarter, Month, Week, Day",
                "Consider adding fiscal year columns if your business uses fiscal calendars",
                "The Date table doesn't need to join to facts if you create date columns in facts",
                "Use continuous dates - avoid business days only unless required"
              ],
              labs: [
                "Method 1: Create Date Table with DAX:",
                "  In Data View, click 'New Table'",
                "  Enter: DateTable = CALENDARAUTO()",
                "  Table is created with one column 'Date'",
                "  Add columns: Year = YEAR([Date]), Month = MONTH([Date]), etc.",
                "Method 2: Create in Power Query:",
                "  Click 'New Source' > 'Blank Query'",
                "  In Advanced Editor, enter M code to generate dates",
                "  Add columns: Year, Month, Quarter, Week using transformations",
                "  Close & Apply",
                "Mark as Date Table:",
                "  Switch to Model View",
                "  Right-click DateTable, select 'Mark as date table'",
                "  Select the Date column (primary date column)",
                "  Time intelligence functions are now enabled",
                "Verify:",
                "  Try a simple measure: Test = CALENDAR(2020,1,1, 2025,12,31)",
                "  Or create: Sales YTD = TOTALYTD(SUM(Sales[Amount]), 'DateTable'[Date])",
                "  If it works, Date table is configured correctly"
              ],
              tables: [
                {
                  title: "Date Table Creation Methods",
                  headers: ["Method", "Code/Steps", "Pros", "Cons"],
                  rows: [
                    ["DAX CALENDARAUTO()", "DateTable = CALENDARAUTO()", "Automatic range detection, quick", "Less control over structure"],
                    ["DAX CALENDAR()", "DateTable = CALENDAR(2020,1,1,2025,12,31)", "Full control over range", "Must specify dates manually"],
                    ["Power Query", "List.Dates or Blank Query", "Visual transformation, flexible", "More steps, requires Power Query knowledge"],
                    ["External Source", "Connect to date data", "Can include business logic", "Depends on external system"]
                  ]
                },
                {
                  title: "Essential Date Table Columns",
                  headers: ["Column", "Purpose", "Example", "Used By"],
                  rows: [
                    ["Date", "Primary date column", "2024-03-15", "All time functions"],
                    ["Year", "Year number", "2024", "TOTALYTD, SAMEPERIODLASTYEAR"],
                    ["Quarter", "Quarter number", "Q1, Q2, Q3, Q4", "Quarter-based calculations"],
                    ["Month", "Month number/name", "3 or 'March'", "Monthly aggregations"],
                    ["Week", "Week number", "11", "Weekly analysis"],
                    ["DayOfWeek", "Day name", "Monday, Tuesday...", "Day-of-week analysis"],
                    ["IsWeekend", "True/False", "false", "Filter business days only"],
                    ["FiscalYear", "Custom FY", "FY2024", "Fiscal calendars"]
                  ]
                }
              ]
            },
          },
          {
            id: "9-2",
            moduleNumber: 9,
            lessonNumber: 2,
            title: "Year-to-Date (YTD) and Period-to-Date (Hands-On Lab)",
            description: "Calculating running totals for common time periods using time intelligence functions. TOTALYTD() and similar functions replace complex manual sum logic with elegant, reusable measures.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding YTD', timestamp: 0 },
              { title: 'TOTALYTD Function', timestamp: 300 },
              { title: 'Quarter-to-Date (QTD)', timestamp: 720 },
              { title: 'Month-to-Date (MTD)', timestamp: 1140 },
              { title: 'Combining Period Calculations', timestamp: 1500 },
              { title: 'Lab: Create All Period Measures', timestamp: 1740 }
            ],
            difficulty: 'intermediate',
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Calculating running totals for common time periods is a fundamental business analytics requirement. Time intelligence functions like TOTALYTD(), TOTALQTD(), and TOTALMTD() make this simple and elegant. These functions automatically calculate running totals from the beginning of the period to the current date, replacing complex manual sum logic with reusable measures that dynamically update based on context.",
              discussion: "TOTALYTD() calculates the running total from January 1st of the current year to today (or the selected date). Syntax: Sales YTD = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date]). This single function replaces complex DAX that would require DATESBETWEEN(), FILTER(), and manual date logic. TOTALYTD works because it knows about your Date table (marked as date table) and automatically understands the period boundaries. TOTALQTD() (Quarter-to-Date) calculates from the start of the current quarter, and TOTALMTD() (Month-to-Date) calculates from the start of the current month. These functions all follow the same pattern: FUNCTION(expression, date_column). Optional parameters allow you to specify the end date (for end-of-period calculations) and filters. These functions are context-aware - when placed in a visual by month, they show cumulative totals through that month; when placed in a visual by day, they show YTD through that day. This automatic context awareness is what makes time intelligence functions powerful - one measure works everywhere.",
              keyPoints: [
                "TOTALYTD calculates running total from year start to current date",
                "TOTALQTD calculates running total from quarter start",
                "TOTALMTD calculates running total from month start",
                "All follow same pattern: FUNCTION(expression, date_column)",
                "Automatic context awareness - one measure works in any visual",
                "Requires marked Date table to work correctly"
              ],
              insiderTips: [
                "TOTALYTD is the most commonly used time intelligence function",
                "End date parameter: TOTALYTD(expr, date, end_date) for fiscal years",
                "All functions work with filters - they respect slicer selections",
                "Test YTD measures in different visuals to verify context behavior",
                "Use these functions instead of manual date filtering - much simpler",
                "Combine with ALLEXCEPT for partial year totals",
                "Fiscal year: Use end date parameter for non-calendar fiscal years",
                "Multiple dates: Use USERELATIONSHIP when you have multiple date columns"
              ],
              labs: [
                "Create Sales YTD measure:",
                "  Sales YTD = TOTALYTD(SUM(Sales[Amount]), 'Date'[Date])",
                "  Add to line chart with Date on X-axis",
                "  Observe cumulative behavior",
                "Create Sales QTD measure:",
                "  Sales QTD = TOTALQTD(SUM(Sales[Amount]), 'Date'[Date])",
                "  Add to visual - shows quarter cumulative",
                "Create Sales MTD measure:",
                "  Sales MTD = TOTALMTD(SUM(Sales[Amount]), 'Date'[Date])",
                "  Add to visual - shows month cumulative",
                "Compare measures:",
                "  Add all three to same visual",
                "  See how they differ based on period",
                "Test with filters:",
                "  Add Year slicer, select specific year",
                "  Verify YTD resets per year",
                "Practice: Build dashboard with YTD, QTD, and MTD metrics"
              ],
              tables: [
                {
                  title: "Period-to-Date Functions",
                  headers: ["Function", "Period", "Starts From", "Syntax"],
                  rows: [
                    ["TOTALYTD", "Year-to-Date", "January 1 of current year", "TOTALYTD(expr, date)"],
                    ["TOTALQTD", "Quarter-to-Date", "Start of current quarter", "TOTALQTD(expr, date)"],
                    ["TOTALMTD", "Month-to-Date", "First day of current month", "TOTALMTD(expr, date)"],
                    ["TOTALWTD", "Week-to-Date", "Start of current week", "TOTALWTD(expr, date)"]
                  ]
                },
                {
                  title: "Time Intelligence vs Manual Approach",
                  headers: ["Approach", "Complexity", "Flexibility", "Maintenance", "Best For"],
                  rows: [
                    ["Time Intelligence", "Simple", "Automatic context", "Easy", "Most scenarios"],
                    ["Manual DAX", "Complex", "Custom logic", "Difficult", "Custom periods"],
                    ["Power Query", "Simple", "Static only", "Easy", "Historical analysis"],
                    ["CALCULATE + FILTER", "Medium", "Full control", "Medium", "Custom requirements"]
                  ]
                }
              ]
            },
          },
          {
            id: "9-3",
            moduleNumber: 9,
            lessonNumber: 3,
            title: "Prior Period Comparisons",
            description: "Comparing performance to the equivalent period in the past using SAMEPERIODLASTYEAR(), DATEADD(), and PARALLELPERIOD(). Learn how to create prior period measures.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Prior Year Comparisons', timestamp: 0 },
              { title: 'SAMEPERIODLASTYEAR Function', timestamp: 300 },
              { title: 'DATEADD for Flexible Shifts', timestamp: 900 },
              { title: 'PARALLELPERIOD Explained', timestamp: 1440 },
              { title: 'Practical Use Cases', timestamp: 1920 },
              { title: 'Lab: Create Prior Period Measures', timestamp: 2160 }
            ],
            difficulty: 'intermediate',
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Comparing performance to the equivalent period in the past is essential for business analytics. Functions like SAMEPERIODLASTYEAR(), DATEADD(), and PARALLELPERIOD() enable you to shift time periods and compare current performance to historical periods. These comparisons help identify trends, seasonality, and year-over-year growth.",
              discussion: "SAMEPERIODLASTYEAR() is the most straightforward prior period function. It shifts dates exactly one year into the past: Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date])). This function works for any period - if you're looking at March 2024, it returns March 2023. It respects your current filter context (month, quarter, etc.) and shifts the entire period back one year. DATEADD() is more flexible - it allows you to shift by any number of periods in any direction: Sales Last Quarter = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, QUARTER)). The syntax is DATEADD(date_column, number_of_periods, interval) where interval can be YEAR, QUARTER, MONTH, DAY. Use positive numbers to shift forward, negative to shift backward. PARALLELPERIOD() shifts to the corresponding period in the previous/next interval: PARALLELPERIOD('Date'[Date], -1, YEAR) shifts back exactly one year, but the period length matches your current filter. These functions are used inside CALCULATE() to modify the date filter context. They're powerful because they automatically handle leap years, month-end differences, and other date complexities.",
              keyPoints: [
                "SAMEPERIODLASTYEAR shifts dates back exactly one year",
                "DATEADD provides flexible shifting by any period count",
                "PARALLELPERIOD shifts to corresponding period in adjacent interval",
                "All must be used inside CALCULATE() to modify filter context",
                "Automatically handles date edge cases (leap years, month lengths)",
                "Essential for year-over-year, quarter-over-quarter comparisons"
              ],
              insiderTips: [
                "SAMEPERIODLASTYEAR is simplest for year-over-year comparisons",
                "DATEADD is most flexible: can shift by any number of months/quarters/years",
                "Use negative numbers in DATEADD to go backwards, positive to go forwards",
                "PARALLELPERIOD is great for consistent period comparisons",
                "All functions respect current filter context and shift appropriately",
                "Test with different date ranges to verify calculations are correct",
                "Combine with TOTALYTD: Prior Year YTD for cumulative comparisons",
                "Handle leap year differences - DATEADD and SAMEPERIODLASTYEAR do this automatically"
              ],
              labs: [
                "Create Prior Year measure:",
                "  Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
                "  Add to visual with current sales - shows year-over-year comparison",
                "Create Prior Quarter with DATEADD:",
                "  Sales PQ = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, QUARTER))",
                "  Shows previous quarter sales",
                "Create Prior Month:",
                "  Sales PM = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, MONTH))",
                "  Shows previous month sales",
                "Use PARALLELPERIOD:",
                "  Sales Parallel = CALCULATE([Total Sales], PARALLELPERIOD('Date'[Date], -1, YEAR))",
                "  Similar to SAMEPERIODLASTYEAR",
                "Compare functions:",
                "  Create measures with each function",
                "  Observe differences in results",
                "Practice: Build dashboard with current vs prior period comparisons"
              ],
              tables: [
                {
                  title: "Prior Period Functions Comparison",
                  headers: ["Function", "Syntax", "What It Does", "Example Result"],
                  rows: [
                    ["SAMEPERIODLASTYEAR", "SAMEPERIODLASTYEAR(date)", "Same period, last year", "March 2024 → March 2023"],
                    ["DATEADD", "DATEADD(date, N, period)", "Shift N periods", "March 2024, -1, MONTH → Feb 2024"],
                    ["PARALLELPERIOD", "PARALLELPERIOD(date, N, interval)", "Corresponding period N away", "Q1 2024, -1, YEAR → Q1 2023"],
                    ["Same quarter last year", "DATEADD(date, -4, QUARTER)", "Custom period shift", "Q4 2024 → Q4 2023"]
                  ]
                }
              ]
            },
          },
          {
            id: "9-4",
            moduleNumber: 9,
            lessonNumber: 4,
            title: "Calculating Year-over-Year (YoY) Growth",
            description: "Combining prior period measures with current period to create essential business KPIs. Learn how to calculate growth rates and percentage changes.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding Growth KPIs', timestamp: 0 },
              { title: 'YoY Growth Calculation', timestamp: 300 },
              { title: 'Percentage Change Formula', timestamp: 720 },
              { title: 'Handling Negative Growth', timestamp: 1020 },
              { title: 'Formatting Growth Metrics', timestamp: 1320 },
              { title: 'Lab: Create Growth Measures', timestamp: 1500 }
            ],
            difficulty: 'intermediate',
            tags: ["DAX", "Time Intelligence", "KPIs"],
            topic: 'DAX',
            content: {
              concept: "Combining prior period measures with current period data creates essential business KPIs like Year-over-Year (YoY) growth, Month-over-Month (MoM) growth, and Quarter-over-Quarter (QoQ) growth. These metrics transform raw numbers into actionable insights by showing how performance is trending. The elegance of DAX allows you to build these sophisticated metrics by simply combining reusable measures.",
              discussion: "Year-over-Year growth is calculated as: Sales YoY % = DIVIDE(([Total Sales] - [Sales PY]), [Sales PY]). This formula uses DIVIDE() instead of division operator (/) because DIVIDE() handles division by zero gracefully, returning blank instead of an error. The formula calculates: (Current Period - Prior Period) / Prior Period × 100%. For example, if current sales are $1,200 and prior year sales are $1,000, YoY growth = ($1,200 - $1,000) / $1,000 = 20%. You can calculate this in one measure or build it from reusable components. Best practice: Create separate measures for Current, Prior, Change, and Change % to maintain clarity and reusability. Negative growth is displayed as-is (e.g., -15%) - DAX handles this automatically. For formatting, apply percentage format to the measure and adjust decimal places. You can also create conditional formatting or color coding: Green for positive growth, Red for negative. This pattern works for any period comparison: YoY, QoQ, MoM. The power is in the reusability - one growth pattern, many applications.",
              keyPoints: [
                "YoY Growth = (Current - Prior) / Prior × 100%",
                "Use DIVIDE() instead of / to handle division by zero",
                "Build from reusable measures: Current, Prior, Change, Change %",
                "DIVIDE returns blank on divide by zero, not an error",
                "Format as percentage for clarity",
                "Works for any period: YoY, QoQ, MoM"
              ],
              insiderTips: [
                "Always use DIVIDE() for any division to avoid errors",
                "Create separate measures for Current, Prior, Change, and Change %",
                "Reusable measures make it easy to create many growth metrics",
                "Format growth metrics as percentage with appropriate decimals",
                "Handle negative numbers - DAX displays them correctly",
                "Use conditional formatting for visual growth indicators",
                "Combine with TOTALYTD for cumulative growth comparisons",
                "Consider currency changes when comparing across years",
                "Test edge cases: zero prior period, negative values, etc."
              ],
              labs: [
                "Create base measures:",
                "  Total Sales = SUM(Sales[Amount])",
                "  Sales PY = CALCULATE([Total Sales], SAMEPERIODLASTYEAR('Date'[Date]))",
                "Calculate YoY Growth:",
                "  Sales YoY Change = [Total Sales] - [Sales PY]",
                "  Sales YoY % = DIVIDE([Sales YoY Change], [Sales PY])",
                "Create QoQ Growth:",
                "  Sales PQ = CALCULATE([Total Sales], DATEADD('Date'[Date], -1, QUARTER))",
                "  Sales QoQ % = DIVIDE([Total Sales] - [Sales PQ], [Sales PQ])",
                "Format measures:",
                "  Apply percentage format to growth % measures",
                "  Set decimal places (e.g., 1 decimal)",
                "Test in visuals:",
                "  Create card showing Total Sales",
                "  Create card showing Sales YoY %",
                "  Observe growth trends",
                "Practice: Build KPI dashboard with growth metrics"
              ],
              tables: [
                {
                  title: "Growth Calculation Patterns",
                  headers: ["Growth Type", "Prior Period", "Formula", "Example"],
                  rows: [
                    ["Year-over-Year", "Sales PY", "DIVIDE((Current-PY), PY)", "20% growth"],
                    ["Quarter-over-Quarter", "Sales PQ", "DIVIDE((Current-PQ), PQ)", "-5% decline"],
                    ["Month-over-Month", "Sales PM", "DIVIDE((Current-PM), PM)", "15% increase"],
                    ["Week-over-Week", "Sales PW", "DIVIDE((Current-PW), PW)", "8% growth"]
                  ]
                }
              ]
            },
          },
          {
            id: "9-5",
            moduleNumber: 9,
            lessonNumber: 5,
            title: "Calculating Rolling Averages",
            description: "Smoothing volatile data by calculating rolling averages using DATESINPERIOD. Learn how to create moving averages for trend analysis.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Why Rolling Averages?', timestamp: 0 },
              { title: 'DATESINPERIOD Function', timestamp: 300 },
              { title: '3-Month Rolling Average', timestamp: 840 },
              { title: 'Custom Period Lengths', timestamp: 1260 },
              { title: 'Rolling vs Static Averages', timestamp: 1680 },
              { title: 'Lab: Create Rolling Average', timestamp: 1980 }
            ],
            difficulty: 'intermediate',
            tags: ["Time Intelligence", "DAX"],
            topic: 'DAX',
            content: {
              concept: "Smoothing volatile data by calculating rolling averages helps identify underlying trends by reducing noise from day-to-day fluctuations. A rolling average (also called moving average) calculates the average over a specific period (e.g., 3 months, 12 months) ending at each date. This technique is essential for trend analysis and forecasting. DATESINPERIOD is the key DAX function for creating rolling averages.",
              discussion: "DATESINPERIOD() returns a table of dates within a specified period relative to a given date. Syntax: DATESINPERIOD(date_column, start_date, number_of_intervals, interval_type). For a 3-month rolling average: Sales 3-Month Avg = CALCULATE(AVERAGE([Total Sales]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH)). This returns a table of dates from 3 months ago to today, then AVERAGE calculates the average sales over that period. The key is the start_date (MAX('Date'[Date])) which ensures the period ends at the current row's date. The interval_type can be YEAR, QUARTER, MONTH, WEEK, or DAY. For different averages: 12-month rolling average uses -12, MONTH; 4-quarter rolling average uses -4, QUARTER. The negative number goes backwards in time. DATESINPERIOD is similar to DATEADD but returns a table of dates instead of just shifting the date. This makes it perfect for calculating averages over time periods. Rolling averages help identify trends, reduce noise, and make data more readable, especially for volatile metrics like daily sales or stock prices. They're commonly used in finance, inventory management, and sales forecasting.",
              keyPoints: [
                "DATESINPERIOD returns table of dates within a specified period",
                "Rolling average smooths volatile data to show trends",
                "Syntax: DATESINPERIOD(date, start, number, interval)",
                "Use MAX('Date'[Date]) as start to end at current row",
                "Negative numbers go backwards in time",
                "Works with AVERAGE, SUM, or other aggregations"
              ],
              insiderTips: [
                "Use MAX('Date'[Date]) as start_date for rolling period",
                "Negative number goes backwards, positive goes forwards",
                "3-month and 12-month rolling averages are most common",
                "Use with AVERAGE for trend lines in visuals",
                "Helps identify seasonality and trends in noisy data",
                "Consider business cycles when choosing period length",
                "Can create faster- or slower-moving averages by adjusting period",
                "Test different periods to find best fit for your data",
                "Rolling average should complement, not replace, actual values"
              ],
              labs: [
                "Create 3-Month Rolling Average:",
                "  Sales 3M Avg = CALCULATE(AVERAGE([Total Sales]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -3, MONTH))",
                "  Add to line chart with daily sales - observe smoothing",
                "Create 12-Month Rolling Average:",
                "  Sales 12M Avg = CALCULATE(AVERAGE([Total Sales]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -12, MONTH))",
                "  Shows yearly trend, good for long-term analysis",
                "Create 4-Quarter Rolling:",
                "  Sales 4Q Avg = CALCULATE(AVERAGE([Total Sales]), DATESINPERIOD('Date'[Date], MAX('Date'[Date]), -4, QUARTER))",
                "  Annual smoothing on quarterly data",
                "Compare in visuals:",
                "  Create line chart with actual values and rolling averages",
                "  Observe how rolling averages smooth volatility",
                "  Identify trends and patterns",
                "Practice: Build trend analysis dashboard with rolling averages"
              ],
              tables: [
                {
                  title: "Common Rolling Average Periods",
                  headers: ["Period Length", "Use Case", "Interval", "Purpose"],
                  rows: [
                    ["3-Month", "Short-term trend", "Month", "Quarterly smoothing"],
                    ["6-Month", "Mid-term trend", "Month", "Half-year smoothing"],
                    ["12-Month", "Annual trend", "Month", "Year-over-year smoothing"],
                    ["4-Quarter", "Long-term", "Quarter", "Annual smoothing"],
                    ["7-Day", "Weekly trend", "Day", "Weekly smoothing"],
                    ["30-Day", "Monthly trend", "Day", "Monthly smoothing"]
                  ]
                }
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
              concept: "A report can be analytically correct but visually useless. Good design (UI/UX) is not decoration; it is about guiding the user's eye, reducing cognitive load, and communicating insights with clarity. Effective design decisions determine whether executives understand a story in seconds or abandon the report entirely.",
              discussion: "Great Power BI design is equal parts psychology and layout discipline. Start with chart selection—pick visuals that match the analytical question (bars for categorical comparison, lines for trends, scatter for correlation, maps for geography, tables for detail). Establish visual hierarchy by arranging the canvas in the natural Z-pattern of reading: KPIs and primary conclusions in the upper-left, supporting visuals along the diagonal, and detailed tables last. Use white space deliberately; space between visuals is not wasted real estate but a breathing room that improves comprehension. Apply color with intent: brand palette for consistency, neutral tones for base visuals, and accent colors to highlight outliers or alerts (e.g., corporate red for negative variance). Maintain typographic consistency (two font families max, defined heading/body sizes) and align visuals using the grid and snap-to-grid features. Build separate layouts for desktop and the mobile view to ensure usability across devices. Leverage modern slicers released in Oct 2025 (Button slicers, segmented controls, field parameters) to create app-like experiences that keep interaction obvious. Above all, test reports with real users—observe where they pause, what they misunderstand, and iterate until the design supports the narrative without explanation.",
              keyPoints: [
                "Match each analytical question to an appropriate chart type before placing visuals",
                "Arrange the canvas following a visual hierarchy (KPIs first, detail last) to guide attention",
                "Whitespace, alignment, and consistent typography are fundamental—treat them as data-ink ratios for BI",
                "Color is a storytelling device: one accent color per message beats rainbow palettes every time",
                "Design separately for desktop and mobile—Power BI mobile layout requires intentional reflow",
                "Interactive controls (slicers, buttons, navigation) must look touchable and be easy to reset"
              ],
              insiderTips: [
                "Create a design system: define H1/H2/body text sizes, color palette, and spacing tokens early",
                "Use the Format painter and Apply to visuals to keep styling consistent without rework",
                "Lock background elements and grids so only interactive visuals remain selectable",
                "Add subtle drop shadows or borders only when they reinforce grouping; avoid decorative gradients",
                "Provide an at-a-glance legend or data glossary on the first page to reduce repeated questions",
                "Test accessibility with contrast checkers; aim for WCAG AA for text on backgrounds",
                "Mark critical visuals as spotlight during presentations using the Focus mode",
                "Bundle default slicers into a slicer panel controlled by a bookmark/button to save canvas space"
              ],
              labs: [
                "Audit an existing report and identify at least three UX issues (poor hierarchy, color misuse, clutter)",
                "Redesign the layout using the Z-pattern: place three KPI cards top-left, core visuals center, detail bottom",
                "Create a style guide page in Power BI containing fonts, color swatches, spacing guidelines, and sample visuals",
                "Swap all categorical legends from rainbow palettes to brand colors + neutral greys; document the rationale",
                "Build a slicer panel using a button, bookmark, and selection pane to toggle filters on/off",
                "Duplicate the desktop report page into mobile layout view and optimize placement for phones",
                "Conduct a five-minute user test: ask a colleague to find three insights; note pain points and iterate"
              ],
              tables: [
                {
                  title: "Chart Selection Cheat Sheet",
                  headers: ["Business Question", "Recommended Visual", "Avoid", "Why"],
                  rows: [
                    ["Compare categories", "Clustered bar/column", "Pie chart with many slices", "Bars support precise comparison"],
                    ["Show trends over time", "Line or area chart", "Column chart for dense dates", "Lines emphasize trajectory"],
                    ["Highlight composition", "Stacked bar or waterfall", "3D charts", "Flat visuals preserve accuracy"],
                    ["Spot outliers", "Scatter or dot plot", "Tables alone", "Scatter adds context and magnitude"],
                    ["Display detail", "Matrix/Table", "Overloaded tooltips", "Tables allow sorting, conditional format"]
                  ]
                },
                {
                  title: "Design System Starter Kit",
                  headers: ["Element", "Recommendation", "Power BI Feature", "Notes"],
                  rows: [
                    ["Typography", "Poppins (headings) + Segoe UI (body)", "Format > General > Text", "Limit to two font families"],
                    ["Spacing", "16px base grid", "View > Snap to grid", "Keeps alignment consistent"],
                    ["Color", "Primary brand + neutral grey + alert color", "View > Themes", "Import JSON theme for reuse"],
                    ["Slicers", "Button slicer (Oct 2025 GA)", "Visualizations pane", "Supports modern, tappable UI"],
                    ["Navigation", "Bookmark navigator + icon buttons", "Insert > Buttons", "Mimics app-like experience"]
                  ]
                }
              ]
            },
          },
          {
            id: "10-2",
            moduleNumber: 10,
            lessonNumber: 2,
            title: "Advanced Interactivity: Drill-through Pages",
            description: "Drill-through allows users to right-click a data point and navigate to a detailed page automatically filtered by that selection. Learn how to create drill-through destinations and trigger drill-through from visuals and buttons.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding Drill-through', timestamp: 0 },
              { title: 'Creating Drill-through Destinations', timestamp: 360 },
              { title: 'Configuring Drill-through Wells', timestamp: 960 },
              { title: 'Drill-through with Buttons', timestamp: 1500 },
              { title: 'Best Practices', timestamp: 2100 },
              { title: 'Lab: Complete Drill-through Setup', timestamp: 2460 }
            ],
            difficulty: 'intermediate',
            tags: ["Visualizations", "Interactivity"],
            topic: 'Visualizations',
            content: {
              concept: "Drill-through allows a user to right-click a data point on a summary visual (e.g., \"East\" region) and navigate to a separate, detailed report page that is automatically filtered for the \"East\" region. This navigation pattern enables users to move from high-level summaries to detailed analysis with a single click, maintaining the context of their selection throughout the navigation.",
              discussion: "Drill-through is a navigation technique that creates a contextual link between summary and detail pages. When users right-click a data point on a source visual (like a region on a map or a category in a bar chart), they can select 'Drill through' and choose a destination page. The destination page automatically receives a filter based on the selected value, showing only relevant details. Setting up drill-through requires two pages: a source page (where users start) and a destination page (where users land with filtered data). The destination page must have 'Drill through' wells configured in the visual field wells. Fields dragged into these wells become the filters that carry over from the source to the destination. For example, dragging 'Region' into the drill-through well on a destination page means that when users drill through from a region selection, the destination page filters to that specific region. Drill-through can also be triggered from buttons, providing an alternative to right-click navigation. This is useful for creating more guided experiences where you want users to follow specific paths. The button's action is set to 'Page navigation', and the target page is configured to accept drill-through filters. Best practices for drill-through: Use descriptive page names that indicate they're detail pages (e.g., \"Region Details\", \"Product Analysis\"), Add visual cues like back buttons to help users navigate back, Ensure destination pages load quickly (avoid heavy visuals), Use drill-through sparingly—too many paths can confuse users, Add a breadcrumb or visual title showing the applied filter, Test drill-through from all relevant visuals on the source page. Drill-through is essential for self-service BI, allowing users to explore data independently while maintaining context.",
              keyPoints: [
                "Drill-through creates contextual navigation from summary to detail",
                "Destination pages must have drill-through wells configured",
                "Filters automatically pass from source visual to destination page",
                "Can be triggered by right-click or button click",
                "Essential for self-service BI exploration",
                "Maintains user context throughout navigation"
              ],
              insiderTips: [
                "Name destination pages descriptively (e.g., \"Region Details\", \"Product Drill-down\")",
                "Add back buttons on detail pages for easy navigation",
                "Use multiple drill-through fields for multi-level filtering",
                "Test drill-through on mobile devices—ensure it works well",
                "Consider adding a filter indicator showing what's drilled through",
                "Use drill-through with bookmarks for even more control",
                "Keep destination pages focused—avoid cluttering with too many visuals",
                "Document drill-through paths for users who might not discover them"
              ],
              labs: [
                "Create drill-through destination page:",
                "  Add new page called 'Region Details'",
                "  Add visual (table or chart) to the page",
                "  In Visualizations pane, locate 'Drill through' wells",
                "  Drag 'Region' field into 'Add drill-through fields here'",
                "Create source summary page:",
                "  Add visual showing regions (bar chart, map, etc.)",
                "  Right-click on data point, select 'Drill through'",
                "  Choose 'Region Details' page",
                "  Destination page opens filtered to that region",
                "Test drill-through with button:",
                "  Add button to summary page",
                "  Set button action to 'Page navigation'",
                "  Configure to navigate to 'Region Details'",
                "  Add drill-through functionality to button",
                "Enhance destination page:",
                "  Add back button linking to summary page",
                "  Add filter visualization showing current region",
                "  Optimize visuals for quick loading",
                "Practice: Create multi-level drill-through across multiple dimensions"
              ],
              tables: [
                {
                  title: "Drill-through Configuration",
                  headers: ["Element", "Configuration", "Purpose"],
                  rows: [
                    ["Drill-through Wells", "Add fields to 'Drill through' wells on destination", "Defines filter fields passed from source"],
                    ["Source Visual", "Right-click menu > Drill through", "Initiates navigation with context"],
                    ["Button Action", "Set to 'Page navigation' + drill-through", "Alternative trigger method"],
                    ["Destination Page", "Receives filters from wells", "Displays filtered details"],
                    ["Back Button", "Optional navigation aid", "Returns to summary page"]
                  ]
                }
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
              concept: "Bookmarks capture and save the exact state of a report page—filters, slicers, spotlighted visuals, drill mode, and what is visible or hidden. Paired with the Selection pane, bookmarks let you orchestrate guided experiences, pop-out panels, and narrative storytelling without writing code.",
              discussion: "Think of bookmarks as snapshots and the Selection pane as the layer manager. Use Selection to name every visual layer (e.g., SlicerPanel, KPI_Header, TooltipCard) and control visibility toggles. After arranging the exact layout and filter context you want, open View > Bookmarks and create a bookmark. Options let you choose what the bookmark captures: data (filters, slicers), display (visibility/spotlight), current page, and personal bookmark vs report bookmark. Enabling 'Selected visuals' allows partial updates for advanced scenarios like showing/hiding a slicer panel without resetting filters. Combine bookmarks with buttons or images whose Action property is set to Bookmark navigation; now clicking a button morphs the report from overview to drill-down, or reveals a guided explanation. Use bookmark groups to animate step-by-step stories (Play button with navigator) or to cycle through pre-defined insights. Advanced techniques include button toggles (two overlapping buttons swapping visibility), hero cards that change content via Selection pane, or driving multilingual reports by showing localized text boxes per bookmark. Always keep the Bookmarks and Selection panes open while designing—rename everything for maintainability.",
              keyPoints: [
                "Bookmarks store page state: filters, visibility, spotlight, drill mode, sync slicers",
                "Selection pane controls which visuals are visible for each bookmark snapshot",
                "Buttons/images trigger bookmarks via Action > Bookmark for app-like navigation",
                "Bookmark groups create stories, tours, and animated insights",
                "Use data vs display options strategically—sometimes you only want to change layout",
                "Rename bookmarks and visuals; undocumented layers quickly become unmanageable"
              ],
              insiderTips: [
                "Prefix visuals in Selection pane (e.g., [Slicer] Region, [Card] Revenue) to stay organized",
                "Disable 'Data' in bookmark options when you only want to toggle visibility, not reset filters",
                "Create a 'Reset Filters' bookmark that clears slicers and re-applies default view",
                "Use button states (default/hover/pressed) with bookmarks for professional UI feedback",
                "Combine bookmark navigator visual (Oct 2023 update) for automatic navigation menus",
                "Bookmarks can trigger drill-down modes—set the hierarchy level, capture bookmark, attach to button",
                "For storytelling, create one bookmark per narrative step and use bookmark navigator to step through",
                "Document bookmark purpose in a hidden page or Power BI field descriptions for future maintainers"
              ],
              labs: [
                "Open View > Selection and Bookmarks panes; rename every visual on the page for clarity",
                "Create a slicer panel: group slicers in Selection, set them hidden, create Bookmark 'Slicer Closed' (display only)",
                "Show slicer panel, reposition visuals, create 'Slicer Open' bookmark; assign toggling bookmarks to a button pair",
                "Build a three-step narrative: duplicate the page, adjust visuals, create bookmarks (Step 1, Step 2, Step 3), then delete duplicates and keep bookmarks",
                "Insert a Bookmark navigator visual, connect it to the narrative bookmark group, customize button text/icons",
                "Create a 'Reset View' button that clears filters using a bookmark capturing default data state",
                "Optional: Add a tooltip explaining controls—use Selection to show tooltip only in help bookmark"
              ],
              tables: [
                {
                  title: "Bookmark Types and Use Cases",
                  headers: ["Bookmark Option", "What It Captures", "Use Case", "Notes"],
                  rows: [
                    ["Data + Display", "Filters, slicers, visibility", "Default overview, reset state", "Most common snapshot"],
                    ["Display only", "Visibility/spotlight", "Toggle slicer panels, tooltips", "Avoids resetting filters"],
                    ["Selected visuals", "Only chosen visuals", "Swap content in a single placeholder", "Requires careful selection"],
                    ["Bookmark group", "Ordered list of bookmarks", "Storytelling, step-through tutorials", "Use navigator for UI"],
                    ["Personal bookmark", "User-specific state", "End-user saved views", "Managed by consumers"]
                  ]
                },
                {
                  title: "Selection Pane Workflow",
                  headers: ["Step", "Action", "Purpose", "Tip"],
                  rows: [
                    ["1", "Rename visuals logically", "Avoid 'Text box 29' chaos", "Include purpose in name"],
                    ["2", "Group related visuals", "Toggle multiple items at once", "Use Ctrl+G to group"],
                    ["3", "Toggle eye icons", "Manage visibility per bookmark", "Hidden eyes not exported"],
                    ["4", "Lock static elements", "Prevent accidental moves", "Use lock icon after placement"],
                    ["5", "Capture bookmark", "Save current state", "Verify options before saving"]
                  ]
                }
              ]
            },
          },
          {
            id: "10-4",
            moduleNumber: 10,
            lessonNumber: 4,
            title: "Enhancing Visuals: Custom Report Tooltips",
            description: "Create rich, custom tooltips by building small report pages. Custom tooltips transform basic hover-over data into engaging, contextual insights with visuals and formatting.",
            duration: 25,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Default vs Custom Tooltips', timestamp: 0 },
              { title: 'Creating Tooltip Pages', timestamp: 300 },
              { title: 'Designing Tooltip Layouts', timestamp: 720 },
              { title: 'Configuring Visual Tooltips', timestamp: 1200 },
              { title: 'Advanced Tooltip Techniques', timestamp: 1620 },
              { title: 'Lab: Build Custom Tooltips', timestamp: 2040 }
            ],
            difficulty: 'intermediate',
            tags: ["Visualizations", "Report Design"],
            topic: 'Visualizations',
            content: {
              concept: "The default hover-over tooltip is basic, showing only the raw data points. Power BI allows developers to create an entirely new, small report page and use it as a custom tooltip. This transforms simple tooltips into rich, contextual mini-reports that provide additional insights without cluttering the main visual.",
              discussion: "Custom tooltips are small report pages (typically 300x300 to 600x600 pixels) that appear when users hover over data points in visuals. Unlike default tooltips that show basic information, custom tooltips can include multiple visuals, formatted text, images, and interactive elements. To create a custom tooltip: Create a new page in your report, Set the page size to 'Tooltip' (found in Page Setup), Design the tooltip with relevant visuals and information, Configure the tooltip to accept context from the source visual. Tooltip pages have fixed dimensions optimized for hover interactions. The recommended size is 320x320 pixels, but you can choose larger sizes (up to 1200x800) for more complex tooltips. The page size is set in the Visualizations pane under 'Tooltip' section. Design considerations: Keep tooltips focused—show only relevant context, Use small visuals that load quickly, Include key metrics and supporting visuals, Maintain consistent styling with your main report, Test on different screen sizes and devices. When configuring a visual to use a custom tooltip, navigate to Format > Tooltip. Set 'Tooltip type' to 'Report page' and select your tooltip page. You can also use 'Default' for the standard tooltip or 'On object' for minimal information. Custom tooltips automatically receive context from the hovered data point. Use this context to show related information. For example, hovering over a sales rep in a bar chart can show their detailed performance metrics, recent trends, or achievements in the tooltip. Advanced techniques: Use measures in tooltips that calculate additional metrics, Add images or logos for branded tooltips, Create multiple tooltips for different scenarios, Use conditional formatting in tooltip visuals, Add drill-through capabilities to tooltips (linking to detailed pages). Best practices: Design tooltip layouts that read quickly (users don't want to read novels), Use contrasting colors to ensure readability, Test tooltip performance—slow tooltips create poor user experience, Keep tooltips consistent across similar visuals, Document tooltip purposes for user training. Custom tooltips significantly enhance the user experience by providing context without navigation, reducing the need for drill-through or additional pages.",
              keyPoints: [
                "Custom tooltips are small report pages used as hover-over displays",
                "Tooltip pages use fixed dimensions optimized for quick viewing",
                "Can include multiple visuals, formatted text, and images",
                "Automatically receive context from hovered data points",
                "Transform basic tooltips into rich, contextual insights",
                "Enhance UX without cluttering main visuals"
              ],
              insiderTips: [
                "Recommended tooltip size is 320x320 pixels for quick viewing",
                "Keep tooltip content focused—users don't want to read too much",
                "Use small, fast-loading visuals in tooltips",
                "Test tooltip performance with realistic data volumes",
                "Maintain consistent styling across all tooltips",
                "Use branded colors and images for professional appearance",
                "Add tooltip hints in report documentation for users",
                "Consider mobile users—tooltips work great on touch devices",
                "Tooltip performance matters—optimize measures and visuals"
              ],
              labs: [
                "Create custom tooltip page:",
                "  Add new page to report",
                "  In Page Setup, set type to 'Tooltip'",
                "  Set size to 320x320 (recommended) or custom size",
                "Design tooltip content:",
                "  Add small card visual showing key metric",
                "  Add small line chart showing trend",
                "  Format with colors and text",
                "Configure visual to use custom tooltip:",
                "  Select visual on main page",
                "  Go to Format > Tooltip",
                "  Set 'Tooltip type' to 'Report page'",
                "  Select your tooltip page",
                "Test custom tooltip:",
                "  Hover over data points in the visual",
                "  Verify tooltip displays correctly",
                "  Check that context passes through",
                "Create advanced tooltip:",
                "  Add conditional formatting based on values",
                "  Include images or icons",
                "  Add measure-based calculations",
                "Practice: Create multiple tooltips for different data types"
              ],
              tables: [
                {
                  title: "Tooltip Type Comparison",
                  headers: ["Type", "Size", "Use Case", "Best For"],
                  rows: [
                    ["Default", "Auto", "Basic data display", "Simple reporting"],
                    ["Custom (320x320)", "320x320 px", "Standard tooltips", "Most scenarios"],
                    ["Custom (Large)", "600x600+ px", "Complex tooltips", "Rich context needed"],
                    ["On Object", "Minimal", "Minimal info", "Clean visuals"]
                  ]
                }
              ]
            },
          },
          {
            id: "10-5",
            moduleNumber: 10,
            lessonNumber: 5,
            title: "Enhancing Visuals: Conditional Formatting",
            description: "Dynamically change a visual's appearance based on data values using conditional formatting. Transform visuals from static displays to intelligent, color-coded insights.",
            duration: 30,
            videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            videoChapters: [
              { title: 'Understanding Conditional Formatting', timestamp: 0 },
              { title: 'Background and Font Colors', timestamp: 360 },
              { title: 'Data Bars and Icons', timestamp: 840 },
              { title: 'Color Scales', timestamp: 1380 },
              { title: 'DAX-Based Formatting', timestamp: 1920 },
              { title: 'Lab: Apply Conditional Formatting', timestamp: 2340 }
            ],
            difficulty: 'intermediate',
            tags: ["Visualizations", "DAX"],
            topic: 'Visualizations',
            content: {
              concept: "Conditional formatting dynamically changes a visual's appearance (colors, fonts, icons, data bars) based on its data values. This transforms static visuals into intelligent displays that automatically highlight important information, trends, and exceptions without requiring users to analyze every number.",
              discussion: "Conditional formatting makes data more readable and actionable by applying visual cues automatically. There are several types: Background color changes cell backgrounds based on values, Font color changes text color (commonly green for positive, red for negative), Data bars show proportional bars within cells, similar to sparklines, Icons use symbols (checkmarks, flags, traffic lights) to indicate status, Color scales apply color gradients across value ranges (heat maps). Setting up conditional formatting varies by visual type. For tables and matrices: Select the visual, Open Format pane, Expand the data field you want to format, Click 'Conditional formatting', Choose the formatting type (background color, font color, icons, data bars), Configure rules or measures. Power BI offers three methods for conditional formatting: Rules-based (define thresholds manually with values), Percentile-based (format based on position within distribution), Measure-based (use DAX measures for complex logic). Rules-based formatting is simplest: Set conditions like 'If value > 100, color green' or 'If value < 0, color red'. Percentile-based formatting is powerful for relative comparisons: Format top 10% green, bottom 10% red, middle percentages with gradients. Measure-based formatting provides maximum flexibility: Create a DAX measure that returns a color code, Use in conditional formatting settings, Enable complex business logic in formatting. Common measure-based formatting: Return color hex codes from measures, Use IF statements to determine colors, Reference other tables or measures, Create dynamic thresholds based on data. Best practices: Use consistent color schemes across visuals (red = bad, green = good), Don't over-format—too many colors create clutter, Test formatting with realistic data values, Consider colorblind users—use patterns or icons too, Document formatting rules for user training, Use icon sets for status indicators (on track, at risk, etc.). Conditional formatting is particularly useful for: KPI cards showing red/green based on targets, Tables highlighting outliers and exceptions, Matrices showing performance across dimensions, Gauge charts indicating status ranges, Visuals that need to stand out to executives. Advanced techniques: Combine multiple formatting types on same visual, Use DAX measures for dynamic thresholds, Create formatting based on comparisons (actual vs target), Apply formatting that responds to slicer selections, Use gradient scales for trend visualization.",
              keyPoints: [
                "Conditional formatting applies visual cues based on data values automatically",
                "Types: Background color, font color, icons, data bars, color scales",
                "Methods: Rules-based, percentile-based, measure-based (DAX)",
                "Measure-based formatting enables complex business logic",
                "Consistent color schemes improve readability",
                "Transforms static visuals into intelligent displays"
              ],
              insiderTips: [
                "Use green for positive/good, red for negative/bad consistently",
                "Test formatting with realistic data—edge cases matter",
                "Measure-based formatting is most flexible for complex logic",
                "Don't over-format—too many colors create visual noise",
                "Consider colorblind users—use patterns, icons, or text labels too",
                "Icon sets work great for status indicators (traffic lights, flags)",
                "Data bars make tables and matrices more readable",
                "Use color scales for heat maps showing relative performance",
                "Document formatting rules so users understand the logic"
              ],
              labs: [
                "Apply background color formatting:",
                "  Select table visual",
                "  Format > Conditional formatting > Background color",
                "  Set rules: If value > 1000, green; else red",
                "  Observe automatic coloring",
                "Apply data bars:",
                "  Select matrix visual",
                "  Format > Conditional formatting > Data bars",
                "  Configure bar color and direction",
                "  View proportional bars in cells",
                "Create icon sets:",
                "  Format > Conditional formatting > Icons",
                "  Choose icon set (traffic lights, flags, etc.)",
                "  Set thresholds for each icon",
                "  Icons display based on values",
                "Create measure-based formatting:",
                "  Create measure: FormatColor = IF([Sales] > [Target], \"#00FF00\", \"#FF0000\")",
                "  Apply as conditional formatting",
                "  Use measure output for dynamic colors",
                "Practice: Build formatted dashboard with multiple formatting types"
              ],
              tables: [
                {
                  title: "Conditional Formatting Methods",
                  headers: ["Method", "Configuration", "Best For", "Complexity"],
                  rows: [
                    ["Rules-based", "Define thresholds manually", "Simple rules", "Easy"],
                    ["Percentile-based", "Format by position", "Relative comparisons", "Medium"],
                    ["Measure-based (DAX)", "Use measures for logic", "Complex business rules", "Advanced"]
                  ]
                },
                {
                  title: "Formatting Types by Visual",
                  headers: ["Visual Type", "Available Formats", "Best Use"],
                  rows: [
                    ["Tables/Matrices", "All types", "Data exploration"],
                    ["KPI Cards", "Background/Font/Icons", "Status indicators"],
                    ["Gauge Charts", "Color ranges", "Performance ranges"],
                    ["Tables", "Data bars, Icons", "Quick scanning"]
                  ]
                }
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
              concept: "A report should be more than a collection of charts; it must be a narrative that leads to a specific decision or action. Data storytelling combines analytical accuracy with communication techniques so stakeholders remember, trust, and act on the insights you surface.",
              discussion: "Every effective story—whether in journalism or analytics—follows a structure: setup, conflict, resolution. In BI terms this is Context (baseline, targets, expectation), Insight (what is changing, surprising, or broken), Diagnostic (why it is happening), and Recommendation (what to do next). Power BI provides narrative building blocks: dynamically generated text using DAX measures (`FORMAT`, `SELECTEDVALUE`, `CONCATENATEX`), annotations, shapes, icons, smart narratives (Oct 2024 AI update), and bookmarks to sequence views. Start each page with a headline that states the main takeaway in plain language, e.g., \"Q4 revenue missed target by 8%, driven by supply delays in the East\". Support that headline with one hero visual (e.g., variance waterfall) and one diagnostic visual (e.g., decomposition tree). Use callout boxes or smart narrative bullet points to summarize key drivers in natural language. Annotate directly on visuals—arrows, shaded regions, text labels—to draw attention. Sequence complex stories using bookmark navigator or buttons labelled Step 1/2/3. Keep cognitive load low by only presenting visuals that advance the narrative; move background supporting data to drill-through pages or tooltips. Close each story with a recommended action and owner to convert insight into accountability. For executives, prepare an appendix tab with methodology, definitions, and data refresh cadence to anticipate credibility questions.",
              keyPoints: [
                "Structure pages as Context → Insight → Why → Action; avoid dumping raw charts without guidance",
                "Lead with a narrative headline written like a news title, not a chart label",
                "Use dynamic text measures (Smart Narrative, cards, DAX-powered text boxes) to keep narrative in sync with filters",
                "Annotate directly on visuals to highlight inflection points, outliers, or business events",
                "Sequence walkthroughs with bookmarks or buttons for board meetings or recorded demos",
                "End with explicit action, owner, and timeline to convert analysis into execution"
              ],
              insiderTips: [
                "Write the story before opening Power BI—define audience, decision, and questions; design visuals to answer them",
                "Create a glossary page with business definitions and measure formulas to build trust",
                "Use Smart Narrative visual to auto-generate summary text, then edit for tone/clarity",
                "Pair KPIs with contextual indicators (trend sparkline, variance vs target) to prevent misinterpretation",
                "Leverage `VAR` + `RETURN` in DAX to craft reusable narrative snippets (e.g., dynamic YoY sentences)",
                "Log significant business events in a lookup table and join to add contextual annotations (product launch, weather event)",
                "Rehearse the narrative with stakeholders; note where they pause or question and refine the flow accordingly",
                "Keep visuals scoped: each should answer one question; if it answers two, split it"
              ],
              labs: [
                "Define a narrative brief: audience, core question, desired action; document it in the report notes",
                "Create a headline measure using DAX (`Headline = \"Q\" & SELECTEDVALUE(Date[Quarter]) & \" revenue is \" & FORMAT([Revenue Variance],\"0.0%\") & \" vs plan\"`)",
                "Add a Smart Narrative visual and customize the generated summary to align with executive tone",
                "Annotate a line chart with callout shapes for key inflection points (peak, trough, event)",
                "Build a bookmark-driven walkthrough: Step 1 (Overview), Step 2 (Driver Analysis), Step 3 (Action Items)",
                "Add a conclusions card with action + owner using concatenated DAX (e.g., `\"Action: \" & [Recommended Action] & \" – Owner: \" & [Action Owner]`)",
                "Host a five-minute dry run with a colleague; capture feedback and iterate on the storytelling flow"
              ],
              tables: [
                {
                  title: "Storytelling Framework",
                  headers: ["Stage", "Purpose", "Questions to Answer", "Typical Visuals"],
                  rows: [
                    ["Context", "Establish baseline and goal", "Where are we vs plan? What matters?", "KPI cards, variance charts, narrative headline"],
                    ["Insight", "Reveal what changed", "What is different, surprising, urgent?", "Waterfall, variance bar, anomaly detection"],
                    ["Diagnosis", "Explain why it changed", "Which segments or drivers are responsible?", "Decomposition tree, drill-down bar, scatter"],
                    ["Action", "Drive decision", "What should we do, by when, and who owns it?", "Text card, action checklist, bookmark link to plan"]
                  ]
                },
                {
                  title: "Narrative Building Blocks in Power BI",
                  headers: ["Feature", "Use Case", "How to Configure", "Tips"],
                  rows: [
                    ["Smart Narrative", "Auto-summarize visuals", "Insert visual → Edit text", "Edit for tone; pin key metrics as smart fields"],
                    ["Dynamic Text (DAX)", "Custom sentences", "Text box → Insert field value", "Use `FORMAT` for numbers, `COALESCE` for blanks"],
                    ["Annotations & Shapes", "Callouts, highlights", "Insert → Shapes/Callouts", "Use consistent color scheme; lock after placing"],
                    ["Bookmark Navigator", "Step-by-step story", "Insert → Navigator → Bookmark", "Rename bookmarks to chapter titles"],
                    ["Tooltips/Drill-through", "Provide context without clutter", "Configure tooltip page", "Add back button, highlight context filters"]
                  ]
                }
              ]
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
              concept: "Expanding Power BI's capabilities by importing new visuals from Microsoft AppSource or certified partner galleries unlocks chart types and UI components that go beyond the built-in set. Custom visuals fill gaps for advanced storytelling (Sankey, Gantt, Bullet charts), governance (InfoRiver, Zebra BI), or specialized industries.",
              discussion: "AppSource hosts hundreds of custom visuals created by Microsoft, partners, and the community. Before importing, evaluate visuals on four dimensions: certification (Microsoft-certified visuals follow security and quality checks), licensing (free, freemium, or paid enterprise), capability fit, and performance. To add a visual: open the Visualizations pane, click the ellipsis (…) → 'Get more visuals', search (e.g., 'Sankey'), review description/screenshots, check certification badge, click 'Add'. The visual now appears in the pane for all report pages. Some visuals (especially enterprise ones) may require sign-in or license keys via the Format pane. Manage custom visuals across a tenant using the Power BI Admin Portal (Tenant settings → Custom visuals) to allow, block, or deploy approved visuals. Best practice is to curate an organizational visual library: download `.pbiviz` files, host them in SharePoint or Teams, and distribute via 'Import a visual from a file' so all creators use vetted versions. From a design perspective, always ensure custom visuals support core needs: tooltips, cross-highlighting, bookmarks, accessibility, export to PDF. Test them on desktop and mobile for responsiveness. Some enterprise visuals (Zebra BI, xViz, Inforiver) offer built-in variance analysis, finance statements, editable tables, or writeback capabilities—great for FP&A teams. Remember that un-certified visuals cannot be exported to PowerPoint/PDF when used in service, and they may be disabled in strict tenant policies.",
              keyPoints: [
                "Custom visuals extend Power BI beyond built-in charts for storytelling, finance, and operational scenarios",
                "Use Microsoft-certified visuals when possible for security, export, and enterprise feature support",
                "Curate an organizational visual library to ensure consistency and compliance",
                "Evaluate visuals for performance, accessibility, mobile support, and interactivity (drill, bookmarks, tooltips)",
                "Tenant admins can allow or block visuals via Admin Portal—coordinate with governance teams",
                "Document which custom visuals are used in each report for maintenance and licensing audits"
              ],
              insiderTips: [
                "Add visuals to Favorites in AppSource to build a vetted list for your team",
                "Use `.pbiviz` files stored in SharePoint and import them—ensures everyone uses same version",
                "Review update history and support responsiveness before relying on third-party visuals in production",
                "Test custom visuals in the Power BI Service; some behave differently than in Desktop",
                "Check if visual supports themes and accessibility (keyboard navigation, screen readers)",
                "For financial statements, compare Zebra BI vs Inforiver vs Power ON; each has different licensing",
                "Monitor performance—complex visuals on large datasets can slow render time; consider aggregations",
                "Keep contingency plan—if a vendor discontinues a visual, have an alternative built-in chart ready"
              ],
              labs: [
                "Open AppSource from the Visualizations pane and search for 'Sankey'—add the Microsoft-certified Sankey chart",
                "Import the visual into a sample report and map Source, Destination, and Weight fields; verify cross-filtering works",
                "Download a `.pbiviz` file (e.g., Zebra BI Demo) and import from file; configure advanced variance layout",
                "Create a comparison table with both native and custom visuals showing the same data; assess readability and performance",
                "Review tenant settings (if you have admin access) to understand how custom visuals are governed in your organization",
                "Document custom visuals used in the report, including version number and licensing status, in a metadata table"
              ],
              tables: [
                {
                  title: "Custom Visual Evaluation Checklist",
                  headers: ["Criteria", "Questions to Ask", "Why It Matters"],
                  rows: [
                    ["Certification", "Is there a blue check badge?", "Certified visuals comply with Microsoft security standards"],
                    ["Licensing", "Is it free, trial, or paid?", "Avoid surprises during deployment; budget accordingly"],
                    ["Feature Fit", "Does it support tooltips, drill, formatting, export?", "Ensures it meets user expectations"],
                    ["Performance", "How does it render on large datasets?", "Maintains report responsiveness"],
                    ["Support", "Does vendor have documentation and updates?", "Reduces risk if issues arise"]
                  ]
                },
                {
                  title: "Popular Custom Visual Categories",
                  headers: ["Category", "Example Visuals", "Use Case"],
                  rows: [
                    ["Flow & Network", "Sankey Chart, Chord diagram", "Customer journey, logistics flow"],
                    ["Financial", "Zebra BI, Inforiver, Acterys Matrix", "P&L statements, variance, budgeting"],
                    ["Project & Planning", "Gantt Chart, Timeline storyteller", "Project tracking, roadmaps"],
                    ["Advanced Tables", "HTML Viewer, PowerApps Visual", "Rich formatting, writeback workflows"],
                    ["Infographics/UI", "Card with States, Chiclet Slicer", "Branded navigation, KPI storytelling"]
                  ]
                }
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
              concept: "The Key Influencers visual is an AI-powered explanation tool that ranks the strongest drivers behind a chosen outcome (categorical or numeric). It democratizes root-cause analysis: instead of manually creating dozens of slices, the visual evaluates combinations of fields, surfaces statistically significant influencers, and quantifies their impact with intuitive statements such as \"Customers on Premium plan are 3.2x more likely to renew.\"",
              discussion: "Behind the scenes, the visual runs logistic regression (for categorical targets) or linear models (for numeric targets) over the columns you place in the Explain-by bucket. It automatically handles binning of continuous variables (age, revenue) and cross-features (region × product). Results appear in two tabs: *Top segments* shows meaningful cohorts with increased probability of the desired outcome, while *Key influencers* ranks individual factors. Each card displays impact (increase factor or average difference), a visual distribution, and a quality band (high/medium/low). To get trustworthy results you must prepare clean, flattened data (no DirectQuery to unsupported sources, no unsupported data types), remove high-cardinality text columns, and be mindful of filters (the analysis is performed after report filters). The visual also supports \"What happens if\" simulations, letting users adjust numeric sliders to see effect on probability. Because it is exploratory, analysts should corroborate findings with business context before acting.",
              keyPoints: [
                "Target must be a measure or column placed in Analyze; categorical (binary/multi-class) and numeric targets are both supported",
                "Explain-by accepts columns and measures; best practice is 3–7 well-modeled features to avoid noise",
                "Results show strength (impact), statistical significance, and distribution so analysts can validate reliability",
                "Filters/slicers applied to the page change the training data on the fly—use bookmarks to lock contexts",
                "Key Influencers is not causal inference; treat insights as hypotheses to validate",
                "The visual requires imported (or Premium DirectQuery with AI workloads enabled) data; Live Connect to SSAS not supported"
              ],
              insiderTips: [
                "Create calculated columns to bin continuous metrics (e.g., Age Group) for clearer influencer statements",
                "Remove ID-like columns (OrderID, CustomerID) from Explain-by—they create thousands of categories and slow processing",
                "Use the \"Top segments\" tab to uncover combinations of factors; export segments to CSV for follow-up campaigns",
                "Enable \"Only show influencers with high quality\" when presenting to executives to avoid lower-confidence cards",
                "Combine with Decomposition Tree: take a top segment, then explore it deeper in the tree visual",
                "Document any filters applied when sharing screenshots—different filters produce different influencers",
                "Refresh the data model before analysis; stale caches may misrepresent recent behavior",
                "Train stakeholders to read the impact metric correctly (e.g., 2.5x = 150% increase in likelihood)"
              ],
              labs: [
                "Prepare data: create Age Group and Tenure Band columns, remove high-cardinality IDs from the model",
                "Insert Key Influencers visual; place `Is Churned` in Analyze and relevant features (Plan Type, Tenure Band, Support Tickets, Region) in Explain-by",
                "Interpret top influencer cards—note impact, quality, and distribution; capture findings in report notes",
                "Switch to Top Segments tab; export a high-risk segment to Excel and discuss targeted retention actions",
                "Use 'What happens if' slider on numeric feature (Support Tickets) to simulate reducing tickets by 20%",
                "Add a bookmark capturing the filtered state (e.g., North America) to compare influencers by geography",
                "Create a matrix visual alongside showing actual churn rate by segment to validate the AI output",
                "Document three recommended business actions based on the influencers discovered"
              ],
              tables: [
                {
                  title: "Data Readiness Checklist for Key Influencers",
                  headers: ["Step", "Action", "Why It Matters", "Tools"],
                  rows: [
                    ["1", "Flatten table (no duplicate rows per entity)", "Model expects one row per customer/event", "Power Query merge/group"],
                    ["2", "Handle missing values", "Nulls degrade model accuracy", "Power Query fill/replace"],
                    ["3", "Limit Explain-by features", "Too many columns add noise", "Model diagram review"],
                    ["4", "Create bins for continuous fields", "Produces readable influencer statements", "Power Query `Number.RoundDown`"],
                    ["5", "Verify filters", "Filters define training dataset", "Bookmarks / filter pane"]
                  ]
                },
                {
                  title: "Interpreting Influencer Cards",
                  headers: ["Card Element", "Description", "Analyst Question"],
                  rows: [
                    ["Impact metric", "Shows factor increase/decrease vs baseline", "Is the effect large enough to matter?"],
                    ["Quality band", "High/medium/low indicator of statistical confidence", "Is sample size sufficient?"],
                    ["Distribution chart", "Displays how metric behaves across categories", "Is behavior consistent or skewed?"],
                    ["Top segments link", "Moves to segment view for cohort analysis", "Which combination of features needs action?"]
                  ]
                }
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
              concept: "The Decomposition Tree is an AI-assisted visual for root-cause analysis. Starting from a metric (Total Sales, Margin %, Support Tickets), it allows users to split the value by multiple dimensions in any order, guided either by their intuition or by the built-in AI that recommends the next best split. The result is an interactive decision tree that highlights how each dimension contributes to the metric.",
              discussion: "Unlike static drill-down hierarchies, the tree lets you mix dimensions on the fly: Region → Product → Channel or Product → Customer Segment → Sales Rep. Users click the + icon to choose the next field manually, or pick the lightbulb icon to let AI decide which split creates the greatest difference (high value, low value, or absolute impact). Each node shows the contribution as a bar length and value, with optional KPI status coloring. The \"High value\" analysis finds the branch that maximizes the metric; \"Low value\" finds underperformers; \"Explain by\" configuration determines eligible fields. The \"Find where\" search bar can locate outliers automatically (e.g., \"Find where Profit Margin is lowest\"), instantly expanding the tree to reveal the responsible branch. Because the tree recalculates as filters change, analysts can isolate time periods, geographies, or scenarios effortlessly. The visual supports conditional formatting, tooltips, and drill-through to detailed pages, making it a versatile exploratory companion to dashboards.",
              keyPoints: [
                "Requires one measure in Analyze and a set of categorical or binned numeric columns in Explain by",
                "Supports manual exploration and AI-driven splits (High Value, Low Value, Absolute Value)",
                "Displays cumulative contribution at each branch, helping quantify impact (e.g., Region = East accounts for 42% of sales)",
                "Find feature automatically builds the path to the most extreme values, accelerating anomaly investigation",
                "Bookmarks can capture specific trees to tell a story or share key findings with leadership",
                "Works best on aggregated, clean datasets; excessive cardinality slows performance"
              ],
              insiderTips: [
                "Pre-bin continuous fields (e.g., Margin Buckets) to keep branches readable and performant",
                "Use conditional formatting to color branches by KPI status or variance vs target",
                "Pair with anomaly detection: locate spike via line chart, select date, then use tree to explain cause",
                "Limit Explain-by list to the 6–8 most relevant dimensions—too many choices overwhelm users",
                "Right-click any node to add it as a filter for other visuals or to drill through to a detail page",
                "Use the \"Analyze\" dropdown at the top right to switch between High/Low/Absolute value scenarios during presentations",
                "Export the tree path using the Data > Export data option for offline analysis",
                "When presenting, collapse unused branches to avoid clutter and focus the audience"
              ],
              labs: [
                "Add the Decomposition Tree visual; place `Total Gross Margin` in Analyze",
                "Add Explain-by fields: Region, Product Category, Channel, Customer Segment, Sales Rep",
                "Run High Value AI split; note which branch the algorithm selects and why",
                "Switch to Low Value mode to identify underperforming combinations; capture screenshot for action log",
                "Use manual splits to test hypotheses (e.g., first split by Product Category). Compare results with AI path",
                "Leverage the Find feature: search \"Where is Margin % lowest?\" and inspect the generated branch",
                "Add conditional formatting to color nodes below target red and above target green",
                "Create a bookmark titled \"Margin Issue – East\" capturing the expanded path; use it in a narrative presentation",
                "Optional: add a drill-through button from the node to a transaction-level detail page",
                "Summarize three insights derived from the tree and assign owners for follow-up"
              ],
              tables: [
                {
                  title: "Decomposition Tree Configuration Cheat Sheet",
                  headers: ["Setting", "Purpose", "Best Practice", "Where to Configure"],
                  rows: [
                    ["Analyze field", "Metric to explain", "Use measures with meaningful aggregation", "Visual field well"],
                    ["Explain by", "Candidate dimensions", "Limit to relevant categorical/binned fields", "Visual field well"],
                    ["AI Mode", "High/Low/Absolute value guidance", "Switch during analysis to view different extremes", "On-visual dropdown"],
                    ["Find feature", "Auto-build path to condition", "Use for quick anomaly localization", "Visual header search"],
                    ["Conditional formatting", "Color nodes by metric/KPI", "Highlight thresholds for faster storytelling", "Format pane > Bars"]
                  ]
                },
                {
                  title: "When to Use Decomposition Tree vs Alternatives",
                  headers: ["Scenario", "Best Tool", "Why"],
                  rows: [
                    ["Need to quantify contribution by multiple dimensions", "Decomposition Tree", "Shows cumulative impact at each branch"],
                    ["Need to see distribution across one dimension only", "Bar/Column Chart", "Simpler comparison"],
                    ["Need to discover statistically strongest drivers", "Key Influencers", "Ranks drivers automatically"],
                    ["Need static drill structure for repeated use", "Hierarchical drill-down", "Predictable drill path"],
                    ["Need to explain change over time", "Waterfall + Decomposition Tree", "Waterfall for change, tree for drivers"]
                  ]
                }
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
              concept: "Power BI line charts include two embedded AI capabilities—Anomaly Detection and Forecasting—that elevate monitoring dashboards into diagnostic and planning tools. With a few clicks you can surface unexpected spikes or dips (with auto-generated explanations) and project future values with confidence intervals, all without leaving the visual or invoking external ML services.",
              discussion: "Anomaly Detection applies statistical models that consider trend and seasonal patterns to flag points outside an expected band. It produces contextual explanations (e.g., “Product = Accessories contributed the most to the anomaly”) drawing on correlated fields you specify. Forecasting leverages exponential smoothing to extend the series; you can control horizon, seasonality, confidence interval, and ignore last x data points (useful for partial periods). Both features run client-side using the dataset already loaded into Power BI, but they require evenly spaced time series—missing periods or inconsistent granularity reduce accuracy. Analysts should treat the outputs as decision-support, not oracles: confirm anomalies against operational events, overlay forecast ranges with budget targets, and keep metadata describing assumptions. Combine these features with bookmarks to create before/after stories (e.g., anomaly found → drill to decomposition tree). Export to Excel or use Analyze in Excel to share predicted values with finance teams.",
              keyPoints: [
                "Enable anomaly detection via Analyze > Detect anomalies, configure sensitivity, and provide fields for explanations",
                "Forecasting is available in line, area, and combo charts with a time axis; adjust seasonality manually when auto-detection is inaccurate",
                "Both features visualize confidence ranges so stakeholders understand uncertainty; narrower bands indicate higher confidence",
                "Unsupported in DirectQuery mode unless the model resides in Premium with AI workloads enabled—most use cases require Import",
                "Anomaly explanations rely on additional fields (e.g., Product, Region); supply them via the analysis pane for richer insights",
                "Use slicers/filters to focus the model on relevant periods (e.g., last 24 months) before running detection/forecast"
              ],
              insiderTips: [
                "Fill missing dates with zero/filler rows in Power Query to maintain regular cadence before enabling these features",
                "Lower sensitivity to reduce noise if you are seeing too many minor anomalies; raise it when searching for subtle shifts",
                "When a known business event occurred (marketing campaign, supply outage), annotate the chart with shapes or dynamic text to contextualize anomalies",
                "Use 'Ignore last' option in forecasting to exclude partial months that under-report performance near period close",
                "Export anomaly results to CSV from the Analyze pane for audit trails or root-cause tickets",
                "Compare forecast outputs with scenario-based DAX measures (e.g., stretch plan) to frame best/worst cases",
                "Test forecasts with holdout validation: hide recent data, generate forecast, then unhide to measure accuracy",
                "Turn off forecasting before printing static reports to avoid stakeholder confusion when interactive explanations are unavailable"
              ],
              labs: [
                "Ensure the Date table has contiguous daily or monthly rows; use Power Query to fill gaps if necessary",
                "Create a line chart with `Date[Month]` on Axis and `Sales Amount` on Values; add Region and Product to the 'Explain by' bucket in the Analyze pane",
                "Enable anomaly detection, set Sensitivity to 70, and review the cards generated—record the top three explanations",
                "Adjust sensitivity to 40 and note how the number of anomalies changes; decide which level balances noise vs insight",
                "Enable Forecasting, set Forecast length to 6 months, Confidence to 80%, and Ignore last to 1 month; capture the forecast table for handoff to FP&A",
                "Manually set Seasonality to 12 (months) if auto-detected seasonality is incorrect; compare graphs before/after",
                "Use a slicer to isolate a specific product line (e.g., Accessories) and repeat anomaly detection to see product-specific behavior",
                "Create a bookmark with anomalies enabled and another showing forecast; use buttons to toggle between \"What happened\" and \"What’s next\" views",
                "Export anomaly results (Analyze pane > Export data) and share with operations for validation",
                "Document assumptions (data cadence, ignored periods, seasonality) in a text box adjacent to the visual for transparency"
              ],
              tables: [
                {
                  title: "Anomaly Detection Parameters",
                  headers: ["Setting", "Description", "Guideline", "Where to Adjust"],
                  rows: [
                    ["Sensitivity", "Controls how many points are flagged", "Start at 70; decrease for fewer alerts", "Analyze pane > Detect anomalies"],
                    ["Fields to analyze", "Columns used for explanation", "Add relevant categorical fields (Region, Product)", "Analyze pane > Explain by"],
                    ["Expected range color", "Shaded band for normal values", "Match corporate color scheme", "Format pane > Data colors"],
                    ["Anomaly shape", "Marker style for flagged points", "Use contrasting color for accessibility", "Format pane > Shapes"]
                  ]
                },
                {
                  title: "Forecast Configuration Cheat Sheet",
                  headers: ["Option", "Purpose", "Best Practice", "Notes"],
                  rows: [
                    ["Forecast length", "Number of future periods", "Align with planning horizon (3, 6, 12 months)", "Longer horizons widen confidence intervals"],
                    ["Confidence interval", "Probability band", "80% for operational, 95% for risk conversations", "Displayed as shaded area"],
                    ["Seasonality", "Cycle length", "Enable manual override when data has known seasonality", "Set to number of periods per cycle"],
                    ["Ignore last", "Exclude incomplete periods", "Use 1 for monthly data mid-month", "Prevents under-forecasting near period close"],
                    ["Trend line", "Underlying trend component", "Toggle on to visualize baseline direction", "Helps in presentations"]
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
              concept: "Publishing pushes your Power BI Desktop (.pbix) report into the Power BI Service, transforming a local analysis into a cloud-hosted asset that supports collaboration, scheduled refresh, governance, and distribution. Understanding what gets published (semantic model, report, potential dataflow dependencies) and how it appears in the Service is foundational to enterprise deployments.",
              discussion: "When you click Publish in Desktop, Power BI packages the model (formerly called dataset, now semantic model) plus the report definition and uploads them to the selected workspace. After the upload, the Service creates three objects: the report (interactive pages), the semantic model (in-memory model powering queries), and (if applicable) a dataflow link. The Service UI organizes content into navigation hubs—**Home** (recent/favorites), **Browse** (all workspaces and apps), **Create** (build new reports/dataflows), and **Workspaces** (collaboration folders). Inside a workspace, you'll find tabs for Content, Datasets (Semantic models), Dataflows, and Datamarts. Each object has its own settings: refresh schedules, permissions, endorsement (Promoted/Certified), lineage view, and usage metrics. After publishing you should validate data freshness, rebind any data source credentials, and test report behavior in the Service (particularly for RLS and row filters). Developers should also pin critical visuals to dashboards or add the report to an App for consumers.",
              keyPoints: [
                "Publishing uploads both the report definition and the semantic model to a workspace",
                "Service UI separates objects: Reports (front-end), Semantic Models (data engine), Dataflows (ETL)",
                "Post-publish checklist: update credentials, configure refresh, test RLS, validate visuals",
                "The Service offers lineage view, usage metrics, endorsements, and sensitivity labeling for governance",
                "Choose workspaces carefully—publish to DEV/TEST before PROD to follow deployment pipelines"
              ],
              insiderTips: [
                "Name semantic models distinctly from reports (`SalesModel` vs `Sales Report`) to avoid confusion",
                "Use deployment pipelines (Premium feature) to move content from Dev → Test → Prod without republishing from Desktop",
                "After publishing, open Settings > Semantic model to configure gateway/refresh before sharing with users",
                "Enable Usage metrics to monitor adoption and identify stale content",
                "Leverage the Lineage view to visualize dependencies (dataflows → semantic models → reports → apps)",
                "Promote or certify semantic models to signal trustworthiness across the organization",
                "Bookmark the Service URL of key reports; use it in Teams/SharePoint integrations"
              ],
              labs: [
                "Publish `SalesPerformance.pbix` to the DEV workspace; note the newly created report and semantic model",
                "In the Service, navigate to the workspace, open Settings > Semantic model, and configure refresh credentials",
                "View the lineage tab to understand upstream (dataflow) and downstream (report/dashboard) connections",
                "Enable Usage metrics for the published report and review the generated report to monitor adoption",
                "Promote the semantic model (if you have permissions) and add a description explaining its purpose",
                "Test the report in the Service: switch to different RLS roles (View as role) to ensure security behaves correctly",
                "Pin a key KPI visual to a new dashboard to create a monitoring tile for leadership",
                "Capture the share link and post it in a Teams channel with context for the team"
              ],
              tables: [
                {
                  title: "Publish/Post-Publish Checklist",
                  headers: ["Step", "Action", "Reason"],
                  rows: [
                    ["1", "Verify workspace target", "Ensure report lands in correct DEV/TEST/PROD area"],
                    ["2", "Update credentials/gateway", "Enable scheduled refresh without failures"],
                    ["3", "Set refresh schedule", "Keep semantic model current"],
                    ["4", "Configure RLS roles", "Enforce data security for end users"],
                    ["5", "Promote or certify model", "Signal trust to other creators"],
                    ["6", "Document description/owner", "Help consumers know who maintains the report"],
                    ["7", "Add to App/dashboard", "Prepare for end-user consumption"]
                  ]
                },
                {
                  title: "Navigating the Power BI Service",
                  headers: ["Area", "Purpose", "Typical Actions"],
                  rows: [
                    ["Home", "Recent and recommended content", "Open frequent reports, favorites"],
                    ["Browse", "Access workspaces, shared content", "Find reports across organization"],
                    ["Create", "Build new shared datasets, reports", "Use quick create, datamarts"],
                    ["Workspaces", "Collaboration folders for teams", "Manage content, update settings, view lineage"],
                    ["Apps", "Curated packages for consumers", "Install, update, explore packaged reports"]
                  ]
                }
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
              ],
              labs: [
                "Open a published report in the Service and pin a KPI, a trend line chart, and a table to a new dashboard named 'Sales Pulse'",
                "Add a real-time streaming tile (using sample data) to the dashboard to illustrate mixed sources",
                "Configure a dashboard tile to link to a different report page (Edit details > Set custom link)",
                "Create a dashboard-level Q&A tile (Ask a question about your data) and validate the generated visual",
                "Set a data-driven alert on a card tile (e.g., Revenue < $1M) and choose notification recipients",
                "Duplicate the dashboard and rearrange tiles to build a mobile layout (Mobile view > customize)",
                "Share the dashboard with a colleague using direct share, then compare with App distribution",
                "Compare the interactivity differences: attempt cross-filtering on dashboard tiles vs within the original report",
                "Document dashboard governance: owner, refresh frequency, alert recipients, and source reports"
              ],
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
              concept: "Workspaces are the collaboration hubs of the Power BI Service—shared containers where teams co-develop semantic models, reports, dashboards, dataflows, and datamarts before distributing curated content through Apps. Mastering workspace roles, permissions, and governance is essential for secure, scalable BI.",
              discussion: "Each workspace has a security model built on four roles: Admin (full control), Member (edit/update content), Contributor (create/edit but cannot publish apps), and Viewer (read-only). Unlike My Workspace (personal sandbox), modern workspaces support Azure AD security groups, multiple artifacts, deployment pipelines, and OneDrive/SharePoint integration. Best practice is to align workspaces with teams or subject areas (e.g., Finance – Dev, Finance – Prod) and assign roles using security groups rather than individuals. Content lifecycle typically follows: build in Dev workspace → test and validate → deploy to Prod workspace via deployment pipelines or manual publish. Workspace settings allow you to configure endorsement policies, sensitivity labels, scheduled refresh, and integration with Microsoft Teams (link workspace to Teams channel). For multi-tenant governance, Power BI admins can enforce rules such as restricting export, limiting share outside organization, or requiring certified data sources. From the workspace content list you can open the **Access** pane to review who has which role, the **Settings** gear for refresh and gateway configurations, and the **New** menu to create dataflows, datamarts, or streaming datasets.",
              keyPoints: [
                "Workspaces are shared collaboration folders distinct from personal 'My workspace'",
                "Roles control capabilities—Admin (full), Member (create/edit/publish app), Contributor (create/edit), Viewer (read)",
                "Align workspaces with DEV/TEST/PROD or functional teams to support deployment pipelines",
                "Use Azure AD security groups to manage access at scale",
                "Workspace settings govern refresh, gateways, sensitivity, and export/sharing policies",
                "Workspace content can feed multiple Apps; App permissions are separate from workspace roles"
              ],
              insiderTips: [
                "Create paired workspaces for lifecycle (e.g., Sales Analytics – Dev and Sales Analytics – Prod) and connect via deployment pipelines",
                "Avoid granting Admin to many users—limit to BI leads; use Member/Contributor for analysts",
                "Enable OneDrive sync to keep .pbix files versioned in SharePoint/Teams",
                "Document workspace purpose, contact, and data sources in the Description field",
                "Turn on 'Assign to workspace' setting so dataset owners are notified about refresh failures",
                "Use Viewers role for consumers who need to test in Dev without editing",
                "Review Access logs periodically to remove unused permissions and maintain compliance"
              ],
              labs: [
                "Create a new workspace named `Finance Analytics – Dev`; add description and assign yourself as Admin",
                "Add an Azure AD security group (Finance BI Team) as Members; add a test user as Viewer",
                "Configure workspace settings: enable scheduled refresh notifications and set Contact list to BI Operations",
                "Upload a sample report and inspect lineage view to ensure dataflow dependencies are visible",
                "Link the workspace to a Microsoft Teams channel for integrated discussions (Workspace settings > Advanced > Connect to Teams)",
                "Create a deployment pipeline (Premium) or manually duplicate the workspace to `Finance Analytics – Prod` to simulate promotion",
                "Review Access panel and export permission list to CSV for audit trail",
                "Set a sensitivity label (Confidential) on the semantic model and verify it cascades to reports"
              ],
              tables: [
                {
                  title: "Workspace Roles and Capabilities",
                  headers: ["Role", "Create/Edit Content", "Publish App", "Manage Access", "Typical Audience"],
                  rows: [
                    ["Admin", "Yes", "Yes", "Yes", "BI Leads, Workspace Owner"],
                    ["Member", "Yes", "Yes", "No", "Power Users, Developers"],
                    ["Contributor", "Yes", "No", "No", "Analysts building content"],
                    ["Viewer", "No (view only)", "No", "No", "Reviewers, Business stakeholders"]
                  ]
                },
                {
                  title: "Workspace Governance Checklist",
                  headers: ["Area", "Action", "Frequency"],
                  rows: [
                    ["Security", "Review membership via Azure AD groups", "Quarterly"],
                    ["Refresh", "Validate schedules and gateway status", "Weekly"],
                    ["Lineage", "Check for broken dependencies/dataflows", "Monthly"],
                    ["Documentation", "Update description, owner, SLA", "Quarterly"],
                    ["Deployment", "Promote content through pipeline", "Per release cycle"]
                  ]
                }
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
              ],
              labs: [
                "From a workspace, click 'Create app'; configure Name, Description, and add organizational branding (logo + theme colors)",
                "Select only production-ready reports and dashboards; exclude draft artifacts",
                "Assign permissions by adding Azure AD security groups (Finance Execs) with Viewer access; publish the app",
                "Install the published app as a consumer (use a test account) and verify the navigation experience",
                "Update a report in the workspace, republish, then use App update and send notification email to subscribers",
                "Add landing page text cards in the app (using navigation builder) to orient new users to content sections",
                "Generate a PDF export from the app and compare with report export to understand distribution differences",
                "Document the app link, owner, refresh SLA, and support contact in a Teams/SharePoint knowledge base"
              ],
              tables: [
                {
                  title: "App Creation Checklist",
                  headers: ["Step", "Action", "Owner"],
                  rows: [
                    ["Content selection", "Include only certified or approved reports/dashboards", "Workspace Owner"],
                    ["Branding", "Upload logo, set theme color, craft description", "BI Designer"],
                    ["Navigation", "Organize sections/tabs logically (e.g., Overview, Detail, Exports)", "Report Author"],
                    ["Permissions", "Assign security groups (Viewers) and optional Build access", "Data Steward"],
                    ["Notification", "Enable 'Notify users of updates' when publishing", "Workspace Owner"],
                    ["Documentation", "Add help link/support contact in app description", "BI Support"]
                  ]
                },
                {
                  title: "Sharing Options Comparison",
                  headers: ["Method", "Best For", "Strengths", "Considerations"],
                  rows: [
                    ["Apps", "Enterprise distribution", "Curated, branded, controlled updates", "Requires workspace permissions to publish"],
                    ["Direct report sharing", "Ad-hoc collaboration", "Quick share links", "Harder to govern at scale"],
                    ["Dashboard sharing", "Executive monitoring", "Single page, alerts", "Limited interactivity"],
                    ["Export (PDF/PPT)", "Board packets, offline review", "Static snapshots", "No interactivity or refresh"],
                    ["Teams/SharePoint embed", "Team collaboration", "Contextual access in existing tools", "Permissions must match Service"],
                    ["Publish to web", "Public dissemination", "Embeds anywhere with link", "Not secure—avoid confidential data"]
                  ]
                }
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
              ],
              labs: [
                "In Power BI Service, open the semantic model settings and configure credentials for cloud sources (e.g., SharePoint, Azure SQL) without a gateway",
                "Download and install the On-premises Data Gateway (Standard mode) on a server; sign in with the BI service account",
                "In the Service, map the published semantic model to the installed gateway and map on-premises data sources to local connections",
                "Set a refresh schedule (4x daily) for the semantic model; trigger an on-demand refresh to validate",
                "Review the Refresh history to confirm success, then deliberately stop the gateway service and observe failure messaging",
                "Configure email notifications to refresh admins on failure and add multiple contacts for redundancy",
                "Implement incremental refresh policy (if Premium) for a fact table—define historical refresh window (5 years) and incremental period (1 month)",
                "Document gateway server name, service account, data sources, and owners in a shared runbook"
              ],
              tables: [
                {
                  title: "Gateway Deployment Options",
                  headers: ["Mode", "Use Case", "Supports", "Notes"],
                  rows: [
                    ["Standard", "Enterprise shared gateway", "Import, DirectQuery, Live connections", "Recommended for most scenarios"],
                    ["Personal", "Individual refresh needs", "Import only", "Runs under user profile; not for production"],
                    ["Virtual Network (Preview)", "Gatewayless networking", "Azure data sources", "Requires Premium and VNet setup"]
                  ]
                },
                {
                  title: "Refresh Strategy Guidelines",
                  headers: ["Scenario", "Recommendation", "Benefits"],
                  rows: [
                    ["Small cloud dataset", "Scheduled refresh (2–4x daily)", "Keeps data current without gateway"],
                    ["Large on-prem fact table", "Gateway + incremental refresh", "Reduces refresh duration and load"],
                    ["Real-time dashboards", "DirectQuery/Streaming via gateway", "Near real-time insight"],
                    ["Weekend maintenance", "Pause refresh schedules", "Avoid conflicts with system updates"]
                  ]
                }
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
              concept: "Optimizing without measurement is guesswork. Performance Analyzer is the built-in profiler that captures how long each visual spends querying the semantic model, rendering, and waiting on other visuals. It is the starting point for every tuning engagement—quantify the problem before applying fixes.",
              discussion: "Access Performance Analyzer from the Optimize ribbon (formerly View) in Power BI Desktop. The pane records timings whenever visuals query the model: **DAX Query** (time spent by the VertiPaq engine executing DAX), **Visual Display** (rendering time in the client), and **Other** (synchronization, waiting for other visuals). Use \"Start recording\", interact with slicers or page navigation to simulate real user behavior, then \"Stop\" and review the log. Slow DAX Query times indicate issues with the model or measures; slow Visual Display suggests heavy visuals (maps, large tables) or too many visuals per page; high Other often means dependency chains or synchronous refresh. The \"Copy query\" button exports the exact DAX + XMLA command for deeper analysis in DAX Studio. Saving the log (\"Export\" button) provides evidence to share with stakeholders and a baseline for future improvements. Best practice is to test at multiple stages: before publishing, after incremental refresh changes, and following any major design updates.",
              keyPoints: [
                "Performance Analyzer measures visual-level timings—treat it as your performance dashboard",
                "DAX Query > Visual Display indicates data model or measure inefficiencies",
                "Visual Display > DAX Query points to rendering bottlenecks (visual type, density, page design)",
                "Always capture a baseline log before making changes to quantify improvements",
                "Use exported logs for documentation and collaboration with the team"
              ],
              insiderTips: [
                "Disable \"Auto Start recording\" when iterating—manually control to isolate specific actions",
                "Use bookmarks to test multiple navigation paths quickly during a single recording",
                "Turn on 'Show panes' > 'Used size' to correlate large visuals with display time",
                "Filter the log to focus on visuals over a threshold (e.g., >300 ms)",
                "Test on machines similar to end-user hardware; Power BI Desktop performance is client-dependent",
                "Record with realistic filters (e.g., top customer) because empty reports always appear fast",
                "After exporting the log (JSON), import into Power BI to analyze repeated patterns across pages"
              ],
              labs: [
                "Open a complex report page and clear the query cache (File > Options > Diagnostics > Clear cache)",
                "Launch Performance Analyzer, click Start recording, and trigger interactions: slicers, bookmarks, drill-through",
                "Sort the captured visuals by DAX Query time; note the top three offenders and export queries to DAX Studio for deeper inspection",
                "Repeat while applying a heavy filter (e.g., last 3 years); compare results to the baseline to see how filters affect performance",
                "Export the log to JSON, build a quick Power BI report showing average DAX time per visual, and share findings with your team",
                "Adjust the problematic visual (reduce fields, disable total, change aggregation) and re-record to validate improvement",
                "Capture a final \"after\" log and document before/after timings in a Performance Checklist for the project"
              ],
              tables: [
                {
                  title: "Performance Analyzer Metrics",
                  headers: ["Metric", "Represents", "Common Causes of Slowness", "Next Step"],
                  rows: [
                    ["DAX Query", "Time spent executing DAX against VertiPaq", "Poor model design, complex measures, missing aggregations", "Analyze query in DAX Studio; revisit model"],
                    ["Visual Display", "Rendering time in client UI", "High-cardinality visuals, heavy custom visuals, many visuals per page", "Simplify visual, reduce data points, paginate"],
                    ["Other", "Synchronization and wait time", "Dependent visuals refreshing sequentially, bookmarks with many targets", "Stagger refresh, reduce dependencies, adjust bookmarks"]
                  ]
                }
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
              concept: "Performance Analyzer tells you a visual is slow; DAX Studio explains the why. It is the primary external tool for inspecting query plans, measuring server timings, capturing VertiPaq utilization, and exporting queries for optimization.",
              discussion: "DAX Studio connects to an open Power BI Desktop file (or XMLA endpoint) and provides a professional query editing and diagnostics environment. Key features include: **Query editing with IntelliSense**, **Server Timings** (breakdown of storage engine vs formula engine time), **Query Plan** (shows storage engine scans, hash matches), **VertiPaq Analyzer** (model metadata with column sizes, cardinality), and **Export** tools (to CSV, Excel, SQL Server). Workflow: from Performance Analyzer, copy the slow visual's query, paste into DAX Studio, enable Server Timings + Query Plan, run the query, and examine FE vs SE time. High FE indicates complex DAX (nested iterators, lack of variables); high SE indicates model issues (poor cardinality, missing aggregations). The DMV (Dynamic Management Views) section lets you run queries like `DISCOVER_CALC_DEPENDENCY` to map measure dependencies or `$SYSTEM.TMSCHEMA_COLUMNS` to analyze column metadata. The VertiPaq Analyzer export can be loaded into a separate Power BI template (vpax) to inspect table/column size contributions. DAX Studio is indispensable for serious optimization—it provides the evidence needed to justify model or DAX refactoring.",
              keyPoints: [
                "Connect to Power BI Desktop via External Tools ribbon or DAX Studio launcher",
                "Use Server Timings + Query Plan to distinguish storage vs formula engine bottlenecks",
                "Leverage VertiPaq Analyzer export to identify bloated tables and columns",
                "DMVs enable documentation of measures, columns, relationships, and dependencies",
                "Supports output to Excel/CSV for sharing slow query results with stakeholders"
              ],
              insiderTips: [
                "Enable 'Server Timings' and 'Query Plan' before running the query—otherwise you miss diagnostic data",
                "Wrap heavy DAX in `DEFINE MEASURE` statements within DAX Studio to experiment without changing the model",
                "Use `EVALUATE SUMMARIZECOLUMNS(...)` to prototype optimized queries before updating report measures",
                "Sort storage engine scans by duration to find the table causing heavy reads",
                "Export VertiPaq results (`File > Export > Save as VPAX`) and analyze with the VertiPaq Analyzer Power BI template",
                "Use `Clear cache` button in DAX Studio to ensure repeatable measurements for comparisons",
                "Automate documentation with DMV scripts to generate measure/column lineage",
                "When connected to Premium XMLA endpoint, you can run scripts without opening Desktop"
              ],
              labs: [
                "Open Power BI Desktop report and launch DAX Studio via External Tools; confirm connection to the local model",
                "Copy a slow visual's query from Performance Analyzer, paste into DAX Studio, enable Server Timings and Query Plan, run it, and record FE vs SE time",
                "Modify the query by introducing a variable or summarizing table; rerun and compare timings to validate optimization",
                "Export query results to CSV for offline analysis and share with the BI team",
                "Run DMV query `SELECT * FROM $SYSTEM.DISCOVER_CALC_DEPENDENCY` to document measure dependencies; export to Excel",
                "Create a VPAX file (VertiPaq Analyzer export) and open it in the VertiPaq Analyzer PBIX to inspect table sizes",
                "Use Query Builder to generate a quick summary and confirm column cardinality matches expectations",
                "Clear cache, rerun the optimized measure, and compare timings; document before/after in the performance log"
              ],
              tables: [
                {
                  title: "DAX Studio Diagnostic Features",
                  headers: ["Feature", "Purpose", "How to Use", "Insight Provided"],
                  rows: [
                    ["Server Timings", "Breakdown FE vs SE time", "Enable toggle before running query", "Identify whether DAX or model is bottleneck"],
                    ["Query Plan", "View storage engine operations", "Enable toggle; inspect operations", "Spot expensive scans, hash matches"],
                    ["DMV Explorer", "Query metadata", "Run DMV scripts (e.g., TMSCHEMA)", "Document measures, relationships, columns"],
                    ["VertiPaq Analyzer", "Model size analysis", "Export VPAX", "Find bloated tables/columns"],
                    ["Query Builder", "Construct DAX queries visually", "Drag tables/columns, generate DAX", "Prototype optimized summarize queries"]
                  ]
                }
              ]
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
              labs: [
                "Export VertiPaq Analyzer results from DAX Studio and rank tables by size; remove or aggregate unnecessary tables/columns in Power Query",
                "Refactor a measure using `VAR` to store intermediate results; measure query time before/after with Performance Analyzer",
                "Replace calculated columns with equivalent measures where possible; validate functional parity and improved model size",
                "Reduce visuals on a dense report page by moving supporting visuals to a drill-through page; retest page load time",
                "Create a separate Date slicer page and sync slicers across report pages to reduce slicer count per page",
                "Implement field parameters for large dimension slicers to allow user choice without loading all visuals simultaneously",
                "Document each optimization change along with measured improvement in a performance log"
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
              concept: "Aggregations let you serve high-level queries from a small, pre-summarized table while keeping detail-level data in DirectQuery or Import. When configured correctly, Power BI automatically hits the aggregation table for summary visuals (e.g., Sales by Year) and only touches the granular table when users drill into detail, delivering order-of-magnitude performance gains on enterprise datasets.",
              discussion: "An aggregation table is typically an Import-mode table that summarizes a DirectQuery fact table by key dimensions (Date, Product, Region) and measure columns (Sales Amount, Quantity). You register the table as an aggregation in Model view (Storage mode = Import, Summarization = Sum/Max, etc.) and map each column to its granular counterpart. Power BI then uses the aggregation when the query granularity matches or is coarser than the defined aggregation. Composite models (Import + DirectQuery) with Dual storage mode enable this hybrid approach: dimensions can be Dual to participate in both Import and DirectQuery queries. The workflow: create summarized table in data source or Power Query, load into model as Import, set Storage mode of detail fact table to DirectQuery, configure aggregations (Model view > table > Manage aggregations), and test with DAX Studio or Performance Analyzer. Consider multiple aggregation tables (e.g., daily by Product, monthly by Region) to optimize diverse workloads. Governance considerations: document aggregation grain, ensure refresh is coordinated with fact table, and monitor aggregation hits via SQL Profiler or Log Analytics.",
              keyPoints: [
                "Aggregations reduce DirectQuery calls by answering summary queries from Import-mode tables",
                "Works best for large fact tables with repetitive summary queries (sales dashboards, KPI scorecards)",
                "Requires composite model with fact table in DirectQuery or Dual mode",
                "Column mapping (columnPair) must match data types and precision between aggregation and detail tables",
                "Multiple aggregation tables can coexist for different grains (e.g., Year vs Month)",
                "Testing is critical—validate hit/miss behavior before releasing to users"
              ],
              insiderTips: [
                "Start with the most common grain (e.g., Date-Product-Country) based on usage metrics",
                "Use Power Query Group By on DirectQuery source to produce aggregation table, then load as Import",
                "Set detail fact table storage mode to DirectQuery, dimensions to Dual for optimal join performance",
                "Enable SQL Profiler (Premium) or Log Analytics to confirm queries hit aggregation tables (look for `IsAggregationHit`)",
                "Version-control aggregation definitions; a schema change in the source can break mappings",
                "When combining with incremental refresh, ensure aggregation tables refresh after detail partitions",
                "Communicate to users that drill-through beyond aggregation grain may trigger slower DirectQuery behavior"
              ],
              labs: [
                "Identify top BI queries (using Usage metrics) that operate at daily granularity; design aggregation grain accordingly",
                "Create an aggregation table in Power Query using Group By (Date, Product, Region) with Sum of Sales; set storage mode to Import",
                "Switch the detailed fact table to DirectQuery and dimensions to Dual; confirm the model is composite",
                "In Model view, configure Manage aggregations: map each aggregation column to the detailed column and set summarization (Sum/Count)",
                "Use DAX Studio to run a summary query (Sales by Date) and confirm via Server Timings that the query is served by the aggregation (no DirectQuery)",
                "Drill down beyond the aggregation granularity (e.g., include Customer ID) and observe fallback to DirectQuery",
                "Document refresh sequence: refresh aggregation table first, then DirectQuery source, ensuring consistency",
                "Record performance improvement (query duration before vs after) in the optimization log"
              ],
              tables: [
                {
                  title: "Aggregation Design Decisions",
                  headers: ["Decision Area", "Options", "Guideline"],
                  rows: [
                    ["Grain", "Year, Quarter, Month, Day", "Pick the lowest level frequently queried; avoid unnecessary detail"],
                    ["Measure selection", "Sum, Min, Max, Count", "Include only measures needed for summary visuals"],
                    ["Storage mode", "Import vs Dual", "Aggregation table Import; dimensions Dual for flexibility"],
                    ["Refresh strategy", "Full vs incremental", "Align with fact table refresh to maintain accuracy"],
                    ["Validation", "Profiler, DAX Studio, Log Analytics", "Monitor `IsAggregationHit` to ensure configuration works"]
                  ]
                }
              ]
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
              concept: "Incremental refresh partitions your semantic model so scheduled refresh recalculates only recent data while leaving historical partitions untouched. This dramatically reduces refresh duration, resource consumption, and gateway load for large datasets.",
              discussion: "The workflow: parameterize your date table in Power Query using RangeStart and RangeEnd parameters, filter the fact table based on those parameters, then configure incremental refresh in the model (Model view > table > Incremental refresh). You define **Store rows in the last** (e.g., 5 years) and **Refresh rows in the last** (e.g., 30 days). When published to the Service, Power BI creates partitions per period and refreshes only those within the refresh window. Premium/PPU also supports incremental refresh with real-time hybrid tables (DirectQuery + Import). Key considerations: ensure the fact table has a date column at the correct granularity, avoid transformations after the filter step (they negate folding), and use Query Folding so filters push down to the source. Combine with dataflows to centralize incremental logic if multiple models need the same partitions. Monitoring is done via Refresh history, XMLA scripts, or Log Analytics to confirm partition creation.",
              keyPoints: [
                "Requires RangeStart/RangeEnd parameters and query folding to be effective",
                "Store vs Refresh settings control partition retention and update windows",
                "Publishing to Service is required—incremental refresh only materializes there",
                "Premium supports hybrid tables for near real-time scenarios",
                "Reduces refresh time, gateway load, and capacity consumption"
              ],
              insiderTips: [
                "Place the RangeStart/RangeEnd filter step as early as possible in Power Query to preserve folding",
                "Use DateTime data type to maintain time-of-day granularity when necessary",
                "For monthly data, set refresh window to 1 month and store window to multiple years",
                "After first refresh in the Service, use XMLA to inspect partitions and confirm schedule",
                "Combine with rolling window policy to automatically purge historical partitions",
                "Document partition strategy (e.g., Year-Month) for future maintenance",
                "For fact tables exceeding 10M rows, pair incremental refresh with aggregations for summary queries"
              ],
              labs: [
                "In Power Query, create RangeStart and RangeEnd parameters (DateTime) and apply them to filter the fact table's Date column",
                "Ensure query folding is active (View Native Query); adjust steps to maintain folding",
                "Configure incremental refresh: set Store rows = last 5 Years, Refresh rows = last 30 Days, detect data changes = Date column",
                "Publish model to a Premium workspace; trigger first refresh to materialize partitions",
                "Use XMLA endpoint (Tabular Editor or SQL Profiler) to list partitions and verify names/dates",
                "Simulate data update by appending new rows in source; refresh and confirm only newest partitions process",
                "Monitor refresh history to capture duration improvements compared to full refresh",
                "Document incremental refresh configuration (parameters, windows, detection) in the project README"
              ],
              tables: [
                {
                  title: "Incremental Refresh Configuration Matrix",
                  headers: ["Scenario", "Store Rows", "Refresh Rows", "Notes"],
                  rows: [
                    ["Daily transactions", "5 Years", "7 Days", "Common for sales fact tables"],
                    ["Monthly snapshots", "10 Years", "2 Months", "Allows restating prior month if needed"],
                    ["Event logs", "2 Years", "1 Day", "High-frequency updates"],
                    ["Finance actuals", "7 Years", "30 Days", "Aligns with monthly close cycle"]
                  ]
                }
              ]
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
              concept: "With the Oct 2025 GA update, Performance Analyzer is available in the Power BI Service, enabling you to capture real performance metrics in the production environment—including network latency, tenant capacity load, and security layers—something Desktop cannot simulate.",
              discussion: "Service-side Performance Analyzer is accessible from the report's view menu (Optimize ribbon → Performance Analyzer). It mirrors the Desktop experience but adds true end-to-end measurements: DAX query time executed on the capacity, Visual display time in the browser, and service-level latency. Because it runs against published semantic models, it respects RLS, capacity constraints, and real data volumes. Use it for: validating performance after deployment, comparing Premium vs Pro capacity behavior, and diagnosing issues that appear only in the Service (e.g., network latency, custom visual CDN downloads). Logs can be exported to JSON just like Desktop, but now they reflect the production load. Combine with Azure Monitor/Log Analytics for historical tracking. The Service version also allows you to test across browsers/devices, capturing front-end differences. It is a best practice to run both Desktop (developer environment) and Service (production) analyzer sessions to identify environment-specific bottlenecks.",
              keyPoints: [
                "Service Performance Analyzer measures production conditions (capacity load, RLS, network)",
                "Accessible via Optimize ribbon in the Service; requires edit permissions on the report",
                "Exported logs mirror Desktop format—facilitates comparison",
                "Great for validating app performance and multi-region latency",
                "Helps differentiate developer machine performance vs end-user experience"
              ],
              insiderTips: [
                "Test across time zones—capacity load during peak hours impacts timings",
                "Use a clean browser profile or incognito to avoid cached assets influencing display time",
                "Combine logs with Log Analytics (Power BI Activity events) to correlate with capacity metrics",
                "When testing with RLS, impersonate roles via 'View as' to capture performance for restricted datasets",
                "If using custom visuals, note CDN download time; consider bundling visuals in App if slow",
                "Include device/browser info in your performance log documentation to explain variability"
              ],
              labs: [
                "Open the published report in the Service (Prod workspace) and launch Performance Analyzer",
                "Record interactions (slicers, page navigation) during peak business hours; export the JSON log",
                "Compare Service log to Desktop log for the same report; identify differences in DAX Query vs Visual Display times",
                "Run the analyzer on a mobile browser (Power BI mobile or mobile web) to test responsive performance",
                "Share the exported log with admins and correlate with capacity metrics in the Admin Portal or Log Analytics",
                "Repeat test during off-peak hours to measure capacity impact; document findings in performance playbook",
                "Create a performance dashboard using exported Service logs to monitor which visuals consistently exceed thresholds"
              ]
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
              concept: "Static Row-Level Security uses roles with hard-coded filters to enforce row-level restrictions. It is simple to implement and appropriate for small scenarios (e.g., half a dozen regions) or prototypes where the access matrix rarely changes.",
              discussion: "In Power BI Desktop, you create roles under Modeling > Manage roles, add a DAX filter to restrict the dimension table (e.g., `Region[RegionName] = \"East\"`), test the role using 'View as', then publish and assign users/groups to the role in the Service. Each role represents a single slice; if you have 10 regions, you create 10 roles. Because the filter is static, changing security requires editing the model, republishing, and reassigning users—high maintenance at scale. However, static RLS is still useful for: simple departmental splits, ad-hoc demos, and scenarios where security mirrors the dataset's own partitions (e.g., separate PBIX per subsidiary). Governance requirements: document which users are assigned to which roles, test after every data update, and ensure roles filter dimension tables that cascade relationships (avoid filtering fact tables directly).",
              keyPoints: [
                "Static RLS = hard-coded DAX filters per role; fast to implement but not scalable",
                "Filters should target dimension tables so relationships propagate security",
                "Publish to the Service and assign security in the semantic model’s Security blade",
                "Use 'View as' in Desktop and Service to validate user experience",
                "Keep a runbook describing each role and its assigned audience"
              ],
              insiderTips: [
                "Name roles consistently (e.g., `RLS_Region_East`) so administrators know the scope",
                "Avoid filtering fact tables—filtering dimensions makes maintenance easier",
                "Store the DAX filter logic in documentation (e.g., README) for audits",
                "Use Azure AD security groups instead of individuals when assigning users",
                "For many similar roles, consider creating a role template and scripting creation via Tabular Editor",
                "Remember to revisit security after refreshing data sets—new regions require new roles",
                "Combine static RLS with App separation if departments want customized navigation"
              ],
              labs: [
                "In Power BI Desktop, open Modeling > Manage roles; create `RLS_Region_East` with filter `Region[RegionName] = \"East\"`",
                "Repeat for two additional regions; document the DAX used for each role",
                "Use 'View as' to simulate each region and confirm visuals show only permitted data",
                "Publish to a workspace; in the semantic model's Security settings, assign Azure AD group `Sales-East` to the corresponding role",
                "Test in the Service using 'Test as role' to validate RLS works after publish",
                "Create a security mapping table (Role, Group, Owner) in SharePoint/Teams to track assignments"
              ],
              tables: [
                {
                  title: "Static RLS Runbook Template",
                  headers: ["Role Name", "Filter Expression", "Assigned Group/User", "Last Validated", "Owner"],
                  rows: [
                    ["RLS_Region_East", "Region[RegionName] = \"East\"", "Sales-East SG", "2025-10-01", "BI Security"],
                    ["RLS_Region_Central", "Region[RegionName] = \"Central\"", "Sales-Central SG", "2025-10-01", "BI Security"]
                  ]
                }
              ]
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
              concept: "Dynamic RLS externalizes security logic into data tables so a single role adapts to the logged-in user. Users gain access by being mapped to allowed entities (regions, customers) in a permissions table, eliminating the need to create dozens of roles.",
              discussion: "Architecture: add a 'User Permissions' table containing `UserPrincipalName` (email) and security keys (RegionID, CustomerID). Relate this table to corresponding dimensions. Create one role (e.g., `RLS_Dynamic`) with filter `[UserPrincipalName] = USERPRINCIPALNAME()` and optionally `OR USEROBJECTID()` depending on Azure AD setup. Because the filter sits on the permissions table, security cascades through relationships to all fact tables. Maintenance is handled by updating the permissions table—through ETL, dataflows, or manual edits—without modifying the model. Advanced patterns include hierarchical security (manager sees all subordinates), multi-tenant security (client ID mapping), and bridging multiple domains (user assigned to multiple regions). Testing requires covering multiple cases (single assignment, multiple assignments, no assignment). Governance: treat the permissions table as sensitive data, secure its refresh pipeline, and ensure it loads before fact tables to avoid blank access.",
              keyPoints: [
                "Single role covers entire security matrix—security becomes data-driven",
                "Permissions table must have unique rows per user/entity and relationships to dimensions",
                "Use `USERPRINCIPALNAME()` for email-based mapping; `USEROBJECTID()` for Azure AD GUID if email changes possible",
                "Test no-match scenario—users with no rows should see nothing",
                "Keep permissions table refresh synchronized with HR or CRM systems"
              ],
              insiderTips: [
                "Store permissions in a centralized dataflow so multiple datasets reuse the same security mapping",
                "Add `EffectiveDate`/`ExpiryDate` columns to support time-bound access and filter in the role DAX",
                "For hierarchical security, precompute tree paths (e.g., `PATH` functions) in the permissions table",
                "Log security assignments to audit (User, Scope, Date) for compliance reviews",
                "When testing, use the Service 'Test as role' with specific user emails to ensure real-world behavior",
                "If users belong to multiple regions, ensure relationships allow many-to-many (bridge tables) and row filters accommodate multiple rows",
                "Cache-friendly approach: mark permissions table as Dual if using composite models to improve DirectQuery performance"
              ],
              labs: [
                "Create a `UserPermissions` table (UserPrincipalName, RegionKey) in Power Query or as a dataflow; relate it to the Region dimension",
                "Define a single role `RLS_Dynamic` with DAX filter `UserPermissions[UserPrincipalName] = USERPRINCIPALNAME()`",
                "Add sample entries for three users (two single-region, one multi-region) and test using 'View as' in Desktop",
                "Publish to the Service and assign Azure AD group with dynamic users to the role; use 'Test as role' with actual emails",
                "Implement a bridge table for multi-region assignments (UserKey ↔ RegionKey) and update relationships accordingly",
                "Add start/end date columns to permissions and adjust role filter to `&& TODAY() BETWEEN [StartDate] && [EndDate]`",
                "Automate permissions refresh via dataflow or ETL script; document refresh order to ensure permissions table loads first"
              ],
              tables: [
                {
                  title: "Dynamic RLS Components",
                  headers: ["Component", "Description", "Best Practice"],
                  rows: [
                    ["User Permissions table", "Maps users to security keys", "One row per user/entity; include effective dates"],
                    ["Role filter", "DAX using USERPRINCIPALNAME()", "Apply filter on permissions table; let relationships cascade"],
                    ["Relationships", "Connect permissions to dimensions", "Use single-direction relationships for clarity"],
                    ["Testing plan", "Matrix of users vs expected scope", "Test no-access, single-access, multi-access cases"],
                    ["Refresh pipeline", "Keeps permissions current", "Integrate with HR/CRM systems; monitor failures"]
                  ]
                }
              ]
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
              concept: "Object-Level Security (OLS) restricts entire tables or columns rather than rows. It's ideal for sensitive fields (salary, margin %) that should be invisible to certain roles—even in metadata, DAX, or drill-through. Without OLS, savvy users can infer restricted data through calculations or export.",
              discussion: "OLS is configured in the model metadata (Tabular Object Model) using external tools like Tabular Editor or SQL Server Management Studio. You define security roles and specify which tables/columns are hidden or visible for each role. Unlike RLS, OLS changes metadata exposure: restricted columns don't appear in the field list, cannot be referenced in DAX, and exports exclude them. Implementation steps: open Tabular Editor from External Tools, create or select a role, expand the Role > TablePermissions, set `MetadataPermission` to `Read` or `None` per table/column. For column-level OLS, set table permission to `Read`, column to `None`. Deploy/save changes back to the model. Verify using 'View as' in Desktop or Service. OLS is typically combined with RLS for comprehensive security. Key scenarios: finance models (hide salary), HR analytics (hide PII), multi-tenant models (hide entire dimension tables). Be aware that OLS requires Premium/PPU for XMLA endpoint write-back if you edit in Service; Desktop editing via Tabular Editor is supported and saved in PBIX.",
              keyPoints: [
                "OLS hides schema objects (tables/columns), preventing visibility and usage",
                "Configured via external tools (Tabular Editor) because Power BI Desktop UI lacks OLS controls",
                "Combine with RLS to cover both row and object level restrictions",
                "Column-level OLS still allows measure references unless you secure measure tables appropriately",
                "Requires careful documentation to avoid accidental exposure during model changes"
              ],
              insiderTips: [
                "Group sensitive columns into a dedicated table (e.g., `Finance Sensitive`) to manage OLS at table level",
                "When hiding columns, ensure dependent measures are placed in a secure measures table also restricted by OLS",
                "Maintain a security matrix outlining which roles have metadata access to each object",
                "Validate OLS behavior by attempting to create a measure referencing restricted columns—should fail",
                "Use Tabular Editor scripts to automate OLS assignment across environments",
                "When using Calculation Groups, ensure OLS doesn't block required columns used by group expressions"
              ],
              labs: [
                "Open the model in Tabular Editor from Power BI Desktop; create role `FinanceManagers`",
                "Set table-level OLS: for role `FinanceManagers`, set `FactFinance` metadata permission to Read, `FactHR` to None; save and return to Desktop",
                "Set column-level OLS: allow table `FactFinance` metadata, but set `FactFinance[Salary]` to None for role `Analysts`",
                "Use 'View as' to test both roles—verify the Salary column is hidden and measures referencing it fail",
                "Publish to Service; assign users/groups to OLS-enabled roles; test using 'Test as role'",
                "Document all OLS assignments in a security catalog (object, role, permission)"
              ],
              tables: [
                {
                  title: "OLS vs RLS Comparison",
                  headers: ["Security Type", "Scope", "Configured In", "Best For"],
                  rows: [
                    ["RLS", "Rows within a table", "Power BI Desktop UI", "Departmental data separation"],
                    ["OLS - Table", "Entire table visibility", "Tabular Editor / XMLA", "Hiding sensitive dimensions/facts"],
                    ["OLS - Column", "Specific columns", "Tabular Editor / XMLA", "PII or financial metrics"]
                  ]
                }
              ]
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
              concept: "The Power BI Admin Portal is the control center for tenant-level governance. Administrators use it to manage security, feature availability, capacity, compliance, and monitoring across the entire organization. Analysts and BI leads should understand its structure so their solutions align with corporate policy.",
              discussion: "The portal is organized into several sections:\n\n- **Tenant settings** – toggle feature availability and scope it to security groups (e.g., Publish to web, external sharing, custom visuals, Copilot, dataflow creation). Settings can be enabled for the entire organization or limited to approved users.\n- **Capacity settings** – manage Premium/PPU capacities, configure workload priorities (datasets, AI, paginated reports), monitor memory/throttling, and pause/resume capacities.\n- **Usage metrics & Activity (audit) logs** – track adoption, identify key reports, monitor exports or sharing, and export logs to Microsoft Purview/Audit or Azure Log Analytics for long-term retention and alerting.\n- **Governance tools** – review endorsed/certified semantic models, manage sensitivity labels (information protection integration), inspect lineage view for dependencies, and manage workspaces, service principals, and deployment pipelines.\n- **Integration & monitoring** – configure OneDrive/SharePoint integration, gateway clusters, embed codes, and service principal profiles. Admin APIs provide automation for inventory, auditing, and operational tasks.\n\nProfessionals collaborate with admins to ensure tenant settings enable necessary features while maintaining compliance. Documenting decisions, maintaining approval workflows, and communicating policy changes are critical to avoid unexpected disruptions for report authors.",
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
              ],
              labs: [
                "With admin rights, navigate to the Admin Portal and review Tenant settings; list three settings currently restricted to specific security groups.",
                "Open Capacity settings for a Premium capacity; document workload allocations and identify any throttled workloads from the last week.",
                "Export 30 days of Activity logs and build a quick Power BI report highlighting top exporters and external shares.",
                "Configure (or review) Log Analytics integration for a capacity and confirm events are streaming into the workspace.",
                "Review Endorsement reports to identify uncertified semantic models used by more than 50 users; create an action plan with data owners.",
                "Document the workspace governance policy (naming convention, owner, capacity) in a shared governance wiki."
              ],
              tables: [
                {
                  title: "Key Tenant Settings Checklist",
                  headers: ["Setting Category", "Example Controls", "Suggested Policy"],
                  rows: [
                    ["Content sharing", "Publish to Web, Share with external users", "Restrict to approved security groups"],
                    ["Content creation", "Create dataflows, use custom visuals", "Enable but limit to certified groups"],
                    ["AI & advanced", "Copilot, Azure Cognitive services integration", "Pilot with limited audience before rollout"],
                    ["Export & download", "Export data, Analyze in Excel", "Allow for analysts; monitor via audit logs"],
                    ["Developer features", "Service principals, embed codes", "Require registration and naming standards"]
                  ]
                },
                {
                  title: "Admin Portal Responsibilities",
                  headers: ["Area", "Primary Owner", "Cadence", "Artifacts"],
                  rows: [
                    ["Tenant settings review", "Power BI admin / Governance board", "Quarterly", "Change log, approval record"],
                    ["Capacity monitoring", "Capacity admin / BI Ops", "Weekly", "Capacity metrics report"],
                    ["Audit & compliance", "Security/Compliance team", "Monthly", "Audit log extracts, alerts"],
                    ["Asset certification", "Data stewards", "Quarterly", "Certified dataset list"],
                    ["Documentation", "BI governance PMO", "Ongoing", "Governance wiki, policy docs"]
                  ]
                }
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
              ],
              labs: [
                "Install Tabular Editor (v2 or v3) and launch it from Power BI Desktop via the External Tools ribbon",
                "Bulk rename columns by prefixing fact table measures with `Fact_` using the Advanced Search + Rename function",
                "Add descriptions to all measures by multi-selecting them and using the Properties pane",
                "Create a Calculation Group shell (no items yet) and save to the PBIX—verify it appears in Desktop",
                "Run a simple C# script to set `FormatString = \"#,0\"` on every measure returning whole numbers",
                "Use Best Practice Analyzer (import BPA rules) to scan the model and fix flagged issues (e.g., missing descriptions, unused columns)",
                "Export model metadata (TMSL) for version control and log the export in your repository",
                "Reopen the PBIX to confirm all changes persisted; document the steps in modeling standards"
              ],
              tables: [
                {
                  title: "Tabular Editor Use Cases",
                  headers: ["Scenario", "Desktop UI?", "Tabular Editor Benefit"],
                  rows: [
                    ["Add calculation groups", "No", "Create time-intelligence templates once, reuse everywhere"],
                    ["Bulk update properties", "Limited", "Select hundreds of objects and change property with one action"],
                    ["Automate documentation", "Manual", "Script exports for measure descriptions, dependencies"],
                    ["Best practice validation", "Manual review", "Use BPA rules to catch issues automatically"],
                    ["Version control metadata", "Difficult", "Export TMSL/JSON for Git tracking"]
                  ]
                }
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
              concept: "Calculation Groups are reusable calculation templates—think of them as 'measures for measures.' One calculation group item can apply logic (YTD, Prior Year, Currency conversion) across every base measure in your model, eliminating duplicate DAX and ensuring consistency.",
              discussion: "Because Power BI Desktop cannot author calculation groups, Tabular Editor (or other XMLA tools) is required. The workflow: create a Calculation Group table, add calculation items with expressions, set precedence if multiple groups exist, and reference measures via `SELECTEDMEASURE()`. Common patterns include: Time intelligence (YTD, QTD, MTD, Prior Year, Variance), Formatting logic (apply currency display based on dimension), KPI states (Actual, Budget, Variance). Calculation groups reduce measure proliferation—five base measures plus five calculations would traditionally require 25 measures; with a calculation group you keep five measures and add five group items. Key considerations: precedence controls the order when multiple groups apply; avoid recursion (calculation items referencing themselves); ensure visuals show calculation item names (use a slicer or place group column on axis). For Excel pivot compatibility, hide the calculation group column by default. Testing should cover visuals, matrix subtotals, and interactions with filter context.",
              keyPoints: [
                "Calculation groups reuse logic across measures via `SELECTEDMEASURE()`",
                "Created using Tabular Editor (Desktop UI does not support creation)",
                "Ideal for time intelligence, currency conversion, KPI states, scenario toggles",
                "Precedence property governs how multiple groups interact",
                "Groups can impact auto-exist—test measure combinations"
              ],
              insiderTips: [
                "Create a 'Measures' table with base measures; keep calculation group column visible only when needed (use dedicated slicer)",
                "Set `FormatStringExpression` on calculation items to adjust number formatting dynamically (e.g., percentages)",
                "Use translation-friendly names for calculation items if your model supports localization",
                "Avoid placing calculation group columns on columns/rows of a matrix when mixing calculations that don’t apply (e.g., both actual and forecast)",
                "Document each calculation item’s DAX and intended usage in model metadata",
                "When combining time-intelligence and currency groups, set precedence carefully (e.g., currency first, time second)",
                "Leverage calculation groups to centralize KPI thresholds (e.g., On Track, At Risk) without duplicating measures"
              ],
              labs: [
                "In Tabular Editor, create a calculation group `Time Intelligence` with items: YTD, QTD, MTD, Prior Year, YoY %",
                "Define DAX for each item using `CALCULATE(SELECTEDMEASURE(), ...)` patterns; include `FormatStringExpression` for YoY %",
                "Create a slicer using the calculation group column; test across multiple base measures (Sales, Margin, Units)",
                "Add a second calculation group `Scenario` (Actual, Budget, Variance) and set precedence to ensure desired evaluation order",
                "Validate visuals in Power BI and Excel Pivot Tables to ensure calculation items behave as expected",
                "Document calculation group logic in a README and screenshot usage examples for the governance wiki"
              ],
              tables: [
                {
                  title: "Common Calculation Group Patterns",
                  headers: ["Pattern", "Example Items", "Notes"],
                  rows: [
                    ["Time Intelligence", "YTD, QTD, MTD, Prior Year, YoY %", "Requires Date table marked as Date table"],
                    ["Currency Conversion", "Local Currency, USD, EUR", "Use conversion table + SELECTEDMEASURE() * Rate"],
                    ["Scenario Analysis", "Actual, Budget, Variance", "Combine with KPI formatting"],
                    ["KPI Status", "On Track, At Risk, Off Track", "Return text or colour measure"],
                    ["Formatting Overrides", "Currency, Percentage, Decimal", "Set FormatStringExpression only"]
                  ]
                }
              ]
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
              concept: "Power Query’s graphical interface is powerful, but the M language unlocks reusable, parameterized, and optimized transformations. Advanced developers write M to parameterize sources, create custom functions, and enforce consistent ETL patterns.",
              discussion: "Key advanced M techniques include: **Parameters** (define RangeStart/RangeEnd, environment toggles, or source paths), **Custom functions** (encapsulate repetitive logic—e.g., cleanse columns, call web APIs), **Reusable query templates** (store in dataflows or shared PBIX), and **Performance tuning** (control query folding, buffer data, handle errors). Core language concepts: everything is an expression, records/lists/tables are the fundamental types, and functions are first-class citizens. Syntax: `let ... in ...` expressions, `each` shorthand for anonymous functions, custom function definitions `MyFunc = (param as type) => ...`, and using `Table.AddColumn` with function invocations. You can expose parameters to end users (Manage Parameters) or reference environment variables for Dev/Test/Prod. Combining functions with `Table.TransformColumns`, `List.Generate`, or `Table.AddColumn` enables complex ETL scenarios not possible in the UI. Structured error handling (`try ... otherwise ...`) keeps refresh robust. Invest time in reading the M library documentation (`#shared`) to discover built-in functions. Scripts can be stored in Git and reused across models or dataflows.",
              keyPoints: [
                "M language enables parameterization, custom functions, and ETL reuse beyond the UI",
                "Functions are first-class; use them to encapsulate transformations and reuse across columns/tables",
                "`let ... in ...` structure, record/list/table types, and `each` syntax are foundational",
                "Parameters support environment management and incremental refresh policy setup",
                "Error handling (`try ... otherwise`) prevents refresh failures on unexpected data"
              ],
              insiderTips: [
                "Use `#shared` in the formula bar to list all available functions for discovery",
                "Create a library query (e.g., `fnTextCleanse`) and copy/paste into other PBIX/dataflows",
                "Leverage `Value.ReplaceType` to add metadata (descriptions, types) to functions for clarity",
                "Keep transformation logic stateless—avoid referencing direct UI steps inside functions for reuse",
                "Document function usage in comments (`//`), especially parameter expectations",
                "Use Git to version-control M scripts—Power Query Editor supports copy/paste of full queries",
                "Test query folding after custom steps (View Native Query); adjust to keep folding intact where possible"
              ],
              labs: [
                "Create parameters `EnvServerDev`, `EnvServerProd` and use a `Switch` query to select source based on a `CurrentEnvironment` parameter",
                "Write a custom function `fnCleanColumn` that trims, uppercases, and replaces nulls; apply it to multiple text columns via `Table.TransformColumns`",
                "Implement `try ... otherwise` to handle missing optional columns when new data files arrive",
                "Build a function that calls a paginated API using `List.Generate` for pagination; convert results to a table",
                "Create a reusable `DateTable` function parameterized by start/end date; invoke it to generate a consistent calendar across models",
                "Measure refresh performance before and after refactoring repeated steps into a function; note improvements"
              ],
              tables: [
                {
                  title: "Essential M Patterns",
                  headers: ["Pattern", "Purpose", "Example Snippet"],
                  rows: [
                    ["Parameter-driven source", "Switch between Dev/Prod", "Source = if CurrentEnv = \"Prod\" then ProdServer else DevServer"],
                    ["Custom cleanse function", "Reusable column cleaning", "fnClean = (txt as nullable text) => if txt = null then \"\" else Text.Upper(Text.Trim(txt))"],
                    ["Try/Otherwise", "Graceful error handling", "try Table.SelectRows(...) otherwise Table.FromRecords({})"],
                    ["List.Generate", "Pagination/loops", "List.Generate(()=>[Page=1], each [Page]<=Max, each [Page]+1, each GetPage([Page]))"],
                    ["Function invocation in table", "Apply function row-wise", "Table.AddColumn(Source, \"Result\", each fnProcess([Column]))"]
                  ]
                }
              ]
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
              concept: "Dataflows Gen2 move Power Query transformations into the cloud, enabling centralized, reusable ETL that feeds multiple datasets, Lakehouses, or Warehouses in Microsoft Fabric. They enforce single-source-of-truth transformations and reduce duplicated prep work in individual PBIX files.",
              discussion: "Gen2 dataflows run on Fabric compute and store results in OneLake (Delta Lake format). You author transformations using the same Power Query experience, but outputs can load to tables in Lakehouse/Warehouse or remain as analytical tables for semantic models. Benefits: shared transformation logic across teams, scheduled refresh independent of semantic models, lineage tracking, and governance (certify, endorse). Typical architecture: Ingest raw data into Lakehouse (raw zone) → transform with dataflow → output curated tables (gold zone) → connect semantic models/reports. Dataflows support incremental refresh and linked entities to reuse outputs across workspaces. They also integrate with deployment pipelines and Git for ALM. Best practices: design modular dataflows (ingest vs transform), document schema, use parameters for source connections, and enforce naming standards. Security: manage workspace permissions and leverage dataflow endorsements. Monitoring occurs via refresh history and Fabric’s monitoring hub.",
              keyPoints: [
                "Dataflows centralize Power Query transformations and store results in OneLake (Delta format)",
                "Gen2 supports loading directly into Fabric Lakehouse/Warehouse tables",
                "Promotes reuse—multiple datasets connect to the same curated tables",
                "Supports incremental refresh, linked entities, and deployment pipelines",
                "Ideal for IT-managed ETL feeding self-service semantic models"
              ],
              insiderTips: [
                "Split dataflows into staging (heavy transformations) and presentation (light shaping) for maintenance",
                "Parameterize source connections to switch Dev/Test/Prod easily",
                "Leverage linked dataflows to avoid duplicating transformations across workspaces",
                "Document lineage using Fabric’s lineage view so analysts understand dependency chain",
                "Use Git integration to version-control dataflow definitions in Fabric",
                "Schedule dataflow refresh before dataset refresh to ensure downstream freshness",
                "Consider cost/compute—plan refresh windows to avoid capacity contention"
              ],
              labs: [
                "Create a Dataflow Gen2 that ingests sales data from an Azure SQL source; store output in a Fabric Lakehouse table",
                "Parameterize server and database names to support Dev/Test/Prod environments",
                "Configure incremental refresh on the dataflow (Store 3 years, Refresh last 30 days) and validate partitions via monitoring",
                "Create a second dataflow that references the curated table (linked entity) and applies business calculations",
                "Connect a Power BI semantic model to the curated Lakehouse table and build a quick report to validate data",
                "Add documentation (description, owner) and endorse the dataflow as Certified; notify consumers of new shared ETL asset",
                "Export the dataflow definition to JSON (or sync with Git) to store in version control"
              ],
              tables: [
                {
                  title: "Dataflow Gen2 Design Guidelines",
                  headers: ["Design Area", "Recommendation", "Benefits"],
                  rows: [
                    ["Layering", "Separate ingest vs transformation flows", "Simpler maintenance, reusable curated layer"],
                    ["Storage destination", "Output to Lakehouse/Warehouse tables", "Native Fabric integration, delta format"],
                    ["Parameters", "Use for environment configuration", "Supports Dev/Test/Prod deployments"],
                    ["Linked entities", "Reuse logic across workspaces", "Eliminates duplication, consistent outputs"],
                    ["Refresh orchestration", "Schedule dataflows before datasets", "Downstream models use fresh data"]
                  ]
                }
              ]
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
              concept: "Continuous Integration/Continuous Deployment (CI/CD) brings discipline to Power BI releases. Deployment Pipelines provide Dev → Test → Prod stages so content is validated and approved before reaching end users, minimizing downtime and surprises.",
              discussion: "Pipelines (available with Premium/PPU) map workspaces to stages. Each deployment produces a diff showing changed reports, models, dataflows, and can copy or merge changes selectively. Typical workflow: developers build in Dev workspace, run automated checks (Best Practice Analyzer, Performance Analyzer logs), then deploy to Test for business sign-off. Once approved, deploy to Prod, optionally keeping different parameter values per stage (e.g., pointing to Prod data sources). Pipelines integrate with Git (Fabric Git integration) to align with broader DevOps, and deployment rules override data source connections, credentials, and parameters per stage. Benefits: consistent releases, rollback ability (redeploy previous stage), and guardrails to separate development content from consumer access. Pipelines support dataflows, datamarts, and semantic models alongside reports. Use tags/comments to document deployments, and automation (Power BI REST APIs or Azure DevOps) to trigger deployments and run smoke tests.",
              keyPoints: [
                "Deployment pipelines formalize Dev → Test → Prod promotion",
                "Diff view highlights changes before deploy; selective deployment is supported",
                "Deployment rules override data sources and credentials per stage",
                "Integrates with Fabric Git and REST APIs for automation",
                "Supports rollback by redeploying prior stage content"
              ],
              insiderTips: [
                "Define workspace naming convention (e.g., `Finance Analytics - Dev/Test/Prod`) aligned with pipeline stages",
                "Use pipeline deployment rules to point Test stage to QA database and Prod stage to production database",
                "Capture performance logs and run regression tests in Test stage before promoting",
                "Leverage pipeline notifications to alert stakeholders when deployments occur",
                "Document release notes in pipeline comments; store in change log",
                "Automate deployments via REST API for alignment with Azure DevOps release pipelines",
                "Regularly review pipeline diff to ensure no unintended changes (deleted reports, overwritten datasets)"
              ],
              labs: [
                "Create a deployment pipeline linking Dev/Test/Prod workspaces; configure deployment rules so Test uses QA data source",
                "Deploy latest content from Dev to Test; review the compare view and capture screenshot of differences",
                "Run functional testing in Test (RLS, performance) and log results; only after sign-off deploy to Prod",
                "Simulate rollback by redeploying Test content back to Dev (undo change) and document the process",
                "Export deployment activity report (REST API or portal) and archive in governance repository",
                "Optional: integrate with Fabric Git; commit workspace changes and trigger pipeline deployment from Git"
              ],
              tables: [
                {
                  title: "Deployment Readiness Checklist",
                  headers: ["Item", "Description", "Status"],
                  rows: [
                    ["Data source connectivity", "Test stage uses QA credentials", "Pending"],
                    ["RLS validation", "View as roles tested in Test stage", "Complete"],
                    ["Performance logs", "Performance Analyzer baseline captured", "Complete"],
                    ["Regression tests", "Key report scenarios validated", "In progress"],
                    ["Release notes", "Changes documented and approved", "Complete"]
                  ]
                }
              ]
            },
          },
          {
            id: "16-2",
            moduleNumber: 16,
            lessonNumber: 2,
            title: "The Future: Microsoft Fabric and OneLake",
            description: "Power BI is now the visualization layer of Microsoft Fabric. Understanding Fabric architecture is critical for designing future-proof analytics solutions.",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Visualizations", "Data Modeling", "Microsoft Fabric"],
            topic: 'Visualizations',
            content: {
              concept: "Fabric unifies data engineering, data warehousing, data science, real-time analytics, and business intelligence under one SaaS umbrella. OneLake—the 'OneDrive for Data'—centralizes storage so every experience (Power BI, Data Factory, Synapse) reads and writes to a single logical lake.",
              discussion: "Fabric introduces experiences: Data Factory (pipelines, dataflows), Synapse Data Engineering (Spark notebooks), Synapse Data Warehousing (SQL-based warehouses), Synapse Real-Time Analytics (Kusto), Data Activator (event triggers), and Power BI. OneLake sits beneath them, storing data as Delta tables with shortcut support to external storage (ADLS, AWS S3). Power BI models can connect directly to Lakehouse/Warehouse tables, eliminating duplication. This changes development patterns: ingest raw data into Lakehouse (bronze), curate with dataflows/spark (silver/gold), surface via Power BI semantic models. Fabric capacities replace classic Premium SKUs, offering dynamic compute scaling. Developers should learn how to create Lakehouses, define shortcuts, use DirectLake mode (query delta tables without import), and orchestrate pipelines that refresh semantic models automatically. Governance spans across Fabric via data lineage, Purview sensitivity labels, and capacity monitoring. The shift requires BI teams to collaborate closely with data engineering, sharing OneLake assets rather than exchanging CSVs.",
              keyPoints: [
                "Fabric is a unified SaaS platform; Power BI is the front-end experience",
                "OneLake stores data in open Delta format accessible by all Fabric workloads",
                "DirectLake enables models to query Delta tables without import, combining speed and freshness",
                "Fabric capacities govern compute; workloads (Lakehouse, Warehouse, Power BI) share the same SKU",
                "Shortcuts and OneLake integration eliminate data silos and duplication"
              ],
              insiderTips: [
                "Adopt medallion architecture (bronze/silver/gold) to structure Lakehouse layers",
                "Use shortcuts to point to existing ADLS data—no need to copy data into OneLake",
                "Monitor capacity metrics to balance Spark jobs, dataflows, and Power BI refresh within Fabric",
                "Plan security with OneLake in mind—same sensitivity labels flow through Power BI reports",
                "Leverage Git integration to manage Lakehouse notebooks, pipelines, and Power BI artifacts together",
                "Experiment with DirectLake for high-volume fact tables and evaluate performance vs Import/DirectQuery"
              ],
              labs: [
                "Create a Lakehouse in Fabric, ingest sample data using Dataflow Gen2, and validate Delta tables in OneLake",
                "Build a shortcut to existing ADLS data and query it from Power BI via DirectLake",
                "Create a Warehouse table, populate with data, and connect Power BI semantic model using Direct Lake mode",
                "Set up an end-to-end pipeline: Dataflow ingest → Lakehouse transform → Semantic model refresh → Power BI report",
                "Enable sensitivity labels in Fabric and confirm they propagate to Power BI reports",
                "Document Fabric architecture decisions (capacities, workspaces, Lakehouse/Warehouse usage) in governance wiki"
              ],
              tables: [
                {
                  title: "Fabric Workload Overview",
                  headers: ["Experience", "Purpose", "Primary Artifacts"],
                  rows: [
                    ["Data Factory", "ETL/ELT pipelines", "Pipelines, Dataflows Gen2"],
                    ["Synapse Data Engineering", "Spark-based transformations", "Notebooks, Jobs"],
                    ["Synapse Data Warehousing", "SQL analytics at scale", "Warehouse tables"],
                    ["Synapse Real-Time Analytics", "Streaming/Kusto analytics", "KQL databases"],
                    ["Power BI", "Semantic models & reports", "Datasets, Reports, Metrics"],
                    ["Data Activator", "Event-driven automation", "Triggers, Conditions"]
                  ]
                }
              ]
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
              discussion: "Power BI sits alongside Power Apps, Power Automate, and Power Virtual Agents within the Power Platform. Integrating them turns dashboards into operational systems: users can write back data, trigger workflows, and manage approvals directly from analytics. Common patterns: **Embedded Power App visual** (embed a canvas app inside a report to collect comments, update Dataverse rows, or submit support tickets), **Power Automate buttons** (use the 'Power Automate for Power BI' visual to run flows—send alerts, create Planner tasks, write records to SharePoint/Dataverse), **Writeback scenarios** (Power App updates a table and a flow refreshes the dataset or notifies stakeholders), and **Cross-tool navigation** (open Power Apps from report bookmarks or embed Power BI tiles inside Power Apps for mobile scenarios). Fire-and-forget flows (e.g., `if measure > threshold → send Teams message`) close the loop between insight and action. Governance requires understanding connectors, data loss prevention (DLP) policies, and license requirements (Power Apps per app plan, Power Automate premium connectors). Testing must cover authentication, RLS context (flows run in service principal context by default), and concurrency.",
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
              ],
              labs: [
                "Embed a Power App in a report: create a canvas app for feedback submission, insert the Power Apps visual, connect to Dataverse/SharePoint, and test writeback",
                "Add the Power Automate for Power BI visual to trigger a flow that sends a Teams alert when a selected data point exceeds threshold",
                "Create an approval flow (Power Automate) that starts from a report button and routes approval to managers, updating status in Dataverse",
                "Build a Power App that consumes a Power BI dataset via Power BI connector and displays the same visuals within a custom mobile app",
                "Document the integration architecture (data sources, connectors, DLP requirements) and store in governance repository",
                "Verify RLS context during embed—ensure flows/actions do not bypass assigned security roles"
              ],
              tables: [
                {
                  title: "Power BI + Power Platform Integration Patterns",
                  headers: ["Pattern", "Tools Used", "Example Use Case"],
                  rows: [
                    ["Writeback form", "Power BI + Power Apps", "Update customer notes from within sales dashboard"],
                    ["Triggered workflow", "Power BI + Power Automate", "Create Planner task when KPI below target"],
                    ["Embedded analytics in app", "Power Apps + Power BI visual", "Field service technicians view metrics inside mobile app"],
                    ["Chatbot guidance", "Power BI + Power Virtual Agents", "Provide natural language guidance based on report context"]
                  ]
                }
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
              discussion: "Embedding requires Azure resources and API fluency. Typical architecture: register an application in Microsoft Entra ID, grant it access to Power BI service APIs (with appropriate delegated or app-only permissions), use service principal or user authentication to acquire tokens, and embed content in a custom app using the Power BI JavaScript SDK. Workspaces used for embedding must be in dedicated capacity (A SKUs for embedded, or P SKUs). Key steps: upload reports to a dedicated workspace, configure embed token generation (either service principal via app owns data or user owns data flow), and implement front-end embed using `powerbi-client` library. Consider multi-tenant scenarios: isolate customers by workspace, use row-level security with EffectiveIdentity, or implement per-customer datasets. Manage refresh via REST APIs or incremental refresh. Admins should monitor capacity load and enforce throttling controls. Licensing: app owns data scenario requires capacity; user owns data requires each user to have Pro/PPU and authenticate individually.",
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
              ],
              labs: [
                "Register an Azure AD application, grant Power BI service API permissions, and create a service principal",
                "Provision an Embedded capacity (A SKU) or assign workspace to Premium capacity for testing",
                "Upload a sample report to a dedicated workspace and use the REST API to generate an embed token (app owns data scenario)",
                "Implement a simple web page using the Power BI JavaScript SDK to embed the report with the token",
                "Configure row-level security and test EffectiveIdentity in embed token generation for per-customer filtering",
                "Set up monitoring for capacity using the Admin API or Azure Monitor to watch for overloads"
              ],
              tables: [
                {
                  title: "Embedding Models",
                  headers: ["Scenario", "Auth Model", "Licensing Requirements", "Notes"],
                  rows: [
                    ["App owns data", "Service principal", "Power BI Embedded (A SKU) or Premium capacity", "Multi-tenant SaaS apps"],
                    ["User owns data", "Delegated user token", "Each user Pro/PPU", "Internal portals with existing licenses"],
                    ["Service principal + RLS", "Service principal with EffectiveIdentity", "Capacity + RLS defined in model", "Per customer security filtering"]
                  ]
                }
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
              ],
              labs: [
                "Create a Push dataset using the REST API and build a simple console app to send simulated sensor values; visualize in a streaming dashboard",
                "Configure a Streaming dataset via Power BI Service, enable historic data analysis, and design a report with a line chart updating in real time",
                "Set up Azure Stream Analytics to read from an Event Hub or IoT Hub and output to Power BI; validate throughput and latency",
                "Design alerts on real-time tiles (e.g., temperature > threshold) and test notifications",
                "Monitor streaming dataset performance via Power BI metrics and adjust batch size/ingest frequency"
              ],
              tables: [
                {
                  title: "Streaming Options Comparison",
                  headers: ["Approach", "Best For", "Pros", "Considerations"],
                  rows: [
                    ["Push dataset", "Small custom apps", "Simple REST API integration", "Limited schema, no automatic storage"],
                    ["Streaming dataset", "Moderate real-time dashboards", "Quick setup in Service", "Limited to certain visuals"],
                    ["Azure Stream Analytics", "Large-scale IoT/event processing", "Scalable, rich transformations", "Requires Azure resources & cost"]
                  ]
                }
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
              ],
              tables: [
                {
                  title: "Copilot Prompt Playbook",
                  headers: ["Goal", "Example Prompt", "Follow-up"],
                  rows: [
                    ["High-level summary", "\"Summarize key drivers on this page\"", "\"Which metric changed the most month over month?\""],
                    ["Explain visual", "\"Explain the revenue by region chart\"", "\"What outliers should I pay attention to?\""],
                    ["Compare segments", "\"Compare profitability between enterprise and SMB customers\"", "\"Why is enterprise higher?\""],
                    ["Identify risk", "\"Highlight any KPIs trending downward\"", "\"What factors contribute to the decline?\""],
                    ["Data quality check", "\"Are there any missing values or anomalies in this dataset?\"", "\"Show the fields affected\""]
                  ]
                }
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
              ],
              tables: [
                {
                  title: "Sample DAX Copilot Prompts",
                  headers: ["Intent", "Prompt", "Suggested Follow-up"],
                  rows: [
                    ["Time intelligence", "\"Create a measure for quarter-to-date revenue\"", "\"Add a comparison against prior quarter\""],
                    ["Ratio calculation", "\"Calculate gross margin percentage using Revenue and Cost\"", "\"Format the output as percentage\""],
                    ["Filter condition", "\"Build a measure that counts orders above $1,000\"", "\"Limit to North America region\""],
                    ["Debug assistance", "\"Explain why this CALCULATE measure returns blank\"", "\"Suggest a fix to handle missing dates\""]
                  ]
                }
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
              ],
              tables: [
                {
                  title: "Report Generation Prompt Examples",
                  headers: ["Use Case", "Prompt", "Refinement"],
                  rows: [
                    ["Executive KPI page", "\"Create an executive dashboard with revenue, margin, and customer retention KPIs\"", "\"Add narrative summary and filter slicers for region\""],
                    ["Trend analysis", "\"Build a page showing monthly sales trends by product line\"", "\"Include a map visual for regional distribution\""],
                    ["Operations monitoring", "\"Make an operations dashboard highlighting open tickets, SLA breaches, and average resolution time\"", "\"Add conditional formatting to highlight SLA breaches\""],
                    ["Marketing insights", "\"Generate a campaign performance page comparing spend vs leads\"", "\"Insert a funnel visual for lead stages\""]
                  ]
                }
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
              concept: "OneLake shortcuts allow Power BI semantic models to reference data stored anywhere in Fabric (or external storage) without copying it. You point a Lakehouse folder to remote data, and Power BI connects through that shortcut using DirectLake or Import, ensuring a single source of truth.",
              discussion: "Shortcuts create a logical pointer inside a Lakehouse to external Delta/Parquet data in OneLake, ADLS, or even S3. They mirror the folder structure but do not duplicate bytes, so large datasets remain in place. Power BI Desktop connects to the Lakehouse or Warehouse, and tables exposed via shortcuts appear alongside native tables. Pairing shortcuts with DirectLake mode lets you query Delta tables in OneLake with in-memory performance. Governance benefits include centralized permissions and lineage. Workflow: in Fabric Lakehouse, add Shortcut → choose destination (OneLake, ADLS Gen2, S3) and folder → confirm schema. Then in Power BI Desktop, use Get Data > Power BI data hub > Lakehouse table, or use SQL endpoint. Considerations: schema changes at source propagate automatically; refresh is unnecessary for DirectLake; RLS/OLS must be enforced at semantic layer; monitor capacity when many models query the same shortcut. This lesson culminates in a capstone project where students create an end-to-end Fabric-integrated solution.",
              keyPoints: [
                "Shortcuts virtualize external data inside Fabric Lakehouse without copying",
                "Power BI models can use shortcuts via DirectLake for low-latency access",
                "Schema updates flow through automatically; no manual refresh for metadata",
                "Security and governance remain centralized in Fabric (OneLake permissions, Purview labels)",
                "Ideal for multi-domain analytics where teams share curated datasets"
              ],
              insiderTips: [
                "Organize Lakehouse folders into bronze/silver/gold zones and create shortcuts only from curated layers",
                "Document shortcut targets and owners—knowing upstream location simplifies troubleshooting",
                "Monitor OneLake access logs to track which reports consume shared data",
                "Use DirectLake where possible; fall back to DirectQuery or Import if transformations are needed",
                "Combine shortcuts with deployment pipelines to ensure Dev/Test/Prod environments point to correct locations",
                "When sharing across tenants, use OneLake external sharing (preview) and shortcuts to avoid duplication"
              ],
              labs: [
                "In Fabric, create a Lakehouse and add a shortcut pointing to curated Delta tables in another workspace",
                "Connect Power BI Desktop to the Lakehouse; verify shortcut tables are available and build visuals with DirectLake",
                "Simulate a schema update (add column) in the source and confirm availability through the shortcut",
                "Apply sensitivity labels in the Lakehouse and ensure they surface in Power BI report",
                "Monitor query performance via DirectLake metrics and document results"
              ],
              tables: [
                {
                  title: "Shortcut Source Options",
                  headers: ["Source", "Supported Format", "Typical Use Case"],
                  rows: [
                    ["OneLake (other workspace)", "Delta tables", "Sharing curated data between domains"],
                    ["Azure Data Lake Storage Gen2", "Parquet/Delta", "Bridging existing lake investments"],
                    ["Amazon S3", "Parquet/Delta", "Multi-cloud data integration"]
                  ]
                }
              ],
              capstoneProject: {
                title: "Capstone Project 3: Fabric-Integrated Analytics Solution",
                description: "Build an end-to-end solution combining Fabric Lakehouse shortcuts, advanced modeling, security, storytelling, performance tuning, and Copilot.",
                requirements: [
                  "Ingest messy source data and build a star schema using Fabric (Lakehouse/Dataflows)",
                  "Use OneLake shortcut to connect Power BI semantic model without duplicating data",
                  "Implement advanced DAX (time intelligence plus one additional complex pattern)",
                  "Configure Dynamic RLS to enforce data security",
                  "Create guided storytelling with bookmarks, drill-through, or custom tooltips",
                  "Run Performance Analyzer, resolve at least one bottleneck, and document before/after metrics",
                  "Leverage Copilot to generate narrative summary embedded in the report"
                ],
                deliverables: [
                  "Published Power BI App or report connecting to Fabric Lakehouse",
                  "5-minute video walkthrough explaining insights, technical architecture, and Copilot narrative"
                ],
                learningOutcome: "Demonstrates mastery across data ingestion, Fabric integration, modeling, security, performance, AI assistance, and storytelling."
              }
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
              concept: "The PL-300 \"Microsoft Power BI Data Analyst\" certification validates end-to-end skills from data preparation to deployment. Understanding the exam blueprint and aligning your study plan ensures a successful attempt.",
              discussion: "PL-300 covers four domains: Prepare Data (20-25%), Model Data (25-30%), Visualize and Analyze Data (25-30%), Deploy and Maintain Assets (20-25%). This course mirrors the blueprint—Part 1 covers data prep (Power Query, dataflows), Part 2 modeling (star schema, DAX), Part 3 visualization/storytelling, and Part 3 governance (Service, security, pipelines). The exam is performance-based: expect case studies, multi-step questions, and drag-and-drop sequences. Microsoft Learn contains official learning paths; practice tests (MeasureUp, Whizlabs) reinforce timing. Candidates should build a hands-on project (capstone) and review exam objectives regularly. During the exam, manage time (approx 100-120 minutes) and flag questions for review. Microsoft occasionally updates the blueprint—monitor the exam page for changes (Fabric topics now included).",
              keyPoints: [
                "PL-300 assesses prepare/model/visualize/deploy skills",
                "This curriculum aligns with exam domains; review references during study",
                "Expect practical scenarios (role-based) rather than theoretical questions",
                "Microsoft updates objectives periodically—check official page before scheduling",
                "Hands-on practice and timed mock exams are critical for success"
              ],
              insiderTips: [
                "Download the Skills Outline PDF and create a checklist to track mastery",
                "Use Microsoft Learn sandbox exercises to practice tasks in a guided environment",
                "Schedule exam when you can dedicate uninterrupted time—avoid last-minute cramming",
                "Review Power BI Service settings, sharing options, and security—they appear frequently",
                "Consider joining study groups or forums (LinkedIn, Reddit) for peer discussion",
                "After passing, maintain skills by tracking monthly updates and retaking key labs"
              ],
              labs: [
                "Map each exam objective to relevant lessons in this course; note any gaps for revision",
                "Complete a timed mock exam (MeasureUp or exam sandbox) and review incorrect responses",
                "Build a one-page 'cheat sheet' summarizing Power Query, DAX, and Service best practices",
                "Set up a study schedule covering all domains over 4-6 weeks"
              ],
              tables: [
                {
                  title: "PL-300 Skills Mapping",
                  headers: ["Exam Domain", "Weight", "Course Coverage"],
                  rows: [
                    ["Prepare data", "20-25%", "Part 1 – Power Query, Dataflows, Parameters"],
                    ["Model data", "25-30%", "Part 2 – Star schema, DAX, Calculation Groups"],
                    ["Visualize & analyze", "25-30%", "Part 1 & 3 – Visual design, storytelling, Copilot"],
                    ["Deploy & maintain", "20-25%", "Part 3 – Service, security, pipelines, governance"]
                  ]
                }
              ]
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
              concept: "\"Mastery\" has different trajectories depending on career goals. Map your next steps to specialized roles—BI Analyst, Data Engineer, BI Developer, Fabric Architect, or Analytics Consultant.",
              discussion: "Role-focused learning accelerates career growth. BI Analysts deepen DAX, storytelling, Copilot usage, and stakeholder engagement. Data Engineers concentrate on Fabric Lakehouse, Dataflows Gen2, M scripting, and orchestration. BI Developers (or Admins) master deployment pipelines, governance, Embedded analytics, and automation via REST APIs. Analytics Consultants broaden soft skills (requirements gathering, communication) and cross-platform knowledge (Power Apps, Automate). Fabric Architects design unified data estates (OneLake, capacities). Each path benefits from certification (PL-300, Fabric certifications, Azure Data Engineer), community participation, and portfolio projects.",
              keyPoints: [
                "Align learning plan with desired role; focus on depth not just breadth",
                "Combine technical skills with communication and governance expertise",
                "Build portfolio projects demonstrating real-world scenarios",
                "Stay engaged with community, conferences, and monthly updates",
                "Consider complementary certifications (Azure, Fabric, Power Platform)"
              ],
              insiderTips: [
                "Set quarterly learning goals (e.g., master Calculation Groups, complete Fabric dataflow project)",
                "Maintain a personal knowledge base (OneNote/Notion) with patterns and script snippets",
                "Attend Power Platform community calls or local user groups for networking",
                "Contribute to open-source templates or write technical blogs to build reputation",
                "Pair with mentors—shadow senior architects to understand enterprise decision-making"
              ],
              labs: [
                "Create a career roadmap table listing roles, required skills, and resources; pick one focus area for next month",
                "Build or update a portfolio project showcasing recent advanced techniques (Fabric integration, Copilot, RLS)",
                "Join a community forum (Power BI Community, LinkedIn groups) and participate in one discussion per week"
              ],
              tables: [
                {
                  title: "Role-Based Learning Path",
                  headers: ["Role", "Focus Areas", "Recommended Next Steps"],
                  rows: [
                    ["BI Analyst", "Advanced DAX, storytelling, Copilot narratives", "Publish monthly insight reports, present to stakeholders"],
                    ["Data Engineer", "Fabric Lakehouse, Dataflows Gen2, M functions", "Build automated ingestion pipelines, learn Spark/SQL"],
                    ["BI Developer/Admin", "Governance, CI/CD, Embedded, REST APIs", "Implement deployment pipelines, automate workspace auditing"],
                    ["Analytics Consultant", "Requirements gathering, workshop facilitation, Power Platform integration", "Design end-to-end solutions, document best practices"]
                  ]
                }
              ]
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
              ],
              labs: [
                "Block 45 minutes on your calendar next month titled \"Power BI Update Review\" and populate it with links to the latest blog and release notes",
                "Enable at least one preview feature in Power BI Desktop (Options > Preview features) and document observations",
                "Subscribe to two Power BI community channels or newsletters and summarize takeaways in a personal knowledge base",
                "Join the Power BI Community forum and answer or ask one question related to a recent update"
              ],
              tables: [
                {
                  title: "Stay-Current Resource Guide",
                  headers: ["Resource", "Frequency", "Action"],
                  rows: [
                    ["Power BI Blog", "Monthly", "Read release summary; note relevant features"],
                    ["Power BI YouTube (Guy in a Cube, SQLBI)", "Weekly", "Watch feature deep dives"],
                    ["Power BI Community / Reddit", "Ongoing", "Discuss updates, troubleshoot issues"],
                    ["Microsoft Learn updates", "Quarterly", "Review new modules tied to Fabric/Power BI"],
                    ["Internal newsletter", "Monthly", "Share relevant updates with stakeholders"]
                  ]
                }
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
              ],
              labs: [
                "Download the provided DAX, M, and visualization references; store them in a version-controlled folder",
                "Create a personal cheat sheet by adding custom patterns encountered in your projects",
                "Catalog sample datasets and solution PBIX files with descriptions so you can reuse them for demos",
                "Share the visualization checklist with your team and incorporate it into your report review process"
              ],
              tables: [
                {
                  title: "Resource Library Blueprint",
                  headers: ["Folder", "Contents", "Usage"],
                  rows: [
                    ["DAX Reference", "Formula guide, pattern library, calculation group templates", "Measure creation, troubleshooting"],
                    ["Power Query", "M tips sheet, reusable functions, dataflow definitions", "ETL scripting, data prep"],
                    ["Design Guides", "Visualization checklist, color palettes, layout templates", "Report review, stakeholder presentations"],
                    ["Sample Projects", "Capstone PBIX files, before/after versions", "Portfolio, demos, onboarding new teammates"],
                    ["Video Tutorials", "Lesson recordings, community webinars", "Refresher training, team share-outs"]
                  ]
                }
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
              ],
              labs: [
                "Update your LinkedIn Projects section with Capstone 1-3, including summary, skills, and screenshots",
                "Add PL-300 certification badge to Certifications section and link to Microsoft credential",
                "Write a LinkedIn post summarizing your master project and tag relevant skills/hashtags",
                "Request at least one recommendation from a mentor or peer referencing your Power BI expertise"
              ],
              tables: [
                {
                  title: "Portfolio Checklist",
                  headers: ["Item", "Description", "Status"],
                  rows: [
                    ["Project summary", "Business-centric description with quantified impact", "To do"],
                    ["Screenshots/video", "High-resolution visuals or Loom walkthrough", "In progress"],
                    ["Skills/keywords", "Power BI, DAX, Fabric, RLS, Storytelling", "Complete"],
                    ["Certification badge", "PL-300 (and others) linked and visible", "Complete"],
                    ["Recommendations", "At least two endorsements from peers/managers", "To do"]
                  ]
                }
              ]
            },
          },
        ],
      },
      {
        id: "module-19",
        title: "Enterprise Excellence Playbook",
        description: "Advanced strategies, automation, and real-world patterns for senior Power BI leaders",
        moduleNumber: 19,
        lessons: [
          {
            id: "19-1",
            moduleNumber: 19,
            lessonNumber: 1,
            title: "Enterprise Architecture Patterns",
            description: "Designing scalable, multi-region architectures combining Fabric, DirectLake, and legacy systems",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Microsoft Fabric", "Data Modeling", "Performance", "Security"],
            topic: 'Data Modeling',
            content: {
              concept: "Senior practitioners design architecture that scales across regions, business units, and workloads. This lesson catalogs proven patterns that combine Fabric Lakehouse, DirectLake, data marts, and existing SQL warehouses into cohesive analytics platforms.",
              discussion: "Patterns include: **Hub-and-Spoke Fabric** (central governance workspace feeding spoke datasets), **Dual-mode DirectLake + Import** (DirectLake for near real-time aggregates, Import for highly curated snapshots), **Hybrid Fabric + On-Prem** (shortcuts to ADLS/SQL plus gateway access for legacy ERP), and **Multi-region deployment** (Geo-distributed capacities with traffic manager). Architectural considerations: latency, data sovereignty, backup/DR, cross-tenant sharing, and metadata consistency. Use Purview to inventory assets, enforce sensitivity labels end-to-end, and coordinate with Azure networking team for Private Link/Firewall rules. Provide reference diagrams, RACI for architecture ownership, and escalation paths.",
              keyPoints: [
                "Select architecture patterns based on latency, governance, and data residency requirements",
                "Fabric shortcuts and DirectLake reduce duplication while keeping central governance",
                "Plan for multi-region resilience: capacity failover, workspace replication, consistent deployment pipelines",
                "Document architecture decisions with clear ownership and runbooks"
              ],
              insiderTips: [
                "Maintain an architecture decision record (ADR) library documenting alternatives and rationale",
                "Use Fabric deployment pipelines to promote Lakehouse schemas alongside semantic models",
                "Define naming conventions for capacities, workspaces, Lakehouses, and shortcuts",
                "Partner with security to align Purview labels and sensitivity policies across tools"
              ],
              labs: [
                "Create an architecture diagram showing hub Lakehouse, spoke semantic models, and DirectLake connections for two business domains",
                "Document ADR for choosing DirectLake vs Import for a global sales dataset",
                "Draft a RACI chart assigning responsibilities for Lakehouse, semantic model, and app ownership"
              ],
              tables: [
                {
                  title: "Architecture Pattern Comparison",
                  headers: ["Pattern", "Best For", "Strengths", "Watchouts"],
                  rows: [
                    ["Hub-and-Spoke Fabric", "Large enterprises with shared data products", "Central governance, reusable curated layer", "Requires strong data stewardship"],
                    ["Dual-mode DirectLake + Import", "Near real-time KPIs + curated snapshots", "Performance + consistency", "Manage refresh orchestration carefully"],
                    ["Hybrid Fabric + On-Prem", "Gradual cloud migration", "Leverages existing investments", "Gateway performance and security complexity"],
                    ["Multi-region Fabric", "Global organizations", "Resilience, localized performance", "Higher cost, governance synchronization"]
                  ]
                }
              ]
            },
          },
          {
            id: "19-2",
            moduleNumber: 19,
            lessonNumber: 2,
            title: "Automation with REST APIs and PowerShell",
            description: "Automating governance, deployment, and monitoring using Power BI REST APIs, PowerShell, and DevOps",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Automation", "Governance", "Power BI Service", "DevOps"],
            topic: 'Power BI Service',
            content: {
              concept: "Enterprise teams automate repetitive tasks: workspace provisioning, RLS updates, refresh monitoring, and usage reporting. Power BI REST APIs plus PowerShell/Azure DevOps pipelines deliver repeatable governance.",
              discussion: "Key automation scenarios: **Workspace lifecycle** (create/assign capacities via REST), **Dataset refresh and data source credentials**, **Security automation** (assign RLS role members from HR systems), **Deployment automation** (trigger pipeline stages via API), and **Monitoring** (extract activity events, refresh logs, capacity metrics). Tools: PowerShell modules (`MicrosoftPowerBIMgmt`), Azure Functions for scheduled jobs, Logic Apps for no-code automation, DevOps YAML pipelines. Ensure service principals have least privilege, maintain client secret rotation, and log automation actions. Provide example scripts for dataset refresh monitoring and workspace inventory.",
              keyPoints: [
                "Use service principals with delegated permissions to automate safely",
                "PowerShell modules simplify REST API calls for administrators",
                "Automate logging and alerts to detect failures promptly",
                "Document automation scripts and schedule secret rotation"
              ],
              insiderTips: [
                "Store automation scripts in Git with CI/CD; run Pester tests before deploying",
                "Centralize secrets in Azure Key Vault; inject into pipelines at runtime",
                "Tag workspaces/capacities to group usage metrics and chargeback",
                "Publish internal automation cookbook with approved scripts"
              ],
              labs: [
                "Use PowerShell to list all workspaces, capacities, and owners; export to CSV",
                "Automate dataset refresh monitoring by calling the Refresh History API and posting alerts to Teams",
                "Create an Azure DevOps pipeline that deploys a PBIX file via REST API to a Test workspace"
              ],
              tables: [
                {
                  title: "Automation Use Cases",
                  headers: ["Scenario", "API Endpoint / Tool", "Outcome"],
                  rows: [
                    ["Workspace provisioning", "POST /groups", "Standardized workspace creation with tags"],
                    ["Security synchronization", "POST /datasets/{id}/Default.UpdateRls", "Keeps RLS memberships aligned with HR"],
                    ["Refresh monitoring", "GET /datasets/{id}/refreshes", "Proactive alerts for failures"],
                    ["Pipeline deployment", "POST /pipelines/{id}/deploy", "Trigger Dev→Test→Prod programmatically"]
                  ]
                }
              ]
            },
          },
          {
            id: "19-3",
            moduleNumber: 19,
            lessonNumber: 3,
            title: "Monitoring & Cost Optimization",
            description: "Building observability and financial governance across Fabric capacities and Power BI workloads",
            duration: 15,
            difficulty: 'advanced',
            tags: ["Performance", "Governance", "Microsoft Fabric", "Power BI Service"],
            topic: 'Business Intelligence',
            content: {
              concept: "Observability ensures reliability. Senior leaders track capacity utilization, refresh times, query performance, and license usage; they also manage cost through chargeback models.",
              discussion: "Use Azure Monitor / Log Analytics to ingest Activity events, dataset refresh logs, and Fabric capacity metrics. Build governance dashboards: capacity CPU/memory, dataset refresh duration trends, DirectQuery query latency. Implement cost allocation by tagging workspaces and capacities, and publishing monthly chargeback reports. Combine metrics with Service health alerts to anticipate throttling. Tactics for optimization: incremental refresh, aggregations, query folding enforcement, scheduling refresh windows, applying auto-pause to embedded capacities, and trimming unused artifacts.",
              keyPoints: [
                "Stream activity and capacity metrics to Log Analytics for analysis",
                "Create governance dashboards showing usage, performance, and cost by workspace",
                "Use tagging and metadata to attribute costs to business units",
                "Regularly archive or delete unused datasets/reports to reduce load"
              ],
              insiderTips: [
                "Automate monthly governance review meetings with curated dashboards",
                "Set alert rules for capacity overload (e.g., CPU > 80% sustained)",
                "Combine dataset refresh history with incremental refresh policy audits",
                "Offer optimization playbooks to business units based on telemetry findings"
              ],
              labs: [
                "Configure Log Analytics connection for a Premium capacity and verify dataset refresh logs are captured",
                "Build a Power BI governance report summarizing refresh durations, failure rates, and capacity utilization by workspace",
                "Draft a cost allocation worksheet mapping workspace tags to business units and estimated monthly spend"
              ],
              tables: [
                {
                  title: "Monitoring Metrics Matrix",
                  headers: ["Metric", "Source", "Purpose"],
                  rows: [
                    ["Capacity CPU/memory", "Fabric metrics / Log Analytics", "Detect throttling risk"],
                    ["Dataset refresh duration", "Activity Log / Refresh history", "Identify long-running models"],
                    ["Query latency", "Power BI Performance Analyzer in Service", "Improve user experience"],
                    ["License/usage counts", "Admin APIs", "Optimize licensing strategy"]
                  ]
                }
              ]
            },
          },
          {
            id: "19-4",
            moduleNumber: 19,
            lessonNumber: 4,
            title: "Real-World Case Study Playbook",
            description: "Applying the Master toolkit to real enterprise scenarios with templates and success metrics",
            duration: 20,
            difficulty: 'advanced',
            tags: ["Storytelling", "Governance", "Microsoft Fabric", "Performance"],
            topic: 'Business Intelligence',
            content: {
              concept: "Senior Power BI professionals translate techniques into business outcomes. This playbook offers reusable blueprints for four industry scenarios with success metrics, stakeholder maps, and change management tips.",
              discussion: "Case studies: **Global Supply Chain Control Tower** (DirectLake KPIs, anomaly detection, DevOps pipeline), **Financial Planning & Analysis** (calc groups, dynamic RLS for cost centers, Copilot narratives), **Healthcare Quality Dashboard** (sensitivity labels, HIPAA compliance, incremental refresh), **Retail Customer 360** (Power Platform integration for customer follow-up, streaming kiosks). Each includes stakeholders, data sources, architecture, security, performance tuning, and adoption strategies. Provide templates: project charter, backlog, release communication, KPI definitions. Emphasize change management: executive sponsorship, training plans, support queues.",
              keyPoints: [
                "Use case-specific blueprints accelerate delivery and stakeholder trust",
                "Define success metrics (accuracy, adoption, decision cycle time) upfront",
                "Combine technical excellence with change management and training"
              ],
              insiderTips: [
                "Maintain a repository of case study templates to jumpstart new engagements",
                "Align each case study with business OKRs to demonstrate value",
                "Create playbooks for support (FAQ, training videos, office hours)",
                "Capture lessons learned and feed into governance board"
              ],
              labs: [
                "Select one case study and draft a project charter including goals, stakeholders, timeline, and success metrics",
                "Create a template release plan covering communication, training, and support for go-live",
                "Design a storytelling outline ensuring each KPI ties to business outcomes and executive questions"
              ],
              tables: [
                {
                  title: "Case Study Snapshot",
                  headers: ["Scenario", "Key Features", "Success Metrics"],
                  rows: [
                    ["Supply Chain Control Tower", "DirectLake KPIs, anomaly detection, DevOps pipeline", "Reduced stock-outs, faster exception resolution"],
                    ["FP&A Cockpit", "Calc groups, dynamic RLS, Copilot narratives", "Faster forecasting cycles, higher executive adoption"],
                    ["Healthcare Quality", "Sensitivity labels, HIPAA compliance checklist, incremental refresh", "Compliance adherence, proactive alerts"],
                    ["Retail Customer 360", "Power Apps embed, streaming datasets, segmentation", "Improved NPS, increased upsell conversions"]
                  ]
                }
              ]
            },
          }
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
