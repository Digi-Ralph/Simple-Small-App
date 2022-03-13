
let rnge_members = document.querySelector('.input-range-members');
let rnge_months = document.querySelector('.input-range-months');
let result = document.querySelector('.content');

let number = document.querySelector('.members-num');
let month = document.querySelector('.month-num');






let a = () => {
    let xvalue = number.textContent = parseFloat(rnge_members.value);
    return xvalue;
};
let b = () => {
    let yvalue = month.textContent = parseFloat(rnge_months.value);
    return yvalue;
    
};

let calc = () => {
    let o =  (a() * b()) * 12;
    let p = o.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
     let u = result.textContent = p;
    return  u;
};




        
        rnge_members.addEventListener('mousemove' , a);
        rnge_months.addEventListener('mousemove' , b);
        rnge_months.addEventListener('mousemove' , calc);
        rnge_members.addEventListener('mousemove' , calc);





