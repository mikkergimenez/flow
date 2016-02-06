// import 'isomorphic-fetch'
import reduxApi, {transformers} from 'redux-api'
// import adapterFetch from 'redux-api/adapters/fetch'
import _ from 'lodash'

const headers = {
  'User-Agent': 'redux-api'
}

const URL = 'http://localhost:3000/api/1'

export default reduxApi({
  flows: {
    url: `${URL}/todos`,
    options: { headers },
    transformer (data) {
      return _.map(data, (item) => {
        return {
          name: item.name,
          fullName: item.full_name,
          user: item.owner.login
        }
      })
    }
  },
  flow: {
    url: `${URL}/todo`,
    options: { headers }
  }
})
