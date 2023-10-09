import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useQuery } from 'react-query';

import debounce from 'lodash.debounce';
import { Curses, useFetchCourses } from 'services/courses';

import { Spinner } from 'components/Loading';

import HomeTemplate from 'templates/HomeTemplate';

const Home = () => {
  const { push } = useRouter();
  const [search, setSearch] = useState('');
  const query = useQuery('Cursos', useFetchCourses);

  const listCourses = useMemo(() => {
    if (!query.data) return [];

    const courses = query.data as Curses[];

    return courses
      .filter((curse) => {
        if (!search) return true;
        return curse.associate.some((keyword) =>
          keyword.includes(search.toLowerCase())
        );
      })
      .map(({ id, name }) => ({ id, name }));
  }, [query.data, search]);

  const handleOnSearch = debounce((value: string) => {
    setSearch(value);
  }, 300);

  const handleTakeRedirect = (value: string) => {
    push(`/cursos/${value.toLowerCase()}`);
  };

  return (
    <>
      {!query.data ? (
        <Spinner />
      ) : (
        <HomeTemplate
          courseData={listCourses}
          onChangeSearch={handleOnSearch}
          onClickRedirect={handleTakeRedirect}
        />
      )}
    </>
  );
};

export default Home;
