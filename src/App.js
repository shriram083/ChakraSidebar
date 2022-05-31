import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Icon } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings  } from 'react-icons/fi';

import './App.css';

function App() {
  return (
    <div className="App">
      <Flex
        minWidth='max-content'
        alignItems='flex-start'
        gap='5'
        flexDirection='column'
        bg='white'
        maxWidth='300px'
        height='100vh'
        paddingLeft={10}
        
        
      >
        <Heading fontSize='22px' m='20px'>Logo</Heading>
        <Flex flexDirection='row'
              alignItems='center'
              width='200px'
              _hover={{ bg: "blue.300",color:'white' }}
              p='18px'
              borderRadius='10px'
              mt='-10px'
              cursor='pointer'>
            <FiHome fontSize='30px' />
            <Heading fontSize='15px' fontWeight='500' ml='30px' >Home</Heading>
        </Flex>
        <Flex flexDirection='row'
              alignItems='center'
              width='200px'
              _hover={{ bg: "blue.300",color:'white' }}
              p='18px'
              borderRadius='10px'
              mt='-10px'
              cursor='pointer'>
            <FiTrendingUp fontSize='30px' />
            <Heading fontSize='15px' fontWeight='500' ml='30px' >Trending</Heading>
        </Flex>
        <Flex flexDirection='row'
              alignItems='center'
              width='200px'
              _hover={{ bg: "blue.300",color:'white' }}
              p='18px'
              borderRadius='10px'
              mt='-10px'
              cursor='pointer'>
            <FiCompass  fontSize='30px' />
            <Heading fontSize='15px' fontWeight='500' ml='30px' >Explore</Heading>
        </Flex>
        <Flex flexDirection='row'
              alignItems='center'
              width='200px'
              _hover={{ bg: "blue.300",color:'white' }}
              p='18px'
              borderRadius='10px'
              mt='-10px'
              cursor='pointer'>
            <FiStar  fontSize='30px' />
            <Heading fontSize='15px' fontWeight='500' ml='30px' >Favourites</Heading>
        </Flex>
        <Flex flexDirection='row'
              alignItems='center'
              width='200px'
              _hover={{ bg: "blue.300",color:'white' }}
              p='18px'
              borderRadius='10px'
              mt='-10px'
              cursor='pointer'>
            <FiSettings fontSize='30px' />
            <Heading fontSize='15px' fontWeight='500' ml='30px' >Setting</Heading>
        </Flex>
        
      </Flex>
    </div>
  );
}

export default App;
