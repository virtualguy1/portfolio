import React from "react";
import { ProjectItem } from "../types";
import { Box } from "./ui/Box";
import { Tag } from "./ui/Tag";

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mb-12">
      <Box title="ls -la ./projects">
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="font-mono">
              {/* Directory listing style */}
              <div className="flex flex-col md:flex-row md:items-start gap-2">
                <span className="text-tui-muted text-xs">drwxr-xr-x</span>
                <div className="flex-1 space-y-2">
                  {/* Project name */}
                  <div className="text-tui-green font-bold">
                    {project.title}
                  </div>
                  
                  {/* Description with tree characters */}
                  <div className="flex gap-2 text-sm">
                    <span className="text-tui-border">├──</span>
                    <span className="text-tui-fg">{project.description}</span>
                  </div>
                  
                  {/* Tech stack */}
                  <div className="flex gap-2 items-center flex-wrap">
                    <span className="text-tui-border">├──</span>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <Tag key={idx} color="orange">{tech}</Tag>
                      ))}
                    </div>
                  </div>
                  
                  {/* Link */}
                  <div className="flex gap-2 text-sm">
                    <span className="text-tui-border">└──</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tui-cyan hover:text-tui-green transition-colors"
                    >
                      → {project.link.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Separator except for last item */}
              {index < projects.length - 1 && (
                <div className="text-tui-border mt-4 text-xs">
                  {' '}
                </div>
              )}
            </div>
          ))}
        </div>
      </Box>
    </section>
  );
};
