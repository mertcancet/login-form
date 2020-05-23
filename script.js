
const form =document.querySelector('form');
const nick=document.getElementById('formNickname');
const nickname=document.getElementById('nickName')
const mail = document.getElementById('mail');
const formMail =document.getElementById('formMail');
const password =document.getElementById('password');
const formPass =document.getElementById('formPass');


eventListener();

function eventListener(){
    form.addEventListener('submit',submitForm);
}

function submitForm(e){
    

   



    if(nick.value==='' ){
        
        setError(nickname,'*Username boş bırakılamaz')
    }else {
       setSuccess(nickname)
    }
    if(formMail.value===''){
      setError(mail,'*Mail alanı boş bırakılamaz')
    }else{
        setSuccess(mail)
    }

    if(formPass.value===''){
        setError(password,'*Şifre alanı boş bırakılamaz')

    }else if(formPass.value.length<=6 && formPass.value!=''){
        setError(password,'*Şifre 6 karekterden fazla olmak zorundadır')
    }else{
        setSuccess(password)
    }




    e.preventDefault();
}

function setError(input,message){
   console.log(input)
    const formControl = input
	const small = formControl.querySelector('small');
	small.className = 'error';
    small.innerText = message;
    console.log(formControl)
    console.log(small)
}

function setSuccess(input){
    const formControl=input
    const small = formControl.querySelector('small')
    small.className='success'
}