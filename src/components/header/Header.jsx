import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style';

const Header = () => {
  return (
 <HeaderContainer>
  <HeaderTitle> Books or Magazine</HeaderTitle>
  <HeaderForm>
    <SearchInput type="text" placeholder="name" required />

    <SelectBox>
      <option value="">All</option>
    </SelectBox>
    <HeaderButton type="submit" >
Search
    </HeaderButton>
  </HeaderForm>
 </HeaderContainer>

  )
}

export default Header;