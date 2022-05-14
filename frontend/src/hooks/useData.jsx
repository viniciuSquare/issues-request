import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export function useData() {
  const value = useContext(DataContext)

  return value;
}