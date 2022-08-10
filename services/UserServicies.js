import UsuarioValido from './UsuarioValido.json'

async function login(usuario, contraseña){
    if (usuario === UsuarioValido.user && contraseña === UsuarioValido.password){
        return true
    } else {
        throw new Error("usuario y/o contrseña incorrecta")
    }
}

export default {
    login, 
}