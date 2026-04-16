
// Basic Promise
function ambilData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const sukses = false; //(true & false) untuk melihat sukses dan gagal
            if (sukses) {
                resolve("Data berhasil diambil");  //kirim ke .then
            } else {
                reject("Gagal ambil data");
            }
        }, 3000)
    });
};

ambilData()
    .then((hasil) => {
        console.log(`hasil: ${hasil}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });


// Real Case Promise
function getUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(Response => Response.json()); // convert ke json
};

    getUser()
.then(data => {
    console.log(`${data.name}`);
})
.catch(err => {
    console.error(`${err}`);
});