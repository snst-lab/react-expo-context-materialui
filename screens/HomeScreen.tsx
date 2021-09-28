import React, { useEffect, useMemo } from "react";
import styled from "styled-components/native";
import Button from "@material-ui/core/Button";
import { Text, View } from "@/components";
import { StatusBar } from "expo-status-bar";
import { Navigation } from "@types";
import { context } from "@/store/context";
import { useSetTime, useJump } from "@/hooks";
import dayjs from "dayjs";

export function HomeScreen({ navigation }: Navigation): JSX.Element {
  useSetTime();

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
  const { set } = context();
  const jump = useJump;

  return (
    <>
      <Button
        onClick={(event) => {
          set("time", dayjs().format("HH:mm:ss"));
        }}
      >
        Get Current Time
      </Button>
      <Button onClick={jump()}>Jump</Button>
    </>
  );
}
