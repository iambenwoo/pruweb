import React, { Component } from 'react';
import styles from '../Components/Content.module.css';
import landingStyles from './landing.module.css';
import PieChartSextion from './piechartsection';

class Landing extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={landingStyles.landing} >
                    <PieChartSextion/>
                    <div className={landingStyles.changerequestwindow}>Landing 2</div>
                </div>
            </div>
        )
    }
}

export default Landing;