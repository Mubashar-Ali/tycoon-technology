"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const SocialProofSection = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const brands = [
    { name: "Pizza Town", logo: "/pizza-restaurant-logo.png" },
    { name: "Lasani BBQ", logo: "/bbq-restaurant-logo.jpg" },
    { name: "Daffodils Alleria", logo: "/flower-shop-logo.png" },
    { name: "Maleeka's Marque", logo: "/event-management-logo.jpg" },
    { name: "Asia Restaurant", logo: "/asian-restaurant-logo.jpg" },
    { name: "Money Heist Restaurant", logo: "/themed-restaurant-logo.jpg" },
  ]

  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance for our clients",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Proven track record in digital solutions",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const statVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  if (!mounted) return null

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trusted By Section */}
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p className="text-primary font-medium text-sm uppercase tracking-wider mb-6" variants={itemVariants}>
            TRUSTED BY
          </motion.p>
          <motion.h2 className="text-2xl md:text-3xl font-bold mb-12 text-balance" variants={itemVariants}>
            World-class brands and organizations of all sizes
          </motion.h2>

          {/* Brand Logos */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
            variants={containerVariants}
          >
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                className="group relative p-4 rounded-lg hover:bg-accent/50 transition-all duration-300 cursor-pointer"
                variants={logoVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} logo`}
                  className="h-12 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
              variants={statVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-primary"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1 + 0.3,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div
                  className="text-lg font-semibold text-foreground"
                  variants={itemVariants}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.label}
                </motion.div>
                <div className="text-sm text-muted-foreground text-pretty">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Ready to join our <span className="gradient-text">success stories</span>?
            </motion.h3>
            <motion.p
              className="text-lg text-muted-foreground text-pretty"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss how we can help transform your business with our proven digital solutions and expertise.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Consultation
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProofSection
