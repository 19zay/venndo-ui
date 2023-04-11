import React from 'react'
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
    Search2Icon,
    ChevronLeftIcon
  } from "@chakra-ui/icons"

const MainDiv = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  // ColorMode
  const firstDiv = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
  const secondDiv = useColorModeValue("white","#222636")
  const header = useColorModeValue("white","")
  const subHeader = useColorModeValue("white","")
  const input = useColorModeValue("white","#dedede")

  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
  >
    <SimpleGrid 
      columns={1} 
      mt={["0.1rem","0.1rem","2rem","2rem"]}
    >
        {/* FirstDiv */}
      <Flex 
        bg={firstDiv}
        w={["26rem","26rem","35rem","35rem"]}
        h={["15rem","15rem","14rem","14rem"]}
        borderRadius="0.7rem 0.7rem 0 0"
        flexDir="column"
        >
        <Flex
          gap={["19.7rem","19.7rem","27rem","27rem"]}
          mt={["1rem","","",""]}
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
      </Flex>

        {/* SecondDiv */}
      <Flex 
        bg={secondDiv}
        w={["26rem","26rem","35rem","35rem"]}
        h={["30rem","30rem","28rem","28rem"]}
        borderRadius="0 0 0.7rem 0.7rem"
        boxShadow="lg"
      >

      </Flex>
    </SimpleGrid>
  </Flex>
  )
}

export default MainDiv