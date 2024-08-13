const initState = {
    themeId: 1,
}

type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export type ActionTypes = ChangeThemeIdType