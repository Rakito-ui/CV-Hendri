function sendToWhatsApp(){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name === "" || message === ""){
        alert("Silakan isi Nama dan Pesan terlebih dahulu");
        return;
    }

    const phoneNumber = "6288744931419"; // ganti dengan nomor WhatsApp kamu

    const text = encodeURIComponent(
        "Halo, saya " + name + 
        "\nEmail: " + email + 
        "\n\nPesan:\n" + message
    );

    const url = "https://wa.me/" + phoneNumber + "?text=" + text;

    window.open(url, "_blank");
}


// js tambahan 
window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});

// untuk kebutuhan back to top
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }

});