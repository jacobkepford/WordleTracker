import { User } from "../pages/api/user"

type ScoreData = {
    score_id: number,
    score_value: number,
    score_user: number,
    score_date: Date
}

export type UserScore = {
    "One": number,
    "Two": number,
    "Three": number,
    "Four":  number,
    "Five":  number,
    "Six": number,
    "Total": number,
    "User": User
}

const GetUserScores = async (userID: string) => {
    const userResponse = await fetch(`http://localhost:3000/api/user?id=${userID}`);
    const userData = await userResponse.json();

    const user = userData.user;
    
    const userScoreData: UserScore = {
        "One": 0,
        "Two": 0,
        "Three": 0,
        "Four": 0,
        "Five": 0,
        "Six": 0,
        "Total": 0,
        "User": user
    };
    
    const scoreResponse = await fetch(`http://localhost:3000/api/score?id=${userID}`);
    const scoreData = await scoreResponse.json();

    

    scoreData.score.forEach((score: ScoreData) => {
        switch (score.score_value) {
            case 1:
                userScoreData.One = userScoreData.One + 1;
                break;
            case 2:
                userScoreData.Two = userScoreData.Two + 1;
                break;
            case 3:
                userScoreData.Three = userScoreData.Three + 1;
                break;
            case 4:
                userScoreData.Four = userScoreData.Four + 1;
                break;
            case 5:
                userScoreData.Five = userScoreData.Five + 1;
                break;  
            case 6:
                userScoreData.Six = userScoreData.Six + 1;
                break; 
        }
    });
    userScoreData.Total = scoreData.score.length;

    return userScoreData;
}

export default GetUserScores;