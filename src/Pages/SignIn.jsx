import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: calc(100vh - 56px);
color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: ${({ theme }) => theme.bgLighter};
border: 1px solid ${({ theme }) => theme.soft};
padding: 20px 50px;
gap: 10px;
`;

const Title = styled.h1`
font-size: 24px;`
const SubTitle = styled.h2`
font-size: 18px;
font-weight: 300;`;
const Input = styled.input`
border: 1px solid ${({ theme }) => theme.soft};
border-radius: 5px;
padding: 10px;
background-color: transparent;
width: 100%;
color: ${({ theme }) => theme.text}
`
const Button = styled.button`
border-radius: 5px;
border: none;
padding: 10px 20px;
font-weight: 500;
cursor: pointer;
background-color: ${({ theme }) => theme.soft};
color: ${({ theme }) => theme.textSoft}
`


const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue to VideoHub</SubTitle>
            <Input placeholder="Email" />
            <Input type='password' placeholder="Password" />
            <Button>Sign In</Button>
            <Title>or</Title>
            <Input placeholder='username'/>
            <Input placeholder="Email" />
            <Input type='password' placeholder="Password" />
            <Button>Sign Up</Button>
        </Wrapper>
    </Container>
  )
}

export default SignIn