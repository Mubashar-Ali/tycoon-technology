"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5,
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 1,
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p className="text-primary font-medium text-sm uppercase tracking-wider" variants={itemVariants}>
                INNOVATIVE DIGITAL SOLUTIONS
              </motion.p>
              <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance" variants={itemVariants}>
                Where deep tech meets <span className="gradient-text">human innovation</span>
              </motion.h1>
              <motion.p className="text-xl text-muted-foreground leading-relaxed text-pretty" variants={itemVariants}>
                Tycoon Technology transforms businesses with cutting-edge digital solutions. Our expert team delivers
                seamless technology integration, helping you grow smarter and faster in the digital landscape.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover Our Services
              </motion.button>
              <motion.button
                className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Our Work
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { value: "2k+", label: "Active Members" },
                { value: "98%", label: "Satisfied Customers" },
                { value: "4.7", label: "User Rating" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div key={index} className="text-center" variants={itemVariants}>
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div className="relative" variants={imageVariants} initial="hidden" animate="visible">
            <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img
                // src="/professional-tech-team-working-on-innovative-digit.jpg"
                src="https://media.istockphoto.com/id/1985871636/photo/artificial-intelligence-domination-light-bulb-brain-idea-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=nfBFeHfr0JMGiRB75K6K7lLBrkyoWfn5vQ6uagl_9ZU="
                alt="Tycoon Technology Team"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10"
              animate={{
                x: [0, 5, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
