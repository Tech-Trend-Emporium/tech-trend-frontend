import { Logo } from "../components/atoms/Logo";


export const HomePage = () => {
    return (
        <div className="bg-gray-800">
            <h1 className="text-white">Welcome to the Home Page</h1>
            <Logo text="white" />
        </div>
    );
}

export default HomePage;