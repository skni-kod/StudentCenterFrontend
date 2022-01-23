import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/constants/(.*)$": "<rootDir>/src/constants/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@/layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@/locales/(.*)$": "<rootDir>/src/locales/$1",
    "^@/modules/(.*)$": "<rootDir>/src/modules/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",
    "^@/scripts/(.*)$": "<rootDir>/scripts/$1",
    "^@/styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@/types/(.*)$": "<rootDir>/src/types/$1",
    "^@/utilities/(.*)$": "<rootDir>/src/utilities/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(customJestConfig);
