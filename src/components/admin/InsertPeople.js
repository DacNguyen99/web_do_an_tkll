import React, { useState } from 'react';

const AddPeople = ({ isOpen, handleClose}) => {
    const [output, setOutput] = useState('');

    const handleRunRegister = async () => {
        try {
            const response = await fetch('http://localhost:5000/run_register');
            const data = await response.json();
            console.log(data.output);
        } catch (error) {
            console.error('Error running register.py:', error);
        }
    };

    return (
    <div>
        <button onClick={handleRunRegister}>Chạy register.py</button>
    </div>
    );
};

export default AddPeople;