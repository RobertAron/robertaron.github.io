import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";
import { CanvasArea, ThreeAreaThing } from "./_decorator";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary flex min-h-[60vh] flex-col justify-center gap-4 lg:flex-row lg:gap-24",
        styles.heroBanner,
      )}
    >
      <div className="flex max-w-full flex-col items-stretch gap-4">
        <Heading
          as="h1"
          className="hero__title max-w-[600px] break-words text-7xl tracking-tighter lg:text-left lg:text-8xl"
        >
          {siteConfig.tagline.split(" ").map((ele) => (
            <div key={ele}>{ele}</div>
          ))}
        </Heading>
        <Link
          className="group relative grid grid-cols-1"
          href="/posts/otp-inputs"
        >
          <div className="z-10 col-start-1 row-start-1 flex items-center justify-center rounded border-4 border-solid border-black bg-white p-4 text-3xl text-black transition-all group-hover:bg-slate-200 group-focus:bg-slate-200 md:text-4xl">
            Check Out My Work
          </div>
          <div className="absolute left-2 top-2 col-start-1 row-start-1 h-full w-full rounded bg-[var(--ifm-color-primary-darkest)] transition-all group-hover:left-4 group-hover:top-4 group-focus:left-4 group-focus:top-4" />
        </Link>
      </div>
      <CanvasArea />
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Robert Aron"
      description="Robert Aron - Websites, websockets, and witchcraft. Mini Projects and work history."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
