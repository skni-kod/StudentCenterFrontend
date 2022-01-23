import useNextTranslateTranslation from "next-translate/useTranslation";

import type UseTranslation from "../types/use-translation";

const useTranslation: UseTranslation = () => useNextTranslateTranslation();

export default useTranslation;
