import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#23123k",
  },
};

function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const url2 = " https://wa.me/524493472973";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
        backgroundColor: "GrayText",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          backgroundColor: "red",
          justifyContent: "end",
          alignItems: "center",
          width: "100%",
          height: "35px",
        }}
      >
        <div style={{ marginRight: "1%" }}>
          <Link to={"login"}>
            <button>Log in</button>
          </Link>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "GrayText",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
      >
        <div>
          <input
            type={"submit"}
            value={"Agendar Cita"}
            onClick={() => setIsOpen(true)}
          />

          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>
              <label>Ing. Luz Elena</label>
              <hr />
              <a href={url2} target="_blank" rel="noreferrer">
                <input type={"submit"} value={"Agendar Cita"} />
              </a>
              <hr />
              <button onClick={() => setIsOpen(false)}>close</button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Home;
