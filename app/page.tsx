"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";

export default function Home() {
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
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0a192f]/80 backdrop-blur-sm border-b border-[#233554]"
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-semibold text-[#64ffda]"
            >
              Portfolio
            </motion.a>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-8"
            >
              {["About", "Experience", "Projects"].map((item, index) => (
                <motion.a
                  key={item}
                  variants={itemVariants}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ y: -2, color: "#64ffda" }}
                  className="text-sm text-[#ccd6f6] transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full flex items-center gap-12 flex-col md:flex-row"
        >
          {/* Photo on the left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-[#64ffda] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#112240]">
                  <img
                    src="/SARA.png"
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23112240' width='200' height='200'/%3E%3Ctext fill='%2364ffda' font-family='Arial' font-size='60' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3ESK%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#64ffda] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Text content on the right */}
          <div className="flex-1">
            <AnimatedText delay={0.3}>
              <p className="text-[#64ffda] text-sm font-mono mb-4">
                Hi, my name is
              </p>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-4">
                Sarah Khaled Aldhafeeri
              </h1>
            </AnimatedText>
            <AnimatedText delay={0.5}>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8892b0] mb-6">
                Application Systems Analyst
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.6}>
              <p className="text-lg text-[#8892b0] max-w-2xl mb-8">
                Application Systems Analyst with experience in building and
                developing websites working on both front-end and back-end, and
                improving UI/UX to deliver efficient and user-friendly digital
                solutions.
              </p>
            </AnimatedText>
            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[#64ffda]/10 transition-colors"
            >
              Check out my projects!
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start gap-12">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-[#ccd6f6] whitespace-nowrap"
              >
                <span className="text-[#64ffda]">01.</span> About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <p className="text-[#8892b0] mb-4">
                  Application Systems Analyst with experience in building and
                  developing websites, working on both front-end and back-end,
                  and improving UI/UX to deliver efficient and user-friendly
                  digital solutions
                </p>
                <p className="text-[#8892b0] mb-4">
                  I enjoy creating things that live on the internet, whether
                  that be websites, applications, or anything in between. My
                  goal is to always build products that provide pixel-perfect,
                  performant experiences.
                </p>
                <p className="text-[#8892b0] mb-6">
                  Here are a few technologies I've been working with recently:
                </p>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-2 text-[#8892b0] list-none"
                >
                  {[
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                  ].map((tech, index) => (
                    <motion.li
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ x: 5, color: "#64ffda" }}
                      className="flex items-center cursor-default"
                    >
                      <span className="text-[#64ffda] mr-2">▹</span>
                      {tech}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-[#ccd6f6] mb-12"
            >
              <span className="text-[#64ffda]">02.</span> Where I've Worked
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  period: "2024 — Present",
                  title: "Senior Software Engineer · Company Name",
                  description:
                    "Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices.",
                  tech: ["JavaScript", "TypeScript", "React", "Next.js"],
                },
                {
                  period: "2020 — 2024",
                  title: "Software Engineer · Previous Company",
                  description:
                    "Built, styled, and shipped high-quality websites and digital experiences for a diverse array of projects. Provided leadership within engineering department through close collaboration and knowledge sharing.",
                  tech: ["React", "Node.js", "TypeScript", "Python"],
                },
              ].map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ x: 10 }}
                  className="border-l-2 border-[#233554] pl-6 hover:border-[#64ffda] transition-colors"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <motion.span
                      whileHover={{ scale: 1.1 }}
                      className="text-sm text-[#64ffda] font-mono"
                    >
                      {exp.period}
                    </motion.span>
                    <h3 className="text-xl font-semibold text-[#ccd6f6]">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-[#8892b0] mb-4">{exp.description}</p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {exp.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-xs text-[#8892b0] bg-[#112240] px-3 py-1 rounded cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20"
      >
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-[#ccd6f6] mb-12"
            >
              <span className="text-[#64ffda]">03.</span> Some Things I've Built
            </motion.h2>
            <div className="space-y-12">
              {[
                {
                  title: "Disney Bank",
                  description:
                    "A bank application designed specifically for kids, providing a fun and educational way to learn about money management and banking.",
                  tech: ["React", "Next.js", "TypeScript"],
                  images: ["/bank1.png", "/bank2.png"],
                  externalLink: "#",
                  githubLink: "#",
                },
                {
                  title: "Another Project",
                  description:
                    "A full-stack application with user authentication, real-time updates, and team collaboration features.",
                  tech: ["Next.js", "TypeScript", "PostgreSQL"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-[#112240] rounded-lg p-6 hover:shadow-[0_10px_30px_rgba(100,255,218,0.1)] transition-all cursor-pointer"
                >
                  {/* Project Images */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6 flex gap-4 justify-center items-center flex-wrap">
                      {project.images.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, y: 20, rotate: -2 }}
                          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: imgIndex * 0.15,
                            type: "spring",
                            stiffness: 100,
                          }}
                          whileHover={{
                            scale: 1.08,
                            rotate: imgIndex % 2 === 0 ? 2 : -2,
                            y: -8,
                            boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)",
                          }}
                          className="relative group"
                        >
                          {/* Glow effect */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#64ffda] via-[#233554] to-[#64ffda] rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                          {/* Image container */}
                          <div className="relative bg-[#0a192f] p-2 rounded-xl border-2 border-[#233554] group-hover:border-[#64ffda] transition-colors duration-300">
                            <motion.img
                              src={img}
                              alt={`${project.title} screenshot ${
                                imgIndex + 1
                              }`}
                              className="w-48 md:w-56 lg:w-64 h-auto rounded-lg shadow-2xl"
                              style={{
                                filter:
                                  "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
                              }}
                            />

                            {/* Decorative corner accent */}
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#64ffda] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#64ffda] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-4">{project.description}</p>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs text-[#8892b0] font-mono"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.externalLink || "#"}
                      whileHover={{ x: 5, color: "#ccd6f6" }}
                      className="text-[#64ffda] hover:text-[#ccd6f6] text-sm"
                    >
                      ↗ External Link
                    </motion.a>
                    <motion.a
                      href={project.githubLink || "#"}
                      whileHover={{ x: 5, color: "#ccd6f6" }}
                      className="text-[#64ffda] hover:text-[#ccd6f6] text-sm"
                    >
                      <span className="font-mono">→</span> GitHub
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-8 text-center text-[#8892b0] text-sm"
      >
        <p>Built with Next.js and Tailwind CSS</p>
      </motion.footer>
    </main>
  );
}
