import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Container, Box,Image, Tag, Heading,Text, Icon } from "@chakra-ui/react"
import { FcLike } from 'react-icons/fc'
import { AiOutlineStar } from 'react-icons/ai'

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
          <Container minW='300px' minH='600px' borderWidth='1px' key={el.id} mx='4' borderRadius='lg' p='2' position='relative'>
            <Image boxSize='300px' src={el.yoast_head_json.og_image.map(el => el.url)} alt={el.title.rendered} objectFit='cover'></Image>
            <Box position='absolute' top='4' right='4' backgroundColor='white' p='2' borderRadius='md'>
              <Icon as={FcLike} cursor='pointer' fontSize='24px'></Icon>
            </Box>
            <Tag colorScheme='blue' margin='3'>Simple tag</Tag>
            <Heading size='md' margin='3'>{el.title.rendered}</Heading>
            <Text fontSize='sm' margin='3'>{el.content.rendered}</Text>
            <Box display='flex' justifyContent='space-between' p='4' position='absolute' bottom='2'>
              <Icon as={AiOutlineStar} fontSize='24px'></Icon>
              <Text fontSize='lg' fontWeight='bold'>$186.00</Text>
            </Box>
          </Container>
        ))}
      </Box>
    </Box>
  )
}

export default Cards