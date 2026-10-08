# Plano — Hora de Prosperar

## Escopo

Reproduzir em português brasileiro a estrutura pública observada em `https://horadeprosperaragora.lovable.app/`: home `/`, entrada `/comecar`, confirmação `/frase`, questionário `/jornada`, preparação `/preparando`, oferta final `/ultima-etapa` e política `/politica-de-privacidade`. Os controles devem navegar e avançar por cliques reais, preservar o nome na URL e manter as 21 perguntas, sete portais, modais de desbloqueio e transições da referência. A página final inclui o player público usado pela origem e quatro escolhas de semente com seus destinos Kirvano originais; o projeto não inicia nem conclui compras.

## Direção de design

- **Movimento:** funil espiritual cinematográfico de contraste alto, com uma home editorial de inspiração clássica.
- **Princípios:** fidelidade visual por rota; hierarquia clara entre progresso, pergunta e ação; acentos dourados sobre fundos noturnos; feedback imediato ao desbloquear um portal.
- **Cores:** marfim e carvão na página editorial; azul-marinho profundo e céu dourado no funil; ouro vivo nos destaques, progresso e ações.
- **Layout:** coluna de leitura estreita na home; cartões de onboarding centralizados; HUD superior com saldo, progresso e sete portais; painel de processamento; vídeo vertical e ofertas abaixo da dobra.
- **Assinaturas:** céu com nuvens douradas; logotipo ilustrado; cápsulas para seções e portais; filete dourado separando áreas.
- **Interação:** CTA de frase ativo; resposta numérica aceita somente dígitos; opções clicáveis; modais para portais; redirecionamento progressivo; escolhas finais de semente abrem checkout externo apenas após clique do visitante.
- **Animação:** progresso de 0 a 100% em `/preparando`, modais breves, hover e foco curtos; respeitar `prefers-reduced-motion`.
- **Tipografia:** Poppins nas telas de funil e botões; Inter no texto funcional; Playfair Display nos títulos editoriais; Cormorant Garamond nos detalhes clássicos.
- **Essência:** experiência espiritual de manifestação para quem busca nova direção; personalidade contemplativa, cinematográfica e encorajadora.
- **Voz:** preservar os textos de origem em tom devocional e direto. Exemplos: “A resposta pode estar em um passo que quase ninguém percebe.”; “Repita esta frase em voz alta.”
- **Marca:** reutilizar a arte pública “Hora de Prosperar” e o rótulo editorial “Revelação Espiritual”.
- **Cor própria:** dourado `#D6B237`, para botões, progresso e celebrações.

## Implementação

Site estático em HTML, CSS e módulos JavaScript nativos, sem dependências de pacotes, autenticação ou banco de dados. O nome transita em `?nome=`; respostas e estado dos portais ficam somente em memória no navegador durante `/jornada` e não são enviados a uma API própria nem persistidos. O player ConverteAI e os destinos Kirvano são recursos externos existentes no funil de origem; não haverá automação de pagamento. Reutilizar localmente as imagens públicas fornecidas pela referência. A política preserva os dados de responsável e os placeholders legais não preenchidos, mas descreve com transparência o questionário, a URL com nome, o player e os checkouts externos, em vez de afirmar que a experiência não possui formulário.

## Estrutura

- `index.html`: home editorial e apresentação.
- `comecar/index.html`: campo de nome e início.
- `frase/index.html`: frase, logotipo, céu e CTA funcional para `/jornada`.
- `jornada/index.html`: HUD, 21 perguntas, sete portais, saldo, progresso e modais.
- `preparando/index.html`: progresso animado e transição automática.
- `ultima-etapa/index.html`: vídeo, espera e quatro opções de semente.
- `politica-de-privacidade/index.html`: política observada com as ressalvas de dados correspondentes ao clone.
- `src/main.js`: interação, progresso e navegação.
- `src/funnel-data.js`: textos, opções, portais, mensagens e ofertas.
- `src/styles.css`: estilos da home editorial e da política; `public/assets/reference.css`: folha visual da referência copiada e servida localmente para o funil.
- `server.mjs`: servidor HTTP estático e mapa das sete rotas.
- `public/assets/`: manuscrito, marca, céu, artes dos portais e sementes.
- `public/manus-routes.json`: rotas declaradas para o Preview.
- `TODO.md`: critérios de entrega.

## Dependências e entrega

A aplicação usa APIs nativas do navegador/Node.js e serve localmente as imagens. Google Fonts, player ConverteAI e checkouts Kirvano são carregados/acessados apenas nas etapas correspondentes, conforme a origem. O Preview usa `node server.mjs` em `0.0.0.0:3000`. Manter publicação pública, backend e banco desativados.


## Mensuração e privacidade

A tag Google Analytics fornecida pelo responsável é carregada em todas as sete rotas públicas. A configuração de visualização envia apenas origem e caminho, omitindo a query string (inclusive o nome em `?nome=`); a política de privacidade informa o fornecedor, a finalidade estatística e o possível uso de cookies/dados técnicos.
