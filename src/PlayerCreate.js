import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerCreate = () => {
  const [name, namechange] = useState("");
  const [nom, nomchange] = useState("");
  const [runs, runschange] = useState("");
  const [active] = useState(true);
  const [valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const Playerdata = { name, nom, runs, active };

    fetch("http://localhost:3001/player", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Playerdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <br></br>
          <form className="container" onSubmit={handlesubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2 style={{ textAlign: "center" }}>Add Detail</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => namechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Number Of Matches</label>
                      <input
                        value={nom}
                        onChange={(e) => nomchange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Runs</label>
                      <input
                        value={runs}
                        onChange={(e) => runschange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>
                  <br></br>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <br></br>
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <a
                        style={{ marginLeft: "5px" }}
                        href="/"
                        className="btn btn-danger"
                      >
                        Back
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PlayerCreate;
