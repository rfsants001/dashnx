import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiArticleLine,
  RiContactsLine,
  RiDashboardLine,
  RiGitBranchLine,
  RiInputMethodLine,
} from "react-icons/ri";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" alignItems="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiContactsLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Users
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            AUTOMATION
          </Text>
          <Stack spacing="4" align="stretch" mt="8">
            <Link display="flex" alignItems="center">
              <Icon as={RiArticleLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Forms
              </Text>
            </Link>

            <Link display="flex" alignItems="center">
              <Icon as={RiGitBranchLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Automation
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
