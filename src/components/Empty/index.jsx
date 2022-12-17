import Icon from '../Icon'
import classnames from 'classnames'
import './index.less'

/**
 * Empty state component
 * @param {className} string Customized class name
 * @param {src} string The picture address of the empty state
 * @param {text} string Empty state text
 */
export default function Empty(props) {
  let { text, className, src } = props

  return <div className={classnames('emptyWrap', className)}>
    <div className="emptyInner">
      {
        src ? <img src={src} alt="empty" /> :
          <Icon type="FaDropbox" />
      }
    </div>
    <p>{text ? text : 'As well as'}</p>
  </div>
}