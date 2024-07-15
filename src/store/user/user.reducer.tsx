export enum USER_ACTION_TYPES {
    SET_CURRENT_USER = 'SET_CURRENT_USER'
}


interface UserState {
    currentUser: any | null;
}


const INITIAL_STATE: UserState = {
    currentUser: null,
}


interface UserAction {
    type: USER_ACTION_TYPES;
    payload: any;
}

export const userReducer = (state: UserState = INITIAL_STATE, action: UserAction): UserState => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        default:
            return state;
    }
}

export default userReducer;
