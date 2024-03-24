"use client";
import { globalStore } from "@/lib/redux/store";
import React from "react";
import { Provider } from "react-redux";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={globalStore} > {children} </Provider>
}

export default ReduxProvider;
