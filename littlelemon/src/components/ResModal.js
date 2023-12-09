// import {
//     FormControl,
//     FormLabel,
//     Input,
//     Select,
//     Textarea,
//     Button,
//     useToast,
//     FormErrorMessage,
//     Box,
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//   } from '@chakra-ui/react';

// const ResModal = () => {
//     return (
//         <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
//         <ModalOverlay />
//             <ModalContent border="2px" borderColor="gray.200" borderRadius="md">
//                         <ModalHeader>Reservation Details</ModalHeader>
//                 <ModalCloseButton />
//                 <ModalBody backgroundColor="#FEFEFE">
//                     {Object.entries(submittedData).map(([key, value]) => (
//                     <Box key={key} textAlign="center">
//                         {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
//                     </Box>
//                     ))}
//                 </ModalBody>

//                 <ModalFooter>
//                     <Button colorScheme="blue" mr={3} onClick={closeModal}>
//                     Close
//                     </Button>
//                 </ModalFooter>
//             </ModalContent>
//         </Modal>
//     )
// }

// export default ResModal;