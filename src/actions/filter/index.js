export const updateFilter = (filters) => dispatch => {
    dispatch({
        type: 'UPDATE_FILTER',
        payload: filters
    })
}