// sembunyikan lah no hp berikut apabila dia ganjil maka 5 no belakang berubah menjadi x
// jika genap maka cukup 4 nomor yg menjadi x
// contoh = 081213459897 menjadi 0812134xxxxx karena angka paling belakang adalah 7 (ganjil)
// contoh2 = 081213459898 menjadi 08121345xxxx karena angka paling belakang adalah 8 (genap)

let numberPhone = "081213459898"

if (numberPhone.charAt(11) % 2 == 1) {
    console.log(numberPhone.substr(0, 6)+"xxxxx")
} else {
    console.log(numberPhone.substr(0, 7)+"xxxx")
}
