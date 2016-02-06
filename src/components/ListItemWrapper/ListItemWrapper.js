import React, { PropTypes } from 'react'
import styles from './ListItemWrapper.scss'
import moment from 'moment'

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString()
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length
    }
    position -= searchString.length
    var lastIndex = subjectString.indexOf(searchString, position)
    return lastIndex !== -1 && lastIndex === position
  }
}

export class ListItemWrapper extends React.Component {
  static propTypes = {
    archiveFlow: PropTypes.func.isRequired,
    flow: PropTypes.shape({
      text: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date),
      archived: PropTypes.bool.isRequired
    })
  };

  showImage (text) {
    if ((text.substr(0, 'http'.length) === 'http') && (text.endsWith('jpg') || text.endsWith('gif') || text.endsWith('png'))) {
      return true
    }
    return false
  }

  handleClick (archiveFlow) {
    archiveFlow(this.props.flow)
  }

  render () {
    const { flow, archiveFlow } = this.props
    var buttonClass = 'btn btn-primary ' + styles.archive

    return (
      <li className='flow'>
        { this.showImage(flow.text) ? <img src={flow.text}/> : null }
        {flow.text}<br />
        <span className={styles.created}>{moment(flow.created).fromNow()}</span>

        <button className={buttonClass} onClick={(e) => this.handleClick(e, archiveFlow)}>Archive</button>
      </li>
    )
  }
}

export default ListItemWrapper
