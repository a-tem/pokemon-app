import { Col, ConfigProvider, Layout, Row } from "antd";
import React from "react";

const App: React.FC = () => {
  return (
    <ConfigProvider theme={{}}>
      <Layout>
        <Layout.Header>Head</Layout.Header>
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
