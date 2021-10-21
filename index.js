import ReactDOM from 'react-dom';
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ConnectionsPath from './ConnectionsPath';
import PreRegister from './PreRegister/index'
import FreqAskedQues from './FreqAskedQues'

{/* <FormControl id="email" border="0px">
    <FormLabel fontWeight="600" fontSize="70%">E-mail</FormLabel>
  <Input type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="email@email.com" fontSize="80%" />
</FormControl>
<FormControl id="whatsappnumber" border="0px">
    <FormLabel fontWeight="600" fontSize="70%">Whatsapp number (Optional)</FormLabel>
  <Input type="text" border="0" backgroundColor="#d5e9ff" borderRadius="0.5rem" placeholder="+91 123456789" fontSize="80%" />
</FormControl> */}

ReactDOM.render(
    <ChakraProvider>
        <FreqAskedQues/>
    </ChakraProvider>
,document.getElementById('root'));