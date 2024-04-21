import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// import Alert from "@editorjs/alert";
import Paragraph from "@editorjs/paragraph";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Underline from "@editorjs/underline";
import ChangeCase from "editorjs-change-case";
import Strikethrough from "@sotaproject/strikethrough";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import ColorPlugin from "editorjs-text-color-plugin";
import AlignmentBlockTune from "editorjs-text-alignment-blocktune";

const Editor = () => {
  const editorRefToPreventRerendering = useRef<null | boolean>(null);

  const editorInstanceRef = useRef<null | EditorJS>(null);

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let's write an awesome story!",
      tools: {
        textAlignment: {
          class: AlignmentBlockTune,
          config: {
            default: "left",
            blocks: {
              header: "center",
              paragraph: "justify",
            },
          },
        },

        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
          config: {
            placeholder: "Enter text",
          },
        },

        header: {
          class: Header,
          config: {
            placeholder: "Enter a header",
            levels: [1, 2, 3, 4],
            defaultLevel: 2,
          },
        },
      },
      onChange: async () => {
        const data = await editor.save();
        console.log("Content was updated:", data);
      },
    });

    editorInstanceRef.current = editor;
  };

  useEffect(() => {
    if (editorRefToPreventRerendering.current === null) {
      initEditor();
      editorRefToPreventRerendering.current = true;
    }
  }, []);

  return (
    <div>
      <p>This is editor</p>
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
