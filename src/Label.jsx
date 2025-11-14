function Label({ phase, cycle, counter }) {
  return (
    <div className="label">
      #{phase}
      {cycle}.{counter}
    </div>
  );
}

export default Label;
