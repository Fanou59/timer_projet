export const InputTime = ({ value, name, onChange }) => {
  return (
    <input
      className="h-24 w-20 rounded-md bg-base-200 text-center text-5xl focus:bg-accent focus:text-accent-content focus:outline-none md:h-20 md:w-32 md:text-6xl lg:h-32 lg:w-40 lg:text-8xl"
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};
