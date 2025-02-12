import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box minH="100vh" bg="brand.background">
        <Navbar />
        <Box as="main">
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  )
} 