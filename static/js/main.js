function getResult () {
    const getEmail = document.getElementById("email") ;
    return {
        email : getEmail.value 
    }
}
function printEmail () {
    alert(` E-mail eviado para  :  ${getResult().email}`) ;
}
function clickEmail () {
    printEmail();
}

const progressEnter = document.getElementById("btclick") ;
progressEnter.addEventListener("click", clickEmail) ;