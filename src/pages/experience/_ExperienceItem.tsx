import React from "react";
import { intervalToDuration } from "date-fns";

export const ExperienceItem = (ele: {
  logoSrc: string;
  logoAlt: string;
  title: string;
  companyName: string;
  duration: string;
  start: Date;
  end: Date;
  description?: React.ReactNode;
}) => {
  const startString = ele.start.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const endString = ele.end.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
  const durations = intervalToDuration({ start: ele.start, end: ele.end });
  const durationParts = [];
  if (durations.years) durationParts.push(`${durations.years} yrs`);
  if (durations.months) durationParts.push(`${durations.months} mos`);
  const durationString = durationParts.join(" ");
  return (
    <li className="flex flex-col gap-1">
      <div className="flex gap-2">
        <img src={ele.logoSrc} alt={ele.logoAlt} width={72} height={72} />
        <div className="flex flex-col gap-1">
          <h2 className="mb-0 text-4xl font-semibold">{ele.title}</h2>
          <h3 className="mb-0 text-xl">{ele.companyName}</h3>
        </div>
      </div>
      <div className="flex gap-2 text-lg">
        <span>
          {startString}
          {" - "}
          {endString}
        </span>
        <span className="font-semibold">({durationString})</span>
      </div>
      {ele.description}
    </li>
  );
};
