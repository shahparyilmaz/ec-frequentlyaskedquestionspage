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

export default function Answer(){
    return (
            <AccordionPanel mt={2} pb={4} border="2px solid #a6d1ff" borderRadius="0.5rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio recusandae, aperiam totam blanditiis voluptas labore dolor error beatae vel.
            </AccordionPanel>
    )
}