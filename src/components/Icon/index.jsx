import PropTypes from 'prop-types'
import * as Fa from 'react-icons/fa'
import './index.less'

/**
 * Icon component
 * @param {type} string Icon type
 * @param {size} string icon size px|lg|xs
 * @param {rotation} number Turn angle
 * @param {style} object Icon style
 */
function Icon(props) {
  const { type, size, rotation, style } = props
  const IconComponent = Fa[type]
  return <IconComponent size={size} rotation={rotation} style={style} />
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  rotation: PropTypes.number,
  style: PropTypes.object
}

export default Icon

