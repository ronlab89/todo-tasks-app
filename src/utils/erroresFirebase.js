export const erroresFirebase = (code) => {
    switch(code){
        case 'auth/invalid-email':
            return {
                code: 'email',
                message: 'Formato de email no válido'
            };
        case 'auth/weak-password':
            return {
                code: 'password',
                message: 'Contraseña muy corta, debe tener al menos 6 caracteres'
            };    
        case 'auth/email-already-in-use':
            return {
                code: 'email',
                message: 'Email ya esta en uso'
            };
        case 'auth/network-request-failed':
            return {
                code: 'email',
                message: 'Error de conexion!'
            };
        case 'auth/wrong-password':
            return {
                code: 'password',
                message: 'Password Incorrecta'
            };    
        case 'auth/user-not-found':
            return {
                code: 'email',
                message: 'Email no existe'
            };
        case 'auth/missing-email':
            return {
                code: 'emailReset',
                message: 'No se encontro el correo electonico en nuestro servidor, Intenta de nuevo'
            };
    }
}