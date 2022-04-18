import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import name from "../images/JASBEL.png";

const Footer = () => {
  return (
    <footer>
      <Box bg={'blue.footer'} p='3' paddingY={'6'} color={'white'}>
        {/* <Container> */}
        <Flex justifyContent={"space-between"} alignItems='center'>
          <Image src={name} />
          <Text>| © JAsbel 2022</Text>
        </Flex>
      </Box>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
