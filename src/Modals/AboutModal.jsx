import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, ListItem, Wrap, WrapItem, useDisclosure,List,ListIcon } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io5';
import { AiFillHtml5 } from 'react-icons/ai';
import {FaCss3,FaFigma} from 'react-icons/fa';
import {SiPhp} from 'react-icons/si';
import React from 'react';
import './modals.css'
import ProgressBar from '../components/ProgressBar'
export const AboutModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const handleClick = () => {
        window.open('https://wa.link/t4owmg','_blank');
        onClose(true)
      };
    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                About me
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}

            >
                <DrawerOverlay />
                <DrawerContent background='linear-gradient(120deg, #efefbb , #d4d3dd)'>
                    <div className='container-img' >
                        <DrawerCloseButton />
                        <WrapItem>
                            <Avatar size='xl' name='Samuel Guerra Luna' src='https://media.licdn.com/dms/image/D4E35AQHeLOMtn-o8KQ/profile-framedphoto-shrink_200_200/0/1700535682880?e=1702094400&v=beta&t=ewUm5PxuEfRgK8Xfmc9sDAzCkaMZ9WWGBZ_fEeneqWs' />
                        </WrapItem>
                    </div>
                    <DrawerHeader textAlign='center'
                        fontFamily='fantasy'>Hello my name is Samuel Guerra </DrawerHeader>

                    <DrawerBody>
                        <List spacing={3}>
                            <ListItem>
                                    <FaReact/>
                                    <ProgressBar valuePromise = {50} maxValuePromise = {100} color = 'lightBlue'  text= 'React'/>
                            </ListItem>
                            <ListItem>
                               
                                <ListIcon   as={IoLogoJavascript}  color='yellow.500' />
                                <ProgressBar valuePromise = {50} maxValuePromise = {100} color = 'yellow'  text= 'JavaScript'/>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={AiFillHtml5} color='orange.500' />
                                <ProgressBar valuePromise = {70} maxValuePromise = {100} color = 'orange'  text= 'HTML'/>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCss3}  color='blue.500' />
                                <ProgressBar valuePromise = {80} maxValuePromise = {100} color = 'blue'  text= 'CSS'/>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaFigma}  color='dark.100' />
                                <ProgressBar valuePromise = {70} maxValuePromise = {100} color = 'gray'  text= 'Figma'/>
                            </ListItem>
                            <ListItem>
                                <ListIcon as={SiPhp}  color='blue.100' />
                                <ProgressBar valuePromise = {60} maxValuePromise = {100} color = 'blue'  text= 'PHP'/>
                            </ListItem>
                        </List>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue' onClick={handleClick}>Contact 
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
