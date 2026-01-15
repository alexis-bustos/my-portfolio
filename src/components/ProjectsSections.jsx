//

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Data Science Job Analysis",
    description:
      "An insightful view into the top-paying roles in data analytics and the most in-demand skills",
    image: "/projects/2_top_paying_job_skills.png",
    tags: ["SQL", "PostgreSQL", "Data Science", "GitHub"],
    demoUrl: "https://github.com/alexis-bustos/sql_project_data_job_analysis",
    githubUrl: "https://github.com/alexis-bustos/sql_project_data_job_analysis",
  },
  {
    id: 2,
    title: "SQL Data Warehouse Project",
    description:
      "Developed a modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making.",
    image: "/projects/data_architecture.png",
    tags: ["SQL Server", "Data Engineering", "Data Modeling"],
    demoUrl: "https://github.com/alexis-bustos/sql-data-warehouse-project",
    githubUrl: "https://github.com/alexis-bustos/sql-data-warehouse-project",
  },
  {
    id: 3,
    title: "7-Day DevOps Challenge",
    description:
      "(In-progress) A series of hands-on exercises to build foundational DevOps skills using popular tools and practices.",
    image: "/projects/DevOps-diagram.png",
    tags: ["DevOps", "CI/CD", "Automation", "GitHub", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSections = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience in
          mind.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/alexis-bustos"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Checkout My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
