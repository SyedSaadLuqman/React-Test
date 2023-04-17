import { ChangeEvent, FormEvent, useRef, useState } from "react";

const stateHookForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    category: [""],
  });

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    console.log("clicked");
    console.log(person);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    switch (e.target.id) {
      case "name":
        setPerson({ ...person, name: e.target.value });
        break;
      case "age":
        setPerson({ ...person, age: parseInt(e.target.value) });
        break;
      case "category":
        setPerson({
          ...person,
          category: Array.from(e.target.selectedOptions).map((x) => x.value),
        });
        break;
      default:
        console.log("Unknow Change Event");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name=""
            id="name"
            className="form-control"
            value={person.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Age
          </label>
          <input
            onChange={handleChange}
            type="number"
            name=""
            id="age"
            className="form-control"
            value={person.age}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            onChange={handleChange}
            name=""
            id="category"
            className="form-control"
            value={person.category}
            multiple
          >
            <option value="1" className="op-1">
              Men
            </option>
            <option value="2" className="op-2">
              Boy
            </option>
            <option value="3" className="op-4">
              Kid
            </option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
};

export default stateHookForm;

/*
 <form className="row g-3 mt-5 was-validated" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="vs1" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="vs1"
            aria-describedby="vs1Feedback"
            required
          />
          <div className="invalid-feedback" id="vs1Feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="vs3" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="vs3"
            aria-describedby="vs3Feedback"
            required
          />
          <div id="vs3Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="vs6" className="form-label">
            City
          </label>
          <select className="form-select" id="vs6" required>
            <option value="">Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="invalid-feedback">
            Example invalid select feedback
          </div>
        </div>

        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form> */
