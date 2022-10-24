import { GetServerSideProps, NextPage } from "next";
import GetUserScores, { UserScore } from "../../api/GetUserScores";
import { HomeButton } from "../../components/homeButton";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type UserScoreProps = {
  userScoreData: UserScore;
};

const UserScore = ({ userScoreData }: UserScoreProps) => {
  const chartData = {
    labels: ["One", "Two", "Three", "Four", "Five", "Six"],
    datasets: [
      {
        label: "Score",
        data: userScoreData.Scores.map((score) => score),
        backgroundColor: [
          "#ffbb11",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
        ],
      },
    ],
  };
  return (
    <>
      <div className="text-center">
        <h1 className="mb-3">
          {userScoreData.User.FirstName}, here are your scores:
        </h1>
        <h2 className="mb-3">{`Played: ${userScoreData.Total}`}</h2>
        <div>
          <Bar
            data={chartData}
            width={"30%"}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Scores",
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
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
