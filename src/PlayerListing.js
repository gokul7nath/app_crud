import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerListing = () => {
  const [Playerdata, Playerdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/player/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:3001/player/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/player")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        Playerdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div className="container">
      <br></br>
      <div className="card">
        <br></br>
        <div className="card-title">
          <h2>Player Listing</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>NOM</td>
                <td>RUNS</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {Playerdata &&
                Playerdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.nom}</td>
                    <td>{item.runs}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-info"
                      >
                        EDIT
                      </a>
                      <a
                        style={{ marginLeft: "5px" }}
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        DEL
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="divbtn">
          <a href="/PlayerCreate" className="btn btn-primary">
            Add Details
          </a>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default PlayerListing;
