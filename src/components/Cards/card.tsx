import React from 'react'
import { Container, Box,Image, Tag, Heading,Text, Icon } from "@chakra-ui/react"
import { FcLike } from 'react-icons/fc'
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineWatchLater } from 'react-icons/md'

const Card = ({el}) => {

  return (
    <Container w='300px' minH='400px' borderWidth='1px' key={el.id} mx='4' borderRadius='lg' p='2' position='relative'>
      <Image borderRadius='lg' boxSize='100%' h="186" src={el.yoast_head_json.og_image.map(el => el.url)} alt={el.title.rendered} objectFit='cover'></Image>
      <Box boxSize="40px" display="flex" alignItems="center" justifyContent="center" position='absolute' top='4' right='4' backgroundColor='white' p='2' borderRadius='md'>
        <Icon as={FcLike} cursor='pointer' fontSize='22px'></Icon>
      </Box>
      <Tag colorScheme='blue' margin='3' color="#0A68AE" fontSize='12px' fontWeight="400">Simple tag</Tag>
      <Text fontWeight='500' size='sm' margin='3'>{el.title.rendered}</Text>
      <Box color="#757C7F" margin='3' display="flex" alignItems="center">
        <Icon as={MdOutlineWatchLater} cursor='pointer' fontSize='22px' mr="5px"></Icon>
        <Box fontWeight="500">7.30 h</Box>
      </Box>
      {/* <Text fontSize='sm' margin='3'>{el.content.rendered}</Text> */}
      <Box margin='3' display='flex' justifyContent='space-between'  bottom='2' pos="absolute" w="90%">
        <Box display="flex">
          <Icon as={AiOutlineStar} fontSize='24px' mr="5px"></Icon>
          <Box display="flex"><Text fontWeight="bold" mr="4px">5,0</Text> <Box color="#757C7F">(232)</Box></Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Text fontSize='lg' fontWeight='bold' mr="2px">$186</Text><Box fontSize='sm' color="#757C7F">/adult</Box>
        </Box>
      </Box>
  </Container>
  )
}

export default Card