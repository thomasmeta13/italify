import { Box, Container, Heading, Text, SimpleGrid, Button, VStack, Image } from '@chakra-ui/react'
import Head from 'next/head'

const TourCard = ({ title, description, imageUrl }) => (
  <Box bg="white" borderRadius="lg" overflow="hidden" shadow="md">
    <Image src={imageUrl} alt={title} h="200px" w="full" objectFit="cover" />
    <Box p={6}>
      <Heading as="h3" size="md" mb={3}>
        {title}
      </Heading>
      <Text mb={4}>{description}</Text>
      <Button>Plan Your Adventure</Button>
    </Box>
  </Box>
)

export default function TripsAndTours() {
  return (
    <>
      <Head>
        <title>Italian Tours & Experiences | Italify</title>
        <meta 
          name="description" 
          content="Experience the best of Italy with our curated tours. Discover authentic Italian culture, landscapes, and cuisine."
        />
      </Head>
      
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12} align="center" textAlign="center">
          <Heading as="h1" size="2xl">
            Discover Italy, One Unforgettable Experience at a Time
          </Heading>
          
          <Text fontSize="xl" maxW="3xl">
            Immerse yourself in the beauty of Italy with our expertly curated tours, designed to 
            showcase the best of the country's culture, landscapes, and cuisine.
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            <TourCard 
              title="Tuscany Wine Tour"
              description="Indulge in the Chianti region's finest vineyards, where rolling hills and exquisite wines meet unforgettable experiences."
              imageUrl="/images/tuscany-wine.jpg"
            />
            <TourCard 
              title="Amalfi Coast Experience"
              description="Journey through the stunning Amalfi Coast, where dramatic cliffs meet crystal-clear waters and charming coastal towns."
              imageUrl="/images/amalfi-coast.jpg"
            />
            <TourCard 
              title="Rome Cultural Journey"
              description="Walk through centuries of history in the Eternal City, discovering hidden gems and iconic landmarks alike."
              imageUrl="/images/rome-culture.jpg"
            />
          </SimpleGrid>
        </VStack>
      </Container>
    </>
  )
} 