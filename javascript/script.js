function getAdmins(map){
    let admins = [];
    for([key,value]of map){
        if (value == 'Admin'){
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('luis', 'Admin');
usuarios.set('nicolas', 'Admin');
usuarios.set('jorge', 'User');
usuarios.set('carlos', 'Admin');

console.log(getAdmins(usuarios))