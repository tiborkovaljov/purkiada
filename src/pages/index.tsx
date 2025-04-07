import Link from 'next/link';
import { api } from '~/utils/api';

import DivideLine from '~/components/DivideLine';

type ImageDescription = {
  imageUrl: string;
  altText: string;
};

export default function Home() {
  const {
    data: homepageImages,
    isLoading,
    isError,
  } = api.homepageImages.getAll.useQuery();

  if (!homepageImages) {
    return <p>Site is loading</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data.</p>;
  }
  console.log(homepageImages);

  let images: Record<string, ImageDescription> = {};
  homepageImages.map((image) => {
    images[image.title] = { imageUrl: image.imageUrl, altText: image.altText };
  });

  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-20 p-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center md:flex-row">
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold md:text-6xl">
            <p className="text-[#5480a9]">Purkiáda</p>
            <p>
              je IT soutěž pro žáky 9. ročníku ZŠ pořádaná ročně na Purkyňce.
            </p>
          </h1>
          <br />
          <br />
          <div className="flex flex-row gap-2">
            <Link
              href="/competition"
              className="mt-4 inline-block rounded-full bg-[#5480a9] px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#41698a] hover:shadow-xl"
            >
              Minulé ročníky
            </Link>
            <Link
              href="/competition"
              className="mt-4 inline-block rounded-full bg-[#40A368] px-6 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#41698a] hover:shadow-xl "
            >
              Aktuální rok
            </Link>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <img
            src={'../images/' + images['Purkiáda logo img']?.imageUrl}
            alt={images['Purkiáda logo img']?.altText}
            className="w-60 max-w-sm"
          />
        </div>
      </div>

      <DivideLine />

      <div
        id="about"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row"
      >
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#5480a9]">
            A o čem Purkiáda vlastně je?
          </h1>
          <br />
          <p>
            Pokud tě zajímají počítače a logické úlohy, Purkiáda je pro tebe.
            Soutěž spočívá v plnění různých úloh připravených studenty oboru
            Informační technologie. Po skončení soutěže je pro zájemce
            připravená prohlídka školy..
          </p>
          <br />
          <p>
            Pro řešení úloh nepotřebuješ znalosti žádných speciálních programů
            nebo programovacích jazyků.
          </p>
        </div>
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <img
            src={'../images/' + images['Purkiáda about img']?.imageUrl}
            alt={images['Purkiáda about img']?.altText}
            className="w-sm h-full md:w-full"
          />
        </div>
      </div>

      <DivideLine />

      <div
        id="history"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row"
      >
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <img
            src={'../images/' + images['Purkiáda historie img']?.imageUrl}
            alt={images['Purkiáda historie img']?.altText}
            className="w-sm h-full md:w-full"
          />
        </div>
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#5480a9]">
            Historie soutěže
          </h1>
          <br />
          <p className="text-wrap">
            Soutěž vznikla v roce 2009 jako možnost pro zájemce o studium, jako
            jsi ty, poznat, v čem opravdu spočívá studium oboru Informačních
            technologií. Na přijímacích zkouškách není žádná zkouška z
            informatiky, takže ti, kteří se o počítačovou tématiku zajímali,
            neměli větší šanci uspět, nebo se nějak prosadit mezi ostatními
            uchazeči.
          </p>
        </div>
      </div>

      <DivideLine />

      <div
        id="school"
        className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row"
      >
        <div className="text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-[#5480a9]">
            Informace o škole
          </h1>
          <br />
          <p className="text-wrap">
            Střední průmyslová škola Brno, Purkyňova, známá také jako
            "Purkyňka", je příspěvková organizace poskytující střední vzdělání v
            technických a sociálních oborech. Nachází se na adrese Purkyňova 97,
            612 00 Brno.
          </p>
          <br />
          <br />
          <p>
            Pokud chcete vědět více, tak navštivte naši školu:{' '}
            <a
              href="https://www.purkynka.cz/"
              className="text-[#5480a9]"
              target="_blank"
            >
              Purkyňka
            </a>
          </p>
        </div>
        <div className="mt-8 flex justify-center md:mt-0 md:w-1/2">
          <img
            src={'../images/' + images['Purkiáda budova img']?.imageUrl}
            alt={images['Purkiáda budova img']?.altText}
            className="w-sm h-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
