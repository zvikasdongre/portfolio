import { GradientText, Section } from "@/components";
import { SkillBar } from "@/components/SkillBar";

const SkillsList = () => {

  const web_skills = [
    { name: "Svelte & Sveltekit", icon: "/assets/icons/svelte.svg", color: "hover:text-orange-500" },
    { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg", color: "hover:text-cyan-600" },
    { name: "HTML", icon: "/assets/icons/html.svg", color: "hover:text-orange-500" },
    { name: "CSS", icon: "/assets/icons/css.svg", color: "hover:text-cyan-500" },

    { name: "Laravel", icon: "/assets/icons/laravel.svg", color: "hover:text-orange-500" },
    { name: "NodeJS", icon: "/assets/icons/nodejs.svg", color: "hover:text-green-600" },
    { name: "MySQL", icon: "/assets/icons/mysql.svg", color: "hover:text-teal-500" },
    { name: "MongoDB", icon: "/assets/icons/mongodb.svg", color: "hover:text-green-600" },
  ]

  const langs = [
    { name: "JavaScript", icon: "/assets/icons/javascript.svg", color: "hover:text-yellow-500" },
    { name: "TypeScript", icon: "/assets/icons/typescript.svg", color: "hover:text-cyan-500" },
    { name: "Python", icon: "/assets/icons/python.svg", color: "hover:text-blue-500" },
    { name: "PHP", icon: "/assets/icons/php.svg", color: "hover:text-violet-500" },
  ]

  const others = [
    { name: "Linux", icon: "/assets/icons/linux.svg", color: "hover:text-gray-300" },
    { name: "Git & Github", icon: "/assets/icons/git.svg", color: "hover:text-gray-300" },
  ]

  return <Section
    title={
      <>
        Tech <GradientText>Skills</GradientText>
      </>
    }
  >
    <div className="w-full gap-x-8 rounded-md px-2 md:flex-row">
      <h2 className="text-xl font-semibold mb-3">Frontend & Backend</h2>

      <div className=" mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 items-center mt-2">
        <>
          {web_skills.map((skill, index) => {
            return <SkillBar name={skill.name} color={skill.color} icon={skill.icon} key={index} />
          })}
        </>
      </div>
      <h2 className="text-xl font-semibold mb-3">Programming Languages</h2>

      <div className=" mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 items-center mt-2">
        <>
          {langs.map((skill, index) => {
            return <SkillBar name={skill.name} color={skill.color} icon={skill.icon} key={index} />
          })}
        </>
      </div>

      <h2 className="text-xl font-semibold mb-3">Other Skills</h2>

      <div className=" mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 items-center mt-2">
        <>
          {others.map((skill, index) => {
            return <SkillBar name={skill.name} color={skill.color} icon={skill.icon} key={index} />
          })}
        </>
      </div>
    </div>
  </Section>
};

export { SkillsList };
