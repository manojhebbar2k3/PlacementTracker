import React, { useEffect, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
} from '@chakra-ui/react'
import axios from 'axios'
const formatDate = (isoString) => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};




function EditingForm({data, setUpdated, setModal, isModal}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  // State hooks for the form fields
  const [companyName, setCompanyName] = useState(data.companyName)
  const [ctc, setCtc] = useState(data.ctc)
  const [base, setBase] = useState(data.base)
  const [codingRoundDate, setCodingRoundDate] = useState(formatDate(data.codingRoundDate))
  const [pptDate, setPptDate] = useState(formatDate(data.pptDate))
  const [interviewDate, setInterviewDate] = useState(formatDate(data.interviewDate))

  // Functions to handle input changes
  const handleCompanyNameChange = (e) => setCompanyName(e.target.value)
  const handleCtcChange = (e) => setCtc(e.target.value)
  const handleBaseChange = (e) => setBase(e.target.value)
  const handleCodingRoundDateChange = (e) => setCodingRoundDate(e.target.value)
  const handlePptDateChange = (e) => setPptDate(e.target.value)
  const handleInterviewDateChange = (e) => setInterviewDate(e.target.value)
 
  // Handle form submission
  const handleSubmit = async () => {
    const _id = data._id; 
    const formData = {
      _id,
      companyName,
      ctc,
      base,
      codingRoundDate,
      pptDate,
      interviewDate
    }
    console.log(formData)
    try{
      const newData = await axios.patch('http://localhost:8080/',formData);
      console.log(newData.data)
      setUpdated(true);
    }catch(err){
      console.error(err)
      alert('Failed to update data')
    }
    setModal(false);
    onClose(); 
  }

  useEffect(()=>{
    if(isModal){
      onOpen();
    }
    else{
      onClose();
    }
  },[isModal])
 

  return (
    <>
      <div onClick={onOpen} className='text-black w-full'>Edit</div>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit options</ModalHeader>
          <ModalCloseButton onClick={()=>setModal(false)}/>
          <ModalBody pb={6}>
            {/* Form fields */}
            <FormControl>
              <Input
                value={companyName}
                onChange={handleCompanyNameChange}
                ref={initialRef}
                placeholder='Company Name'
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                value={ctc}
                onChange={handleCtcChange}
                placeholder='CTC'
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                value={base}
                onChange={handleBaseChange}
                placeholder='Base'
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                type='date'
                value={codingRoundDate}
                onChange={handleCodingRoundDateChange}
                placeholder='Coding Round Date'
                />
            </FormControl>

            <FormControl mt={4}>
              <Input
                type='date'
                value={pptDate}
                onChange={handlePptDateChange}
                placeholder='PPT Date'
                />
            </FormControl>

            <FormControl mt={4}>
              <Input
                type='date'
                value={interviewDate}
                onChange={handleInterviewDateChange}
                placeholder='Interview Date'
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Save
            </Button>
            <Button onClick={()=>{
                setModal(false);
                onClose;
              }
            }>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default EditingForm;
