import React from 'react';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Image from '../../../../constants/images';

import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import PropTypes from 'prop-types';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup className="mt-3">
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
            </FormGroup>

            <FormGroup className="mt-3">
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup className="mt-3">
                <Label for="categoryId">Photo</Label>
                <div>
                    <Button type="button" outline color="primary">Random a photo</Button>
                </div>
                <div className="mt-2">
                    <img src={Image.COLORFUL_BG} alt='colorful background' width="200px" height="200px" />
                </div>
            </FormGroup>

            <FormGroup className="mt-3">
                <Button color="primary">Add to album</Button>
            </FormGroup>

        </Form>
    );
}

export default PhotoForm;