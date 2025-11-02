import { Lock } from "lucide-react";
import { ErrorTemplate } from "../components";


export const ForbiddenPage = () => {
    return (
        <ErrorTemplate
            code="403"
            icon={Lock}
            title="Access Forbidden"
            description="You don't have permission to access this page. This section is restricted and requires special authorization."
        />
    );
};

export default ForbiddenPage;