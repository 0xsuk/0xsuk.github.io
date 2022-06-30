---
title: Overview
type: docs
date: 2022-06-30T12:39:54.612Z
draft: false
comment: true
toc: true
reward: false
pinned: false
featured: false
math: false
categories: []
tags: []
series: []
images:
  - /uploads/Screenshot from 2022-06-29 20-05-04.png
---
![](/uploads/agitv1.0.0.png)

# Overview

Agit CMS is a multi-platform desktop application built on top of Electron, which works as a frontend interface for any static site generator, like Hugo and Jekyll.  

You need to have a ready-to-run static sites on your local computer, as Agit CMS works as a frontend interface for it. 

## Features
- Vertical split style markdown editor.

- type-aware frontmatter interface.

![](/uploads/frontmatterv1.0.0.png)


Agit CMS provides a frontmatter interface which respects the type of each frontmatter property.  
Above corresponds to writing yaml below.
```yaml
---
title: The Best CMS for Markdown Blogs
date: 2022-06-29T11:06:12.000Z
draft: false
comment: true
toc: true
reward: false
pinned: false
featured: false
math: false
categories:
  - Web Dev
tags: []
series:
  - Agit CMS
images:
  - '/uploads/2022-06-29-19:53:03.png'
---
```

- Integrated Terminal

![](/uploads/interv1.0.0.png)


Open an integrated terminal by pressing `Ctrl+@`.

- Other features
  -  mathjax rendering
  -  image pasting into editor
  -  pin folder in the sidebar
  -  yaml/toml as frontmatter language
  -  custom frontmatter delimiters

- Upcoming features
  - custom editor snippet
  - custom editor toolbar
  - custom editor syntax
  - custom editor keymap
  - custom markdown rendering
  - media interface

  ## Docs for older versions

  navigate to `https://0xsuk.github.io/agitcms-v${VERSION}` where ${VERSION} is a version of Agit CMS.

  Example: `https://0xsuk.github.io/agitcms-v0.0.2-alpha`