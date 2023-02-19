const GetScores = async () => {
    const scoreResponse = await fetch(`http://localhost:3000/api/score`);
    const scoreData = await scoreResponse.json();

    return scoreData;
}

export default GetScores;