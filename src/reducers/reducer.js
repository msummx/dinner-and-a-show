const reducer = (state, action) => {
    if (state === undefined){
        state = {
            userChoice: {},
            createPlan: {
                first: true,
                second: false,
                third: false
            },
            userEvent: {},
            userPlans: [],
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
        case 'ADD_EVENT':
            return {
                ...state,
                userEvent: action.payload,
                createPlan: {
                    first: false,
                    second: false,
                    third: true
                }
            }
        case 'ADD_PLAN':
            return {
                userChoice: {},
                createPlan: {
                    first: true,
                    second: false,
                    third: false
                },
                userEvent: {},
                userPlans: [...state.userPlans, action.payload]
                }
        default:
            return state
    }
}

export default reducer