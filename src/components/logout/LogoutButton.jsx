import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="btn btn-primary" onClick={() => logout()}>
               Deconnexion
            </button>
        )
    )
}

export default LogoutButton