import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";
import { CanvasArea } from "./_decorator";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx(
        "hero hero--primary flex justify-center gap-8 flex-wrap",
        styles.heroBanner
      )}
    >
      <div className="flex flex-col items-stretch max-w-full">
        <Heading
          as="h1"
          className="hero__title md:text-5xl text-2xl break-words max-w-[600px]"
        >
          {siteConfig.tagline}
        </Heading>
        <Link
          className="group relative grid grid-cols-1"
          href="/posts/otp-inputs"
        >
          <div className="z-10 col-start-1 row-start-1 flex items-center justify-center rounded border-4 border-black border-solid bg-white p-4 text-2xl md:text-4xl text-black transition-all group-hover:bg-slate-200 group-focus:bg-slate-200">
            Check Out My Work
          </div>
          <div className="absolute top-2 left-2 col-start-1 row-start-1 h-full w-full rounded bg-blue-500 transition-all group-hover:top-4 group-hover:left-4 group-focus:top-4 group-focus:left-4" />
        </Link>
      </div>
      <CanvasArea />
      {/* <img
        src="img/fullbody.webp"
        className="w-52"
        alt="Full body portrait of Robert Aron"
      /> */}
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
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
