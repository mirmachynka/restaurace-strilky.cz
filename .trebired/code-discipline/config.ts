import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
    forVersion: "7.2.1",
    presets: {
      use: ["@trebired/configs"],
    },
    rules: {
      bannedPatterns: {
        patterns: [
          { value: "restaurace-strilky.cz", allowedFiles: ["package.json"] },
        ],
      },
    },
});
