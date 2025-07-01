import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div className='min-h-screen justify-center flex items-center'>
      <div>
          Click <Link href={'/documents/123'} className='text-blue-400 font-medium hover:underline transition-all'>here</Link> to go document id
      </div>
    </div>
  )
}

export default Home