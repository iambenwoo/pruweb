import React, { Component } from 'react';
import landingStyles from './landing.module.css';
import { PieChart } from 'react-minimal-pie-chart';

class PieChartSection extends Component {

    render() {
        return (
            <div className={landingStyles.piechartwindow}>
                <PieChart
                    data={[
                        { title: 'One', value: 10, color: '#E38627' },
                        { title: 'Two', value: 15, color: '#C13C37' },
                        { title: 'Three', value: 20, color: '#6A2135' },
                    ]}
                    lineWidth="20"
                />
            </div>
        )
    }
}

export default PieChartSection;