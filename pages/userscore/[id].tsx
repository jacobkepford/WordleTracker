import { GetServerSideProps, NextPage } from "next";
import GetUserScores, { UserScore } from "../../api/GetUserScores";
import { HomeButton } from "../../components/homeButton";

type UserScoreProps = {
  userScoreData: UserScore;
};

const UserScore = ({ userScoreData }: UserScoreProps) => {
  return (
    <>
      <div className="text-center">
        <h1 className="mb-3">
          {userScoreData.User.FirstName}, here are your scores:
        </h1>
        <h2 className="mb-3">{`Played: ${userScoreData.Total}`}</h2>
        <h3>{`One: ${userScoreData.Scores[0]}`}</h3>
        <h3>{`Two: ${userScoreData.Scores[1]}`}</h3>
        <h3>{`Three: ${userScoreData.Scores[2]}`}</h3>
        <h3>{`Four: ${userScoreData.Scores[3]}`}</h3>
        <h3>{`Five: ${userScoreData.Scores[4]}`}</h3>
        <h3>{`Six: ${userScoreData.Scores[5]}`}</h3>
      </div>

      <div className="mt-3 me-3 float-end">
        <HomeButton />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const userID = query.id ? query.id[0] : "1";
  const userScoreData = await GetUserScores(userID);
  console.log(userScoreData);
  return {
    props: {
      userScoreData,
    },
  };
};

export default UserScore;
