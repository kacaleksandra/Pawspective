import { Layout } from "@ui-kitten/components";
import { BottomNavigationAccessoriesShowcase } from "./components/bottom-tabs";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Layout
        level="1"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Layout>
      <BottomNavigationAccessoriesShowcase />
    </>
  );
};

export { DefaultLayout };
