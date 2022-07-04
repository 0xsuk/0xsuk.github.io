---
title: Editor
type: docs
weight: '97'
date: 2022-07-04T06:49:09.000Z
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
images: []
---
## Media
Agit CMS starts local http server on port 3001 to serve media for previewing purpose.  

On Windows, You have to allow Agit CMS to starts http server when warning is shown. 

`![](${media_public_path}/example.png)` will be parsed into `http://localhost:3001/${media_public_path}/example.png` in the right side previewer.  (`${media_public_path}` is a [media public path](/agitcms/configuration/#media-public-path))

Image placed at the same folder as the markdown post file is in cannot be previewed at this version.  

To quickly get image path you want to insert into the editor, Agit CMS has a file explorer shortcut button `Media` for it.  
It opens [media folder path](/agitcms/configuration/#media-folder-path), and selected image's public path will be copied into your clipboard.  
This way, you can easily type `![](${ctrl + v})` (where `${ctrl + v}` means pressing `ctrl + v`) to insert the image.  

## image pasting
Agit CMS supports `Ctrl + v` to paste image into the editor. 

Set [media folder path](/agitcms/configuration/#media-folder-path) and [media public path](/agitcms/configuration/#media-public-path) to enable this feature.  


## mathjax
Type 
```markdown
$$
a + b = c
$$
```
to represent block math.  
Type
```markdown
$$ a + b = c $$

or

$ a + b = c $

or 

$
a + b = c
$
```
to represent inline math.  



