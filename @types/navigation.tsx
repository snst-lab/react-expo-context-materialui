export type Navigation = {
  navigation: {
    push: (route: string) => any;
    replace: (route: string) => any;
    pop: () => any;
  };
};

export type ScreenOption = {
  path: string;
  screen: ({ navigation }: Navigation) => JSX.Element;
  options: any;
};
