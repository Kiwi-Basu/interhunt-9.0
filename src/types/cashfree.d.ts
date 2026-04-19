declare module '@cashfreepayments/cashfree-js' {
    export interface CheckoutOptions {
        paymentSessionId: string;
        payment_session_id?: string;
        redirectTarget?: string;
    }

    export interface CashfreeSDK {
        checkout(options: CheckoutOptions): Promise<void>;
    }

    export interface LoadOptions {
        mode: 'sandbox' | 'production';
    }

    export function load(options: LoadOptions): Promise<CashfreeSDK>;
}