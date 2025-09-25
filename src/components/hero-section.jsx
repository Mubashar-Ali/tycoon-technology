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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern - Modern gradient effect */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-60"
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-gradient-to-tl from-primary/5 via-accent/10 to-transparent opacity-50"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div className="flex items-center gap-2" variants={itemVariants}>
                <div className="h-1 w-10 bg-primary rounded-full"></div>
                <motion.p className="text-primary font-medium text-sm uppercase tracking-wider" variants={itemVariants}>
                  TECH INNOVATION
                </motion.p>
              </motion.div>
              <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance" variants={itemVariants}>
                <span className="gradient-text">Digital Solutions</span> for Growth
              </motion.h1>
              <motion.p className="text-lg text-muted-foreground max-w-lg" variants={itemVariants}>
                Transforming businesses with cutting-edge technology integration.
              </motion.p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { value: "2k+", label: "Clients" },
                { value: "98%", label: "Satisfaction" },
                { value: "4.7", label: "Rating" },
                { value: "5+", label: "Years" },
              ].map((stat, index) => (
                <motion.div key={index} className="text-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/30" variants={itemVariants}>
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
            <motion.div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <img
                src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
                alt="Tycoon Technology"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-60 mix-blend-overlay"></div>
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
