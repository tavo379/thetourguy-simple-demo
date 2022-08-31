import React from "react"
import Image from 'next/image'
import Link from 'next/link'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import Logo from '../../../public/logo.png'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return(
    <Box as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Image
              src={Logo}
              alt="Logo"
              width={142}
              height={32}
            />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                    <Link href={`/`}>
                      <Button >Home</Button>
                    </Link>

                    <Link href={`/about`}>
                      <Button >About</Button>
                    </Link>
                </ButtonGroup>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}

export default Header