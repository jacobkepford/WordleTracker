import { GetServerSideProps, NextPage } from "next";
import GetUserScores, { UserScore } from "../../api/GetUserScores";

type UserScoreProps = {
  scores: UserScore;
};

const UserScore = ({ scores }: UserScoreProps) => {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-3">Jacob, here are your scores:</h1>
        <h2 className="mb-3">{`Played: ${scores.Total}`}</h2>
        <h3>{`One: ${scores.One}`}</h3>
        <h3>{`Two: ${scores.Two}`}</h3>
        <h3>{`Three: ${scores.Three}`}</h3>
        <h3>{`Four: ${scores.Four}`}</h3>
        <h3>{`Five: ${scores.Five}`}</h3>
        <h3>{`Six: ${scores.Six}`}</h3>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const scores = await GetUserScores(1);
  return {
    props: {
      scores,
    },
  };
};

export default UserScore;
