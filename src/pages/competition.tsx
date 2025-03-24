import YearTable from '~/components/YearTable';

const Competition = () => {
  const yearData = [
    { year: 2015, fileLink: '#', results: '#' },
    { year: 2016, fileLink: '#', results: '#' },
    { year: 2017, fileLink: '#', results: '#' },
    { year: 2018, fileLink: '#', results: '#' },
    { year: 2019, fileLink: '#', results: '#' },
    { year: 2020, fileLink: '#', results: '#' },
    { year: 2021, fileLink: '#', results: '#' },
    { year: 2022, fileLink: '#', results: '#' },
    { year: 2023, fileLink: '#', results: '#' },
    { year: 2024, fileLink: '#', results: '#' },
    { year: 2025, fileLink: '#', results: '#' },
  ];

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
