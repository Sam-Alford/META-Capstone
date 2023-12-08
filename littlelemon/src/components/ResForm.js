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
  date: Yup.date().default(() => new Date()),
  time: Yup.string().required('Time is required'),
  partySize: Yup.number().required('Party size is required'),
  occasion: Yup.string(),
  tablePreference: Yup.string(),
  comment: Yup.string().max(500, 'Comment must be 500 characters or less'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number is not valid')
    .required('Phone number is required'),
  emailAddress: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
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
        occasion: '',
        tablePreference: '',
        comment: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
      }}
      validationSchema={ReservationSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <Form>
         <Box className="resBox" textAlign="center" padding="30px">
         <h1>Reservations</h1>
        </Box>   
         <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
          <Box></Box>
          <Box padding="30px">
          {/* Date Field */}
          <Field name="date">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.date && form.touched.date}>
                <FormLabel htmlFor="date">Date</FormLabel>
                <Input {...field} id="date" type="date" placeholder="Select Date" />
                <FormErrorMessage>{form.errors.date}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Time Field */}
          <Field name="time">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.time && form.touched.time}>
                <FormLabel htmlFor="time">Time</FormLabel>
                <Input {...field} id="time" type="time" placeholder="Select Time" />
                <FormErrorMessage>{form.errors.time}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Party Size Field */}
          <Field name="partySize">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.partySize && form.touched.partySize}>
                <FormLabel htmlFor="partySize">Party Size</FormLabel>
                <Select {...field} id="partySize" placeholder="Select Party Size">
                  {[...Array(10).keys()].map(i => <option value={i+1} key={i}>{i+1}</option>)}
                </Select>
                <FormErrorMessage>{form.errors.partySize}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Occasion Field */}
          <Field name="occasion">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select {...field} id="occasion" placeholder="Just dining">
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            )}
          </Field>

          {/* Table Preference Field */}
          <Field name="tablePreference">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="tablePreference">Table Preference</FormLabel>
                <Select {...field} id="tablePreference" placeholder="No Preference">
                  <option value="Inside">Inside</option>
                  <option value="Outside">Outside</option>
                </Select>
              </FormControl>
            )}
          </Field>

          {/* Comment Field */}
          <Field name="comment">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.comment && form.touched.comment}>
                <FormLabel htmlFor="comment">Comment</FormLabel>
                <Textarea {...field} id="comment" placeholder="Your Comment" rows={4} />
                <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          </Box>
          <Box padding="30px">
          {/* First Name Field */}
          <Field name="firstName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName}>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input {...field} id="firstName" placeholder="First Name" />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>    
          {/* Last Name Field */}
          <Field name="lastName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input {...field} id="lastName" placeholder="Last Name" />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Phone Number Field */}
          <Field name="phoneNumber">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <Input {...field} id="phoneNumber" placeholder="Phone Number" />
                <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Email Address Field */}
          <Field name="emailAddress">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.emailAddress && form.touched.emailAddress}>
                <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
                <Input {...field} id="emailAddress" type="email" placeholder="Email Address" />
                <FormErrorMessage>{form.errors.emailAddress}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          </Box>
        </Box>
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" padding="40px" marginLeft="100px">
          <Box></Box>
          <Button className='resButton'
            mt={4}
            colorScheme="blue"
            isLoading={props.isSubmitting}
            type="submit"
            height="50px"
            width="200px"

          >
            Book a table
          </Button>
          </Box>
          <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
            <ModalOverlay />
            <ModalContent border="2px" borderColor="gray.200" borderRadius="md">
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
