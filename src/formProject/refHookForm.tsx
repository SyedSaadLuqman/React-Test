import { FormEvent, useRef } from "react";

const refHookForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const person = {
    name: "",
    age: 0,
    category: "",
  };

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e);
    console.log("clicked");
    if (
      nameRef.current != null &&
      ageRef.current != null &&
      categoryRef.current != null
    ) {
      person.name = nameRef.current.value;
      person.age = parseInt(ageRef.current.value);
      person.category = categoryRef.current.value;
    }

    console.log(person);
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            ref={nameRef}
            type="text"
            name=""
            id="name"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Age
          </label>
          <input
            ref={ageRef}
            type="number"
            name=""
            id="age"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            ref={categoryRef}
            name=""
            id="category"
            className="form-control"
          >
            <option value="1" className="op-1">
              Men
            </option>
            <option value="2" className="op-2">
              Boy
            </option>
            <option value="3" className="op-3">
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

export default refHookForm;

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
