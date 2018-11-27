import React from 'react'
import ResultItem from '../UI/ResultItem'
import styles from './ResultsList.module.scss'
import PropTypes from 'prop-types'

const ResultList = props => {
    const {resultData} = props
    const resultList = resultData.map(key => {
        return Object.keys(key).map((item, index) => {
            return <ResultItem key={index} sdk={item} tags={key[item]}/>
        })
    })
    return <ul className={styles.resultList}>{resultList}</ul>
}

ResultList.propTypes = {
    resultData: PropTypes.array
}

export default ResultList
