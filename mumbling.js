// mumbling adalah ketika orang kebanyakan minum alkohol dan mengakibatkan bicara yg kurang jelas..
// buatlah program untuk memprediksi mumbling seseorang ketika dia mabuk berat
// contoh str = "saya".. maka menjadi "S-Aa-Yyy-Aaaa" sesuai dengan urutan dan jumlah nya 
// penjelasan : 
// karena s pertama maka s dianggap posisi 1 dan tidak perlu di ulang tapi setiap huruf pertama 
// dari mumbling hrus menjadi huruf kapital
//  huruf a kedua menjadi Aa.. karena ada di posisi kedua,, dan yg pertama menjadi kapital
// ingat bahwa setiap huruf harus dtambah "-" sebagai penghubung

function mumbling(str) {
    return str.split('').map((karakter, i) => (karakter.toUpperCase() + karakter.toLowerCase().repeat(i))).join('-');
  }
  console.log(mumbling('saya'));
