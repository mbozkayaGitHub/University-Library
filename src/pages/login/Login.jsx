import React from 'react'

const Login = () => {
  return (
 <LoginContainer>
  <FormContainer>
    <Header>Login Here</Header>
    <StyleForm>
      <StyledInput type="text" placeholder="Username" />
      <StyledInput type="password" placeholder="password"/>
      <StyledButton />
    </StyleForm>
  </FormContainer>
 </LoginContainer>
  )
}

export default Login