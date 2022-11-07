const reducer = (state, action) => {
    if (state === undefined){
        state = {
            userChoice: {},
            createPlan: {
                first: true,
                second: false,
                third: false
            }
        }
    }
    switch (action.type) {
        case 'ADD_USER_CHOICE':
            return {
                ...state,
                userChoice: action.payload,
                createPlan: {
                    first: false,
                    second: true,
                    third: false
                }
            }
        default:
            return state
    }
}

export default reducer