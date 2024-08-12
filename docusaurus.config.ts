import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
const webpack = require("webpack");

const config: Config = {
  title: "Robert Aron",
  tagline: "Websites, Websockets, and Witchcraft",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.robertaron.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RobertAron", // Usually your GitHub org/user name.
  projectName: "robertaron.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          path: "docs",
          routeBasePath: "/posts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/fullbody.webp",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Robert Aron",
      logo: {
        alt: "My Site Logo",
        src: "img/headshot.webp",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Posts",
        },
        { href: "/experience", position: "left", label: "Experience" },
        {
          href: "https://github.com/RobertAron/",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Social",
          items: [
            {
              label: "Github",
              href: "https://github.com/RobertAron",
            },
            {
              label: "Code Pen",
              href: "https://codepen.io/RobertAron",
            },
            {
              label: "X / twitter",
              href: "https://x.com/HeyImRige",
            },
            {
              label: "Email",
              href: "mailto:Contact@RobertAron.io",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["csharp"],
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    function tailwindPlugin(context, options) {
      return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
          ];
          return postcssOptions;
        },
      };
    },
    function webpackPlugin(context, options) {
      return {
        name: "webpack-plugin",
        configureWebpack(config, isServer, utils, content) {
          // config.ignoreWarnings.pu
          return {
            ignoreWarnings: [
              {
                module: /RapierPhysics\.js$/,
                message:
                  /Critical dependency: the request of a dependency is an expression/,
              },
            ],
          };
        },
      };
    },
  ],
};

export default config;
