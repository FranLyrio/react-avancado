// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
	dir: './'
})

const customJestConfig = {
	testEnvironment: 'jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts(x)?',
		'!src/**/stories.tsx',
		'!**/*.d.ts',
		'!**/node_modules/**',
		'!src/pages/**/*.tsx',
		'!src/styles/**/*.ts'
	],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
	modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}

module.exports = createJestConfig(customJestConfig)
