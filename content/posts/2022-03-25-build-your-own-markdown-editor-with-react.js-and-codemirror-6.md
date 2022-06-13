---
title: Build your own markdown editor with React.js and Codemirror 6
date: 2022-03-25T02:41:36.133Z
draft: false
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
This post explains how to create markdown editor/previewer with React.js / Codemirror 6. I'm writing this down because I had to learn how to build markdown editor for my project ([Headless CMS with hackable markdown editor](https://github.com/0xsuk/agitcms)).  Hope this post helps someone like me.

## Goal of this project

We are going to create a simple markdown editor that works in your browser. If I write strings in markdown format in codemirror editor, React.js reads it, parses it, and displays preview.

Github Link: https://github.com/0xsuk/byome  
Demo: https://0xsuk.github.io/byome

I recommend following this tutorial referencing the github code.    
If you are fast learner, just go to github repo and try understand the code. Most of it should make sense, except for scroll sync part, which I'll explain later.  

![GIF](https://user-images.githubusercontent.com/97814789/173233884-b99cd89d-8ba1-471b-ad01-29a35241937c.png)

## Setup

We are going to use Create React App.
I created a starter for this tutorial, which is just a create-react-app with some useless files deleted and some npm packages installed.

packages I've included:

* @codemirror/state
* @codemirror/view
* @codemirror/language
* @codemirror/lang-markdown
* @lezer/highlight
* unified
* remark-parses
* remark-rehype
* rehype-react
* remark-gfm

Seems a lot, but these packages are just an editor (codemirror) and a parser(unified, remark-*). I'll explain each package of the list later.

You can clone my "setup" branch of [Github repo](https://github.com/0xsuk/byome) to clone a starter for this project.

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

We parse `doc` using `unified` with some extensions, such as `remark-parse`, `remark-rehype`, `remark-gfm`, `rehype-react`.

As stated in https://github.com/unifiedjs/unified#description, `unified` consists of three parts: parser, transformer, and compiler.

In our case, we want to parse `doc` to markdown syntax tree first. So we use remark-parse as a parser. We parse doc to syntax tree, so that transformers such as remark-gfm can figure out what to do.

Second, we want additional functionality to our parser. There's a remark plugin called `remark-gfm` for supporting GFM (autolink literals, footnotes, strikethrough, tables, tasklists), so we use this extension.

Third, we want to compile the syntax tree to React component. There's a package called `rehype-react`, which reads rehype (HTML) syntax tree and compiles it into react component. However, rehype-react is only compatible with rehype syntax. So we transform remark (Markdown) syntax to rehype (HTML) syntax using transformer called `remark-rehype`, and we compile rehype syntax to React component.

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

Whenever `doc` is updated, component is rerendered, generating new preview using `unified`.  

And if we `npm start`, localhost:3000 shows

![](/uploads/2022-03-25-12-45-53.png)

Seems it's working!

"# Hello byome" is successfully parsed into \<h1>Hello byome\</h1>

### Creating editor

We are goingt create a markdown editor using Codemirror 6.

Two major components of codemirror 6 is EditorState class and EditorView class. EditorState represents a state of editor, and EditorView wraps operation on `state`. The concept of `state` and `view` is explained in [official document](https://codemirror.net/docs/guide/) so take a look.  

We create initial EditorState containing initial doc ("Hello byome"), as documented here https://codemirror.net/6/docs/ref/#state.EditorState^create.

```jsx
const startState = EditorState.create({
  doc,
  extensions: [
    EditorView.updateListener.of((update) => {
      if (update.docChanged) {
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
  parent: ref.current,
});
```
Where `ref` is a reference for editor DOM element.  



We want to create new Editor only when ref gets attached, so we put them into useEffect

```jsx
useEffect(() => {
  if (!ref.current) return;
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
}, [ref]);
```

I put them into `useCodemirror.jsx` so that App.jsx remains clean.  

Now App.jsx looks like this

```jsx
import { useState, createElement, Fragment } from "react";
import "./App.css";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";
import useCodemirror from "./useCodemirror";

function App() {
  const [doc, setDoc] = useState("# Hello byome");
  const [editorRef, editorView] = useCodemirror({ initialDoc: doc, setDoc });

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  return (
    <div>
      <div ref={editorRef}></div>
      <div>{md}</div>
    </div>
  );
}

export default App;
```

And useCodemirror.jsx
```jsx
import { useRef, useState, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import {  EditorView } from "@codemirror/view";

function useCodemirror({ initialDoc, setDoc }) {
  const ref = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    if (!ref.current) return;
    const startState = EditorState.create({
      doc: initialDoc,
      contentHeight: "100%",
      extensions: [
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setDoc(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: ref.current,
    });

    setView(view);
  }, [ref]);

  return [ref, view];
}

export default useCodemirror;
```

And it works!

![GIF](/uploads/byome.gif)

### Extending Editor Functionality  
From here we're going to dive a little bit deeper into extending editor functionality.  

#### adding lineNumber, Gutter, highlighting of active line & its gutter, markdown support, highlighting of headings, lineWrapping
```jsx
import { useRef, useState, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import {
  EditorView,
  lineNumbers,
  highlightActiveLine,
  highlightActiveLineGutter,
} from "@codemirror/view";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { syntaxHighlighting, HighlightStyle } from "@codemirror/language";
import { tags } from "@lezer/highlight";

const markdownHighlighting = HighlightStyle.define([
  { tag: tags.heading1, fontSize: "1.6em", fontWeight: "bold" },
  {
    tag: tags.heading2,
    fontSize: "1.4em",
    fontWeight: "bold",
  },
  {
    tag: tags.heading3,
    fontSize: "1.2em",
    fontWeight: "bold",
  },
]);

function useCodemirror({ initialDoc, setDoc }) {
  const ref = useRef(null);
  const [view, setView] = useState(null);

  useEffect(() => {
    if (!ref.current) return;
    const startState = EditorState.create({
      doc: initialDoc,
      contentHeight: "100%",
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        markdown({
          base: markdownLanguage, //Support GFM
        }),
        syntaxHighlighting(markdownHighlighting),
        EditorView.lineWrapping,
        EditorView.updateListener.of((update) => {
          if (update.docChanged) {
            setDoc(update.state.doc.toString());
          }
        }),
      ],
    });

    const view = new EditorView({
      state: startState,
      parent: ref.current,
    });

    setView(view);
  }, [ref]);

  return [ref, view];
}

export default useCodemirror;
```

#### scroll sync
This is probably the most complicated part.  
Before implementing scroll sync, take a glance at our App.css file because scrollSync is a matter of styling.  
App.css
```css
* {
  box-sizing: border-box;
  margin: 0;
}
  

#root {
  height: 100vh;
  overflow: hidden;
}

#editor-wrapper {
  height: 100%;
  display: flex;
}


#markdown {
  height: 100%;
  flex: 0 0 50%;
  padding: 0 12px 0 0;
  overflow-y: auto;
}
#preview {
  font-size: 14px; /*make it same as codemirror */
  height: 100%;
  flex: 0 0 50%;
  padding: 0 0 0 12px;
  border-left: solid 1px #ddd;
  overflow-x: hidden;
  overflow-y: auto;
}

#preview * {
  overflow-x: auto;
}
```
And here's App.jsx
```jsx
import { useState, createElement, Fragment, useRef } from "react";
import "./App.css";
import { unified } from "unified";
import remarkParse from "remark-parse/lib";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react/lib";
import useCodemirror from "./useCodemirror";
import "github-markdown-css/github-markdown-light.css";

let treeData;

function App() {
  const [doc, setDoc] = useState("# Hello byome");
  const [editorRef, editorView] = useCodemirror({ initialDoc: doc, setDoc });
  const mouseIsOn = useRef(null);

  const defaultPlugin = () => (tree) => {
    treeData = tree; //treeData length corresponds to previewer's childNodes length
    return tree;
  };

  const markdownElem = document.getElementById("markdown");
  const previewElem = document.getElementById("preview");

  const computeElemsOffsetTop = () => {
    let markdownChildNodesOffsetTopList = [];
    let previewChildNodesOffsetTopList = [];

    treeData.children.forEach((child, index) => {
      if (child.type !== "element" || child.position === undefined) return;

      const pos = child.position.start.offset;
      const lineInfo = editorView.lineBlockAt(pos);
      const offsetTop = lineInfo.top;
      markdownChildNodesOffsetTopList.push(offsetTop);
      previewChildNodesOffsetTopList.push(
        previewElem.childNodes[index].offsetTop -
          previewElem.getBoundingClientRect().top //offsetTop from the top of preview
      );
    });

    return [markdownChildNodesOffsetTopList, previewChildNodesOffsetTopList];
  };
  const handleMdScroll = () => {
    console.log(mouseIsOn.current);
    if (mouseIsOn.current !== "markdown") {
      return;
    }
    const [markdownChildNodesOffsetTopList, previewChildNodesOffsetTopList] =
      computeElemsOffsetTop();
    let scrollElemIndex;
    for (let i = 0; markdownChildNodesOffsetTopList.length > i; i++) {
      if (markdownElem.scrollTop < markdownChildNodesOffsetTopList[i]) {
        scrollElemIndex = i - 1;
        break;
      }
    }

    if (
      markdownElem.scrollTop >=
      markdownElem.scrollHeight - markdownElem.clientHeight //true when scroll reached the bottom
    ) {
      previewElem.scrollTop =
        previewElem.scrollHeight - previewElem.clientHeight; //scroll to the bottom
      return;
    }

    if (scrollElemIndex >= 0) {
      let ratio =
        (markdownElem.scrollTop -
          markdownChildNodesOffsetTopList[scrollElemIndex]) /
        (markdownChildNodesOffsetTopList[scrollElemIndex + 1] -
          markdownChildNodesOffsetTopList[scrollElemIndex]);
      previewElem.scrollTop =
        ratio *
          (previewChildNodesOffsetTopList[scrollElemIndex + 1] -
            previewChildNodesOffsetTopList[scrollElemIndex]) +
        previewChildNodesOffsetTopList[scrollElemIndex];
    }
  };

  const handlePreviewScroll = () => {
    if (mouseIsOn.current !== "preview") {
      return;
    }
    const [markdownChildNodesOffsetTopList, previewChildNodesOffsetTopList] =
      computeElemsOffsetTop();
    let scrollElemIndex;
    for (let i = 0; previewChildNodesOffsetTopList.length > i; i++) {
      if (previewElem.scrollTop < previewChildNodesOffsetTopList[i]) {
        scrollElemIndex = i - 1;
        break;
      }
    }

    if (scrollElemIndex >= 0) {
      let ratio =
        (previewElem.scrollTop -
          previewChildNodesOffsetTopList[scrollElemIndex]) /
        (previewChildNodesOffsetTopList[scrollElemIndex + 1] -
          previewChildNodesOffsetTopList[scrollElemIndex]);
      markdownElem.scrollTop =
        ratio *
          (markdownChildNodesOffsetTopList[scrollElemIndex + 1] -
            markdownChildNodesOffsetTopList[scrollElemIndex]) +
        markdownChildNodesOffsetTopList[scrollElemIndex];
    }
  };

  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(defaultPlugin)
    .use(rehypeReact, { createElement, Fragment })
    .processSync(doc).result;

  return (
    <>
      <div id="editor-wrapper">
        <div
          id="markdown"
          ref={editorRef}
          onScroll={handleMdScroll}
          onMouseEnter={() => (mouseIsOn.current = "markdown")}
        ></div>
        <div
          id="preview"
          className="markdown-body"
          onScroll={handlePreviewScroll}
          onMouseEnter={() => (mouseIsOn.current = "preview")}
        >
          {md}
        </div>
      </div>
    </>
  );
}

export default App;
```

If scroll on `markdown` div is invoked, handleMdScroll() is called.  

`computeElemsOffsetTop()` computes offsetTop relative to `markdown` div's top for each element of *parsed* markdown (child of treeData, try console.logging treeData to better understand).  

If any parsed markdown element's offsetTop is greater than scrollTop of `markdown` div, meaning the whole element is visible at the highest position in the visible area of editor, set scrollElemIndex to previous parsed markdown element (the one that is partially  hidden above the visible area of editor).  

Then set scrollTop of `preview` div to corresponding element's offsetTop relative to `preview` div, with proper additional value. 

And vice versa for handling preview scroll. 


Now our markdown editor finally looks like this

![GIF](https://user-images.githubusercontent.com/97814789/173233884-b99cd89d-8ba1-471b-ad01-29a35241937c.png)

pretty neat right?
