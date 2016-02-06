import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classes from './FlowList.scss'
import ListItemWrapper from '../ListItemWrapper/ListItemWrapper'

export class FlowList extends React.Component {
  static propTypes = {
    archiveFlow: PropTypes.func.isRequired,
    fetchFlows: PropTypes.func.isRequired,
    flows: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date),
      archived: PropTypes.bool.isRequired
    }).isRequired).isRequired,
  };

  componentDidMount() {
    console.log("Running Fetch Flows")
    this.props.fetchFlows();
  };

  render () {
    return (
      <ul>
        {this.props.flows.map(flow =>
          <ListItemWrapper archiveFlow={this.props.archiveFlow} key={flow.id} flow={flow}/>
        )}
      </ul>
    )
  }
}

export default FlowList
