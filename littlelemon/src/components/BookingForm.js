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
  ChakraProvider,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const ReservationSchema = Yup.object().shape({
  date: Yup.date().required('Date is required').default(() => new Date()),
  time: Yup.string().required('Time is required'),
  partySize: Yup.number().required('Party size is required'),
  occasion: Yup.string().required('Please select the occasion'),
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
          <Box className="resBox" textAlign="center" height="120px" paddingTop="40px">
            <h1 data-test-id="resTitle">Reservations</h1>
          </Box>   
          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr">
          <Box></Box>
          <Box padding="30px">
            {/* Date Field */}
            <Field name="date">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.date && form.touched.date}>
                  <FormLabel htmlFor="date" data-test-id="dateLabel">Date</FormLabel>
                  <Input className='formInput' {...field} id="date" type="date" defaultValue="12/31/2023" />
                  <FormErrorMessage className='formError'>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* Time Field
            <Field name="time">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.time && form.touched.time}>
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Input className='formInput' {...field} id="time" type="time" placeholder="Select Time" />
                  <FormErrorMessage className='formError'>{form.errors.time}</FormErrorMessage>
                </FormControl>
              )}
            </Field> */}
            
            {/* Updated Time field */}
            <Field name="time">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.time && form.touched.time}>
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Select className='formInput'{...field} id="time" placeholder="Select Time">
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </Select>
                  <FormErrorMessage className='formError'>{form.errors.time}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* Party Size Field */}
            <Field name="partySize">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.partySize && form.touched.partySize}>
                  <FormLabel htmlFor="partySize">Party Size</FormLabel>
                  <Select className='formInput' {...field} id="partySize" placeholder="Select Party Size">
                    {[...Array(10).keys()].map(i => <option value={i+1} key={i}>{i+1}</option>)}
                  </Select>
                  <FormErrorMessage className='formError'>{form.errors.partySize}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* Occasion Field */}
            <Field name="occasion">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.occasion && form.touched.occasion}>
                  <FormLabel htmlFor="occasion">Occasion</FormLabel>
                  <Select className='formInput'{...field} id="occasion" placeholder="Select Occasion">
                    <option value="JustDining">Just Dining</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                  </Select>
                  <FormErrorMessage className='formError'>{form.errors.occasion}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            {/* Table Preference Field */}
            <Field name="tablePreference">
              {({ field }) => (
                <FormControl>
                  <FormLabel htmlFor="tablePreference">Table Preference</FormLabel>
                  <Select className='formInput' {...field} id="tablePreference" placeholder="No Preference">
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
                  <Textarea className='formInput' {...field} id="comment" placeholder="" rows={4} />
                  <FormErrorMessage className='formError'>{form.errors.comment}</FormErrorMessage>
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
                <Input className='formInput'{...field} id="firstName" placeholder="" />
                <FormErrorMessage className='formError'>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>    
          {/* Last Name Field */}
          <Field name="lastName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName}>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input className='formInput'{...field} id="lastName" placeholder="" />
                <FormErrorMessage className='formError'>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Phone Number Field */}
          <Field name="phoneNumber">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}>
                <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                <Input className='formInput' {...field} id="phoneNumber" placeholder="" />
                <FormErrorMessage className='formError'>{form.errors.phoneNumber}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* Email Address Field */}
          <Field name="emailAddress">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.emailAddress && form.touched.emailAddress}>
                <FormLabel htmlFor="emailAddress">Email Address</FormLabel>
                <Input className='formInput' {...field} id="emailAddress" type="email" placeholder="" />
                <FormErrorMessage className='formError'>{form.errors.emailAddress}</FormErrorMessage>
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
            data-test-id="resButton"

          >
            Book a table
          </Button>
          </Box>
          <ChakraProvider>
          <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
            <ModalOverlay className='overlay'/>
              <ModalContent margin="180px" maxH="500px" maxW="700px" borderColor="#495E57">
                <ModalHeader fontSize="26" padding="50px" backgroundColor="#495E57" color="#FEFEFE" font-family="Karla" font-weight="800">
                <h1 className='resHeader'>Thank you for your reservation!</h1>
              </ModalHeader>
              <ModalBody backgroundColor="#FEFEFE">
                {Object.entries(submittedData).map(([key, value]) => (
                  <Box fontSize="20" key={key} textAlign="center">
                    {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                  </Box>
                ))}
              </ModalBody>
            
              <ModalFooter backgroundColor="#FEFEFE" display="grid" gridTemplateColumns="1fr 1fr 1fr">
                <Box></Box>
                <Box >
                <Button className='resButton' height="50px" backgroundColor="#F4CE14" borderRadius="16" mr={3} onClick={closeModal}>
                  Close
                </Button>
                </Box>
              </ModalFooter>
            </ModalContent>
          </Modal>
          </ChakraProvider>
        </Form>
      )}
    </Formik>
  );
};

export default ResForm;
