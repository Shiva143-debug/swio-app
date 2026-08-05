import React from 'react';
import { MdCancel, MdRefresh } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

const Failure = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const message = location.state?.message || 'Your payment could not be completed. No charge was made to your account.';

    const onRetry = () => {
        navigate('/transaction-details');
    };

    return (
        <div className="result-page result-failure">
            <div className="result-card">
                <div className="result-icon">
                    <MdCancel />
                </div>
                <h1 className="result-title">Payment Failed</h1>
                <p className="result-subtitle">{message}</p>
                <div className="result-badge">
                    <MdRefresh /> No charge was made
                </div>
                <div className="result-actions">
                    <button className="pay-btn pay-btn-ghost" onClick={() => navigate('/')}>
                        <FaHome /> Back to Home
                    </button>
                    <button className="pay-btn pay-btn-primary" onClick={onRetry}>
                        <MdRefresh /> Try Again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Failure;
