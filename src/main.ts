const form: HTMLFormElement | Element | null | undefined =
  document.querySelector("#generate-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (form) {
    const formData = new FormData(form as HTMLFormElement);
    const prompt = formData.get("prompt");
    alert(prompt);
  }
});
