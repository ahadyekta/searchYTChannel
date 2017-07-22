import C from './constants'
import fetch from 'isomorphic-fetch'

export const query= (value,API_KEY,nextPageToken='') => dispatch => {
    dispatch({
        type: C.START_QUERY,
        payload: {
             q      : value,
             API_KEY: API_KEY
        }
    })
     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&pageToken=${nextPageToken}&key=${API_KEY}`)
     .then(response => response.json())
        .then(suggestions => {
            let channels = {};
            for(let i=0; i < suggestions.items.length; i++){
                let channel = suggestions.items[i].snippet.channelId;
                channels[channel] = suggestions.items[i].snippet;
            }
            // channels =  Object.keys(channels);

            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: channels
            })

            dispatch({
                type: C.CHANGE_NEXT_PAGE,
                payload: suggestions.nextPageToken
            })

        })
        .catch(error => {

            dispatch({
                type: C.ADD_ERROR,
                payload: error.message
            })
        })

}