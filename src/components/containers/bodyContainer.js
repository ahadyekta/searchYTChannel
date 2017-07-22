import { BodyUi } from '../ui/body'
import { connect } from 'react-redux'
import { query } from '../../actions'


const mapStateToProps = (state, props) => 
	({
		channels: state.channels,
        nextPage: state.response,
        API_KEY : state.inputs.API_KEY,
        q       : state.inputs.q
	})

const mapDispatchToProps = dispatch => 
	({
		loadMore({API_KEY,q,nextPage}) {
			dispatch(
				query(q , API_KEY, nextPage)
			)
		},
	})	
export default connect(mapStateToProps,mapDispatchToProps)(BodyUi)	
