import type React from "react";
import MDXComponents from "@theme-original/MDXComponents";

const parser = new DOMParser();
const MyMdxComponents: typeof MDXComponents = {
  ...MDXComponents,
  p: (props) => <p className="text-[calc(1.25rem)]">{props.children}</p>,
  blockquote: (props) => (
    <blockquote className="border-l-8 border-[#489b61] bg-[#489b61]/10 p-4 px-3">
      {props.children}
    </blockquote>
  ),
  img: ({
    alt,
    ...restProps
  }: {
    alt: string;
    src: string;
    width: number;
    height: number;
  }) => {
    const match = alt.match(/(https?:\/\/[^\s]+)(.*)/);

    const { text, url } =
      match !== null
        ? { url: match[1], text: match[2].trim() }
        : { text: alt, url: null };
    const textDecoded = parser.parseFromString(text, "text/html").body
      .textContent;
    return (
      <figure className="mb-4 flex flex-col items-center gap-1 text-sm italic">
        <MDXComponents.img
          {...restProps}
          alt={
            url === null ? textDecoded : `${textDecoded}. Viewable at ${url}`
          }
          className="w-full"
        />
        <figcaption>
          {url === null ? textDecoded : <a href={url}>{textDecoded}</a>}
        </figcaption>
      </figure>
    );
  },
  li: (props) => <li className="text-[calc(1.25rem)]">{props.children}</li>,
};
export default MyMdxComponents;
