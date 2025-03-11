import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Shield, Heart, Users, Target, Code, Briefcase,
  Rocket, Zap, Award, Trophy, Star, Lightbulb, CheckCircle, Sparkles, ArrowRight
} from 'lucide-react';

const coreValues = {
  Integrity: {
    icon: <Shield className="w-12 h-12" />,
    title: "Integrity",
    description: "We believe in transparent and ethical business practices that build trust and foster long-term relationships.",
    points: [
      "Maintaining transparency in all client communications and project developments",
      "Upholding the highest standards of professional ethics and accountability",
      "Providing honest and realistic project assessments and timelines",
      "Ensuring data privacy and security in all operations"
    ],
    color: "from-blue-400 to-purple-500"
  },
  Innovation: {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovation",
    description: "Pushing the boundaries of technology to deliver cutting-edge solutions that drive business growth.",
    points: [
      "Continuously exploring and adopting emerging technologies",
      "Creating unique solutions tailored to specific business challenges",
      "Encouraging creative problem-solving and innovative thinking",
      "Investing in research and development for future technologies"
    ],
    color: "from-yellow-400 to-orange-500"
  },
  Excellence: {
    icon: <Star className="w-12 h-12" />,
    title: "Excellence",
    description: "Striving for the highest quality in everything we do, from code to customer service.",
    points: [
      "Maintaining rigorous quality control standards in all projects",
      "Continuous improvement through feedback and adaptation",
      "Regular training and skill enhancement programs",
      "Benchmarking against industry best practices"
    ],
    color: "from-green-400 to-emerald-500"
  },
  Partnership: {
    icon: <Users className="w-12 h-12" />,
    title: "Partnership",
    description: "Building lasting relationships through collaboration and mutual success.",
    points: [
      "Developing long-term strategic partnerships with clients",
      "Active collaboration and knowledge sharing",
      "Understanding and aligning with client business goals",
      "Regular communication and progress updates"
    ],
    color: "from-pink-400 to-rose-500"
  }
};

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Development",
    description: "The common ready-to-use software programs are less effective and more susceptible to security problems. For these reasons, we believe that custom software development is one of the best investments you can make for your business. Custom software programs are more flexible, secure, and will adhere to your requirements with unmatched accuracy and unparalleled performance.",
    details: "Our IT engineers at Teknismart Solutions Inc. are experts at designing cost-effective custom software for your company. Through all of our years of experience, adding value to businesses was our utmost priority. We succeeded to help different companies achieve their objectives. It is your turn now, let us help your business today."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consulting Services",
    description: "We offer IT consulting services in a wide range of technologies to aid our customers in building robust and cost-effective business solutions. We maintain a technical ladder of highly trained and experienced professionals and thus ensure success for our client companies.",
    details: "Our passion for client's success is best reflected in our selection and nurturing process of subject matter experts. We hire the best and brightest out there and take pride in them.",
    phases: [
      "First phase involves identifying gaps in the engineer's technology experience.",
      "In the Second phase, identified gaps are addressed through in-class training.",
      "In the third phase, engineers join our expert support network."
    ]
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Staffing Services",
    description: "Hiring and picking the right candidates can be challenging, but we've got it covered for you.",
    details: "Our flexibility and experience allow us to timely meet your hiring requirements by providing a candidate list of the right size with qualifications matching the open positions, at costs that perfectly fit your budget.",
    expertise: [
      "Understanding the technology needs of our client companies",
      "Identifying the perfect candidate with matching experience",
      "Ensuring cultural fit and long-term success"
    ]
  }
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),rgba(147,51,234,0.1))] opacity-50"
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)] blur-3xl"
        />
      </div>

      <motion.div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <motion.div
            animate={{
              y: [-10, 10],
              opacity: [0.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          />
          <motion.div
            animate={{
              y: [10, -10],
              opacity: [0.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
          />
          
          <div className="max-w-6xl mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-16 h-16 text-blue-400" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Us</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transforming businesses through innovative technology solutions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Inception Section */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold gradient-text mb-6">How did we get started?</h2>
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  The idea of building Teknismart Solutions Inc. came right after we noticed that monitoring and managing the IT aspect is the biggest challenge to most company owners. Thus, we created Teknismart with your needs in perspective.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We want to enable each one of our clients to tap into the real potential of their business and meet their project objectives.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-900/30 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </motion.div>

            <div className="space-y-8">
              {Object.values(coreValues).map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="mr-6"
                    >
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                        {value.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                  <div className="pl-6">
                    <div className="grid gap-4">
                      {value.points.map((point, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-300 text-lg">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={ref} className="py-20 bg-gray-900/30 backdrop-blur-sm relative">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold gradient-text mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 mb-6">Comprehensive solutions for your business needs</p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card p-6 max-w-3xl mx-auto mb-12"
              >
                <p className="text-2xl text-blue-400 italic font-medium">
                  "Inception is not about creation. It's about perception."
                </p>
                <p className="text-gray-300 mt-2">
                  - Our approach to delivering innovative solutions.
                </p>
              </motion.div>
            </motion.div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass-card p-8 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="text-blue-400 mr-4">{service.icon}</div>
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {service.details}
                    </p>
                    
                    {service.phases && (
                      <div className="pl-6 space-y-4">
                        {service.phases.map((phase, i) => (
                          <div key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-gray-300">{phase}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {service.expertise && (
                      <div className="pl-6 space-y-4">
                        {service.expertise.map((item, i) => (
                          <div key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <p className="text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mt-16"
            >
              <Link 
                to="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group text-lg"
              >
                Click here to read more about our services
                <ArrowRight className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default About;