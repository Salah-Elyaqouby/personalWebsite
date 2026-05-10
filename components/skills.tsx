"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "HTML / CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Design & UI/UX",
    skills: [
      { name: "UI Design", level: 85 },
      { name: "Adobe XD", level: 80 },
      { name: "Figma", level: 75 },
      { name: "Graphic Design", level: 70 },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Android Studio", level: 75 },
      { name: "Mobile App Design", level: 80 },
      { name: "React Native", level: 65 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Python", level: 70 },
      { name: "C++", level: 65 },
      { name: "Microsoft 365", level: 90 },
      { name: "Git / GitHub", level: 80 },
    ],
  },
];

const certifications = [
  { name: "UX/UI Design", issuer: "Tech Box Academy", year: "2021", link: null },
  { name: "Graphic Design", issuer: "Tech Box Academy", year: "2020", link: null },
  {
    name: "Learning How to Learn",
    issuer: "Coursera - Deep Teaching Solutions",
    year: "2023",
    link: "https://coursera.org/verify/65DJQLVFBQHW",
  },
  {
    name: "Time Management for Productivity",
    issuer: "Coursera - UC Irvine",
    year: "2022",
    link: "https://coursera.org/verify/EE2LXC3V6CN8",
  },
  {
    name: "Microsoft 365",
    issuer: "ATHR",
    year: "2023",
    link: null,
  },
  {
    name: "Community Initiatives",
    issuer: "ATHR",
    year: "2023",
    link: null,
  },
  {
    name: "WOSM Safe from Harm",
    issuer: "World Organization of Scout Movement",
    year: "2022",
    link: "https://certificates.easygenerator.com/636011f516be1e0007d081bd.pdf",
  },
  { name: "Scouting Leadership", issuer: "Palestinian Scout Association", year: "2023", link: null },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive overview of my technical skills and professional certifications.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-background border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, borderColor: "hsl(var(--primary))" }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h3
          className="text-2xl font-semibold text-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications & Courses
        </motion.h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-background border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer} - {cert.year}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                  </div>
                </a>
              ) : (
                <div className="p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors">
                  <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
