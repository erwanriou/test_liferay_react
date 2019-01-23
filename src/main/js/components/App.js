import React, { Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";
import * as V from "victory";
import { VictoryBar } from "victory";

// IMPORT COMPONENTS
// Import Components here...

// IMPORT TRANSLATIONS
import englishTranslations from "../translations/en.translations.json";

// IMPORT DATAS
const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.initialize({
      languages: [{ name: "English", code: "en" }],
      translation: englishTranslations,
      options: { renderToStaticMarkup }
    });
  }

  render() {
    return (
      <Fragment>
        HELLO WORLD
        <VictoryBar />
      </Fragment>
    );
  }
}

export default withLocalize(connect()(App));
