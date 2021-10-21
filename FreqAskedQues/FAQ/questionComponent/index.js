import React from "react";
import reactDom from "react-dom";
import { Button, ButtonGroup, Stack, HStack, Flex, Text, Input, Box } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"
import { ImSearch } from "react-icons/im";

export default function Question(){
    return(
        <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
            <Box flex="1" textAlign="left">
                Question
            </Box>
            <AccordionIcon />
        </AccordionButton>
    )
}