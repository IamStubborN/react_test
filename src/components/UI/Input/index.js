import React from 'react'
import styles from './Input.module.scss'
import PropTypes from 'prop-types'

const Input = props => {
    const {
        type,
        id,
        className,
        labelName = '',
        value,
        placeholder,
        onCheckHandler,
        onChangeHandler,
        checked = false,
        disabled = false
    } = props

    const typesHandlers = {
        radio: onCheckHandler,
        text: onChangeHandler
    }
    return (
        <div className={styles.inputItem}>
            <input
                onChange={typesHandlers[type]}
                type={type}
                className={className}
                id={id}
                value={value}
                checked={checked}
                disabled={disabled}
                placeholder={placeholder}
            />
            {labelName && <label htmlFor={id}> {labelName} </label>}
        </div>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    placeholder: PropTypes.string,
    onCheckHandler: PropTypes.func,
    onChangeHandler: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
}

export default Input