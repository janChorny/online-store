import Page from "../../core/templates/page";

class StatisticsPage extends Page {
  static TextObject = {
    MainTitle: "Statistics page",
  }

  constructor(id: string) {
    super(id);
  }

  public render(): HTMLElement {
    const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }

}

export default StatisticsPage;
