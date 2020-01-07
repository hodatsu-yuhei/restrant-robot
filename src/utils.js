import prompts from "prompts";

export async function prompt(question) {
  const q = {
    type: "text",
    name: "val",
    message: `${question}`
  };
  const response = await prompts(q);

  return response.val;
}
