'use client';
import React from "react";
import Button from "@/components/button";
import Cards from "@/components/cards";
import { Provider } from "react-redux";
import store from "@/components/store";

export default function Page() {
    console.log(store);
    return (
        <Provider store={store}>
            <Cards/>
            <Button/>
        </Provider>
    );
}