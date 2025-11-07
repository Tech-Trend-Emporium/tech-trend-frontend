import { useEffect } from "react";
import { Logo } from "../components/atoms/Logo";
import { useAuth } from "../hooks";


export const HomePage = () => {
    const user = useAuth();
    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div className="bg-gray-800">
            <h1 className="text-white">Welcome to the Home Page</h1>
            <Logo text="white" />
        </div>
    );
}

export default HomePage;