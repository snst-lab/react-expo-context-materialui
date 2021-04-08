import React, { useEffect, useMemo } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import Button from "@material-ui/core/Button";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "@types";
import { context, set } from "@/store/context";
import { setTime } from "@/modules";
import dayjs from "dayjs";

export function HomeScreen({ navigation }: Navigation): JSX.Element {
  setTime();

  return useMemo(
    () => (
      <$View>
        <Text onPress={() => navigation.push("TabTwo")}>
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
        <Btn />
        <Timer />
      </$View>
    ),
    []
  );
}
const $View = styled.View`
  flex: 1;
  background-color: turquoise;
  align-items: center;
  justify-content: center;
`;

function Timer(): JSX.Element {
  const { state } = context();

  useEffect(() => {
    document.title = `${state.time}`;
  }, [state.time]);

  return useMemo(() => <>{state.time}</>, [state.time]);
}

function Btn(): JSX.Element {
  const { dispatch } = context();

  return useMemo(
    () => (
      <>
        <Button
          onClick={(event) => {
            dispatch(set("time", dayjs().format("HH:mm:ss")));
          }}
        >
          Button
        </Button>
      </>
    ),
    []
  );
}
