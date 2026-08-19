# Haysla e o Jardim das 18 Tulipas 🌷

Um presente digital de aniversário em formato de minijogo, criado especialmente para celebrar os 18 anos da Haysla. A experiência passa por um jardim encantado, seis mensagens carinhosas, a montagem de um buquê e 18 desejos para a nova fase.

> Espaço sugerido para captura de tela: adicione `docs/capa.png` após publicar a versão final.

## Tecnologias

React, TypeScript, Vite, Framer Motion, Lucide React, Web Audio API, Vitest, ESLint e GitHub Actions. Os gráficos são ilustrações próprias feitas com CSS, formas e emoji nativo; não há imagens externas nem hotlinks.

## Executar localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

Verificações e build:

```bash
npm run lint
npm test
npm run build
npm run preview
```

## Como jogar

Use WASD ou as setas no computador. No celular, use os controles virtuais ou toque em um ponto do jardim. Aproxime-se das 18 tulipas para colhê-las. A cada três, um novo recado é guardado no Jardim de Memórias. O progresso, som, recorde e buquê ficam salvos somente neste navegador.

## Estrutura

```text
src/
├── components/  # personagem, tulipa e controles
├── screens/     # introdução, jogo, buquê, final e memórias
├── tests/       # persistência e regras essenciais
├── audio.ts     # efeitos e melodia via Web Audio API
├── storage.ts   # leitura validada do localStorage
└── App.tsx      # fluxo e estado central da experiência
```

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` testa, compila e publica a cada push em `main`. No repositório, abra **Settings → Pages** e selecione **GitHub Actions** em *Source*. O `base` de produção já está configurado como `/haysla-18-anos/`.

## Créditos e licença dos assets

- Personagem, cenário e ornamentos: ilustrações autorais em HTML/CSS.
- Ícones: [Lucide](https://lucide.dev), licença ISC.
- Tipografia: DM Sans e Playfair Display via Google Fonts, licença SIL Open Font License.
- Sons e música: sintetizados em tempo real pela Web Audio API; nenhum arquivo de áudio externo é utilizado.
- Emoji de tulipa: renderização nativa do sistema operacional.

Este é um projeto pessoal, não oficial e sem finalidade comercial. A gatinha é uma personagem kawaii original; o projeto não possui vínculo com Hello Kitty ou Sanrio.
