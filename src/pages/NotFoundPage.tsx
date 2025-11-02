import { SearchX } from "lucide-react";
import { ErrorTemplate } from "../components";


export const NotFoundPage = () => {
    return (
        <ErrorTemplate
            code="404"
            icon={SearchX}
            title="Page Not Found"
            description="The page you are looking for doesn't exist or has been moved. Please check the URL or explore our main sections."
        />
    );
};

export default NotFoundPage;