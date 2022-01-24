import React, { useEffect } from 'react';
import { API_URL } from './config';
import QueryString from 'query-string'
const HomePage = () => {
    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const values = QueryString.parse(window.location.search);

        if (values.success) {
            console.log("Order placed! You will receive an email confirmation.");
        }

        if (values.cancelled) {
            console.log(
                "Order canceled -- continue to shop around and checkout when you're ready."
            );
        }
    }, []);

    return (
        <section>
            <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                    <h3>Stubborn Attachments</h3>
                    <h5>$20.00</h5>
                </div>
            </div>
            <form action={`${API_URL}/api/stripe/create-checkout-session`}method="POST">
                <button type="submit">
                    Checkout
                </button>
            </form>
        </section>
    );
};

export default HomePage;