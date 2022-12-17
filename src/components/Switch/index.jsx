import { useState } from 'react'
import classnames from 'classnames'
import './index.less'

/**
 * switch
 * @param {onClick} func Clicks of exposed to the outside world
 * @param {checked} bool Whether it is selected
 * @param {disabled} bool Whether
 * @param {onText} string Text of the state
 * @param {offText} string Turn off the text
 * @param {onChange} func Text when state switching
 * @param {size} string The size of the component
 */
export default function Switch(props) {
  let { color = '#09f', className, checked, disabled, onText, offText, onChange, size } = props
  let handleChange = (e) => {
    e.persist()
    onChange && onChange(e.target.checked)
  }
  return <div className={classnames('xSwitch', className)}>
    <label className={classnames('xSwitchInner', size)} style={{ pointerEvents: disabled ? 'none' : 'default', cursor: disabled ? 'not-allowed' : 'pointer' }}>
      <input type='checkbox' checked={checked} onChange={handleChange} />
      <span
        className="xSwitchAnimatingNode"
        style={{ backgroundColor: color }} data-onText={onText}>
      </span>
      <span className="offText">{offText}</span>
    </label>
  </div>
}