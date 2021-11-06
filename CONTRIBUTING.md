# Contributing to StudentCenter

Thank you for taking the time to contribute!

The following is a set of guidelines for contributing to StudentCenter project, which is hosted in the [Studenckie Koło Naukowe Informatyków "KOD" Organization](https://github.com/skni-kod) on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [StudentCenter Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Styleguide

All comments, issues, pull requests titles and descriptions, code review comments, commit messages, code comments, license, readme and all documentation **must be written in English**. Documentation can be translated to a different language if necessary.

### Code

All of the code is linted with [ESLint](https://eslint.org/) and formatted with [Prettier](https://prettier.io/).

#### Naming

- Use `camelCase`:

  - when naming JavaScript / TypeScript functions.
  - when naming JavaScript / TypeScript object keys.
  - when naming **local** JavaScript / TypeScript constants and variables.

- Use `CONSTANT_CASE` / `MACRO_CASE` / `SCREAMING_SNAKE_CASE` / `UPPER_CASE`:

  - when naming environment variables.
  - when naming GitHub specific documentation files.
  - when naming **global** JavaScript / TypeScript constants.

- Use `dash-case` / `hyphen-case` / `kebab-case` / `lisp-case` / `spinal-case`:

  - in `className` and `id` attributes.
  - in HTML, CSS and SCSS languages.
  - when naming a file or a folder.
  - when naming a new git branch.
  - when naming keys in translation namespace files.

- Use `PascalCase`:

  - when naming a `class`, an `interface` or a `type` in TypeScript.
  - when naming a React Component.

#### Components

- Explicitly type `children` prop, unless it is a page component.

  ❌ **BAD**

  ```tsx
  type ExampleProps = {
    message: string;
  };

  const Example = ({ message }: ExampleProps) => {
    return <h1>{message}</h1>;
  };
  ```

  ✔️ **GOOD**

  ```tsx
  type ExampleProps = {
    children?: never;
    message: string;
  };

  const Example = ({ message }: ExampleProps) => {
    return <h1>{message}</h1>;
  };
  ```

  ✔️ **GOOD**

  ```tsx
  type ExampleProps = {
    children: React.ReactNode;
  };

  const Example = ({ children }: ExampleProps) => {
    return <h1>{children}</h1>;
  };
  ```

- Use Functional Components.

  ❌ **BAD**

  ```tsx
  class Example extends React.Component<ExampleProps> {
    render() {
      return <h1>{this.props.message}</h1>;
    }
  }
  ```

  ✔️ **GOOD**

  ```tsx
  const Example = ({ message }: ExampleProps) => {
    return <h1>{message}</h1>;
  };
  ```

- Use `NextPage` to type props for components in `/src/pages` directory.

  ❌ **BAD**

  ```tsx
  type PageProps = {
    message: string;
  };

  const Page = ({ message }: PageProps) => {
    return <div>{message}</div>;
  };
  ```

  ✔️ **GOOD**

  ```tsx
  type PageProps = {
    message: string;
  };

  const Page: NextPage<PageProps> = ({ message }) => {
    return <div>{message}</div>;
  };
  ```

#### Imports

- Prefer absolute path `import` unless it makes more sense to use relative paths.

  ❌ **BAD**

  ```ts
  import Button from "../../components/button";
  import type { CardType } from "./types";
  ```

  ✔️ **GOOD**

  ```ts
  import Button from "@/components/button";
  import type { CardType } from "./types";
  ```

#### Translations

- Don't hard code strings displayed to user. Extract them to appropriate namespace in `/src/locales` directory instead.

  ❌ **BAD**

  ```tsx
  const Component = () => {
    return <div>Hello world!</div>;
  };

  export default Component;
  ```

  ✔️ **GOOD**

  ```json
  {
    "hello-world": "Hello world!"
  }
  ```

  ```tsx
  import useTranslation from "next-translate/useTranslation";

  const Component = () => {
    const { t } = useTranslation("common");

    return <div>{t("hello-world")}</div>;
  };

  export default Component;
  ```

#### Types

- Use `type` when defining an intersection or union.

  ✔️ **GOOD**

  ```ts
  interface Colorful {
    color: string;
  }

  interface Circle {
    radius: number;
  }

  type ColorfulCircle = Colorful & Circle;
  ```

  ✔️ **GOOD**

  ```ts
  type Fruit = "apple" | "pear" | "orange";
  type Nullish = null | undefined;
  type Num = bigint | number;
  ```

- Use `type` when defining function types.

  ❌ **BAD**

  ```ts
  interface Sum {
    (x: number, y: number): number;
  }
  ```

  ✔️ **GOOD**

  ```ts
  type Sum = (x: number, y: number) => number;
  ```

- Use `type` when defining React component props.

  ❌ **BAD**

  ```ts
  interface ExampleProps {
    children: React.ReactNode;
    title: string;
  }
  ```

  ✔️ **GOOD**

  ```ts
  type ExampleProps = {
    children: React.ReactNode;
    title: string;
  };
  ```

- Use `type` when defining tuple types.

  ✔️ **GOOD**

  ```ts
  type ExampleTuple = [boolean, number, string];
  ```

- Use `interface` for all object types where using `type` is not required.

  ❌ **BAD**

  ```ts
  type User = {
    age: number;
    authenticated: boolean;
    name: string;
  };
  ```

  ✔️ **GOOD**

  ```ts
  interface User {
    age: number;
    authenticated: boolean;
    name: string;
  }
  ```

### Git Commit Messages

- Adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

  ❌ **BAD**

  ```
  add feature
  ```

  ✔️ **GOOD**

  ```
  feat: add feature
  ```

- Start commit messages with applicable type.

  - `chore` - when changing code that doen't affect production
  - `docs` - when writing documentation
  - `feat` - when adding a new feature
  - `fix` - when fixing a bug
  - `perf` - when improving performance
  - `refactor` - when changing production code
  - `style` - when improving the format / structure of the code
  - `test` - when adding tests

- Use the present tense.

  ❌ **BAD**

  ```
  feat: added feature
  ```

  ✔️ **GOOD**

  ```
  feat: add feature
  ```

- Use the imperative mood.

  ❌ **BAD**

  ```
  fix: changes feature
  ```

  ✔️ **GOOD**

  ```
  fix: change feature
  ```

- Reference pull requests liberally after the first line of merge commit message.

  ❌ **BAD**

  ```
  perf: use `priority` on images detected as LCP
  ```

  ✔️ **GOOD**

  ```
  perf: use `priority` on images detected as LCP (#47)
  ```

- Limit the first line to 72 characters or less.

## Attribution

These contribution guidelines are inspired by Atom's awesome [CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) file.
