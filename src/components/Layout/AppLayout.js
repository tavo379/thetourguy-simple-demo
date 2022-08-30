import Head from 'next/head'
import React from 'react'

const AppLayout = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta 
        name={description}
        content={content}></meta>
    </Head>
  )
}

export default AppLayout