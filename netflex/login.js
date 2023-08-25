let password = document.getElementById('password');
let loginid = document.getElementById('loginid');
let idErr = document.getElementById('idErr');
let pasErr = document.getElementById('pasErr');
let aab = document.getElementById('aab');
let count = 0;

let id='aaa@naver.com';
let pw='1234'
password.addEventListener('click',function(){
    password.style.borderBottom=`1px solid orangered`;
    aab.innerText = `표시`;
})

loginid.addEventListener('click',function(){
    loginid.style.borderBottom=`1px solid orangered`;
})

aab.addEventListener('click',()=>{
    count++;
    if(count%2==0){
        aab.innerText = '표시';
    }else if(count%2!=0){
        aab.innerText = '숨기기';
    }

})

loginid.addEventListener('click',id);
password.addEventListener('click',paw);

function id(){
  
    if(loginid.value.length == 0){
        idErr.innerHTML = `<span color="red">정확한 이메일 주소나 전화번호를 입력하세요.</span>`;
    }
}
function paw(){ 
    if(password.value.length == 0){
        pasErr.innerHTML = `<span>비밀번호는 4~60자 사이여야 합니다.</span>`;
    }
}


let lag = document.getElementById('lag');
let kor = document.getElementById('kor');
let eng = document.getElementById('eng');



function lagChg(){
    
    console.log(eng.value);
    if(chg === eng.value){
        window.location.href()
    }else{
        
    }
}

function lagChg(element) {
    var selectedValue = element.value;
    var chg = element.value;

    // 선택된 값에 따라 리다이렉션 처리
    if (chg === "한국어") {
      window.location.href = "/netflex/loginEng.html";
    }else if(selectedValue === "English") {
      window.location.href = "/netflex/loginEng.html";
    }
  }

  window.redirect = redirect;

