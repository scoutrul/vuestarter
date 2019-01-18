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

        'linebreak-style': ['error'],
        'no-param-reassign': ['error'],
        'vue/html-indent': 4,
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
