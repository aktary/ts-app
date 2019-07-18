import React from "react";
import { Api } from "../api/api";

interface IAppState {
  widgets?: Api.IWidget[];
  user?: Api.IUser;
}

export class App extends React.Component<{}, IAppState> {
  constructor(public readonly props: {}) {
    super(props);
    this.state = {};
    this.load();
  }

  public render() {
    if (!this.state.widgets || !this.state.user) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {this.state.widgets.map((w) => {
          return (
            <div key={w.id}>
              Widget {w.id}
              Color {w.color}
              Label {w.label}
            </div>
          );
        })}
        <div key={this.state.user.id}>
          First {this.state.user.first}
          Last {this.state.user.last}
          Email {this.state.user.email}
        </div>
      </div>
    );
  }

  private async load() {
    const widgets = await new Api.WidgetsService().get();
    const user = await new Api.UsersService().getUser({ userId: 1 });
    this.setState({ widgets, user });
  }
}
