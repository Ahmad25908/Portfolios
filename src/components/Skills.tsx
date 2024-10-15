import { Code, Server, Smartphone, Globe } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    description: 'Expertise in React, Vue.js, and modern CSS frameworks like Tailwind.',
    icon: Code,
  },
  {
    name: 'Backend Development',
    description: 'Proficient in Node.js, Express, and database management with MongoDB and PostgreSQL.',
    icon: Server,
  },
  {
    name: 'Mobile Development',
    description: 'Experience in building cross-platform mobile apps using React Native.',
    icon: Smartphone,
  },
  {
    name: 'Web Performance',
    description: 'Skilled in optimizing web applications for speed and efficiency.',
    icon: Globe,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Expertise
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Here are some of the key skills and technologies I specialize in.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <skill.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{skill.name}</p>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{skill.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;