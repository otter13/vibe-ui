import React, { useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

/**
 * Input component
 * @param {icon} ReactNode Whether to bring icon
 * @param {defaultValue} string Input box default content
 * @param {id} string Input box ID
 * @param {className} string The class name of the input box
 * @param {style} object The style of the input box
 * @param {placeholder} string Input box occupied symbols
 * @param {type} string Input box type
 * @param {autoFocus} bool Whether the input box automatically focuses
 * @param {value} string The value of the input box
 * @param {onChange} func The callback when the input box changes
 * @param {onIconClick} func The callback when the icon button is clicked
 */
function Input(props) {
  const {
    icon,
    defaultValue,
    id,
    className,
    type = 'text',
    value,
    onChange,
    style,
    autoFocus,
    placeholder = 'Please enter the content',
    onIconClick
  } = props

  let textInput = React.createRef()

  const handleChange = (e) => {
    onChange && onChange(e.target.value)
  }

  const handleIconClick = () => {
    onIconClick && onIconClick(textInput.current.value)
  }

  useEffect(() => {
    autoFocus && textInput.current.focus()
  }, [])
  return <div className="xInputWrap">
    <input
      className={classnames('xInputInner', className)}
      type={type}
      id={id}
      ref={textInput}
      style={style}
      placeholder={placeholder}
      value={value || typeof value === 'undefined' ? defaultValue : ''}
      onChange={handleChange}
    />
    {
      !!icon && <span className="xIconInput" onClick={handleIconClick}>{icon}</span>
    }
  </div>
}

Input.propTypes = {
  icon: PropTypes.element,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  style: PropTypes.object,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onIconClick: PropTypes.func
}

export default Input

