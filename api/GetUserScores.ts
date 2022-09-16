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
}

const GetUserScores = async (userID: number) => {
    const response = await fetch(`http://localhost:3000/api/score?id=${userID}`);
    const data = await response.json();

    const scoreData: UserScore = {
        "One": 0,
        "Two": 0,
        "Three": 0,
        "Four": 0,
        "Five": 0,
        "Six": 0,
        "Total": 0
    };

    data.score.forEach((score: ScoreData) => {
        switch (score.score_value) {
            case 1:
                scoreData.One = scoreData.One + 1;
                break;
            case 2:
                scoreData.Two = scoreData.Two + 1;
                break;
            case 3:
                scoreData.Three = scoreData.Three + 1;
                break;
            case 4:
                scoreData.Four = scoreData.Four + 1;
                break;
            case 5:
                scoreData.Five = scoreData.Five + 1;
                break;  
            case 6:
                scoreData.Six = scoreData.Six + 1;
                break; 
        }
    });
    scoreData.Total = data.score.length;
    return scoreData;
}

export default GetUserScores;