import { EditorContext } from "@/Providers/EditorProvider";
import { useContext, useEffect, useRef } from "react";

const Editor = () => {
  const editorContext = useContext(EditorContext);
  const editorRef = useRef<null | boolean>(null);

  useEffect(() => {
    if (editorRef.current === null) {
      if (editorContext && editorContext.initEditor) {
        editorContext.initEditor();
        editorRef.current = true;
      }
    }
  }, [editorContext]);

  return (
    <div>
      <p>This is editor</p>
      <div id="editorjs"></div>
    </div>
  );
};

export default Editor;
