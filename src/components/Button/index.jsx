import classnames from 'classnames'
import './index.less'

/**
 * @param {onClick} func Clicks of exposed to the outside world
 * @param {className} string Customized class name
 * @param {type} string Button type: primary | warning | info | default | pure
 * @param {shape} string Button shape: circle | radius(默认)
 */
// Button component
export default function Button(props) {
  let { children, onClick, className, type, shape, block } = props
  return <div className={classnames('xButton', 'ripple', type, shape, block ? 'block' : '', className)} onClick={onClick}>
    {children}
  </div>
}