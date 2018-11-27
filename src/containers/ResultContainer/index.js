import React from 'react'
import styles from './ResultContainer.module.scss'
import ResultsList from '../../components/ResultsList'
import PropTypes from 'prop-types'

const ResultContainer = props => {
    const { resultData } = props
    return (
        <div className={styles.resultContainer}>
            <ResultsList resultData={resultData} />
        </div>
    )
}

ResultContainer.propTypes = {
    resultData: PropTypes.array
}

export default ResultContainer
