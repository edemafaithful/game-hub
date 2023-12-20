import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchIInput from "./SearchIInput";

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px" />
      <SearchIInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
 