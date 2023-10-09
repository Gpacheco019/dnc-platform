import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { useQuery } from 'react-query';

import { useFetchByFormation } from 'services/courses';

import { Spinner } from 'components/Loading';

import CourseTemplate, { DataFormation } from 'templates/Course';

export type ButtonActive = 'videos aulas' | 'doc' | 'quiz';

const Course = ({ course }: { course: string }) => {
  const [register, setRegiste] = useState(false);
  const fetchData = useFetchByFormation(course);

  const { data: formationData } = useQuery<DataFormation>(
    ['formação', course],
    async () => await fetchData,
    {
      enabled: !!course,
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5000 * 60
    }
  );

  const handleRegister = () => setRegiste(true);

  return (
    <>
      {!formationData ? (
        <Spinner />
      ) : (
        <CourseTemplate
          dataFormation={formationData}
          register={register}
          onRegister={handleRegister}
        />
      )}
    </>
  );
};

export default Course;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const paramsQuery = query;
  const { course } = paramsQuery as { course: string };

  return {
    props: {
      course
    }
  };
};
