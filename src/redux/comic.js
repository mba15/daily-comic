import axios from "axios";

const dailyComicUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";

export const getComic = () => {
    return (dispatch) => {
        axios.get(dailyComicUrl)
        .then((response) => {
            dispatch({type: "GET_COMIC", comic: response.data, maxNum: response.data.num});
        })
        .catch((err) => {
            console.error(err);
            return err;
        })
    }
}

export const getRandomComic = () => {
    return (dispatch) => {
         axios.get(dailyComicUrl)
            .then((response) => {
                const data = response.data;
                const num = data.num;
                const randomNum = Math.floor(Math.random() * num);
                const randomUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/" + randomNum + "/info.0.json";
                return axios.get(randomUrl)                    
            })
            .then((response) => {
                dispatch({type: "GET_RANDOM_COMIC", comic: response.data})
            })
            .catch((err) => {
                console.error(err);
                return err;
            });
    }
}

export const getSelectComic = (num) => {
    const selectUrl = "https://cors-anywhere.herokuapp.com/https://xkcd.com/" + num + "/info.0.json";
    return (dispatch) => {
        axios.get(selectUrl)
        .then((response) => {
            console.log( "select:" + response)
            dispatch({type: "GET_SELECTED_COMIC", comic: response.data})
        })
        .catch((err) => {
            console.error(err);
            return err;
        })
    }
}

const comicReducer = (prevState = {data: {}, maxNum: ""}, action) => {
    switch (action.type) {
        case "GET_COMIC":
            return {data: action.comic, maxNum: action.maxNum};
        case "GET_RANDOM_COMIC":
            return {...prevState, data: action.comic};
        case "GET_SELECTED_COMIC":
            return {...prevState, data: action.comic};
        default:
            return prevState;
    }
}

export default comicReducer;