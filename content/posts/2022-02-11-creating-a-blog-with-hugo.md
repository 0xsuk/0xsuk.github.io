+++
title = "creating a blog with Hugo"
date = 2019-08-22T15:20:28.000Z
draft = false
comment = false 
toc = true
reward = true
pinned = false
featured = false
math = false
categories = [
]
tags = [
]
series = [
]
images = ["/uploads/2022-02-11-02-43-09.png"]
+++

![](/uploads/2022-02-11-02-43-09.png)

## Hugo - Static Site Generator

[Hugo](https://gohugo.io) is a popular opensource static site generator that runs on your computer.

We are going to cover how to install hugo on your computer and run it to build a fast static website or a blog.

## What is a static site?
A static site prebuilds HTML/CSS/JavaScript code that will work as webpages, and serve them when users visit a website. In contrast, traditional dynamic website renders a webpage *every* time users visit a website. That's the big difference between static and dynamic website - Build once, or build every time - and that's why static websites are fast. 

If you are planning to build a website that is not going to be updated frequently, you want to make it static because it's faster. On the other hand, if you are sure that your website is going to be updated frequently, you want to make it dynamic because building every time an update occurs is painful work. 

As for a blog, a static site seems to be a preferred choice, and that's what we're going to make. (This blog 0xsuk.com is actually a static blog powered by Hugo!)

In this article, I assume you have basic knowledge of git and github. 

## Installing 
Assuming you have git installed, the only thing you need to install is Hugo.
You don't need to install Golang to make Hugo work. 

Hugo Installation guide is documented [here](https://gohugo.io/getting-started/installing/)

## Create a site
```bash
mkdir example && cd example
hugo new site .
```
This command will create a new site generator in the specified directory. 
Here's the tree of directories and files. 
```
archetypes/ - default.md
config.toml  
content/
data/  
layouts/  
static/  
themes/
```

I'll explain what each folder or file is responsible for briefly.
- `archtypes/` contains default *frontmatter* template default.md. 
- `config.toml` is where you configure hugo. 
- `content/` is where you put contents (blog posts)
- `data/` is where you put meta data. 
- files under `static/` are served from the root path of the webpage. (ex. `static/img.png` is accesible from https://yourwebsite.com/img.png)
- `themes/` is where you put website theme (explained later)
- files under `layouts/` override theme layout. 

## Install a theme
Hugo has many premade website themes available for free and you can pick whatever you like from [here](https://hugothemesfree.com/), but for this time we're going to use https://hugothemesfree.com/an-extreme-fast-responsive-and-feature-rich-hugo-theme/ which is a current theme for this blog. Note that installation varies from theme to theme, and we're installing the mentioned theme in the way that the author of the theme suggests. 

```bash
# in the "example" directory
git init
git submodule add https://github.com/razonyang/hugo-theme-bootstrap themes/hugo-theme-bootstrap
cp -a themes/hugo-theme-bootstrap/exampleSite/* .
```

If you start a local server
```bash
hugo server
```
and navigate to http://localhost:1313, you'll see a page like this
![image](/uploads/2022-02-11-01-39-09.png)

Easy. If you navigate to `content/` directory, you'll see many blog posts there. 

`content/thisisexample.md` will be served from `/thisisexample` in the url, and `content/dir1/index.md` will be served from `/dir1`, if there is one.

## Customize a theme
You might be wondering how you modify or customize a theme layout. That is where `layouts/` directory comes in. 
Hugo reads `theme/` directory first and builds a backbone of the site, and then Hugo reads `layouts/` directory to detect any modification. Finally, Hugo loads contents in the `content/` directory to the backbone, and your website starts. 

So how do you customize a theme? It's so easy. 

To modify `theme/[theme-name]/layouts/partial/header.html` for example, you have to put an alternative layout in `layouts/partial/header.html` and so forth for all other files. 

Costomizing more, for example, use of cookies or color palettes, heavily depends on which theme you use. Some features might be buggy so be careful! so we're not going to dive deeper. 

## Frontmatter
Try opening one markdown file in the `content/` directory. You'll see something placed at the top. 
Here's the top of `content/about/index.md`.
```markdown
+++
title = "About"
description = "Hugo, the world's fastest framework for building websites"
date = "2019-02-28"
aliases = ["about-us", "about-hugo"]
author = "Hugo Authors"
reward = false
postDate = false
readingTime = false
+++
```
This wierd thing placed at the top of every blog post is called **frontmatter**. 

Frontmatter is what specifies file's attributes. title, categories, and so on. The theme installed uses these information.

## Create a new post

If you want to create a new post `newpost.md` in the content directory, you can create empty file `content/newpost.md`. However, this method is not preferred because writing frontmatter every time you create a new post is painful work. Hugo has a command for it. 
```bash
hugo new newpost.md
```
Then Hugo reads `archtypes/default.md` and creates a new post `content/newpost.md` based on that file. `archtypes/default.md` is what is called **frontmatter template**, and you can modify it on your taste. 


## Hosting
Popular options for hosting are Github Pages and Netlify. Both are good, but I prefer Netlify. In either case, you have to push your hugo website into your github repository. Go to github and create a new repository. Push your local website to github repository. 

Then, go to [Netlify](https://app.netlify.com) and sign up with github, import a site from the repository, and your website is up. Easy. 

## Managing 
Writing blog posts on text editor is kind of hard. There's a way to make it easy. Use a CMS - Content Management System that helps you make an update easier. There are many CMS that are suitable for static sites:
- Forestry.io
- Netlify CMS
- Frontmatter CMS
- Hokus CMS  
  
to name a few. 

OK, that's it for this article. 

By the way I'm building a Headless CMS that is *more* suitable for static sites, so why not catch me on [twitter](https://twitter.com/0xsuk)?
