# Plano — Hora de Prosperar

## Escopo

Reproduzir, em português brasileiro, a estrutura pública observada em `https://horadeprosperaragora.lovable.app/`: `/`, `/comecar`, a próxima tela `/frase?nome=...` revelada pelo envio do nome e `/politica-de-privacidade`. A referência em `/frase` instrui o visitante a repetir uma frase em voz alta antes de continuar; não avançarei nem afirmarei essa confirmação em nome de alguém. As etapas posteriores não foram mapeadas, portanto não serão inventadas. Preservar as imagens acessíveis, textos e links observados; a interação de nome encaminha para a tela `/frase` com o nome na URL.

## Direção de design

- **Movimento:** editorial devocional contemporâneo, contrastando manuscrito antigo e interface digital minimalista.
- **Princípios:** coluna de leitura estreita e calma; hierarquia editorial clara; dourado discreto como acento; fidelidade às diferenças entre a home marfim e o portal noturno.
- **Cores:** marfim quente e carvão para a leitura; ouro envelhecido para destaques; azul-marinho quase preto e tons de horizonte para a jornada.
- **Layout:** fluxo vertical em coluna na home; painel compacto ao centro no início da jornada e na confirmação de frase; política em uma coluna textual confortável.
- **Assinaturas:** filete dourado fino; destaques dourados seletivos nos títulos; iluminação noturna sutil na tela da jornada.
- **Interação:** CTAs amplos e claros, links nativos, formulário acessível e validação concisa; não recolher outros dados nem inventar etapas.
- **Animação:** transições breves em hover/foco; respeitar `prefers-reduced-motion`; sem efeitos contínuos.
- **Tipografia:** Georgia como serifada editorial dos títulos, com Arial/Helvetica para texto e controles; largura de linha e hierarquia controladas.
- **Essência:** reflexão espiritual e prosperidade para quem busca alinhar intenção e palavras; personalidade serena, reverente e acolhedora.
- **Voz:** contemplativa, sem promessas de resultado. Exemplos: “A resposta pode estar em um passo que quase ninguém percebe.”; “Assista até o final e tire suas próprias conclusões, sem compromisso.”
- **Marca:** reutilizar a arte pública Hora de Prosperar no cadastro e a assinatura “Revelação Espiritual” na home; preservar a imagem da origem.
- **Cor própria:** dourado envelhecido extraído visualmente da referência.

## Implementação

Site estático em HTML, CSS e JavaScript, servido por Node.js sem dependências externas, sem backend, login, banco, analytics, tracking ou integrações comerciais. Quatro rotas públicas explícitas são mapeadas pelo servidor; o nome é encaminhado por URL para `/frase` e inserido no texto com APIs DOM seguras. O ativo do manuscrito e o logotipo são cópias locais das imagens acessíveis publicamente. A tela `/frase` replica a instrução e frase observadas; como o botão visível prossegue apenas após confirmação oral e o próximo estado não foi examinado, a continuação permanece sem destino implementado nesta réplica. A política preserva os placeholders originais sem inventar dados legais.

## Estrutura

- `index.html`: home editorial.
- `comecar/index.html`: campo de nome e início da jornada.
- `frase/index.html`: etapa de confirmação oral observada.
- `politica-de-privacidade/index.html`: política com dez seções.
- `src/main.js`: encaminhamento/validação do nome e preenchimento seguro da tela `/frase`.
- `src/styles.css`: tokens, layouts responsivos e estados de acessibilidade.
- `server.mjs`: servidor HTTP simples, na porta 3000, para rotas e estáticos.
- `public/assets/`: manuscrito e logotipo; `public/manus-routes.json`: manifesto das páginas.
- `app.config.ts`: metadado de marca do projeto.
- `TODO.md`: entregáveis e critérios rastreados.

## Dependências e entrega

A aplicação usa apenas módulos nativos do Node.js; não há dependências de pacotes. O Preview executa `node server.mjs` em `0.0.0.0:3000`. Esta etapa entrega o Preview gerenciado; não configurar publicação pública, backend ou banco de dados.
