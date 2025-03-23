import CreateCompetitionYears from '~/components/Admin/CreateCompetitionYears';

const Admin = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold md:text-6xl text-center text-[#5480a9] pt-10">
        Administrace
      </h1>
      <CreateCompetitionYears />
    </div>
  );
};

export default Admin;
