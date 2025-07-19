# `utils/` — SCSS Utility Guide
### `utils/` — Guia SCSS

This directory contains modular tools for global styling, responsiveness, layout architecture, and reusable component design.
Este diretório contém ferramentas modulares para estilização global, estrutura de layout, responsividade e componentes reutilizáveis.

---

## `_variables.scss` — Design Tokens
## `_variables.scss` — Tokens de Design

Defines reusable values such as breakpoints, colors, spacing, border-radius and grid units.
Define valores reutilizáveis como breakpoints, cores, espaçamentos, bordas arredondadas e unidades de grid.

| Group / Grupo                  | Purpose / Propósito                          |
|-------------------------------|-----------------------------------------------|
| `$breakpoints`                | Mobile-first screen sizes                    |
| `$color-*`, `$text-color-*`   | Project color palette / Paleta de cores       |
| `$btn-*`                      | Button state styling                         |
| `$spacing-*`                  | Global spacing scale                         |
| `$border-radius-*`           | Border rounding tokens                       |
| `$grid-columns`, `$grid-gutter`, `$grid-margin` | Layout grid system / Sistema de grid responsivo |

---

## `_tokens.scss` — CSS Custom Properties
## `_tokens.scss` — Propriedades CSS Customizadas

Defines custom properties for use with `var(--token)` syntax directly in HTML/CSS.
Define variáveis CSS para uso direto com `var(--token)` no HTML ou CSS.

**Themes / Temas disponíveis:**
- `default`: light blue / azul claro
- `data-theme="pink"`: pink-orange accent / rosa com detalhes em laranja

**Example / Exemplo:**

```css
color: var(--text-color-default);
background-color: var(--background-color);
```

---

## `_mixins.scss` — SCSS Mixins
## `_mixins.scss` — Mixins SCSS

Reusable mixins grouped by semantic purpose — with bilingual documentation and code examples.
Mixins reutilizáveis organizados por propósito semântico — com documentação bilíngue e exemplos de uso.

---

### 🎬 Interaction / Interação

Handles hover, focus, cursor, and visual feedback for interactive elements.
Controla efeitos de hover, foco, cursor e feedback visual em elementos interativos.

| Mixin              | EN Description                                 | PT Descrição                                      |
|--------------------|------------------------------------------------|--------------------------------------------------|
| `hover-transition` | Smooth transition on hover                     | Transição suave em hover                         |
| `hover-block`      | Block of styles inside `:hover`                | Bloco de estilos personalizados em hover         |
| `hover-scale`      | Scale effect on target during hover/focus      | Escala suave sobre elemento-alvo em hover/focus |
| `hover-zoom`       | Zoom and shadow effect on hover                | Efeito de zoom e sombra no hover                 |
| `interactive`      | Cursor pointer + transform feedback            | Cursor pointer + escala e movimento suave        |
| `focus-style`      | Custom styles for focus & focus-visible states | Estilização de foco e focus-visible              |

**Usage / Exemplo:**

```scss
@include hover-transition(color, red);
@include interactive(1.05);
@include focus-style(2px solid orange) {
  background-color: yellow;
}
```

---

### 🧭 Scroll / Rolagem

Controls scroll margin for smooth navigation and anchor behavior.
Controla margens no scroll para navegação fluída e comportamento de âncoras.

| Mixin               | EN Description                              | PT Descrição                                     |
|---------------------|---------------------------------------------|--------------------------------------------------|
| `scroll-margin-top` | Adds top scroll offset to target elements   | Aplica margem superior ao elemento rolado       |

**Usage / Exemplo:**

```scss
@include scroll-margin-top(50px);
```

---

### 📱 Responsiveness / Responsividade

Responsive logic using breakpoints and semantic wrappers.
Lógica responsiva baseada em breakpoints e wrappers semânticos.

| Mixin     | EN Description                                   | PT Descrição                                   |
|-----------|--------------------------------------------------|------------------------------------------------|
| `respond` | Wraps styles in a media query from `$breakpoints` map | Envolve estilos em media query a partir de mapa `$breakpoints` |

**Usage / Exemplo:**

```scss
@include respond(tablet) {
  font-size: 1.25rem;
}
```

---

### 🧱 Layout / Estrutura

Defines layout primitives for positioning, containers, grids and column logic.
Define primitivas de layout para posicionamento, containers, grids e lógica de colunas.

| Mixin                | EN Description                                     | PT Descrição                                      |
|----------------------|----------------------------------------------------|---------------------------------------------------|
| `container`          | Fluid margins and max-width                        | Margens fluidas e largura máxima responsiva       |
| `centered-container` | Fixed-width block, horizontally centered          | Container fixo centralizado                       |
| `grid-center`        | Centered grid layout                               | Layout grid centralizado vertical e horizontal    |
| `flex-column-center` | Horizontal column layout with gap option          | Layout em colunas com gap opcional                |
| `grid-column-center` | Vertical grid layout with centered alignment      | Grid vertical com alinhamento centralizado        |
| `grid-wrapper`       | Flex grid layout with gutters                     | Grid flexível com gutters responsivos             |
| `hero-grid-base`     | Grid base for hero sections                       | Grid base para seções tipo “hero”                 |
| `column($span)`      | Proportional width with responsive padding        | Largura proporcional e paddings responsivos       |

**Usage / Exemplo:**

```scss
@include grid-wrapper;
@include column(6);
```

---

### 🧩 Components / Componentes

Predefined styles for scalable UI elements like buttons.
Estilos pré-definidos para elementos de interface reutilizáveis como botões.

| Mixin           | EN Description                               | PT Descrição                                    |
|-----------------|----------------------------------------------|-------------------------------------------------|
| `button-style`  | Button state-based styling via placeholders  | Estilos de estado em botões com placeholders SCSS |

**Usage / Exemplo:**

```scss
@include button-style(hover);
```

---

## `_extends.scss` — SCSS Placeholders
## `_extends.scss` — Placeholders SCSS

Reusable placeholders for semantic styling with `@extend`.
Placeholders reutilizáveis para estilização semântica com `@extend`.

**Placeholders disponíveis:**

- `%btn-base` / `%btn-hover` / `%btn-focused` / `%btn-disabled`
- `%flex-center` / `%visually-hidden`

**Example / Exemplo:**

```scss
.card {
  @extend %flex-center;
}
```

---

## 🛠 Best Practices / Boas Práticas

- ✅ Use **BEM syntax** for class naming: `.block__element--modifier`
  ✅ Use sintaxe BEM para nomear classes: `.bloco__elemento--modificador`

- ✅ Document all mixins with: `@mixin`, `@param`, `@desc`, `@example`
  ✅ Documente todos os mixins com: `@mixin`, `@param`, `@desc`, `@example`

- ✅ Centralize tokens in `_variables.scss` and `_tokens.scss`
  ✅ Centralize tokens visuais em `_variables.scss` e `_tokens.scss`

- ✅ Create style preview pages with real components
  ✅ Crie páginas de visualização para componentes reais

---

✨ *This folder is the heart of your design system. Clean, modular and lovingly documented.*
✨ *Este diretório é o coração do seu design system. Limpo, modular e documentado com carinho.*

---
