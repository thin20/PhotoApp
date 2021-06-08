import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Label } from 'reactstrap';

SelectField.propTypes = {
    // mac dinh cua formik
    field: PropTypes.object.isRequired, // field bao gom: name, value, onChange, onBlur
    form: PropTypes.object.isRequired,

    // tu chuyen vao
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
};

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

function SelectField(props) {
    const { field, label, placeholder, disabled, options } = props;
    const { name, value } = field;
    const selectedOption = options.find(option => option.value === value);

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }

        field.onChange(changeEvent);
    }

    return (
        <FormGroup className="mt-3">
            <Label for={name}>{label}</Label>
            <Select
                id={name}
                {...field}
                value={selectedOption}
                onChange={handleSelectedOptionChange}

                name={name}
                placeholder={placeholder}
                isDisabled={disabled}
                options={options}
            />
        </FormGroup>
    );
}

export default SelectField;
