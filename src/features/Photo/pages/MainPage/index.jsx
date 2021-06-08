import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';
import { useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';

MainPage.propTypes = {

};

function MainPage(props) {
    const photos = useSelector(state => state.photos);
    console.log('List of photos:', photos);

    const handelPhotoEditClick = (photo) => {
        console.log('Edit: ', photo)
    }

    const handelPhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
    }

    return (
        <div className="photo-main">
            <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="photos/add">Add New photo</Link>
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