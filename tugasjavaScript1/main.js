// tebak jodoh menggunakan if , else, nested if
function prosesTebakJodoh() {
    const namaInput = document.getElementById('nama');
    const outputTebakJodoh = document.getElementById('outputTebakJodoh');
    const nama = namaInput.value; 

    let nilai = Math.random();
    console.log(nilai);
    if (nilai < 0.40) {
        outputTebakJodoh.value = `Jangan berharap ${nama} sedang makan seblak sama orang lain.`;
    } else if (nilai >= 0.40 && nilai < 0.75) {
        outputTebakJodoh.value = `Mending tidur, soalnya banyak yang ngincer ${nama}.`;
    } else {
        outputTebakJodoh.value = `Sikat, bang! Keburu ${nama} direbut sama yang lain.`;
    }
}

// tebak angka dadu buat taruhan sama temen menggunakan while
function prosesCetakHarga() {
    const kopis = document.getElementById('kopis');
    const output = document.getElementById('output2');

    const selectedKopi = kopis.value;

    switch (selectedKopi) {
        case 'gooday':
            let harga1 = 5000;
            output.value = `Harga kopi Gooday : ${harga1} rupiah`;
            break;
        case 'kapal':
            let harga2 = 3000;
            output.value = `Harga kopi Kapal Api : ${harga2} rupiah`;
            break;
        case 'abc':
            let harga3 = 4000;
            output.value = `Harga kopi ABC : ${harga3} rupiah`;
            break;
        default:
            output.value = 'Pilih kopi terlebih dahulu';
            break;
    }
}
// mengitung jumlah suku kata
function prosesCetak() {
    const inputHuruf = document.getElementById('huruf');
    const huruf = inputHuruf.value;
    const output = document.getElementById('output3');
    let jumlahHuruf = 0;

    for (let i = 0; i < huruf.length; i++) {
        if ((huruf[i] >= 'a' && huruf[i] <= 'z') || (huruf[i] >= 'A' && huruf[i] <= 'Z')) {
            jumlahHuruf++;
        }
    }
    output.value = `Jumlah huruf yang ada pada kata ${huruf} adalah ${jumlahHuruf}`;
}

// mencetak kata sesuai inputan yang dilakukan user
function prosesCetakWhile() {
    const inputText = document.getElementById('text');
    const inputAngka = document.getElementById('angka');
    const text = inputText.value;
    const angka = inputAngka.value;
    const output = document.getElementById('output4');
    let i = 1; 
    let hasil = ''; 

    while (i <= angka) {
        hasil += text;
        i++;
    }

    output.value = hasil + ''; 
}

// membuat sandi menggunakan do while
function prosesCetakDoWhile() {
    let percobaan = 0;
    let izinAkses = false;

    do {
        const inputPassword = document.getElementById('password');
        const inputPasswordBaru = document.getElementById('passwordBaru');
        const password = inputPassword.value;
        const passwordBaru = inputPasswordBaru.value;
        const output = document.getElementById('output5');
        percobaan++;

        if (password === passwordBaru) {
            izinAkses = true;
            output.value = `Izin diberikan`;
        } else {
            output.value = `Password salah, silahkan cek kembali`;
        }
    } while (!izinAkses && percobaan < 3); 
}









