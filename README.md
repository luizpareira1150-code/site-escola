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

### Erros do upload anterior

O erro de exportação de `consultationWhatsApp` e os erros TS2739 de `EditorialImage`
indicam arquivos de versões diferentes no repositório. Atualize as pastas `app/` e
`components/` juntas, usando os arquivos desta cópia local validada. Em particular,
`components/site-data.ts` exporta `consultationWhatsApp` e
`components/InternalPage.tsx` contém a tipagem compatível com as páginas atuais.

Não é necessário apagar código para corrigir esses erros. As pastas `dist/` e
`tmp/`, assim como `tsconfig.tsbuildinfo`, são dispensáveis no GitHub e podem ser
removidas. O `.gitignore` só evita novos arquivos: não remove os já enviados.
Mantenha `app/`, `components/`, `public/`, `package.json`, `package-lock.json` e
os arquivos de configuração. Os arquivos Markdown não causam a falha de build.

Para upload manual, extraia `entrega/site-escola-vercel.zip` e envie seu conteúdo
para a raiz do repositório, substituindo os arquivos existentes. Não envie o ZIP
nem crie uma pasta extra envolvendo o projeto. Depois confirme o commit no GitHub
e acompanhe o novo deployment na Vercel.
