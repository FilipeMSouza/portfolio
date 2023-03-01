import { Card, CardBody, HStack, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react"

interface KnowledgeCardProps {
  icon: ElementType;
  name: string;
}

export const KnowledgeCard = ({icon, name}:KnowledgeCardProps) => {
  return (
    <Card>
      <CardBody>
        <HStack>
          <Icon as={icon}  color='brand.bsb' fontSize='24px' />
          <Text>{name}</Text>
        </HStack>
      </CardBody>
    </Card>
  )
}