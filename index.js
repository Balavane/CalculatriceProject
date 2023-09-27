/* Dave tu fais la fonction add, multiplication*/
const Add = ()=>{

}
const Mult = ()=>{
    
}
/* Moi je veux faire la soustration et la division */
const Soustr = (a,b)=>{
    return a - b;
    
}
const Div = (a,b)=>{
    return a / b;
}

/* La fonction pricipale on le fait à 2 et puis on vas voir quoi implemente*/
const Calculatrice = (a,b,opera)=>{
    if(opera == "Soustration"){
        return Soustr(a,b)
    }else if(opera == "Division"){
        return Div(a,b)
    }else{
        return "Desole vous devez  entre le nombre 1 et nombre 2 puis choisir une operation"
    }
}

console.log(Calculatrice(2,6, "Division"))
