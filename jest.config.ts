import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ["ts","js","json", "node"],
  moduleNameMapper: {
    "^./routes/coffeeshops\\.js$": "<rootDir>/src/routes/coffeeshops.ts",
    "^../controllers/coffeeshopController\\.js$": "<rootDir>/src/controllers/coffeeshopController.ts",
    "^../models/Coffeeshops\\.js$": "<rootDir>/src/models/Coffeeshops.ts",

  },
  detectOpenHandles: false
  

};

export default config;