# CodeceptJS Web

[![E2E tests](https://github.com/erkmnasc/codeceptjs-web/actions/workflows/ci.yml/badge.svg)](https://github.com/erkmnasc/codeceptjs-web/actions/workflows/ci.yml)

Primeiro projeto de automação web com CodeceptJS e Playwright, feito no curso
da Qazando. Os testes rodam no site de prática
[automationpratice.com.br](https://automationpratice.com.br).

## Cenários

Arquivo `login_test.js`:

- cadastro de usuário com sucesso
- login com sucesso
- login só com e-mail (senha inválida)
- login só com senha (e-mail inválido)
- login sem e-mail e sem senha

## Como rodar

Precisa de Node.js 20 ou mais novo.

```bash
npm install
npx playwright install chromium
npm test                # abre o navegador
npm run test:headless   # sem abrir o navegador
```

Para rodar um cenário pela tag:

```bash
npx codeceptjs run --grep @sucesso
```

## CI

O GitHub Actions roda os testes em modo headless a cada push na `master`, em
pull requests e manualmente (`.github/workflows/ci.yml`).
