import { style } from './style'
import { cloneElement } from 'react'

export default ({ children, render = <div /> }) => {
  const newElement = cloneElement(render, {
    style: Object.assign({}, render.props.style, style),
    children
  })

  return newElement
}
