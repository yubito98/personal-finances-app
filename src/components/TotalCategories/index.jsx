import { useState, useEffect } from "react"

function TotalCategories({ transactions }) {
    const [incomeCategories, setIncomeCategories] = useState({});
    const [expenseCategories, setExpenseCategories] = useState({});

    function mapCategories() {
        let incomeCategories = {};
        let expenseCategories = {}

        transactions.forEach(item => {
            if(item.value >= 0){
                if (!incomeCategories[item.category.name]) {
                    incomeCategories[item.category.name] = { amount: [] };
                }
                incomeCategories[item.category.name].amount.push(item.value);
            }else if(item.value < 0){
                if (!expenseCategories[item.category.name]) {
                    expenseCategories[item.category.name] = { amount: [] };
                }
                expenseCategories[item.category.name].amount.push(item.value);
            }

        });

        setIncomeCategories(incomeCategories);
        setExpenseCategories(expenseCategories)
    }


    useEffect(() => {
        mapCategories();
    }, [transactions]);


    return (
        <div className="pt-4">
            <h3>Resumen de ingresos</h3>
            {Object.keys(incomeCategories).map(categoryName => (
                <div key={categoryName}>
                    <p>{categoryName}: {incomeCategories[categoryName].amount.reduce((a, b) => a + b, 0)}</p>
                </div>
            ))}
            <h3>Resumen de gastos</h3>
            {Object.keys(expenseCategories).map(categoryName => (
                <div key={categoryName}>
                    <p>{categoryName}: {expenseCategories[categoryName].amount.reduce((a, b) => a + b, 0)}</p>
                </div>
            ))}
        </div>
    );
}

export default TotalCategories;
