import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const App = () => {

  const projects = [
    {
      title: "Project 01",
      description: (
        <div>
          <h3 className="font-bold text-lg sm:text-2xl mb-1">
            Email & Phone Extraction Automation
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-4">
            Large Scale Contact Extraction Pipeline
          </p>
          <p className="text-xs text-slate-300 mb-5">
            Python • Regex • MySQL • GitPython • Automation
          </p>
          <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li>• Automated end-to-end extraction of emails, phone numbers, and organizations from thousands of PDF text files stored on GitHub.</li>
            <li>• Used GitPython to automatically clone specific GitHub folders — zero manual file handling required.</li>
            <li>• Generated structured JSON outputs and inserted extracted contacts directly into MySQL database via a single <code className="text-blue-300">run_all.py</code> command.</li>
            <li>• Built full pipeline: GitHub Clone → File Preprocessing → Regex Extraction → JSON Conversion → MySQL Storage.</li>
            <li>• Solved real-world tender document processing problem — ensuring accuracy, speed, and scalability with robust error handling.</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/GENCFYeVmbE"
    },
    {
      title: "Project 02",
      description: (
        <div>
          <h3 className="font-bold text-lg sm:text-2xl mb-1">AI Agent R10528</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-4">Autonomous AI Research Assistant</p>
          <p className="text-xs text-slate-300 mb-5">Python • NLP • AI Agents</p>
          <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li>• Handle 5+ URLs or process 5+ documents simultaneously.</li>
            <li>• Personalization support – customize AI responses based on your preferences.</li>
            <li>• Deep thinking and advanced search options enabled.</li>
            <li>• Built-in voice assistance – no need to type prompts, just speak.</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/WvezKtp8z_w"
    },
    {
      title: "Project 03",
      description: (
        <div>
          <h3 className="font-bold text-lg sm:text-2xl mb-1">Scalable E-Commerce Platform</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-4">Microservices Based E-Commerce Architecture</p>
          <p className="text-xs text-slate-300 mb-5">Python • React • Docker • CI/CD • AWS</p>
          <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li>• Easy to scale and maintain with a microservices architecture.</li>
            <li>• Built responsive frontend using React with Django backend.</li>
            <li>• Containerized services using Docker and implemented CI/CD pipelines.</li>
            <li>• Integrated recommendation system using Content-Based filtering with machine learning.</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/iXKHKb7xQHE"
    },
    {
      title: "Project 04",
      description: (
        <div>
          <h3 className="font-bold text-lg sm:text-2xl mb-1">Sentiment Analysis MLOps Pipeline</h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-4">Production Ready Machine Learning Workflow</p>
          <p className="text-xs text-slate-300 mb-5">Python • Docker • MLflow • CI/CD • AWS</p>
          <ul className="space-y-2 text-slate-300 text-xs sm:text-sm">
            <li>• Fully focused on building a robust MLOps pipeline for sentiment analysis.</li>
            <li>• Implemented experiment tracking and model management with MLflow.</li>
            <li>• Containerized training and inference services using Docker.</li>
            <li>• Automated CI/CD deployment pipeline on AWS infrastructure.</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/owW5fdBvuxc"
    }
  ]

  const experience = [
    {
      role: "Data Analyst",
      date: "Mar 2025 – Mar 2026",
      company: "Hackveda Solutions",
      points: [
        "Built automated ETL pipelines using Python, GitPython, and MySQL to extract structured data from GitHub repositories and push it to databases with zero manual effort via a single run_all.py command.",
        "Led Spinny annotation projects, managing 120+ interns/day (30 avg. active) and delivering 13K+ annotations/day (Project-1) and 3K annotations/day avg. (Project-2).",
        "Provisioned and managed AWS EC2 instance handling up to 1,000 concurrent users with 1 TB storage, used by annotators for project execution and data management.",
        "Mentored interns in Python & Data Analysis through real-world, production-oriented projects focused on automation and data engineering.",
      ]
    }
  ]

  const githubLinks = [
    {
      name: "GitHub-to-Database Automation Pipeline",
      desc: "End-to-end pipeline extracting emails, phones & orgs from GitHub-stored PDF files into MySQL via a single command.",
      tags: ["Python", "Regex", "GitPython", "MySQL"],
      url: "https://github.com/shubhamkummarrr/Extract-Emails-from-Files",
      icon: "⚡"
    },
    {
      name: "Urban Housing Analysis — PMAY Bihar",
      desc: "Power BI analytics of fund allocation, completion gaps, and SC/ST beneficiary distribution across 38 Bihar districts.",
      tags: ["Python", "Power BI", "EDA", "Data Cleaning"],
      url: "https://github.com/shubhamkummarrr/Urban-Housing-Analysis-PMAY-Bihar-",
      icon: "📊"
    },
    {
      name: "Sentiment Analysis MLOps Pipeline",
      desc: "Production-grade ML pipeline with MLflow, DVC, Docker, GitHub Actions CI/CD and AWS EKS deployment.",
      tags: ["MLflow", "Docker", "AWS EKS", "CI/CD"],
      url: "https://github.com/shubhamkummarrr",
      icon: "🚀"
    },
    {
      name: "AI Research Assistant Agent",
      desc: "Multi-modal AI agent processing 5+ URLs/docs simultaneously with voice interaction and DeepSeek API.",
      tags: ["Python", "Streamlit", "DeepSeek API", "NLP"],
      url: "https://github.com/shubhamkummarrr",
      icon: "🤖"
    },
    {
      name: "Animiya — Anime Social Platform",
      desc: "Full-stack social platform with TF-IDF content-based anime recommendation engine and JWT auth.",
      tags: ["React", "Django", "Scrapy", "TF-IDF"],
      url: "https://github.com/shubhamkummarrr",
      icon: "🎌"
    },
    {
      name: "Scalable E-Commerce Platform",
      desc: "Microservices e-commerce app with React frontend, Django backend, Docker, CI/CD and ML recommendation system.",
      tags: ["React", "Docker", "AWS", "ML"],
      url: "https://github.com/shubhamkummarrr",
      icon: "🛒"
    },
  ]

  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close menu after navigation
  }

  const nextProject = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentProject((prev) => prev === 0 ? projects.length - 1 : prev - 1)
  }

  const GitHubIcon = () => (
    <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 min-h-screen">

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/75 via-slate-950/40 to-black/75"></div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-10">

        {/* Resume button — fixed top bar, never overlaps photo */}
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800/50">
          <nav className="hidden lg:flex space-x-4 sm:space-x-6">
            <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors">
              Experience
            </button>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-slate-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <a
            href="/Shubham Resume.pdf"
            download
            className="px-3 py-1.5 sm:px-5 sm:py-2 rounded-full bg-blue-500 text-white text-xs sm:text-sm font-semibold hover:bg-blue-400 transition whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-slate-900/95 backdrop-blur-sm z-40 flex flex-col pt-20 px-6"
            >
              <button
                onClick={() => scrollToSection('home')}
                className="text-slate-300 hover:text-white text-lg font-medium py-3 border-b border-slate-700 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-white text-lg font-medium py-3 border-b border-slate-700 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-white text-lg font-medium py-3 border-b border-slate-700 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-slate-300 hover:text-white text-lg font-medium py-3 transition-colors"
              >
                Experience
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <img
          src="photo.jpg"
          className="w-28 h-36 sm:w-40 sm:h-52 md:w-48 md:h-60 rounded-[40%] mb-4 shadow-lg object-cover mt-8"
          alt="Shubham Kumar"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Shubham Kumar</h1>

        <p className="text-sm sm:text-lg md:text-xl text-slate-300 mt-2 px-2">
          Data Analyst • ETL & Automation • SQL & Python
        </p>

        <p className="text-xs sm:text-sm md:text-base text-slate-400 mt-3 max-w-2xl px-2 leading-relaxed">
          I build end-to-end data systems — from automated extraction pipelines and SQL-driven analysis
          to Power BI dashboards and production-ready workflows that turn raw data into actionable decisions.
        </p>

        <p className="text-xs text-slate-500 mt-2 px-4">
          Python • SQL • Power BI • ETL Pipelines • Data Cleaning • Automation • MySQL
        </p>
      </section>

      {/* PIPELINE */}
      <section className="py-10 sm:py-12 text-center px-4">
        <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-6">End-to-End Data Workflow</h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-3xl mx-auto leading-relaxed">
          Data Collection → Cleaning & Transformation → SQL Analysis →
          Visualization & Dashboards → Automation → Insights
        </p>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-5 sm:mb-8">About Me</h2>
        <p className="text-slate-300 text-sm sm:text-lg leading-relaxed text-left">
          I specialize in building complete data pipelines — from collecting raw data using APIs and
          automation scripts to cleaning, transforming, and analyzing it with Python and SQL.
          <br /><br />
          My work focuses on delivering actionable insights through Power BI dashboards, automating
          repetitive data workflows, and building scalable ETL systems that run without manual intervention.
          <br /><br />
          I've worked on government dataset analysis (PMAY), automated contact extraction pipelines
          processing thousands of files, and production ML workflows — all with a focus on accuracy,
          speed, and real business impact.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-slate-800 py-12 sm:py-20">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-2 sm:mb-4">Skills</h2>
        <p className="text-center text-slate-400 mb-8 sm:mb-12 max-w-xl mx-auto text-xs sm:text-sm px-4">
          Core toolkit for Data Analyst roles — from raw data to insight delivery.
        </p>
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-10 px-4 sm:px-6">
          {[
            { color: "border-blue-500", title: "Data Analysis & SQL", text: "SQL (MySQL — queries, joins, aggregations, subqueries, window functions), Exploratory Data Analysis (EDA), Statistical Analysis, Hypothesis Testing, Python (Pandas, NumPy)" },
            { color: "border-green-500", title: "Data Cleaning & Transformation", text: "Data Wrangling, Missing Value Treatment, Outlier Detection, Feature Engineering, ETL Pipeline Development, Large-Scale Data Preprocessing" },
            { color: "border-yellow-500", title: "Data Visualization & Reporting", text: "Power BI (Dashboards, DAX, Slicers, KPIs), Matplotlib, Seaborn, Plotly, Storytelling with Data, Business Reporting" },
            { color: "border-gray-400", title: "Automation & Data Pipelines", text: "Python Automation Scripts, ETL Workflows, Regex-based Extraction, GitPython, Scheduled Task Pipelines, End-to-End Hands-free Processing" },
            { color: "border-red-500", title: "Machine Learning (Supporting)", text: "Scikit-learn, Classification & Regression Models, NLP (Sentiment Analysis), Model Evaluation & Metrics, MLflow for Experiment Tracking" },
            { color: "border-purple-500", title: "Tools & Infrastructure", text: "MySQL, AWS EC2, Docker, Git & GitHub, CI/CD Pipelines, Jupyter Notebook, VS Code" },
          ].map((s, i) => (
            <div key={i} className={`border-l-4 ${s.color} pl-4 sm:pl-6`}>
              <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2">{s.title}</h3>
              <p className="text-slate-300 text-xs sm:text-base">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-12 sm:py-20 bg-slate-900/80 backdrop-blur-sm">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Projects</h2>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">

          {/* PMAY */}
          <section className="px-4 sm:px-6 py-8 sm:py-12 bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-100 leading-snug">
                Housing Data Analysis of PMAY (Pradhan Mantri Awas Yojana)
              </h1>
              <a href="https://github.com/shubhamkummarrr/Urban-Housing-Analysis-PMAY-Bihar-" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">
                View on GitHub →
              </a>
              <p className="text-slate-300 mt-2 text-xs sm:text-base">High-impact Power BI analytics of fund allocation and beneficiary trends.</p>
              <p className="mt-3 text-slate-300 text-xs sm:text-base leading-relaxed">
                Pradhan Mantri Awas Yojana (PMAY) is a government initiative to provide affordable housing to
                economically weaker sections of society. This analysis examines fund allocation, beneficiary
                distribution, and housing completion trends using Power BI to identify key patterns and potential implementation gaps.
              </p>
            </div>

            <div className="mb-5">
              <h2 className="text-sm sm:text-lg font-semibold text-slate-100 mb-2">Tools Used</h2>
              <div className="flex flex-wrap gap-2">
                {["Python (Pandas)", "Power BI", "Data Cleaning", "Data Visualization"].map(t => (
                  <span key={t} className="bg-slate-700 px-2 sm:px-3 py-1 rounded-md text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4 mb-7">
              {[["49B", "Total Sanctioned Funds"], ["11B", "Minority Allocation"], ["38B", "Other Category"], ["42M", "SC Beneficiaries"], ["5M", "ST Beneficiaries"]].map(([val, label]) => (
                <div key={label} className="bg-slate-700 p-3 sm:p-4 rounded-lg">
                  <p className="text-base sm:text-xl font-bold text-slate-100">{val}</p>
                  <p className="text-xs text-slate-300">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-7">
              {[
                { title: "District Completion Gap", items: ["Sheohar: 0 completed out of 2,960 houses", "Patna: 47 completed out of 13,209 houses", "Indicates possible execution delays"] },
                { title: "Gender-based Allocation", items: ["Married women received the largest housing share", "Unmarried women received significantly fewer allocations"] },
                { title: "SC vs ST Distribution", items: ["SC beneficiaries received ~89% of funds", "ST beneficiaries received ~10%"] },
                { title: "Funding Trend", items: ["Major investment spike observed in 2025", "Indicates expansion of housing investment"] },
              ].map((card, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-3 sm:p-5">
                  <h3 className="font-semibold mb-2 text-slate-100 text-xs sm:text-base">{card.title}</h3>
                  <ul className="text-slate-300 text-xs space-y-1">
                    {card.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm sm:text-lg font-semibold mb-3 text-slate-100">Power BI Dashboard</h2>
              <img src="dashboard.png" alt="PMAY Power BI Dashboard" className="rounded-lg shadow-md border border-slate-700 w-full" />
            </div>
          </section>

          {/* GITHUB AUTOMATION */}
          <section className="px-4 sm:px-6 py-8 sm:py-12 bg-slate-800/50 border border-green-800/40 rounded-2xl shadow-xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-600/25 border border-green-500/40 text-green-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide">
                Automation
              </span>
            </div>

            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-100 mb-2">
              GitHub-to-Database Automation Pipeline
            </h1>
            <a href="https://github.com/shubhamkummarrr/Extract-Emails-from-Files" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">
              View on GitHub →
            </a>
            <p className="text-slate-300 mt-3 mb-5 text-xs sm:text-base leading-relaxed">
              Fully hands-free system that clones GitHub repositories, extracts structured contact data
              from thousands of text files, and pushes it directly into MySQL — triggered by a single command.
            </p>

            <div className="mb-5">
              <h2 className="text-sm sm:text-lg font-semibold text-slate-100 mb-2 sm:mb-3">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["Python", "Regex", "GitPython", "MySQL Connector", "Pathlib", "JSON", "run_all.py", "Error Handling"].map(t => (
                  <span key={t} className="bg-slate-700 px-2 sm:px-3 py-1 rounded-md text-xs">{t}</span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <h2 className="text-sm sm:text-lg font-semibold text-slate-100 mb-3">End-to-End Pipeline</h2>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { step: "01", label: "GitHub Clone", icon: "⬇️" },
                  { step: "02", label: "File Preprocessing", icon: "🧹" },
                  { step: "03", label: "Regex Extraction", icon: "🔍" },
                  { step: "04", label: "JSON Conversion", icon: "📦" },
                  { step: "05", label: "MySQL Insert", icon: "🗄️" },
                  { step: "06", label: "Zero Manual Effort", icon: "⚡" },
                ].map((s) => (
                  <div key={s.step} className="bg-slate-700 rounded-lg p-2 text-center">
                    <div className="text-base sm:text-2xl mb-1">{s.icon}</div>
                    <div className="text-xs text-green-400 font-bold mb-0.5">Step {s.step}</div>
                    <div className="text-xs text-slate-300 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-5">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 sm:p-5">
                <h3 className="font-semibold mb-2 text-slate-100 text-xs sm:text-base">What It Extracts</h3>
                <ul className="text-slate-300 text-xs space-y-1">
                  <li>📧 Email addresses</li>
                  <li>📞 Phone numbers</li>
                  <li>🏢 Organization names</li>
                  <li>📄 From thousands of <code className="text-blue-300">.pdf.txt</code> files</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 sm:p-5">
                <h3 className="font-semibold mb-2 text-slate-100 text-xs sm:text-base">Why It Matters</h3>
                <ul className="text-slate-300 text-xs space-y-1">
                  <li>✅ Eliminates manual document review entirely</li>
                  <li>✅ Processes large file sets with robust error handling</li>
                  <li>✅ Structured, queryable MySQL output</li>
                  <li>✅ Solves real tender document processing at scale</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 sm:p-4 mb-5">
              <p className="text-slate-400 text-xs mb-1 font-mono">run_all.py — one command, full pipeline</p>
              <p className="text-green-400 text-xs sm:text-sm font-mono">$ python run_all.py</p>
              <p className="text-slate-500 text-xs mt-1 font-mono">→ Cloning repo... → Processing files... → Extracting contacts... → Inserting into MySQL... ✓ Done.</p>
            </div>
          </section>

          {/* CAROUSEL */}
          

          {/* GITHUB LINKS */}
          
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-12 sm:py-20 bg-slate-800">
        <h2 className="text-xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Experience</h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:gap-10 items-center bg-slate-700 p-5 sm:p-8 rounded-xl">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold pb-1 text-slate-200">{exp.company}</h1>
                <a href="https://hackveda.in/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs sm:text-sm">
                  Company Website →
                </a>
                <h3 className="text-base sm:text-2xl font-semibold pt-4 sm:pt-6 text-slate-100 mb-2">{exp.role}</h3>
                <p className="text-slate-400 text-xs sm:text-base mb-3">{exp.date}</p>
                <ul className="text-slate-300 space-y-2 text-xs sm:text-base">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2 mt-0.5 shrink-0">•</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <a href="https://hackveda.in/" target="_blank" rel="noopener noreferrer">
                  <img src="hackveda.png" alt="Hackveda" className="w-32 sm:w-56 object-contain" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="bg-slate-900 text-white py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-lg sm:text-3xl font-bold mb-3">Let's Build Something Meaningful</h2>
          <p className="text-slate-300 text-xs sm:text-base mb-5 sm:mb-8">
            Open to Data Analyst roles — passionate about turning messy data into clean insights and automated systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-lg">
            <a href="mailto:shubham12ss10@gmail.com" className="hover:text-blue-400">Email</a>
            <a href="https://github.com/shubhamkummarrr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
            <a href="https://www.linkedin.com/in/kumshubham" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="tel:+919599072664" className="hover:text-blue-400">+91 9599072664</a>
          </div>
          <div className="mt-8 sm:mt-12 text-slate-500 text-xs">
            © {new Date().getFullYear()} Shubham Kumar
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App