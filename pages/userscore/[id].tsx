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
        <h3>{`One: ${userScoreData.One}`}</h3>
        <h3>{`Two: ${userScoreData.Two}`}</h3>
        <h3>{`Three: ${userScoreData.Three}`}</h3>
        <h3>{`Four: ${userScoreData.Four}`}</h3>
        <h3>{`Five: ${userScoreData.Five}`}</h3>
        <h3>{`Six: ${userScoreData.Six}`}</h3>
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
  return {
    props: {
      userScoreData,
    },
  };
};

export default UserScore;
