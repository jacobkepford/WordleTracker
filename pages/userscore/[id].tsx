import { GetServerSideProps, NextPage } from "next";
import GetUserScores from "../../api/GetUserScores";

type Score = {
  score_id: number;
  score_value: number;
  score_user: number;
  score_date: Date;
};

type UserScoreProps = {
  score: Score[];
};

const UserScore = ({ score }: UserScoreProps) => {
  return <div>Hello {score[0].score_id}</div>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const score = await GetUserScores(1);
  return {
    props: score,
  };
};

export default UserScore;
