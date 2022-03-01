import html from "html-literal";

import * as views from "./views";

export default () => html`
  ${views["home"]()} ${views["bio"]()} ${views["pizza"]()} ${views["order"]()}
`;
