import React from 'react';
import './AddEditPage.css';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router-dom';
var uniqid = require('uniqid');

AddEditPage.propTypes = {

};

function createId() {
    return uniqid("photo-");
}

function AddEditPage(props) {
    const photos = useSelector(state => state.photos);
    console.log("Photos: ", photos);

    const dispatch = useDispatch();
    const history = useHistory();

    const { photoId } = useParams();
    console.log('PhotoId: ', photoId);

    const initialValues = photoId ? {
        ...photos.find(photo => photo.id === photoId)
    } : {
        title: '',
        categoryId: null,
        photo: ''
    }

    const isFormAdd = !photoId;
    console.log('isFormAdd: ', isFormAdd);

    const handleSubmit = (value) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (isFormAdd) {
                    // Logic add photo
                    value = { ...value, id: createId() };
                    const action = addPhoto(value);
                    dispatch(action);

                } else {
                    // Logic Update photo
                    const action = updatePhoto(value);
                    dispatch(action);
                }
                history.push('/photos');
                resolve(true);
            }, 2000);
        })

    }

    return (
        <div className="photo-edit">
            <Banner title="Pick you amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} initialValues={initialValues} isFormAdd={isFormAdd} />
            </div>
        </div>
    );
}

export default AddEditPage;