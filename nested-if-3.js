/**
 * =================
 * Belanja di warung
 * =================
 * 
 * [Description]
 * Ibu meminta tolong kamu untuk belanja di warung.
 * Ibu akan memberikan sejumlah uang dan satu jenis barang yang harus dibeli.
 * Warung tersebut hanya menjual:
 * 1. Wafer seharga 15000
 * 2. Bayam seharga 5000
 * 3. Indomie seharga 2000
 * 
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang telah
 * diberikan dan sisa kembalian uang jika ada. gunakan while!!!!!!
 * 
 * [Example]
 * var @belanja = 'wafer'
 * var @uang = 40000
 * 
 * OUTPUT 1. jika ada kembalian
 * 'Kamu membeli 2 wafer dan memiliki kembalian sebanyak 10000'
 * 
 * OUTPUT 2. jika tidak ada kembalian
 * 'Kamu membeli 2 wafer dan tidak mendapat kembalian
 * 
 * Karena ibu memberikan uang 40000 dan ingin membeli wafer. Maka kamu akan mendapatkan 2 wafer
 * (2 x 15000) serta memiliki kembalian 10000.
 * 
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya wafer, bayam, atau indomie
 */


// Output yang diinginkan => Kamu membeli 51 indomie dan memiliki kembalian sebanyak 1000
// Write your code here
let belanja = '';
let harga;
let uang;
let total;