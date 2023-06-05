import { useState, useEffect } from "react";
import {
  doc,
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  deleteDoc,
  runTransaction,
} from "firebase/firestore";
import { db } from "../Config/firebase-config";
import EditRemainder from "./EditRemainder";
const Remainder = () => {
  const [createRemainder, setCreateRemainder] = useState("");
  const [remainders, setRemainders] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    const getRemainders = async () => {
      const remainderSnapshot = await getDocs(
        collection(db, "remainderCollection")
      );
      // console.log(remainderSnapshot);
      let remainderData = remainderSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRemainders(remainderData);
      setChecked(remainderData);
    };

    getRemainders();
  }, []);

  const submitRemainder = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "remainderCollection"), {
        remainder: createRemainder,
        isChecked: false,
        timestamp: serverTimestamp(),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRemainder = async (id) => {
    try {
      if (window.confirm("Are you sure to delete this remainder?")) {
        const docRef = doc(db, "remainderCollection", id);
        // console.log(docRef);
        await deleteDoc(docRef);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChecked = async (e, remainder) => {
    setChecked((state) => {
      const indexToUpdate = state.findIndex(
        (checkbox) => checkbox.remainder === remainder
      );
      console.log(indexToUpdate);
      let newState = [...state];
      newState.splice(indexToUpdate, 1, {
        ...state[indexToUpdate],
        isChecked: !state[indexToUpdate].isChecked,
      });
      console.log(newState);
      return newState;
    });
    try {
      const docRef = doc(db, "remainderCollection", e.target.name);
      await runTransaction(db, async (transaction) => {
        const remainderDoc = await transaction.get(docRef);
        if (!remainderDoc.exists()) {
          throw "Document not exists";
        }
        const newValue = !remainderDoc.data().isChecked;
        transaction.update(docRef, {
          isChecked: newValue,
        });
        console.log("Updation performed successfully");
      });
    } catch (error) {}
  };

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
                              onChange={(e) => {
                                handleChecked(e, remainder);
                              }}
                            />
                          </span>
                        </div>{" "}
                        {remainder} <br />
                        <i>
                          {new Date(timestamp.seconds * 1000).toLocaleString()}
                        </i>
                      </span>
                      <span className="float-end mx-3">
                        <EditRemainder editRemainder={remainder} id={id} />
                      </span>
                      <button
                        type="button"
                        className="btn btn-danger float-end"
                        onClick={() => {
                          deleteRemainder(id);
                        }}
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
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={submitRemainder}
                        >
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
