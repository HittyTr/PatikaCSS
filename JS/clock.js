//isim
let greetingName=document.getElementById("myName")
    greetingName.textContent=`${prompt("Adınız?")}`

//saat

function saat1(){
    
let saat=new Date().getHours()<10? `0${new Date().getHours()}`:new Date().getHours()
let dakika=new Date().getMinutes()<10? `0${new Date().getMinutes()}`:new Date().getMinutes()
let saniye=new Date().getSeconds()<10? `0${new Date().getSeconds()}`:new Date().getSeconds()
let gün=new Date().getDay()
if(gün==1){
gün="Pazartesi"
}
else if(gün==2){
gün="Salı"
}
else if(gün==3){
gün= "Çarşamba"
}
else if(gün==4){
gün="Perşembe"
}
else if(gün==5){
gün="Cuma"
}
else if(gün==6){
gün="Cumartesi"
}
else if(gün==7){
gün="Pazar"
}
let sonSaat=document.getElementById("myClock")
    sonSaat.textContent=`${saat}:${dakika}:${saniye} ${gün}`
setInterval(saat1, 1000);

}

saat1()


