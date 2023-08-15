function preinit() { 
    let access = localStorage.getItem("token");
    if (access === "qeklrj23klj2389s") {
        init(); 
    }
    else {
        location.replace("https://downdraftio.github.io/"); 
    }
}

function init() {
    console.log("200"); 
}


preinit(); 
