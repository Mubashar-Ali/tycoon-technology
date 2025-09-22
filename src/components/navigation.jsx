"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Dento Desk", href: "/dento-desk" }, // Added Dento Desk to navigation
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/contact" },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground">Tycoon Technology</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium relative group"
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.button
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                className={`bg-foreground block h-0.5 w-6 rounded-sm`}
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 2 : -2,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`bg-foreground block h-0.5 w-6 rounded-sm my-0.5`}
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className={`bg-foreground block h-0.5 w-6 rounded-sm`}
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -2 : 2,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 mt-4"
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation
