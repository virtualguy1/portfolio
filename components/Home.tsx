import React, { useState, useEffect } from 'react';
import { Hero } from './Hero';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { LatestPosts } from './LatestPosts';
import { ProfileData, MDXPost } from '../types';

interface HomeProps {
    data: ProfileData;
}

export const Home: React.FC<HomeProps> = ({ data }) => {
    const [latestPosts, setLatestPosts] = useState<MDXPost[]>([]);

    useEffect(() => {
        const fetchLatestPosts = async () => {
            const modules = import.meta.glob('../content/blog/*.mdx');
            const postPromises = Object.entries(modules).map(async ([path, loader]) => {
                const mod = await loader() as any;
                const slug = path.split('/').pop()?.replace('.mdx', '') || '';
                return {
                    slug,
                    ...mod.frontmatter,
                } as MDXPost;
            });

            const loadedPosts = await Promise.all(postPromises);
            loadedPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
            setLatestPosts(loadedPosts.slice(0, 3));
        };

        fetchLatestPosts();
    }, []);

    return (
        <main className="animate-fade-in">
            <Hero
                name={data.name}
                title={data.title}
                summary={data.summary}
            />

            <ExperienceSection experiences={data.experience} />

            <SkillsSection skills={data.skills} />

            {latestPosts.length > 0 && <LatestPosts posts={latestPosts} />}
        </main>
    );
};
