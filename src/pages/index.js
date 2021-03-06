import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <h1>Just squatting... mattrobertsonart.com has been taken.</h1>
    <div style={{margin: `3rem 0` }}>
      <Image />
    </div>
    <h1>In order to get your domain back, please complete and document the following items:</h1>
    <ul style={{padding: `0 1rem`}}>
      <li>Rub your wife's back or feet for 10 minutes</li>
      <li>Pay for the round of coffee next Monday morning</li>
      <li>Take both Arthur and Alice on a date (separately)</li>
      <li>Chug a gallon of milk while teaching class</li>
      <li>Do more art stuff</li>
    </ul>
    <p>You may opt out of these items by making a charitable donation of $75 to Wellspring Community Church *</p>
    <br />
    <em>* CASH ONLY: must submit photo of payment exchanging hands. No other forms of collateral accepted. Not even Bitcoin.</em>
  </Layout>
)

export default IndexPage
