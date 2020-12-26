import React from "react";
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51I2kzfH7DSQLvolwfpIzlITocLqt6X1K1WRE37nRDcxVBNuDe8gegTBI0QS43Dv4CPZ1d1XoMxKWk6Xq4Jx3FOzl00tv2iyXqc'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Dev Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton