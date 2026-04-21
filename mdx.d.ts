// Type declarations for MDX modules so that `import ... from "*.mdx"`
// (and the dynamic variant used by the blog loader) is fully typed.
declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { MDXFrontmatter } from "./types";

  export const frontmatter: MDXFrontmatter;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
