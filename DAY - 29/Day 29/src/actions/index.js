const updatePlace = (place) => {
    return {
        type: "UPDATE_PLACE",
        payload: place,
    };
};

const updatePlaceData = (place) => {
    return (dispatch) => {
        fetch(`https://api.weatherapi.com/v1/current.json?Key=b92de499427f4cc0b2c82436212208&q=${place}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch({
                    type: "UPDATE_PLACE_DATA",
                    payload: data
                });
            });

    };
};

const toggleTheme = () => {
    return {
        type: "TOGGLE_THEME",
    };
};

export { updatePlace, updatePlaceData, toggleTheme };

