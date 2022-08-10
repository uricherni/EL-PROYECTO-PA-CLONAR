import { createContext, useContext, useState } from "react";
import MainNavigation from "../Navigation/MainNavigation";
import NotAuthStack from "../Navigation/NotAuthStack";

const UserContext = createContext()

export const useUser = () => useContext(UserContext)

export const UserProvider = () => {
    const [user, SetUser] = useState(false)
    return (
        <UserContext.Provider value={{ SetUser }}>
            {user ? <MainNavigation /> : <NotAuthStack />}
        </UserContext.Provider>
    )
}