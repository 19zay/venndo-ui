import Head from 'next/head'
import { 
  Box,
  Button,
  useColorMode,
  Container,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Heading,
  Text,
  Input,
  InputGroup,
  InputLeftElement
 } from '@chakra-ui/react'
import {
  SunIcon,
  MoonIcon,
  PhoneIcon,
  Search2Icon,
  ChevronLeftIcon
} from "@chakra-ui/icons"
import MainDiv from '../../components/mainDiv'


export default function Home() {

  return (
    <>
      <Head>
        <title>VENNDO</title>
        <meta name="description" content="VENNDO UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Page */}
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <MainDiv/>
      </Flex>
    </>
  )
}
