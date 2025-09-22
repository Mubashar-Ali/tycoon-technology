"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const DentoDeskPage = () => {
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
                <motion.button
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
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
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbnRhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="DentoDesk Dashboard Interface"
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
              <motion.button
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DentoDeskPage;
