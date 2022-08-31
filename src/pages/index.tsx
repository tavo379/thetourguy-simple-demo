import Cards from '../components/Cards/index'
import AppLayout from '../components/Layout/AppLayout'
import { GetStaticProps  } from  'next'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <AppLayout>
        <Cards/>
      </AppLayout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async(context) => {
  console.log("hhi")
  return {
    props: {
      name: 'Fredo'
    },
  }
}