import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
// import { actions as counterActions } from '../../redux/modules/counter'
import { actions as flowActions } from '../../redux/modules/flows'
import FlowAdder from 'components/FlowAdder/FlowAdder'
import FlowList from 'components/FlowList/FlowList'
import classes from './HomeView.scss'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter,
  flows: formatFlows(state.flows),
  flow: ''
})

function formatFlows(todos) {
  return todos.slice(0).filter(todo => todo.archived === false).reverse()
}

export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    addFlow: PropTypes.func.isRequired,
    archiveFlow: PropTypes.func.isRequired,
    fetchFlows: PropTypes.func.isRequired,
    flows: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      created: PropTypes.instanceOf(Date),
      archived: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    flow: PropTypes.string
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to Flow</h1>
        <FlowAdder addFlow={text => this.props.addFlow(text) } flows={this.props.flows} newFlow={this.props.flow} />
        <FlowList fetchFlows={this.props.fetchFlows} archiveFlow={key => this.props.archiveFlow(key)} flows={this.props.flows} />
      </div>
    )
  }
}

export default connect(mapStateToProps, flowActions)(HomeView)
