// ASYNC-WAIT
// basic


// function ambilData() {
//     return new Promise ((resolve) => {
//         console.log("Proses Mengambil data...");
//         setTimeout(() => {
//             resolve("Data berhasil diambil");
//         },4000);  
//     })
// }

// async function main() {
//     const hasil = await ambilData();
//     console.log(hasil);
// }

// main();


// REAL CASE ASYNC-WAIT

async function getUser() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1",
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    
}

getUser();  