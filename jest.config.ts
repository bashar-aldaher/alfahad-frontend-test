// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  transformIgnorePatterns: ["/node_modules/(?!swiper)"],
  transform: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "jest-transform-stub",
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^swiper/react$": "<rootDir>/__mocks__/swiperReactMock.tsx",
    "^swiper/modules$": "<rootDir>/__mocks__/swiperModulesMock.ts",
  },
};

export default config;
