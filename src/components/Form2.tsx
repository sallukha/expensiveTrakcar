import { FormEvent, useRef } from "react";

const Form2 = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const HandLeSubmit = (event: FormEvent<Element>) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
    if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <>
      <form onSubmit={HandLeSubmit}>
        <div className="div p-5">
          <label htmlFor="name">name</label>
          <input ref={nameRef} id="name" type="text" />
        </div>

        <div className="div">
          <label htmlFor="age">age</label>
          <input ref={ageRef} id="age" type="text" />
        </div>
        <button onClick={HandLeSubmit}>aubmit</button>
      </form>
    </>
  );
};

export default Form2;
