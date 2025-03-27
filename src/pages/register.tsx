import RegistrationForm from '~/components/RegistrationForm';

const Login = () => {
  return (
    <div className="relative h-full w-full flex-1 flex flex-col justify-center">
      <h1 className="pb-6 pt-6 text-center text-6xl font-bold text-[#5480a9]">
        Registrovat se
      </h1>
      <p className="pb-6 pt-6 text-center">
        Máte již účet?{' '}
        <a href="/login" className="text-[#5480a9]">
          Přihlaste se.
        </a>
      </p>
      <RegistrationForm />
    </div>
  );
};

export default Login;
