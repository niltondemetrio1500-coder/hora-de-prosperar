# Plano — Hora de Prosperar

## Escopo

Reproduzir em português brasileiro a estrutura pública observada em `https://horadeprosperaragora.lovable.app/`, com `/` redirecionando diretamente para `/comecar` e sem exibir a antiga página editorial com a imagem do manuscrito/Bíblia. Em `/comecar`, iniciar a jornada e mostrar somente, além do formulário existente, o aviso “Conteúdo de caráter informativo e espiritual.”, links clicáveis para Política de Privacidade e Termos de Uso e a identificação “Raisa Belo Sociedade Individual de Advocacia · CNPJ 49.160.359/0001-15”. Manter confirmação `/frase`, questionário `/jornada`, preparação `/preparando`, oferta final `/ultima-etapa` e as páginas legais. O fluxo preserva o nome entre telas, 21 perguntas, sete portais, modais e transições; os quatro links de checkout abrem somente quando o próprio visitante os aciona. Criar documentos legais com os dados fornecidos, sem acrescentar dados cadastrais não confirmados.

## Direção de design

- **Movimento:** funil espiritual cinematográfico de contraste alto, começando pelo cartão de entrada em `/comecar`.
- **Princípios:** fidelidade visual por rota; hierarquia clara entre progresso, pergunta e ação; acentos dourados sobre fundos noturnos; feedback imediato ao desbloquear um portal.
- **Cores:** marfim e carvão na página editorial e nos documentos legais; azul-marinho profundo e céu dourado no funil; ouro vivo nos destaques, progresso e ações.
- **Layout:** cartão de onboarding com aviso e links legais abaixo; documentos em coluna estreita; HUD superior com saldo, progresso e sete portais; painel de processamento; vídeo vertical e ofertas abaixo da dobra.
- **Assinaturas:** céu com nuvens douradas; logotipo ilustrado; cápsulas para seções e portais; filete dourado separando áreas.
- **Interação:** campos e CTAs ativos, opções clicáveis, modais de portal, redirecionamento progressivo e checkouts externos apenas após clique.
- **Animação:** progresso de 0 a 100% em `/preparando`, modais breves, hover/foco curtos; respeitar `prefers-reduced-motion`.
- **Tipografia:** Poppins no funil e botões; Inter no texto funcional; Playfair Display nos títulos editoriais; Cormorant Garamond nos detalhes clássicos.
- **Essência:** experiência espiritual de manifestação para quem busca nova direção; personalidade contemplativa, cinematográfica e encorajadora.
- **Voz:** tom devocional e direto. Exemplos: “A resposta pode estar em um passo que quase ninguém percebe.”; “Repita esta frase em voz alta.”
- **Marca:** reutilizar a arte pública “Hora de Prosperar”; remover o rótulo e a página editorial de entrada.
- **Cor própria:** dourado `#D6B237`, para botões, progresso e celebrações.

## Implementação

Site estático em HTML, CSS e módulos JavaScript nativos. Não há autenticação, banco de dados nem API própria; o nome transita em `?nome=` e as respostas ficam em memória no navegador durante a jornada. A página final usa o player ConverteAI e destinos Kirvano existentes; o projeto não processa pagamentos. A Política de Privacidade e os Termos de Uso identificam **Raisa Belo Sociedade Individual de Advocacia — CNPJ 49.160.359/0001-15**, descrevem os fluxos e fornecedores observados e não inventam endereço, e-mail, encarregado ou situação cadastral não confirmados. `src/analytics.js` configura o Google Analytics (G-4QH7RWF8NL) com `page_location` e `page_referrer` sem parâmetros de consulta.

## Estrutura

- `index.html`: redirecionamento imediato de `/` para `/comecar`, sem conteúdo editorial.
- `comecar/index.html`: campo de nome e início.
- `frase/index.html`: confirmação oral e CTA para `/jornada`.
- `jornada/index.html`: HUD, perguntas, portais, saldo, progresso e modais.
- `preparando/index.html`: progresso animado e transição automática.
- `ultima-etapa/index.html`: vídeo, espera, quatro ofertas e links legais.
- `politica-de-privacidade/index.html`: política de dados e fornecedores.
- `termos-de-uso/index.html`: condições de uso, conteúdo espiritual, ofertas e checkout externo.
- `src/main.js`: interação, progresso e navegação.
- `src/funnel-data.js`: textos, opções, portais, mensagens e ofertas.
- `src/analytics.js`: tag Analytics e envio dos campos de página sem query string.
- `src/styles.css`: estilos da home/documentos; `public/assets/reference.css`: folha visual de referência copiada localmente.
- `server.mjs`: servidor HTTP estático para Preview e mapa das oito rotas.
- `public/assets/`: manuscrito, marca, céu, artes dos portais e sementes.
- `public/manus-routes.json`: oito rotas declaradas.
- `package.json`, `scripts/build.mjs` e `vercel.json`: build estático para `dist/` e rewrites das rotas limpas na Vercel.
- `TODO.md`: critérios de entrega.

## Hospedagem

`npm run build` reúne páginas, módulos e ativos em `dist/`; `vercel.json` redireciona `/` para `/comecar` e reescreve as rotas internas para os respectivos `index.html`. O Preview local continua disponível por `node server.mjs` na porta `3000`. O código é versionado em repositório GitHub público separado do repositório gerenciado do site. A versão pública é servida pela Vercel, não pelo servidor local do Preview.
