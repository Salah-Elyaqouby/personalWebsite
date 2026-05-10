"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Salah-Elyaqouby",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/salah-eldin-elyaqouby-4a7259248",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/SalahElyaqouby",
    icon: Facebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sala7_kocovali/",
    icon: Instagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/972567475435",
    icon: MessageCircle,
  },
  {
    name: "Email",
    href: "mailto:salahyaqouby@gmail.com",
    icon: Mail,
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              className="text-primary font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hello, I am
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Salah Eldin Elyaqouby
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Web Developer & UI/UX Designer
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Motivated and detail-oriented professional with a strong background in technology and
              design. Passionate about building user-centered solutions, continuously learning new
              technologies, and contributing to impactful projects.
            </motion.p>
            <motion.div
              className="flex items-center gap-2 text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Gaza, Palestine</span>
            </motion.div>
            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                className="ml-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/profile.jpeg"
                  alt="Salah Eldin Elyaqouby"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
