import { Col, ConfigProvider, Layout, Row } from "antd";
import React, { useEffect, useReducer, useState } from "react";
import SearchBar from "./components/SearchBar";
import axios, { AxiosError } from "axios";
import { AppState } from "./models";
import { reducer } from "./state/reducer";
import { ActionTypes } from "./state/actions";

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

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState<null | string>(null);
  // const [data, setData] = useState<null | {}>(false); // todo: make sence to use reducer?

  useEffect(() => {
    (async () => {
      // Note: do not call API while less then 2 symbols.
      if (term.length < 2) {
        return false;
      }
      // setIsLoading(true);
      dispatch({ type: ActionTypes.LOADING_START, payload: term });
      let res = null;

      try {
        res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`); // todo: move URL to the config file.
      } catch (err: unknown) {
        // setError(true);
        // setErrorMessage((err as AxiosError)?.message);
        // setData(null);
        dispatch({
          type: ActionTypes.FETCH_ERROR,
          payload: (err as AxiosError)?.message,
        });
      } finally {
        if (res?.status) {
          // setError(false);
          // setErrorMessage(null);
          // setData(res?.data);
          dispatch({ type: ActionTypes.FETCH_SUCCESS, payload: res?.data });
        }
        dispatch({
          type: ActionTypes.LOADING_END,
        });
      }
    })();
  }, [term]);

  return (
    <ConfigProvider theme={{}}>
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
