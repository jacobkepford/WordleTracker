import { GetServerSideProps, NextPage } from "next";
import GetUserScores, { UserScore } from "../../api/GetUserScores";

type UserScoreProps = {
  scores: UserScore;
};

const UserScore = ({ scores }: UserScoreProps) => {
  return (
    <div>
      <h2>{`One: ${scores.One}`}</h2>
      <h2>{`Two: ${scores.Two}`}</h2>
      <h2>{`Three: ${scores.Three}`}</h2>
      <h2>{`Four: ${scores.Four}`}</h2>
      <h2>{`Five: ${scores.Five}`}</h2>
      <h2>{`Six: ${scores.Six}`}</h2>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const scores = await GetUserScores(1);
  return {
    props: scores,
  };
};

export default UserScore;
