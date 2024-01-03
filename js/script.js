const alas = document.getElementById('input-alas');
const tinggi = document.getElementById('input-tinggi');
const area = document.getElementById('hitung-luas');
const luas = document.getElementById('output-luas');
area.addEventListener('click', function () {
    let a = alas.value;
    let t = tinggi.value;
    let l = 0.5 * a * t;
    luas.innerHTML = `Luas segitiga dari Alas = ${a} cm dan Tinggi = ${t} cm adalah ${l} cm2.`;
})

const sisi1 = document.getElementById('input-sisi1');
const sisi2 = document.getElementById('input-sisi2');
const sisi3 = document.getElementById('input-sisi3');
const perimeter = document.getElementById('hitung-keliling');
const keliling = document.getElementById('output-keliling');
perimeter.addEventListener('click', function () {
    let s1 = +sisi1.value;
    let s2 = +sisi2.value;
    let s3 = +sisi3.value;
    let k = s1+s2+s3;
    keliling.innerHTML = `Keliling segitiga dari A = ${s1} cm, B = ${s2} cm, dan C = ${s3} cm adalah ${k} cm.`;
})

let btnClear = document.querySelector('buttton');
let inputs = document.querySelectorAll('input');
btnClear.addEventListener('click',() => {
    inputs.forEach(input => input.value ='');
})