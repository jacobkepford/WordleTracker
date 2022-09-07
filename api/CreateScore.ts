export type ScoreData = {
    scoreDate: Date;
    scoreCount: number;
    scoreUser?: number;
}

const CreateScore  = async (scoreData: ScoreData) => {
    scoreData.scoreUser = 1;
    const response = await fetch(
    `/api/score`,
    {
        body: JSON.stringify(scoreData),
        headers: {
        'Content-Type': 'application/json',
        },
        method: 'POST'
    }
    );
    if (response.status == 200){
        return ("Score submitted successully!");
    } else {
        return ("Unable to submit score");
    }
};

export default CreateScore;