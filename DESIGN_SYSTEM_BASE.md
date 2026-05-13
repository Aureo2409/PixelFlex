# PixelFlex - Base do Design System da Landing Page

## 1. Direcao visual

A identidade deve comunicar tecnologia acessivel, confianca e impacto comercial. As referencias visuais mostram uma linguagem escura, cinematografica e humana: fundos pretos, contraste forte, elementos luminosos, cards translucidos, fotografia/video como protagonista e CTAs muito claros.

Para a PixelFlex, a cor original da landing page deve manter-se em preto e azul. A energia vermelha/laranja das referencias pode ser traduzida para brilho, contraste, movimento e foco visual, sem substituir a paleta atual.

Principios:
- Humano antes de tecnico: linguagem clara, beneficios visiveis e prova social.
- Empresas precisam de confianca: hierarquia limpa, contraste alto, leitura rapida.
- Clientes precisam de acao: CTAs evidentes, formularios simples e cards objetivos.
- Visual premium, mas funcional: efeitos discretos, sem prejudicar legibilidade.

## 2. Cores

### Paleta principal

| Token | Cor | Uso recomendado |
| --- | --- | --- |
| `--bg` | `#090d18` | Fundo principal da landing page |
| `--bg-2` | `#0c1020` | Secoes alternadas, blocos de apoio |
| `--bg-warm` | `#0e1422` | Cards, paineis e fundos de conteudo |
| `--ink` | `#e8f0ff` | Texto principal em fundo escuro |
| `--accent` | `#4a8fff` | CTA principal, links ativos, estados de foco |
| `--green` | `#2a6dd9` | Azul de marca, gradientes e destaques secundarios |

### Paleta secundaria

| Token | Cor | Uso recomendado |
| --- | --- | --- |
| `--ink-2` | `#b0c0dc` | Subtitulos, descricoes importantes |
| `--ink-muted` | `#6a88b0` | Texto auxiliar, labels, metadados |
| `--ink-light` | `#3a5070` | Texto muito discreto e elementos desativados |
| `--green-lt` | `#102040` | Pills, areas selecionadas, fundo de hover |
| `--green-xlt` | `#0a1628` | Wash azul escuro, badges e fundos suaves |
| `--accent-lt` | `#0a1830` | Fundo de destaque com baixa intensidade |

### Paleta de suporte

| Cor | Uso recomendado |
| --- | --- |
| `#ffffff` | Texto sobre CTA, icones e alto contraste |
| `rgba(255, 255, 255, 0.72)` | Texto sobre imagem/video no hero |
| `rgba(255, 255, 255, 0.08)` | Botoes ghost, surfaces em vidro |
| `rgba(42, 109, 217, 0.20)` | Badges e fundos de destaque azul |
| `#7aaeff` | Realce luminoso sobre hero escuro |
| `#3a7aee` | Hover do botao principal |
| `#1a2a42` | Bordas de cards e separadores |

Regra de uso:
- Usar o azul apenas para orientar acao, destaque ou informacao importante.
- Evitar superficies muito azuis em excesso; a base deve continuar escura.
- Em texto pequeno, preferir `--ink` ou `--ink-2`; `--ink-muted` apenas para informacao secundaria.

## 3. Tipografia

### Fontes atuais do HTML

| Papel | Fonte | Uso |
| --- | --- | --- |
| Display / titulos | `Barlow Condensed` | H1, H2, numeros grandes, chamadas fortes |
| Corpo / UI | `Inter` | Paragrafos, botoes, menus, formularios |
| Tecnico / detalhe | `Share Tech Mono` | Codigos, etiquetas, microdados e detalhes numericos |

### Fontes similares sugeridas

Se for necessario substituir:
- `Barlow Condensed`: `Saira Condensed`, `Oswald`, `Roboto Condensed`.
- `Inter`: `Manrope`, `DM Sans`, `Geist`, `Plus Jakarta Sans`.
- `Share Tech Mono`: `IBM Plex Mono`, `Space Mono`, `JetBrains Mono`.

### Hierarquia

| Nivel | Tamanho | Peso | Line-height | Uso |
| --- | --- | --- | --- | --- |
| H1 Hero | `clamp(2.4rem, 5.5vw, 4rem)` | 800 | 1.1 | Promessa principal da landing |
| H1 Interno | `clamp(2.2rem, 5vw, 3.8rem)` | 800 | 1.12 | Titulos de secoes fortes |
| H2 | `clamp(1.7rem, 3.5vw, 2.8rem)` | 800 | 1.18 | Blocos principais |
| H3 | `clamp(1.1rem, 2vw, 1.4rem)` | 700 | 1.3 | Cards e subtitulos |
| Lead | `clamp(1rem, 1.6vw, 1.15rem)` | 400 | 1.75 | Texto introdutorio |
| Corpo | `1rem` | 400-500 | 1.6 | Conteudo geral |
| Microcopy | `0.72rem - 0.85rem` | 500-600 | 1.4 | Labels, badges, notas |

Regras:
- Titulos podem ser compactos e fortes, mas sem comprometer leitura em mobile.
- Paragrafos devem ser curtos, com largura maxima entre `560px` e `680px`.
- Evitar usar mono em texto longo; reservar para detalhes tecnicos ou numericos.

## 4. Componentes

### Botoes

Base:
- Altura confortavel, minimo recomendado: `48px`.
- Padding: `14px 30px`.
- Border-radius: `10px` ou pill quando houver icone circular.
- Fonte: `Inter`, `0.95rem`, peso `600`.
- Transicao: `0.25s cubic-bezier(0.4, 0, 0.2, 1)`.

Variantes:
- Primario: fundo `#4a8fff`, texto branco, sombra `0 2px 16px rgba(0,0,0,0.45)`.
- Primario hover: fundo `#3a7aee`, deslocamento `translateY(-2px)`.
- Outline: fundo transparente, borda `1.5px solid #1a2a42`, texto branco; hover com borda azul.
- Ghost: fundo `rgba(255,255,255,0.08)`, borda translúcida e blur leve.

Uso:
- CTA principal: WhatsApp, pedir orcamento ou iniciar contacto.
- CTA secundario: Instagram, ver servicos, explorar pacotes.
- Nunca usar mais de um CTA primario por bloco visual.

### Inputs de formulario

Estilo recomendado:
- Fundo: `#0c1020` ou `rgba(255,255,255,0.06)`.
- Borda: `1px solid #1a2a42`.
- Texto: `#e8f0ff`.
- Placeholder: `#6a88b0`.
- Border-radius: `10px`.
- Padding: `14px 16px`.
- Focus: borda `#4a8fff` e sombra `0 0 0 3px rgba(74,143,255,0.18)`.

Regras de UX:
- Labels sempre visiveis para empresas preencherem com confianca.
- Campos essenciais primeiro: nome, empresa, telefone/WhatsApp, servico desejado.
- Validacao clara e curta; erro em texto legivel, sem depender apenas de cor.

### Cards

Estilo base:
- Fundo: `#0e1422`.
- Borda: `1px solid #1a2a42`.
- Border-radius: `18px`.
- Padding: `28px - 36px`.
- Sombra: `0 2px 16px rgba(0,0,0,0.45)`.
- Hover: `translateY(-5px/-6px)`, borda azul e sombra media.

Variantes:
- Card de servico: icone no topo, titulo curto, descricao objetiva, link/tag final.
- Card de estatistica: numero grande em `Barlow Condensed`, legenda curta, contraste alto.
- Card de testemunho: foto ou placeholder visual, quote curto, nome/empresa.
- Card de pacote: preco/valor em destaque, beneficios em lista, CTA no rodape.

Regra de conteudo:
- Cada card deve responder rapidamente: o que e, para quem serve, qual beneficio e proximo passo.

## 5. Estetica

### Arredondamento

Tokens atuais:
- `--r-sm: 10px` - botoes, inputs, imagens pequenas.
- `--r-md: 18px` - cards, paineis e modais.
- `--r-lg: 28px` - blocos grandes e containers especiais.
- `--r-xl: 40px` - secoes hero ou superficies muito amplas.
- `100px` - pills, badges e CTAs em formato capsula.

Direcao:
- Usar cantos suaves, mas nao infantis.
- Para uma landing B2B, priorizar `10px` e `18px`; reservar `28px+` para elementos hero.

### Sombras

Tokens atuais:
- Pequena: `0 2px 16px rgba(0, 0, 0, 0.45)`.
- Media: `0 6px 30px rgba(0, 0, 0, 0.55)`.
- Grande: `0 16px 60px rgba(0, 0, 0, 0.65)`.

Regras:
- Em fundo escuro, a sombra deve dar profundidade, nao criar manchas.
- Para destaque azul, usar brilho contido: `0 8px 30px rgba(42,109,217,0.35)`.
- Evitar glow constante em textos longos; aplicar apenas a CTAs, bordas ativas e elementos hero.

### Espacamentos

Tokens praticos:
- Container: `max-width: 1140px`, padding lateral `24px`.
- Secao grande: `96px 0`.
- Secao compacta: `64px 0`.
- Grid de cards: `24px` de gap.
- Hero: conteudo com `40px - 80px` de respiro vertical.
- Dentro de cards: `24px - 36px`.

Mobile:
- Reduzir secoes para `56px - 64px`.
- Cards em uma coluna.
- CTAs empilhados quando nao couberem confortavelmente.
- Manter alvos clicaveis com pelo menos `44px` de altura.

## 6. Regras de usabilidade para clientes e empresas

### Para clientes finais

- Mensagem direta: explicar valor em linguagem simples.
- CTAs sempre visiveis em pontos estrategicos.
- Prova social acima da dobra quando possivel.
- Conteudo escaneavel: titulos curtos, listas e numeros.
- Evitar jargoes tecnicos sem beneficio claro.

### Para empresas

- Dar sinais de confianca: servicos, processo, resultados, contacto e localizacao.
- Cards de servicos devem mostrar aplicacao pratica: site institucional, loja online, SEO, manutencao.
- Formularios devem parecer seguros e profissionais.
- Precos/pacotes, quando existirem, precisam de comparacao simples.
- A landing deve facilitar decisao rapida: problema, solucao, beneficio, prova e acao.

## 7. Tokens CSS recomendados

```css
:root {
  --bg: #090d18;
  --bg-2: #0c1020;
  --bg-warm: #0e1422;
  --ink: #e8f0ff;
  --ink-2: #b0c0dc;
  --ink-muted: #6a88b0;
  --ink-light: #3a5070;
  --brand-blue: #2a6dd9;
  --accent: #4a8fff;
  --accent-hover: #3a7aee;
  --accent-soft: rgba(42, 109, 217, 0.2);
  --border: #1a2a42;
  --surface-glass: rgba(255, 255, 255, 0.08);
  --text-on-image: rgba(255, 255, 255, 0.72);

  --font-head: "Barlow Condensed", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "Share Tech Mono", monospace;

  --r-sm: 10px;
  --r-md: 18px;
  --r-lg: 28px;
  --r-xl: 40px;
  --r-pill: 100px;

  --shadow-sm: 0 2px 16px rgba(0, 0, 0, 0.45);
  --shadow-md: 0 6px 30px rgba(0, 0, 0, 0.55);
  --shadow-lg: 0 16px 60px rgba(0, 0, 0, 0.65);
  --focus-ring: 0 0 0 3px rgba(74, 143, 255, 0.18);
}
```

