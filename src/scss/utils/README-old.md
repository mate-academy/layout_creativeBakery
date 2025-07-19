# `utils/` — SCSS Utility Guide

This directory contains foundational tools for global styling, responsiveness, layout structure, and scalable component design. Ideal for maintaining visual consistency and reusability across the project.

---

## `_variables.scss`

Design tokens used across mixins, placeholders, and layout modules.

### Groups and Purpose

| Group                             | Description                             |
|----------------------------------|-----------------------------------------|
| `$breakpoints`                   | Mobile-first breakpoints                |
| `$color-*`                       | Project color palette                   |
| `$btn-*`                         | Button color states                     |
| `$text-color-*`                 | Typography color tokens                 |
| `$spacing-*`                     | Global spacing values                   |
| `$border-radius-*`              | Rounded border values                   |
| `$grid-columns`, `$grid-gutter`, `$grid-margin` | Responsive grid system tokens |

---

## `_tokens.scss`

Defines CSS custom properties for direct use via `var(--token)` in HTML.

### Example usage:

```css
color: var(--text-color-default);
background-color: var(--background-color);
```

### **Available themes:**

- `default`: light blue (`--color-light-blue`)
- `data-theme="pink"`: light pink with orange accents

---

## `_mixins.scss`

Reusable SCSS mixins organized by category with inline documentation.

---

### Interaction

```scss
@include hover-transition(color, red);
@include focus-style(2px solid orange) { /* custom styles */ }
@include hover-block { /* custom hover block */ }
@include hover-scale(.icon);
```

| Mixin            | Description                                         |
|------------------|-----------------------------------------------------|
| `hover-transition`| Smooth hover transition on specified property       |
| `hover-block`     | Block-style hover with custom content               |
| `hover-scale`     | Applies transform scale to target on hover/focus    |
| `focus-style`     | Customizable focus/focus-visible styles             |

---

### Responsiveness

```scss
@include respond(tablet) {
  /* styles for screens ≥ tablet breakpoint */
}
```

| Mixin     | Description                                           |
|-----------|-------------------------------------------------------|
| `respond` | Wraps content inside a media query using `$breakpoints` map |

---

### Layout & Grid

```scss
@include container;
@include centered-container(1280px);
@include grid-center;
@include flex-column-center(1rem);
@include hero-grid-base;
@include grid-wrapper;
@include column(4);
```

| Mixin              | Description                                                   |
|--------------------|---------------------------------------------------------------|
| `container`        | Fluid container with responsive margins and max-width         |
| `centered-container`| Fixed-width centered block with customizable max-width        |
| `grid-center`       | Centers content both horizontally and vertically using grid   |
| `flex-column-center` | Horizontal column layout with optional gap                    |
| `hero-grid-base`     | Custom grid layout for hero sections                          |
| `grid-column-center` | Vertical layout with centered alignment                       |
| `grid-wrapper`      | Responsive flex-based grid wrapper with gutter support        |
| `column($span)`    | Defines column width and padding using responsive grid system |

---

### Components

```scss
@include button-style(hover);
```

| Mixin         | Description                                       |
|---------------|---------------------------------------------------|
| `button-style` | Applies styles based on button state using `%extends` |

---

## `_extends.scss`

SCSS placeholders for semantic reuse with `@extend`.

### Usage example:

```scss
.button {
  @extend %btn-base;
  @extend %btn-hover;
}
```

### Available placeholders:

- `%btn-base` / `%btn-hover` / `%btn-focused` / `%btn-disabled`
- `%flex-center`
- `%visually-hidden`

---

## Best Practices

1. **Follow BEM syntax** for class naming:
   `.block__element--modifier`

2. **Document all mixins** clearly with:
   - `@mixin`
   - `@param`
   - `@desc`

3. **Keep visual tokens** centralized:
   - `variables.scss` for SCSS values
   - `tokens.scss` for CSS custom properties

4. **Build preview pages** to visualize style elements.

---

*This `utils/` directory acts as the brain of your design system. Every scalable project deserves one.*

---

# `utils/` — Guia SCSS em Português

Este diretório contém ferramentas essenciais para estilização global, responsividade, estrutura de layout e componentes reutilizáveis. Ideal para manter consistência visual e escalabilidade em projetos SCSS modernos.

---

## `_variables.scss`

Tokens SCSS usados em mixins, placeholders e módulos de layout.

### Grupos e Funções

| Grupo                             | Descrição                                 |
|----------------------------------|-------------------------------------------|
| `$breakpoints`                   | Breakpoints no modelo mobile-first        |
| `$color-*`                       | Paleta de cores do projeto                |
| `$btn-*`                         | Cores para estados de botões              |
| `$text-color-*`                  | Cores para textos e tipografia            |
| `$spacing-*`                     | Espaçamentos globais                      |
| `$border-radius-*`               | Raios de borda padrão                     |
| `$grid-columns`, `$grid-gutter`, `$grid-margin` | Tokens para layout responsivo       |

---

## `_tokens.scss`

Define propriedades CSS customizadas para uso com `var(--token)` diretamente no HTML.

### Exemplo de uso:

```css
color: var(--text-color-default);
background-color: var(--background-color);
```

### **Temas disponíveis:**

- `default`: azul claro (`--color-light-blue`)
- `data-theme="pink"`: rosa claro com detalhes laranja

---

## `_mixins.scss`

Mixins reutilizáveis organizados por categoria, com documentação inline.

---

### Interação

```scss
@include hover-transition(color, red);
@include focus-style(2px solid orange) { /* estilos personalizados */ }
@include hover-block { /* bloco de hover */ }
@include hover-scale(.icon);
```

| Mixin            | Descrição                                            |
|------------------|------------------------------------------------------|
| `hover-transition`| Transição suave em propriedade específica no hover   |
| `hover-block`     | Permite bloco personalizado dentro do `:hover`       |
| `hover-scale`     | Aplica aumento de escala suave em elementos-alvo     |
| `focus-style`     | Estilização customizada para estados de foco         |

---

### Responsivo

```scss
@include respond(tablet) {
  /* estilos para telas ≥ breakpoint tablet */
}
```

| Mixin     | Descrição                                                        |
|-----------|------------------------------------------------------------------|
| `respond` | Envolve conteúdo em media query com base no mapa `$breakpoints` |

---

### Layout e Grid

```scss
@include container;
@include centered-container(1280px);
@include grid-center;
@include flex-column-center(1rem);
@include hero-grid-base;
@include grid-wrapper;
@include column(4);
```

| Mixin              | Descrição                                                   |
|--------------------|-------------------------------------------------------------|
| `container`        | Container fluido com margens e largura máxima responsiva    |
| `centered-container`| Container centralizado com largura fixa personalizável      |
| `grid-center`       | Centraliza conteúdo no centro da tela com grid              |
| `flex-column-center` | Layout em colunas com alinhamento horizontal                |
| `hero-grid-base`     | Grid especial para seções do tipo “hero”                    |
| `grid-column-center` | Layout vertical com alinhamento central                     |
| `grid-wrapper`      | Wrapper flexível para grids com gutters responsivos         |
| `column($span)`    | Largura proporcional da coluna com padding responsivo       |

---

### Componentes

```scss
@include button-style(hover);
```

| Mixin         | Descrição                                              |
|---------------|--------------------------------------------------------|
| `button-style` | Aplica estilos de estado usando `%extends` personalizados |

---

## `_extends.scss`

Placeholders SCSS reutilizáveis com `@extend`.

### Exemplo:

```scss
.button {
  @extend %btn-base;
  @extend %btn-hover;
}
```

### Placeholders disponíveis:

- `%btn-base` / `%btn-hover` / `%btn-focused` / `%btn-disabled`
- `%flex-center`
- `%visually-hidden`

---

## Boas Práticas

1. **Siga o padrão BEM** para nomear classes:
   `.bloco__elemento--modificador`

2. **Documente cada mixin** com:
   - `@mixin`
   - `@param`
   - `@desc`

3. **Mantenha tokens visuais organizados**:
   - `variables.scss` para valores SCSS
   - `tokens.scss` para variáveis CSS (`custom properties`)

4. **Crie páginas de visualização** para testar estilos aplicados.

---

*O diretório `utils/` funciona como o cérebro do seu design system. Todo projeto escalável precisa de um.*
