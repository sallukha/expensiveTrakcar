
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
 import Categories from "../Categories";
  

  interface props {
    onSubmit: (data: ExpensiveFormData) => void;
  }
  
 


const schema = z.object({
  description: z.string().min(1, "Description is required"),
  amount: z.number({invalid_type_error: "Amount is required"}).min(1, "Amount is required"),
  category: z.enum(Categories),
});
type ExpensiveFormData = z.infer<typeof schema>;

const ExpensiveForm = ({onSubmit}:props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpensiveFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
    {errors.description && <p className="text-danger">Description shuold be 3 charecter</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          amount
        </label>
        <input
          {...register("amount", {valueAsNumber: true})}
          /*onChange={handleChange}*/ id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && <p className="text-danger">amount is required </p>}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="">Select a category</option>
          {Categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-danger">category is required </p>}``
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpensiveForm;
