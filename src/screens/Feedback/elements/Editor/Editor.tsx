import { type ChangeEvent, useState } from "react";
import { Copy, Loader2 } from "lucide-react";
import { motion } from "motion/react";

import { sendFeedback } from "src/actions/sendFeedback";
import { Button } from "src/components/Button/Button";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { motionVariants } from "src/screens/Feedback/elements/Editor/constants/motionVariants";

export function Editor() {
  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const [state, setState] = useState({
    content: "",
    lineCount: 1,
    isSending: false,
    actionOutput: "",
  });

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const content = e.target.value;

    setState((prev) => ({
      ...prev,
      content,
      lineCount: Math.min(isSmallScreen ? 10 : 20, (content.match(/\n/g) || []).length + 1),
    }));
  };

  const copyToClipboard = async () => {
    const { content } = state;

    if (content) {
      await navigator.clipboard.writeText(state.content);
    }
  };

  const handleSendFeedback = async () => {
    const { content } = state;

    if (!content.trim()) return;

    setState((prev) => ({ ...prev, isSending: true, actionOutput: "" }));

    try {
      const { content } = state;

      const { success, error } = await sendFeedback(content);

      setState((prev) => ({
        ...prev,
        actionOutput: success ? "Message sent!" : String(error),
        isSending: false,
      }));
    } catch {
      setState((prev) => ({
        ...prev,
        actionOutput: "Failed to send. Please try again.",
        isSending: false,
      }));
    }
  };

  const getStatusMessage = () => {
    const { isSending, actionOutput } = state;

    if (isSending && !actionOutput) return "Sending message...";

    if (!isSending && !actionOutput) return "Waiting...";

    if (actionOutput && !isSending) return "Message sent!";

    return null;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={motionVariants}
      className="relative w-full max-w-3xl overflow-hidden rounded-lg border-[0.5px] border-zinc-400/20 bg-[#1F2937] shadow-2xl"
    >
      <div className="flex h-12 items-center justify-between bg-[#2D3748] px-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="ml-4 text-sm font-medium text-zinc-400">
            SendMessage.tsx
          </div>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="text-zinc-400 hover:bg-zinc-700/50"
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy code</span>
        </Button>
      </div>

      <div className="flex">
        <div
          className="select-none border-r border-zinc-700/50 bg-[#1F2937] px-4 py-4 text-right font-mono text-sm text-zinc-500"
          aria-hidden="true"
        >
          {Array.from({ length: Math.max(state.lineCount, 3) }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <textarea
          value={state.content}
          aria-disabled={state.isSending}
          disabled={state.isSending}
          onChange={handleTextChange}
          className="flex-1 bg-[#1F2937] px-4 py-4 font-mono text-sm leading-6 text-zinc-100 caret-blue-500 outline-none disabled:cursor-not-allowed"
          placeholder="Type your message..."
          spellCheck="false"
          rows={isSmallScreen ? 10 : 20}
          maxLength={1000}
          style={{ resize: "none" }}
        />
      </div>

      <div className="border-t border-zinc-700/50 bg-[#2D3748]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-sm text-zinc-400">{getStatusMessage()}</div>
          <Button
            data-track="send-feedback"
            type="button"
            onClick={handleSendFeedback}
            aria-disabled={state.isSending || !state.content.trim()}
            disabled={state.isSending || !state.content.trim()}
            className="bg-blue-600 hover:bg-blue-700 text-zinc-100 disabled:bg-blue-600/50"
          >
            {state.isSending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending
              </>
            ) : (
              "Compile"
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
