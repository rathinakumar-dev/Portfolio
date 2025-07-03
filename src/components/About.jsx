import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

const skills = [
  {
    name: "Frontend Development",
    icon: Palette,
    color: "from-blue-400 to-blue-600",
    techs: [
      "HTML",
      "CSS",
      "Sass",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Redux",
      "Responsive Design",
    ],
  },
  {
    name: "Backend Development",
    icon: Code,
    color: "from-purple-400 to-purple-600",
    techs: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "PHP",
      "Python",
    ],
  },
  {
    name: "Tools & Productivity",
    icon: Zap,
    color: "from-yellow-400 to-yellow-600",
    techs: [
      "VS Code",
      "Cursor",
      "Figma",
      "Canva",
      "Postman",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
    ],
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70 },
  },
};

const About = () => (
  <section id="about" className="min-h-screen bg-gray-50 py-20 px-4">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-16"
      >
        {/* <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 mb-6">
          About <span className="text-orange-500">Me</span>
        </h2> */}
        {/* <motion.div
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        /> */}
      </motion.div>

      <motion.div
        className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Profile Section */}
        <motion.div variants={cardVariants} className="min-w-0">
          <h2 className="text-3xl md:text-4xl text-center  font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 mb-5">
            About <span className="text-orange-500">Me</span>
          </h2> 
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-[32px]">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  RK Developer
                </h3>
                <p className="text-slate-600 mb-4">Full Stack Web Developer</p>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 text-center">
                I'm Rathinakumar, a Full Stack Web Developer with a BBA
                background. I found my passion in web development and completed
                a full stack course at Error Makes Clever. I gained hands-on
                experience at The King Phonix IT Solution, where I worked on
                real-world projects.I'm always eager to learn new technologies
                and build meaningful digital experiences.
              </p>
              {/* Call to Action */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow-md">
                  Let's Work Together
                </button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="min-w-0" variants={containerVariants}>
          <SparklesText className={"text-center mx-auto md:mb-0"}>
            What I Do
          </SparklesText>
          <div className=" space-y-5 mt-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} variants={cardVariants}>
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white`}
                        >
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-slate-800 mb-3">
                            {skill.name}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skill.techs.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs hover:bg-slate-200 transition-colors"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
