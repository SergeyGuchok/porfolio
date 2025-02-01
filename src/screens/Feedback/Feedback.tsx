import { Screen } from "src/components/Screen";
import { ScreenHeader } from "src/components/ScreenHeader";
import { Editor } from "src/screens/Feedback/elements/Editor";
import { Footer } from "src/components/Footer";

export function Feedback() {
  return (
    <Screen className="bg-secondary" footer={<Footer />}>
      <div className="w-full flex flex-col">
        <ScreenHeader
          title="Leave me a message"
          subtitle="I will get back to you as soon as possible"
        />
        <Editor />
      </div>
    </Screen>
  );
}
