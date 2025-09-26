"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Shield,
  Smartphone,
  CheckCircle,
  Video,
  Star,
  Database,
  Zap,
} from "lucide-react";

export default function POSLandingPage() {
  const features = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Complete CRUD Operations",
      description:
        "Full management of Categories, Products, Suppliers, and Staff with intuitive interfaces and real-time updates.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Staff Attendance Tracking",
      description:
        "Monitor employee attendance, track working hours, and manage staff schedules with automated reporting.",
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Sales & Returns Management",
      description:
        "Record sales transactions and handle return-sales efficiently with detailed transaction history and reporting.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Purchase Management",
      description:
        "Track purchases and purchase-returns with supplier management and automated inventory updates.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Secure Database Isolation",
      description:
        "Each vendor gets their own isolated Firebase database ensuring complete data privacy and security.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Cross-Platform Flutter App",
      description:
        "Built with Flutter for seamless performance across iOS, Android, and desktop platforms.",
    },
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Reliability" },
    { number: "500+", label: "Active Businesses" },
    { number: "24/7", label: "Customer Support" },
    { number: "100%", label: "Data Privacy" },
  ];

  const pricingPlans = [
    {
      name: "Monthly",
      price: "₨ 6,000",
      period: "/month",
      features: [
        "All POS features",
        "Secure vendor isolation",
        "Cross-platform support",
        "24/7 customer support",
      ],
      popular: false,
    },
    {
      name: "Yearly",
      price: "₨ 60,000",
      period: "/year",
      features: [
        "All POS features",
        "Secure vendor isolation",
        "Cross-platform support",
        "Priority customer support",
        "Save 17%",
      ],
      popular: true,
      savings: "Save 17%",
    },
    {
      name: "Lifetime",
      price: "₨ 150,000",
      period: "/one-time",
      features: [
        "All POS features",
        "Secure vendor isolation",
        "Cross-platform support",
        "Lifetime updates",
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
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
          />
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
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-10 bg-primary rounded-full" />
                  <p className="text-primary font-medium text-sm uppercase tracking-wider">
                    MODERN POS SYSTEM
                  </p>
                </div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight"
                  variants={itemVariants}
                >
                  Smart POS for{" "}
                  <span className="gradient-text">Multi-Vendor</span> Businesses
                </motion.h1>

                <motion.p
                  className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg"
                  variants={itemVariants}
                >
                  Manage sales, inventory, staff, and more with complete data
                  privacy for each vendor. Built for businesses that value
                  security, efficiency, and modern design.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={itemVariants}
              >
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="#video-demo" className="flex items-center">
                    <Video className="mr-2 h-5 w-5" />
                    Watch Demo
                  </a>
                </motion.button>

                <motion.button
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://pos-tycoon.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Free Trial
                  </a>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
                <img
                  src="/pos.png"
                  alt="POS System Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            className="text-center text-muted-foreground text-sm font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Trusted by businesses worldwide
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              "Retail",
              "Restaurant",
              "Grocery",
              "Boutique",
              "Hardware",
              "Pharmacy",
            ].map((industry, index) => (
              <motion.div
                key={industry}
                className="group relative p-4 rounded-lg hover:bg-accent/50 transition-all duration-300 cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-12 w-32 bg-card border border-border rounded-lg flex items-center justify-center text-foreground font-medium group-hover:text-primary transition-colors">
                  {industry}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              variants={itemVariants}
            >
              <div className="h-1 w-10 bg-primary rounded-full" />
              <motion.p
                className="text-primary font-medium text-sm uppercase tracking-wider"
                variants={itemVariants}
              >
                FEATURES
              </motion.p>
              <div className="h-1 w-10 bg-primary rounded-full" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-balance"
              variants={itemVariants}
            >
              Everything Your{" "}
              <span className="gradient-text">Business Needs</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive POS features designed for modern businesses with
              complete data isolation and security.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-primary">{feature.icon}</div>
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} className="p-6" variants={itemVariants}>
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              variants={itemVariants}
            >
              <div className="h-1 w-10 bg-primary rounded-full" />
              <motion.p
                className="text-primary font-medium text-sm uppercase tracking-wider"
                variants={itemVariants}
              >
                PRICING
              </motion.p>
              <div className="h-1 w-10 bg-primary rounded-full" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-balance"
              variants={itemVariants}
            >
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              All plans include full features. Choose what works best for your
              business.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? "border-primary bg-card shadow-xl scale-105"
                    : "border-border bg-card/50 hover:border-border/80"
                }`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <p className="text-primary font-medium text-sm">
                      {plan.savings}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full mt-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:bg-accent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe Now
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-card" id="video-demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 text-balance"
              variants={itemVariants}
            >
              See It in <span className="gradient-text">Action</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Experience the power and simplicity of our POS system
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-muted p-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="aspect-video bg-muted flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  loop
                  className="w-full aspect-video"
                  poster="/pos-thumbnail.jpg"
                >
                  <source src="/pos.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                {[
                  "Sales Processing",
                  "Inventory Management",
                  "Staff Dashboard",
                  "Reporting Features",
                ].map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-2 rounded-lg font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
