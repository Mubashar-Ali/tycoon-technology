"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const testimonials = [
    {
      name: "Pizza Town",
      role: "Business Manager",
      company: "Pizza Town Restaurant",
      image: "/pizza-restaurant-logo.png",
      testimonial:
        "Working with Tycoon Technology has taken our visual branding to the next level. From vibrant food photography to mouthwatering video ads, they've helped us attract more foot traffic and increase online orders. Their creativity and commitment are unmatched!",
      rating: 5,
    },
    {
      name: "Lasani BBQ",
      role: "CEO",
      company: "Lasani BBQ Restaurant",
      image: "/bbq-restaurant-logo.jpg",
      testimonial:
        "Tycoon Technology truly understands the flavor of our brand. Their marketing videos capture the heart of our BBQ experience and make our dishes irresistible even on screen. We've seen a huge improvement in our social media engagement since teaming up with them!",
      rating: 5,
    },
    {
      name: "Daffodils Alleria",
      role: "Head Store Manager",
      company: "Daffodils Flower Shop",
      image: "/flower-shop-logo.png",
      testimonial:
        "Tycoon Technology helped us bloom—literally! They built a stunning e-commerce website for our flower and gift shop that feels as elegant as our bouquets. Their product shoots made our arrangements pop with beauty, and their social media management has grown our customer base every single week. From online orders to event bookings, everything runs smoother and looks better thanks to them!",
      rating: 5,
    },
    {
      name: "Maleeka's Marque",
      role: "Operational Manager",
      company: "Maleeka's Event Management",
      image: "/event-management-logo.jpg",
      testimonial:
        "The team at Tycoon Technology transformed our event management business with their comprehensive digital solutions. Their website development and social media strategies have significantly increased our client inquiries and bookings.",
      rating: 5,
    },
    {
      name: "Asia Restaurant",
      role: "Owner & Chef",
      company: "Asia Restaurant",
      image: "/asian-restaurant-logo.jpg",
      testimonial:
        "Exceptional service and outstanding results! Tycoon Technology's video production and digital marketing have helped us showcase our authentic Asian cuisine to a broader audience. Our online presence has never been stronger.",
      rating: 5,
    },
    {
      name: "Money Heist Restaurant",
      role: "Business Manager",
      company: "Money Heist Themed Restaurant",
      image: "/themed-restaurant-logo.jpg",
      testimonial:
        "Tycoon Technology perfectly captured the unique theme and atmosphere of our restaurant through their creative content and marketing strategies. They understand how to make a brand stand out in a competitive market.",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [mounted, testimonials.length])

  if (!mounted) return null

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

  const testimonialVariants = {
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-32 left-16 w-80 h-80 bg-primary/25 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.25, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-32 right-16 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.15, 0.03],
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
              CLIENT STORIES
            </motion.p>
            <div className="h-1 w-10 bg-primary rounded-full"></div>
          </motion.div>
          <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance" variants={itemVariants}>
            <span className="gradient-text">Success</span> Stories
          </motion.h2>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-lg translate-y-1/3 -translate-x-1/3"></div>
            
            {/* Quote Icon */}
            <motion.div
              className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </svg>
            </motion.div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTestimonial}
                  className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-pretty"
                  variants={testimonialVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  "{testimonials[currentTestimonial].testimonial}"
                </motion.p>
              </AnimatePresence>

              {/* Client Info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`client-${currentTestimonial}`}
                  className="flex items-center space-x-4"
                  variants={testimonialVariants}
                  initial="exit"
                  animate="enter"
                  exit="exit"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full overflow-hidden bg-accent"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    <div className="text-sm text-primary">{testimonials[currentTestimonial].company}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Rating */}
              <motion.div
                className="flex items-center space-x-1 mt-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.3, type: "spring" }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </motion.svg>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Navigation */}
        <motion.div
          className="flex justify-center space-x-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-primary scale-125" : "bg-border hover:bg-primary/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* All Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? "bg-primary/10 border-primary/50 scale-105"
                  : "bg-card/20 border-border/30 hover:border-border/60 hover:bg-card/30"
              }`}
              variants={itemVariants}
              onClick={() => setCurrentTestimonial(index)}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex items-center space-x-3 mb-4"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden bg-accent"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </motion.div>
              <p className="text-sm text-muted-foreground line-clamp-3">"{testimonial.testimonial}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
