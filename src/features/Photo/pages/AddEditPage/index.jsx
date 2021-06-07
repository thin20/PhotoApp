import React from 'react';
import './AddEditPage.css';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick you amazing photo" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={values => console.log('Form submit: ', values)} />
            </div>
        </div>
    );
}

export default AddEditPage;