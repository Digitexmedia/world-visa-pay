// payment.js (Node.js backend for Pesapal) const express = require('express'); const axios = require('axios'); const oauthSignature = require('oauth-signature'); const bodyParser = require('body-parser'); const cors = require('cors'); const app = express();

const CONSUMER_KEY = 'DvXS8AdJsMiVQXIc6O0c8bAhwT8GXGWM'; const CONSUMER_SECRET = 'JIislJTT+AcAiPWTF408vvPO6Tw=';

app.use(cors()); app.use(bodyParser.json());

app.post('/initiate-payment', async (req, res) => { const { amount, phone, paymentMethod } = req.body;

const payload = { amount: amount, currency: 'KES', description: 'World Visa Pay Payment', callback_url: 'https://yourdomain.com/payment-success', notification_id: '1234567890', // replace with actual notification URL ID if any billing_address: { phone_number: phone, email_address: '', country_code: 'KE', }, };

const oauth = { oauth_consumer_key: CONSUMER_KEY, oauth_nonce: Math.random().toString(36).substring(2), oauth_signature_method: 'HMAC-SHA1', oauth_timestamp: Math.floor(new Date().getTime() / 1000), oauth_version: '1.0', };

const httpMethod = 'POST'; const url = 'https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest'; const parameters = { ...oauth }; const signature = oauthSignature.generate(httpMethod, url, parameters, CONSUMER_SECRET); oauth.oauth_signature = signature;

const authHeader = 'OAuth ' + Object.keys(oauth) .map((k) => ${k}="${encodeURIComponent(oauth[k])}") .join(', ');

try { const response = await axios.post(url, payload, { headers: { Authorization: authHeader, 'Content-Type': 'application/json', }, }); res.json({ redirect_url: response.data.redirect_url }); } catch (error) { console.error('Payment Error:', error.response?.data || error); res.status(500).json({ error: 'Payment initiation failed' }); } });

app.listen(3000, () => { console.log('Pesapal server running on http://localhost:3000'); });

                                                      
