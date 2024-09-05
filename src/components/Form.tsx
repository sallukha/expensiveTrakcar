import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data: FieldValues) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name must be at least 5 characters long</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, minLength: 5 })}
          id="age"
          type="text"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">Field is required</p>
        )}
        {errors.age?.type === "minLength" && (
          <p className="text-danger">Age must be at least 5 characters long</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
