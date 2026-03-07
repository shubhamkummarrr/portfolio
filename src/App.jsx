import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const App = () => {

  const projects = [
    {
      title: "Animiya",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4">
            Full-stack AI powered Anime recommendation platform
          </p>

          <ul className="space-y-1 text-gray-300">
            <li>Scraped anime metadata using Scrapy</li>
            <li>Built TF-IDF recommendation engine</li>
            <li>Developed Django REST backend APIs</li>
            <li>Implemented JWT authentication</li>
            <li>React frontend for social media features</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/EOi3XuwCoQk"
    },

    {
      title: "AI Agent R10528",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4">
            Autonomous AI assistant capable of document analysis and reasoning
          </p>

          <ul className="space-y-1 text-gray-300">
            <li>Multi-URL document ingestion pipeline</li>
            <li>Voice interaction interface</li>
            <li>Custom AI personality configuration</li>
            <li>Deep reasoning mode for complex queries</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/WvezKtp8z_w"
    },

    {
      title: "MLOps Pipeline",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4">
            Production-ready sentiment analysis ML pipeline
          </p>

          <ul className="space-y-1 text-gray-300">
            <li>Experiment tracking with MLflow</li>
            <li>Dataset versioning using DVC</li>
            <li>Dockerized training and inference services</li>
            <li>CI/CD pipeline with GitHub Actions</li>
            <li>Deployment on AWS infrastructure</li>
          </ul>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/owW5fdBvuxc"
    }
  ]

  const experience = [
    {
      role: "Data Scientist",
      date: "Jul 2025 - Present",
      company: "Hackveda Solutions",
      points: [
        "Built automated pipelines extracting structured GitHub data for AI training",
        "Managed and coordinated 120+ data annotation interns",
        "Designed workflow producing 13,000+ labeled samples daily",
        "Deployed AWS EC2 infrastructure supporting 1000+ concurrent users",
        "Mentored interns in Python, data analysis, and machine learning workflows"
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

    <div className="nature-bg text-slate-100">

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
          Data Analyst • Machine Learning Engineer
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
            <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
            <p className="text-slate-300">
              Web Scraping (Scrapy, BeautifulSoup), REST APIs, Data Ingestion
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Processing</h3>
            <p className="text-slate-300">
              Python, Pandas, NumPy, SQL, ETL Pipelines, Feature Engineering
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-slate-300">
              Exploratory Data Analysis, Power BI, Plotly Dashboards
            </p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
            <p className="text-slate-300">
              Scikit-learn, XGBoost, NLP Models, Model Evaluation
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-6">
            <h3 className="text-xl font-semibold mb-2">MLOps</h3>
            <p className="text-slate-300">
              Docker, MLflow, DVC, CI/CD, AWS EC2
            </p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}

      <section className="py-20 bg-slate-800">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto px-6">

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