import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  #__next{
    height:100%;
  }
  .ant-layout{
    min-height:100%;
  }
  .ant-layout-header{
    padding-left:0;
    padding-right:0;
  }
  .ant-layout-content{
    background:#fff
  }
`

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  paddingTop: 10,
  marginRight: 20
}

export const footerStyled = {
  textAlign: 'center'
}

export const content = {
  color: 'red'
}
