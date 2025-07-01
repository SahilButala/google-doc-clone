import React from 'react'
import Editor from './editor'
import ToolBar from '../ToolBar'

interface DocumentIdProp{
      params : Promise<{documentid : String}>
}

const DocumentId = async ({params} : DocumentIdProp) => {
  const {documentid} = await params
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <ToolBar/>
    <Editor/>
    </div>
  ) 
}

export default DocumentId