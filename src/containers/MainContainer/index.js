import React, { Component } from 'react'
import styles from './MainContainer.module.scss'
import ChoiceContainer from '../ChoiceContainer'
import ResultContainer from '../ResultContainer'
import fetchData from '../../api/fetchData'
import PropTypes from 'prop-types'

class MainContainer extends Component {
    state = {
        rawData: [],
        resultData: []
    }

    getData = () => {
        fetchData('./json/sdks.json').then(data => {
            this.setState({ rawData: data })
        })
    }

    filterByTag = tagName => {
        let resultData = []
        if (tagName === 'all') {
            resultData = this.state.rawData
        }

        this.state.rawData.forEach(key => {
            Object.keys(key).forEach(item => {
                key[item].forEach(tag => {
                    if (tagName === tag) {
                        resultData.push(key)
                    }
                })
            })
        })
        this.setState({ resultData })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        const { rawData, resultData } = this.state
        return (
            <div className={styles.mainContainer}>
                {rawData.length > 0 && (
                    <>
                        <ChoiceContainer
                            filterByTag={this.filterByTag}
                            rawData={rawData}
                        />
                        <ResultContainer resultData={resultData} />
                    </>
                )}
            </div>
        )
    }
}

MainContainer.propTypes = {
    rawData: PropTypes.array,
    resultData: PropTypes.array
}

export default MainContainer
