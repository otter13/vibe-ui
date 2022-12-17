import { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

/**
 * Warning prompt component
 * @param {style} object Change the alert style
 * @param {closable} bool Whether to display the closed button, Do not display by default
 * @param {closeText} string|reactNode Custom off button
 * @param {message} string Warning prompt content
 * @param {description} string Auxiliary text of warning prompts
 * @param {type} string Type of warning
 * @param {onClose} func Event triggered when closed
 */
function Alert(props) {
  const {
    style,
    closable,
    closeText,
    message,
    description,
    type,
    onClose
  } = props
  let [visible, setVisible] = useState(true)

  const handleColse = () => {
    setVisible(false)
    onClose && onClose()
  }
  return visible ?
    <div
      className={classnames('xAlertWrap', type || 'warning')}
      style={{
        opacity: visible ? '1' : '0',
        ...style
      }}
    >
      <div className='alertMes'>{message}</div>
      <div className='alertDesc'>{description}</div>
      {
        !!closable && <span className='closeBtn' onClick={handleColse}>{closeText ? closeText : 'x'}</span>
      }
    </div> : null
}

Alert.propTypes = {
  style: PropTypes.object,
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  message: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  onClose: PropTypes.func
}

export default Alert

