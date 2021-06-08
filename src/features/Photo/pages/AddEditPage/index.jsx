import React from 'react';
import './AddEditPage.css';
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useHistory } from 'react-router-dom';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (value) => {
        return new Promise(resolve => {
            console.log("Form submit: ", value);

            setTimeout(() => {
                const action = addPhoto(value);
                console.log("Action: ", action);
                dispatch(action);

                history.push('/photos');
                resolve(true);
            }, 2000);

        })
    }

    return (
        <div className="photo-edit">
            <Banner title="Pick you amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddEditPage;