Create a new blog post for Alex Liu's personal site at https://alex-ai-studio.github.io/

The user will provide the post details via $ARGUMENTS. If $ARGUMENTS is empty, ask them for:
1. Post title
2. Category (e.g. Data Science, Reflections, Tools, Life)
3. The content (can be rough notes, bullet points, or full prose — you'll write it up)
4. Approximate reading time (or estimate it yourself based on content)

## What to do

1. Generate a URL-friendly slug from the title (lowercase, hyphens, no special chars)
2. Create `blog/posts/<slug>.html` using the post template (read an existing post first to match the exact HTML structure)
3. Add a new card to the TOP of the `.blog-grid` in `blog/index.html` (read that file first)
4. Commit both files with a short message like "add post: <title>"
5. Push to origin main

## Writing style

Write in Alex's voice: direct, curious, no fluff. He's a data scientist who thinks clearly and writes like he talks. Short paragraphs. No corporate language. The first paragraph gets a drop cap automatically — make it count. Use `<em>` in the title for an italic word if it fits naturally.

After pushing, confirm the post will be live at `/blog/posts/<slug>.html`
