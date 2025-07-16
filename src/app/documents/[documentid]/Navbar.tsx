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

const Navbar = () => {
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
                      <MenubarItem className="flex gap-2">
                        <FileJsonIcon className="size-4 mr-2" />
                        JSON
                      </MenubarItem>
                      <MenubarItem className="flex gap-2">
                        <GlobeIcon className="size-4 mr-2" />
                        HTML
                      </MenubarItem>
                      <MenubarItem className="flex gap-2">
                        <BsFilePdf className="size-4 mr-2" />
                        PDF
                      </MenubarItem>
                      <MenubarItem className="flex gap-2">
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
                  <MenubarItem>
                    <Undo2Icon className="size-4 mr-2" />
                    undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
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
                      <MenubarItem>1 x 1</MenubarItem>
                      <MenubarItem>2 x 3</MenubarItem>
                      <MenubarItem>3 x 3</MenubarItem>
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
                      <MenubarItem>
                        <BoldIcon className="size-4 mr-2" />
                        Bold
                      </MenubarItem>
                      <MenubarItem>
                        <ItalicIcon className="size-4 mr-2" />
                        Italic
                      </MenubarItem>
                      <MenubarItem>
                        <UnderlineIcon className="size-4 mr-2" />
                        Underline
                      </MenubarItem>
                      <MenubarItem>
                        <StrikethroughIcon className="size-4 mr-2" />
                        Strikethrough
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarItem>

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
