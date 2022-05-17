import { Box, Flex,Text,Avatar} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?:boolean
}


export default function Profile({showProfileData = true}:ProfileProps) {
  return (
    <Flex align="center">
         {showProfileData && (
            <Box mr="4" textAlign="right">
            <Text>Matheus Martins</Text>
            <Text color="gray.300" fontSize="small">
              matheusmartinsdn@gmail.com
            </Text>
          </Box>
         )}

          <Avatar size='md' name="matheus martins" src="http://github.com/MatheusMdn.png"/>
        </Flex>
  )
}
