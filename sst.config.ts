import { SSTConfig } from "sst"
import { WebApp } from "./stacks/WebApp"
import { VirusDatabase } from "./stacks/VirusDatabase"

export default {
  config() {
    return {
      name: "bucketscan",
      region: "eu-west-2"
    }
  },
  stacks(app) {
    app.stack(VirusDatabase)
    app.stack(WebApp)
  }
} satisfies SSTConfig
