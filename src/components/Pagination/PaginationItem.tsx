import { Button } from "@chakra-ui/react";

interface PaginationProps {
  isCurrent?: boolean;
  number: number;
}

export default function PaginationItem({
  isCurrent = false,
  number,
}: PaginationProps) {
  if (isCurrent) {
    <Button
      w="4"
      colorScheme="pink"
      size="sm"
      fontSize="xs"
      disabled
      _disabled={{
        bgColor: "pink.500",
        cursor: "default",
      }}
    >
      {number}
    </Button>;
  }
  return (
    <Button
      w="4"
      size="sm"
      fontSize="xs"
      bgColor="gray.700"
      _hover={{
        bgColor: "gray.500",
      }}
    >
      {number}
    </Button>
  );
}
