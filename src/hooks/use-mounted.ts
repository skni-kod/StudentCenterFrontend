import { useEffect, useState } from "react";

/**
 * Checks whether component has mounted.
 *
 * @returns `true` if component has mounted, `false` otherwise.
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return mounted;
};
