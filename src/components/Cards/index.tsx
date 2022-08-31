import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Container, Box,Image, Tag, Heading,Text, Icon } from "@chakra-ui/react"
import { FcLike } from 'react-icons/fc'
import { AiOutlineStar } from 'react-icons/ai'
import Card  from  './card.tsx'
const Cards = () => {
  const [infoCards, setInfoCards] = useState([]);

  const fetcher = useEffect(() => {
    async function getInfoCards() {
      const response = await fetch('https://cacaoandavocado.co/wp-json/wp/v2/posts')
      const data = await response.json()
      setInfoCards(data)
    }
    getInfoCards()
  }, [])

  const {data, error} = useSWR('https://cacaoandavocado.co/wp-json/wp/v2/posts', fetcher)

  if(error) return <p>Failed to load</p>
  // if(data) return <p>Loading</p>
  return(
    <Box p='8'>
      <Heading size='lg' m='4'>Most popular tours</Heading>
      <Heading size='md' fontWeight='normal' m='4'>Our best selling tours at a glance</Heading>
      <Box display='flex' m='6'>
        {infoCards.map((el) => (
          <Card key={el.id} el={el} />
        ))}
      </Box>
    </Box>
  )
}

export default Cards