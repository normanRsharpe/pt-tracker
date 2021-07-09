import React, { useEffect, useState } from "react";
import "./App.css";
import { FinalScore } from "./utils/utils";

const App: React.FC = () => {
  const [state, setState] = useState({
    ageInput: 0,
    pushUpInput: 0,
    sitUpInput: 0,
    runInput: "",
    gender: "male",
    cantWalk: false,
    cantRun: false,
    cantPushUp: false,
    cantSitUp: false,
    finalScore: 0,
  });
  interface State {
    ageInput: number;
    pushUpInput: number;
    sitUpInput: number;
    runInput: string;
    gender: string;
    cantWalk: boolean;
    cantRun: boolean;
    cantPushUp: boolean;
    cantSitUp: boolean;
    finalScore: number;
  }

  const handleScoring = (scoreValues: typeof state) => {
    const pushupInput = scoreValues.pushUpInput;
    const situpInput = scoreValues.sitUpInput;

    const cantPushUp = scoreValues.cantPushUp;
    const cantSitUp = scoreValues.cantSitUp;
    const cantRun = scoreValues.cantRun;

    const newScore = FinalScore(
      pushupInput,
      cantPushUp,
      situpInput,
      cantSitUp,
      0,
      true
    );
    setState({
      ...state,
      finalScore: newScore,
    });
  };
  useEffect(() => {
    handleScoring(state);
  }, [
    state.ageInput,
    state.pushUpInput,
    state.sitUpInput,
    state.runInput,
    state.cantPushUp,
    state.cantSitUp,
    state.cantRun,
  ]);
  const handleFormInputChange = (value: any, field: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const handleRunInputMask = (value: string): number => {
    return 0;
  };

  const ProfileForm = ({ state }: { state: State }) => {
    return (
      <div className="d-flex">
        <div style={{ paddingRight: "1rem" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              value={state.cantWalk ? "on" : "off"}
              onChange={() =>
                handleFormInputChange(!state.cantWalk, "cantWalk")
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Walk
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              value={state.cantRun ? "on" : "off"}
              onChange={() => handleFormInputChange(!state.cantRun, "cantRun")}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Run
            </label>
          </div>
        </div>
        <div style={{ paddingRight: "1rem" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              value={state.cantPushUp ? "on" : "off"}
              onChange={() =>
                handleFormInputChange(!state.cantPushUp, "cantPushUp")
              }
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Push ups
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckChecked"
              value={state.cantSitUp ? "on" : "off"}
              onChange={() =>
                handleFormInputChange(!state.cantSitUp, "cantSitUp")
              }
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Sit Ups
            </label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid p-0">
      {/*Header*/}
      <div
        className="col d-flex text-white p-3"
        style={{ backgroundColor: "#026CA7" }}
      >
        <div className="row w-100">
          <i className="bi bi-list h1 p-0 m-0 mx-3 " />
        </div>
        <div className="row w-100 text-center justify-content-center align-content-center fw-bold">
          PT Calculator
        </div>
        {/*Blank Row*/}
        <div className="row w-100" />
      </div>
      {/*Score input area*/}
      <div className="col d-flex px-5 py-3">
        <div className="w-75">
          <div className="pb-2 fw-bold">Scores</div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="ageInput"
              placeholder="Age"
              value={state.ageInput}
              onChange={(event) =>
                handleFormInputChange(parseInt(event.target.value), "ageInput")
              }
            />
            <label htmlFor="floatingInput">Age</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="pushUpInput"
              placeholder="Push ups"
              value={state.pushUpInput}
              onChange={(event) =>
                handleFormInputChange(
                  parseInt(event.target.value),
                  "pushUpInput"
                )
              }
            />
            <label htmlFor="floatingInput">Push ups</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="sitUpInput"
              placeholder="Sit ups"
              value={state.sitUpInput}
              onChange={(event) =>
                handleFormInputChange(
                  parseInt(event.target.value),
                  "sitUpInput"
                )
              }
            />
            <label htmlFor="floatingPassword">Sit ups</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Run Time"
              value={state.runInput}
              onChange={(event) =>
                handleFormInputChange(
                  handleRunInputMask(event.target.value),
                  "runInput"
                )
              }
            />
            <label htmlFor="floatingPassword">Run Time</label>
          </div>
        </div>
        <div className="row w-25" />
      </div>
      {/*Gender Options*/}
      <div className="col d-flex px-5 py-3">
        <div className="w-75">
          <div className="pb-2 fw-bold">Gender</div>
          <div className="d-flex">
            <div className="form-check mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="genderInputMale"
                value={state.gender == "male" ? "on" : "off"}
                onChange={() => handleFormInputChange("male", "gender")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="genderInputFemale"
                value={state.gender == "female" ? "on" : "off"}
                onChange={() => handleFormInputChange("female", "gender")}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="row w-25" />
      </div>
      {/*Profile Options*/}
      <div className="col d-flex px-5 py-3">
        <div className="w-75">
          <div className="pb-2 fw-bold">Profiles</div>
          <ProfileForm state={state} />
        </div>
        <div className="row w-25" />
      </div>
      <div className="px-5 py-3">
        <div className="fw-bold">Results</div>
        <div>
          Score: {Math.floor(state.finalScore * 10) / 10}
          /100
        </div>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped bg-success"
            role="progressbar"
            style={{ width: `${state.finalScore}%` }}
            // ariaValuenow="25"
            // ariaValuemin="0"
            // ariaValuemax="100"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
