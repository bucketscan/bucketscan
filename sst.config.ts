import { SSTConfig } from "sst"
import { WebApp } from "./stacks/WebApp"

export default {
  config() {
    return {
      name: "bucketscan",
      region: "eu-west-2"
    }
  },
  stacks(app) {
    app.stack(WebApp)
  }
} satisfies SSTConfig
