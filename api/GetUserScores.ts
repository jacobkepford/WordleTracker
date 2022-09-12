const GetUserScores = async (userID: number) => {
    const response = await fetch(`http://localhost:3000/api/score?id=${userID}`);
    const data = await response.json();
    return data;
}

export default GetUserScores;