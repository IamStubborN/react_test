import React from 'react'
import Input from '../Input'
import styles from './SearchInput.module.scss'
import PropTypes from 'prop-types'

const SearchInput = props => {
    const {
        type,
        name,
        labelName,
        placeholder,
        checkedItem,
        onChangeHandler,
        disabled,
        inputMessage
    } = props
    return (
        <Input
            className={styles[name]}
            type={type}
            id={name}
            placeholder={placeholder}
            labelName={labelName}
            value={inputMessage}
            disabled={disabled}
            checked={name === checkedItem}
            onChangeHandler={onChangeHandler}
        />
    )
}

SearchInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    labelName: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
    disabled: PropTypes.bool,
    inputMessage: PropTypes.string
}

export default SearchInput
