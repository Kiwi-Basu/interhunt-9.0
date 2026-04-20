import { useAuth } from '../../context/AuthContext';

const LoadingScreen = () => {
    return (
        <div className="min-h-screen bg-[#d1d2d3] flex items-center justify-center">
            <div className="text-center">
                <p className="text-[#D8B893] text-xl font-semibold">Loading...</p>
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