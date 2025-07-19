import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Navbar from "./navbar"
import TemplateGallery from './template_gallery'

function Home() {
  return (
    <div className='min-h-screen  flex  flex-col'>
      <div className='fixed top-0 left-0 right-0 h-16 z-10 bg-white'>
        <Navbar/>
      </div>
      <div className='mt-16'>
          <TemplateGallery/>
      </div>
    </div>
  )
}

export default Home