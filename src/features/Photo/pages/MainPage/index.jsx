import React from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Banner from 'components/Banner';
import Images from 'constants/images';

MainPage.propTypes = {

};

function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <Link to="photos/add">Add New photo</Link>
            </Container>
        </div>

    );
}

export default MainPage;