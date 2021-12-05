const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

const inputDk = document.getElementById("input-dk");
const inputSn = document.getElementById("input-sn");

const baslat = document.getElementById("baslat");
const sıfırla = document.getElementById("sıfırla");
const stop = document.getElementById("durdur");

let dur = false;
var interval;


inputDk.addEventListener("input",() => {
    dakika.textContent = inputDk.value;
});
inputSn.addEventListener("input",() => {
    saniye.textContent = inputSn.value < 10 ? "0" + inputSn.value : inputSn.value;
});

baslat.addEventListener("click",startTimer);

sıfırla.addEventListener("click",()=> {
    dur = true;
    saniye.textContent = "00";
    dakika.textContent = "00";
    inputDk.value = "00";
    inputSn.value = "00";
});

stop.addEventListener("click",()=> {
    clearInterval(interval);
});


function startTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    interval = setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1"){
            dk--; 
            sn=59;
        }
        if(sn == 0 && dk == 0 || (sn == 00) && (dk == 00)){
            clearInterval(interval);
            window.alert("süre doldu");
            inputDk.value="00"
            inputSn.value="00"
        }

        if(dur){
            clearInterval(interval);
            dur = false;
            return;
        }

        dakika.textContent = dk;
        saniye.textContent = sn;
    },1000)
}

