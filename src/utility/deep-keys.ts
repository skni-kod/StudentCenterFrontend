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

const deepKeys = (
  obj: Record<string, unknown>,
  intermediate?: boolean
): string[] => {
  return deepKeysRecursive(obj, [], null, Boolean(intermediate));
};

export default deepKeys;
