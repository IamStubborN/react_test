import React from 'react'
import styles from './ResultItem.module.scss'
import PropTypes from 'prop-types'

const ResultItem = props => {
    const { sdk, tags } = props
    return (
        <li className={styles.resultItem}>
            <h3>{sdk}</h3>
            <p>{tags.join(', ')}</p>
        </li>
    )
}

ResultItem.propTypes = {
    sdk: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
}

export default ResultItem