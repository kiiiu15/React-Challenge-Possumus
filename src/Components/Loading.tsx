export function Loading() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-border m-4" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
