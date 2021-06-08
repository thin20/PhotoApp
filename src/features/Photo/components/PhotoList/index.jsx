import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    photoList: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func
};

PhotoList.defaultProps = {
    photoList: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null
}

function PhotoList(props) {
    const { photoList, onPhotoEditClick, onPhotoRemoveClick } = props;

    return (
        <Container>
            <Row>
                {photoList.map((photo, index) => (
                    <Col key={index} xs="12" sm="6" md="6" lg="3">
                        <PhotoCard
                            photo={photo} onEditClick={onPhotoEditClick} onRemoveClick={onPhotoRemoveClick}
                        />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default PhotoList;