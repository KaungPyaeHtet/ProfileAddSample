import React, { useEffect, useState } from "react";

const Form = ( {profiles, setProfiles} ) => {
  const [profile, setProfile] = useState({});
  const [id, setId ] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const newProfile = {...profile, id}
    setProfiles(
        [...profiles, newProfile],
    )
    setProfile({});
    setId((prevId) => (prevId + 1))
  }
  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.name === "status" ? e.target.checked : e.target.value,
    });
  }
  return (
    <div className="container border rounded my-3 p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          className="form-control mb-2"
          id="inputname3"
          placeholder="Name"
          value={profile.name || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="age"
          name="age"
          className="form-control mb-2"
          id="inputage3"
          placeholder="Age"
          value={profile.age || ""}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="status"
          className="form-check-input"
          type="checkbox"
          id="gridCheck1"
          value={profile.status || ""}
          onChange={(e) => handleChange(e)}
        />
        <label className="form-check-label" htmlFor="gridCheck1">
          Active
        </label>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
