import React, { useContext } from "react";
import { Context } from "./Context";
export default function ComponentB() {
    const [context] = useContext(Context);

    return <div>ComponentB: {context.value}</div>;
}