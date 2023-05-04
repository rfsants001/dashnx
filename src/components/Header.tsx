import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  RiNotification2Line,
  RiSearch2Line,
  RiUserAddLine,
} from "react-icons/ri";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="5"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dash
        <Text as="span" mx="1" color="twitter.500">
          /
        </Text>
        NX
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.700"
        borderRadius="full"
      >
        <Input
          color="gray.100"
          variant="unstyled"
          placeholder="Search in platform"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearch2Line} fontSize="20" color="gray.400" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          borderRight={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotification2Line} fontSize="20" color="gray.400" />
          <Icon as={RiUserAddLine} fontSize="20" color="gray.400" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Rafael Santos</Text>
            <Text color="gray.300" fontSize="small">
              exemple@gmail.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Rafael Santos"
            src="https://github.com/rfsants001.png"
          ></Avatar>
        </Flex>
      </Flex>
    </Flex>
  );
}
