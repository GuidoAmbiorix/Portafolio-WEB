"use client";

import { FaHtml5, FaCss3, FaFigma } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiAngular,
  SiFlutter,
  SiNgrx,
} from "react-icons/si";
import { motion } from "framer-motion";

//Components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// about data
const about = {
  title: "Acerca de mi",
  description:
    "Soy un programador web con experiencia en el desarrollo de aplicaciones y sistemas complejos utilizando una variedad de tecnologías modernas. Soy una persona en continuo aprendizaje, apasionado por la programación y los retos diarios. A lo largo de mi carrera, he desarrollado y mantenido aplicaciones web robustas y escalables, implementando buenas prácticas de desarrollo y garantizando una experiencia de usuario óptima.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Guido Ambiorix",
    },
    {
      fieldName: "Telefono",
      fieldValue: "(+1) 849-455-5317",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "2+ años",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Dominicana",
    },
    {
      fieldName: "Correo",
      fieldValue: "guidoambiorix@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español, Ingles",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiencia",
  description: "",
  items: [
    {
      company: "Junta Central Electoral (JCE)",
      position: "Desarrollador Full Stack",
      duration: "2022 - Presente",
    },
  ],
};

// educational data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educaciòn",
  description: "",
  items: [
    {
      institution: "UNAPEC",
      degree: "Ingenieria en sistemas de computación",
      duration: "2018-2023",
    },
    {
      institution: "ITLA",
      degree: "Diplomado en Programación Web en Javascript ",
      duration: "2021",
    },
    {
      institution: "UDEMY",
      degree: "Typescript: Tu Completa Guía y Manual de mano",
      duration: "2022",
    },
    {
      institution: "UDEMY",
      degree: "RXJS 7 and Observables: Introduction",
      duration: "2023",
    },
    {
      institution: "UDEMY",
      degree: "The Modern Angular Bootcamp",
      duration: "2023",
    },
    {
      institution: "UDEMY",
      degree: "Microsoft SQL Server Reporting Services (2022 Edition)",
      duration: "2024",
    },
    {
      institution: "UDEMY",
      degree: "Flutter - Mòvil: De cero a experto - Ediciòn 2023:",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "Habilidades",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
    },
    {
      icon: <SiAngular />,
      name: "Angular",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <SiNgrx />,
      name: "NGRX",
    },
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Acerca de mi</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <span className="text-xl max-w-[290px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </span>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-5"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <span className="text-xl max-w-[290px] min-h-[70px] text-center lg:text-left">
                            {item.degree}
                          </span>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider>
                          <Tooltip delayDuration={100}>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-[200px] max-w-[600px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white text-[15px]">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
