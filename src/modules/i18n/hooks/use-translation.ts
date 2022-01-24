import useNextTranslateTranslation from "next-translate/useTranslation";

import type UseTranslation from "../types/use-translation";

/** Recommended way to use translations in pages / components. */
const useTranslation: UseTranslation = () => useNextTranslateTranslation();

export default useTranslation;
