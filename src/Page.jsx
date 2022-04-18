import { useDispatch, useSelector } from "react-redux";
import { decreaseAction, incrementAction, reset } from "./Data/Action";

const Page = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div style={{ fontSize: "30px" }}> {counter}</div>
        <br />
        <button onClick={() => dispatch(incrementAction())}>
          increment by +1
        </button>{" "}
        <button onClick={() => dispatch(decreaseAction())}>
          decrease by -1
        </button>
        <div style={{ padding: "30px" }}>
          <button onClick={() => dispatch(reset())}>Reset counter to 0</button>
        </div>
      </div>
    </>
  );
};

export default Page;
