import type Translate from "./translate";

interface I18n {
  /** Current language. */
  lang: string;
  /** Translation function. */
  t: Translate;
}

export default I18n;
