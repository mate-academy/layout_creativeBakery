import { useEffect, useMemo, useState } from 'react';
import { Loader } from '../components/Loader';
import { PeopleFilters } from '../components/PeopleFilters';
import { PeopleTable } from '../components/PeopleTable';
import { getPeople } from '../api';
import { Person } from '../types';
import { useSearchParams } from 'react-router-dom';

function getPeopleWithParents(people: Person[]) {
  const peopleWithParents = [...people].map(person => {
    const child = { ...person };

    const mother = people.find(parent => parent.name === person.motherName);

    if (mother) {
      child.mother = mother;
    }

    child.motherName = child.motherName ? child.motherName : '-';

    const father = people.find(parent => parent.name === person.fatherName);

    if (mother) {
      child.father = father;
    }

    child.fatherName = child.fatherName ? child.fatherName : '-';

    return child;
  });

  return peopleWithParents;
}

function getPreparedPeople(
  people: Person[],
  obj: { sex: string; query: string; centuries: string[] },
) {
  const { sex, query, centuries } = obj;
  let visiblePeople = [...people];

  if (sex) {
    visiblePeople = visiblePeople.filter(person => person.sex === sex);
  }

  if (centuries.length) {
    visiblePeople = visiblePeople.filter(person => {
      const century = Math.ceil(person.born / 100);

      if (centuries.includes(`${century}`)) {
        return true;
      }

      return;
    });
  }

  if (query) {
    visiblePeople = visiblePeople.filter(person => {
      const { name, fatherName, motherName } = person;
      const lowerQuery = query.toLowerCase();

      if (
        name.toLowerCase().includes(lowerQuery) ||
        fatherName?.toLowerCase().includes(lowerQuery) ||
        motherName?.toLowerCase().includes(lowerQuery)
      ) {
        return person;
      }

      return;
    });
  }

  return visiblePeople;
}

export const PeoplePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [hasMatches, setHasMatches] = useState(true);

  const [peopleFromServer, setPeopleFromServer] = useState<Person[]>([]);
  const isEmptyPeople = peopleFromServer.length === 0;
  const condition = isDataLoaded && !isEmptyPeople && hasMatches;

  const [searchParams] = useSearchParams();

  const people = useMemo(
    () => getPeopleWithParents(peopleFromServer),
    [peopleFromServer],
  );

  const visiblePeople = getPreparedPeople(people, {
    sex: searchParams.get('sex') || '',
    query: searchParams.get('query') || '',
    centuries: searchParams.getAll('centuries'),
  });

  useEffect(() => {
    setHasMatches(visiblePeople.length > 0);
  }, [visiblePeople]);

  useEffect(() => {
    setIsDataLoaded(false);
    setisError(false);
    setIsLoading(true);

    getPeople()
      .then(loadedPeople => {
        setPeopleFromServer(loadedPeople);
        setIsDataLoaded(true);
      })
      .catch(() => {
        setisError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="columns is-desktop is-flex-direction-row-reverse">
          <div className="column is-7-tablet is-narrow-desktop">
            <PeopleFilters />
          </div>

          <div className="column">
            <div className="box table-container">
              {isLoading && <Loader />}

              {isError && (
                <p data-cy="peopleLoadingError">Something went wrong</p>
              )}

              {isDataLoaded && isEmptyPeople && (
                <p data-cy="noPeopleMessage">
                  There are no people on the server
                </p>
              )}

              {isDataLoaded && !isEmptyPeople && !hasMatches && (
                <p>There are no people matching the current search criteria</p>
              )}

              {condition && <PeopleTable people={visiblePeople} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
