import "antd/dist/antd.min.css";
import { Layout } from "antd";
import "./app.css";
import AppHeader from "./components/commom/header";
import { Routes, Route } from "react-router-dom";

import RouteAbout from "./pages/about";
import RouteContact from "./pages/contact";
import RouteShop from "./pages/shop";
import RouteHome from "./pages/home";
import RouteFaq from "./pages/faq";
import FooterWidget from "./components/commom/footerWidget";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<RouteHome />} />
            <Route path="/sobre" element={<RouteAbout />} />
            <Route path="/shop" element={<RouteShop />} />
            <Route path="/faq" element={<RouteFaq />} />
            <Route path="/contact" element={<RouteContact />} />
          </Routes>
        </Content>
        <Footer>
          <FooterWidget />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
