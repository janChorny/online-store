import Page from "../../core/templates/page";

class SettingsPage extends Page {
  static TextObject = {
    MainTitle: "Settings page",
  }

  constructor(id: string) {
    super(id);
  }

  public render(): HTMLElement {
    const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }

}

export default SettingsPage;
