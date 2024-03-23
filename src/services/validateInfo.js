export const isCompletedInfo =( name, email, password, phone, role="user" ) =>{
    if(!name || !email || !password || !phone || !role){
        return false
    }
    return true
};