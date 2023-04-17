import { useState } from "react";

interface UserCardProps {
  user: {
    firstname: string;
    lastname: string;
    dob: {
      date: string;
    };
    gender: string;
  };
}

const captilize = (x: string) => x[0].toUpperCase() + x.slice(1);

const UserCard = ({ user }: UserCardProps) => {
  const [person, setPerson] = useState(user);
  const updateName = () => {
    setPerson({
      firstname: captilize(person.firstname),
      lastname: captilize(person.lastname),
      dob: {
        date: person.dob.date + " " + new Date().getFullYear(),
      },
      gender: person.gender.toLowerCase(),
    });
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://placehold.co/400" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {person.firstname + " " + person.lastname}
          </h5>
          <p className="card-text">
            <strong>{person.dob.date} </strong>
            Some quick example text to build on the card title and make up the
            bulk of the card's content. <strong>{person.gender}</strong>
          </p>
          <button onClick={updateName} className="btn btn-primary">
            Go somewhere
          </button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
