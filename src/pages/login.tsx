import LoginForm from '~/components/LoginForm';

const Login = () => {
  return (
    <div className="relative h-full w-full flex-1 flex flex-col justify-center">
      <h1 className="pb-6 pt-6 text-center text-6xl font-bold text-[#5480a9]">
        Přihlásit se
      </h1>
      <LoginForm />
    </div>
  );
};

export default Login;
