let selectedFilm = "";
let price = 0;

// update film (foto + harga)
function updateFilm() {
    let select = document.getElementById("filmSelect");
    let selectedOption = select.options[select.selectedIndex];

    selectedFilm = selectedOption.value;
    price = selectedOption.getAttribute("data-price");
    let img = selectedOption.getAttribute("data-img");

    if (selectedFilm) {
        document.getElementById("filmPreview").innerHTML = `
            <h3>${selectedFilm}</h3>
            <img src="${img}">
            <p>Harga: Rp${price}</p>
        `;
    }
}

// tampil pembayaran
function showPaymentInfo() {
    let method = document.getElementById("paymentMethod").value;
    let info = document.getElementById("paymentInfo");

    if (method === "ewallet") {
        info.innerHTML = "E-Wallet (DANA/OVO): <b>08568147815</b>";
    } 
    else if (method === "bank") {
        info.innerHTML = "Bank BCA: <b>1234567890</b>";
    } 
    else if (method === "qris") {
        info.innerHTML = `
            Scan QRIS:<br>
            <img src="myfather.jpg">
        `;
       
    } 
    else if (method === "cash") {
        info.innerHTML = "Bayar langsung di lokasi";
    } 
    else {
        info.innerHTML = "";
    }
}

// booking
function bookTicket() {
    let jumlah = document.getElementById("jumlah").value;
    let method = document.getElementById("paymentMethod").value;

    if (!selectedFilm || !jumlah || !method) {
        alert("Lengkapi semua data!");
        return;
    }

    let total = price * jumlah;

    let message = `Booking Tiket Bioskop Mini
Film: ${selectedFilm}
Jumlah Orang: ${jumlah}
Metode: ${method}
Total: Rp${total}

Saya akan kirim bukti pembayaran.`;

    let wa = "https://wa.me/628568147815?text=" + encodeURIComponent(message);

    document.getElementById("result").innerHTML = `
        <h3>Booking Berhasil 🎉</h3>
        Total: Rp${total}<br><br>
        <a href="${wa}" target="_blank">
            Kirim Bukti via WhatsApp
        </a>
    `;
}