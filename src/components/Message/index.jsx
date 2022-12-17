
import Notification from 'rc-notification'
import Icon from '../Icon'
import classnames from 'classnames'
import 'rc-notification/assets/index.css'
import './index.less'

const xMessage = (function () {
  let message = null

  const iconType = {
    success: 'FaRegCheckCircle',
    warning: 'FaRegMeh',
    info: 'FaRegLightbulb',
    error: 'FaRegTimesCircle'
  }
  /**
     * NOTICE type pop -up window
     * @param {config}  object Prompt box configuration attribute
     *   @param {type} string Prompt window type
     *   @param {btn}  ReactNode Custom off button
     *   @param {className}  string customize CSS class
     *   @param {duration}  number default 4.5 Automatically close after second, configuration to null Do not turn off automatically
     *   @param {getContainer}  HTMLNode Configure the output location of the rendering node
     *   @param {icon}  ReactNode Custom icon
     *   @param {key}  string The current prompt uniform logo
     *   @param {content}  string|ReactNode Title, must choose
     *   @param {onClose}  func Click the callback function triggered when the default closing button
     *   @param {onClick}  func The callback function triggered when clicking the prompt
     *   @param {top}  number When the message pops up from the top, the position of the top, the unit pixel
     *   @param {closeIcon}  ReactNode Customly closed icon
     */
  const pop = (config) => {
    const {
      type,
      className,
      duration = 4.5,
      getContainer = () => document.body,
      icon,
      key,
      content,
      onClose,
      onClick,
      top,
      closable = true,
      closeIcon
    } = config
    message.notice({
      content: <div className={classnames('xMessage', className)}>
        {
          (icon || ['info', 'success', 'error', 'warning'].indexOf(type) > -1) &&
          <div className={classnames('iconWrap', type)}>
            {
              icon ? icon : <Icon type={iconType[type]} />
            }
          </div>
        }
        <div className="xNoticeTit">
          {content}
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
      style: { top }
    })
  }

  /**
     * Prompt prompt component, Global parameter
     * @param {duration} number Automatically close the delay in default, the unit seconds
     * @param {getContainer} HTMLNode Configure the output position of the rendering node, default Document.body
     * @param {closeIcon} HTMLNode Customly closed icon
  */
  const config = (config) => {
    const { duration, getContainer, closeIcon } = config

    Notification.newInstance({
      getContainer: getContainer,
      duration: duration || 4.5,
      closeIcon
    }, (notice) => message = notice)
  }

  const remove = (key) => {
    message.removeNotice(key)
  }

  const destroy = () => {
    message.destroy()
  }

  if (message) {
    return {
      config,
      pop,
      remove,
      destroy
    }
  }
  // If it is an instance, create a default example
  Notification.newInstance({}, (notice) => message = notice)

  return {
    config,
    pop,
    remove,
    destroy
  }
})()

export default xMessage