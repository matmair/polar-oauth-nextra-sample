'use client';
import { useAuth } from "react-oidc-context";

export default function UserInfo(){
    const auth = useAuth();

    if (!auth.isAuthenticated) return <h4>Not Authenticated</h4>;
    return <>
        <h4>Access Token</h4>
        <pre>{auth?.user?.access_token}</pre>
        <h4>User Information from JWT</h4>
        <pre>{JSON.stringify(auth?.user?.profile, null, 2)}</pre>
    </>;
};
