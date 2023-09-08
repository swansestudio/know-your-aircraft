export function ErrorGettingData(props) {
  const { status, error } = props;

  const errorMessage = Object.values(error).map((err, key) => {
    return <p key={key}>{err}</p>;
  });

  return (
    <div className="error">
      <p>App error {status}.</p>
      {errorMessage}
    </div>
  );
}
