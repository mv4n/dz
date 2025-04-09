import useLocalStorage from "../../hooks/useLocalStorage.jsx";

export const INITIAL_STATE = {
    isValid: {
        title: true,
        date: true,
        tags: true,
        text: true,
        userId: true
    },
    values: {
        title: '',
        date: '',
        tags: '',
        text: '',
        userId: ''
    },
    isFormReadyToSubmit: false,
}

export function formReducer(oldFormState, action) {

    switch (action.type) {

        case 'SUBMIT': {
            const titleValidity = !!action.payload.title.trim().length
            const dateValidity = !!action.payload.date;
            const tagsValidity = !!action.payload.tags.trim().length;
            const textValidity = !!action.payload.text.trim().length;
            const userIdValidity = !isNaN(+action.payload.userId);
            return {
                isValid: {
                    title: titleValidity,
                    date: dateValidity,
                    tags: tagsValidity,
                    text: textValidity,
                },
                values: action.payload,
                isFormReadyToSubmit: titleValidity && dateValidity && tagsValidity && textValidity && userIdValidity
            }
        }
        case 'RESET_STATE': {
            return INITIAL_STATE
        }

        case 'UPDATE_STATE': {
            const newState = {
                ...oldFormState,
                values: {
                    ...oldFormState.values,
                    ...action.payload,
                },
            }

            return newState
        }

        default:
            return oldFormState;
    }
}