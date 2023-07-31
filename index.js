const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#modal-close-btn");
const consentForm = document.querySelector("#consent-form");
const modalText = document.querySelector("#modal-text");
const modalInner = document.querySelector('#modal-inner')

setTimeout(() => (modal.style.display = "inline"), 1500);

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
    Uploading your data to the dark web...
    </p>
    </div>`;
  setTimeout(() => {
    document.querySelector("#uploadText").textContent = `Making the 
       sale...`;
  }, 1500);
  setTimeout(() => {
    modalInner.innerHTML = `<h2>Thank you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
