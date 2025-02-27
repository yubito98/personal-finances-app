import { useState, useEffect } from "react";
import './CategoriesReport.css'

function CategoriesReport({ transactions }) {
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
        <div className="categories-report">
            <div className="categories-report-container">
                <h4 className="category-report-title">Categorias de ingresos</h4>
                {Object.keys(incomeCategories).map(categoryName => (
                    <div className="category-report-item" key={categoryName}>
                        <h6 className="category-report-item-name">{categoryName}</h6>
                        <span className="category-report-item-value income">{incomeCategories[categoryName].amount.reduce((a, b) => a + b, 0)}</span>
                    </div>
                ))}
            </div>
            <div className="categories-report-container">
                <h4 className="category-report-title">Categorias de gastos</h4>
                {Object.keys(expenseCategories).map(categoryName => (
                    <div className="category-report-item" key={categoryName}>
                        <h6 className="category-report-item-name">{categoryName}</h6>
                        <span className="category-report-item-value expense">{expenseCategories[categoryName].amount.reduce((a, b) => a + b, 0)}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoriesReport;
