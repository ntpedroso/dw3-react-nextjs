import axios from "axios";

//faz login, logout e grava o token no navegador

//função que coleta o token do LocalStorage
export const getAxiosConfig = () => ({
    //o token fica aqui
    headers: {
        Authorization: `Bearer ${
            //to vendo se o usuário está acessando o site pelo navegador
            typeof window!== "undefined" ? (localStorage.getItem("token") ?? "") : ""
        }`,
    },
});

//função que realiza login
export const login = async (email, password) => {
    try {
        const response = await axios.post("http://localhost:4000/auth", {
            email,
            password
        });
        //armazenando o token devolvido pela api na variável
        const token = response.data.token;
        localStorage.setItem("token", token);
        return {sucess : true};
    } catch (error) {
        return {sucess : false, message: error.message};
    }
};

//função para deslogar
export const logout = (router) => {
    localStorage.removeItem("token");
    router.push("/");
};
