import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./Link";
import Section from "./Section";

const Nav = () => {
  return (
    <Stack spacing={12} align="flex-start">
      <Section title="General">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Users</NavLink>
      </Section>
      <Section title="Automatic">
        <NavLink icon={RiInputMethodLine}>Forms</NavLink>
        <NavLink icon={RiGitMergeLine}>Automatic</NavLink>
      </Section>
    </Stack>
  );
};

export default Nav;
