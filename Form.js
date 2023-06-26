
let date = new Date();

let besok = new Date();
besok.setDate(date.getDate() + 1);

let lusa = new Date();
lusa.setDate(besok.getDate() + 1);

let lusaLagi = new Date();
lusaLagi.setDate(lusa.getDate() + 1);

let hariHari = ["Min","Sen","Sel","Rab","Kam","Jum","Sab"];
let bulanBulan = ["Jan","Feb","Mar","apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];

let hariIni = hariHari[date.getDay()];
let tanggalIni = date.getDate();
let bulanIni = bulanBulan[date.getMonth()];

let Waktu1Hari = hariIni + ", " + tanggalIni + ", " + bulanIni;

let hariBesok = hariHari[besok.getDay()];
let tanggalBesok = besok.getDate();
let bulanBesok = bulanBulan[besok.getMonth()];

let waktu2Hari = hariBesok + ", " + tanggalBesok + ", " + bulanBesok;

let hariBesokLusa = hariHari[lusa.getDay()];
let tanggalBesokLusa = lusa.getDate();
let bulanBesokLusa = bulanBulan[lusa.getMonth()];

let waktu3Hari = hariBesokLusa + ", " + tanggalBesokLusa + ", " + bulanBesokLusa;

let hariBesokLusaLagi = hariHari[lusaLagi.getDay()];
let tanggalBesokLusaLagi = lusaLagi.getDate();
let bulanBesokLusaLagi = bulanBulan[lusaLagi.getMonth()];

let waktu4Hari = hariBesokLusaLagi + ", " + tanggalBesokLusaLagi + ", " + bulanBesokLusaLagi;


let malamKe1 = Waktu1Hari + " - " + waktu2Hari;
let malamKe2 = Waktu1Hari + " - " + waktu3Hari;
let malamKe3 = Waktu1Hari + " - " + waktu4Hari;


let selecKamarPerMalam = document.getElementById('kamarPerMalam');
let opsiWaktu = document.getElementById('waktu')

function pilihan()
{
if (selecKamarPerMalam.value === "a") opsiWaktu.innerHTML = (malamKe1);
if (selecKamarPerMalam.value === "b") opsiWaktu.innerHTML = (malamKe2);
if (selecKamarPerMalam.value === "c") opsiWaktu.innerHTML = (malamKe3);
}


$('#package').on('change', function(){
    const price = $('#package option:selected').data('price');
    const discount = $('#package option:selected').data('discount');
    const pengunjung = $ ('#package option:selected').data('pengunjung');
            
            const totalDiscount = (price * discount/100)
            const total = price - totalDiscount;
            
            $('[name=price]').val("IDR" + " " + price);
            $('[name=discount]').val("IDR" + " " + totalDiscount);
            $('#Pengunjung').text(pengunjung)
            
            $('#total').text(`IDR ${total}`);
        });


document.getElementById("tombol_form")
addEventListener("click", tampilkan_nilai_form);

function tampilkan_nilai_form(){
    const nilaiFormNama=document.getElementById("inputNama").value;
    document.getElementById("outputNama").innerHTML= ":" +nilaiFormNama;

    const nilaiFormTelp = document.getElementById("inputTelp").value;
    document.getElementById("outputTelp").innerHTML= ":" + nilaiFormTelp;

    const nilaiFormEmail = document.getElementById("inputEmail").value;
    document.getElementById("outputEmail").innerHTML= ":" + nilaiFormEmail;    
};


let tambahNilai = document.getElementById('copas')
let hasilTambahNilai = document.getElementById('hasilCopas')

let like = 0 ;

tambahNilai.addEventListener('click',() =>{
    like++;

hasilTambahNilai.textContent = like;
});

let tambahNilai2 = document.getElementById('copasPart2')
let hasilTambahNilai2 = document.getElementById('hasilCopasPart2')

let dislike = 0 ;

tambahNilai2.addEventListener('click',() =>{
    dislike++;

hasilTambahNilai2.textContent = dislike;
});