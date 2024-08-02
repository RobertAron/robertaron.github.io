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
  description: JSX.Element;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const featureList: FeatureItem[] = [
  {
    title: "3D Art",
    description: <>Skilled in 3D modeling, texturing, and animation.</>,
    icon: Rotate3D,
  },
  {
    title: "Website Development",
    description: (
      <>
        Experienced in creating and maintaining websites, both frontend and
        backend.
      </>
    ),
    icon: PanelsTopLeft,
  },
  {
    title: "Backend Development",
    description: (
      <>
        Proficient in server-side logic, database management, and API
        integration.
      </>
    ),
    icon: Network,
  },
  {
    title: "Video Game Development",
    description: (
      <>Expertise in game design, programming, and project collaboration.</>
    ),
    icon: Gamepad2,
  },
];

function Feature({ title, description, icon: Icon }: FeatureItem) {
  return (
    <div className="flex items-start gap-8">
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
          {featureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
