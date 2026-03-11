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
            Python • Regex • MySQL • Git Automation
          </p>

          <ul className="space-y-2 text-slate-300 text-sm">

            <li>• Automated extraction of emails and phone numbers from thousands of PDF text files.</li>

            <li>• Pulled document data directly from GitHub repositories for automated processing.</li>

            <li>• Generated structured JSON outputs and stored extracted contacts in MySQL database.</li>

            <li>• Built end-to-end pipeline: GitHub Data Fetch → PDF Processing → Contact Extraction → MySQL Storage.</li>
          </ul>

        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/GENCFYeVmbE"
    },

    {
      title: "Project 02",
      description: (
        <div>

          <h3 className="font-bold text-2xl mb-1">
            AI Agent R10528
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Autonomous AI Research Assistant
          </p>

          <p className="text-xs text-slate-300 mb-5">
            Python • NLP • AI Agents
          </p>

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

          <h3 className="font-bold text-2xl mb-1">
            Scalable E-Commerce Platform
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Microservices Based E-Commerce Architecture
          </p>

          <p className="text-xs text-slate-300 mb-5">
            Python • React • Docker • CI/CD • AWS
          </p>

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

          <h3 className="font-bold text-2xl mb-1">
            Sentiment Analysis MLOps Pipeline
          </h3>

          <p className="text-slate-400 text-sm mb-4">
            Production Ready Machine Learning Workflow
          </p>

          <p className="text-xs text-slate-300 mb-5">
            Python • Docker • MLflow • CI/CD • AWS
          </p>

          <ul className="space-y-2 text-slate-300 text-sm">

            <li>• Fully - focused on building a robust MLOps pipeline for sentiment analysis.</li>

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
      role: "Data Scientist",
      date: "Mar 2025 - Mar 2026",
      company: "Hackveda Solutions",
      points: [
        "Built automated data extraction and ETL pipelines using Python to collect GitHub data and update databases through a unified workflow.",
        "Led Spinny annotation projects, managing 120+ interns/day (30 avg. - Active) and delivering 13K+ annotations/day (Project-1) and 3K annotations/day avg. (Project-2)",
        "Created and set up an AWS EC2 instance that can handle up to 1,000 users and has 1 TB storage, used by annotators to work on the project and manage data.",
        "Mentored interns in Python & Data Analysis through real-world, production-oriented projects",
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
    setCurrentProject((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    )
  }

  return (

    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100 min-h-screen">

      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black/75 via-slate-950/40 to-black/75"></div>

      {/* HERO */}

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <img
          src="photo.jpg"
          className="w-50 h-60 rounded-[40%] mb-6 shadow-lg object-cover"
        />

        <h1 className="text-4xl font-bold">
          Shubham Kumar
        </h1>

        <p className="text-xl text-slate-300 mt-2">
          Data Analyst • Data Pipelines • Automation
        </p>

        <p className="text-slate-400 mt-3 max-w-2xl">
          I build end-to-end data systems — from data collection and automation
          to machine learning models and production deployment.
        </p>

        <p className="text-slate-500 mt-2">
          Python • SQL • Data Pipelines • Machine Learning • Automation • MLOps
        </p>

      </section>


      {/* PIPELINE */}

      <section className="py-12 text-center">

        <h2 className="text-2xl font-semibold mb-6">
          End-to-End Data Workflow
        </h2>

        <p className="text-slate-400 max-w-3xl mx-auto">
          Data Collection → Data Processing → Machine Learning →
          Model Deployment → Automation → Monitoring
        </p>

      </section>


      {/* ABOUT */}

      <section className="max-w-4xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-8">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed text-left">
          I specialize in building complete data pipelines — from collecting raw
          data using APIs and web scraping to cleaning, analyzing, and training
          machine learning models.
          <br />
          <br />
          My work focuses on automation, scalable data processing, and deploying
          machine learning systems into production environments.
          <br />
          <br />
          I have built recommendation systems, automated data pipelines, and
          production ML workflows using Docker, CI/CD, and cloud infrastructure.
        </p>

      </section>


      {/* SKILLS */}

      <section className="bg-slate-800 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto space-y-10 px-6">

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Collection & Extraction</h3>
            <p className="text-slate-300">
              Python, Web Scraping (BeautifulSoup, Scrapy), REST APIs, Data Ingestion
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Processing & Preparation</h3>
            <p className="text-slate-300">
              Python (Pandas, NumPy), SQL, Data Cleaning, Data Transformation, ETL Pipelines, Feature Engineering
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Analysis & Visualization</h3>
            <p className="text-slate-300">
              Exploratory Data Analysis (EDA), Statistical Analysis, Power BI, Matplotlib, Plotly
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-slate-300">
              Scikit-learn, Random Forest, NLP Models, Model Evaluation
            </p>
          </div>
          <div className="border-l-4 border-gray-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Automation & Data Pipelines</h3>
            <p className="text-slate-300">
              Workflow Automation, Task Scheduling, Data Pipeline Development
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Deployment & MLOps</h3>
            <p className="text-slate-300">
              Docker, MLflow, CI/CD Pipelines, AWS, Git & GitHub
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="py-20 bg-slate-900/80 backdrop-blur-sm">

        <h2 className="text-3xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto px-6">
          <section className="max-w-6xl mx-auto px-6 py-12 bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-100">
                Housing Data Analysis of PMAY (Pradhan Mantri Awas Yojana)
              </h1>
              <p className="text-slate-300 mt-2">
                High-impact Power BI analytics of fund allocation and beneficiary trends.
              </p>
            </div>

            {/* <!-- Tools --> */}
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
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-xl font-bold text-slate-100">49B</p>
                <p className="text-sm text-slate-300">Total Sanctioned Funds</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-xl font-bold text-slate-100">11B</p>
                <p className="text-sm text-slate-300">Minority Allocation</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-xl font-bold text-slate-100">38B</p>
                <p className="text-sm text-slate-300">Other Category</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-xl font-bold text-slate-100">42M</p>
                <p className="text-sm text-slate-300">SC Beneficiaries</p>
              </div>

              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-xl font-bold text-slate-100">5M</p>
                <p className="text-sm text-slate-300">ST Beneficiaries</p>
              </div>
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
              <img
                src="dashboard.png"
                alt="PMAY Power BI Dashboard"
                className="rounded-lg shadow-md border border-slate-700"
              />
            </div>

          </section>

          <p className="text-center text-slate-500 mb-6">
            Project {currentProject + 1} / {projects.length}
          </p>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProject}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-10 items-center bg-slate-700 p-8 rounded-xl shadow-lg"
            >

              <div>

                <h3 className="text-2xl font-bold mb-4">
                  {projects[currentProject].title}
                </h3>

                {projects[currentProject].description}

                <div className="flex gap-4 mt-6">

                  <button
                    onClick={prevProject}
                    className="px-4 py-2 bg-gray-600 rounded"
                  >
                    Prev
                  </button>

                  <button
                    onClick={nextProject}
                    className="px-4 py-2 bg-blue-600 rounded"
                  >
                    Next
                  </button>

                </div>

              </div>

              <div>

                <iframe
                  className="w-full h-64 rounded-lg"
                  src={projects[currentProject].videoSrc}
                  title="project video"
                  allowFullScreen
                ></iframe>

              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </section>


      {/* EXPERIENCE */}

      <section className="py-20 bg-slate-800">

        <h2 className="text-4xl font-bold text-center mb-12">
          Experience
        </h2>

        <div className="max-w-6xl mx-auto px-6">

          {experience.map((exp, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-10 items-center bg-slate-700 p-8 rounded-xl">

              <div>

                <h1 className="text-4xl font-bold text-slate-200">
                  {exp.company}
                </h1>

                <h3 className="text-2xl font-semibold pt-6 text-slate-100 mb-3">
                  {exp.role}
                </h3>

                <p className="text-slate-400 mb-4">
                  {exp.date}
                </p>

                <ul className="text-slate-300 space-y-2">
                  {exp.points.map((p, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {p}
                    </li>
                  ))}
                </ul>

              </div>

              <div className="flex justify-center">

                <a
                  href="https://hackveda.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="hackveda.png"
                    alt="Hackveda"
                    className="w-56 object-contain"
                  />
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>


      {/* CONTACT */}

      <footer className="bg-slate-900 text-white py-16">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-4">
            Let's Build Something Meaningful
          </h2>

          <p className="text-slate-300 mb-8">
            Passionate about building intelligent data systems and automation workflows.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">

            <a href="mailto:shubham12ss10@gmail.com" className="hover:text-blue-400">
              Email
            </a>

            <a
              href="https://github.com/shubhamkummarrr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kumshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>

            <a href="tel:+919599072664" className="hover:text-blue-400">
              +91 9599072664
            </a>

          </div>

          <div className="mt-12 text-slate-500 text-sm">
            © {new Date().getFullYear()} Shubham Kumar
          </div>

        </div>

      </footer>

    </div>
  )
}

export default App