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
  import { BsChatDots } from "react-icons/bs"


const MobileView = () => {

    //Colormode
    const { colorMode, toggleColorMode } = useColorMode();
    const firstDiv = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
    const secondDiv = useColorModeValue("#eef6ff","#222636")
    const header = useColorModeValue("white","")
    const subHeader = useColorModeValue("white","")
    const input = useColorModeValue("white","#dedede")

  return (
    <Flex
     display={{ base: 'flex', md: 'none' }}
     overflow="hidden"
    >
     <SimpleGrid
      columns={1} 
      mt="2rem"
     >
        <Flex
            bg={firstDiv}
            w="21rem"
            h="16rem"
            flexDir="column"
            borderRadius="0.7rem 0.7rem 0 0"
        >
            <Flex
                gap="14rem"
                mt="1rem"
            >
                <Text
                    fontSize="2rem"
                    ml="1rem"
                    color={header}
                >
                    <ChevronLeftIcon/>
                </Text>
                <Button 
                    onClick={toggleColorMode}
                    mt="1rem"
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
                mt="1rem"
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
                    mt="1.5rem"
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
            w="21rem"
            h="24rem"
            borderRadius="0 0 0.7rem 0.7rem"
            flexDir="column"
            overflowY="scroll"
            p="1.6rem"
        >
            <Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />

<Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />

<Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />

<Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />

<Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />

<Flex
                flexDir="row"
            >
                <Image
                    src="/images/img1.png"
                    alt=""
                    boxSize="4rem"
                    borderRadius='full'
                />

                <Flex
                    flexDir="column"
                    mt="0.7rem"
                    ml="0.7rem"
                >
                    <Heading
                        size="xs"
                    >
                        Damilola Oyeniyi
                    </Heading>
                    <Text
                        fontSize="0.8rem"
                    >
                        Nigeria
                    </Text>
                </Flex>

                <Text
                    mt="0.9rem"
                    ml="4rem"
                    fontSize="1.3rem"
                >
                    <BsChatDots/>
                </Text>
            </Flex>
            <Divider 
                orientation='horizontal' 
                mt="1rem"
                mb="1rem"
            />
        </Flex>
     </SimpleGrid> 
    </Flex>
  )
}

export default MobileView