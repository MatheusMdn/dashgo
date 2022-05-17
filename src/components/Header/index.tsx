import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import NotificationNav from "./NotificationNav";
import Profile from "./Profile";
import SearchBox from "./SearchBox";
import Logo from './Logo'
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export default function Header() {
  const {onOpen} = useSidebarDrawer();


  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      mx="auto"
      h="20"
      mt="4"
      px="6"
      align="center"
    >

      {!isWideVersion && (
        <IconButton
        aria-label='Open Navigation'
        icon={<Icon as={RiMenuLine}/>}
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        >

        </IconButton>
      )}



      <Logo/>


      {isWideVersion && <SearchBox/> }

      <Flex align="center" ml="auto">
        <NotificationNav/>

        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  );
}
