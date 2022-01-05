import { Box, Flex, HStack, Button } from '@chakra-ui/react'

export function TopBanner() {
  return (
    <Box
      bgImage="url('images/fist-bump.jpg')"
      bgPosition="top"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="520px"
    >
      <Flex
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.7)"
        justify="center"
        align="center"
        pb="8"
      >
        <Flex
          h="100%"
          maxW="75%"
          w="100%"
          direction="column"
          align="center"
          justify="flex-end"
        >
          <HStack spacing="8">
            <Button bg="#E76F51" color="white" size="lg">
              Saiba Mais
            </Button>
            <Button
              variant="outline"
              borderWidth="2px"
              borderColor="white"
              color="white"
              size="lg"
            >
              Contato
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  )
}