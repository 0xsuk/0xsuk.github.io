---
title: Configuration
type: docs
weight: '98'
date: '2022-07-03T17:52:46+09:00'
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
images: []
---
Agit CMS configration is really simple.  

There's two configurations.  
1. Global configuration: applies globally.  
2. Site configuration: applies only to specific site.


Let's start with Global configuration
## Global configuration
Navigate to Home (start page), and click on `Settings` in `GLOBAL` section of the sidebar.  

### Open Integrated Terminal with Ctrl+@
Disable this to prevent Agit CMS from opening an integrated terminal when ctrl+@ is captured.  

### Zoom
Change zoom rate.  

## Site configuration
Go to one of site you added, and click on `Settings` in `SITE` section of the sidebar. 

### Frontmatter language
Define what language you use to represent frontmatter in markdown posts.

Default: `yaml`

### Frontmatter delimiters
Define what delimiters you use to wrap frontmatter.  
If you want to parse frontmatter in toml like below, you want to set frontmatter delimiters to `+++`, and frontmatter language to `toml`.  
```markdown
+++
title = example
+++
# Heading of the article
...
```

Default: `---`

### Frontamtter template
This one is optional but recommended if you want to parse frontmatter with correct types, or if you want to create new posts by `CREATE NEW` button of the Agit CMS file explorer.  

Frontmatter template specifies what type each property of frontmatter attributed to.

This information is used when Agit CMS parses markdown and generates a [type-aware frontmatter editor](/agitcms/quick-start/#frontmatter-editor), or when Agit CMS creates a new post with default frontmatter values. 

#### example
Let's take a frontmatter below for example.
```markdown
---
title: Configuration
date: '2022-07-03T17:52:46+09:00'
draft: false
tags: ["React.js", "Web Dev"]
---
```
When Agit CMS parses frontmatter and generates a type-aware frontmatter editor, it tries to find a type for each property of frontmatter.

If you set `date` property of frontmatter to be a type of `Date` for instance, Agit CMS provides a date picker in the frontmatter editor.  
If you set `draft` to be a type of `Bool`, Agit CMS provides a boolean toggler in the frontmatter editor. 

#### Supported types
| type | |
| --- | --- |
| Text | plain text (ex. `title: Configuration`)|
| List of Text | list of text (ex. `tags: ["React.js", "Web Dev"]`) |
| Multiline Text | text with multiple lines |
| Date | date in ISO 8601 format (ex. `date: '2022-07-03T17:52:46+09:00'`) |
| Bool | `true` or `false` (ex. `draft: false`) |
| Nest | property that contains child properties |

### Media Folder Path
Specify where you store media (image, GIF and so on) in your file system.  

### Media Public Path
Specify the url path media content is accesible from.  

#### example
Suppose media folder path is `/home/mysite/static/uploads`, and `/home/mysite/static/uploads/example.png`'s url is `https://mywebsite.com/contents/images/example.png`.

Then media public path should be `/contents/images`.
