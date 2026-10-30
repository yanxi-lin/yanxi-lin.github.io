# Yanxi Lin — academic homepage

A small, accessible, English-language static website for GitHub Pages. No build step or runtime dependencies.

## Content

- `index.html`: biography, education, publication, and experience.
- `style.css`: responsive layout and typography.
- `script.js`: navigation state and citation copying. Native HTML disclosures work without JavaScript.
- `assets/`: locally hosted fonts and favicon.

The original page followed [Jon Barron's academic homepage](https://jonbarron.info/). Revision 2 uses an original typography-led design inspired by Anthropic's literary typography and Apple's restrained hierarchy. It has no illustration; the ViT/PE project is hidden from the public page as requested. Visual design was guided by [Anthropic's frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design).

The DPAM title and author order follow the supplied manuscript. The [ISCAS 2026 conference program](https://2026.ieee-iscas.org/assets/ISCAS_2026_Program.pdf) lists the work using a shorter title, without “Efficient and”. No DOI or page numbers have been inferred. The private manuscript and project source code are not distributed by this site.

## Publishing

The site is published at `https://yanxi-lin.github.io/` from `yanxi-lin/yanxi-lin.github.io`, branch `main`, root directory. Push or use the authenticated GitHub Git Data API when the server cannot reach Git over HTTPS. Never force-push or replace unrelated remote changes.

## Fonts

Newsreader is used for headings and Manrope for all body text, controls, expanded content, and citations. Fonts are hosted locally under the SIL Open Font License. See the license files in `assets/`. The unused Source Sans 3 files from revision 1 are retained for now.
