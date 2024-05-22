import openai from "@/api/open-ai";

const form: HTMLFormElement | Element | null | undefined =
  document.querySelector("#generate-form");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (form) {
    const formData = new FormData(form as HTMLFormElement);
    const prompt = formData.get("prompt");

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });

    console.log("====", { prompt, chatCompletion });
  }
});
