import {TopUi} from '../ui/top'
import { connect } from 'react-redux'
import { query } from '../../actions'
import C from '../../constants'

const mapStateToProps = (state, props) => 
	({
		API_KEY: state.inputs.API_KEY,
		q: state.inputs.q,
	})

const mapDispatchToProps = dispatch => 
	({
		onQuery({API_KEY,q}) {
			// reset the channels and nextpage
			dispatch({
				type: C.RESET_CHANNELS,
				payload: {}
			})

			dispatch({
				type : C.CHANGE_NEXT_PAGE,
				payload: ''
			})
			
			dispatch(
				query(q , API_KEY)
			)
		},
	})	
export default connect(mapStateToProps, mapDispatchToProps)(TopUi)	



