import type React from "react";
import MDXComponents from "@theme-original/MDXComponents";

const MyMdxComponents: typeof MDXComponents = {
  ...MDXComponents,
  p: (props) => <p className="text-[calc(1.25rem)]">{props.children}</p>,
  blockquote: (props) => (
    <blockquote className="border-blue-400 border-l-8 bg-blue-500/10 p-4 px-3">
      {props.children}
    </blockquote>
  ),
  img: (props: { alt: string; src: string; width: number; height: number }) => (
    <figure className="mb-4 flex flex-col items-center gap-1 text-sm italic">
      <MDXComponents.img {...props} clasName="w-full" />
      <figcaption>{props.alt}</figcaption>
    </figure>
  ),
  li: (props) => <li className="text-[calc(1.25rem)]">{props.children}</li>,
};
export default MyMdxComponents;
