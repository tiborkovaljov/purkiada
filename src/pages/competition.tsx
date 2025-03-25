import YearTable from '~/components/YearTable';
import { api } from '~/utils/api';

const Competition = () => {
  const {
    data: yearData,
    isLoading,
    isError,
  } = api.competitionAssignments.getAll.useQuery();

  if (!yearData) {
    return <p>Site is loading</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error loading data.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold md:text-6xl">
        <p className="text-center text-[#5480a9]">Soutěž Purkiáda</p>
      </h1>
      <br />
      <br />
      <p className="text-center">
        Zde se můžete podívat na zadání, která se v soutěži objevila v minulých
        letech a otevřít zadání momentálního ročníku.
      </p>
      <br />
      <YearTable data={yearData} />
    </div>
  );
};

export default Competition;
