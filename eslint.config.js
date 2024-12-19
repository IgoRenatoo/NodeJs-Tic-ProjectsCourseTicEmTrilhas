import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Geral
      indent: ['error', 2], // Indentação de 2 espaços
      quotes: [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true }
      ], // Aspas simples
      semi: ['error', 'never'], // Sem ponto e vírgula
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }], // Máximo de 2 linhas vazias consecutivas

      // Espaçamento
      'space-before-function-paren': ['error', 'always'], // Espaço antes de parênteses nas funções
      'space-infix-ops': ['error'], // Garante espaço ao redor de operadores (como =)
      'space-before-blocks': ['error', 'always'], // Espaço antes de blocos ({)
      'keyword-spacing': ['error', { before: true }],
      'no-trailing-spaces': 'error', // Sem espaços em branco no final das linhas
      'no-multi-spaces': ['error'], // Impede múltiplos espaços consecutivos

      // Variáveis e constantes
      'no-unused-vars': [
        'off',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true }
      ], // Sem variáveis não utilizadas
      'prefer-const': 'error', // Prefira const quando possível
      'no-var': 'error', // Não utilize var, prefira let ou const

      // Objetos e Arrays
      'comma-dangle': ['error', 'never'], // Sem vírgula no final
      'object-curly-spacing': ['error', 'always'], // Espaçamento dentro de objetos
      'array-bracket-spacing': ['error', 'never'], // Sem espaço dentro de colchetes

      // Funções e Classes
      'arrow-parens': ['off', 'as-needed'], // Parênteses opcionais em arrow functions com um único argumento
      'constructor-super': 'error', // super() deve ser chamado no construtor de classes derivadas
      'no-duplicate-imports': 'error', // Sem importações duplicadas

      // Outros
      eqeqeq: ['error', 'always'], // Use === e !==
      'no-console': 'off', // Aviso ao usar console.log
      'no-debugger': 'error', // Sem debugger
      'no-undef': 'off', // Sem uso de variáveis indefinidas
      'curly': ['off', 'all'], // Sempre use {} em blocos
      'no-new': 'error', // Evite new sem atribuição
      '@typescript-eslint/strict-boolean-expressions': 'off', // Desativa a exigência de expressões booleanas estritas
      '@typescript-eslint/no-unused-vars': ['off'], // Desabilita a regra de variáveis não usadas
      '@typescript-eslint/no-explicit-any': ['off'] // Desabilita o uso de "any"
    }
  }
]
