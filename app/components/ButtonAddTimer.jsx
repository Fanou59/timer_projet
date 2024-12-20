export const ButtonAddTimer = ({ onClick }) => {
  return (
    <div className="flex justify-end gap-4">
      <button className="btn btn-success" onClick={onClick}>
        Add Timer
      </button>
    </div>
  );
};
