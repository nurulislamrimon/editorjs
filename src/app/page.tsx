"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";

const DEFAULT_INIT_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        level: 1,
        text: "My awesome story",
      },
    },
  ],
};
const EditorComponent = () => {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",

      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        const content = await editor.saver.save();
        console.log("Editor content changed!", content);
      },

      tools: {
        header: Header,
        image: {
          class: ImageTool,
          config: {
            uploader: {
              uploadByFile: async (file) => {
                const formData = new FormData();
                formData.append("file", file);

                const response = await fetch(
                  "http://localhost:4001/api/uploadImage/create",
                  {
                    method: "POST",
                    // headers: {
                    //   "Content-Type": "multipart/form-data",
                    // },
                    body: formData,
                  }
                );
                const data = await response.json();
                console.log(data);

                return {
                  success: 1,
                  file: data.file,
                };
              },
            },
          },
        },
      },
      data: DEFAULT_INIT_DATA,
    });
  };

  useEffect(() => {
    if (!ejInstance.current) {
      initEditor();
    }
  }, []);

  return (
    <div>
      <h3>data</h3>

      <div id="editorjs"></div>
    </div>
  );
};

export default EditorComponent;
