"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10" />
        <div className="absolute inset-0 bg-[url('/shopping-cart-technology-background.jpg')] bg-cover bg-center opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-foreground mb-8 text-balance"
          >
            To Become a World Class
            <br />
            <span className="text-primary">Technology Company</span>
          </motion.h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold mb-4 tracking-wide">
                WHO WE ARE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {"It's more than a name. It's a promise."}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are Tycoon Technology — building digital futures with
                creativity, code, and content. From development to digital
                marketing, we bring your ideas to life with precision and
                passion.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 rounded-full w-80 h-80 mx-auto flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">1+</div>
                  <div className="text-foreground font-medium">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Web & App Development",
                description:
                  "Crafting fast, secure, and scalable websites and mobile apps tailored to your business needs.",
              },
              {
                title: "Social Media Marketing",
                description:
                  "Strategic content, campaigns, and ads that grow your reach, engage your audience, and drive results.",
              },
              {
                title: "Video Production",
                description:
                  "From concept to camera — we create compelling commercials, product shoots, and storytelling content.",
              },
              {
                title: "One-Stop Tech House",
                description:
                  "Design, develop, promote, and film — everything under one roof to fuel your digital success.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Teamwork makes the dream work.
            </h2>
            <p className="text-xl text-muted-foreground">
              We are the best we are the dreamers and we will work to make it
              Happen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Kashif Ajmal Malik",
                role: "Founder",
                image: "/kashif.jpeg",
              },
              {
                name: "Jahanzaib",
                role: "PhotoGrapher",
                image: "/jahnzaib.jpeg",
              },
              {
                name: "Mubashar Ali",
                role: "Sr Full Stack Developer",
                image: "/mubashar.jpeg",
              },
              {
                name: "Aman Ullah",
                role: "Sr Flutter Developer",
                image: "/aman.jpg",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-border text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-50 h-50 rounded-full object-cover border-4 border-primary shadow-md"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
