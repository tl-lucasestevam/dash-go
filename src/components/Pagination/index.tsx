import { Box, Button, Stack } from "@chakra-ui/react";
import Item from "./Item";

const Pagination = () => {
  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing={2}>
        <Item number={1} isCurrent />
        <Item number={2} />
        <Item number={3} />
        <Item number={4} />
        <Item number={5} />
      </Stack>
    </Stack>
  );
};

export default Pagination;
