/**
 * Shared domain types for the portfolio site.
 *
 * These interfaces describe the shape of the static profile data
 * defined in `constants.ts` and the frontmatter metadata exposed by
 * MDX blog posts under `content/blog/`.
 */

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  /** Free-form "Skills: a, b, c" summary used under each role. */
  skills: string;
}

export interface SkillCategory {
  category: string;
  /** Comma-separated list of technologies rendered as tags. */
  items: string;
}

export interface NavLink {
  label: string;
  /** Absolute (http/mailto) or router-relative URL. */
  url: string;
}

/**
 * Frontmatter metadata declared at the top of every MDX blog post.
 * Kept in sync with the `mdx.d.ts` ambient module declaration.
 */
export interface MDXFrontmatter {
  title: string;
  /** ISO-8601 date string (e.g. "2025-12-01"). */
  publishedAt: string;
  summary: string;
}

/** A blog post entry materialised from an MDX file. */
export interface MDXPost extends MDXFrontmatter {
  /** Filename without the `.mdx` extension – used as the route segment. */
  slug: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export interface ProfileData {
  name: string;
  title: string;
  summary: string;
  navLinks: NavLink[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  socials: NavLink[];
}
