import openai from "@/api/open-ai";

const systemContentPrompt =
  "As developer in JavaScript + TypeScript, you must create a website with Tailwind CSS." +
  "Your task is to generate a HTML code with Tailwind according to the user prompt." +
  "You must return valid HTML content without text." +
  "No markdown is allowed." +
  "No ```` is allowed.";

const form: HTMLFormElement | Element | null | undefined =
  document.querySelector("#generate-form");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (form) {
    const formData = new FormData(form as HTMLFormElement);
    const prompt = formData.get("prompt") as string;

    const chatResponse = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemContentPrompt },
        { role: "user", content: prompt },
      ],
      model: "gpt-3.5-turbo",
      stream: true,
    });

    let code = "";

    if (chatResponse) {
      const onNewChunk = createTimedUpdateIframe();

      for await (const message of chatResponse) {
        const isDone = message.choices[0].finish_reason === "stop";
        if (isDone) {
          return;
        }
        const token = message.choices[0].delta.content;
        if (token) {
          code += token;
        }
        onNewChunk(code);
      }
    }
  }
});

const updateIframe = (code: string) => {
  const iframe = document.getElementById("generatedCode");

  if (iframe instanceof HTMLIFrameElement) {
    // iframe.srcdoc = code;
    iframe.srcdoc = `
      <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>${code}</body>
        <html>
      `;
  }
};

const createTimedUpdateIframe = () => {
  let date = new Date();
  let timeout: any = null;

  return (code: string) => {
    if (new Date().getTime() - date.getTime() > 1000) {
      updateIframe(code);
      date = new Date();
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      updateIframe(code);
    }, 1000);
  };
};
