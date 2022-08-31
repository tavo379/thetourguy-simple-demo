import Cards from "../../components/Cards";
import { Container, Box,Image, Tag, Heading,Text, Icon } from "@chakra-ui/react"
import { FcLike } from 'react-icons/fc'
import { AiOutlineStar } from 'react-icons/ai'


export default {
  title: 'Components/Cards',
  component: Cards,
};

export const CardsPage = () => {
  return (
    <Container minW='300px' minH='600px' borderWidth='1px'  mx='4' borderRadius='lg' p='2' position='relative'>
    <Image boxSize='300px' objectFit='cover'></Image>
    <Box position='absolute' top='4' right='4' backgroundColor='white' p='2' borderRadius='md'>
      <Icon as={FcLike} cursor='pointer' fontSize='24px'></Icon>
    </Box>
    <Tag colorScheme='blue' margin='3'>Simple tag</Tag>
    <Heading size='md' margin='3'>Title</Heading>
    <Text fontSize='sm' margin='3'>Content</Text>
    <Box display='flex' justifyContent='space-between' p='4' position='absolute' bottom='2'>
      <Icon as={AiOutlineStar} fontSize='24px'></Icon>
      <Text fontSize='lg' fontWeight='bold'>$186.00</Text>
    </Box>
  </Container>
  )
}