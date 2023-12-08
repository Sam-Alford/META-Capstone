import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  useToast,
  FormErrorMessage,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const ReservationSchema = Yup.object().shape({
  // ... (same as before)
});

const ResForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedData, setSubmittedData] = useState({});
  const toast = useToast();

  const handleSubmit = (values, { resetForm }) => {
    setSubmittedData(values);
    setIsModalOpen(true);
    toast({
      title: 'Reservation Ready.',
      description: 'Please confirm your reservation details.',
      status: 'info',
      duration: 5000,
      isClosable: true,
    });
    resetForm();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSubmittedData({});
  };

  return (
    <Formik
      initialValues={{
        date: '',
        time: '',
        partySize: '',
        // ... (other initial values as before)
      }}
      validationSchema={ReservationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
          {/* Existing Form Content */}
          
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Reservation Details</ModalHeader>
              <ModalCloseButton />
              <ModalBody backgroundColor="#FEFEFE">
                {Object.entries(submittedData).map(([key, value]) => (
                  <Box key={key} textAlign="center">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  </Box>
                ))}
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={closeModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

export default ResForm;
