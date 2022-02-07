import "./App.css";

function App() {
  const currentdate: any = new Date();
  const oneJan: any = new Date(currentdate.getFullYear(), 0, 1);
  const numberOfDays: number = Math.floor(
    (currentdate - oneJan) / (24 * 60 * 60 * 1000)
  );
  const result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);
  console.log(
    `The week number of the current date (${currentdate}) is ${result}.`
  );

  return <>{`The week number of the current date is ${result}.`}</>;
}

export default App;
