import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import React from 'react'

function Social() {
  return (
    <HStack spacing={20}>
      <Icon as={FaFacebook} boxSize="50" />
      <Icon as={FaGithub} boxSize="50" />
      <Icon as={FaInstagram} boxSize="50" />
      <Icon as={FaLinkedin} boxSize="50" />
    </HStack>
  )
}

export default Social;