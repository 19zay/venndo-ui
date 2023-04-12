import Head from 'next/head'
import {
  Flex
 } from '@chakra-ui/react'
import DesktopView from '../../components/desktopView'
import MobileView from '../../components/mobileView'


export default function Home() {

  return (
    <>
      <Head>
        <title>VENNDO</title>
        <meta name="description" content="VENNDO TASK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Page */}
      <Flex
        justifyContent="center"
        alignItems="center"
      >
        <DesktopView/>
        <MobileView/>
      </Flex>
    </>
  )
}
