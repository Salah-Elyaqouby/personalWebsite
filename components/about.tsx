"use client";

import { GraduationCap, Calendar, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Web Technology & Information Security",
    school: "Palestine Technical College, Gaza",
    period: "Sep 2022 - Present",
    description:
      "Studying web development, cybersecurity, and information protection with a focus on secure web applications.",
  },
  {
    degree: "High School Diploma - Smartphone App Development",
    school: "Soad Elsappah School, Gaza",
    period: "Jul 2020 - Jun 2021",
    description:
      "Specialized in mobile application design and development with focus on user-centered design.",
  },
];

const experience = [
  {
    title: "Accounts Officer",
    company: "Elkahlout Company",
    location: "Gaza City",
    period: "Jun 2024 - Present",
    description: "Managing financial records and accounting operations.",
  },
  {
    title: "Comprehensive Journalist",
    company: "El-Seraj Company",
    period: "Oct 2019 - Aug 2020",
    description: "Writing reports and covering various news topics.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I am a developer passionate about crafting accessible, pixel-perfect user interfaces that
          blend thoughtful design with robust engineering. My work lies at the intersection of
          design and development, creating experiences that are both beautiful and functional.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{item.degree}</h4>
                  <p className="text-primary text-sm mb-2">{item.school}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-primary text-sm mb-2">{item.company}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
