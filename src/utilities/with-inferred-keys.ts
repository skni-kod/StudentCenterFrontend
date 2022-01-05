const withInferredKeys =
  <Value>() =>
  <Type>(object: { [Key in keyof Type]: Value }) =>
    object;

export default withInferredKeys;
