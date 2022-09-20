import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CreateScore, { ScoreData } from "../api/CreateScore";
import { HomeButton } from "../components/homeButton";

type Error = {
  scoreCountError: string;
  scoreDateError: string;
};

const Upload: NextPage = () => {
  const [scoreCount, setScoreCount] = useState("");
  const [scoreDate, setScoreDate] = useState(new Date());
  const [errors, setErrors] = useState<Error>({
    scoreCountError: "",
    scoreDateError: "",
  });
  const [successMessage, setsuccessMessage] = useState("");

  const GatherFormData = (): ScoreData => {
    const formData = {
      scoreDate: new Date(scoreDate),
      scoreCount: parseInt(scoreCount),
    };

    return formData;
  };

  const ValidateForm = (formData: ScoreData): boolean => {
    let formIsValid = true;

    //Empty date returns year value of 1969
    if (formData.scoreDate.getFullYear() < 1970) {
      formIsValid = false;
      setErrors((errors) => ({ ...errors, scoreDateError: "Required" }));
    }

    if (!formData.scoreCount) {
      formIsValid = false;
      setErrors((errors) => ({ ...errors, scoreCountError: "Required" }));
    }

    if (formData.scoreCount < 1 || formData.scoreCount > 6) {
      formIsValid = false;
      setErrors((errors) => ({
        ...errors,
        scoreCountError: "Invalid. Score must be between 1 and 6",
      }));
    }

    return formIsValid;
  };

  const ClearValidation = () => {
    setErrors((errors) => ({
      ...errors,
      scoreDateError: "",
      scoreCountError: "",
    }));
  };

  const ShowSuccessMessage = (message: string) => {
    //Flash success message and then hide after 5 seconds
    setsuccessMessage(message);
    setTimeout(() => {
      setsuccessMessage("");
    }, 5000);
  };

  const ClearForm = () => {
    setScoreCount("");
    setScoreDate(new Date());
  };

  const HandleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = GatherFormData();

    const formIsValid = ValidateForm(formData);

    if (!formIsValid) {
      return;
    }

    ClearValidation();
    const message = await CreateScore(formData);
    ShowSuccessMessage(message);
    ClearForm();
  };

  return (
    <>
      <h1>Upload Score</h1>
      <span>{successMessage}</span>
      <form onSubmit={HandleSubmit} className="text-light ms-3">
        <div className="form-group mb-3 w-25">
          <label htmlFor="scoreDate">
            What date are you logging this score for?
          </label>
          <DatePicker
            id="scoreDate"
            selected={scoreDate}
            onChange={(date: Date) => setScoreDate(date)}
          />
          <span style={{ color: "red" }}>{errors.scoreDateError}</span>
        </div>
        <div className="form-group mb-3 w-25">
          <label htmlFor="scoreNumber">What was your score?</label>
          <input
            type="number"
            className="form-control"
            id="scoreNumber"
            onChange={(event) => setScoreCount(event.target.value)}
            value={scoreCount}
          />
          <span style={{ color: "red" }}>{errors.scoreCountError}</span>
        </div>
        <button type="submit" className="btn btn-dark">
          Upload
        </button>
      </form>
      <h2 className="mt-5">
        <HomeButton />
      </h2>
    </>
  );
};

export default Upload;
