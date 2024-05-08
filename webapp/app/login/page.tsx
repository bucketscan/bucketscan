import { login, signup } from "./actions";

export default function Page() {
  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 h-full">
        <div className="flex justify-center pb-12 "></div>
        <div className="flex flex-col space-y-4 h-full">
          <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            <button formAction={signup}>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );

  return <div className="m-6"></div>;
}
