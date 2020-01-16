import 'github-markdown-css'
import MarkdownIt from 'markdown-it'
import { memo, useMemo } from 'react'

const md = new MarkdownIt({
  html: true,
  linkify: true
})

function b64_to_utf8(str) {
  return decodeURIComponent(escape(atob(str)))
}

const MdRenderer = memo(function MdRender({ content, isBase64 }) {
  const markdown = isBase64 ? b64_to_utf8(content) : content

  const html = useMemo(() => md.render(markdown), [markdown])

  return (
    <div className='markdown-body'>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
})

export default MdRenderer
