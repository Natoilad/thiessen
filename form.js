document.addEventListener('DOMContentLoaded', function () {
  const radioInputs = document.querySelectorAll(
    '.fusion-form-input[type="radio"]'
  );

  radioInputs.forEach(input => {
    input.addEventListener('change', function () {
      const currentStep = this.closest('.awb-form-step');
      const nextStep = currentStep.nextElementSibling;

      if (nextStep && this.checked) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
      }
    });
  });
});
