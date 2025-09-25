"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "We create stunning, high-performance websites tailored to your business goals. Whether you're a startup or an established brand, our web development team ensures your site is fast, responsive, secure, and SEO-friendly.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Frameworks"],
    },
    {
      icon: "📱",
      title: "App Development",
      description:
        "Our team develops intuitive, scalable mobile and web apps for Android, iOS, and cross-platform environments, focused on functionality and user engagement.",
      features: ["Cross-Platform", "Native Performance", "User-Centric Design", "Scalable Architecture"],
    },
    {
      icon: "📢",
      title: "Social Media Marketing",
      description:
        "We grow your brand online through strategic content, targeted ads, and performance-driven campaigns across all major social platforms.",
      features: ["Content Strategy", "Targeted Advertising", "Analytics & Insights", "Brand Growth"],
    },
    {
      icon: "🎬",
      title: "Film Making",
      description:
        "We transform raw footage into compelling visual content with clean cuts, graphics, and effects—ideal for promotions, social media, and branding.",
      features: ["Professional Editing", "Motion Graphics", "Color Grading", "Multi-Format Export"],
    },
    {
      icon: "🎥",
      title: "Production House",
      description:
        "From scripting to shooting and editing, we manage full-scale video production to deliver high-quality, creative content for your business or events.",
      features: ["Full Production", "Creative Direction", "Professional Equipment", "Post-Production"],
    },
    {
      icon: "💡",
      title: "Digital Consultancy",
      description:
        "We provide expert digital strategies, IT solutions, and tech-driven insights to streamline your operations and boost business growth.",
      features: ["Strategic Planning", "Technology Integration", "Process Optimization", "Growth Analytics"],
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

  const cardVariants = {
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

  return (
    <section id="services" className="py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-40 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-40 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="flex items-center justify-center gap-2 mb-4" variants={itemVariants}>
            <div className="h-1 w-10 bg-primary rounded-full"></div>
            <motion.p className="text-primary font-medium text-sm uppercase tracking-wider" variants={itemVariants}>
              SERVICES
            </motion.p>
            <div className="h-1 w-10 bg-primary rounded-full"></div>
          </motion.div>
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance" variants={itemVariants}>
            <span className="gradient-text">Solutions</span> We Deliver
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`h-full p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 ${hoveredService === index ? "shadow-2xl border-primary/50" : "hover:border-border/80"
                  }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Service Icon */}
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-3xl">{service.icon}</span>
                </motion.div>

                {/* Service Content */}
                <div className="space-y-4">
                  <motion.h3
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{service.description}</p>

                  {/* Features */}
                  <motion.div
                    className="space-y-2 pt-2"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                        },
                      },
                    }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    className="mt-6 text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200 flex items-center space-x-2 group/btn"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Learn more</span>
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">Ready to transform your business with our solutions?</p>
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
