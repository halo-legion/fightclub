import { useRecoilState } from "recoil";
import { userAtom } from "../pages/_atoms";
import { useRouter } from "next/router";
import { _setUser } from "../pages/_functions";

export default function GoalForm() {
  const [user, setUser] = useRecoilState(userAtom);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name: e.target.name.value, goal: e.target.goal.value };
    setUser(formData);
    _setUser(formData)
      .then(res => {
        if(res) {
          router.push('/dashboard');
        } else console.log('error')
      });
  }
  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2 text-indigo-600">
        <label className="font-medium text-sm">What is your name?</label>
        <input
          placeholder="Tyler Durden"
          name="name"
          className="border-2 text-white border-indigo-600 rounded-lg outline-none bg-transparent text-primary p-4"
          required
        />
      </div>
      <div className="flex flex-col space-y-2 text-indigo-600">
        <label className="font-medium text-sm">What is your commitment?</label>
        <input
          placeholder="Win Math Olympiad"
          name="goal"
          className="border-2 text-white border-indigo-600 rounded-lg outline-none bg-transparent text-primary p-4"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full outline-none bg-indigo-600 p-4 text-white rounded-lg hover:shadow-2xl focus:bg-white focus:text-indigo-600"
      >
        Start fighting
      </button>
    </form>
  );
}
