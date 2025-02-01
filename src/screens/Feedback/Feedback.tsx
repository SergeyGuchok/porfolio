"use client";

import { Screen } from "src/components/Screen";
import { ScreenHeader } from "src/components/ScreenHeader";
import { Editor } from "src/components/Editor";
import { Footer } from "src/components/Footer";

export function Feedback() {
  return (
    <Screen className="bg-secondary" footer={<Footer />}>
      <div className="w-full flex flex-col">
        <ScreenHeader
          title="Feedback"
          subtitle="Your feedback is important to me"
        />
        <Editor />
      </div>
    </Screen>
  );
}
