"use client";
import EditorJs from "@editorjs/editorjs";

export default function Home() {
  const editor = new EditorJs({
    holder: "editorjs",
    autofocus: true,
  });
  console.log(editor);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      <div id="editorjs"></div>
    </main>
  );
}
