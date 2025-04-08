function clickAction() {
  contactButton.textContent = 'Submitted';
  feedbackResponse.textContent = 'Thank you for your feedback!';
};
contactButton.onclick = clickAction;