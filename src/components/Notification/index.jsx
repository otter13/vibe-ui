
import Notification from 'rc-notification'
import Icon from '../Icon'
import classnames from 'classnames'
import './index.less'

const xNotification = (function () {
  let notification = null
  const adapterPos = {
    topLeft: {
      top: '24px',
      left: '24px'
    },
    topRight: {
      top: '24px',
      right: '24px'
    },
    bottomLeft: {
      bottom: '24px',
      left: '24px'
    },
    bottomRight: {
      bottom: '24px',
      right: '24px'
    }
  }

  const iconType = {
    success: 'FaRegCheckCircle',
    warning: 'FaRegMeh',
    info: 'FaRegLightbulb',
    error: 'FaRegTimesCircle'
  }

  let globalPlacement = ''
  /**
     * NOTICE type pop -up window
     * @param {config}  object Notification box configuration attribute
     *   @param {type} string Notification window type
     *   @param {btn}  ReactNode Custom off button
     *   @param {bottom}  number When the message pops up from the bottom, the distance from the bottom, the unit pixel
     *   @param {className}  string customize CSS class
     *   @param {description}  string|ReactNode Notice reminder content, must be selected
     *   @param {duration}  number default 4.5 Automatically close after second, configuration to null Do not turn off automatically
     *   @param {getContainer}  HTMLNode Configure the output location of the rendering node
     *   @param {icon}  ReactNode Custom icon
     *   @param {key}  string Current notification unique sign
     *   @param {message}  string|ReactNode Notification reminder title, must be selected
     *   @param {onClose}  func Click the callback function triggered when the default closing button
     *   @param {onClick}  func The callback function triggered when clicking notification
     *   @param {top}  number When the message pops up from the top, the position of the top, the unit pixel
     *   @param {closeIcon}  ReactNode Customly closed icon
     */
  const pop = (config) => {
    const {
      type,
      bottom,
      className,
      description,
      duration = 4.5,
      getContainer = () => document.body,
      icon,
      key,
      message,
      onClose,
      onClick,
      top,
      closable = true,
      closeIcon
    } = config
    notification.notice({
      content: <div className={classnames('xNotice', className)}>
        {
          (icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) &&
          <div className={classnames('iconWrap', type)}>
            {
              icon ? icon : <Icon type={iconType[type]} />
            }
          </div>
        }
        <div>
          <div className="xNoticeTit">
            {message}
          </div>
          <div className="xNoticeDesc">
            {description}
          </div>
        </div>
      </div>,
      key,
      closable,
      getContainer,
      onClose() {
        onClose && onClose()
      },
      onClick() {
        onClick && onClick()
      },
      closeIcon,
      duration,
      style: { top, bottom }
    })
  }

  /**
     * Notice prompt component, Global parameter
     * @param {bottom} number When the message pops up from the bottom, the distance from the bottom, unit pixel, Default 24
     * @param {duration} number Automatically close the delay in default, the unit seconds
     * @param {getContainer} HTMLNode Configure the output position of the rendering node, default Document.body
     * @param {placement} string Pop -up position, optional topLeft topRight bottomLeft bottomRight
     * @param {top} number When the message pops up from the top, the position of the top, the unit pixel
     * @param {closeIcon} HTMLNode Customly closed icon
  */
  const config = (config) => {
    const { duration, getContainer, placement, closeIcon } = config
    // Assign value to the global Placement
    globalPlacement = placement

    Notification.newInstance({
      style: { ...adapterPos[placement] },
      getContainer: getContainer,
      duration: duration || 4.5,
      closeIcon
    }, (notice) => notification = notice)
  }

  const remove = (key) => {
    notification.removeNotice(key)
  }

  const destroy = () => {
    notification.destroy()
  }

  if (notification) {
    return {
      config,
      pop,
      remove,
      destroy
    }
  }
  // If it is an instance, create a default example
  Notification.newInstance({
    style: { right: '24px', top: '24px' }
  }, (notice) => notification = notice)

  return {
    config,
    pop,
    remove,
    destroy
  }
})()

export default xNotification