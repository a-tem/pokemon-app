import {
  Col,
  ConfigProvider,
  Divider,
  Image,
  Layout,
  Result,
  Row,
  Spin,
} from "antd";
import React, { useEffect, useReducer, useState } from "react";
import SearchBar from "./components/SearchBar";
import axios, { AxiosError } from "axios";
import { AppState } from "./models";
import { reducer } from "./state/reducer";
import { ActionTypes } from "./state/actions";
import { API_URL } from "./config/api.config";
import { TextTransform, TextTransformations } from "./helpers";
import Info from "./components/Info";

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
        <Layout.Header className="pt-6 pb-14">
          <SearchBar term={term} setTerm={setTerm}>
            Enter a Pokemon name
          </SearchBar>
        </Layout.Header>
        <Layout.Content>
          <Row align="middle" justify="center" className="pt-4">
            <Col span={12} className=" text-center">
              <h1 className="text-6xl text-gray-600">
                {TextTransform(state!.term, TextTransformations.upperCase)}
              </h1>
            </Col>

            <Col span={12} className="flex items-center justify-center">
              {state.data && (
                <Image
                  width={200}
                  alt={state!.term}
                  src={state.data!.sprites!.other!.dream_world!.front_default}
                />
              )}
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Divider />
            </Col>
          </Row>

          <Row align="middle" justify="center" className="pb-5">
            <Col span={12}>{state!.data && <Info data={state.data} />}</Col>
            <Col span={12}>{state!.data && <span>STATS BLOCK HERE</span>}</Col>
          </Row>

          <Row>
            <Col span={24} className="flex items-center justify-center">
              {state.isLoading && <Spin size="large" className="p-8" />}
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              {state.error && (
                <Result status="warning" title={state.errorMessage} />
              )}
            </Col>
          </Row>
        </Layout.Content>
        <Layout.Footer className="text-center">
          <Divider />
          <p>
            <span>Pokemon API: </span>
            <a
              href="https://pokeapi.co/docs/v2#pokemon"
              target="_blank"
              rel="noreferrer"
            >
              https://pokeapi.co/docs/v2#pokemon
            </a>
          </p>
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
