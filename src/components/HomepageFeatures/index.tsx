import Heading from "@theme/Heading";
import {
  Gamepad2,
  type LucideProps,
  Network,
  PanelsTopLeft,
  Rotate3D,
} from "lucide-react";
import type React from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: React.ReactNode;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

function Feature({ title, description, icon: Icon }: FeatureItem) {
  return (
    <div className="flex items-start gap-8 col-span-2 md:col-span-1">
      <div className="flex rounded-lg border-4 border-solid border-[#08d9db] bg-[#175377] p-2">
        <Icon className="h-10 w-10 text-white" />
      </div>
      <div className="flex flex-col gap-2">
        <Heading as="h3" className="mb-0 text-4xl">
          {title}
        </Heading>
        <p className="mb-0 text-xl">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <Feature
            title="Website Development"
            description="High performance web applications, without losing key web fundamentals."
            icon={PanelsTopLeft}
          />
          <Feature
            title="Technical Artist"
            description="Shaders, instancing, LOD generation and other technical 3D skills."
            icon={Rotate3D}
          />
          <Feature
            title="Backend Development"
            description="At scale throughput systems. Architecture, Software, and Deployment."
            icon={Network}
          />
          <Feature
            title="Video Game Development"
            description="Engineering-focused game development. Graphics programming, optimization, and tool development."
            icon={Gamepad2}
          />
        </div>
      </div>
    </section>
  );
}
