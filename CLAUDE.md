# Alex Liu — Personal Site

This is a pure HTML/CSS/JS GitHub Pages site at https://alex-ai-studio.github.io/

## File structure

```
index.html                  — Homepage (personal hub)
assets/css/styles.css       — Shared styles for all pages
assets/js/main.js           — Shared JS (cursor, scroll reveal, counters)
blog/index.html             — Blog listing page
blog/posts/<slug>.html      — Individual blog posts
100-things/index.html       — Interactive bucket list (100 items, localStorage)
```

## Adding a blog post

1. Create `blog/posts/<slug>.html` by copying the template structure from an existing post
2. Add a card to the TOP of the `.blog-grid` in `blog/index.html`

**Post file structure:**
- `<div class="post-cat">Category</div>` — e.g. Data Science, Reflections, Tools
- `<h1 class="post-title">Title with optional <em>italic</em></h1>`
- `<div class="post-meta"><span>Mon YYYY</span><span>X min read</span></div>`
- `<div class="post-body">` — paragraphs, h2, h3, blockquote, ul/ol all supported
- First paragraph gets a drop cap automatically via CSS `::first-letter`

**Blog card structure (blog/index.html):**
```html
<a href="/blog/posts/<slug>.html" class="blog-card reveal">
  <span class="blog-date">Mon YYYY</span>
  <div>
    <div class="blog-card-title">Title</div>
    <p class="blog-card-teaser">One sentence hook.</p>
    <div class="blog-card-meta">X min read · Category</div>
  </div>
  <span class="blog-card-arrow">↗</span>
</a>
```

## Updating the 100 Things list

File: `100-things/index.html`

Each item follows this structure:
```html
<div class="thing-item reveal" data-id="N">
  <span class="thing-num">NN</span>
  <div class="thing-check"><div class="thing-dot"></div></div>
  <span class="thing-text">The thing to do</span>
</div>
```

- `data-id` must be unique (1–100) — used for localStorage persistence
- Categories use `<div class="things-category">` with `<div class="things-cat-title">` header
- Total must stay at 100 items for the progress bar to work correctly

## Design tokens

```
--klein: #0033CC       (accent blue)
--black: #0a0a0a
--white: #ffffff
--grey:  #f5f5f5
--serif: Cormorant Garamond
--mono:  DM Mono
```

## Deploying

```bash
git add .
git commit -m "your message"
git push origin main
```

GitHub Pages deploys automatically in ~30s.
