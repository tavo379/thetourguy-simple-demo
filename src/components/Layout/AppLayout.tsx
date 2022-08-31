import { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { BaseMeta, OpenGraphMeta, TwitterMeta } from './Meta'
import Header from '../Header/index'

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Titulo</title>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        {/* <link rel="canonical" href={canonicalUrl} /> */}
      </Head>
{/*       <BaseMeta metadata={metadata} />
      <OpenGraphMeta metadata={metadata} canonicalUrl={canonicalUrl} />
      <TwitterMeta metadata={metadata} /> */}
      
      <Header />
      <div className='container'>
        {children}
      </div>
    </>
  )
}

export default AppLayout