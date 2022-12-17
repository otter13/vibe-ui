import { useState, useEffect } from 'react'
import Button from '../Button'
import Icon from '../Icon'
import PropTypes from 'prop-types'
import './index.less'

let hiddenCount = 0
/**
 * Modal Modal Component
 * @param {afterClose} func The callback after the modal is completely closed
 * @param {bodyStyle} object Modal Body's style
 * @param {cancelText} string|ReactNode Cancel button text
 * @param {centered} bool Middle display MODAL
 * @param {closable} bool Whether to show the closing button in the upper right corner
 * @param {closeIcon} ReactNode Customly closed icon
 * @param {destroyOnClose} bool Destruction of sub -elements in MODAL when closed
 * @param {footer} null|ReactNode The bottom content, when the bottom -default button is not required, you can set it to FOOTER={null}
 * @param {keyboard} bool Whether the ESC key that supports the keyboard exits
 * @param {mask} bool Whether to show a mask
 * @param {maskclosable} bool Click on whether the mask is allowed to be closed
 * @param {maskStyle} object Mask style
 * @param {okText} string|ReactNode Confirm the text of the button
 * @param {title} string|ReactNode title content
 * @param {visible} bool Whether the modal is visible
 * @param {width} string Modal width
 * @param {onCancel} func Click on the mask or cancel button, or the callback of the keyboard ESC button
 * @param {onOk} func Click OK to call back
 */
function Modal(props) {
  const {
    afterClose,
    bodyStyle,
    cancelText = 'Cancel',
    centered,
    closable = true,
    closeIcon,
    destroyOnClose,
    footer,
    keyboard,
    mask = true,
    maskclosable = true,
    maskStyle,
    okText = 'confirm',
    title,
    visible = false,
    width = '520px',
    onCancel,
    onOk,
    children
  } = props

  let [isHidden, setHidden] = useState(!visible)
  let [destroyChild, setDestroyChild] = useState(false)

  const hiddenModal = (cb) => {
    setHidden(() => {
      cb && cb()
      return true
    })
    if (destroyOnClose) {
      setDestroyChild(true)
    }
    document.body.style.overflow = 'auto'
  }

  const handleClose = () => {
    hiddenModal(onCancel)
  }

  const handleOk = () => {
    hiddenModal(onOk)
  }

  const toggle = () => {
    setHidden(prev => !prev)
  }

  const closeModal = function (event) {
    let e = event || window.event || arguments.callee.caller.arguments[0]
    if (e && e.keyCode === 27) {
      handleClose()
    }
  }

  useEffect(() => {
    if (isHidden && hiddenCount) {
      hiddenCount = 0
      afterClose && afterClose()
    }
    hiddenCount = 1
  }, [isHidden])

  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = 'hidden'
    }
  }, [isHidden])

  useEffect(() => {
    if (visible) {
      if (destroyOnClose) {
        setDestroyChild(true)
      }
    }
  }, [visible, destroyOnClose])

  useEffect(() => {
    keyboard && document.addEventListener('keydown', closeModal, false)
    return () => {
      keyboard && document.removeEventListener('keydown', closeModal, false)
    }
  }, [])

  return <div className="xModalWrap" style={{ display: isHidden ? 'none' : 'block' }}>
    <div
      className={`xModalContent${centered ? ' xCentered' : ''}`}
      style={{
        width
      }}
    >
      <div className="xModalHeader">
        <div className="xModalTitle">
          {title}
        </div>
      </div>
      {
        closable &&
        <span className="xModalCloseBtn" onClick={handleClose}>
          {closeIcon || <Icon type="FaTimes" />}
        </span>
      }
      <div className="xModalBody" style={bodyStyle}>
        {destroyChild ? null : children}
      </div>
      {
        footer === null ? null :
          <div className="xModalFooter">
            {
              footer ? footer :
                <div className="xFooterBtn">
                  <Button className="xFooterBtnCancel" onClick={handleClose} type="pure">{cancelText}</Button>
                  <Button className="xFooterBtnOk" onClick={handleOk}>{okText}</Button>
                </div>
            }
          </div>
      }
    </div>
    {
      mask && <div
        className="xModalMask"
        style={maskStyle}
        onClick={maskclosable && handleClose}>
      </div>
    }
  </div>
}

Modal.propTypes = {
  afterClose: PropTypes.func,
  bodyStyle: PropTypes.object,
  cancelText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  centered: PropTypes.bool,
  closable: PropTypes.bool,
  closeIcon: PropTypes.element,
  destroyOnClose: PropTypes.bool,
  footer: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.object
  ]),
  keyboard: PropTypes.bool,
  mask: PropTypes.bool,
  maskclosable: PropTypes.bool,
  maskStyle: PropTypes.object,
  okText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  visible: PropTypes.bool,
  width: PropTypes.string,
  onCancel: PropTypes.func,
  onOk: PropTypes.func
}

export default Modal

