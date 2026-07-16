# Example Recipes for GG's Authentic

Copy each recipe into **Shopify Admin → Content → Blog posts → Recipes** (not the Events blog).

> **Two separate blogs:** GG's uses a **Recipes** blog for food content and an **Events** blog for markets, tastings and news. See [`content/blog-setup.md`](blog-setup.md) for full setup.

## One-time setup (Recipes blog only)

1. **Create the Recipes blog**: Title `Recipes`, handle `recipes`.
2. **Blog theme template**: Set to **`recipes`** → listing at `/blogs/recipes` uses recipe cards.
3. **Article theme template**: Set to **`recipes`** → full recipe layout with ingredients and product CTA.
4. **Create the page**: Pages → `Recipes` → template `page.recipes` → `/pages/recipes`.
5. **Deploy theme** so metafield definitions from `.shopify/metafields.json` sync.
6. **Verify product handles** match your live products.

### Metafields per article

| Metafield | Example |
|-----------|---------|
| `custom.product_handle` | `marinade-mild` |
| `custom.prep_time` | `15 mins` |
| `custom.cook_time` | `30 mins` |
| `custom.servings` | `4` |
| `custom.difficulty` | `Easy` |
| `custom.ingredients` | One ingredient per line (see each recipe) |

---

## Recipe 1: Caribbean Fish Curry

**Tags:** `fish`, `curry`, `dinner`  
**Product handle:** `marinade-spicy` *(or your spicy marinade handle)*  
**Excerpt:** A rich coconut fish curry with GG's spicy marinade — weeknight-friendly and full of island flavour.

### Ingredients (metafield)

```
500g firm white fish fillets (snapper or cod), cut into chunks
1 tbsp vegetable oil
1 onion, finely sliced
3 garlic cloves, minced
1 thumb ginger, grated
2 tbsp GG's Spicy Marinade
400ml coconut milk
1 red bell pepper, sliced
1 tsp dried thyme
Juice of ½ lime
Salt and black pepper to taste
Fresh coriander to serve
Steamed rice, to serve
```

### Method (article body — paste as HTML)

```html
<p>This Caribbean-style fish curry is creamy, fragrant, and ready in under 40 minutes. GG's Spicy Marinade brings depth without overpowering delicate fish — adjust the amount to your heat preference.</p>

<h2>Method</h2>
<ol>
  <li>Season fish lightly with salt and pepper. Set aside.</li>
  <li>Heat oil in a deep pan over medium heat. Sauté onion until soft, then add garlic and ginger for 1 minute.</li>
  <li>Stir in GG's Spicy Marinade and cook for 2 minutes until fragrant.</li>
  <li>Pour in coconut milk, add bell pepper and thyme. Simmer gently for 8–10 minutes.</li>
  <li>Add fish chunks. Cook 6–8 minutes until fish flakes easily — do not overcook.</li>
  <li>Finish with lime juice and coriander. Serve with steamed rice.</li>
</ol>

<h2>Chef's tip</h2>
<p>Add a handful of spinach in the last minute for extra colour and nutrition.</p>
```

**Prep:** 15 mins | **Cook:** 25 mins | **Serves:** 4 | **Difficulty:** Easy

---

## Recipe 2: Prawn Fried Rice with Island Heat

**Tags:** `prawn`, `fried-rice`, `quick`  
**Product handle:** `pineapple-xtra-hot-1` *(or your xtra hot sauce handle)*  
**Excerpt:** Wok-tossed prawn fried rice with a sweet-heat kick from GG's Pineapple Xtra Hot.

### Ingredients (metafield)

```
300g cooked prawns, peeled
3 cups day-old jasmine rice, chilled
2 eggs, beaten
2 tbsp vegetable oil
2 spring onions, sliced
1 carrot, finely diced
½ cup frozen peas
2 tbsp GG's Pineapple Xtra Hot Sauce
2 tbsp soy sauce
1 tsp sesame oil
White pepper to taste
Lime wedges to serve
```

### Method (article body)

```html
<p>Day-old rice is essential for the best texture. GG's Pineapple Xtra Hot adds Caribbean sweetness and fire — perfect for a quick midweek dinner.</p>

<h2>Method</h2>
<ol>
  <li>Heat 1 tbsp oil in a wok or large frying pan over high heat. Scramble eggs, break into pieces, and set aside.</li>
  <li>Add remaining oil. Stir-fry carrot and spring onion whites for 2 minutes.</li>
  <li>Add rice, breaking up clumps. Toss for 3–4 minutes until heated through.</li>
  <li>Stir in prawns, peas, soy sauce, and GG's Pineapple Xtra Hot. Toss until prawns are pink and hot.</li>
  <li>Return eggs to the pan. Drizzle with sesame oil and white pepper. Serve with lime wedges.</li>
</ol>

<h2>Serving tip</h2>
<p>Top with extra sliced spring onion and a drizzle of sauce for guests who love extra heat.</p>
```

**Prep:** 10 mins | **Cook:** 15 mins | **Serves:** 3 | **Difficulty:** Easy

---

## Recipe 3: Summer BBQ Chicken Marinade

**Tags:** `chicken`, `marinade`, `summer-bbq`, `grill`  
**Product handle:** `marinade-mild`  
**Excerpt:** Tender grilled chicken with GG's Mild Marinade — your go-to summer BBQ crowd-pleaser.

### Ingredients (metafield)

```
8 chicken thighs or drumsticks, skin on
6 tbsp GG's Mild Marinade
2 tbsp olive oil
1 tbsp brown sugar
2 garlic cloves, crushed
Juice of 1 lime
Fresh thyme sprigs
BBQ sauce (optional), for basting
```

### Method (article body)

```html
<p>Marinate overnight for maximum flavour, then fire up the grill. This recipe scales easily for family cookouts and summer gatherings.</p>

<h2>Method</h2>
<ol>
  <li>Score chicken lightly and place in a large bowl or zip-lock bag.</li>
  <li>Mix GG's Mild Marinade, olive oil, brown sugar, garlic, and lime juice. Pour over chicken and massage to coat.</li>
  <li>Refrigerate at least 2 hours, ideally overnight.</li>
  <li>Preheat BBQ to medium-high. Grill chicken 25–35 minutes, turning occasionally, until juices run clear and skin is charred in spots.</li>
  <li>Rest 5 minutes before serving. Garnish with thyme.</li>
</ol>

<h2>Summer serving ideas</h2>
<p>Pair with grilled corn, festival-style fried dumplings, or a crisp cucumber salad with lime dressing.</p>
```

**Prep:** 10 mins (+ 2 hrs marinating) | **Cook:** 30 mins | **Serves:** 4 | **Difficulty:** Easy

---

## Recipe 4: Chickpea & Coconut Curry (Vegan)

**Tags:** `vegan`, `chickpea`, `curry`, `plant-based`  
**Product handle:** `copy-of-ggs-authentic-marinade-original-mild` *(or `marinade-mild`)*  
**Excerpt:** Hearty vegan chickpea curry with warm Caribbean spices — filling, wholesome, and weeknight simple.

### Ingredients (metafield)

```
2 tbsp coconut oil
1 onion, diced
3 garlic cloves, minced
1 tbsp fresh ginger, grated
3 tbsp GG's Mild Marinade
2 cans chickpeas, drained and rinsed
400ml coconut milk
200g spinach
1 tsp ground cumin
1 tsp smoked paprika
Salt to taste
Rice or roti, to serve
```

### Method (article body)

```html
<p>A plant-based staple that doesn't compromise on flavour. GG's Mild Marinade layers herbs and spices so you don't need a long spice rack.</p>

<h2>Method</h2>
<ol>
  <li>Heat coconut oil in a large pot. Cook onion until golden, then add garlic and ginger for 1 minute.</li>
  <li>Stir in GG's Mild Marinade, cumin, and paprika. Cook 2 minutes.</li>
  <li>Add chickpeas and coconut milk. Simmer 15 minutes until thickened slightly.</li>
  <li>Fold in spinach until wilted. Season to taste.</li>
  <li>Serve with rice or warm roti.</li>
</ol>

<h2>Make it your own</h2>
<p>Add sweet potato cubes in step 3 for extra body, or a chopped scotch bonnet (seeds removed) if you want more heat.</p>
```

**Prep:** 10 mins | **Cook:** 25 mins | **Serves:** 4 | **Difficulty:** Easy

---

# Gemini Image Prompt Guide

Use **Google Gemini** (Gemini app or [aistudio.google.com](https://aistudio.google.com)) with image generation. Attach your reference assets for brand consistency.

## What to attach as references

1. **Product bottle shots** — the exact GG's sauce/marinade used in the recipe (front label visible).
2. **Brand logo** — if you want it subtle on packaging in scene (optional).
3. **Colour reference** — screenshot of your site or a swatch showing brand orange `#ffb045`, warm tones, and natural herb colours.
4. **Style reference** — 1–2 existing food photos from your site or Instagram that match the look you want (bright, appetising, not overly staged).
5. **Previous recipe hero** — once you have one image you love, attach it so later recipes stay consistent.

## Master prompt template

Copy and customise per recipe:

```
Create a professional food photography hero image for a Caribbean recipe blog post.

DISH: [e.g. Caribbean fish curry in a deep bowl with steamed rice and fresh coriander]
STYLE: Warm, appetising, editorial food photography. Natural daylight from the side. Shallow depth of field. Rustic wooden table or light marble surface.
COLOUR PALETTE: Warm golden tones, vibrant greens and reds from fresh ingredients, accents matching brand orange #ffb045 (subtle — in garnish, napkin, or background prop, not overwhelming).
COMPOSITION: 16:9 landscape, hero shot, dish centred slightly off-axis. Leave clean space at top for blog title overlay.
MOOD: Authentic Caribbean home cooking — inviting, family-friendly, summer warmth.
DO NOT: No text overlays, no watermarks, no distorted hands or utensils, no unrealistic food styling.
OPTIONAL PROP: A bottle of [PRODUCT NAME] sauce/marinade placed naturally in the background, label facing camera but not dominating the frame.

Match the visual style of the attached reference images.
```

## Per-recipe prompts

### Fish curry
```
Create a professional food photography hero image for a Caribbean fish curry blog post. Creamy coconut curry with white fish chunks, red bell pepper, fresh coriander, and steamed white rice in a ceramic bowl. Warm natural light, rustic table, 16:9 landscape. Subtle brand orange #ffb045 in a linen napkin or wooden spoon handle. Bottle of spicy Caribbean marinade softly blurred in background. No text. Appetising and authentic.
```

### Prawn fried rice
```
Hero food photo: Caribbean-style prawn fried rice in a large bowl, golden rice, pink prawns, peas, spring onion, wok-tossed appearance. Bright kitchen lighting, steam hint, lime wedge on side. 16:9 landscape. Pineapple hot sauce bottle in soft background focus. Warm, vibrant, weeknight dinner energy. No text overlays.
```

### BBQ chicken
```
Summer BBQ food photography: grilled chicken thighs with char marks, glossy marinade glaze, fresh thyme, outdoor grill or patio table setting. Golden hour sunlight. 16:9 landscape. Mild marinade bottle on table edge, label visible. Casual summer cookout mood. No people. No text.
```

### Chickpea curry (vegan)
```
Vegan Caribbean chickpea coconut curry in a deep bowl with spinach, served with rice and roti on the side. Rich orange-cream sauce, fresh herbs. Bright natural light, clean composition, 16:9 landscape. Mild marinade bottle as subtle background prop. Wholesome plant-based aesthetic. No text.
```

## Image specs for Shopify

| Setting | Recommendation |
|---------|----------------|
| **Aspect ratio** | 16:9 or 3:2 (crop to ~1200×675px or 1200×800px) |
| **Min width** | 1200px for crisp hero display |
| **Format** | JPG or WebP, under 500KB after compression |
| **Alt text** | Describe the dish + "GG's Authentic recipe" |

Upload as the **featured image** on each blog post in Shopify Admin.

## Quick checklist before publishing

- [ ] Blog post uses theme template **recipes**
- [ ] All 6 metafields filled in
- [ ] Tags added for filtering and related recipes
- [ ] Featured image uploaded (1200px+ wide)
- [ ] `product_handle` matches an active product in your store
- [ ] Recipes page and homepage sections show the new posts after publish
