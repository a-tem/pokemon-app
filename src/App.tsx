import { Col, ConfigProvider, Layout, Row } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import SearchBar from "./components/SearchBar";
import axios, { AxiosError } from "axios";
import { AppState } from "./models";
import { reducer } from "./state/reducer";
import { ActionTypes } from "./state/actions";
import { API_URL } from "./config/api.config";

const initialState: AppState = {
  term: "ditto",
  data: null,
  error: false,
  errorMessage: "",
  isLoading: false,
};

const App: React.FC = () => {
  const [term, setTerm] = useState(initialState.term);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      // Note: do not call API while less then 2 symbols.
      if (term.length < 2) {
        return false;
      }

      dispatch({ type: ActionTypes.LOADING_START, payload: term });
      let res = null;

      try {
        res = await axios.get(`${API_URL}/${term}`);
      } catch (err: unknown) {
        dispatch({
          type: ActionTypes.FETCH_ERROR,
          payload: (err as AxiosError)?.message,
        });
      } finally {
        if (res?.status) {
          dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: res?.data });
        }
        dispatch({
          type: ActionTypes.LOADING_END,
        });
      }
    })();
  }, [term]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: "#e1dfdf",
          },
        },
      }}
    >
      <Layout>
        <Layout.Header>
          <SearchBar term={term} setTerm={setTerm}>
            Enter a Pokemon name
          </SearchBar>
        </Layout.Header>
        <Layout.Content>
          <Row>
            <Col span={24}>
              <div>isLoading: {state.isLoading ? "Loading" : "Nope"}</div>
              <div>error: {state.error ? "error" : "all is good"}</div>
              <div>
                errorMessage:{" "}
                {state.errorMessage ? state.errorMessage : "no errors"}
              </div>
              <div>data {state.data ? "data exist" : "no data"}</div>
              <div></div>
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
