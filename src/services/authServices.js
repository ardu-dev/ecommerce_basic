import axios from "axios"

const loginService = async (form) => {

    // const form = {
    //     user_name: "Falso123",
    //     password: "Falso123"
    // }

   const resp = await axios.post("https://ecommerce-basic-api.onrender.com/auth/iniciar_sesion", form)

   return resp;
}

export { loginService }