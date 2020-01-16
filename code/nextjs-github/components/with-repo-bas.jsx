import Link from 'next/link'
import { withRouter } from 'next/router'
import api from '../lib/api'
import { cache, get } from '../lib/repo-basic-cache'
import Repo from './Repo'
import { useEffect } from 'react'

function makeQuery(queryObj) {
  const query = Object.entries(queryObj)
    .reduce((result, entry) => {
      result.push(entry.join('='))
      return result
    }, [])
    .join('&')
  return `?${query}`
}

const isServer = typeof window === 'undefined'

export default function(Comp, type = 'index') {
  function WithDetail({ basic, router, ...rest }) {
    const query = makeQuery(router.query)
    useEffect(() => {
      if (!isServer) {
        cache(basic)
      }
    })
    return (
      <div className='root'>
        <div className='repo-basic'>
          <Repo repo={basic} />
          <div className='tabs'>
            <Link href={`/detail${query}`}>
              <a className={`tab ${type === 'index' ? 'active' : ''}`}>
                Readme
              </a>
            </Link>
            <Link href={`/detail/issues${query}`}>
              <a className={`tab ${type === 'issues' ? 'active' : ''}`}>
                Issues
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Comp {...rest} />
        </div>
        <style jsx>{`
          .root {
            padding-top: 20px;
          }
          .repo-basic {
            padding: 20px;
            border: 1px solid #eee;
            margin-bottom: 20px;
            border-radius: 5px;
          }
          .tab + .tab {
            margin-left: 20px;
          }
          .tab.active {
            color: #777;
            cursor: default;
          }
        `}</style>
      </div>
    )
  }

  WithDetail.getInitialProps = async context => {
    const { router, ctx } = context
    const { owner, name } = ctx.query
    const fullName = `${owner}/${name}`

    let pageData = {}
    if (Comp.getInitialProps) {
      pageData = await Comp.getInitialProps(context)
    }

    if (get(fullName)) {
      return {
        basic: get(fullName),
        ...pageData
      }
    }

    const repoBasic = await api.request(
      {
        url: `/repos/${fullName}`
      },
      ctx.req,
      ctx.res
    )

    return {
      basic: repoBasic.data,
      ...pageData
    }
  }

  return withRouter(WithDetail)
}
