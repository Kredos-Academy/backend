const paystack = (request) => {
    const secretKey = process.env.PAYSTACK_SECRET_KEY

    const initializePayment = (form, mycallback) => {
        const options = {
            url: 'https://api.paystack.com/transaction/initialize',
            headers: {
                authorization: secretKey,
                'content-type': 'application.json'
            },
            form
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request.post(options, callback)
        
    }

    const verifyPayment = (ref, mycallback) => {
        const options = {
            url: 'https://api.paystack.com/transaction/verify/'+encodeURIComponent(ref),
            headers: {
                authorization: secretKey,
                'content-type': 'application.json'
            }
        }
        const callback = (error, response, body) => {
            return mycallback(error, body)
        }
        request(options, callback)
    }

    return {initializePayment, verifyPayment}

}

module.exports = paystack;