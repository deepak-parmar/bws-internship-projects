export default function Cell(props) {
  // if multiple values passed
  let values =
    typeof props.value == "object"
      ? props.value.map((value) => <li className="fs-5 fw-bold my-2">{value}</li>)
      : props.value;

    if (typeof props.value == "object") {
      values = props.value.map((value) => <li className="fs-5 fw-bold my-2">{value}</li>)
    } else if (props.value !== undefined) {
      values = <h2 className="fw-bold">{props.value}</h2>
    } else {
      values = <h2 className="fw-bold">{"Unknown"}</h2>
    }

  return (
    <div className={props.className}>
      <label>{props.label}</label>
      {values}
    </div>
  );
}
