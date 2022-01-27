import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Item from "./Item";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}

const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) => {
  function generatePageArray(from: number, to: number) {
    return [...new Array(to - from)]
      .map((_, index) => {
        return from + index + 1;
      })
      .filter((page) => page > 0);
  }

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);
  const previousPages =
    currentPage > 1
      ? generatePageArray(currentPage - 1 - siblingCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePageArray(
          currentPage,
          Math.min(currentPage + siblingCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt={8}
      justify="space-between"
      align="center"
      spacing={6}
    >
      <Box>
        <Text>
          <strong>{registersPerPage * currentPage - registersPerPage}</strong> -{" "}
          <strong>{registersPerPage * currentPage}</strong> of{" "}
          <strong>{totalCountOfRegisters}</strong>
        </Text>
      </Box>
      <Stack direction="row" spacing={2}>
        {currentPage > 1 + siblingCount && (
          <>
            <Item number={1} />
            {currentPage > 2 + siblingCount && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => <Item key={page} number={page} />)}

        <Item number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => <Item key={page} number={page} />)}

        {currentPage + siblingCount < lastPage && (
          <>
            {currentPage + 1 + siblingCount < lastPage && (
              <Text color="gray.300" w={8} textAlign="center">
                ...
              </Text>
            )}
            <Item number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
