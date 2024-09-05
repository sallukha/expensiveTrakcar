interface Expensive {
  id: number;
  description: string;
  amount: string;
  category: string;
}

interface Props {
  expenses: Expensive[];
  onDelete: (id: number) => void;
}

const ExpensiveList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) {
    return <p>No expenses found please select a catogary</p>;
  }
  const totalAmount = expenses
    .reduce((acc, curr) => acc + parseFloat(curr.amount), 0)
    .toFixed(2);

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${totalAmount}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpensiveList;
