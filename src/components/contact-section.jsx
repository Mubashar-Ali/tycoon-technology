"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-primary font-medium text-sm uppercase tracking-wider mb-4"
                variants={itemVariants}
              >
                GET IN TOUCH
              </motion.p>
              <motion.h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" variants={itemVariants}>
                Ready to transform your <span className="gradient-text">digital presence</span>?
              </motion.h2>
              <motion.p className="text-xl text-muted-foreground leading-relaxed text-pretty" variants={itemVariants}>
                Let's discuss your project and explore how our innovative solutions can help your business grow and
                succeed in the digital landscape.
              </motion.p>
            </motion.div>

            {/* Contact Details */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  ),
                  title: "Head Office",
                  content: (
                    <>
                      Missri Plaza, Crown Center
                      <br />
                      Basement, Office No 1, Dubai Chowk
                      <br />
                      Faiz Colony Model Town A<br />
                      Bahawalpur, Punjab, Pakistan
                    </>
                  ),
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  ),
                  title: "Email Us",
                  content: (
                    <>
                      info@tycoontechnology.com
                      <br />
                      support@tycoontechnology.com
                    </>
                  ),
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  ),
                  title: "Call Us",
                  content: (
                    <>
                      +92 300 1234567
                      <br />
                      +92 333 9876543
                    </>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
                "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              ].map((iconPath, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={iconPath} />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your full name", required: true },
                  { id: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                ].map((field, index) => (
                  <motion.div key={field.id} variants={itemVariants}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
                      {field.label}
                    </label>
                    <motion.input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground"
                      placeholder={field.placeholder}
                      required={field.required}
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <motion.input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground"
                  placeholder="Your company name"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell us about your project..."
                  required
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
