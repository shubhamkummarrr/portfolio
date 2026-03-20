import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const App = () => {

  const projects = [
    {
      title: "Project 01",
      description: (
        <div>
          <h3 className="font-bold text-2xl mb-1">
            Email & Phone Extraction Automation
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Large Scale Contact Extraction Pipeline
          </p>
          <p className="text-xs text-slate-300 mb-5">
            Python • Regex • MySQL • GitPython • Automation
          </p>
          <ul className="space-y-2 text-slate-300 text-sm">
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
          <h3 className="font-bold text-2xl mb-1">AI Agent R10528</h3>
          <p className="text-slate-400 text-sm mb-4">Autonomous AI Research Assistant</p>
          <p className="text-xs text-slate-300 mb-5">Python • NLP • AI Agents</p>
          <ul className="space-y-2 text-slate-300 text-sm">
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
          <h3 className="font-bold text-2xl mb-1">Scalable E-Commerce Platform</h3>
          <p className="text-slate-400 text-sm mb-4">Microservices Based E-Commerce Architecture</p>
          <p className="text-xs text-slate-300 mb-5">Python • React • Docker • CI/CD • AWS</p>
          <ul className="space-y-2 text-slate-300 text-sm">
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
          <h3 className="font-bold text-2xl mb-1">Sentiment Analysis MLOps Pipeline</h3>
          <p className="text-slate-400 text-sm mb-4">Production Ready Machine Learning Workflow</p>
          <p className="text-xs text-slate-300 mb-5">Python • Docker • MLflow • CI/CD • AWS</p>
          <ul className="space-y-2 text-slate-300 text-sm">
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

  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentProject((prev) => prev === 0 ? projects.length - 1 : prev - 1)
  }

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 min-h-screen">

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/75 via-slate-950/40 to-black/75"></div>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <a
          href="/Shubham Resume.pdf"
          download
          className="absolute top-6 right-6 px-5 py-2 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
        >
          Download Resume
        </a>
        <img src="photo.jpg" className="w-50 h-60 rounded-[40%] mb-4 shadow-lg object-cover" alt="Shubham Kumar" />
        <h1 className="text-4xl font-bold">Shubham Kumar</h1>
        <p className="text-xl text-slate-300 mt-2">
          Data Analyst • ETL & Automation • SQL & Python
        </p>
        <p className="text-slate-400 mt-3 max-w-2xl">
          I build end-to-end data systems — from automated extraction pipelines and SQL-driven analysis
          to Power BI dashboards and production-ready workflows that turn raw data into actionable decisions.
        </p>
        <p className="text-slate-500 mt-2">
          Python • SQL • Power BI • ETL Pipelines • Data Cleaning • Automation • MySQL
        </p>
      </section>

      {/* PIPELINE */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">End-to-End Data Workflow</h2>
        <p className="text-slate-400 max-w-3xl mx-auto">
          Data Collection → Cleaning & Transformation → SQL Analysis →
          Visualization & Dashboards → Automation → Insights
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed text-left">
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
      <section className="bg-slate-800 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Skills</h2>
        <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto text-sm">
          Core toolkit for Data Analyst roles — from raw data to insight delivery.
        </p>
        <div className="max-w-5xl mx-auto space-y-10 px-6">

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Analysis & SQL</h3>
            <p className="text-slate-300">
              SQL (MySQL — queries, joins, aggregations, subqueries, window functions), Exploratory Data Analysis (EDA),
              Statistical Analysis, Hypothesis Testing, Python (Pandas, NumPy)
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Cleaning & Transformation</h3>
            <p className="text-slate-300">
              Data Wrangling, Missing Value Treatment, Outlier Detection, Feature Engineering,
              ETL Pipeline Development, Large-Scale Data Preprocessing
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Visualization & Reporting</h3>
            <p className="text-slate-300">
              Power BI (Dashboards, DAX, Slicers, KPIs), Matplotlib, Seaborn, Plotly,
              Storytelling with Data, Business Reporting
            </p>
          </div>

          <div className="border-l-4 border-gray-400 pl-6">
            <h3 className="text-xl font-semibold mb-2">Automation & Data Pipelines</h3>
            <p className="text-slate-300">
              Python Automation Scripts, ETL Workflows, Regex-based Extraction,
              GitPython, Scheduled Task Pipelines, End-to-End Hands-free Processing
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Machine Learning (Supporting)</h3>
            <p className="text-slate-300">
              Scikit-learn, Classification & Regression Models, NLP (Sentiment Analysis),
              Model Evaluation & Metrics, MLflow for Experiment Tracking
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Tools & Infrastructure</h3>
            <p className="text-slate-300">
              MySQL, AWS EC2, Docker, Git & GitHub, CI/CD Pipelines, Jupyter Notebook, VS Code
            </p>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-slate-900/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="max-w-6xl mx-auto px-6 space-y-10">

          {/* PMAY */}
          <section className="px-6 py-12 bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-100">
                Housing Data Analysis of PMAY (Pradhan Mantri Awas Yojana)
              </h1>
              <p className="text-slate-300 mt-2">High-impact Power BI analytics of fund allocation and beneficiary trends.</p>
              <br />
              <p>
                Pradhan Mantri Awas Yojana (PMAY) is a government initiative to provide affordable housing to
                economically weaker sections of society. This analysis examines fund allocation, beneficiary
                distribution, and housing completion trends using Power BI to identify key patterns and potential implementation gaps.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-100 mb-2">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-700 px-3 py-1 rounded-md text-sm">Python (Pandas)</span>
                <span className="bg-slate-700 px-3 py-1 rounded-md text-sm">Power BI</span>
                <span className="bg-slate-700 px-3 py-1 rounded-md text-sm">Data Cleaning</span>
                <span className="bg-slate-700 px-3 py-1 rounded-md text-sm">Data Visualization</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {[["49B", "Total Sanctioned Funds"], ["11B", "Minority Allocation"], ["38B", "Other Category"], ["42M", "SC Beneficiaries"], ["5M", "ST Beneficiaries"]].map(([val, label]) => (
                <div key={label} className="bg-slate-700 p-4 rounded-lg">
                  <p className="text-xl font-bold text-slate-100">{val}</p>
                  <p className="text-sm text-slate-300">{label}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-slate-100">District Completion Gap</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Sheohar: <strong>0 completed</strong> out of 2,960 houses</li>
                  <li>Patna: <strong>47 completed</strong> out of 13,209 houses</li>
                  <li>Indicates possible execution delays</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-slate-100">Gender-based Allocation</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Married women received the largest housing share</li>
                  <li>Unmarried women received significantly fewer allocations</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-slate-100">SC vs ST Distribution</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>SC beneficiaries received ~89% of funds</li>
                  <li>ST beneficiaries received ~10%</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-2 text-slate-100">Funding Trend</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>Major investment spike observed in <strong className="text-slate-100">2025</strong></li>
                  <li>Indicates expansion of housing investment</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-4 text-slate-100">Power BI Dashboard</h2>
              <img src="dashboard.png" alt="PMAY Power BI Dashboard" className="rounded-lg shadow-md border border-slate-700" />
            </div>
          </section>

          {/* ── GITHUB AUTOMATION PROJECT ── */}
          <section className="px-6 py-12 bg-slate-800/50 border border-green-800/40 rounded-2xl shadow-xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-green-600/25 border border-green-500/40 text-green-400 text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase">
                Automation
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-100 mb-2">
              GitHub-to-Database Automation Pipeline
            </h1>
            <p className="text-slate-300 mb-6">
              Fully hands-free system that clones GitHub repositories, extracts structured contact data
              from thousands of text files, and pushes it directly into MySQL — triggered by a single command.
            </p>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-100 mb-3">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {["Python", "Regex", "GitPython", "MySQL Connector", "Pathlib", "JSON", "run_all.py", "Error Handling"].map(t => (
                  <span key={t} className="bg-slate-700 px-3 py-1 rounded-md text-sm">{t}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-100 mb-4">End-to-End Pipeline</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { step: "01", label: "GitHub Clone", icon: "⬇️" },
                  { step: "02", label: "File Preprocessing", icon: "🧹" },
                  { step: "03", label: "Regex Extraction", icon: "🔍" },
                  { step: "04", label: "JSON Conversion", icon: "📦" },
                  { step: "05", label: "MySQL Insert", icon: "🗄️" },
                  { step: "06", label: "Zero Manual Effort", icon: "⚡" },
                ].map((s) => (
                  <div key={s.step} className="bg-slate-700 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">{s.icon}</div>
                    <div className="text-xs text-green-400 font-bold mb-1">Step {s.step}</div>
                    <div className="text-xs text-slate-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-3 text-slate-100">What It Extracts</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>📧 Email addresses</li>
                  <li>📞 Phone numbers</li>
                  <li>🏢 Organization names</li>
                  <li>📄 From thousands of <code className="text-blue-300">.pdf.txt</code> files</li>
                </ul>
              </div>
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5">
                <h3 className="font-semibold mb-3 text-slate-100">Why It Matters</h3>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✅ Eliminates manual document review entirely</li>
                  <li>✅ Processes large file sets with robust error handling</li>
                  <li>✅ Structured, queryable MySQL output</li>
                  <li>✅ Solves real tender document processing at scale</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-600 rounded-lg p-4">
              <p className="text-slate-400 text-xs mb-1 font-mono">run_all.py — one command, full pipeline</p>
              <p className="text-green-400 text-sm font-mono">$ python run_all.py</p>
              <p className="text-slate-500 text-xs mt-1 font-mono">
                → Cloning repo... → Processing files... → Extracting contacts... → Inserting into MySQL... ✓ Done.
              </p>
            </div>
            <div className="relative w-full px-2" style={{ paddingBottom: "56.25%", paddingTop: "6.25%" }}>
              <iframe
                className="absolute top-7 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/GENCFYeVmbE" 
                title="project video"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 bg-slate-800">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-6xl mx-auto px-6">
          {experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-10 items-center bg-slate-700 p-8 rounded-xl">
              <div>
                <h1 className="text-4xl font-bold text-slate-200">{exp.company}</h1>
                <h3 className="text-2xl font-semibold pt-6 text-slate-100 mb-3">{exp.role}</h3>
                <p className="text-slate-400 mb-4">{exp.date}</p>
                <ul className="text-slate-300 space-y-2">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <a href="https://hackveda.in/" target="_blank" rel="noopener noreferrer">
                  <img src="hackveda.png" alt="Hackveda" className="w-56 object-contain" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Meaningful</h2>
          <p className="text-slate-300 mb-8">
            Open to Data Analyst roles — passionate about turning messy data into clean insights and automated systems.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
            <a href="mailto:shubham12ss10@gmail.com" className="hover:text-blue-400">Email</a>
            <a href="https://github.com/shubhamkummarrr" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
            <a href="https://www.linkedin.com/in/kumshubham" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
            <a href="tel:+919599072664" className="hover:text-blue-400">+91 9599072664</a>
          </div>
          <div className="mt-12 text-slate-500 text-sm">© {new Date().getFullYear()} Shubham Kumar</div>
        </div>
      </footer>

    </div>
  )
}

export default App