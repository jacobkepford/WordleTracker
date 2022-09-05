import Link from "next/link";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Error = {
  scoreCountError: string;
  scoreDateError: string;
};

type FormData = {
  scoreDate: Date;
  scoreCount: number;
};

export default function Upload() {
  const [scoreCount, setScoreCount] = useState("");
  const [scoreDate, setScoreDate] = useState(new Date());
  const [errors, setErrors] = useState<Error>({
    scoreCountError: "",
    scoreDateError: "",
  });

  const GatherFormData = (): FormData => {
    const formData = {
      scoreDate: new Date(scoreDate),
      scoreCount: parseInt(scoreCount),
    };

    return formData;
  };

  const ValidateForm = (formData: FormData): boolean => {
    let formIsValid = true;

    if (formData.scoreDate.getFullYear() < 1970) {
      formIsValid = false;
      setErrors((errors) => ({ ...errors, scoreDateError: "Required" }));
    }

    if (!formData.scoreCount) {
      formIsValid = false;
      setErrors((errors) => ({ ...errors, scoreCountError: "Required" }));
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

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = GatherFormData();

    const formIsValid = ValidateForm(formData);

    if (!formIsValid) {
      return;
    }

    ClearValidation();
  };

  return (
    <>
      <h1>Upload Score</h1>
      <form onSubmit={HandleSubmit} className="text-light ms-3">
        <div className="form-group mb-3 w-25">
          <label htmlFor="scoreDate">
            What date are you logging this score for?
          </label>
          <DatePicker
            selected={scoreDate}
            onChange={(date: Date) => setScoreDate(date)}
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
          Upload
        </button>
      </form>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
