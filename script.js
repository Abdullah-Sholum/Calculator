function dis(val) {
    document.getElementById("result").value += val  //buat fungsi untuk mengambil nilai result. kemudian masukkan ke value, kemudian masukkan value dengan nilai dari val
}

function myFunction(event) {
    /*buat percabangan dengan kondisi jika event handler angka maka */
    if (event.key == '0' || event.key == '1'          
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '6'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/'
    )
    document.getElementById("result").value += event.key; //ambil elemen dengan id result kemudian masukkan ke value. tambahkan value dengan event handler key
} 

var cal = document.getElementById("calcu");         //inisiasi dengan mengambil elemen dengan id calcu
cal.onkeyup = function (event) {                    //beri calcu dengan event handler keyup / ketuka tombol keyboard diangkat. kemudian buat fungsi anonim
    if (event.keyCode === 13) {                     //buat percabangan jika event adalah enter. 13 merupakan kode untuk enter. === merupakan operator pembanding 
        console.log("enter");                       //ketik enter di log
        let x  = document.getElementById("result").value        //inisiasi x dengan mengambil elemen dengan id result. kemudian masukkan nilai ke value
        console.log(x);                             //print x
        solve();                                    //panggil fungsi solve
    }
}

function solve() {                                      //buat fungsi solve
    let x = document.getElementById("result").value     
    let y = math.evaluate(x)                            //inisiasi y dengan fungsi math.evaluate x
    document.getElementById("result").value = y         //id result. inisiasi value dengan y
}

function clr() {                                        //buat fungsi clr
    document.getElementById("result").value = ""        //atur value dari id result dengan string kosong
}