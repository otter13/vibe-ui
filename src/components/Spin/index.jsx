import './index.less'

/**
 * Spin component
 * @param {isLoading} bool Load the state, default to TRUE
 * @param {loadingText} string Text of loading state
 * @param {hiddenText} bool Whether to hide the text of the loading state
 * @param {type} string SPIN type, currently there are two types of Ball and LINE
 * @param {bgColor} string Load animation color
 */
export default function Spin(props) {
  const spinType = {
    line: 'line'
  }
  const {
    type,
    isLoading = true,
    loadingText = 'Loading...',
    hiddenText = false,
    bgColor = '#06c'
  } = props
  return isLoading ?
    <div className="loader">
      <div
        className={`loader-inner ball-spin-fade-loader${spinType[type] ? ' ' + spinType[type] : ''}`}
        style={{ backgroundColor: bgColor }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {
        !hiddenText && <p className="x-loading-text">{loadingText}</p>
      }
    </div> : null
}