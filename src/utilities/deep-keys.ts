const isObject = (value: unknown) => {
  return value !== null && typeof value === "object" && !Array.isArray(value);
};

const deepKeysRecursive = (
  obj: Record<string, unknown>,
  stack: string[],
  parent: string | null,
  intermediate: boolean
): string[] => {
  Object.keys(obj).forEach((el) => {
    const escaped = el.replace(/\./g, "\\.");

    if (isObject(obj[el])) {
      const p = parent ?? "" ? `${parent ?? ""}.${escaped}` : parent;

      if (intermediate) {
        stack.push(parent ?? "" ? p ?? "" : escaped);
      }

      deepKeysRecursive(
        obj[el] as Record<string, unknown>,
        stack,
        (p ?? "") || escaped,
        intermediate
      );
    } else {
      const key = parent ?? "" ? `${parent ?? ""}.${escaped}` : escaped;
      stack.push(key);
    }
  });
  return stack;
};

/**
 * Recursively traverses object and returns its keys.
 *
 * @param obj Object to extract keys from.
 * @param intermediate If `true` keys with object values will also be included.
 * @returns Array of object's keys.
 */
const deepKeys = (
  obj: Record<string, unknown>,
  intermediate?: boolean
): string[] => deepKeysRecursive(obj, [], null, Boolean(intermediate));

export default deepKeys;
