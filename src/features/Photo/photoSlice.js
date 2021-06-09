const { createSlice } = require("@reduxjs/toolkit");

const photos = createSlice({
    name: 'photos',
    initialState: JSON.parse(localStorage.getItem('photos')) ? [...JSON.parse(localStorage.getItem('photos'))] : [],
    reducers: {
        addPhoto: (state, action) => {
            console.log("AddPhoto photoSlide: ", action);
            state.push(action.payload);
            localStorage.setItem("photos", JSON.stringify(state));
        },
        removePhoto: (state, action) => {
            const removePhotoId = action.payload;
            state = state.filter(photo => photo.id !== removePhotoId);
            localStorage.setItem("photos", JSON.stringify(state));
            return state;
        },
        updatePhoto: (state, action) => {
            const updatePhotoId = action.payload.id;
            const index = state.findIndex(photo => photo.id === updatePhotoId);
            state[index] = action.payload;
            localStorage.setItem("photos", JSON.stringify(state));
        }
    }
})

const { reducer, actions } = photos;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;