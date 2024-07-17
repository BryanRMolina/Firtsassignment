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
            <MenuItem><Link to='/products/Remeras'>Remeras</Link></MenuItem>
            <MenuItem><Link to = '/products/Buzos'>buzos</Link></MenuItem>
            <MenuItem><Link to = '/products/Pijamas'>Pijamas</Link></MenuItem>
            <MenuItem><Link to = '/products/Zapatillas'>Zapatillas</Link></MenuItem>
            <MenuItem><Link to = '/products'>Todo</Link></MenuItem>
            </MenuList>
        </Menu>
    </Flex>  )
}

export default Category