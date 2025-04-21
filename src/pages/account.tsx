import { useCookies } from 'react-cookie';
import { api } from '~/utils/api';

const Account = () => {
  const [cookies, setCookie] = useCookies(['user']);

  const {
      data: userData,
      isError,
    } = api.users.getAllData.useQuery({
      userId: cookies.user.id
    });

  if (!userData) { return; }

  return (
    <div className=" bg-gray-100 h-full w-full flex-1 flex flex-col justify-center items-center p-6 relative">
      <h1 className="absolute top-10 text-4xl md:text-5xl font-bold text-center text-[#5480a9] z-10">
        Účet
      </h1>
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-3xl mx-auto">
        <table className="w-full text-left text-lg text-gray-700">
          <tbody>
            <tr className="border-b">
              <td className="font-semibold py-2">Jméno:</td>
              <td className="py-2">{userData.name}</td>
            </tr>
            <tr className="border-b">
              <td className="font-semibold py-2">Uživatelské jméno:</td>
              <td className="py-2">{userData.username}</td>
            </tr>
            <tr className="border-b">
              <td className="font-semibold py-2">E-mail:</td>
              <td className="py-2">{userData.email}</td>
            </tr>
            <tr>
              <td className="font-semibold py-2">Škola:</td>
              <td className="py-2">{userData.school}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Account;


