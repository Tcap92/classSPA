import * as views from "./views";
import html from "html-literal";

export default st => html`
  ${views[st.view](st)}
`;
// <!-- ${views["Home"]()}, ${views["Bio"]()}, ${views["Pizza"]()},
// ${views["Order"]()} -->
