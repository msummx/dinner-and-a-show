export const addUserChoice = userObj => {
    return {
        type: 'ADD_USER_CHOICE',
        payload: userObj
    }
}

export const addEvent = eventObj => {
    return {
        type: 'ADD_EVENT',
        payload: eventObj
    }
}

export const addPlan = (planObj) => {
    return {
        type: 'ADD_PLAN',
        payload: planObj
    }
}