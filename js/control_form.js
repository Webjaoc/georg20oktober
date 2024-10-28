const form = document.getElementById("formular");

const vorname = document.getElementById("vorname");
const nachname = document.getElementById("nachname");
const email = document.getElementById("email");
const rep_email = document.getElementById("confirm_email");
//const firma = document.getElementById("firma");
const politik = document.getElementById("politik");
const senden = document.getElementById("btn_senden");


let validiert ={
    vorname: false,
    nachname: false,
    email: false,
    rep_email: false,
    //firma: false,
    politik: false,
}



//message error
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
    
}

//if all is ok
function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


vorname.addEventListener("blur",()=>{
    let vorname_re = /^[a-zA-Z]{3,30}$/;
    if(vorname.value == "" || vorname.value == null){
        validiert.vorname = false;
        setErrorFor(vorname, "Der vorname darf nicht leer sein.");
    }else{
        if(!vorname_re.exec(vorname.value)){
            validiert.vorname = false;
            setErrorFor(vorname, "Der vorname muss zwischen 3 und 30 Zeichen lang sein.")
        }else{
            validiert.vorname = true;
            setSuccessFor(vorname);
        }
    }
})
nachname.addEventListener("blur",()=>{
    let nachname_re = /^[a-zA-Z]{3,30}$/;
    if(nachname.value == "" || nachname.value == null){
        validiert.nachname = false;
        setErrorFor(nachname, "Der nachname darf nicht leer sein.");
    }else{
        if(!nachname_re.exec(nachname.value)){
            validiert.nachname = false;
            setErrorFor(nachname, "Der nachname muss zwischen 3 und 30 Zeichen lang sein.")
        }else{
            validiert.nachname = true;
            setSuccessFor(nachname);
        }
    }
})
email.addEventListener("blur",()=>{
    let email_re =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if(email.value == "" || email.value == null){
        validiert.email = false;
        setErrorFor(email, "Die Email darf nicht leer sein.");
    }else{
        if(!email_re.exec(email.value)){
            validiert.email = false;
            setErrorFor(email, "Das Format muss korrekt sein.")
        }else{
            validiert.email = true;
            setSuccessFor(email);
        }
    }
})
rep_email.addEventListener("blur",()=>{
    //let rep_email_re =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
    if(rep_email.value == "" || rep_email.value == null ){
        validiert.rep_email = false;
        setErrorFor(rep_email, "Die Email darf nicht leer sein.");
    }else{
        if(rep_email.value !== email.value){
            validiert.rep_email = false;
            setErrorFor(rep_email, "E-Mail stimmt nicht überein.")
        }else{
            validiert.rep_email = true;
            setSuccessFor(rep_email);
        }
    }
})
/*firma.addEventListener("blur",()=>{
    let firma_re = /^[a-zA-Z0-9]{3,100}$/;
    if(firma.value == "" || firma.value == null){
        validiert.firma = false;
        setErrorFor(firma, "Die Firma darf nicht leer sein.");
    }else{
        if(!firma_re.exec(firma.value)){
            validiert.firma = false;
            setErrorFor(firma, "Die Firma muss zwischen 3 und 100 Zeichen lang sein.")
        }else{
            validiert.firma = true;
            setSuccessFor(firma);
        }
    }
})*/
politik.addEventListener("blur",()=>{
    if(!politik.checked){
        validiert.politik = false;
        setErrorFor(politik, "Die politik darf nicht leer sein.");
        
    }else{
        validiert.politik = true;
        setSuccessFor(politik);
    }
})


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let errorV = false;

    for(const property in validiert){
        if(validiert[property] == false){
            errorV = true;
        }
    }
    
    if(!errorV){
        //senden.disabled = false;
        form.submit();
    }
})