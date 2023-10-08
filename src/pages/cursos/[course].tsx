import { GetServerSideProps } from 'next';

const Course = ({ course }: { course: string }) => {
  return <>pagina do curso {course}</>;
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
