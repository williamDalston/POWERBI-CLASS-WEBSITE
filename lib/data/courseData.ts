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
              concept: "This lesson positions Power BI within its competitive landscape to establish why it is a critical tool to learn",
              discussion: "The choice of a BI tool is not purely technical; it is strategic",
            },
          },
        ],
      },
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
              concept: "Power BI is not a single program but a collection of software services, apps, and connectors that work together",
              discussion: "A student's foundational mental model must include these three components and their interactions (including cloud vs. on-premises options 10):Power BI Desktop: A free, standalone Windows application.12 This is the primary \"authoring\" tool. All development—connecting to data, transforming, modeling, and building reports—happens here.10Power BI Service: The cloud-based Software-as-a-Service (SaaS) offering.12 This is the \"collaboration and sharing\" hub. Reports from Desktop are published to the Service to be shared, collaborated on, and assembled into dashboards.10Power BI Mobile: Native apps for iOS and Android devices.22 This is the \"consumption\" tool, allowing users to access and interact with their reports and dashboards on the go",
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
              concept: "When connecting to a data source, the user must choose how the data is accessed. This choice has profound and lasting implications for performance, data freshness, and their trade-offs",
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
            tags: ["Power BI Fundamentals"],
            topic: 'Business Intelligence',
            content: {
              concept: "Applying the most common steps to clean messy data",
              discussion: "Using a sample dataset, this lab will cover:Choosing and Removing ColumnsFiltering Rows (e.g., removing null or blank values) 38Sorting Data\"Use First Row as Headers\" (promoting headers)",
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
              concept: "Fixing \"dirty\" data to make it usable for analysis",
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
              concept: "Restructuring data to be suitable for analysis",
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
              concept: "Using Power Query's UI to perform more advanced logic",
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
              discussion: "Introduce the concept of parameters to easily change inputs like a file path or a start date, making the query reusable",
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
              concept: "Combining multiple tables (queries) into a single, unified table.13 The distinction between these two operations is fundamental",
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
            description: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types",
            duration: 10,
            difficulty: 'beginner',
            tags: ["Visualizations"],
            topic: 'Visualizations',
            content: {
              concept: "The \"Fields\" pane contains the data tables and columns, while the \"Visualizations\" pane contains the chart types",
              discussion: "The core workflow for building a report is: 1. Select a visual type (e.g., Bar chart) from the Visualizations pane. 2. Drag data fields from the Fields pane into the visual's \"wells\" (e.g., X-axis, Y-axis, Legend)",
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
            topic: 'Data Modeling',
            content: {
              concept: "Building the most common and effective chart types",
              discussion: "This lab will guide students to build:Bar/Column Chart: For categorical comparisons (e.g., Sales by Category).Line Chart: For trends over time (e.g., Sales by Month).Pie/Treemap: For part-to-whole relationships.Map: For visualizing geographical data (e.g., Sales by State)",
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
              discussion: "Use the \"Card\" visual to display a large, single number like \"Total Sales\".50 Briefly introduce the \"KPI\" and \"Gauge\" visuals, which are designed to track a metric against a target or goal",
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
              concept: "Using the Key Influencers visual to understand what factors drive a specific metric (e.g., \"What influences a customer to churn?\").55Lab: Use the Key Influencers visual to analyze what factors contribute to \"High Profit\" vs. \"Low Profit\" in the sales data",
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
              concept: "Using the Decomposition Tree to perform root-cause analysis by breaking down a measure across multiple dimensions in a flexible, ad-hoc way.Lab: Create a Decomposition Tree to allow users to dynamically drill down into \"Total Sales\" by Region, then Category, then Sub-Category, to find the source of high or low sales",
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
              concept: "Using the built-in AI features on line charts to automatically detect anomalies (unexpected spikes or dips) and to generate a time-series forecast.Lab: Apply Anomaly Detection to the \"Sales over Time\" line chart to spot sales outliers. Then, use the Forecasting feature to predict the next 3 months of sales.Capstone Project 2: Intermediate Interactive Sales DashboardProject Brief: 122Dataset: A proper relational dataset provided as multiple CSVs or a small database (e.g., Fact_Sales, Dim_Product, Dim_Customer, Dim_Date).5Task 1 (Model): Load all tables. In the Model View, manually create the relationships to build a perfect Star Schema. Disable \"Autodetect.\" 58Task 2 (DAX): Create a 'Measures' table to house all calculations. Write 5-7 DAX measures, which must include:Total Sales (using SUMX) 83Sales YTD 99Sales PY 103Sales YoY %% of Total Category Sales (using CALCULATE and ALL) 96Task 3 (Visualize & Storytell): Build a multi-page report:Page 1 (Summary): A high-level overview with key KPIs and charts.Page 2 (Details): A detailed breakdown page.Configure Drill-through from the summary chart on Page 1 to the detail on Page 2.110Use Bookmarks and buttons on Page 1 to toggle the visuals between a \"Sales\" view and a \"Profit\" view.49Implement Conditional Formatting on a table to show all negative profit values in red.115Include one AI Visual (e.g., Key Influencers) to explain \"Total Profit.\" 55Learning Outcome: The student has demonstrated mastery of the core \"Analyst\" workflow. They can model relational data, write sophisticated DAX, and build a user-friendly, interactive report that tells a story.Part 3: The Power BI Master – Enterprise and Administration",
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
              concept: "In the Power BI Service, Reports and Dashboards are distinct, and the terms are not interchangeable. A Dashboard is a feature unique to the Service",
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
              concept: "Keeping the data in an \"Import\" model fresh in the Power BI Service",
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
              concept: "A \"Master\" must build fast, efficient reports. The first step is diagnostics, using the built-in Performance Analyzer",
              discussion: "Found in the Optimize ribbon in Power BI Desktop",
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
              concept: "A summary of how to fix the problems identified",
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
