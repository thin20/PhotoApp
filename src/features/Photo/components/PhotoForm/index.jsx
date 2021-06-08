import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import Image from 'constants/images';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';



PhotoForm.propTypes = {
    onSubmit: PropTypes.func
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null
    }
    return (
        <Formik initialValues={initialValues}>
            {formikProps => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

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
                )
            }}
        </Formik>
    );
}

export default PhotoForm;