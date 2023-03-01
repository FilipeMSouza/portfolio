import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, useBreakpointValue } from "@chakra-ui/react";


interface QualyCardProps {
  school: string;
  date: string;
  subject: string;
  situation: string;
  description: string;
}


export default function QualyCard({ description, situation, subject, date, school}: QualyCardProps) {


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      <Card>
        <CardHeader>
          <Text fontSize={isWideVersion ? '2xl' : 'xl'} fontWeight='bold'>{school}</Text>
          <Text fontSize={isWideVersion ? 'xl' : 'xl'} fontWeight='semibold'>{subject}</Text>
          <Text fontSize={isWideVersion ? 'lg' : 'xs'} fontWeight='light'>{date}</Text>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='2'>
            <Box>
              <Heading size='xs' textTransform='uppercase' >
                Description
              </Heading>
              <Text fontSize={isWideVersion ? 'xl' : ''} fontWeight='light'>{description}</Text>
            </Box>
            <Box>
              <Heading size='xs' textTransform='uppercase' >
                Situation
              </Heading>
              <Text fontSize={isWideVersion ? 'xl' : ''} fontWeight='light'>{situation}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>

    </>
  )
}