import { useState } from "react";
import Input from "./Input";
import { user } from '../pages/_atoms';

export default function GoalForm() {
  const [name, setName] = useState(null);
  const [goal, setGoal] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Input
        placeholder="Tyler Durden"
        label="What is your name?"
        cb={val => setName(val)}
        required
      />

      <Input
        placeholder="Win Math Olympiad"
        label="What is your commitment?"
        cb={val => setGoal(val)}
        required
      />

      <button
        type="submit"
        className="w-full outline-none bg-indigo-600 p-4 text-white rounded-lg hover:shadow-2xl focus:bg-white focus:text-indigo-600"
      >
        Start fighting
      </button>
    </form>
  );
}
