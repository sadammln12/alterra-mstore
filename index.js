function pilihanLawan(){
    comp = Math.random();

    if (comp <0.34) return 'gunting';
    
    if (comp >=0.34 && comp <0.67) return 'batu';
    
    return 'kertas';
}

function getHasil(pemain, comp){
    if (pemain == comp) return "seri";
    if (pemain == "kertas") return (comp == "batu") ? "Menang" : "Kalah";
    if (pemain == "batu") return ( comp == "kertas") ? "Kalah" : "Menang" 
    if (pemain == "gunting") return (comp == "batu") ? "Kalah" : "Menang";

}


const pilihan = document.querySelectorAll('.player a')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
    const computer = pilihanLawan();
    const pemain = pil.className;
    const hasilGame = getHasil(pemain, computer);

    const pilihanKomputer = document.querySelector('.pcomp');
    pilihanKomputer.style.fontSize ="25px";
    pilihanKomputer.style.textTransform ="Capitalize"
    pilihanKomputer.style.fontWeight ="bold"
    pilihanKomputer.innerHTML = computer;

    const info = document.querySelector('.info');
    info.style.color ="white"
    info.innerHTML=hasilGame;
});

    })

    

// const pemainKertas = document.querySelector('.kertas')
// pemainKertas.addEventListener('click', function(){
//     const computer = pilihanLawan();
//     const pemain = pemainKertas.className;
//     const hasilGame = getHasil(pemain, computer);

//     console.log('pemain :' +pemain);
//     console.log('com :' + computer);
//     console.log('hasil :' +hasilGame);

//     const pilihanKomputer = document.querySelector('.pcomp');
//     pilihanKomputer.innerHTML = computer;

//     const info = document.querySelector('.info');
//     info.innerHTML=hasilGame;
// })


