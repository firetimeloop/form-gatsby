import * as React from "react"
import { useState } from "react";

import ModalSubmit from "../components/ModalSubmit";
import FormSection from '../components/FormSection'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <main style={pageStyles}>
      <FormSection setIsModalVisible={setIsModalVisible} />
      {isModalVisible ? <ModalSubmit setIsModalVisible={setIsModalVisible} /> : null}
    </main>
  )
}

export default IndexPage
