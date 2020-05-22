
const form =document.querySelector('form');
const nick=document.querySelector('#formNickname');
const nickname=document.querySelector('#nickName')
const mail = document.querySelector('#mail');
const formMail =document.querySelector('#formMail');
const password =document.querySelector('#password');
const formPass =document.querySelector('#formPass');

eventListener();

function eventListener(){
    form.addEventListener('submit',submitForm);
}

function submitForm(e){
    
    var bayrak='0';

    
    console.log(nick.value);

    if(nick.value===''&& bayrak === '0' ){
        const labelNick= document.createElement('label');
        labelNick.textContent="*Lütfen nickname giriniz";
        labelNick.classList='text-danger mt-2 ';
        labelNick.id='danger';
        nickname.appendChild(labelNick);
        bayrak='1';
        console.log(bayrak)
    }else if(nick.value!==''){
        labelNick.remove(); 
       
    }
    if(formMail.value===''){
       const labelMail = document.createElement('label');
       labelMail.textContent='*Mail alanı boş bırakılamaz.';
       labelMail.classList='text-danger mt-2 ';
       labelMail.id='danger';
       mail.appendChild(labelMail);
    }else if (formMail!==''){
        labelMail.remove();
    }

    if(formPass.value.length<7){
        const labelPass = document.createElement('label');
        labelPass.textContent='*Şifre en az 6 karekterli olmalıdır.';
        labelPass.classList='text-danger mt-2 ';;
        labelPass.id='danger';
        password.appendChild(labelPass);
    }else if(formPass.value.length>6){
        labelPass.remove();
    }




    e.preventDefault();
}