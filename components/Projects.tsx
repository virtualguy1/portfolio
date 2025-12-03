import React from 'react';
import { ProjectItem } from '../types';

interface ProjectsProps {
    projects: ProjectItem[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <section className="mb-12 animate-fade-in">
            <h2 className="text-xl font-bold text-terminal-green mb-6 border-b border-gray-800 pb-2">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="border border-gray-800 p-6 hover:border-terminal-green transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-lg font-bold text-gray-200 group-hover:text-terminal-highlight transition-colors">
                                {project.title}
                            </h3>
                            <a
                                href={project.link}
                                className="text-terminal-green hover:text-terminal-highlight"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                [view]
                            </a>
                        </div>

                        <p className="text-gray-400 text-sm mb-6 leading-relaxed h-20 overflow-hidden">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.techStack.map((tech, idx) => (
                                <span
                                    key={idx}
                                    className="text-xs font-mono bg-gray-900 text-gray-500 px-2 py-1 rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
