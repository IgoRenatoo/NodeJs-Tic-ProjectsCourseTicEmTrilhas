export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'deploy', 'init'] // Define os types aceitos
    ],
    'type-case': [2, 'always', 'lower-case'], // Garante que o tipo esteja em minúsculo
    'subject-full-stop': [2, 'never', '.'], // Evita que o commit termine com ponto
    'subject-case': [2, 'always', 'lower-case'], // Garantir que a descrição está em minúsculo
    'body-leading-blank': [1, 'always'], // Garantir que o corpo começa após uma linha em branco
    'footer-leading-blank': [1, 'always'], // Garantir que os rodapés começam após uma linha em branco
    'header-max-length': [2, 'always', 72] // Proibir título de ser muito longo
  }
}
