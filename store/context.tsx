import React, { createContext, useContext, useReducer } from "react";

type StateType = Record<string, unknown>;

type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

type ActionType = {
  type: string;
  key: string;
  val: unknown;
};

const Context = createContext<ContextType>({
  state: {},
  dispatch: () => {
    return;
  },
});

const context = (): ContextType => useContext(Context);

function Provider(props: { children: React.ReactNode }): JSX.Element {
  const [state, dispatch] = useReducer(
    (state: StateType, action: ActionType) => {
      switch (action.type) {
        case "set":
          return { ...state, [action.key]: action.val };
        default:
          return state;
      }
    },
    {}
  );
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
}

const set = (key: string, val: unknown): ActionType => {
  return { type: "set", key: key, val: val };
};

export { Provider, context, set };
