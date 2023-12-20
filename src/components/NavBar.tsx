import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchIInput from "./SearchIInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px" />
      <SearchIInput onSearch={onSearch}/>
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
 