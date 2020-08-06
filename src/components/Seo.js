import React from "react"
import { Helmet } from "react-helmet"

export default class Application extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Usługi remontowo budowlane Dynów, Rzeszów i okolice - profesjonalne wykończenia wnętrz tanio i sprwnie. Nie trac czasu zadzwoń +48 793 716 916, ukłdanie płytek, montaż sufitów podwieszanych, montaż drzwi, kompleksowe wykończenia wnętrz"
          />
          <title data-react-helmet="true">
            Zbigniew Kustra - usługi remontowo budowlane
          </title>
        </Helmet>
      </>
    )
  }
}
