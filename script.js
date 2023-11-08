let count  = document.querySelector('.number');  // 0 yazan span seçildi
let value = count.innerHTML;  // sayı kısmına yazdıracağımız değeri seçiyoruz
let btn = document.querySelector('.button');  // buton seçildi


btn.addEventListener('click', function incrementButton(){
    ++value ;  // butona tıklandığğında değeri 1 arttırıyoruz
    count.innerHTML = value;     // sayı kısmına yazdırıyoruz

})