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
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Users
        </NavLink>
      </Section>
    </Stack>
  );
};

export default Nav;
