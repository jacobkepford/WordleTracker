import Link from "next/link";
import { useState } from "react";

type Error = {
  scoreCountError: string;
  scoreDateError: string;
};

export default function Upload() {
  const [scoreCount, setScoreCount] = useState("");
  const [scoreDate, setScoreDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [errors, setErrors] = useState<Error>({
    scoreCountError: "",
    scoreDateError: "",
  });

  const HandleSubmit = () => {};

  return (
    <>
      <h1>Upload Score</h1>
      <form onSubmit={HandleSubmit} className="text-light ms-3">
        <div className="form-group mb-3 w-25">
          <label htmlFor="scoreDate">
            What date are you logging this score for?
          </label>
          <input
            type="date"
            className="form-control col-xs-3"
            id="scoreDate"
            onChange={(event) => setScoreDate(event.target.value)}
            value={scoreDate}
          />
          <span style={{ color: "red" }}>{errors.scoreDateError}</span>
        </div>
        <div className="form-group mb-3 w-25">
          <label htmlFor="scoreNumber">What was your score?</label>
          <input
            type="number"
            min={1}
            max={7}
            className="form-control"
            id="scoreNumber"
            onChange={(event) => setScoreCount(event.target.value)}
            value={scoreCount}
          />
          <span style={{ color: "red" }}>{errors.scoreCountError}</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Run Monty Hall Problem
        </button>
      </form>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
