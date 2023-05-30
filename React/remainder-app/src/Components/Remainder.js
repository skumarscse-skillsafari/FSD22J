import { useState } from "react";
import EditRemainder from "./EditRemainder";
const Remainder = () => {
  const [createRemainder, setCreateRemainder] = useState("");
  const [remainders, setRemainders] = useState([
    {
      id: 1001,
      remainder: "HTML",
      isChecked: false,
      timestamp: "12-11-2023",
    },
    {
      id: 1002,
      remainder: "CSS",
      isChecked: true,
      timestamp: "13-01-2023",
    },
    {
      id: 1003,
      remainder: "JavaScript",
      isChecked: false,
      timestamp: "24-05-2023",
    },
  ]);
  const [isChecked, setisChecked] = useState(true);

  return (
    <>
      <div className="container">
        <h2 className="display-3 text-center">REMAINDER APP</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Remainder
                </button>

                {remainders.map(({ id, remainder, isChecked, timestamp }) => (
                  <div className="remainder-list" key={id}>
                    <div className="remainder-item">
                      <hr />
                      <span className={`${isChecked === true ? "done" : ""}`}>
                        <div className="checker">
                          <span className="">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              name={id}
                              onChange={() => {}}
                            />
                          </span>
                        </div>{" "}
                        {remainder} <br />
                        <i>{timestamp}</i>
                      </span>
                      <span className="float-end mx-3">
                        <EditRemainder editRemainder={remainder} id={id} />
                      </span>
                      <button
                        type="button"
                        className="btn btn-danger float-end"
                        onClick={() => {}}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          ADD REMAINDER
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add Remainder"
                          onChange={(e) => setCreateRemainder(e.target.value)}
                        />
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Create Remainder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remainder;
