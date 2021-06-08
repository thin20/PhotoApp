import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

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
    const { field, type, label, placeholder, disabled } = props;
    const { name } = field;
    return (
        <FormGroup className="mt-3">
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder}
            />
        </FormGroup>
    );
}

export default InputField;