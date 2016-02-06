import React, { PropTypes } from 'react'
// import { connect } from 'react-redux'
import styles from './FlowAdder.scss'

export class FlowList extends React.Component {
  static propTypes = {
    addFlow: PropTypes.func.isRequired,
    newFlow: PropTypes.string.isRequired,
    flows: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired
    }).isRequired).isRequired
  };

  handleClick (e) {
    const node = this.refs.flowtextarea
    const text = node.value.trim()
    this.props.addFlow(text)
    node.value = ''
  };

  render () {
    var btnClass = 'btn btn-default ' + styles.button
    return (
      <div>
        <textarea defaultValue={this.props.newFlow} ref='flowtextarea'>
        </textarea>

        <button className={btnClass}
              onClick={(e) => this.handleClick(e)}
        >
              Add
        </button>
      </div>
    )
  }
}

export default FlowList
