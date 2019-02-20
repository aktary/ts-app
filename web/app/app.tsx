import { Observer } from "mobx-react-lite";
import React from "react";
import { widgetStore } from "../stores/widget-store";

export const App = () => {
  return <Observer>{() => {
    if (!widgetStore.widgets) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {widgetStore.widgets.map((w) => {
          return (
            <div key={w.id}>
              Widget {w.id}
              Color {w.color}
              Label {w.label}
            </div>
          );
        })}
      </div>
    );
  }}</Observer>;
};
