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
          "#665645",
          "#ffffff",
          "#818384",
          "#b59f3b",
          "#454566",
          "#538d4e",
        ],
      },
    ],
  };
  return (
    <>
      <div className="row g-0 mt-3">
        <h1 className="col-8 text-end">
          {userScoreData.User.FirstName}, here are your scores:
        </h1>
        <div className="col-4 text-end pe-3">
          <HomeButton />
        </div>
      </div>

      <div className="text-center">
        <h2 className="mb-3">{`Total: ${userScoreData.Total}`}</h2>
        <div className="w-50 mx-auto">
          <Bar
            data={chartData}
            options={{
              indexAxis: "y",
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
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
