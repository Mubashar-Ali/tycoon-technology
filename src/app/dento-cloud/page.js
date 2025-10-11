"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";

const DentoDeskPage = () => {
  const pricingPlans = [
    {
      name: "Monthly",
      price: "₨ 15,000",
      period: "/month",
      features: [
        "Patient appointment scheduling",
        "Dental treatment records management",
        "Online patient booking (Web & App)",
        "Basic reporting and analytics",
        "24/7 support",
      ],
      popular: false,
    },
    {
      name: "Yearly",
      price: "₨ 160,000",
      period: "/year",
      features: [
        "All Monthly plan features",
        "Custom treatment plans",
        "Digital prescriptions",
        "Priority support",
        "SMS & Email notifications",
        "Save 17%",
      ],
      popular: true,
      savings: "Save 17%",
    },
    {
      name: "Lifetime",
      price: "₨ 1,000,000",
      period: "/one-time",
      features: [
        "All Yearly plan features",
        "Free lifetime updates",
        "Unlimited staff & branches",
        "Custom domain & branding",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ];

  const features = [
    {
      icon: "📅",
      title: "Smart Appointment Booking",
      description:
        "Easily manage appointments with automated reminders and real-time scheduling.",
      details: [
        "Online booking system",
        "SMS & email reminders",
        "Calendar integration",
        "Waitlist management",
      ],
    },
    {
      icon: "📊",
      title: "Practice Growth Tools",
      description:
        "Track clinic performance, generate reports, and optimize operations for growth.",
      details: [
        "Revenue analytics",
        "Patient insights",
        "Performance metrics",
        "Growth forecasting",
      ],
    },
    {
      icon: "👥",
      title: "Seamless Patient Management",
      description:
        "Securely store patient records, medical histories, and treatment plans in one place.",
      details: [
        "Digital patient records",
        "Treatment history",
        "Insurance management",
        "HIPAA compliant",
      ],
    },
    {
      icon: "💳",
      title: "Billing & Payments",
      description:
        "Streamlined billing system with multiple payment options and insurance processing.",
      details: [
        "Automated billing",
        "Payment processing",
        "Insurance claims",
        "Financial reporting",
      ],
    },
    {
      icon: "📱",
      title: "Mobile Access",
      description:
        "Access your practice management system anywhere with our mobile-responsive design.",
      details: [
        "Mobile dashboard",
        "Remote access",
        "Cloud synchronization",
        "Offline capabilities",
      ],
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description:
        "Enterprise-grade security with full HIPAA compliance and data encryption.",
      details: [
        "Data encryption",
        "HIPAA compliance",
        "Secure backups",
        "Access controls",
      ],
    },
  ];

  const stats = [
    { number: "500+", label: "Dental Practices" },
    { number: "50K+", label: "Patients Managed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
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
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                DENTAL PRACTICE MANAGEMENT
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="text-balance">
                  Revolutionize Your{" "}
                  <span className="text-primary">Dental Practice</span> with
                  DentoDesk
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                From appointment scheduling to billing and treatment
                management—our comprehensive dental software keeps your clinic
                running smoothly. Focus more on patient care, and let us handle
                the workflow.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a
                  href="https://dento.tycoon.technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.button>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
                {/* <img src="/modern-dental-practice-management-dashboard-interf.jpg" alt="DentoDesk Dashboard" className="w-full h-auto" /> */}
                <img
                  src="https://media.istockphoto.com/id/1455851883/photo/dental-procedure-with-the-help-of-3d-tooth-scanner-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=3g4cTM4UI9_5ua1dKNVKDZp0sWNBmVWm0vkvvymBbM4="
                  alt="DentoDesk Dashboard"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              COMPREHENSIVE FEATURES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Your Practice Needs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Streamline your dental practice with our all-in-one management
              solution designed specifically for modern dental clinics.
            </p>
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
                className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
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
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${plan.popular
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Intuitive Dashboard Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience a clean, modern interface that makes managing your
              dental practice effortless and efficient.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-muted p-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <img
                // src="/dental-practice-management-software-dashboard-with.jpg"
                src="/dento.png"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of dental practices that have streamlined their
              operations with DentoDesk. Start your free trial today and see the
              difference.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <a
                href="https://dento.tycoon.technology"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DentoDeskPage;
