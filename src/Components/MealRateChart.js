import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MealRateChart() {
    // Dummy data with daily cost, total meals, and calculated meal rate
    const data = [
        { date: "2024-10-01", dailyCost: 150, totalMeals: 10, mealRate: (150 / 10).toFixed(2) },
        { date: "2024-10-02", dailyCost: 200, totalMeals: 15, mealRate: (200 / 15).toFixed(2) },
        { date: "2024-10-03", dailyCost: 180, totalMeals: 12, mealRate: (180 / 12).toFixed(2) },
        { date: "2024-10-04", dailyCost: 220, totalMeals: 18, mealRate: (220 / 18).toFixed(2) },
        { date: "2024-10-05", dailyCost: 160, totalMeals: 13, mealRate: (160 / 13).toFixed(2) },
        { date: "2024-10-06", dailyCost: 190, totalMeals: 14, mealRate: (190 / 14).toFixed(2) },
        { date: "2024-10-07", dailyCost: 210, totalMeals: 17, mealRate: (210 / 17).toFixed(2) },
    ];

    return (
        <ResponsiveContainer width="100%" height={400} className="mt-3">
            <h4 className="text-center mb-3">Overview of Cost , Meal, Meal Rate</h4>
            <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'Amount (in $)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="dailyCost" stroke="#82ca9d" name="Daily Cost" />
                <Line type="monotone" dataKey="totalMeals" stroke="#8884d8" name="Total Meals" />
                <Line type="monotone" dataKey="mealRate" stroke="#ff7300" name="Meal Rate" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default MealRateChart;
