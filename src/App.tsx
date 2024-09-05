// import Listgroup from "./components/Listgroup";
// import Button from "./components/Button";
// import State from "./components/State";
// import Exsenteble from "./Exsenteble";
// import Game from "./Game";
// import Form from "./components/Form";
// import Form2 from "./components/Form2";
import { useState } from "react";
import ExpensiveForm from "./Expnsive-traker/componenets/ExpensiveForm";
import ExpensiveFilter from "./Expnsive-traker/componenets/Expensivefilter";
import ExpensiveList from "./Expnsive-traker/componenets/ExpensiveList";
 
 
const App = () => {
  // let items = ["india ", "america ", "canada ", "germany ", "france "];
  const [SelectCategory, setSelectCategory] = useState("");
  const [expense, setExpense] = useState([
    { id: 1, description: "Expense 1", amount: "10", category: "Category A" },
    { id: 2, description: "Expense 2", amount: "20", category: "Category B" },
    { id: 3, description: "Expense 3", amount: "30", category: "Category C" },
    { id: 4, description: "Expense 4", amount: "90", category: "Category D" },
  ]);

  const visibleExpenses = SelectCategory
    ? expense.filter((expense) => expense.category === SelectCategory)
    : expense;

  return (
    <>
      <div className="ml-10">
        {/* <Listgroup item={items} heading={"List of Countries"} /> */}
        {/* <Button onClick={() => alert("hello world")} children="hello world" />
      <State /> */}
        {/* <Game />   */}
        {/* <Exsenteble>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        nulla at mollitia veniam debitis perspiciatis sequi quo! Vel, nemo!
        Dolore accusamus maiores quae modi. Ipsa, quam officia! Molestias, nemo
        obcaecati.
      </Exsenteble> */} 
        {/* <Form /> */}
        {/* <Form2/>   */}
        <div className="mb-5">
          <ExpensiveForm      onSubmit={data => console.log(data)} />
            
        </div>

        <div className="mb-3">
          <ExpensiveFilter
            onSelectCategory={(category) => setSelectCategory(category)}
          />
        </div>

        <ExpensiveList
          expenses={visibleExpenses}
          onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
};

export default App;
