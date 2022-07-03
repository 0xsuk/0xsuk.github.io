---
title: Overview
type: docs
weight: '100'
date: 2022-06-30T12:39:54.612Z
draft: false
comment: true
toc: true
reward: false
pinned: false
featured: false
math: true
categories: []
tags: []
series: []
images:
  - /uploads/agitv1.0.0.png
---
![](/uploads/agitv1.0.0.png)

Agit CMS is a multi-platform desktop application built on top of Electron, which works as a frontend interface for any static site generator, like Hugo and Jekyll.  

You need to have a ready-to-run static sites on your local computer, as Agit CMS works as a frontend interface for it. 

## Features
- Vertical split style markdown editor.
- type-aware frontmatter interface.

![](/uploads/2022-07-03-19:10:57.png)

Agit CMS provides a frontmatter interface which respects the type of each frontmatter property.  
Above corresponds to the yaml below.
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

Open an integrated terminal by pressing `Ctrl+@`.  
![](/uploads/2022-07-03-19:13:27.png)




Other features
-  mathjax rendering: $ a + b = c$
-  image pasting into editor
-  pin folder in the sidebar
-  custom frontmatter language(yaml/toml) & delimiters


Upcoming features  
- custom css
- custom editor snippet
- custom editor toolbar
- custom editor syntax
- custom editor keymap
- custom markdown rendering
- media interface

Agit CMS tries to be a customizable headless CMS.

## Docs for older versions

navigate to `https://0xsuk.github.io/agitcms-v${VERSION}` where ${VERSION} is a version of Agit CMS.

Example: `https://0xsuk.github.io/agitcms-v0.0.2-alpha`
