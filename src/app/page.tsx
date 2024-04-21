"use client";
import EditorProvider from "@/Providers/EditorProvider";
import Editor from "./_components/Editor";

const Home = () => {
  return (
    <EditorProvider>
      <Editor />
    </EditorProvider>
  );
};

export default Home;
