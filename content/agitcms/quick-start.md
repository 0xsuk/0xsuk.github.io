---
title: Quick Start
type: docs
weight: 2
date: 2022-07-03T08:01:37.420Z
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
  - '/uploads/2022-07-03-16:38:13.png'
---
## Installation
Install latest binary from [here](https://github.com/0xsuk/agitcms/releases)

{{< alert `
When downloading a binary, some warning will be displayed because Agit CMS is yet to be trusted by Windows/Mac. To suppress warning and continue, please reference below. Mac: Find agitcms in Finder. Click on the app pressing ctrl key. Select "Open". (Open a Mac app from an unidentified developer - Apple Support) Windows: If "Windows protected your PC", click on "More info", and select "Run anyway".
` info >}} 

## Adding a site
{{< alert `
Agit CMS is a frontend interface for static site generators. You need a ready-to-run static site on your local computer.
` info >}}

Open Agit CMS and click `NEW` button. 

Type your site’s name, and root folder path of the static site.
These two configurations cannot be changed afterwards unless you modify ~/.agitcms/config.json directly.

Once you add a new site, click on it, then Agit CMS provides a file explorer where you can navigate through folders and files thas have `.md` extension.

Click `PIN` button at the very top to pin a folder or a file to left sidebar for easy access.

## Integrated Terminal
Press `Control + @` to open up a integrated terminal.

Try starting a server of your static sites generator.

In hugo: `hugo server`  
In jekyll: `jekyll server`

![](/uploads/2022-07-03-16:38:13.png)

Now your preview server is running on your host!

## Modifying a post
Click on a markdown file you want to edit in file explorer.

Agit CMS provides a markdown editor with nice syntax highlighting and keymaps.

Type some text, right pane automatically renders markdown in a Github flavored style,

### Frontmatter Editor
Click on a Frontmatter tab in the editor.
Agit CMS automatically scans frontmatter section of your existing post, and provides a **type-aware frontmatter editor** like this.

![](/uploads/2022-07-03-16:50:25.png)

which is equal to
```markdown
---
title: Quick Start
type: docs
date: '2022-07-03T16:11:40+09:00'
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
  - '![](/uploads/2022-07-03-16:38:13.png)'
---
```

You can confirm that for example, since `draft` is a boolean value, Agit CMS provides a boolean toggler for `draft`.

You can learn more about how to configure frontmatter language, delimiters and its types here.
