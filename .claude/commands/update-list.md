Update the 100 Things list on Alex Liu's personal site at https://alex-ai-studio.github.io/100-things/

The user will describe what they want via $ARGUMENTS. Handle any of these:

**Adding or replacing items:** If they give you new things to add, replace placeholder items or add to an existing category. Keep total at exactly 100. Assign the correct data-id (1–100, must be unique).

**Renaming/editing items:** Find the item by its text or number and update the `<span class="thing-text">`.

**Adding a new category:** Insert a new `<div class="things-category">` block with a `<div class="things-cat-title">` header in a sensible position.

**Marking items as done in the HTML:** If the user wants an item pre-checked (rather than clicking it), add `class="thing-item done reveal"` and note that localStorage will override this on their browser.

## Rules

- Read `100-things/index.html` first before making any changes
- Keep `data-id` values unique and between 1–100
- Keep the total at exactly 100 items (progress bar assumes 100)
- Match existing HTML formatting exactly
- After editing, commit with message "update: 100 things list" and push to origin main

Confirm what was changed after pushing.
