import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
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


export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  // ColorMode
  const firstDiv = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
  const secondDiv = useColorModeValue("white","#222636")
  const header = useColorModeValue("white","")
  const subHeader = useColorModeValue("white","")
  const input = useColorModeValue("white","#dedede")

  return (
    <>
      <Head>
        <title>VENNDO</title>
        <meta name="description" content="VENNDO UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Page */}
      <Container>
        <Flex
          justifyContent="center"
          alignItems="center"
        >
          <SimpleGrid 
            columns={1} 
            mt={["2rem","2rem","2rem","2rem"]}
          >
            <Box 
              bg={firstDiv}
              w={["23rem","23rem","35rem","35rem"]}
              h={["13rem","13rem","14rem","14rem"]}
              borderRadius="0.7rem 0.7rem 0 0"
              flexDir="column"
              >
              <Flex
                gap={["16rem","16rem","27rem","27rem"]}
              >
                <Text
                  fontSize={["1.8rem","1.8rem","2.3rem","2.4rem"]}
                  ml="1rem"
                  color={header}
                >
                  <ChevronLeftIcon/>
                </Text>
                <Button 
                  onClick={toggleColorMode}
                  mt={["0.9rem","0.9rem","1.4rem","1.4rem"]}
                  // size={["","","","sm"]}
                  size="sm"
                >
                  {colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                </Button>
              </Flex>
              <Flex
                flexDir="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading
                  color={header}
                >
                  Search
                </Heading>
                <Text
                  color={subHeader}
                >
                  48 Results
                </Text>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  mt="1rem"
                >
                  <InputGroup
                  >
                  <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<Search2Icon color='black' />}
                  />
                  <Input 
                    // placeholder='Search' 
                    w={["15rem","15rem","20rem","20rem"]}
                    h={["2.5rem","2.5rem","2.8rem","2.8rem"]}
                    bg={input}
                  />
                </InputGroup>
                </Flex>
              </Flex>
            </Box>
            <Box 
              bg={secondDiv}
              w={["23rem","23rem","35rem","35rem"]}
              h={["30rem","30rem","28rem","28rem"]}
              borderRadius="0 0 0.7rem 0.7rem"
              boxShadow="lg"
            >

            </Box>
          </SimpleGrid>
        </Flex>
      </Container>
    </>
  )
}
