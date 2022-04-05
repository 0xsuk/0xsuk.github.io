---
title: Build your own markdown editor with React.js and Codemirror 6
date: 2022-03-25T02:41:36.133Z
draft: ""
comment: false
toc: true
reward: true
pinned: false
featured: false
math: true
categories:
  - Web Dev
tags:
  - React.js
  - build-your-own-x
series: null
images:
  - uploads/2022-03-25-12-13-39.png
---## Goal of this project

Create simple markdown editor that works in browser. If I write strings in markdown format, React.js reads it, parses it, and displays preview.

Github Link: https://github.com/0xsuk/byome

![GIF](/uploads/byome.gif)

## Setup

We are going to use Create React App.
I created a starter for this tutorial, which is just a create-react-app with some files deleted and some npm package installed.

packages I've included:

* @codemirror/state
* @codemirror/view
* unified
* remark-parses
* remark-rehype
* rehype-react
* remark-gfm

and I'll explain each of the list later.

You can clone my "setup" branch of [Github repo](https://github.com/0xsuk/byome) for this project.

```bash
git clone -b setup git@github.com/0xsuk/byome.git
cd byome
npm i
npm start
```

It says Hello byome

![](/uploads/2022-03-25-12-13-39.png)

## Writing Code

### Managing state

We are going to use useState to manage contents of markdown, namely doc.

```jsx
function App() {
  const [doc, setDoc] = useState("# Hello byome");

  return <div>{doc}</div>;
}
```

### Creating previewer

If doc changes, we want to read it, parse it and display preview of it.

We're going to use npm package called unified.

unified is an interface for parsing, inspecting, transforming, and serializing content through syntax trees.

We parse doc using unified with some extensions, such as remark-parse, remark-rehype, remark-gfm, rehype-react.

As stated in https://github.com/unifiedjs/unified#description, unified comes up with three parts: parser, transformer, and compiler.

In our case, we want to parse markdown to syntax tree first. So we use remark-parse as a parser. We parse doc to syntax tree, so that transformers such as remark-gfm can figure out where to approach.

Second, we want additional functionality to our parser. There's a remark plugin called remark-gfm to support GFM (autolink literals, footnotes, strikethrough, tables, tasklists), so we use this extension.

Third, we want to compile the syntax tree to React component. There's a package called rehype-react, which reads rehype syntax tree and compiles it into react component. However, rehype-react is only compatible with rehype syntax. So we transform remark syntax to rehype syntax using remark-rehype, and we compile rehype syntax to React component.

All of the process stated above can be written in simple code.

```jsx
const md = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeReact, { createElement, Fragment })
  .processSync(doc).result;
```

At this point, App.jsx looks like this

```jsx
import { useState, createElement, Fragment } from "react";
import "./App.css";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";

function App() {
  const [doc, setDoc] = useState("# Hello byome");

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  return (
    <div>
      <div>{doc}</div>
      <div>{md}</div>
    </div>
  );
}

export default App;
```

And if we npm start, localhost:3000 shows

![](/uploads/2022-03-25-12-45-53.png)

Seems it's working!

"# Hello byome" is successfully parsed into \<h1>Hello byome\</h1>

### Creating editor

We are goingt create a markdown editor using Codemirror 6.

Two major components of codemirror 6 is EditorState class and EditorView class. EditorState manages state of editor, and EditorView manages user interface. Also note that EditorView contains editor state in it.

We create initial EditorState containing initial doc ("Hello byome"), as documented here https://codemirror.net/6/docs/ref/#state.EditorState^create.

```jsx
const startState = EditorState.create({
  doc,
  extensions: [
    EditorView.updateListener.of((update) => {
      if (update.changes) {
        setDoc(update.state.doc.toString());
      }
    }),
  ],
});
```

And we create new editor using EditorView class, as documented here https://codemirror.net/6/docs/ref/#view.EditorView.constructor

```jsx
new EditorView({
  state: startState,
  parent: document.getElementById("editor"),
});
```

Attaching editor id

```jsx
return (
  <div>
    <div id="editor"></div>
    <div>{md}</div>
  </div>
);
```

We want to create new Editor only when component did mount, so we put all code into useEffect

```jsx
useEffect(() => {
  const startState = EditorState.create({
    doc,
    extensions: [
      EditorView.updateListener.of((update) => {
        if (update.changes) {
          setDoc(update.state.doc.toString());
        }
      }),
    ],
  });

  new EditorView({
    state: startState,
    parent: document.getElementById("editor"),
  });
}, []);
```

Finally our App.jsx looks like this

```jsx
import { useState, createElement, Fragment, useEffect } from "react";
import "./App.css";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";

function App() {
  const [doc, setDoc] = useState("# Hello byome");

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  useEffect(() => {
    const startState = EditorState.create({
      doc,
      extensions: [
        EditorView.updateListener.of((update) => {
          if (update.changes) {
            setDoc(update.state.doc.toString());
          }
        }),
      ],
    });

    new EditorView({
      state: startState,
      parent: document.getElementById("editor"),
    });
  }, []);

  return (
    <div>
      <div id="editor"></div>
      <div>{md}</div>
    </div>
  );
}

export default App;
```

And it works!

![GIF](/uploads/byome.gif)