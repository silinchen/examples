import { Avatar, Dropdown, Icon, Input, Layout, Menu, Tooltip } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/store'
import Container from '../Container'
import {
  footerStyled,
  githubIconStyle,
  GlobalStyle,
  HeaderInner,
  HeaderLeft
} from './style'

const { Header, Content, Footer } = Layout

function MyLayout({ children, user, logout, router }) {
  const urlQuery = router.query && router.query.query
  const [search, setSearch] = useState(urlQuery || '')

  const handleSearchChange = useCallback(
    event => {
      setSearch(event.target.value)
    },
    [setSearch]
  )

  const handleOnSearch = useCallback(() => {
    router.push(`/search?query=${search}`)
  }, [search])

  const handleLogout = useCallback(() => {
    logout()
  }, [logout])

  const userDropDown = (
    <Menu>
      <Menu.Item>
        <a href='javascript:void(0)' onClick={handleLogout}>
          登 出
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout>
        <Header>
          <Container render={<HeaderInner />}>
            <HeaderLeft>
              <div className='logo'>
                <Link href='/'>
                  <Icon type='github' style={githubIconStyle} />
                </Link>
              </div>
              <div>
                <Input.Search
                  placeholder='搜索仓库'
                  value={search}
                  onChange={handleSearchChange}
                  onSearch={handleOnSearch}
                />
              </div>
            </HeaderLeft>
            <div className='header-right'>
              {user && user.id ? (
                <Dropdown overlay={userDropDown}>
                  <a href='/'>
                    <Avatar size={40} src={user.avatar_url} />
                  </a>
                </Dropdown>
              ) : (
                <Tooltip title='点击进行登录'>
                  <a href={`/prepare-auth?url=${router.asPath}`}>
                    <Avatar size={40} icon='user' />
                  </a>
                </Tooltip>
              )}
            </div>
          </Container>
        </Header>
        <Content>
          <Container>{children}</Container>
        </Content>
        <Footer style={footerStyled}>
          Develop by csl.xyz @
          <a href='mailto:215554425@qq.com'>215554425@qq.com</a>
        </Footer>
      </Layout>
    </React.Fragment>
  )
}

export default connect(
  function mapState(state) {
    return {
      user: state.user
    }
  },
  function mapReducer(dispatch) {
    return {
      logout: () => dispatch(logout())
    }
  }
)(withRouter(MyLayout))
