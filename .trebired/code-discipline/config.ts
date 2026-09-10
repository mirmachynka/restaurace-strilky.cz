import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
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
