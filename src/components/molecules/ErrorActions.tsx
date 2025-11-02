import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";


export const ErrorActions = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
                onClick={handleGoBack}
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium border-2 border-black hover:bg-gray-50 transition-colors duration-200"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
            </button>
            <button 
                onClick={handleGoHome}
                className="inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors duration-200"
            >
                <Home className="w-5 h-5 mr-2" />
                Home Page
            </button>
        </div>
    );
};