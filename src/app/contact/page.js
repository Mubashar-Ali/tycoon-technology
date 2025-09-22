"use client";

import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
        <div className="absolute inset-0 bg-[url('/modern-office-technology-workspace.jpg')] bg-cover bg-center opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Empowering businesses with innovative solutions. Let's connect and
            shape the future of technology together.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 lg:p-12 bg-muted/50"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get in touch
                </h2>
                <p className="text-muted-foreground mb-12 leading-relaxed">
                  Empowering businesses with innovative solutions. Let's connect
                  and shape the future of technology together.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Head Office
                      </h3>
                      <p className="text-muted-foreground">
                        Missri Plaza, Crown Center Basement, Office No. 2,Dubai
                        Chowk Model Town A Bahawalpur, Punjab, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Email Us
                      </h3>
                      <p className="text-muted-foreground">
                        kashif@tycoon.technology
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Call Us
                      </h3>
                      <p className="text-muted-foreground">
                        Phone: +923060626699
                        <br />
                        Fax: 0623009634
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Follow our social media
                  </h3>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      <span className="font-bold">f</span>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/60 transition-colors"
                    >
                      <span className="font-bold">in</span>
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary/60 rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/40 transition-colors"
                    >
                      <span className="font-bold">ig</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-8 lg:p-12"
              >
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={6}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none text-foreground"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-primary-foreground py-4 px-8 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                  >
                    Send
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
