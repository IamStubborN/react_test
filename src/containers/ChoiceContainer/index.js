import React from 'react'
import styles from './ChoiceContainer.module.scss'
import RadioButtonsList from '../../components/RadioButtonsList'
import PropTypes from 'prop-types'

const ChoiceContainer = props => {
    const { rawData, filterByTag } = props
    return (
        <div className={styles.choiceContainer}>
            <RadioButtonsList filterByTag={filterByTag} rawData={rawData} />
        </div>
    )
}

ChoiceContainer.propTypes = {
    rawData: PropTypes.array,
    filterByTag: PropTypes.func.isRequired
}

export default ChoiceContainer
