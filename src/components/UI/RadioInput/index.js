import React from 'react'
import Input from '../Input'
import styles from './RadioInput.module.scss'
import PropTypes from 'prop-types'

const RadioInput = props => {
    const { type, name, labelName, checkedItem, onCheckHandler } = props
    return (
        <Input
            type={type}
            id={name} 
            className={styles[type]}
            labelName={labelName}
            checked={name === checkedItem}
            onCheckHandler={onCheckHandler}
        />
    )
}

RadioInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    labelName: PropTypes.string,
    checkedItem: PropTypes.string,
    onCheckHandler: PropTypes.func
}

export default RadioInput