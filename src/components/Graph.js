import React from 'react';
import './graph.css';

const generateContributionsData = () => {
    const startDate = new Date('2022-04-01');
    const endDate = new Date('2023-04-26');
    const contributionsData = {};

    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const dateString = currentDate.toISOString().slice(0, 10);
        const randomCount = Math.floor(Math.random() * 50) + 1;
        contributionsData[dateString] = randomCount;
    }

    return contributionsData;
};

const ContributionGraph = () => {
    const contributionsData = generateContributionsData();

    const colors = (count) => {
        if (count > 1 && count < 9) {
            return "#ACD5F2";
        } else if (count > 10 && count < 19) {
            return "#7FA8C9";
        } else if (count > 20 && count < 29) {
            return "#527BA0";
        } else if (count > 30) {
            return "#254E77";
        } else {
            return "#EDEDED";
        }
    };

    return (
        <table>
            <thead>
            <tr>
                <th style={{display: "flex", gap: '55px', paddingLeft: '240px'}}>
                    <span>Апр</span> <span>Май</span> <span>Июнь</span> <span>Июль</span> <span>Авг</span>
                    <span>Сент</span> <span>Окт</span> <span>Нояб</span> <span>Дек</span> <span>Янв</span>
                    <span>Февр</span> <span>Март</span>
                </th>
            </tr>
            </thead>
            <tbody>
            <div className="contribution-graph">
                {Object.entries(contributionsData).map(([date, count], index) => (
                    <div
                        key={index}
                        style={{
                            width: "15px",
                            height: "15px",
                            backgroundColor: colors(count)
                        }}
                        title={`${date}: ${count} contributions`}
                    />
                ))}
            </div>
            </tbody>
        </table>

    );
};

export default ContributionGraph;
