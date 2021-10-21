import React from "react";
import reactDom from "react-dom";
import './headerComponent.css'
import Question from './questionComponent/index'
import Answer from './answerComponent/index'
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
                <Accordion allowMultiple>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">General</Text>
                <AccordionItem border="0">
                    <h2>
                        <Question>
                            What is Engineer’s Cradle?
                        </Question>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Signing in and out of your account
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        What is student and professional account? 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Accessing Engineer’s Cradle learning
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowMultiple>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Privacy and Security</Text>
                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowMultiple>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Connections</Text>
                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowMultiple>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">Job Search</Text>
                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                </Accordion>
                    </TabPanel>
                    <TabPanel>
                <Accordion allowMultiple>
                <Text color="#3994f5" fontSize="xl" fontWeight="600">General</Text>
                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

                <AccordionItem border="0">
                    <h2>
                    <AccordionButton _expanded={{ bg: "#a6d1ff", color: "black" }} marginTop="2" backgroundColor="#e7f2ff" borderRadius="0.5rem" _hover={{backgroundColor:"#a6d1ff", transition:"0.1s linear"}}>
                        <Box flex="1" textAlign="left">
                        Question 1
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <Answer></Answer>
                </AccordionItem>

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