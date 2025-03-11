import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import {
  Code, Users, Database, Cloud, Server,
  Globe, Cpu, Shield, Terminal, Layers,
  Monitor, Smartphone, Wifi, Settings,
  ArrowRight, Briefcase, CheckCircle,
  Zap, Lock, FileText, HelpCircle,
  TestTube, ClipboardList
} from 'lucide-react';

const mainServices = [
  {
    icon: <Code className="w-12 h-12" />,
    title: "Integration & Development",
    description: "We design and build custom applications that fit your business needs perfectly.",
    features: [
      "Custom application development",
      "Web & software solutions",
      "Legacy system modernization",
      "API development & integration",
      "Cloud-native applications",
      "Mobile app development"
    ]
  },
  {
    icon: <Database className="w-12 h-12" />,
    title: "Database Management",
    description: "Structure, monitor, and manage your data efficiently across its lifecycle.",
    features: [
      "Database administration",
      "Performance optimization",
      "Data migration",
      "Backup & recovery",
      "Security implementation",
      "24/7 monitoring"
    ]
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "ERP Solutions",
    description: "Optimize business workflows through ERP implementation and management.",
    features: [
      "ERP implementation",
      "System integration",
      "Process automation",
      "Custom modules",
      "Training & support",
      "Performance monitoring"
    ]
  },
  {
    icon: <Server className="w-12 h-12" />,
    title: "Data Warehousing",
    description: "Help businesses collect, store, and utilize data for strategic decision-making.",
    features: [
      "Data warehouse design",
      "ETL processes",
      "Business intelligence",
      "Analytics integration",
      "Performance tuning",
      "Scalability planning"
    ]
  },
  {
    icon: <Lock className="w-12 h-12" />,
    title: "Identity & Access Management",
    description: "Secure and manage identity access for better compliance and safety.",
    features: [
      "Access control",
      "Identity verification",
      "Policy management",
      "Compliance monitoring",
      "Security audits",
      "User lifecycle management"
    ]
  },
  {
    icon: <FileText className="w-12 h-12" />,
    title: "Content Management",
    description: "Streamline and manage digital content efficiently across various platforms.",
    features: [
      "CMS implementation",
      "Content strategy",
      "Workflow automation",
      "Version control",
      "Integration services",
      "User training"
    ]
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "IT Security",
    description: "We develop and implement security frameworks to protect digital assets.",
    features: [
      "Security assessment",
      "Threat detection",
      "Vulnerability management",
      "Security monitoring",
      "Incident response",
      "Compliance management"
    ]
  },
  {
    icon: <ClipboardList className="w-12 h-12" />,
    title: "Business Analysis & Project Management",
    description: "We identify business gaps and implement strategies for growth.",
    features: [
      "Requirements analysis",
      "Process optimization",
      "Project planning",
      "Risk management",
      "Stakeholder management",
      "Performance tracking"
    ]
  },
  {
    icon: <TestTube className="w-12 h-12" />,
    title: "Testing Services",
    description: "We ensure software applications are secure, scalable, and reliable before deployment.",
    features: [
      "Functional testing",
      "Performance testing",
      "Security testing",
      "Automated testing",
      "User acceptance testing",
      "Quality assurance"
    ]
  },
  {
    icon: <HelpCircle className="w-12 h-12" />,
    title: "Help Desk Services",
    description: "We provide expert IT support to ensure seamless business operations.",
    features: [
      "24/7 technical support",
      "Issue resolution",
      "System maintenance",
      "User training",
      "Remote assistance",
      "Service desk management"
    ]
  }
];

const technologies = [
  { icon: <Terminal className="w-8 h-8" />, name: "Java/J2EE", description: "Enterprise-grade applications and microservices" },
  { icon: <Layers className="w-8 h-8" />, name: ".NET/C#", description: "Robust and scalable Microsoft technology solutions" },
  { icon: <Database className="w-8 h-8" />, name: "Database Management", description: "Efficient data handling and optimization" },
  { icon: <Shield className="w-8 h-8" />, name: "SailPoint", description: "Identity and access management solutions" },
  { icon: <Server className="w-8 h-8" />, name: "Big Data", description: "Data processing and analytics at scale" },
  { icon: <FileText className="w-8 h-8" />, name: "Documentum", description: "Enterprise content management" },
  { icon: <Cloud className="w-8 h-8" />, name: "Oracle Cloud", description: "Enterprise cloud solutions and databases" },
  { icon: <Globe className="w-8 h-8" />, name: "AWS", description: "Cloud infrastructure and serverless applications" },
  { icon: <Settings className="w-8 h-8" />, name: "DevOps", description: "Automated deployment and infrastructure" }
];

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen pt-20">
      {/* New Hero Section with 3D Grid Effect */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`,
          }} />
          
          {/* Animated Grid Lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center -100%',
          }}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'linear',
              }}
            />
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <Zap className="w-20 h-20 text-blue-400" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-blue-400/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="gradient-text inline-block"
              >
                Our Services
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12"
            >
              The IT industry is evolving rapidly, and businesses need to adapt to stay competitive. 
              Our comprehensive suite of services is designed to help you navigate this digital 
              transformation journey successfully.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20],
            opacity: [0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute left-10 top-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20],
            opacity: [0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute right-10 bottom-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        />
      </section>

      {/* Main Services Section */}
      <section ref={servicesRef} className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Our Core IT Expertise</h2>
            <p className="text-xl text-gray-300">
              Comprehensive solutions tailored to elevate your business
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-500"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-blue-400 mb-6"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Expertise Section */}
      <section ref={techRef} className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">Technologies We Specialize In</h2>
            <p className="text-xl text-gray-300">
              Mastering the tools that power digital innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={techInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-6 rounded-xl text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent"
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Unlock Your Business Potential
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help you achieve your technology goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group text-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              Get a Free Consultation
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;