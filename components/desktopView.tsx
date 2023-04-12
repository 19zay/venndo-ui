import React, { useEffect, useState } from 'react'
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
    Divider,
    Spinner
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

const DesktopView = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    // ColorMode
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
    justifyContent="center"
    alignItems="center"
    // overflow="hidden"
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
        h={["15rem","15rem","15rem","15rem"]}
        borderRadius="0.7rem 0.7rem 0 0"
        flexDir="column"
        boxShadow="lg"
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
            Github Users
          </Heading>
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
              color="black"
              type="text"
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </InputGroup>
          </Flex>
          <Button
            onClick={handleSearch}
            mt={["","","1rem","1rem"]}
            isLoading={isLoading}
          >
            {isLoading ? <Spinner /> : "Search"}
          </Button>
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
        // overflowY="scroll"
        boxShadow="lg"
        >
           {user && (
            <>

                <Flex
                    flexDir="row"
                    // mt={["","","","1rem"]}
                >
                  <Image 
                    src={user.avatarUrl} 
                    alt={user.name} 
                    width={100} 
                    height={100}
                    style={{ borderRadius: '100%', width:"5rem", height:"5rem" }}
                    decoding="async"
                    priority
                  />
    
                    <Flex
                        flexDir="column"
                        mt={["","","0.8rem","0.8rem"]}
                        ml={["","","1rem","1rem"]}
                    >
                        <Heading
                            size={["","","md","md"]}
                        >
                            {user.name}
                        </Heading>
                        <Text>
                          {user.location}
                        </Text>
                    </Flex>
    
                    <Text
                        mt={["","","0.4rem","0.4rem"]}
                        ml="auto"
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
            </>
           )}
            {
              error && (
                <Flex>
                  <Heading>
                    Error: :(
                  </Heading>
                </Flex>
              )
            }
      </Flex>
    </SimpleGrid>
  </Flex>
  )
}

export default DesktopView