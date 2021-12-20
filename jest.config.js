module.exports = {
	testEnvironment: 'jsdom', // temos que dizer qual ambiente de teste, no caso o browser (web)
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true, // isso mostra a porcentagem de cobertura dos testes no código
	collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'] // quais arquivos ele deve testar
};
