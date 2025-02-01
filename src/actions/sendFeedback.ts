"use server";

export async function sendFeedback(code: string) {
  // Simulate compilation time
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    success: true,
    output: `Compiled successfully!\nOutput:\n${code}`,
  };
}
