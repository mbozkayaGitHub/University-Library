import React from 'react'
import { HeaderContainer, HeaderForm, HeaderTitle, SearchInput } from './Header.style';

const Header = () => {
  return (
 <HeaderContainer>
  <HeaderTitle> Books or Magazine</HeaderTitle>
  <HeaderForm>
    <SearchInput type="text" placeholder="name" required />
  </HeaderForm>
 </HeaderContainer>

  )
}

export default Header;