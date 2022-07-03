---
title: How to use Agit CMS
date: 2022-06-03T12:50:21.000Z
draft: false
comment: true
toc: true
type: docs
reward: false
pinned: false
featured: false
math: false
categories:
  - Web Dev
tags:
  - React.js
series: null
images:
  - >-
    https://user-images.githubusercontent.com/97814789/171836599-b3d0a87e-186b-4bb6-afa6-049fc9c5bd3b.png
---
![image](https://user-images.githubusercontent.com/97814789/171836599-b3d0a87e-186b-4bb6-afa6-049fc9c5bd3b.png)

Here's a documentation of how to use Agit CMS.

The project link: https://github.com/0xsuk/agitcms

Only thing you need is a static site, powered by whatever "markdown based" static site generators like Hugo, Jekyll, Next.js, Gatsby.js and so on.

"markdown based" means you write contents in markdown in your local PC.

Agit CMS is NOT a git based CMS, or API based CMS. It's a desktop app for writing markdown posts. So you need ready-to-run static sites on your local PC.

In this document I am going to use my blog ( [0xsuk.github.io](https://0xsuk.github.io)) powered by Hugo as a static site example.

## Add a new site

First, add a site that you created using a certain static site generator.

Navigate to home, and click "New" button.

Type site name, and site folder's path.

These cannot be changed afterward unless you modify configuration file directly. Configuration file is explained later.

![](/uploads/agitcms.png)

## Frontmatter Setting

If you are using markdown based static site generator, you write post meta data in frontmatter right?

In my case, I have the following text at the beginning of [my blog post](https://0xsuk.com/posts/2022-02-11-creating-a-blog-with-hugo/)'s markdown file as post's meta data. (This meta data is called frontmatter)

```txt
---
title: Creating a Blog with Hugo
date: 2022-02-11T04:22:29.699Z
draft: false
comment: false
toc: true
reward: false
pinned: false
featured: false
math: true
categories: null
tags: null
series: null
images:
  - /uploads/2022-02-11-02-43-09.png
---
```

Each property of frontmatter has specific "type".For example in this case, value of property `title` should be plain string, and value of property `date` should be ISO date format, and value of `draft` must be boolean.

**By designating each property's name and its type, Agit CMS automatically reads the frontmatter, and generate type-aware frontmatter editor.**

![](/uploads/frontmatter_agitcms.png)

**Also when you create a new post by clicking Create New -> File, Agit CMS automatically writes frontmatter to the post.**  
Of course you can create a new post if your static site generator has command for it. In Hugo, it's `hugo new content/posts/newPost.md` right? Open [integrated terminal](#integrated-terminal) to do so! Ah, so simple!

![](/uploads/createnew.png)

To do so, go to Setting, and scroll down to Frontmatter template section. There you add each frontmatter property's name and type, and default value.  

My configuration looks like this.  
![](/uploads/screenshot16.png)

Agit CMS at v1.0.0 only support 4 frontmatter property type.  

| type name | description |
| --- | --- |
| String | plain single line text |
| Date | ISO date |
| Array of String | list of plain text |
| Bool | true or false |

And I'm considering to add more type!

### custom frontmatter parsing
You can write frontmatter in yaml or toml format.  

Navigate to Setting, and set frontmatter language (yaml/toml), and frontmatter delimiters ("---" is default).  


## Media Setting
Go to Media section of Setting.  

There you specify media folder's path, and public path.  

`Media Folder Path` is where you store image, gif, or movie.
`Media Public Path` is an url path media is served from.  

For example, let's say you store media in `${root}/static/uploads`.  (where `${root}` is your static site's root folder path).  
Also let's say `${root}/static/uploads/image1.png` is served from `https://${your_web_site}.com/my_public_path/image1.png`.  

In this case, public path is `/my_public_path`, because media content is accessible from `/my_public_path`.

Once you configured media setting, you will be able to copy media content's url path to clipboard easily, so that you can paste url path into markdown/wysiwyg editor.

Click on Media button at the sidebar, and select whatever image you want to paste a url path of into markdown/wysiwyg editor. The image file's name is now copied to your clipboard, being prefixed by public path.  


## Integrated Terminal
This feature is the reason why Agit CMS is desktop application.  

Many CMS do tasks including starting preview server, creating a new post, managing media, in really complicated way. However, you can simply them by just running CMS in your local PC.  

Toggle integrated terminal by `Ctrl + @`.  

![](https://user-images.githubusercontent.com/97814789/171834291-29689bc3-dd43-4ecf-b2ee-31976b17eae3.png)

> Integrated terminal is still under development may be buggy under some environment.  


