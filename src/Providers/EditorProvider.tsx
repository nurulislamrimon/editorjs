import React, { createContext, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
// ==========================
//           context
// ==========================
type EditorContextValue = {
  initEditor: () => void;
  editorInstanceRef: React.MutableRefObject<null | EditorJS>;
};

export const EditorContext = createContext<null | EditorContextValue>(null);

// ==========================
//           main
// ==========================
const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const editorInstanceRef = useRef<null | EditorJS>(null);
  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Let's write an awesome story!",
      tools: {},
    });
    editorInstanceRef.current = editor;
  };
  return (
    <EditorContext.Provider value={{ initEditor, editorInstanceRef }}>
      {children}
    </EditorContext.Provider>
  );
};

export default EditorProvider;
