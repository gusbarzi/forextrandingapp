import React, { useState, createContext } from "react";

type UserContextData = {
    _id: string,
    balance: number;
    dolar: number;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

type PropsUserContext = {
    login: boolean;
    setLogin: React.Dispatch<React.SetStateAction<any>>;
    usuario: UserContextData;
    setUsuario: React.Dispatch<React.SetStateAction<any>>;

}

const DEFAULT_VALUE = {
    login: false,
    setLogin: () => {},
    usuario: {
        _id: '',
        balance: 0,
        dolar:0,
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    },
    setUsuario: () => {}
}

export const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

function UserProvider({ children }:any) {
    const [login, setLogin] = useState(false);
    const [usuario, setUsuario] = useState<any>();

    return (
        <UserContext.Provider value={{login, setLogin, usuario, setUsuario}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;