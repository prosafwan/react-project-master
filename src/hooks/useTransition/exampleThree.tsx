import { useState, useTransition } from "react";
import TabButton from "../../components/TabButton";
import AboutTab from "../../components/allHook/AboutTab";
import PostsTab from "../../components/allHook/PostsTab";
import ContactTab from "../../components/allHook/ContactTab";


export default function ExampleThree() {
  const [__, startTransition] = useTransition();
  const [tab, setTab] = useState("about");

  function selectTab(nextTab:any) {
    startTransition(() => {
      setTab(nextTab);
    });
      // setTab(nextTab);
  }

  return (
    <div>
      <TabButton isActive={tab === "about"} onClick={() => selectTab("about")}>
        About
      </TabButton>
      <TabButton isActive={tab === "posts"} onClick={() => selectTab("posts")}>
        Posts (slow)
      </TabButton>
      <TabButton
        isActive={tab === "contact"}
        onClick={() => selectTab("contact")}
      >
        Contact
      </TabButton>
      <hr />
      {tab === "about" && <AboutTab />}
      {tab === "posts" && <PostsTab />}
      {tab === "contact" && <ContactTab />}
    </div>
  );
}
