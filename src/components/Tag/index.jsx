import React from 'react'
import classnames from 'classnames'
import './index.less'

/**
 * Label
 * @param {closable} boolean Whether it can be closed
 * @param {onClose} func The callback when the label is closed
 * @param {color} string Colors of label,No setting is the default color
 */
export default function Tag(props) {
  let { children, closable, onClose, color } = props
  let tag = React.createRef()
  let handleClose = () => {
    onClose && onClose()
    tag.current.style.display = 'none'
  }
  return <div
    className={classnames('xTag', color ? 'xTagHasColor' : '')}
    style={{ backgroundColor: color }}
    ref={tag}>
    {children}
    {closable && <span className="closeBtn" onClick={handleClose}>x</span>}
  </div>
}