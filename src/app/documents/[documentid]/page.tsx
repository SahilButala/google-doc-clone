import React from "react";
import Editor from "./editor";
import ToolBar from "../ToolBar";
import Navbar from "./Navbar";

interface DocumentIdProp {
  params: Promise<{ documentid: String }>;
}

const DocumentId = async ({ params }: DocumentIdProp) => {
  const { documentid } = await params;
  return (
    <div className="min-h-screen bg-[#FAFBFD]">
      <div className="flex flex-col gap-y-3 px-4 pt-2 fixed top-0 right-0 left-0 z-20 bg-[#FAFBFD]   print:hidden">
        <Navbar />
        <ToolBar />
      </div>

      <div className="pt-[124px] print:pt-0">
        <Editor />
      </div>
    </div>
  );
};

export default DocumentId;
