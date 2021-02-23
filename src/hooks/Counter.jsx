import React, { Fragment, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function Counter(props) {
  const [count, setState] = useState(0);
  const [name, setName] = useState("archit");

  useDocumentTitle(`${name} has clicked ${count} times`);

  //componentDidMount
  //componentDidUpdate

  return (
    <Fragment>
      <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <div>
        {name} has clicked {count} times
      </div>
      <button onClick={() => setState(count + 1)}>Increase</button>
    </Fragment>
  );
}

export default Counter;
