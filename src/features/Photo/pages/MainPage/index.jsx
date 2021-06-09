import React from 'react';
import { Container } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';

MainPage.propTypes = {

};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    console.log('List of photos:', photos);
    const history = useHistory();

    const handelPhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        history.push(`/photos/${photo.id}`);
    }

    const handelPhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="photos/add" style={{ display: 'block', margin: '20px' }}>Add New photo</Link>
            </Container>
            <PhotoList
                photoList={photos}
                onPhotoEditClick={handelPhotoEditClick}
                onPhotoRemoveClick={handelPhotoRemoveClick}
            />
        </div>
    );
}

export default MainPage;