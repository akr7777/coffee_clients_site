import { useNavigate } from "react-router"
import { PATHS } from "../../router/app-router"
import { useEffect } from "react";

export const NotFoundPage = () => {
    
    const navigate = useNavigate()

    useEffect(() => {
        navigate(PATHS.root)

    }, [])

    return null
}