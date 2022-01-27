const List = (props) => {

  return <p>{props.tasks.join(" , ")}</p>

};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Pass an Array as Props */ }
        <List tasks={["Be Motivated","Code","Sleep"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["Learn","Be Motivated","Code"]}/>

      </div>
    );
  }
};
