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
import Question from '../questionComponent/index'
import Answer from '../answerComponent/index'


export default function QuesAns(){
    return (
        <AccordionItem border="0">
            <Question></Question>
            <Answer></Answer>
        </AccordionItem>
    )
}