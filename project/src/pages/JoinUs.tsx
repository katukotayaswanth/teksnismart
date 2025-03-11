import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, MapPin, Briefcase, Clock } from 'lucide-react';

const jobs = [
  {
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    description: "Join our core team to build next-generation web applications",
    requirements: [
      "Experience with React, Node.js, and TypeScript",
      "Strong understanding of cloud services (AWS/GCP)",
      "Background in scalable architecture",
    ]
  },
  {
    title: "AI/ML Engineer",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Help build cutting-edge AI solutions for enterprise clients",
    requirements: [
      "Deep learning and neural networks expertise",
      "Python and TensorFlow experience",
      "Research background is a plus",
    ]
  },
  {
    title: "DevOps Engineer",
    location: "New York, NY",
    type: "Full-time",
    experience: "4+ years",
    description: "Lead our infrastructure and deployment automation efforts",
    requirements: [
      "Kubernetes and Docker expertise",
      "CI/CD pipeline experience",
      "Infrastructure as Code knowledge",
    ]
  },
  {
    title: "UX/UI Designer",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    description: "Create beautiful and intuitive user experiences",
    requirements: [
      "Strong portfolio of web/mobile designs",
      "Figma and Adobe Creative Suite",
      "User research experience",
    ]
  },
];

const JoinUs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      <section ref={ref} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold gradient-text mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="job-card"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-300 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{job.description}</p>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="button-primary mt-4">
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;