import Header from '@/components/header'
import { useEffect, useState } from 'react';
import { Box, Card, CardBody, CardHeader, Grid, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link';


interface Repository {
  name: string,
  description: string,
  html_url: string,
}

export default function Projects() {


  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/FilipeMSouza/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))

  }, []);

  return (
    <Box
      bg='white'
      w='100%'
      h='100vh'
      p={4}
    >
      <Header light={true} projects={true} />
      <Grid templateColumns="repeat(2, 1fr)" gap={4} pt='4rem'>
        {repositories.map(repository => {

          return (
            <GridItem>
              <Link href={repository.html_url} target="blank">
                <Card variant='elevated' size='sm'>
                  <CardHeader>
                    <Text color="gray.900" fontWeight='bold'>{repository.name}</Text>
                  </CardHeader>
                  <CardBody>
                    <Text color="gray.900" fontWeight='light'>{repository.description}</Text>
                  </CardBody>
                </Card>
              </Link>
            </GridItem>
          )
        })}
      </Grid>
    </Box >
  )
}
