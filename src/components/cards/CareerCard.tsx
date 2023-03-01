import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, useBreakpointValue } from "@chakra-ui/react";


interface CareerCardProps {
  title: string;
  date: string;
  role: string;
  functions?: string[];
  projects?: string[];
}


export default function CareerCard({ title, date, role, functions, projects }: CareerCardProps) {


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Card>
        <CardHeader>
          <Text fontSize={isWideVersion ? '2xl' : 'xl'} fontWeight='bold'>{role}</Text>
          <Text fontSize={isWideVersion ? 'xl' : 'xl'} fontWeight='semibold'>{title}</Text>
          <Text fontSize={isWideVersion ? 'lg' : 'xs'} fontWeight='light'>{date}</Text>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='2'>
            <Box>
              <Heading size='xs' textTransform='uppercase' >
                Functions
              </Heading>
              {functions?.map((item) => {
                return (
                  <Text key={item} fontSize={isWideVersion ? 'xl' : ''} fontWeight='light'>{item}</Text>
                )
              })}
            </Box>
            <Box>

              <Heading size='xs' textTransform='uppercase' >
                Projects
              </Heading>
              {projects?.map((item) => {
                return (
                  <Text key={item} fontSize={isWideVersion ? 'xl' : ''} fontWeight='light'>{item}</Text>
                )
              })}
            </Box>
          </Stack>

        </CardBody>

      </Card>

    </>
  )
}