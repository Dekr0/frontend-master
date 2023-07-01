import type { Config } from 'jest';

const tr = 'try-1'

const config: Config = {
    clearMocks: true,
    moduleDirectories: [
        'node_modules',
        `./src/${tr}/array-hashing/*`
    ],
    moduleNameMapper: [
        
    ],
    preset: 'ts-jest',
    testMatch: [
        '<rootDir>/src/__tests__/**/*.ts'
    ],
    verbose: false,
};

export default config;
