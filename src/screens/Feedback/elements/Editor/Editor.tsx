import { Copy, Loader2 } from "lucide-react";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { sendFeedback } from "src/actions/sendFeedback";
import { motion } from "motion/react";

const variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Editor() {
  const [content, setContent] = useState("");
  const [lineCount, setLineCount] = useState(1);
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [actionOutput, setActionOutput] = useState("");

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    setLineCount((newContent.match(/\n/g) || []).length + 1);
  };

  const copyToClipboard = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
    }
  };

  const handleSendFeedback = async () => {
    if (!content.trim()) return;

    setIsSendingMessage(true);
    setActionOutput("");
    try {
      const result = await sendFeedback(content);
      setActionOutput(result.output);
    } catch {
      setActionOutput("Compilation failed. Please try again.");
    } finally {
      setIsSendingMessage(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      className="w-full max-w-3xl overflow-hidden rounded-lg border-[0.5px] border-zinc-400/20 bg-[#1F2937] shadow-2xl"
    >
      {/* title */}
      <div className="flex h-12 items-center justify-between bg-[#2D3748] px-4">
        <div className="flex items-center gap-2">
          {/* light buttons */}
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
            <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
            <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="ml-4 text-sm font-medium text-zinc-400">
            SendMessage.tsx
          </div>
        </div>
        <button
          onClick={copyToClipboard}
          className="rounded p-1.5 text-zinc-400 hover:bg-zinc-700/50"
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy code</span>
        </button>
      </div>

      {/* editor area */}
      <div className="flex">
        {/* lines */}
        <div
          className="select-none border-r border-zinc-700/50 bg-[#1F2937] px-4 py-4 text-right font-mono text-sm text-zinc-500"
          aria-hidden="true"
        >
          {Array.from({ length: Math.max(lineCount, 20) }, (_, i) => (
            <div key={i + 1} className="leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        <textarea
          value={content}
          aria-disabled={!!actionOutput || isSendingMessage}
          disabled={!!actionOutput || isSendingMessage}
          onChange={handleTextChange}
          className="flex-1 bg-[#1F2937] px-4 py-4 font-mono text-sm leading-6 text-zinc-100 caret-blue-500 outline-none disabled:cursor-not-allowed"
          placeholder="Type your message..."
          spellCheck="false"
          rows={20}
          style={{
            resize: "none",
          }}
        />
      </div>

      {/* bottom panel */}
      <div className="border-t border-zinc-700/50 bg-[#2D3748]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-sm text-zinc-400">
            {isSendingMessage && !actionOutput ? "Sending message..." : null}
            {!isSendingMessage && !actionOutput ? "Waiting..." : null}
            {actionOutput && !isSendingMessage ? "Message sent!" : null}
          </div>
          <button
            onClick={handleSendFeedback}
            aria-disabled={
              !!actionOutput || isSendingMessage || !content.trim()
            }
            disabled={!!actionOutput || isSendingMessage || !content.trim()}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 cursor-pointer rounded-xl text-zinc-100 disabled:bg-blue-600/50 disabled:cursor-not-allowed flex gap-1 items-center"
          >
            {isSendingMessage ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending
              </>
            ) : (
              "Compile"
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
