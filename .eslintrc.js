module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'quotes': ['warn', 'single'],
        'semi': ['error', 'always'],
        'no-unused-vars': 'warn',
        'vue/script-indent': ['warn', 4, {
            'baseIndent': 1,
            'switchCase': 1
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    globals: {
        'moment': true,
        'SpeechRecognition': true,
        'SpeechGrammarList': true
    }
};
