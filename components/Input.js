export default function Input(props) {
  const handleChange = (e) => {
    if (props.cb) {
      props.cb(e.target.value);
    }
  };
  return (
    <div className="flex flex-col space-y-2 text-indigo-600">
      <label className="font-medium text-sm">{props.label}</label>
      <input
        placeholder={props.placeholder}
        className="border-2 text-white border-indigo-600 rounded-lg outline-none bg-transparent text-primary p-4"
        onChange={handleChange}
        required={props.required}
      />
    </div>
  );
}
