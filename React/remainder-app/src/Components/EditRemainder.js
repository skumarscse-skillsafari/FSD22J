import { useState } from "react";
import { db } from "../Config/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
const EditRemainder = ({ editRemainder, id }) => {
  const [remainder, setRemainder] = useState([editRemainder]);
  // console.log(remainder);

  const updateRemainder = async (e) => {
    e.preventDefault();
    const remainderRef = doc(db, "remainderCollection", id);
    // console.log(remainderRef);
    await updateDoc(remainderRef, {
      remainder: remainder,
    });
    window.location.reload();
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#edit-modal-${id}`}
      >
        Edit
      </button>

      {/* Edit Modal */}
      <div
        className="modal fade"
        id={`edit-modal-${id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                EDIT REMAINDER
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
                placeholder="Edit Remainder"
                value={remainder}
                onChange={(e) => {
                  setRemainder(e.target.value);
                }}
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
                onClick={(e) => {
                  updateRemainder(e);
                }}
              >
                Edit Remainder
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditRemainder;
