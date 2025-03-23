import RegistrationLoginForm from '~/components/RegistrationLoginForm';

const Login = () => {
  return (
    <div className="relative h-full w-full flex-1">
      <h1 className="pb-6 pt-6 text-center text-6xl font-bold text-[#5480a9]">
        Přihlásit se
      </h1>
      <RegistrationLoginForm formType={'Přihlásit se'} />
    </div>
  );
};

export default Login;
