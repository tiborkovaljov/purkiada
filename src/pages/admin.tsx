'use client';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import StartCurrentYearTimer from '~/components/Admin/StartCurrentYearTimer';
import CreateCompetitionYears from '~/components/Admin/CreateCompetitionYears';
import EditHomepageImages from '~/components/Admin/EditHomepageImages';

const Admin = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const router = useRouter();

  useEffect(() => {
    if (cookies.user !== true) {
      router.push('/');
    }
  }, [cookies.user, router]);

  return (
    <div>
      <h1 className="text-4xl font-bold md:text-6xl text-center text-[#5480a9] pt-10">
        Administrace
      </h1>
      <StartCurrentYearTimer />
      <CreateCompetitionYears />
      <EditHomepageImages />
    </div>
  );
};

export default Admin;
