import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DocumentInput from './document.input'


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
MenubarShortcut

} from "@/components/ui/menubar"
import { FileIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <div>
        <div className='flex  items-center gap-2'>
            <Link href={""}>
                <Image src={"/logo.svg"}  alt='logo'  height={95} width={95}/>
            </Link>
            <div>
                {/* Document Input  */}
                <DocumentInput/>
                {/* Menue Bar */}
                <div className='flex'>
             <Menubar   className='border-none bg-transparent shadow-none p-0 h-auto'>
                 <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                          Save 
                          <FileIcon className='ml-3 size-4'/>
                        </MenubarItem>
                    </MenubarContent>
                 </MenubarMenu>
             </Menubar>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar 