import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";
import moment from 'moment';

function MealRateChart() {
    const [graphData, setGraphData] = useState([]);
    const messId = localStorage.getItem('messId');

    useEffect(() => {
        axios.get(`http://localhost:8080/graphData/${messId}`)
            .then((response) => {
                // Transform the data to include `createdAt` as a formatted date
                const transformedData = response.data.data.map((item) => ({
                    date: moment(item.createdAt).format('MM-YYYY'), // Format the date
                    addTk: item.addTk,
                    totalCost: item.totalCost,
                    totalMeal: item.totalMeal,
                    mealRate: item.mealRate,
                }));
                setGraphData(transformedData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [messId]);

    return (
        <div className="meal-rate-chart">
            <h4 className="text-center mb-3">Overview of Cost, Meal, Meal Rate</h4>
            <ResponsiveContainer width="100%" height={400} className="mt-3">
                {
                    graphData.length > 0 ? (
                        <LineChart
                            data={graphData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" label={{ value: 'Date', position: 'insideBottom', offset: -5 }} />
                            <YAxis label={{ value: 'Amount', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="addTk" stroke="#8884d8" name="Total Add Tk" />
                            <Line type="monotone" dataKey="totalCost" stroke="#82ca9d" name="Total Cost" />
                            <Line type="monotone" dataKey="totalMeal" stroke="#ffc658" name="Total Meals" />
                            <Line type="monotone" dataKey="mealRate" stroke="#ff7300" name="Meal Rate" />
                        </LineChart>
                    ) : (
                        <p className="text-center">Loading data...</p>
                    )
                }
            </ResponsiveContainer>
        </div>
    );
}

export default MealRateChart;
