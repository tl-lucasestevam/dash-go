import { Button } from "@chakra-ui/react";

interface ItemProps {
  number: number;
  isCurrent?: boolean;
}

const Item = ({ number, isCurrent = false }: ItemProps) => {
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
    >
      {number}
    </Button>
  );
};

export default Item;
