import { useState } from "react";
import Header from "./components/Header/Header";
import ResultsForm from "./components/ResultsForm/ResultsForm";
import ResultsTable from "./components/ResultsTable/ResultsTable";

/*
Test input:
    savings: 10000,
    contribution: 1200,
    return: 7,
    duration: 10,
*/

function App() {
  const [userInput, setUserInput] = useState(null);

  // Retrieving the data from ResultsForm
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  // Working with the data as a derived state
  const yearlyData = [];

  if (userInput) { // We need to check if the object has been defined, else we'll try to access properties on a null variable
    console.log('user input to app: ', userInput);
    let currentSavings = +userInput.savings;
    const yearlyContribution = +userInput.contribution;
    const expectedReturn = +userInput.return / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <main>

      <Header />

      <ResultsForm 
        onCalculate={calculateHandler}
      />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <ResultsTable items={yearlyData} initialInvestment={userInput.savings} />}

    </main>
  );
}

export default App;
