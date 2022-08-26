const rateButtons = document.querySelectorAll('.rate-btn');
const submitButton = document.querySelector('.submit-btn');
const card = document.querySelector('.card');
let thankyouCard, rateScore;

const updateThankyouCard = () => {
  thankyouCard = '<div class="card-content">' +
    '<div class="rate">' +
    '<img src="images/illustration-thank-you.svg" alt="Thank You">' +
    '<div class="rate-text">' +
    '<h2>You Selected ' + rateScore + ' out of 5</h2>' +
    '</div>' +
    '</div>' +
    '<div class="thankyou text">' +
    '<h1>Thank you!</h1>' +
    '<p>We appreciate you taking the time to give a rating. If you ever need more support, don\'t hesitate to get in touch!</p>' +
    '</div>' +
    '</div>';
}

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('rate-btn')) {
    rateButtons.forEach((rateBtn) => {
      rateBtn.classList.remove('selected');
    });
    e.target.classList.add('selected');

    submitButton.classList.remove('locked');

    rateScore = e.target.innerHTML;
    updateThankyouCard();
  }
});

submitButton.addEventListener('click', (e) => {
  card.innerHTML = thankyouCard
  e.preventDefault();
});