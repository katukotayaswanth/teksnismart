import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import futuristicBg from '/images/futuristic-tech-bg.jpg';
import { 
  ChevronDown, ArrowRight, Code, Users, 
  Monitor, 
  Briefcase, BookOpen, FileText, PcCase as CaseStudy, 
  Trophy, ExternalLink 
} from 'lucide-react';
import Background3D from '../components/Background3D';
import TechPartners from '../components/TechPartners';

const resources = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Blogs",
    description: "Stay updated with our latest insights and industry trends",
    link: "#",
    isEnabled: false
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Articles",
    description: "In-depth analysis and technical deep-dives",
    link: "#",
    isEnabled: false
  },
  {
    icon: <CaseStudy className="w-8 h-8" />,
    title: "Case Studies",
    description: "Real-world examples of our successful implementations",
    link: "#",
    isEnabled: false
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: "Success Stories",
    description: "Discover how we've helped businesses achieve their goals",
    link: "#",
    isEnabled: false
  }
];

const heroTexts = [
  {
    title: "Welcome to Teknismart Solutions Inc",
    tagline: "Leaders in Custom Software Development and Professional IT Consulting",
    description: "Your trusted partner in digital transformation and technological excellence"
  },
  {
    title: "Technology Solutions",
    tagline: "Ignite your business with innovative technology solutions that drive success",
    description: "Harness the power of cutting-edge technologies to elevate your business. From scalable cloud solutions to airtight cybersecurity, we create solutions that enhance performance, streamline processes, and keep you ahead in a rapidly evolving digital world."
  },
  {
    title: "Talent Solutions",
    tagline: "Unlock the potential of your workforce with top-tier talent",
    description: "Find the ideal fit for your business with our comprehensive staffing solutions. Whether onshore, offshore, or via our exclusive Parley marketplace, we provide you with pre-vetted professionals ready to take your business to the next level."
  }
];

const services = [
  {
    id: 'software',
    title: 'Custom Software Development',
    icon: <Code className="w-8 h-8" />,
    description: "Forget about the off-the-rack software programs that completely fail to meet your expectations. Our experts will design special software applications for your business that will make your team work in flawless harmony. Teknismart Solutions Inc. will work closely with you to help you identify your needs and produce programs that perfectly fit your requirements, time frame, and budget as well."
  },
  {
    id: 'consulting',
    title: 'Professional Consult',
    icon: <Briefcase className="w-8 h-8" />,
    description: "We will keep you informed on the latest technology trends to keep you ahead of your competitors. Our IT consulting team will introduce you to new strategies on integrating IT technologies into your business to reach your goals."
  },
  {
    id: 'staffing',
    title: 'IT Staffing',
    icon: <Users className="w-8 h-8" />,
    description: "We will put you in direct contact with the leaders in the field that will connect with your team and clients, and push your company to a new level on the ladder of success."
  }
];

const Home = () => {
  const [[currentSlide], setCurrentSlide] = useState([0, 0]);
  const [activeTab, setActiveTab] = useState('software');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const paginate = (newDirection: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      const nextIndex = (currentSlide + newDirection + heroTexts.length) % heroTexts.length;
      setCurrentSlide([nextIndex, newDirection]);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        <Background3D />
        
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 80%)',
              'radial-gradient(circle at 50% 50%, rgba(147,51,234,0.15), transparent 80%)',
              'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15), transparent 80%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 z-0"
        />

        <motion.div
          animate={{
            y: [-20, 20],
            x: [-10, 10],
            opacity: [0.3, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute left-10 top-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20],
            x: [10, -10],
            opacity: [0.3, 0.6],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
            ease: "easeInOut",
          }}
          className="absolute right-10 bottom-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="mb-12"
              >
                <motion.h1 
                  className="hero-text mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="hero-text-gradient">
                    {heroTexts[currentSlide].title}
                  </span>
                </motion.h1>
                
                <motion.p
                  className="hero-tagline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {heroTexts[currentSlide].tagline}
                </motion.p>

                <motion.p
                  className="hero-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {heroTexts[currentSlide].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mb-8">
              {heroTexts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index - currentSlide)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-blue-400 w-6' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="button-primary group relative overflow-hidden"
              >
                <motion.span
                  initial={{ y: 0 }}
                  whileHover={{ y: -30 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 block"
                >
                  Get Started
                </motion.span>
                <motion.span
                  initial={{ y: 30 }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10 relative overflow-hidden group"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                />
                <span className="relative z-10">Learn More</span>
              </Link>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      
 



      {/* Who We Are Section */}
      <section className="relative py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            style={{
              fontFamily: `"Orbitron", "Rajdhani", "Exo 2", sans-serif`,
              letterSpacing: "2px",
              textTransform: "uppercase"
            }}
            >
              Who We Are
            </h2>
            <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
              Teknismart Solutions Inc. is at the forefront of digital transformation, engineering intelligent solutions that empower businesses to innovate, scale, and succeed.
            </p>
          </motion.div>

          {/* Grid Layout with Enhanced Image Quality & Smooth Animations */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Intelligent Systems",
                desc: "Advanced software solutions that integrate seamlessly with your business.",
                img: "/images/Intelligent-systems.jpg",
                tag: "TECH INNOVATION"
              },
              {
                title: "Expert Guidance",
                desc: "Our IT consultants craft strategic roadmaps for your digital evolution.",
                img: "/images/Expert-guidance.jpg",
                tag: "STRATEGIC INSIGHTS"
              },
              {
                title: "Top-Tier Talent",
                desc: "Access highly skilled professionals who drive business success.",
                img: "/images/top-talent.jpg",
                tag: "ELITE PROFESSIONALS"
              },
              {
                title: "Future-Ready Solutions",
                desc: "We build scalable, future-proof tech to keep you ahead of the curve.",
                img: "/images/Future-ready.jpg",
                tag: "FORWARD-THINKING TECH"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-800/40 backdrop-blur-md border border-gray-700 hover:border-blue-500 p-6 will-change-transform"
              >
                {/* High-Quality Image with Smooth Loading */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <motion.img
                    src={item.img} // Default image
                    srcSet={`
                      ${item.img}?w=480 480w, 
                      ${item.img}?w=768 768w, 
                      ${item.img}?w=1080 1080w
                    `} // Responsive sizes
                    sizes="(max-width: 600px) 480px, 
                          (max-width: 1200px) 768px, 
                          1080px"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    loading="lazy"
                    decoding="async"
                    style={{ willChange: "transform, opacity" }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>


                {/* Text Section (Always Visible) */}
                <div className="mt-6 text-center">
                  {/* Glowing Tag */}
                  <motion.p
                    className="text-xs font-bold text-blue-400 tracking-widest uppercase"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  >
                    {item.tag}
                  </motion.p>

                  {/* Title with Glow Effect */}
                  <motion.h3
                    className="text-xl font-semibold text-white mt-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    whileHover={{
                      textShadow: "0px 0px 10px rgba(59,130,246,0.8)",
                      scale: 1.02
                    }}
                  >
                    {item.title}
                  </motion.h3>

                  {/* Description with Smooth Fade-in */}
                  <motion.p
                    className="text-gray-400 text-sm mt-3 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>





   

      

      {/* What We Offer Section */}
      <section className="relative py-20 bg-transparent">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            {/* Section Heading with Futuristic Font */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left mb-16"
            >
              {/* Floating Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <Monitor className="w-16 h-16 text-blue-400" />
              </motion.div>

              <h2
                className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                style={{
                  fontFamily: `"Orbitron", "Rajdhani", "Exo 2", sans-serif`,
                  letterSpacing: "2px",
                  textTransform: "uppercase"
                }}
              >
                What We Offer
              </h2>
            </motion.div>

            {/* Service Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 ${
                    activeTab === service.id
                      ? "bg-blue-600 text-white scale-105 shadow-lg"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:scale-105"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {service.icon}
                  <span className="font-medium">{service.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Service Box with Floating Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative p-8 rounded-xl border border-gray-700 bg-gray-900/60 backdrop-blur-lg shadow-2xl overflow-hidden"
              style={{ willChange: "transform, opacity" }}
            >
              {/* Floating Glowing Particles */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute w-20 h-20 bg-blue-500/10 rounded-full blur-3xl"
                  animate={{ x: [-50, 50], y: [50, -50] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute w-16 h-16 bg-purple-500/10 rounded-full blur-3xl"
                  animate={{ x: [30, -30], y: [-30, 30] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {services.map(
                (service) =>
                  service.id === activeTab && (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative z-10"
                    >
                      {/* Service Icon & Title */}
                      <motion.div
                        whileHover={{
                          scale: 1.02,
                          rotateX: 3,
                          rotateY: -3,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }}
                      >
                        <div className="flex items-center gap-4 mb-6">
                          <motion.div
                            className="text-blue-400"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {service.icon}
                          </motion.div>
                          <motion.h3
                            className="text-2xl font-semibold text-white"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
                            whileHover={{
                              textShadow: "0px 0px 10px rgba(59,130,246,0.8)"
                            }}
                          >
                            {service.title}
                          </motion.h3>
                        </div>

                        {/* Service Description */}
                        <motion.p
                          className="text-gray-300 text-lg leading-relaxed font-['Inter']"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        >
                          {service.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  )
              )}
            </motion.div>
          </div>

          {/* Right Side Image (Only if it fits well) */}
          <div className="lg:w-1/2 hidden lg:flex justify-center">
            <motion.img
              src={futuristicBg}
              alt="Futuristic Technology"
              className="w-[85%] max-w-lg rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              
            />
          </div>
        </div>
      </section>


      {/* Resource Boxes Section */}
      <section className="relative py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Resource Center</h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore our knowledge base and stay informed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-blue-400 mb-4"
                  >
                    {resource.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-4">{resource.description}</p>
                  <button
                    disabled={!resource.isEnabled}
                    className={`flex items-center transition-colors duration-300 group ${
                      resource.isEnabled 
                        ? 'text-blue-400 hover:text-blue-300 cursor-pointer' 
                        : 'text-gray-500 cursor-not-allowed'
                    }`}
                    title={resource.isEnabled ? 'Learn More' : 'Coming Soon'}
                  >
                    <span>{resource.isEnabled ? 'Learn More' : 'Coming Soon'}</span>
                    <ExternalLink className={`w-4 h-4 ml-2 transform transition-transform ${
                      resource.isEnabled ? 'group-hover:translate-x-1' : ''
                    }`} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partnerships Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Technology Partnerships</h2>
            <p className="text-xl text-gray-300 mb-8">
              Powered by industry leaders in technology
            </p>
          </motion.div>
          <TechPartners />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your technology and talent goals
            </p>
            <Link 
              to="/contact" 
              className="button-primary inline-flex group"
            >
              <span className="relative z-10">Contact Us</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;