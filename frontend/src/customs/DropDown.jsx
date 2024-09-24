import React,{useState} from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    useStatStyles,
    useDisclosure
  } from '@chakra-ui/react'
import EditingForm from './EditingForm'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import DeleteConfirmationModal from './DeleteModal';


function DropDown({onDelete, index, data, setupdated}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModal, setModal] = useState(false)  


  const confirmDelete = () => {
    // console.log('Item deleted:');
    onDelete(index)
    onClose(); 
  };

  return (
    <div>
    <Menu>
        <MenuButton as={Button}>
            Menu
        </MenuButton>
        <MenuList>
            <MenuItem minH='48px' className='hover:bg-blue-500 hover:font-bold' onClick={()=> setModal(true)}>
            <div className='flex items-center gap-2 ' >
              <FaEdit  className='size-8 text-black ml-2'/>
              <EditingForm data={data} setUpdated={setupdated} setModal={setModal} isModal={isModal} /> 
            </div>
            
            </MenuItem>
            <MenuItem minH='48px' className='hover:bg-red-500 hover:font-bold' onClick={()=>{
              onOpen();
              
            }}>
            <div className='flex items-center gap-2 '>
              <MdDeleteForever className='size-6 text-black'/>
              <span className='text-black '>Delete</span>
            </div>
            </MenuItem>
        </MenuList>
    </Menu>
    <DeleteConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onDelete={confirmDelete}
    />
    </div>
  )
}

export default DropDown