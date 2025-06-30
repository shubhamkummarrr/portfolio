import React, { useState, useRef, useEffect } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const VideoPlayer = ({ src, title }) => {
  // Check if src is a YouTube embed URL
  const isYouTube = src && src.startsWith('https://www.youtube.com/embed/');
  if (isYouTube) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
        <iframe
          width="100%"
          height="100%"
          src={src}
          title={title || 'YouTube video player'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full object-cover rounded-xl"
        ></iframe>
      </div>
    );
  }

  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.mozRequestFullScreen) {
        containerRef.current.mozRequestFullScreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const fsElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
      setIsFullscreen(!!fsElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl overflow-hidden shadow-lg"
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover rounded-xl"
        aria-label={title || 'Video'}
        controls
      />
    </div>
  );
};

const ProjectCard = ({ title, description, videoSrc, technologies, delay = 0, number }) => {
  // Colorful gradient backgrounds for each card
  const cardGradients = [
    'bg-gray-600',
    // 'from-purple-200 via-yellow-100 to-blue-200',
    // 'from-green-200 via-blue-100 to-purple-200',
    // 'from-yellow-200 via-pink-100 to-indigo-200'
  ];
  const borderColors = [
    'border-purple-400',
    'border-green-400',
    'border-yellow-400'
  ];
  const gradient = cardGradients[(number - 1) % cardGradients.length];
  const borderColor = borderColors[(number - 1) % borderColors.length];

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-16 bg-gradient-to-br ${gradient}`}
      style={{
        animation: `fadeInUp 0.8s ease-out ${delay}s both`
      }}
    >
      <div className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-3xl shadow-2xl border-4 ${borderColor} bg-white/80 backdrop-blur-md p-2 sm:p-5`}
        style={{ boxShadow: '0 8px 40px 0 rgba(80, 80, 200, 0.10)' }}
      >
        {/* Content */}
        <div className="space-y-4 md:space-y-6 px-2 sm:px-4 md:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight flex flex-wrap items-center gap-2 md:gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 text-white shadow-lg">
              #{number}
            </span>
            <span className="bg-gradient-to-r from-indigo-600 via-pink-500 to-blue-500 bg-clip-text text-transparent gradient-text">
              {title}
            </span>
          </h2>
          <div className="text-gray-700 text-base sm:text-lg space-y-2 md:space-y-4 leading-relaxed">
            {description}
          </div>
          {technologies && (
            <div className="flex flex-wrap gap-2 pt-2 md:pt-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-600 text-white rounded-full text-xs sm:text-sm border border-indigo-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-300 hover:via-yellow-200 hover:to-blue-300 hover:text-gray-600 hover:scale-110 shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Video */}
        <div className="relative w-full max-w-md mx-auto aspect-video">
          <div className="absolute -inset-2 bg-gradient-to-tr from-pink-200 via-blue-100 to-yellow-200 rounded-2xl blur-xl opacity-60 z-0"></div>
          <div className="relative z-10">
            <VideoPlayer src={videoSrc} title={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Animiya",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800">Social media for Anime lovers with Recommendation system</p>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-indigo-600">Tech Stack:</p>
              <ul className="ml-4 space-y-1 text-gray-700">
                <li>• Frontend: React with modern UI/UX</li>
                <li>• Backend: Django REST Framework</li>
                <li>• Authentication: JWT-based security</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-indigo-600">Recommendation Engine:</p>
              <ul className="ml-4 space-y-1 text-gray-700">
                <li>• Content-Based filtering with TF-IDF vectorization</li>
                <li>• Web scraping using Scrapy</li>
                <li>• Data from Kaggle & MyAnimeList</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/owW5fdBvuxc?si=Ejmi82nN5dLJmP84",
      technologies: ["React", "DRF", "TF-IDF", "Scrapy", "JWT", "Machine Learning"]
    },
    {
      title: "AI Agent R10528",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800">Next-Generation AI Assistant</p>
          <ul className="space-y-2 text-gray-700">
            <li>• <strong>Multi-URL & Document Processing:</strong> Analyze 5+ URLs or documents simultaneously</li>
            <li>• <strong>Voice Interaction:</strong> Natural voice queries with intelligent chat responses</li>
            <li>• <strong>Custom AI Profiles:</strong> Personalized AI experience tailored to your needs</li>
            <li>• <strong>Advanced Modes:</strong> Web Search & Deep Thinking capabilities</li>
          </ul>
          <p className="mt-4 text-blue-600">Designed to compete with ChatGPT, delivering high accuracy and versatility across multiple use cases.</p>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/EOi3XuwCoQk?si=lvPIMsJ9X9OTCg7i",
      technologies: ["Streamlit", "Python", "Deepseek API", "Voice Recognition", "NLP"]
    },
    {
      title: "MLOps Pipeline",
      description: (
        <div>
          <p className="font-semibold text-xl mb-4 text-gray-800">Sentiment Analysis – End-to-End MLOps Project</p>
          <p className="mb-4 text-gray-700">Complete MLOps pipeline with full CI/CD automation and cloud deployment.</p>
          <div className="space-y-3">
            <div>
              <p className="font-medium text-indigo-600">Key Features:</p>
              <ul className="ml-4 space-y-1 text-gray-700">
                <li>• Modular sub-pipelines: data acquisition → preprocessing → feature engineering → model building</li>
                <li>• MLflow for experiment tracking and model registry</li>
                <li>• DVC for pipeline and data versioning</li>
                <li>• CI/CD automation with GitHub Actions</li>
                <li>• Dockerized deployment to AWS EKS via ECR</li>
              </ul>
            </div>
            <p className="text-indigo-600 font-medium">Fully automated, reproducible, and production-ready workflow.</p>
          </div>
        </div>
      ),
      videoSrc: "https://www.youtube.com/embed/WvezKtp8z_w?si=HkaClZuhqfxFI_V5",
      technologies: ["MLflow", "DVC", "Docker", "AWS EKS", "GitHub Actions", "Python", "CI/CD"]
    }
  ];

  return (
    <div className='relative'>
      {/* Hero Section */}
      <div className='min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 px-2 sm:px-4 md:px-0'>
        {/* Animated Background (subtle, professional) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="text-center z-10 space-y-6 sm:space-y-8 w-full max-w-2xl mx-auto">
          <div className="relative group flex flex-col items-center">
            <img
              src="img.jpg"
              alt="profile"
              className="h-48 w-48 sm:h-64 sm:w-64 md:h-82 md:w-72 mx-auto object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-500 group-hover:scale-105 animate-float"
              style={{ boxShadow: '0 8px 32px 0 rgba(34, 34, 34, 0.1)' }}
            />
            <a
              href="/RESUME.pdf"
              download
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-3 sm:px-4 py-1 rounded-full shadow font-semibold text-xs sm:text-sm animate-fadeInUp transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600"
              style={{ animationDelay: '0.7s' }}
            >
              RESUME.pdf
            </a>          </div>
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-1 sm:mb-2 animate-fadeInUp">Shubham</h1>
            <p className="text-lg sm:text-2xl text-gray-700 font-medium animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Data Scientist & AI Enthusiast
            </p>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto mt-2 sm:mt-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              Curated projects in AI, web development, and MLOps. <span className="font-semibold text-indigo-600">Let's build something impactful together.</span>
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <a href="https://github.com/shubhamkummarrr" target="_blank" rel="noopener noreferrer">
                <Github className="w-7 h-7 sm:w-9 sm:h-9 text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/shubham-937114233/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-7 h-7 sm:w-9 sm:h-9 text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Sections */}
      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto pt-10 sm:pt-16 pb-4 sm:pb-8 px-2 sm:px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4 sm:mb-8 animate-fadeInUp">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-8 transition-all duration-500 hover:shadow-xl mb-16 bg-white border-t-4 ${index % 3 === 0 ? 'border-indigo-600' : index % 3 === 1 ? 'border-blue-500' : 'border-indigo-400'}`}
              style={{
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                videoSrc={project.videoSrc}
                technologies={project.technologies}
                delay={0.2 + index * 0.1}
                number={index + 1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-2 sm:px-8'>
        <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8 bg-white rounded-2xl shadow-lg p-4 sm:p-8 md:p-12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-700 leading-relaxed">
            I am a full-stack developer and data science enthusiast, specializing in AI-driven web solutions, machine learning systems, and MLOps pipelines.
            I bring real-world experience in developing scalable applications, building intelligent systems, and deploying end-to-end ML workflows using modern tools like React, Django, MLflow, Docker, and AWS.
          </p>
          <div className="text-center py-6 sm:py-12 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl animate-fadeInUp border border-indigo-500 shadow-lg">
            <h3 className="text-xl sm:text-3xl text-white font-semibold mb-2 sm:mb-4">Interested in working together?</h3>
            <p className="text-indigo-100 mb-3 sm:mb-6 text-sm sm:text-base">Let’s build something amazing. You can reach me directly:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <a href="tel:+919599072664" className="bg-white hover:bg-indigo-50 text-indigo-600 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 border border-white shadow hover:scale-105 text-sm sm:text-base">
                📞 +91 9599072664
              </a>
              <a href="mailto:tallyshubham22@email.com" className="bg-white hover:bg-indigo-50 text-indigo-600 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-300 border border-white shadow hover:scale-105 text-sm sm:text-base">
                ✉️ tallyshubham22@email.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 text-center">
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-2 sm:mb-4">
            <a href="https://github.com/shubhamkummarrr" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
            </a>
            <a href="https://www.linkedin.com/in/shubham-937114233/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 hover:text-white cursor-pointer transition-colors duration-200" />
            </a>
          </div>
          <p className="text-gray-400 text-xs sm:text-base">© {new Date().getFullYear()} Shubham. All rights reserved.</p>
          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Designed for interview opportunities</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          overflow-x: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        @keyframes gradientPulse {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-text {
          background-size: 200% auto;
          animation: gradientPulse 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;