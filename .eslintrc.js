module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: ['prettier'],
	extends: ['airbnb', 'prettier', 'plugin:vue/recommended'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		quotes: ['warn', 'single'],
		semi: ['error', 'always'],
		'no-unused-vars': ['warn'],
		'linebreak-style': ['error', 'windows'],
		'no-param-reassign': [
			2,
			{
				props: false,
			},
		],
		'vue/html-indent': 4,
		'import/no-unresolved': [
			'error',
			{
				ignore: ['./', '@/'],
			},
		],

		'vue/html-closing-bracket-spacing': [
			'error',
			{
				selfClosingTag: 'never',
			},
		],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	globals: {
		moment: true,
		SpeechRecognition: true,
		SpeechGrammarList: true,
	},
};
