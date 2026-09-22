import axios from 'axios';
import { useTokenStore } from '@/store';
import { BASE_URL } from '@/utils/apiConfig';
const api = axios.create({
    baseURL:BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },

});
api.interceptors.request.use((config) => {
    const token = useTokenStore.getState().token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


// ----- Payments -----
export const createCheckoutSession = async (data: {
  planId: number;
  planName: string;
  amountCents: number;
  interval: 'month' | 'year';
  currency?: string;
  successUrl: string;
  cancelUrl: string;
}) => api.post('/payment/checkout-session', data);

export const createPaymentIntent = async (data: {
  planId: number;
  planName: string;
  amountCents: number;
  interval: 'month' | 'year';
  currency?: string;
}) => api.post('/payment/payment-intent', data);

// ----- Contact -----
export const sendContactForm = async (formData: {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_type: string;
  message: string;
}) => {
  try {
    const response = await api.post('/contact', formData);
    return response.data;
  } catch (error: any) {
    let errorMessage = 'Sorry, there was an error sending your message. Please try again or call us directly.';
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    throw new Error(errorMessage);
  }
};

// ✅ Fetch Google Reviews
export const getGoogleReviews = async () => {
  try {
    const response = await api.get('/google-reviews'); // uses the baseURL from your axios instance
    return response.data; // Expecting a GoogleReviewsResponse object
  } catch (error: any) {
    console.error('Error fetching Google Reviews:', error.response?.data || error.message);
    throw new Error(
      error.response?.data?.message || 'Failed to fetch Google Reviews'
    );
  }
};




