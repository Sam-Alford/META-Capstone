import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Text, VStack } from '@chakra-ui/react';

const Confirmation = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};

  return (
    <Box p={5}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Reservation Confirmation</Text>
      <VStack spacing={3} align="flex-start">
        <Text>Date: {formData.date || 'Not specified'}</Text>
        <Text>Time: {formData.time || 'Not specified'}</Text>
        <Text>Party Size: {formData.partySize || 'Not specified'}</Text>
        <Text>Occasion: {formData.occasion || 'Not specified'}</Text>
        <Text>Table Preference: {formData.tablePreference || 'Not specified'}</Text>
        <Text>Comment: {formData.comment || 'Not specified'}</Text>
        <Text>First Name: {formData.firstName || 'Not specified'}</Text>
        <Text>Last Name: {formData.lastName || 'Not specified'}</Text>
        <Text>Phone Number: {formData.phoneNumber || 'Not specified'}</Text>
        <Text>Email Address: {formData.emailAddress || 'Not specified'}</Text>
      </VStack>
    </Box>
  );
};

export default Confirmation;
