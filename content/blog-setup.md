# Blog setup — Recipes vs Events

GG's Authentic uses **two separate Shopify blogs**. Keep them distinct so recipe content (products, ingredients, cook times) never mixes with event announcements.

## Quick reference

| | **Recipes blog** | **Events blog** |
|--|------------------|-----------------|
| **Purpose** | Caribbean recipe posts tied to products | Markets, tastings, pop-ups, news |
| **Suggested handle** | `recipes` | `events` |
| **URL** | `/blogs/recipes` | `/blogs/events` |
| **Blog template** | `recipes` | `events` |
| **Article template** | `recipes` | `events` |
| **Theme files** | `blog.recipes.json`, `article.recipes.json` | `blog.events.json`, `article.events.json` |

## Shopify Admin setup

### 1. Recipes blog

1. **Content → Blog posts → Manage blogs → Add blog**
2. Title: **Recipes** · Handle: `recipes`
3. **Online store → Theme → Customize** (or blog settings):
   - **Theme template** (blog): `recipes`
   - **Default article template**: `recipes`
4. Optional page: **Pages → Recipes** with template `page.recipes` at `/pages/recipes`

**Recipe metafields** (per article):

- `custom.product_handle`
- `custom.prep_time`, `custom.cook_time`, `custom.servings`, `custom.difficulty`
- `custom.ingredients` (one per line)

**Where recipes appear in the theme:**

- Homepage — “Cook with GG's” section
- `/pages/recipes` — community listing + submit form
- Product pages — “Recipes with this product”
- `/blogs/recipes` — full paginated recipe archive

### 2. Events blog

1. **Content → Blog posts → Manage blogs → Add blog**
2. Title: **Events** (or “News & Events”) · Handle: `events`
3. **Theme template** (blog): `events`
4. **Default article template**: `events`

**Event metafields** (per article):

- `custom.event_date` — e.g. `14 July 2026, 11am–4pm`
- `custom.event_location` — e.g. `Borough Market, London`

**Where events appear:**

- `/blogs/events` — paginated events archive
- Individual posts at `/blogs/events/[article-handle]`

Events do **not** show on product pages or the recipe homepage section.

### 3. Navigation

Add both to your main menu if desired:

- **Recipes** → `/blogs/recipes` or `/pages/recipes`
- **Events** → `/blogs/events`

Your **Events calendar page** (`page.calendar`) can stay separate — it uses the Mahina app for the calendar UI; the Events **blog** is for write-ups and recaps after markets or tastings.

## What not to do

- Don’t post recipes in the Events blog (no product linking or recipe layout).
- Don’t post event write-ups in the Recipes blog (recipe sections will try to show product CTAs).
- Don’t point the homepage recipe section or product-recipes block at the Events blog.

## Default blog template

`templates/blog.json` remains a generic fallback. Assign the **`events`** or **`recipes`** template explicitly on each blog so the correct layout is always used.
