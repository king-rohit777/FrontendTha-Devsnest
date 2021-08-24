const themeReducer = (state = false, actions) => {
    if (actions.type === "TOGGLE_THEME") {
        return !state;
    }
    return state;
};

export default themeReducer;