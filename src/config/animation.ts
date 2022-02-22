import type { Easing } from "framer-motion/types/types";

import { withInferredKeys } from "@/utilities/with-inferred-keys";

const asEase = withInferredKeys<Easing>();

export const EASE = asEase({
  in: [0.4, 0, 1, 1],
  inOut: [0.4, 0, 0.2, 1],
  out: [0, 0, 0.2, 1],
});
