import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaHashtag, FaCheckCircle, FaSpinner, FaInbox, FaReceipt } from 'react-icons/fa';
import '../App.css';

const Viewtransactions = () => {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://backend-exp.onrender.com/getpayment')
            .then(res => res.json())
            .then(data => {
                setTransactions(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError('Could not load transactions. Please try again later.');
                setLoading(false);
            });
    }, []);

    const totalAmount = transactions.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);

    return (
        <div className="vt-page">
            <div className="vt-header">
                <button className="vt-back" onClick={() => navigate('/')} aria-label="Back to home">
                    <FaArrowLeft />
                </button>
                <div>
                    <h1>Transactions</h1>
                    <p>All payments made for Sleeve 2</p>
                </div>
            </div>

            {!loading && !error && (
                <div className="vt-stats">
                    <div className="vt-stat">
                        <span>Total Transactions</span>
                        <strong>{transactions.length}</strong>
                    </div>
                    <div className="vt-stat">
                        <span>Total Amount</span>
                        <strong>${totalAmount.toFixed(2)}</strong>
                    </div>
                </div>
            )}

            {loading && (
                <div className="vt-loading">
                    <FaSpinner className="vt-spin" /> Loading transactions…
                </div>
            )}

            {error && (
                <div className="vt-empty">
                    <FaInbox />
                    <p>{error}</p>
                </div>
            )}

            {!loading && !error && transactions.length === 0 && (
                <div className="vt-empty">
                    <FaInbox />
                    <p>No transactions found yet.</p>
                </div>
            )}

            {!loading && !error && transactions.length > 0 && (
                <>
                    <div className="vt-grid">
                        {transactions.map(transaction => (
                            <div key={transaction.id} className="vt-card">
                                <div className="vt-card-top">
                                    <div className="vt-avatar">
                                        <FaUser />
                                    </div>
                                    <div className="vt-card-main">
                                        <span className="vt-name">{transaction.name || 'Customer'}</span>
                                        <span className="vt-meta">
                                            <FaHashtag /> {transaction.transaction}
                                        </span>
                                    </div>
                                    <span className="vt-status vt-status-success">
                                        <FaCheckCircle /> Paid
                                    </span>
                                </div>
                                <div className="vt-card-bottom">
                                    <span className="vt-amount-label">Amount Paid</span>
                                    <span className="vt-amount">${transaction.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="vt-footer">
                        <button className="pay-btn pay-btn-ghost" onClick={() => navigate('/')}>
                            <FaReceipt /> Back to Home
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Viewtransactions;
