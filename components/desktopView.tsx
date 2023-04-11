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
    InputLeftElement,
    Image,
    Divider
   } from '@chakra-ui/react'

   import {
    SunIcon,
    MoonIcon,
    Search2Icon,
    ChevronLeftIcon
  } from "@chakra-ui/icons"
  import { ChatIcon } from "@chakra-ui/icons"

const DesktopView = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // ColorMode
    const firstDiv = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
    const secondDiv = useColorModeValue("#eef6ff","#222636")
    const header = useColorModeValue("white","")
    const subHeader = useColorModeValue("white","")
    const input = useColorModeValue("white","#dedede")

  return (
    <Flex
    justifyContent="center"
    alignItems="center"
    overflow="hidden"
    display={{ base: 'none', md: 'flex' }} 
    >
    <SimpleGrid 
      columns={1} 
      mt={["0.1rem","0.1rem","2rem","2rem"]}
      boxShadow="lg"
    >
        {/* FirstDiv */}
      <Flex 
        bg={firstDiv}
        w={["26rem","26rem","35rem","35rem"]}
        h={["15rem","15rem","14rem","14rem"]}
        borderRadius="0.7rem 0.7rem 0 0"
        flexDir="column"
        boxShadow="dark-lg"
        >
        <Flex
          gap={["19.7rem","19.7rem","27rem","27rem"]}
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
        p={["","","2rem","2rem"]}
        flexDir="column"
        overflowY="scroll"
        >
            <Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />

<Flex
                flexDir="row"
                // mt={["","","","1rem"]}
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="5rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","1rem","1rem"]}
                >
                    <Heading
                        size={["","","md","md"]}
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text>
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt={["","","0.8rem","0.8rem"]}
                    ml={["","","11rem","11rem"]}
                    fontSize={["","","2rem","2rem"]}
                >
                    <ChatIcon/>
                </Text>
                
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt={["1rem","1rem","1rem","1rem"]}
                mb={["1rem","1rem","1rem","1rem"]}
            />
      </Flex>
    </SimpleGrid>
  </Flex>
  )
}

export default DesktopView