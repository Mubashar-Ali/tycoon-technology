"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore"
import { db } from "@/lib/firebase" 

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch testimonials from Firebase Firestore with real-time listener
  useEffect(() => {
    console.log("Setting up Firestore listener...")
    
    try {
      // Create query - handle potential timestamp issues
      let testimonialsQuery
      try {
        testimonialsQuery = query(
          collection(db, "testimonials"),
          orderBy("createdAt", "desc")
        )
      } catch (queryError) {
        console.warn("Timestamp ordering failed, using default order:", queryError)
        // Fallback without ordering if timestamp field causes issues
        testimonialsQuery = query(collection(db, "testimonials"))
      }

      const unsubscribe = onSnapshot(
        testimonialsQuery,
        (querySnapshot) => {
          console.log("Received snapshot with", querySnapshot.size, "documents")
          
          const testimonialsData = querySnapshot.docs.map(doc => {
            const data = doc.data()
            console.log("Document data:", data)
            return {
              id: doc.id,
              ...data
            }
          })
          
          setTestimonials(testimonialsData)
          setError(null)
          setLoading(false)
          setMounted(true)
        },
        (err) => {
          console.error("Error in real-time testimonials listener:", err)
          setError("Failed to load testimonials. Please check your Firebase configuration.")
          setLoading(false)
          setMounted(true)
        }
      )

      // Cleanup subscription on unmount
      return () => {
        console.log("Cleaning up Firestore listener")
        unsubscribe()
      }
    } catch (err) {
      console.error("Error setting up Firestore listener:", err)
      setError("Failed to connect to database. Please try again later.")
      setLoading(false)
      setMounted(true)
    }
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    if (!mounted || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [mounted, testimonials.length])

  // Debug: Log current state
  useEffect(() => {
    console.log("Current state:", { loading, error, testimonialsCount: testimonials.length, mounted })
  }, [loading, error, testimonials.length, mounted])

  if (!mounted && loading) {
    return (
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">Loading testimonials...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-red-500">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="mt-4 bg-primary text-white px-4 py-2 rounded"
            >
              Retry
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (testimonials.length === 0 && !loading) {
    return (
      <section id="testimonials" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="text-muted-foreground">No testimonials available yet.</p>
            <p className="text-sm text-muted-foreground mt-2">
              Check your Firebase console to ensure you have data in the 'testimonials' collection.
            </p>
          </div>
        </div>
      </section>
    )
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
            className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
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
                  "{testimonials[currentTestimonial]?.quote || "No testimonial text available"}"
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
                      src={testimonials[currentTestimonial]?.logo || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial]?.clientName || "Client"}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg"
                      }}
                    />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonials[currentTestimonial]?.clientName || "Anonymous Client"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial]?.clientTitle || "Customer"}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonials[currentTestimonial]?.company || "Business"}
                    </div>
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
                {[...Array(testimonials[currentTestimonial]?.stars || 5)].map((_, i) => (
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
              key={testimonial.id}
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
                    src={testimonial.logo || "/placeholder.svg"}
                    alt={testimonial.clientName || "Client"}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "/placeholder.svg"
                    }}
                  />
                </motion.div>
                <div>
                  <div className="font-semibold text-sm text-foreground">
                    {testimonial.clientName || "Anonymous Client"}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.company || "Business"}
                  </div>
                </div>
              </motion.div>
              <p className="text-sm text-muted-foreground line-clamp-3">
                "{testimonial.quote || "No testimonial text available"}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection