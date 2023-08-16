function preinit() { 
    let access = sessionStorage.getItem("token");
    if (access === "qeklrj23klj2389s") {
        welcomemessage(); 
    }
    else {
        location.replace("https://www.downdraftio.github.io"); 
    }
}

function init() {
    goals.first(); 
    document.getElementById("backgroundmusic").play(); 
}

function welcomemessage() { 
    swal.fire({
        title: "Welcome to my Vision Board!",
        icon: "success",
        color: "white", 
    }).then((result)=> {
        init(); 
    });
}

let goals = { 
    first() { 
        swal.fire({
            title: "Info Card",
            html: "My first goal for this year is to save 20 dollars...<br> 😭😭😭 yes $20 for something very important!", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
        document.getElementsByClassName("whalecontainer")[0].style.display = "block"; 
        setTimeout(()=>{goals.second();}, 10000);  
        swal.fire({
            title: "Info Card",
            html: "And that something is the movie The Whale! Starring my lord and savor Brendon Fraser!", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000, 
        })}, 10000);
    }, 
    second() { 
        document.getElementsByClassName("whalecontainer")[0].style.animation = "slightmovement 5s infinite"; 
        swal.fire({
            title: "Info Card",
            html: "My second goal for this year is to stop procrastinating so much on literally everything I do!", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("procrastinator")[0].style.display = "block"; 
            setTimeout(()=>{goals.third();}, 10000);  
            swal.fire({
                title: "Info Card",
                html: "In fact I'm writing this very card at 9:37PM the day before this assignment is DUE!", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    },
    third() { 
        document.getElementsByClassName("procrastinator")[0].style.animation = "slightmovement 5s infinite";  
        swal.fire({
            title: "Info Card",
            html: "My third goal this year is to learn more about the launguage that has powered this very expierence so far!", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("jscontainer")[0].style.display = "block"; 
            setTimeout(()=>{goals.fourth();}, 10000);  
            swal.fire({
                title: "Info Card",
                html: "And that language is Javascript possibly the greatest programming languages ever concieved, <br> and definetiely the one I want to know more about.", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    },
    fourth() { 
        document.getElementsByClassName("jscontainer")[0].style.animation = "slightmovement 5s infinite";   
        swal.fire({
            title: "Info Card",
            html: "One of my visions for the future is being trying to make a <br> name for my self on the good ol' youtube.com...", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("youtubecontainer")[0].style.display = "block";  
            setTimeout(()=>{goals.fifth();}, 10000);  
            swal.fire({
                title: "Info Card",
                html: "Being a youtuber isn't simple nor is it easy so I'll need to do <br> more research on how to abuse the algorithim before whenever I start!", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    },
    fifth() { 
        document.getElementsByClassName("youtubecontainer")[0].style.animation = "slightmovement 5s infinite";   
        swal.fire({
            title: "Info Card",
            html: "Another goal I have for the future is attending college in the state of Florida.", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("fgcucontainer")[0].style.display = "block";  
            setTimeout(()=>{goals.sixth();}, 10000);  
            swal.fire({
                title: "Info Card",
                html: "If I do end up going to college in Florida I would probably pick FGCU <br> because of its close proximity and high acceptance rate.", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    },
    sixth() { 
        document.getElementsByClassName("fgcucontainer")[0].style.animation = "slightmovement 5s infinite";
        swal.fire({
            title: "Info Card",
            html: "A goal I would like to accomplish in the next year is reading George Orwell's 1984.", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("container1984")[0].style.display = "block"; 
            setTimeout(()=>{goals.seventh();}, 10000);  
            swal.fire({
                title: "Info Card",
                html: "I hear the book is very true today, <br> and I would love to get some ideas so when I become an AI writier so I know how to take over the world.", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    },
    seventh() { 
        document.getElementsByClassName("container1984")[0].style.animation = "slightmovement 5s infinite"; 
        swal.fire({
            title: "Info Card",
            html: "Finally a goal I would like to complete this following year is becoming over political again.", 
            color: "white", 
            position: 'top-end',
            toast: true, 
            showConfirmButton: false,
            timer: 10000,
        });
        setTimeout(()=> { 
            document.getElementsByClassName("obamacontainer")[0].style.display = "block";  
            setTimeout(()=>{finish();}, 10000); 
            swal.fire({
                title: "Info Card",
                html: "I love politics I want to expeierence every part of the 2024 for purley entertainment and research purposes only!", 
                color: "white", 
                position: 'top-end',
                toast: true, 
                showConfirmButton: false,
                timer: 10000, 
        })}, 10000);
    }
}

function finish() { 
    document.getElementsByClassName("obamacontainer")[0].style.animation = "slightmovement 5s infinite";
    document.getElementById("visionboardfinal").play(); 
    setTimeout(()=>{document.getElementsByClassName("pagecontainer")[0].style.animation = "zoomOutDown 5s infinite";}, 10000);
    setTimeout(()=>{document.getElementsByClassName("pagecontainer")[0].style.display = "none"}, 15000);
    setTimeout(()=>{sessionStorage.removeItem("token"); location.replace("https://downdraftio.github.io/")}, 25000); 
}

preinit();
