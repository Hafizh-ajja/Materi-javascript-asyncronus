// =====(CONTOH CODE CALLBACK)=====

function ambildata(callback, errorCallback) {
    setTimeout(()=>{
        const sukses = true; //(true & false) untuk melihat sukses dan gagal

        if(sukses) {
            callback("Data berhasil diambil");
        } else {
            errorCallback("Gagal");
        }
    },3000)
}

function sukses(data) {
    console.log(`sukses: ${data}`);
}

function error(error) {
    console.log(`Error: ${error}`);
}

ambildata(sukses, error);

// =====(CONTOH REAL CASE CALLBACK)=====

function getUser(callback, errCallback) {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((err) => errCallback(err));
}

function tampilkanUser(data) {
    console.log(`nama User: ${data.name}`);
}

function handleError() {
    console.log(`ErrorBoss: ${error}`);
}

getUser(tampilkanUser, handleError);


