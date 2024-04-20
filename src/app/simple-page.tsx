"use client";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import { useEffect } from "react";

export default function Home() {
  const editor = new EditorJS({
    holder: "editorjs",
    // inlineToolbar: ["link", "marker", "bold", "italic"],
    tools: {
      header: {
        class: Header,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+H",
        config: {
          placeholder: "Header",
        },
      },
    },
    placeholder: "Let`s write an awesome story!",
    // onChange: (api, event) => {
    //   console.log("Now I know that Editor's content changed!", event, api);
    // },
  });

  const handleSubmit = () => {
    editor
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <div id="editorjs"></div>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </main>
  );
}
