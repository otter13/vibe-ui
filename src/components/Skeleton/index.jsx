import PropTypes from 'prop-types'
// import CodeImg from '../../assets/code_white.png'
import './index.less'

/**
 * Skeleton screen component(SEO)
 * 
 */
export default function Skeleton(props) {
  let { isLoading = true, loadingText = 'Loading for you...' } = props
  return isLoading ? <div className="skeletonWrap">
    <div className="skeletonContent" data-loadingText={loadingText}>
      <div className="imgBox">
        {/* <img src={CodeImg} alt="Fun Talking front end,Preschool learning React" /> */}
      </div>
      <div className="rightBox">
        <h2 className="tit">Otter13's Blog</h2>
        <div className="labelWrap">
          <span>front end</span>
          <span>Front -end framework</span>
          <span>Front -end interview</span>
          <span>Front -end career development plan</span>
          <span>React/Vue/Jquery</span>
          <span>Front -end engineering/Visualization</span>
        </div>
        <p className="desc">
          The first column created by the author is mainly used to summarize the React, Vue, Node, Javascript, CSS, CSS, CSS, CSS, CSS,
          Design mode, engineering practical experience, as a front -line architect and interviewer, will also summarize some front -end interview experience and career thinking and planning.
        </p>
      </div>
    </div>
  </div> : null
}

Skeleton.propTypes = {
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
}