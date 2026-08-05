import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { FaArrowLeft, FaLock, FaUser, FaHashtag, FaDollarSign, FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import '../App.css';

const stripePromise = loadStripe('pk_test_51PIPpiSD7XYNdwI6GQaTFOODrlTSMvDN9vYjg2lWbonrQvo4RRJoZLOb1slYJjOEY0sPzDFVTJVVswGJZHhUXoys00231GML0t');

const TransactionDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, amount, transaction } = location.state || {};
    const [paymentError, setPaymentError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handlePayment = async (event) => {
        event.preventDefault();
        setPaymentError(null);
        setLoading(true);

        try {
            const stripe = await stripePromise;
            const values = { name, amount, transaction };
            const headers = { "Content-Type": "application/json" };

            const response = await fetch('https://backend-exp.onrender.com/create-payment', {
                method: "POST",
                headers: headers,
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error(`Payment session creation failed (${response.status})`);
            }

            const result = await response.json();

            if (result.success) {
                navigate('/success');
            }
            // const result = await stripe.redirectToCheckout({ sessionId: session.id });

            if (result.error) {
                console.log(result.error);
                setPaymentError(result.error.message);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error processing payment:", error);
            setPaymentError("Error processing payment. Please try again.");
            setLoading(false);
        }
    };

    const onBack = () => {
        navigate('/');
    };

    return (
        <div className="pay-page">
            <form onSubmit={handlePayment} className="pay-card td-card">
                <div className="td-icon">
                    <FaCreditCard />
                </div>

                <h1 className="pay-page-title">Checkout</h1>
                <p className="pay-page-subtitle">Review your order and continue to secure payment</p>

                <div className="td-summary">
                    <div className="td-row">
                        <span className="td-label"><FaUser /> Customer</span>
                        <span className="td-value">{name || '—'}</span>
                    </div>
                    <div className="td-row">
                        <span className="td-label"><FaDollarSign /> Amount</span>
                        <span className="td-value td-amount">${amount}</span>
                    </div>
                    <div className="td-row">
                        <span className="td-label"><FaHashtag /> Transaction ID</span>
                        <span className="td-value td-id">{transaction}</span>
                    </div>
                </div>

                {paymentError && (
                    <div className="td-error">
                        <FaShieldAlt />
                        <span>{paymentError}</span>
                    </div>
                )}

                <div className="td-actions">
                    <button type="button" onClick={onBack} className="pay-btn pay-btn-ghost" disabled={loading}>
                        <FaArrowLeft /> Back
                    </button>
                    <button type="submit" className="pay-btn pay-btn-primary" disabled={loading}>
                        {loading ? (
                            <>
                                <span className="spinner" /> Redirecting to Stripe…
                            </>
                        ) : (
                            <>
                                <FaLock /> Proceed to Payment
                            </>
                        )}
                    </button>
                </div>

                <p className="pay-secure-note">
                    <FaLock /> Payments are processed securely through Stripe Checkout
                </p>
            </form>
        </div>
    );
};

export default TransactionDetails;
