import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with product catalog, shopping cart, and secure checkout.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    link: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team functionality.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard with location-based forecasts and historical data visualization.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Recent Work
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Here are some of the projects I have worked on recently. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {projects.map((project) => (
              <div key={project.title} className="relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                  />
                </div>
                <div className="relative px-4 -mt-16">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex items-baseline">
                      <span className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
                        New
                      </span>
                    </div>
                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-gray-900 dark:text-white">{project.title}</h4>
                    <div className="mt-1 text-gray-600 dark:text-gray-400">{project.description}</div>
                    <div className="mt-4">
                      <a href={project.link} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 font-semibold text-sm">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;