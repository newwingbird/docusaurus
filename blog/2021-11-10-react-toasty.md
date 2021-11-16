---
slug: omg
title: OMG!
authors: newwingbird
tags: [hello, docusaurus]
---

This is the summary of a very long blog post,

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.

<!--` `truncate` `-->

改行

改行

改行

改行

<!--truncate-->

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

```js
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
```

return (

<div>
<button onClick={notify}>Notify!</button>
<ToastContainer />
</div>
);
}

:::
