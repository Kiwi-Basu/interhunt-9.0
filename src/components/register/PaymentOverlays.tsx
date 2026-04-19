import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

interface PaymentOverlaysProps {
    paymentProcessing: boolean;
    paymentSuccess: boolean;
    paymentFailed: boolean;
    paymentCancelled: boolean;
    onTryAgain: () => void;
    onGoToProfile: () => void;
}

const PaymentOverlays = ({
    paymentProcessing,
    paymentSuccess,
    paymentFailed,
    paymentCancelled,
    onTryAgain,
    onGoToProfile
}: PaymentOverlaysProps) => {
    return (
        <>
            {/* Payment Processing Overlay */}
            <AnimatePresence>
                {paymentProcessing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#F5F5DC] backdrop-blur-xl rounded-3xl p-12 text-center border border-[#D4A853]/50 shadow-2xl max-w-md w-full"
                        >
                            <div className="w-24 h-24 bg-linear-to-br from-[#800020] to-[#9B0B2F] rounded-full flex items-center justify-center mx-auto mb-6">
                                <Loader2 className="w-12 h-12 text-white animate-spin" />
                            </div>
                            <h2 className="text-3xl font-bold text-[#800020] mb-3">
                                Processing Payment
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Please wait while we verify your payment...
                            </p>
                            <p className="text-sm text-gray-600">
                                This may take a few moments
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Payment Success Overlay */}
            <AnimatePresence>
                {paymentSuccess && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#F5F5DC] backdrop-blur-xl rounded-3xl p-12 text-center border border-[#D4A853]/50 shadow-2xl max-w-md w-full"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <CheckCircle2 className="w-12 h-12 text-white" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-[#800020] mb-3">
                                Payment Successful!
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Your registration for उMUNg Fourth Edition has been confirmed successfully
                            </p>
                            <button
                                onClick={onGoToProfile}
                                className="w-full px-8 py-4 bg-linear-to-r from-[#D4A853] to-[#FFD98E] text-[#800020] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Go to Profile
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Payment Failed Overlay */}
            <AnimatePresence>
                {paymentFailed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#F5F5DC] backdrop-blur-xl rounded-3xl p-12 text-center border border-[#D4A853]/50 shadow-2xl max-w-md w-full"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 bg-linear-to-br from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <XCircle className="w-12 h-12 text-white" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-[#800020] mb-3">
                                Payment Failed
                            </h2>
                            <p className="text-gray-700 mb-8">
                                Unfortunately, your payment could not be processed. Please try again.
                            </p>
                            <button
                                onClick={onTryAgain}
                                className="w-full px-8 py-4 bg-linear-to-r from-[#D4A853] to-[#FFD98E] text-[#800020] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Payment Cancelled Overlay */}
            <AnimatePresence>
                {paymentCancelled && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-[#F5F5DC] backdrop-blur-xl rounded-3xl p-12 text-center border border-[#D4A853]/50 shadow-2xl max-w-md w-full"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                className="w-24 h-24 bg-linear-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6"
                            >
                                <AlertCircle className="w-12 h-12 text-white" />
                            </motion.div>
                            <h2 className="text-3xl font-bold text-[#800020] mb-3">
                                Payment Cancelled
                            </h2>
                            <p className="text-gray-700 mb-8">
                                You cancelled the payment. No charges were made to your account.
                            </p>
                            <button
                                onClick={onTryAgain}
                                className="w-full px-8 py-4 bg-linear-to-r from-[#D4A853] to-[#FFD98E] text-[#800020] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PaymentOverlays;