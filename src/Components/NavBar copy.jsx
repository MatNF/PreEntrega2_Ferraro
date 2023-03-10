import React from "react";
import CartWidget from "./CartWidget";
import Account from "./Account";
import SeachBar from "./SeachBar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Logo from "../assets/paw.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBarCopy = () => {
  return (
    <>
      <Flex
        maxW="100%"
        height="4rem"
        align="center"
        // justify="center"
        gap="2"
        bg="#24252a"
      >
        {/* Agrego Logo*/}
        <Heading size="md" marginLeft="20px">
          <Link to={"/"}>
            <Image src={Logo} alt="logo" width="60px" height="50px" />
          </Link>
        </Heading>

        {/* Agrego Brand*/}
        <Heading color="white" size="md">
          Pawsitively
        </Heading>

        {/* Agrego campo de categorías */}
        <Menu>
          <MenuButton
            marginLeft="30px"
            marginRight="0px"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color="white"
            variant="ghost"
            height="2em"
            width="auto"
            _hover={{ variant: "outline", bg: "#4faabf" }}
            _active={{ bg: "#4faabf" }}
          >
            Categorías
          </MenuButton>
          <MenuList>
            <NavLink to={"/categoria/iPhone"}>
              <MenuItem minH="48px" color="black">
                <span>iPhone</span>
              </MenuItem>
            </NavLink>
            <NavLink to={"/categoria/iPad"}>
              <MenuItem minH="40px" color="black">
                <span>iPad</span>
              </MenuItem>
            </NavLink>
          </MenuList>
        </Menu>

        {/* Agrego campos de linkeo */}

        <Flex>
          <Box as="ul" color="white" listStyleType="none">
            <NavLink to={"/"}>
              <Button
                color="white"
                marginLeft="0px"
                variant="ghost"
                height="2em"
                width="auto"
                padding="auto"
                _hover={{ variant: "outline", bg: "#4faabf" }}
                _active={{ bg: "#4faabf" }}
              >
                Ofertas
              </Button>
            </NavLink>
            <NavLink to={"/"}>
              <Button
                marginLeft="5px"
                color="white"
                variant="ghost"
                height="2em"
                width="auto"
                padding="auto"
                _hover={{ variant: "outline", bg: "#4faabf" }}
                _active={{ bg: "#4faabf" }}
              >
                Nuevos ingresos
              </Button>
            </NavLink>
            <NavLink to={"/"}>
              <Button
                marginLeft="5px"
                color="white"
                variant="ghost"
                height="2em"
                width="auto"
                padding="auto"
                _hover={{ variant: "outline", bg: "#4faabf" }}
                _active={{ bg: "#4faabf" }}
              >
                Blog
              </Button>
            </NavLink>
          </Box>
        </Flex>

        <Spacer />

        <SeachBar />

        {/* Agrego sección de perfil*/}
        <Button
          rounded="11"
          color="white"
          marginLeft="10px"
          // bg="#0088a9"
          variant="ghost"
          variantcolor="#0088a9"
          _hover={{ bg: "#4faabf" }}
          size="md"
          height="2em"
          width="6.5em"
        >
          <Account />
          Account
        </Button>

        {/* Agrego boton de icono de carrito CartWidget */}
        <NavLink to={"/cart"}>
          <Button
            rounded="11"
            color="white"
            marginLeft="10px"
            marginRight="20px"
            // bg="#0088a9"
            variant="ghost"
            variantcolor="#0088a9"
            _hover={{ bg: "#4faabf" }}
            size="md"
            height="2em"
            width="5em"
          >
            <CartWidget />
            Cart
          </Button>
        </NavLink>
      </Flex>
    </>
  );
};

export default NavBarCopy;
