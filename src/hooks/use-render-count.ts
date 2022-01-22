import { useEffect, useRef } from "react";

/**
 * Counts renders of a component it is used in.
 *
 * @param title If present, will display the render count in the console with the given title.
 * @returns Render count of a component.
 */
const useRenderCount = (title?: string) => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;

    if (title) {
      console.log(title, renderCount.current);
    }
  });

  return renderCount.current;
};

export default useRenderCount;
