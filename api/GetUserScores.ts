import { User } from "../pages/api/user"

type ScoreData = {
    score_id: number,
    score_value: number,
    score_user: number,
    score_date: Date
}

export type UserScore = {
    "Scores": number[],
    "Total": number,
    "User": User
}

const GetUserScores = async (userID: string) => {
    const userResponse = await fetch(`http://localhost:3000/api/user?id=${userID}`);
    const userData = await userResponse.json();

    const user = userData.user;
    
    const userScoreData: UserScore = {
        "Scores": [0, 0, 0, 0, 0, 0],
        "Total": 0,
        "User": user
    };
    
    const scoreResponse = await fetch(`http://localhost:3000/api/score?id=${userID}`);
    const scoreData = await scoreResponse.json();

    scoreData.score.forEach((score: ScoreData) => {
        userScoreData.Scores[score.score_value - 1]++;
    });
    userScoreData.Total = scoreData.score.length;

    return userScoreData;
}

export default GetUserScores;