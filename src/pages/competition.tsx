import YearTable from "~/components/YearTable";

const Competition = () => {
  const yearData = [
    { year: 2015, fileLink: "#", otherLink: "#" },
    { year: 2016, fileLink: "#", otherLink: "#" },
    { year: 2017, fileLink: "#", otherLink: "#" },
    { year: 2018, fileLink: "#", otherLink: "#" },
    { year: 2019, fileLink: "#", otherLink: "#" },
    { year: 2020, fileLink: "#", otherLink: "#" },
    { year: 2021, fileLink: "#", otherLink: "#" },
    { year: 2022, fileLink: "#", otherLink: "#" },
    { year: 2023, fileLink: "#", otherLink: "#" },
    { year: 2024, fileLink: "#", otherLink: "#" },
    { year: 2025, fileLink: "#", otherLink: "#" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold md:text-6xl">
        <p className="text-center text-[#5480a9]">Soutěž Purkiáda</p>
      </h1>
      <br />
      <br />
      <p className="text-center">
        Zde se můžete podívat na zadání, která se v soutěži objevila v minulých letech.
      </p>
      <br />
      <YearTable data={yearData} />
    </div>
  );
};

export default Competition;
