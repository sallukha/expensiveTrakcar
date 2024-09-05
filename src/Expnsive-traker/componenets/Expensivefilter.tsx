 import Categories from "../Categories";
interface props {
  onSelectCategory: (category: string) => void;
}

const ExpensiveFilter = ({ onSelectCategory }: props) => {
  return (
    <select
      name="filter"
      id="expense-filter"
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All Categories</option>
      {Categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpensiveFilter;
