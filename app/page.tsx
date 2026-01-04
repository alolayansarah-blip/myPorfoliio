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
              className="text-xl font-semibold bg-gradient-to-r from-[#64ffda] to-purple-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.a>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-8"
            >
              {["Who I Am", "Skills", "Education", "Projects"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    variants={itemVariants}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    whileHover={{ y: -2, color: "#64ffda" }}
                    className="text-sm text-[#ccd6f6] transition-colors"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Who I Am Section */}
      <section
        id="who-i-am"
        className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative overflow-hidden"
      >
        {/* Background images with opacity */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute left-0 top-0 w-1/2 h-full opacity-20"
            style={{
              backgroundImage: "url('/me.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-transparent to-transparent"></div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-0 w-1/2 h-full opacity-20"
            style={{
              backgroundImage: "url('/me4.JPG')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#0a192f] via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Animated background gradients with purple */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/5 via-purple-500/5 to-[#64ffda]/5"></div>

        {/* Floating animated orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#64ffda]/10 to-purple-500/10 rounded-full blur-3xl"
        ></motion.div>

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-[#64ffda]/5 rounded-full blur-3xl"
        ></motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#64ffda]/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6 inline-block"
          >
            <div className="relative px-6 py-2 rounded-full bg-gradient-to-r from-[#64ffda]/20 via-purple-500/20 to-[#64ffda]/20 backdrop-blur-sm border border-[#64ffda]/30">
              <p className="text-[#64ffda] text-sm font-mono tracking-wider relative z-10">
                Hi, I'm
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/10 via-purple-500/10 to-[#64ffda]/10 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.div
              className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#112240]/80 via-[#0a192f]/80 to-[#112240]/80 backdrop-blur-md border border-[#64ffda]/30 shadow-[0_0_30px_rgba(100,255,218,0.2)] mb-4"
              whileHover={{
                boxShadow: "0 0 50px rgba(168,85,247,0.4)",
                borderColor: "#a855f7",
              }}
            >
              <motion.span
                className="bg-gradient-to-r from-[#ccd6f6] via-[#64ffda] via-purple-400 to-[#ccd6f6] bg-clip-text text-transparent bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Sarah Khaled
              </motion.span>
            </motion.div>
            <br />
            <motion.div
              className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-[#112240]/80 via-[#0a192f]/80 to-[#112240]/80 backdrop-blur-md border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
              whileHover={{
                boxShadow: "0 0 50px rgba(100,255,218,0.4)",
                borderColor: "#64ffda",
              }}
            >
              <motion.span
                className="text-[#64ffda]"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(100,255,218,0.5)",
                    "0 0 30px rgba(168,85,247,0.5)",
                    "0 0 20px rgba(100,255,218,0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Aldhafeeri
              </motion.span>
            </motion.div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 inline-block"
          >
            <div className="relative px-8 py-4 rounded-xl bg-gradient-to-r from-[#112240]/60 via-purple-500/20 to-[#112240]/60 backdrop-blur-md border border-[#233554] shadow-lg">
              <h2 className="text-2xl md:text-3xl text-[#8892b0] font-light relative z-10">
                Application Systems Analyst | Full Stack Graduate
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-xl blur-sm"></div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-[#8892b0] max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Full Stack developer passionate about creating user-friendly web and
            mobile applications. Experienced in React Native with a focus on
            UI/UX and performance.
          </motion.p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-[#64ffda]/5"></div>

        <AnimatedSection>
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-20 text-center"
            >
              <motion.span
                className="bg-gradient-to-r from-[#ccd6f6] via-[#64ffda] via-purple-400 to-[#ccd6f6] bg-clip-text text-transparent bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Skills
              </motion.span>
            </motion.h2>

            <div className="space-y-12">
              {[
                {
                  category: "Frontend",
                  skills: [
                    { name: "React", icon: "/react.png" },
                    { name: "React Native", icon: null },
                    { name: "JavaScript", icon: "/js.png" },
                    { name: "HTML", icon: "/html.png" },
                    { name: "CSS", icon: "/css.png" },
                  ],
                  color: "from-blue-500/30 via-cyan-500/20 to-blue-500/30",
                  accent: "#64ffda",
                },
                {
                  category: "Backend",
                  skills: [
                    { name: "Node.js", icon: null },
                    { name: "Express.js", icon: null },
                  ],
                  color: "from-green-500/30 via-emerald-500/20 to-green-500/30",
                  accent: "#10b981",
                },
                {
                  category: "Databases",
                  skills: [
                    { name: "MySQL", icon: null },
                    { name: "MongoDB", icon: "/MongoDB-Logo.png" },
                  ],
                  color: "from-purple-500/30 via-pink-500/20 to-purple-500/30",
                  accent: "#a855f7",
                },
                {
                  category: "Tools",
                  skills: [
                    { name: "Git", icon: null },
                    { name: "GitHub", icon: null },
                  ],
                  color: "from-orange-500/30 via-red-500/20 to-orange-500/30",
                  accent: "#f97316",
                },
              ].map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="group relative"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    {/* Category Header */}
                    <motion.div
                      className="flex-shrink-0 md:w-48"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${group.color} rounded-lg blur-xl opacity-50`}
                        ></div>
                        <div className="relative bg-[#112240]/90 backdrop-blur-sm rounded-lg p-4 border border-[#233554] hover:border-[#64ffda]/50 transition-all">
                          <motion.h3
                            className="text-xl font-bold mb-1"
                            style={{ color: group.accent }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {group.category}
                          </motion.h3>
                          <div className="h-1 w-12 bg-gradient-to-r from-[#64ffda] to-purple-500 rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {group.skills.map((skill, skillIndex) => {
                        const skillName =
                          typeof skill === "string" ? skill : skill.name;
                        const skillIcon =
                          typeof skill === "object" ? skill.icon : null;

                        return (
                          <motion.div
                            key={skillName}
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.15 + skillIndex * 0.08,
                              type: "spring",
                            }}
                            whileHover={{
                              scale: 1.1,
                              rotate: 2,
                              y: -5,
                            }}
                            className="group/skill relative"
                          >
                            <div className="relative bg-[#112240]/80 backdrop-blur-sm rounded-xl p-4 border border-[#233554] hover:border-[#64ffda]/50 transition-all cursor-default h-full flex flex-col items-center justify-center gap-2 hover:bg-[#112240]">
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#64ffda]/10 to-purple-500/10 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity"></div>

                              {skillIcon && (
                                <motion.div
                                  className="w-12 h-12 flex-shrink-0 relative z-10"
                                  whileHover={{ rotate: [0, -10, 10, 0] }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <img
                                    src={skillIcon}
                                    alt={skillName}
                                    className="w-full h-full object-contain filter drop-shadow-lg group-hover/skill:brightness-125 transition-all"
                                  />
                                </motion.div>
                              )}

                              <span className="text-[#8892b0] text-xs font-medium text-center group-hover/skill:text-[#64ffda] group-hover/skill:text-purple-400 transition-colors relative z-10">
                                {skillName}
                              </span>

                              {/* Decorative corner */}
                              <div className="absolute top-2 right-2 w-2 h-2 bg-[#64ffda]/30 rounded-full group-hover/skill:bg-purple-500/50 transition-colors"></div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="min-h-screen flex items-center px-6 py-20 relative"
      >
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-20 text-center"
            >
              <span className="bg-gradient-to-r from-[#ccd6f6] to-[#64ffda] bg-clip-text text-transparent">
                Education
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Full Stack Development & AI",
                  institution: "CODED",
                  year: "2025",
                  logo: "/coded_logo.jpeg",
                },
                {
                  degree: "Arab Open University",
                  institution: "AOU",
                  year: "2016-2017",
                  logo: "/aou.jpg",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-[#112240]/80 to-[#0a192f]/80 backdrop-blur-sm rounded-xl p-6 border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300 shadow-lg hover:shadow-[#64ffda]/20 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg overflow-hidden border border-[#233554] bg-white p-2">
                          <img
                            src={edu.logo}
                            alt={edu.institution}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-[#64ffda] text-sm font-mono mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-[#8892b0] text-sm">{edu.year}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-[#64ffda]/5"></div>

        <AnimatedSection>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-20 text-center"
            >
              <motion.span
                className="bg-gradient-to-r from-[#ccd6f6] via-[#64ffda] via-purple-400 to-[#ccd6f6] bg-clip-text text-transparent bg-[length:200%_100%]"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Projects
              </motion.span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Vice President for Academic Affairs Website",
                  description:
                    "Developed and maintained the official university website with a strong focus on UI/UX, accessibility, and content clarity.",
                  tech: ["WordPress", "Web Application"],
                  images: ["/vpaa.png"],
                },
                {
                  title: "SIMI Mobile App",
                  description:
                    "Developed frontend screens and integrated APIs, focusing on performance and user experience.",
                  tech: ["React Native", "Mobile Application"],
                  images: ["/simi1.jpg", "/simi2.jpg"],
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group"
                >
                  <motion.div
                    className="bg-[#112240]/50 backdrop-blur-sm rounded-2xl border border-[#233554] hover:border-[#64ffda]/50 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#64ffda]/10 h-full flex flex-col"
                    whileHover={{
                      scale: 1.03,
                      borderColor: "#a855f7",
                      boxShadow: "0 25px 50px rgba(168,85,247,0.3)",
                    }}
                  >
                    {/* Project Images */}
                    {project.images && project.images.length > 0 && (
                      <div className="relative overflow-hidden">
                        <div className="flex gap-2 p-4">
                          {project.images.map((img, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.15 + imgIndex * 0.1,
                              }}
                              className="flex-1 relative overflow-hidden rounded-lg"
                              whileHover={{
                                scale: 1.08,
                                rotate: [0, -2, 2, 0],
                              }}
                            >
                              <img
                                src={img}
                                alt={`${project.title} ${imgIndex + 1}`}
                                className="w-full h-48 object-cover"
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-[#0a192f]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                                animate={{
                                  background: [
                                    "linear-gradient(to top, rgba(139,92,246,0.6), transparent)",
                                    "linear-gradient(to top, rgba(100,255,218,0.6), transparent)",
                                    "linear-gradient(to top, rgba(139,92,246,0.6), transparent)",
                                  ],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              ></motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <motion.h3
                        className="text-xl md:text-2xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors"
                        whileHover={{ color: "#a855f7" }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-[#8892b0] mb-4 leading-relaxed text-sm flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.15 + techIndex * 0.1,
                            }}
                            whileHover={{
                              scale: 1.15,
                              y: -3,
                              borderColor: "#a855f7",
                              color: "#a855f7",
                              boxShadow: "0 5px 15px rgba(168,85,247,0.4)",
                            }}
                            className="text-xs text-[#64ffda] font-mono bg-[#0a192f] border border-[#64ffda]/30 px-3 py-1.5 rounded-md hover:border-[#64ffda] hover:bg-[#112240] transition-all"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
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
