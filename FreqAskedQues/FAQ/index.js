import React from "react";
import reactDom from "react-dom";
import './FAQ.css'
import Question from './questionComponent/index'
import Answer from './answerComponent/index'
import QuesAns from './quesansComponent/index'
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

function HeaderComponent(){
    return (
        <>
        <div className="headercontainer">
            <Stack spacing="3" width="80vmin">
                <Text marginTop="3" color="white" fontSize="xl" fontWeight="700">Frequently Asked Questions</Text>
                <HStack spacing="0">
                    <Input type="text" border="0" backgroundColor="white" borderRadius="0.5rem" placeholder="What are you looking for?" fontSize="80%" />
                    <Button backgroundColor="transparent" border="0" _hover={{cursor:"pointer"}}>
                        <ImSearch color="white" size="90%"/>
                    </Button>
                </HStack>
            </Stack>
        </div>
        <div className="bodycontainer">
            <div className="tabcontainer">
            <Tabs display="flex" flexDirection="row" width="100%">
                <TabList display="flex" flexDirection="column"  border="0" width="30%" display="flex" justifyContent="left">
                    <Tab border="0" >General</Tab>
                    <Tab border="0">Privacy and Security</Tab>
                    <Tab border="0">Connections</Tab>
                    <Tab border="0">Events</Tab>
                    <Tab border="0">Job Search</Tab>
                </TabList>

                <TabPanels marginY="-6" border="0">
                    <TabPanel>
                <Accordion allowToggle>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">General</Text>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>

                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowToggle>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Privacy and Security</Text>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowToggle>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Connections</Text>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowToggle>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Events</Text>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowToggle>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Job Search</Text>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                <QuesAns></QuesAns>
                </Accordion>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </div>
        </div>
        </>
    )
}
export default HeaderComponent;