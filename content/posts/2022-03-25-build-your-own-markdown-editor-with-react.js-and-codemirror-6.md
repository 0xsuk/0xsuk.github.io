---
title: Build your own markdown editor with React.js and Codemirror 6
date: 2022-03-25T02:41:36.133Z
draft: ''
comment: true
toc: true
reward: false
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
---
Hi suk here.  
This post explains how to create markdown editor/previewer with React.js / Codemirror 6. I'm writing this down because I had to learn how to parse markdown syntax for my [static sites CMS project](https://github.com/0xsuk/agitcms).  Hope this post helps someone like me.  

## Goal of this project

Let's create a simple markdown editor that works in your browser. If I write strings in markdown format, React.js reads it, parses it, and displays preview.

Github Link: https://github.com/0xsuk/byome

![GIF](/uploads/byome_alpha.gif)

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

As stated in https://github.com/unifiedjs/unified#description, unified consists of three parts: parser, transformer, and compiler.

In our case, we want to parse markdown to syntax tree first. So we use remark-parse as a parser. We parse doc to syntax tree, so that transformers such as remark-gfm can figure out what to do.

Second, we want additional functionality to our parser. There's a remark plugin called remark-gfm for supporting GFM (autolink literals, footnotes, strikethrough, tables, tasklists), so we use this extension.

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

### Implementing additional features  

I want to upload my local file and edit it on byome. I also want to save edited file on byome to my local system.
Plug, more stylish layout would be better.  


So I modified App.jsx like this.  
```jsx
import { useState, createElement, Fragment, useEffect, useRef } from "react";
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
  const [editorView, setEditorView] = useState(null);
  const [fileName, setFileName] = useState(null);

  const editorExtensions = [
    EditorView.updateListener.of((update) => {
      if (update.changes) {
        setDoc(update.state.doc.toString());
      }
    }),
  ];

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.returnValue = "";
    });

    const startState = EditorState.create({
      doc,
      extensions: editorExtensions,
    });

    setEditorView(
      new EditorView({
        state: startState,
        parent: document.getElementById("editor"),
      })
    );
  }, []);

  const handleFileOpen = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      setDoc(ev.target.result);
      const newState = EditorState.create({
        doc: ev.target.result,
        extensions: editorExtensions,
      });
      editorView.setState(newState);
    };
    reader.readAsText(file);

    setFileName(file.name);
  };

  const downloadFile = () => {
    const b64doc = btoa(doc);
    console.log(b64doc, doc);
    const a = document.createElement("a");
    const e = new MouseEvent("click");

    a.download = fileName ? fileName : "doc.md";
    a.href = "data:text/plain;base64," + b64doc;
    a.dispatchEvent(e);
  };

  const inputRef = useRef(null);
  return (
    <>
      <div id="buttons">
        <button onClick={downloadFile}>Save</button>
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleFileOpen}
        />
        <button onClick={() => inputRef.current.click()}>Open file</button>
        {fileName && <p>File name: {fileName}</p>}
      </div>
      <div id="app">
        <div id="editor"></div>
        <div id="previewer">{md}</div>
      </div>
    </>
  );
}

export default App;
```
I used javascript FileReader API to read local files. To reset the document of codemirror editor, I managed editorView with useState so that I can reset document later by `editorView.setState(newState)`. 

After modifying [App.css](https://raw.githubusercontent.com/0xsuk/byome/master/src/App.css), our app finally looks like this.  

![GIF](/uploads/byome_alpha.gif)
 
