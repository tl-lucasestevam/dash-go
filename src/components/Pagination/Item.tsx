import { Button } from "@chakra-ui/react";

interface ItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

const Item = ({ number, isCurrent = false, onPageChange }: ItemProps) => {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme="pink"
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
};

export default Item;
