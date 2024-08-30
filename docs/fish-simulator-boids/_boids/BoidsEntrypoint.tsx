import BrowserOnly from "@docusaurus/BrowserOnly";

export function BoidsEntrypoint() {
  return (
    <BrowserOnly>
      {() => {
        const BoidsMain = require("./BoidsMain").BoidsMain;
        return <BoidsMain />;
      }}
    </BrowserOnly>
  );
}
