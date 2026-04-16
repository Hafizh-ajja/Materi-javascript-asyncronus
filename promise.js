function ambilData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const sukses = false; //(true & false) untuk melihat sukses dan gagal
            if(sukses) {
                resolve("Data berhasil diambil");  //kirim ke .then
            } else {
                reject("Gagal ambil data");
            }
        },3000)
    });
};

ambilData()
.then((hasil) => {
    console.log(`hasil: ${hasil}`);
})
.catch((error) => {
    console.error(`Error: ${error}`);
});