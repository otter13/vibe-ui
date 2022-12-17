import PropTypes from 'prop-types'
import './index.less'

// Sequential sorting
let sortArr = arr => arr.sort((a, b) => a[0] - b[0])

// The progress of the progress of the detection value
function checkStatus(scope, val, defaultColor) {
  val = +val
  // Sorted from childhood
  sortArr(scope)

  if (scope.length === 1) {
    return val < scope[0][0] ? scope[0][1] : defaultColor
  } else if (scope.length === 2) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : defaultColor
  } else if (scope.length === 3) {
    return val < scope[0][0] ? scope[0][1]
      : scope[0][0] < val && val < scope[1][0] ? scope[1][1]
        : scope[1][0] < val && val < scope[2][0] ? scope[2][1]
          : defaultColor
  }
}


/**
 * Progress bar component
 * @param {themeColor} string The color of the progress bar
 * @param {percent} number Progress value percentage
 * @param {autoHidden} boolean Whether progress reaches 100%Automatically disappear
 * @param {hiddenText} boolean Whether to hide the progress entry
 * @param {width} string|number The width of the progress bar
 * @param {textColor} string Progressive text color
 * @param {statusScope} array Status threshold,Set the color bar of the scope of different progress, respectively,Maximum allow setting 3 values, For a two -dimensional array
 */
function Progress(props) {
  let {
    themeColor = '#06f',
    percent = 0,
    autoHidden = false,
    hiddenText = false,
    width = 320,
    textColor = '#666',
    statusScope
  } = props
  return +percent === 100 && autoHidden ?
    null :
    <div className="progressWrap">
      <div className="progressBar" style={{ width: typeof width === 'number' ? width + 'px' : width }}>
        <div
          className="progressInnerBar"
          style={{
            width: `${percent}%`,
            backgroundColor: statusScope && statusScope.length ? checkStatus(statusScope, percent, themeColor) : themeColor
          }}
        >
        </div>
      </div>
      {
        !hiddenText && <span className="progressText" style={{ color: textColor }}>{percent + '%'}</span>
      }
    </div>
}

Progress.propTypes = {
  themeColor: PropTypes.string,
  percent: PropTypes.number,
  autoHidden: PropTypes.bool,
  textAlign: PropTypes.string,
  hiddenText: PropTypes.bool,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  statusScope: PropTypes.array
}

export default Progress