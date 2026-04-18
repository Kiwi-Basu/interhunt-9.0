import { useAuth } from '../../context/AuthContext';

const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-[#800020] flex items-center justify-center">
            <div className="text-center">
                <p className="text-white text-xl font-semibold">Loading...</p>
            </div>
        </div>
    );
};

interface AuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <LoadingScreen />;
    }

    return <>{children}</>;
};