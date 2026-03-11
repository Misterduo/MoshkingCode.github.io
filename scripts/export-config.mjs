import { siteConfig } from "../src/config.ts";
import fs from "fs";

fs.writeFileSync(
  "./public/portfolio-data.json",
  JSON.stringify(siteConfig, null, 2)
);

console.log("portfolio-data.json exported");