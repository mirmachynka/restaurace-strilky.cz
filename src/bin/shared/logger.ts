import { createLog } from "@trebired/logger";

const logger = createLog({
    console: {
      metadata: false,
      timestamp: false,
    },
    quiet: false,
    save: false,
    source: "restaurace-strilky",
});

export { logger };
