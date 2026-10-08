# Entregáveis

## Entrada e confirmação da jornada
Remover a primeira página editorial do funil, aquela com a imagem do manuscrito/Bíblia. Ao abrir `/`, encaminhar diretamente a `/comecar`, sem exibir a página editorial. Em `/comecar`, manter a marca, os textos, o campo “Digite seu nome” e o botão “Começar minha Jornada”; enviar o nome digitado para `/frase?nome=...`. Abaixo do formulário, exibir somente o aviso “Conteúdo de caráter informativo e espiritual.”, os links clicáveis “Política de Privacidade” e “Termos de Uso”, e “Raisa Belo Sociedade Individual de Advocacia · CNPJ 49.160.359/0001-15”. Em `/frase`, reproduzir o título personalizado “[nome], antes de continuarmos...”, instrução e frase “A vida dos meus sonhos começa com a minha escolha.”, aviso para repeti-la em voz alta e botão ativo “Continuar Jornada”; clicar leva a `/jornada?nome=...`.

## Jornada interativa e portais em /jornada
Reproduzir o cabeçalho personalizado, saldo inicial R$ 0,00, progresso, sete portais e as 21 perguntas e opções observadas. A primeira pergunta aceita apenas números; “Continuar” fica ativo após valor válido. As demais opções são botões clicáveis que avançam. Ao chegar aos desbloqueios, mostrar modais com artes, nomes, descrições e CTAs; depois da pergunta sobre receber grande quantia, mostrar o intersticial e seu botão clicável “Continuar Jornada”. Calcular o saldo visual a partir da resposta numérica e do aumento de R$ 2.000.000 na pergunta de abundância. Após a última resposta, navegar a `/preparando?nome=...`. As respostas ficam em memória no navegador e não são enviadas a uma API própria nem persistidas por esta aplicação.

## Preparação em /preparando
Reproduzir título personalizado, textos de processamento, cinco mensagens rotativas da origem, progresso de 0 a 100%, sete portais desbloqueados e citação personalizada. Ao concluir, redirecionar a `/ultima-etapa?nome=...`.

## VSL, ofertas e links de checkout
Em `/ultima-etapa`, reproduzir logotipo, título personalizado, data, player ConverteAI, instrução de áudio e espera. Após 493 segundos (ou imediatamente com `?liberar=1`), mostrar quatro opções e artes: R$ 100, R$ 77, R$ 47 e R$ 27, cada uma apontando ao link Kirvano correspondente. Os links abrem o checkout externo somente após clique do visitante; o projeto não realiza compras nem pagamentos. Manter o aviso de que o conteúdo não promete ganho financeiro, cura ou resultado e exibir links para Política de Privacidade e Termos de Uso.

## Política de Privacidade em /politica-de-privacidade
Criar e publicar uma Política de Privacidade em português brasileiro com última atualização 08/10/2026 e identificação fornecida “Raisa Belo Sociedade Individual de Advocacia”, CNPJ “49.160.359/0001-15”. Descrever nome no parâmetro `?nome=`, respostas sobre situação financeira, fé/religião, saúde, emoções, família e objetivos, memória apenas no navegador sem API/banco próprios, registros técnicos e fornecedores Vercel, Google Analytics, ConverteAI, Kirvano e Google Fonts. Explicar finalidades, bases legais conforme LGPD, cookies, retenção, compartilhamento, direitos, segurança e atualização. Não inserir a situação cadastral consultada nem endereço/e-mail/DPO não confirmados. Declarar que `page_location` e `page_referrer` do Google Analytics são enviados sem parâmetros de consulta.

## Termos de Uso em /termos-de-uso
Criar uma página própria de Termos de Uso em português brasileiro, com última atualização 08/10/2026 e a identificação fornecida “Raisa Belo Sociedade Individual de Advocacia”, CNPJ “49.160.359/0001-15”. Explicar o escopo do site e da jornada, natureza informativa/espiritual e ausência de promessa de renda, cura ou resultado, ausência de aconselhamento médico, financeiro, jurídico ou psicológico, uso de terceiros, ofertas e checkout Kirvano (R$ 100, R$ 77, R$ 47 e R$ 27), preservação dos direitos do consumidor, propriedade intelectual, disponibilidade, alterações e legislação brasileira. Não inserir a situação cadastral consultada nem endereço/e-mail/DPO não confirmados.

## Navegação, Analytics e recursos
Manter as oito rotas (`/` redireciona para `/comecar`; `/comecar`, `/frase`, `/jornada`, `/preparando`, `/ultima-etapa`, `/politica-de-privacidade` e `/termos-de-uso`) e preservar o nome nas etapas. Declarar as rotas em `public/manus-routes.json`; Vercel deve redirecionar a raiz, reescrever as rotas internas e disponibilizar o build estático em `dist/`. Google Analytics deve remover query strings de `page_location` e `page_referrer`. Servir os recursos do projeto, incluindo logotipo, fundo celestial, sete portais e quatro sementes; o manuscrito permanece oculto, sem uso na entrada do funil.

## Repositório GitHub e hospedagem Vercel
Manter o repositório GitHub público do site conectado ao projeto Vercel, separado do repositório gerenciado do site. O build de produção deve servir as oito rotas, módulos, ativos, políticas e links atualizados. Não acionar compra ou pagamento em nenhuma etapa.
