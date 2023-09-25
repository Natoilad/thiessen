document.addEventListener("DOMContentLoaded", function () {
  const radioInputs = document.querySelectorAll(".fusion-form-input");

  radioInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        this.form.submit();
      }
    });
  });
});
