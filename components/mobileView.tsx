import React, { useState } from 'react'
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
    // Image,
    Spinner,
    Divider
   } from '@chakra-ui/react'

   import {
    SunIcon,
    MoonIcon,
    Search2Icon,
    ChevronLeftIcon
  } from "@chakra-ui/icons"
  import { ChatIcon } from "@chakra-ui/icons"
  import Image from 'next/image'

  interface User {
    name: string;
    location: string;
    avatarUrl: string;
  }

const MobileView = () => {

    //Colormode
    const { colorMode, toggleColorMode } = useColorMode();
    const firstDiv = useColorModeValue("linear-gradient(to right, #162961, #3969b9)","linear-gradient(to right, #28355e, #4e67b6);")
    const secondDiv = useColorModeValue("white","#222636")
    const header = useColorModeValue("white","")
    const subHeader = useColorModeValue("white","")
    const input = useColorModeValue("white","#dedede")

     // Fetch API
     const [searchQuery, setSearchQuery] = useState("");
     const [user, setUser] = useState<User | null>(null);
     const [error, setError] = useState<Error | null>(null);
     const [isLoading, setIsLoading] = useState(false);
 
     async function handleSearch() {
       setIsLoading(true);
       setError(null);
       try {
         const response = await fetch(`https://api.github.com/users/${searchQuery}`);
         if (!response.ok) {
           throw new Error(`GitHub API returned ${response.status} ${response.statusText}`);
         }
         const data = await response.json();
         setUser({
           name: data.name ?? data.login,
           location: data.location ?? "",
           avatarUrl: data.avatar_url,
         });
       } catch (error: unknown) {
         setError(error as Error);
       } finally {
         setIsLoading(false);
       }
     }
  return (
    <Flex
     display={{ base: 'flex', md: 'none' }}
    >
     <SimpleGrid
      columns={1} 
      mt="1rem"
     >
        <Flex
            bg={firstDiv}
            w="21rem"
            h="16rem"
            flexDir="column"
            borderRadius="0.7rem 0.7rem 0 0"
            boxShadow="lg"
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
                    Github Users
                </Heading>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    mt="0.7rem"
                >
                    <InputGroup
                    >
                    <InputLeftElement
                    pointerEvents='none'
                    // eslint-disable-next-line react/no-children-prop
                    children={<Search2Icon color='black' />}
                    />
                    <Input 
                    w="14rem"
                    h="2.5rem"
                    bg={input}
                    color="black"
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    </InputGroup>
                </Flex>
                <Button
                    onClick={handleSearch}
                    mt="1rem"
                    isLoading={isLoading}
                >
                    {isLoading ? <Spinner /> : "Search"}
                </Button>
            </Flex>
        </Flex>

        {/* SecondDiv */}
        <Flex
            bg={secondDiv}
            w="21rem"
            h="22rem"
            borderRadius="0 0 0.7rem 0.7rem"
            flexDir="column"
            overflowY="scroll"
            boxShadow="lg"
            p="1.6rem"
        >
            {user && (
                <>
                    <Flex
                        flexDir="row"
                    >
                        <Image 
                            src={user.avatarUrl} 
                            alt={user.name} 
                            width={100} 
                            height={100}
                            style={{ borderRadius: '100%', width:"4rem", height:"4rem" }}
                            decoding="async"
                            priority
                        />

                        <Flex
                            flexDir="column"
                            mt="0.7rem"
                            ml="0.7rem"
                        >
                            <Heading
                                size="xs"
                            >
                                {user.name}
                            </Heading>
                            <Text
                                fontSize="0.8rem"
                            >
                                {user.location}
                            </Text>
                        </Flex>

                        <Text
                            mt="0.5rem"
                            ml="auto"
                            fontSize="1.4rem"
                        >
                            <ChatIcon/>
                        </Text>
                    </Flex>

                    <Divider 
                        orientation='horizontal' 
                        mt={["1rem","1rem","1rem","1rem"]}
                        mb={["1rem","1rem","1rem","1rem"]}
                />
                </>
            )}
        </Flex>
     </SimpleGrid> 
    </Flex>
  )
}

export default MobileView