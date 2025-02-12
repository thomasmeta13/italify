import React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Italify - Your Dream Italian Home</title>
        <meta name="description" content="Find your dream home in Italy with Italify" />
        <link rel="icon" href="/favicon.ico" />
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