import { useNavigation } from "@react-navigation/native";

export function useJump() {
  const navigation = useNavigation();
  return () => navigation.push("TabTwo");
}
