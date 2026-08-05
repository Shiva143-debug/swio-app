import React from 'react';
import { FaCheckCircle, FaHome, FaReceipt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Success = () => {
    const navigate = useNavigate();

    return (
        <div className="result-page result-success">
            <div className="result-card">
                <div className="result-icon">
                    <FaCheckCircle />
                </div>
                <h1 className="result-title">Payment Successful</h1>
                <p className="result-subtitle">
                    Thank you for purchasing Sleeve 2. Your payment was completed and a receipt has been sent to your email.
                </p>
                <div className="result-badge">
                    <FaReceipt /> Transaction completed
                </div>
                <div className="result-actions">
                    <button className="pay-btn pay-btn-primary" onClick={() => navigate('/')}>
                        <FaHome /> Back to Home
                    </button>
                    <button className="pay-btn pay-btn-ghost" onClick={() => navigate('/viewTransacations')}>
                        View Transactions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Success;
