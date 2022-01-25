import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children: string;
}

const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <ChakraLink display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize={20} />
      <Text ml={4} fontWeight="medium">
        {children}
      </Text>
    </ChakraLink>
  );
};

export default NavLink;
