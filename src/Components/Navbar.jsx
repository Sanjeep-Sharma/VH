import React, {useState} from 'react'
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom'
import Upload from './Upload';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: relative; 
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 15px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text}
`;

const SigninButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
/* const Button = styled.button`
display: flex;
align-items: center;
  padding: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;
`; */
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
  margin-right: 10px;
`;

const Navbar = ({ darkMode, setDarkMode}) => {
  const [open,setOpen] = useState(false)
  return (
    <>
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <User>
        <Brightness4Icon onClick={()=> setDarkMode(!darkMode)}/>
        <FileUploadIcon onClick={()=> setOpen(true)}/>
        <Link to="/channel">
        <Avatar src='https://avatars.githubusercontent.com/u/100000000?v=4' />
        </Link>
        </User>
          <Link to="signin" style={{ textDecoration: "none" }}>
            <SigninButton>
              <AccountCircleIcon /> SIGN IN
            </SigninButton>
          </Link>
      </Wrapper>
    </Container>
    {open && <Upload setOpen={setOpen}/>}
    </>
  )
}

export default Navbar