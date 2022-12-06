import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PlayerEdit = () => {
  const { Playerid } = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/player/" + Playerid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        nomchange(resp.nom);
        runschange(resp.run);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [nom, nomchange] = useState("");
  const [runs, runschange] = useState("");
  const [valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const Playerdata = { id, name, nom, runs };

    fetch("http://localhost:3001/player/" + Playerid, {
      method: "PUT",
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
                <h2 style={{ textAlign: "center" }}>Edit Details</h2>
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

                  <div className="col-lg-12">
                    <br></br>
                    <div className="form-group">
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

export default PlayerEdit;
