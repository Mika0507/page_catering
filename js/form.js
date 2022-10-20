    const FORM = document.getElementById("form");
    const NOMBRE = document.getElementById("nombre");
    const NUMERO = document.getElementById("numero");
    const EMAIL = document.getElementById("email");
    const CHECK = document.getElementById("check");

    let nomError = document.getElementById("nom-error");
    let numError = document.getElementById("num-error");
    let numError1 = document.getElementById("num-error1");
    let emailError = document.getElementById("email-error");
    let emailFormatError = document.getElementById("email-format-error");
    let nonCheck = document.getElementById("non-check");


    FORM.addEventListener("submit", evento => {
        evento.preventDefault();
        comprobarCampos();
    });

    function comprobarCampos(){
        const NOMVALUE = NOMBRE.value.trim();
        const NUMVALUE = NUMERO.value.trim();
        const EMAILVALUE = EMAIL.value.trim();
        const CHECKVALUE = CHECK.value;

        if(NOMVALUE === ""){
            document.querySelector("#nombre").style.border="1px solid red";
            nomError.classList.toggle("mostrar");
        }else{
            document.querySelector("#nombre").style.border="1px solid green";
            nomError.className = "ocultar";
        }

        if(NUMVALUE < 20){
            document.querySelector("#numero").style.border= "1px solid red";
            numError.classList.toggle("mostrar");
        }else if(NUMVALUE > 200){
            document.querySelector("#numero").style.border= "1px solid red";
            numError1.classList.toggle("mostrar");
        }else{
            document.querySelector("#numero").style.border= "1px solid green";
            numError.className = "ocultar";
            numError1.className = "ocultar";
        }

        if(EMAILVALUE === ""){
            document.querySelector("#email").style.border = "1px solid red";
            emailError.classList.toggle("mostrar");
        }else if(!isEmail(EMAILVALUE)){
            document.querySelector("#email").style.border = "1px solid red";
            emailFormatError.classList.add("mostrar");
        }else{
            document.querySelector("#email").style.border = "1px solid green";
            emailError.className = "ocultar";
            emailFormatError.className = "ocultar";
        }

        if(CHECKVALUE != "unchecked"){
            document.querySelector("#check");
            nonCheck.classList.toggle("mostrar") .setAttribute("style","color:red;");
        }else{
            document.querySelector("#check");
            nonCheck.className = "ocultar";
        }
    }

    function isEmail(EMAIL){
        return /^[a-zA-Z0-9.!#$%&"*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(EMAIL);
    }