import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    // mac dinh cua formik
    field: PropTypes.object.isRequired, // field bao gom: name, value, onChange, onBlur
    form: PropTypes.object.isRequired,

    // tu chuyen vao
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false
}

function InputField(props) {
    const { field, form, type, label, placeholder, disabled } = props;
    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    return (
        <FormGroup className="mt-3">
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}

                invalid={showError}
            />

            {/* {showError && <FormFeedback>{errors[name]}</FormFeedback>} */}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default InputField;