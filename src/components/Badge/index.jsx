import classnames from 'classnames'
import PropTypes from 'prop-types'
import './index.less'

const colorArr = {
  'success': '#52c41a',
  'warning': '#faad14',
  'error': '#f5222d',
  'default': '#d9d9d9',
  'processing': '#1890ff'
}

/**
 * Logo number component
 * @param {style} Change the Badge style
 * @param {color} Custom small dot color
 * @param {count} Display number
 * @param {dot} Do not display numbers,Just show one small dot
 * @param {offset} Set the offset of the status point
 * @param {overflowCount} Display the number of cap
 * @param {showZero} Whether the value is 0 when the value is 0
 * @param {status} Set Badge as the status point, The type has success|warning|error|default|processing
 * @param {text} Text of the state point when setting when setus
 */
function Badge(props) {
  const {
    color,
    count = 0,
    dot,
    offset,
    overflowCount,
    showZero,
    status,
    text,
    style,
    children
  } = props
  return <div className="xBadgeWrap">
    {
      status || color ? <div className="statusDotWrap">
        <span className="dot" style={{ backgroundColor: color || colorArr[status] || colorArr.default }}></span>
        {text}
      </div> :
        <div>
          <span
            className={classnames('badge', dot ? 'badgeDot' : '')}
            style={{
              right: offset ? offset[0] + 'px' : '',
              top: offset ? offset[1] + 'px' : '',
              display: !showZero && !count ? 'none' : 'inline-block',
              ...style
            }}
          >
            {!dot && (overflowCount && overflowCount < count ? `${overflowCount}+` : count)}
          </span>
          {children}
        </div>
    }
  </div>
}

Badge.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  count: PropTypes.number,
  dot: PropTypes.bool,
  offset: PropTypes.array,
  overflowCount: PropTypes.number,
  showZero: PropTypes.bool,
  status: PropTypes.string,
  zIndex: PropTypes.number,
  text: PropTypes.string
}

export default Badge

