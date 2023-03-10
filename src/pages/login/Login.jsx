import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledInput } from './Login.style'

const Login = () => {
  return (
 <LoginContainer>
  <FormContainer>
    <Header>Login Here</Header>
    <StyledForm>
      <StyledInput type="text" placeholder="Username" />
      <StyledInput type="password" placeholder="password"/>
      <StyledButton />
    </StyledForm>
  </FormContainer>
 </LoginContainer>
  )
}

export default Login