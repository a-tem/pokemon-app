import { Col, ConfigProvider, Layout, Row } from "antd";
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  const [term, setTerm] = useState("ditto");
  return (
    <ConfigProvider theme={{}}>
      <Layout>
        <Layout.Header>
          <SearchBar term={term} setTerm={setTerm}></SearchBar>
        </Layout.Header>
        <Layout.Content>
          <Row>
            <Col span={24}>
              <p>
                App Works with Ant Design and
                <span className="text-gray-400">Tailwind</span>
              </p>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
