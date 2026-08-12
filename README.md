# Instituto de Formação Psicanalítica Cida Freitas

Website institucional construído com Next.js App Router, React e TypeScript.

## Desenvolvimento

Requer Node.js 22.13 ou superior.

```bash
npm ci
npm run dev
```

## Validação

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

## Deploy na Vercel

Conecte o repositório GitHub à Vercel e mantenha as configurações padrão do Next.js:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: padrão do Next.js, sem override
- Install Command: `npm ci`
- Root Directory: a pasta que contém este `package.json`

O projeto não depende de variáveis de ambiente para renderizar as páginas institucionais.
