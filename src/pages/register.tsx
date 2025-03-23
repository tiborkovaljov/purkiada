import RegistrationLoginForm from '~/components/RegistrationLoginForm';

const Login = () => {
  return (
    <div className="relative h-full w-full flex-1">
      <h1 className="pb-6 pt-6 text-center text-6xl font-bold text-[#5480a9]">
        Registrovat se
      </h1>
      <p className="pb-6 pt-6 text-center">
        Máte již účet?{' '}
        <a href="/login" className="text-[#5480a9]">
          Přihlaste se.
        </a>
      </p>
      <RegistrationLoginForm formType={'Registrovat'} />
    </div>
  );
};

export default Login;
