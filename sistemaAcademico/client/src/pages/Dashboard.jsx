import React from 'react';
import ConsolidatedTable from '../components/ConsolidatedTable';

const Dashboard = () => {
    return (
        <div>
            <h1 className='font-bold text-2x6 mb-3 mx-3 text-center'>Gestión Académica</h1>
            <ConsolidatedTable />
        </div>
    );
};

export default Dashboard;
