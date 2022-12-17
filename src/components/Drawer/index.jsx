import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.less'

/**
 * Drawer Drawer component
 * @param {visible} bool Whether the drawer is visible
 * @param {closable} bool Whether to display the closed button in the upper right corner
 * @param {destroyOnClose} bool Destroy the sub -element inside when closed
 * @param {getContainer} HTMLElement specify Drawer Mounted HTML node, false To mount the current dom
 * @param {maskClosable} bool Click on the mask whether the drawer is allowed to close the drawer
 * @param {mask} bool Whether to show a mask
 * @param {drawerStyle} object Used to set the drawer to pop up the layer style
 * @param {width} number|string Pop -up layer width
 * @param {zIndex} number Pop -up level
 * @param {placement} string Drawer direction
 * @param {onClose} string Click the callback when closed
 */
function Drawer(props) {
  const {
    closable = true,
    destroyOnClose,
    getContainer = document.body,
    maskClosable = true,
    mask = true,
    drawerStyle,
    width = '300px',
    zIndex = 10,
    placement = 'right',
    onClose,
    children
  } = props

  let [visible, setVisible] = useState(props.visible)
  let [isDesChild, setIsDesChild] = useState(false)

  const handleClose = () => {
    onClose && onClose()
    setVisible((prev) => {
      if (getContainer !== false && prev) {
        getContainer.style.overflow = 'auto'
      }
      return false
    })
    if (destroyOnClose) {
      setIsDesChild(true)
    }
  }

  useEffect(() => {
    setVisible(() => {
      if (getContainer !== false && props.visible) {
        getContainer.style.overflow = 'hidden'
      }
      return props.visible
    })
    setIsDesChild(false)
  }, [props.visible, getContainer])

  const childDom = (
    <div
      className="xDrawerWrap"
      style={{
        position: getContainer === false ? 'absolute' : 'fixed',
        width: visible ? '100%' : '0',
        zIndex
      }}
    >
      {!!mask && <div className="xDrawerMask" onClick={maskClosable ? handleClose : null}></div>}
      <div
        className="xDrawerContent"
        style={{
          width,
          [placement]: visible ? 0 : '-100%',
          ...drawerStyle
        }}>
        {
          isDesChild ? null : children
        }
        {
          !!closable && <span className="xCloseBtn" onClick={handleClose}>X</span>
        }
      </div>
    </div>
  )

  return getContainer === false ? childDom : ReactDOM.createPortal(childDom, getContainer)
}

Drawer.propTypes = {
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  destroyOnClose: PropTypes.bool,
  getContainer: PropTypes.element,
  maskClosable: PropTypes.bool,
  mask: PropTypes.bool,
  drawerStyle: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  zIndex: PropTypes.number,
  placement: PropTypes.string,
  onClose: PropTypes.func
}

export default Drawer