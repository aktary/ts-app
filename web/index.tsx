import * as React from "react";
import * as ReactDOM from "react-dom";
import { Api } from "./api/api";
import { App } from "./app/app";
import "./index.scss";
import { widgetStore } from "./stores/widget-store";

Api.Initialize({ host: "localhost:3000", protocol: "http" });

widgetStore.load();
ReactDOM.render(<App />, document.getElementById("app"));
