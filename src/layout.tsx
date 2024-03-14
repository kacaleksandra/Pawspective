import { Layout } from "@ui-kitten/components";
import { BottomTabBar } from "./components/bottom-tabs";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Layout
        level="1"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Layout>
    </>
  );
};

export { DefaultLayout };
