"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import DocumentInput from "./document.input";

import {
  Menubar,
  MenubarSeparator,
  MenubarContent,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
} from "@/components/ui/menubar";
import {
  BoldIcon,
  FileIcon,
  FileJson,
  FileJsonIcon,
  FilePenIcon,
  FileTextIcon,
  GlobeIcon,
  ItalicIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormatting,
  StrikethroughIcon,
  TextIcon,
  Trash,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { BsFilePdf } from "react-icons/bs";
import { useEditorStore } from "@/store/use-editor-store";
// import { Blob } from "buffer";

const Navbar = () => {
  const { editor } = useEditorStore();


  // function to insert table 

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      ?.focus()
      ?.insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = ( blob : Blob , filename : string)=>{
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = filename,
        a.click()
  }


  //  convert this into JSON
  const onSaveJson = ()=>{
    if(!editor) return 

     const content = editor?.getJSON()
     const blob = new Blob([JSON.stringify(content)] , {
      type : "application/json"
     })

     onDownload(blob , `document.json`) // use document name
  }
  const onSaveHtml = ()=>{
    if(!editor) return 

     const content = editor?.getHTML()
     const blob = new Blob([content] , {
      type : "text/html"
     })

     onDownload(blob , `document.html`) // use document name
  }
  const onSaveText = ()=>{
    if(!editor) return 

     const content = editor?.getText()
     const blob = new Blob([content] , {
      type : "text/plain"
     })

     onDownload(blob , `document.text`) // use document name
  }

  return (
    <div>
      <div className="flex  items-center gap-2">
        <Link href={""}>
          <Image src={"/logo.svg"} alt="logo" height={95} width={95} />
        </Link>
        <div>
          {/* Document Input  */}
          <DocumentInput />
          {/* Menue Bar */}
          <div className="flex">
            <Menubar className="border-none bg-transparent shadow-none p-0 h-auto">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent className="print:hidden">
                  <MenubarSub>
                    <MenubarSubTrigger className="flex">
                      <FileIcon className="mr-2 size-4" />
                      Save
                    </MenubarSubTrigger>

                    <MenubarSubContent className="">
                      <MenubarItem className="flex gap-2" 
                       onClick={()=>onSaveJson()}
                      >
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem className="flex gap-2" 
                       onClick={()=>onSaveHtml()}
                      >
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem className="flex gap-2" 
                       onClick={()=>window.print()}
                      >
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem className="flex gap-2" 
                       onClick={()=>onSaveText()}
                      >
                        <FileTextIcon className="size-4 mr-2" />
                        TEXT
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem className="flex">
                    <FileIcon className="mr-2 size-4" />
                    New Document
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem>
                    <FilePenIcon className="mr-2 size-4" />
                    Rename
                  </MenubarItem>
                  <MenubarItem>
                    <Trash className="mr-2 size-4" />
                    Remove
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => window.print()}>
                    <PrinterIcon className="size-4 mr-2" />
                    Print <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Edit
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarItem
                    className=""
                    onClick={() => editor?.chain()?.focus()?.undo()?.run()}
                  >
                    <Undo2Icon className="size-4 mr-2" />
                    undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => editor?.chain()?.focus()?.redo()?.run()}
                  >
                    <Redo2Icon className="size-4 mr-2" />
                    redo <MenubarShortcut>⌘Y</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Insert
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem
                        className=""
                        onClick={() => insertTable({ rows: 1, cols: 1 })}
                      >
                        1 x 1
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 2, cols: 2 })}
                      >
                        2 x 2
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 3, cols: 3 })}
                      >
                        {" "}
                        3 x 3
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 4, cols: 4 })}
                      >
                        4 x 4
                      </MenubarItem>
                      <MenubarItem
                        onClick={() => insertTable({ rows: 5, cols: 5 })}
                      >
                        5 x 5{" "}
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                  Format
                </MenubarTrigger>

                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>
                      <TextIcon className="mr-2 size-4" />
                      TEXT
                    </MenubarSubTrigger>

                    <MenubarSubContent>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain()?.focus()?.toggleBold()?.run()
                        }
                      >
                        <BoldIcon className="size-4 mr-2" />
                        Bold
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain()?.focus()?.toggleItalic()?.run()
                        }
                      >
                        <ItalicIcon className="size-4 mr-2" />
                        Italic
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain()?.focus()?.toggleUnderline()?.run()
                        }
                      >
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline
                      </MenubarItem>
                      <MenubarItem
                        onClick={() =>
                          editor?.chain()?.focus()?.toggleStrike()?.run()
                        }
                      >
                        <StrikethroughIcon className="size-4 mr-2" />
                        Strikethrough
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem
                    onClick={() =>
                      editor?.chain()?.focus()?.unsetAllMarks()?.run()
                    }
                  >
                    <RemoveFormatting className="mr-2 size-4" />
                    Clear Formatting
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
