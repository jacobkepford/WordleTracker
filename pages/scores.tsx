import { NextPage } from "next";
import { GetServerSideProps } from "next";
import GetScores from "../api/GetScores";

const Scores: NextPage = (scoreData) => {
  return <h1>Hello</h1>;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const scoreData = await GetScores();
  return {
    props: {
      scoreData,
    },
  };
};

export default Scores;
