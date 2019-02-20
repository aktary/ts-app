import { observable } from "mobx";
import { Api } from "../api/api";

export class WidgetStore {
  @observable public widgets?: Api.IWidget[];

  public load() {
    setTimeout(async () => {
      this.widgets = await new Api.WidgetsService().get();
    }, 2000);
  }
}

export const widgetStore = new WidgetStore();
