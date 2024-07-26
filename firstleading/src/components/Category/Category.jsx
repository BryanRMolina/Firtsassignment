import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Heading,
    Button,
    Flex,
  } from "@chakra-ui/react";
  import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Category = () => {

  return (
    <Flex className="Categoryy" justify={'space-between'} align={'center'} height={'10vh'} w={'14%'}>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>
            Categorias
            </MenuButton>
            <MenuList>
            <Link to='/Remeras' style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem> Remeras </MenuItem>
            </Link>
            <Link to = '/Buzos' style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem> buzos </MenuItem>
            </Link>
            <Link to = '/Pijamas' style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem> Pijamas</MenuItem>
            </Link>
            <Link to = '/Zapatillas' style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem>  Zapatillas </MenuItem>
            </Link>
            <Link to = '/' style={{ textDecoration: 'none', color: 'inherit'}}>
              <MenuItem> Todo </MenuItem>
            </Link>
            </MenuList>
        </Menu>
    </Flex>  )
}

export default Category