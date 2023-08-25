
let std1 = document.getElementById('std1');
let std2 = document.getElementById('std2');
let std3 = document.getElementById('std3');

let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let a4 = document.getElementById('a4');

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');

let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');

let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');

let e1 = document.getElementById('e1');
let e2 = document.getElementById('e2');
let e3 = document.getElementById('e3');
let e4 = document.getElementById('e4');

let arw1 = document.getElementById('arrow1');
let arw2 = document.getElementById('arrow2');
let arw3 = document.getElementById('arrow3');

std1.addEventListener('click',()=>{
    std1.style.backgroundColor='red';
    std2.style.backgroundColor='#ee5c63';
    std3.style.backgroundColor='#ee5c63';
    
    arw1.style.color='red';
    arw2.style.color='white';
    arw3.style.color='white';

    a2.style.color="red";
    b2.style.color="red";
    c2.style.color="red";
    d2.style.color="red";
    e2.style.color="red";

    a3.style.color="#4c4c4c";
    b3.style.color="#4c4c4c";
    c3.style.color="#4c4c4c";
    d3.style.color="#4c4c4c";
    e3.style.color="#4c4c4c";

    a4.style.color="#4c4c4c";
    b4.style.color="#4c4c4c";
    c4.style.color="#4c4c4c";
    d4.style.color="#4c4c4c";
    e4.style.color="#4c4c4c";
})

std2.addEventListener('click',()=>{
    std1.style.backgroundColor='#ee5c63';
    std2.style.backgroundColor='red';
    std3.style.backgroundColor='#ee5c63';

    arw1.style.color='white';
    arw2.style.color='red';
    arw3.style.color='white';

    a3.style.color="red";
    b3.style.color="red";
    c3.style.color="red";
    d3.style.color="red";
    e3.style.color="red";

    a2.style.color="#4c4c4c";
    b2.style.color="#4c4c4c";
    c2.style.color="#4c4c4c";
    d2.style.color="#4c4c4c";
    e2.style.color="#4c4c4c";

    a4.style.color="#4c4c4c";
    b4.style.color="#4c4c4c";
    c4.style.color="#4c4c4c";
    d4.style.color="#4c4c4c";
    e4.style.color="#4c4c4c";
})

std3.addEventListener('click',()=>{
    std1.style.backgroundColor='#ee5c63';
    std2.style.backgroundColor='#ee5c63';
    std3.style.backgroundColor='red';

    arw1.style.color='white';
    arw2.style.color='white';
    arw3.style.color='red';

    a2.style.color="#4c4c4c";
    b2.style.color="#4c4c4c";
    c2.style.color="#4c4c4c";
    d2.style.color="#4c4c4c";
    e2.style.color="#4c4c4c";

    a3.style.color="#4c4c4c";
    b3.style.color="#4c4c4c";
    c3.style.color="#4c4c4c";
    d3.style.color="#4c4c4c";
    e3.style.color="#4c4c4c";

    a4.style.color="red";
    b4.style.color="red";
    c4.style.color="red";
    d4.style.color="red";
    e4.style.color="red";
})