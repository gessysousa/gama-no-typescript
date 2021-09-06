interface Usuario {
    nome : string;
    email : string;
    address? : string
}

function getUser() : Usuario {
    return {
        nome : "Gessy",
        email : "gessy@gessy.com"
    }
}

function setUser (usuario : Usuario){
    //...
}