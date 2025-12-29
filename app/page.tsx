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
              {["Skills", "Experience", "Projects"].map((item, index) => (
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
                I’m an Application Systems Analyst who loves blending technology
                with design. I enjoy building web and mobile applications using
                React and React Native, and I care deeply about creating
                interfaces that are not only functional, but also clean,
                intuitive, and visually pleasing.
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

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 pt-20 pb-0"
      >
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
                <span className="text-[#64ffda]">01.</span> Skills
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <p className="text-[#8892b0] mb-8 leading-relaxed">
                  Here are a few technologies I've been working with recently:
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "React / React Native",
                    "JavaScript / TypeScript",
                    "Responsive UI & UX",
                    "APIs & Databases",
                    "Git",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="group relative"
                    >
                      <div className="bg-[#112240] rounded-lg p-4 border border-[#233554] hover:border-[#64ffda] transition-all duration-300 cursor-default">
                        <div className="flex items-center">
                          <span className="text-[#64ffda] mr-3 text-lg group-hover:scale-110 transition-transform">
                            ▹
                          </span>
                          <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors">
                            {skill}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-6 pt-0 pb-20"
      >
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
                <span className="text-[#64ffda]">02.</span> Where I've Worked
              </motion.h2>
              <div className="flex-1 space-y-12">
                {[
                  {
                    period: "2021 — Present",
                    title: "Applied Systems Analyst ",
                    company: "Kuwait University",
                    description: undefined as string | undefined,
                    tech: undefined as string[] | undefined,
                  },
                  {
                    period: "2011 — 2021",
                    title: "Programmer / Assistant Computer Engineer",
                    company: "Ministry of Education",
                    description: undefined as string | undefined,
                    tech: undefined as string[] | undefined,
                  },
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <span className="text-sm text-[#64ffda] font-mono block mb-2">
                            {exp.period}
                          </span>
                          <h3 className="text-xl font-semibold text-[#ccd6f6] mb-1 group-hover:text-[#64ffda] transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-[#64ffda] text-sm font-mono">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      {exp.description && (
                        <p className="text-[#8892b0] mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                      )}
                      {exp.tech && exp.tech.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech: string) => (
                            <span
                              key={tech}
                              className="text-xs text-[#8892b0] font-mono bg-[#0a192f] px-2 py-1 rounded border border-[#233554]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
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
            <div className="flex items-start gap-12 mb-16">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-semibold text-[#ccd6f6] whitespace-nowrap"
              >
                <span className="text-[#64ffda]">03.</span> Some Things I've
                Built
              </motion.h2>
            </div>
            <div className="space-y-16">
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
                  title: "DishDash",
                  description:
                    "A foodies app for adding and sharing recipes for foods. Discover new recipes, save your favorites, and share your culinary creations with the community.",
                  tech: ["React", "Next.js", "TypeScript"],
                  images: ["/dishdash1.jpg", "/dishdash2.jpg"],
                  externalLink: "#",
                  githubLink: "#",
                },
                {
                  title: "Simi",
                  description:
                    "A graduation mobile app featuring an AI butler secretary that organizes your tasks based on your mood. Smart task management that adapts to how you're feeling.",
                  tech: ["React Native", "AI/ML", "TypeScript"],
                  images: ["/simi1.jpg", "/simi2.jpg"],
                  externalLink: "#",
                  githubLink: "#",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Project Images */}
                    {project.images && project.images.length > 0 && (
                      <div className="flex-shrink-0 flex gap-3">
                        {project.images.map((img, imgIndex) => (
                          <motion.div
                            key={imgIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + imgIndex * 0.1 }}
                            className="relative overflow-hidden rounded-lg border border-[#233554] group-hover:border-[#64ffda]/50 transition-colors duration-300"
                            whileHover={{ y: -4, scale: 1.05 }}
                          >
                            <img
                              src={img}
                              alt={`${project.title} ${imgIndex + 1}`}
                              className="w-32 h-auto"
                            />
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#8892b0] mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 mb-4 list-none"
                      >
                        {project.tech.map((tech) => (
                          <motion.li
                            key={tech}
                            variants={itemVariants}
                            className="text-xs text-[#8892b0] font-mono"
                          >
                            {tech}
                          </motion.li>
                        ))}
                      </motion.ul>
                      <div className="flex gap-4">
                        <a
                          href={project.externalLink || "#"}
                          className="text-sm text-[#64ffda] hover:text-[#ccd6f6] transition-colors"
                        >
                          ↗ External Link
                        </a>
                        <a
                          href={project.githubLink || "#"}
                          className="text-sm text-[#64ffda] hover:text-[#ccd6f6] transition-colors"
                        >
                          <span className="font-mono">→</span> GitHub
                        </a>
                      </div>
                    </div>
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
