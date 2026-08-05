import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaUser, FaDollarSign, FaLock, FaCreditCard } from 'react-icons/fa';
import '../App.css';

const Payment = ({ onCancel }) => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('5.99');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const transaction = Date.now();
        navigate('/transaction-details', { state: { name, amount, transaction } });
    };

    return (
        <div className="pay-card pay-dialog">
            <button type="button" className="pay-close" onClick={onCancel} aria-label="Close payment dialog">
                <FaTimes />
            </button>

            <div className="pay-icon">
                <FaCreditCard />
            </div>

            <h2 className="pay-page-title">Buy Sleeve</h2>
            <p className="pay-page-subtitle">One-time purchase · No subscription</p>

            <form onSubmit={handleSubmit} className="pay-form" noValidate={false}>
                <div className="pay-field">
                    <label className="pay-label" htmlFor="pay-name">Name</label>
                    <div className="pay-input-wrap">
                        <FaUser className="pay-input-icon" />
                        <input
                            id="pay-name"
                            type="text"
                            className="pay-input"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="pay-field">
                    <label className="pay-label" htmlFor="pay-amount">Amount</label>
                    <div className="pay-input-wrap">
                        <FaDollarSign className="pay-input-icon" />
                        <input
                            id="pay-amount"
                            type="number"
                            className="pay-input"
                            placeholder="0.00"
                            min="1"
                            step="0.01"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <p className="pay-note">
                    <FaLock className="pay-note-icon" />
                    Secured by Stripe · Card details never touch our servers
                </p>

                <div className="pay-buttons">
                    <button type="button" className="pay-btn pay-btn-ghost" onClick={onCancel}>Cancel</button>
                    <button type="submit" className="pay-btn pay-btn-primary">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
