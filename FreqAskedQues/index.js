import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import { Button, ButtonGroup, Stack, HStack, Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { FaWhatsapp, FaDiscord, FaTwitter } from 'react-icons/fa'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import FAQ from './FAQ/index'
import './freqaskedques.css'

export default function FreqAskedQues(){
    return(
        <div className="faqdummycontainer">
            <FAQ/>
        </div>
    )
}