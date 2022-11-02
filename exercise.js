function  printAsyncName (callback, name) {
    setTimeout(() => callback(), 1000)
    setTimeout(() => console.log(name), 2000)
}

printAsyncName(()=>console.log("Hello"), "Chiara");


/*In risposta alla domanda:
Perchè è una funzione anonima. */