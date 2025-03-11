import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Menu, X, ChevronRight, Home, Users, Briefcase, UserPlus, MessageSquare } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: <Home className="w-4 h-4" /> },
  { path: '/about', label: 'About Us', icon: <Users className="w-4 h-4" /> },
  { path: '/services', label: 'Services', icon: <Briefcase className="w-4 h-4" /> },
  { path: '/join-us', label: 'Join Us', icon: <UserPlus className="w-4 h-4" /> },
  { path: '/contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> },
];

const CompanyLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-10 h-10 mr-3"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          boxShadow: [
            '0 0 10px rgba(59, 130, 246, 0.3)',
            '0 0 20px rgba(59, 130, 246, 0.5)',
            '0 0 10px rgba(59, 130, 246, 0.3)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/teknismart_logo.png"
          alt="Teknismart Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.3), transparent)',
          filter: 'blur(8px)',
        }}
      />
    </motion.div>
  );
};

const CompanyName = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="text-lg sm:text-xl font-bold relative flex flex-col items-start"
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* TEKNISMART - Main text */}
        <motion.div className="relative">
          <motion.span
            animate={{
              backgroundPosition: ['200% center', '-200% center'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="relative z-10 text-2xl sm:text-3xl bg-gradient-to-r from-white via-blue-400 to-white bg-[length:200%_auto] bg-clip-text text-transparent whitespace-nowrap tracking-wider font-['Orbitron'] uppercase"
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
            }}
          >
            Teknismart
          </motion.span>
          
          {/* Scanning line effect for TEKNISMART */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          {/* Glow effect for TEKNISMART */}
          <motion.div
            className="absolute inset-0 opacity-50"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
              filter: 'blur(4px)',
            }}
          />
        </motion.div>

        {/* SOLUTIONS INC - Subtitle */}
        <motion.div 
          className="relative mt-[-0.25rem]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="text-sm sm:text-base tracking-widest font-['Orbitron'] uppercase text-gray-400"
            style={{
              textShadow: '0 0 10px rgba(59, 130, 246, 0.3)',
            }}
          >
            Solutions Inc
          </motion.span>
          
          {/* Subtle scanning line for subtitle */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  const navSpring = useSpring(0, {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = navRef.current?.getBoundingClientRect();
    if (rect) {
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePosition(prev => ({
        x: prev.x + (x - prev.x) * 0.1,
        y: prev.y + (y - prev.y) * 0.1,
      }));
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollDelta = latest - lastScrollY.current;
    const shouldHide = scrollDelta > 0 && latest > 100;
    const shouldShow = scrollDelta < 0 || latest < 100;

    setIsVisible(shouldShow);
    setScrolled(latest > 20);
    lastScrollY.current = latest;

    navSpring.set(shouldHide ? -100 : 0);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      }
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        onMouseMove={handleMouseMove}
        style={{ 
          y: navSpring,
        }}
        className={`fixed top-0 left-0 right-0 w-full min-h-[60px] z-[9999] transition-all duration-700
          ${scrolled || isOpen 
            ? 'bg-gradient-to-b from-gray-900/20 via-gray-900/10 to-transparent' 
            : 'bg-transparent'}
          ${scrolled ? 'backdrop-blur-sm' : ''}`}
      >
        {/* Enhanced Multi-Layer Glow Effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={false}
        >
          {/* Primary glow layer */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.15), transparent 70%)`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
          />
          
          {/* Secondary pulsing glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1), transparent 70%)',
            }}
          />
          
          {/* Accent lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(59,130,246,0.05) 25%, 
                  rgba(59,130,246,0.05) 75%, 
                  transparent 100%
                )
              `,
              backgroundSize: '200% 100%',
              animation: 'shine 8s linear infinite',
            }} />
          </div>
        </motion.div>

        {/* Enhanced Progress Bar with double layer */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] overflow-hidden opacity-30">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
            style={{
              width: scrollY.get() / (document.documentElement.scrollHeight - window.innerHeight) * 100 + '%',
              transformOrigin: '0% 50%',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-[60px]">
            {/* Logo and Brand */}
            <NavLink 
              to="/" 
              className="relative group z-10 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <CompanyLogo />
              <CompanyName />
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg group transition-all duration-300 flex items-center gap-2
                    ${isActive 
                      ? 'text-white bg-blue-500/5 shadow-[0_0_20px_rgba(59,130,246,0.1)]' 
                      : 'text-gray-100 hover:text-white hover:bg-white/5'}`
                  }
                >
                  <span className="text-blue-400 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="font-medium relative">
                    {item.label}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </span>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    animate={{
                      background: [
                        'radial-gradient(circle at center, rgba(59,130,246,0.1), transparent 70%)',
                        'radial-gradient(circle at center, rgba(59,130,246,0.05), transparent 70%)',
                        'radial-gradient(circle at center, rgba(59,130,246,0.1), transparent 70%)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-50 p-2 text-white hover:text-blue-400 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'radial-gradient(circle at center, rgba(59,130,246,0.2), transparent 70%)',
                    'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent 70%)',
                    'radial-gradient(circle at center, rgba(59,130,246,0.2), transparent 70%)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-[60px] left-0 right-0 md:hidden bg-gray-900/90 backdrop-blur-sm border-t border-white/5 shadow-lg"
              >
                <div className="flex flex-col p-4 space-y-1">
                  {navItems.map((item) => (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group
                          ${isActive
                            ? 'bg-blue-500/5 text-white shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                            : 'text-gray-100 hover:bg-white/5 hover:text-white'
                          }`
                        }
                      >
                        <span className="text-blue-400 transition-transform duration-300 group-hover:scale-110">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-50 transition-transform duration-300 group-hover:translate-x-1" />
                        
                        {/* Mobile hover effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                          animate={{
                            background: [
                              'linear-gradient(90deg, transparent, rgba(59,130,246,0.05), transparent)',
                              'linear-gradient(90deg, transparent, rgba(59,130,246,0.02), transparent)',
                              'linear-gradient(90deg, transparent, rgba(59,130,246,0.05), transparent)',
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      {/* Spacer to prevent content from being hidden under the navbar */}
      <div className="h-[60px] w-full" />
    </>
  );
};

export default Navbar;