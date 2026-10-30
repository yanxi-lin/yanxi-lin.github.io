# Homepage design, revision 2

The user requests an Anthropic/Apple-inspired redesign, no illustration, hidden ViT/PE project, restrained interactions, and consistent typography including expanded content.

Palette: paper #faf9f6, warm ink #292722, secondary text #68665e, accent #8a432f, subtle ground #f0eee8, white #ffffff. The warm paper and serif direction is explicitly requested by reference to Anthropic, with Apple's clear hierarchy and simple navigation.

Typography: local Newsreader for name, section headings, article titles; local Manrope variable for all other text. Buttons, summaries, expanded body, and citation inherit the same sans-serif family. No separate monospace citation style, synthetic typefaces, external font requests, or additional decorative fonts.

Layout: large typographic hero, wide balanced margins, restrained identity line; feature publication in an off-white surface with a conference rail; three research interest columns; education and experience in a balanced lower section. No hero illustration, gradients, decorative animated objects, or repeated dashboard cards.

```
Yanxi Lin                Research / Background / GitHub
Fudan University                              Shanghai
Yanxi Lin.
Research statement       Short biography + publication link
Selected publication     Year
DPAM title + authors + summary / expandable abstract and citation
Research interests: hardware / arithmetic / deployment
Education timeline       SmartSens experience
Signature / Back to top
```

Interactions: translucent sticky navigation with section feedback; native details disclosure for paper abstract and citation; copy citation with real success/failure status. No initial text hidden by JS, no looping motion, no scroll hijack. Respect reduced motion. Keep browser keyboard and accessibility semantics.

Content: publication order follows the supplied PDF. Its title contains “Efficient and”, unlike the shorter conference-program title; provenance stays in README. Preserve Fudan degree dates and expected graduation. Keep private manuscript and code private. Hide PE project by removing it from the public page; previous content remains in Git history.

Validation: desktop, 768px tablet, 390px and 320px mobile; expanded content layout; keyboard focus and details interaction; clipboard fallback; reduced motion; external assets absent; font loading; no horizontal overflow.
