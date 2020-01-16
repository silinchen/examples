import withRepoBasic from '../../components/with-repo-bas'
import api from '../../lib/api'
import dynamic from 'next/dynamic'

const MdRenderer = dynamic(import('../../components/MarkdownRenderer'), {
  loading: () => <p>Loading</p>
})

function Detail({ readme }) {
  return <MdRenderer content={readme.content} isBase64={true} />
}

Detail.getInitialProps = async ({ ctx }) => {
  const { req, res } = ctx
  const { owner, name } = ctx.query
  const readmeResp = await api.request(
    {
      url: `/repos/${owner}/${name}/readme`
    },
    req,
    res
  )
  return {
    readme: readmeResp.data
  }
}

export default withRepoBasic(Detail, 'index')
