import _ from "lodash";
import moment from "moment";

const ageGetter = (ageInput: number): string => {
  const ageRangeMap = [
    { ageArray: [17, 25], ageRangeString: "17-24" },
    { ageArray: [25, 30], ageRangeString: "25-29" },
    { ageArray: [30, 35], ageRangeString: "30-34" },
    { ageArray: [35, 40], ageRangeString: "35-39" },
    { ageArray: [40, 45], ageRangeString: "40-44" },
    { ageArray: [45, 50], ageRangeString: "45-49" },
    { ageArray: [50, 55], ageRangeString: "50-54" },
    { ageArray: [55, 60], ageRangeString: "55-59" },
    { ageArray: [60, 100], ageRangeString: "60+" },
  ];

  const ageRangeObj = ageRangeMap.find((obj) =>
    _.inRange(ageInput, obj.ageArray[0], obj.ageArray[1])
  );

  return ageRangeObj ? ageRangeObj.ageRangeString : "";
};

const pushUpsGetter = (pushUpsInput: number, pushUpWaiver: boolean): number => {
  let pushUpsScore;

  const pushUpCountToScore = [
    { count: 30, score: 1 },
    { count: 31, score: 4.0 },
    { count: 32, score: 7.0 },
    { count: 33, score: 10.0 },
    { count: 34, score: 10.6 },
    { count: 35, score: 11.0 },
    { count: 36, score: 11.6 },
    { count: 37, score: 12.0 },
    { count: 38, score: 12.6 },
    { count: 39, score: 13.0 },
    { count: 40, score: 13.6 },
    { count: 41, score: 14.0 },
    { count: 42, score: 14.4 },
    { count: 43, score: 14.6 },
    { count: 44, score: 15.0 },
    { count: 45, score: 15.4 },
    { count: 46, score: 15.6 },
    { count: 47, score: 16.0 },
    { count: 48, score: 16.2 },
    { count: 49, score: 16.6 },
    { count: 50, score: 16.8 },
    { count: 51, score: 17.0 },
    { count: 52, score: 17.2 },
    { count: 53, score: 17.4 },
    { count: 54, score: 17.6 },
    { count: 55, score: 17.7 },
    { count: 56, score: 17.8 },
    { count: 57, score: 18.0 },
    { count: 58, score: 18.2 },
    { count: 59, score: 18.4 },
    { count: 60, score: 18.6 },
    { count: 61, score: 18.8 },
    { count: 62, score: 19.0 },
    { count: 63, score: 19.2 },
    { count: 64, score: 19.4 },
    { count: 65, score: 19.6 },
    { count: 66, score: 19.8 },
    { count: 67, score: 20.0 },
  ];

  if (
    pushUpsInput < 30 ||
    pushUpsInput === undefined ||
    pushUpsInput == null ||
    pushUpWaiver
  ) {
    pushUpsScore = 0;
  } else if (pushUpsInput >= 68) {
    pushUpsScore = 20;
  } else {
    const pushUpsScoreObj = pushUpCountToScore.find(
      (obj) => obj.count === pushUpsInput
    );
    pushUpsScore = pushUpsScoreObj ? pushUpsScoreObj.score : 0;
  }

  return pushUpsScore;
};

const sitUpsGetter = (sitUpInput: number, SitUpWaiver: boolean): number => {
  let sitUpsScore;
  if (SitUpWaiver) {
    return 0;
  }
  const sitUpCountToScore = [
    { count: 39, score: 3.0 },
    { count: 40, score: 6.0 },
    { count: 41, score: 9.0 },
    { count: 42, score: 12.0 },
    { count: 43, score: 12.6 },
    { count: 44, score: 13.0 },
    { count: 45, score: 14.0 },
    { count: 46, score: 15.0 },
    { count: 47, score: 16.0 },
    { count: 48, score: 16.6 },
    { count: 49, score: 17.0 },
    { count: 50, score: 17.4 },
    { count: 51, score: 17.6 },
    { count: 52, score: 18.0 },
    { count: 53, score: 18.4 },
    { count: 54, score: 18.8 },
    { count: 55, score: 19.0 },
    { count: 56, score: 19.4 },
    { count: 57, score: 19.7 },
    { count: 58, score: 20.0 },
  ];
  if (
    sitUpInput < 39 ||
    sitUpInput === undefined ||
    sitUpInput == null ||
    SitUpWaiver
  ) {
    sitUpsScore = 0;
  } else if (sitUpInput >= 58) {
    sitUpsScore = 20;
  } else {
    const sitUpScoreObj = sitUpCountToScore.find(
      (obj) => obj.count === sitUpInput
    );
    sitUpsScore = sitUpScoreObj ? sitUpScoreObj.score : 0;
  }
  return sitUpsScore;
};

const RunTimeGetter = (runTime: string, runWaiver: boolean): number => {
  const format = "mm:ss";
  const runTimeParsed = moment(runTime, format);
  let runTimeScore;

  const runTimeScoreMap = [
    { time: moment("09:13", format), score: 60 },
    { time: moment("09:35", format), score: 59 },
    { time: moment("09:46", format), score: 58.5 },
    { time: moment("09:59", format), score: 58 },
    { time: moment("10:11", format), score: 57.5 },
    { time: moment("10:24", format), score: 57 },
    { time: moment("10:38", format), score: 56.5 },
    { time: moment("10:52", format), score: 56 },
    { time: moment("11:07", format), score: 55.5 },
    { time: moment("11:23", format), score: 55 },
    { time: moment("11:39", format), score: 54.5 },
    { time: moment("11:57", format), score: 54 },
    { time: moment("12:15", format), score: 53.5 },
    { time: moment("12:34", format), score: 52 },
    { time: moment("12:54", format), score: 50.5 },
    { time: moment("13:15", format), score: 49.0 },
    { time: moment("13:37", format), score: 46.5 },
    { time: moment("14:01", format), score: 44.0 },
    { time: moment("14:26", format), score: 41.0 },
    { time: moment("14:53", format), score: 38.0 },
    { time: moment("15:21", format), score: 35.0 },
    { time: moment("15:51", format), score: 0 },
  ];

  if (runWaiver || runTimeParsed.isBefore(moment("02:00", format))) {
    console.log("Waiver");
    runTimeScore = 0;
  } else if (runTimeParsed.isSameOrAfter(runTimeScoreMap[21].time)) {
    runTimeScore = 0;
  } else {
    const runTimeScoreObj = runTimeScoreMap.find((obj) => {
      console.log(obj.time.isSameOrAfter(runTimeParsed));
      return obj.time.isSameOrAfter(runTimeParsed);
    });
    runTimeScore = runTimeScoreObj ? runTimeScoreObj.score : 0;
  }
  return runTimeScore;
};

const FinalScore = (
  pushUpInput: number,
  pushUpWaiver: boolean,
  sitUpInput: number,
  sitUpWaiver: boolean,
  runTimeInput: string,
  runWaiver: boolean
): number => {
  const pushUpsScore = pushUpsGetter(pushUpInput, pushUpWaiver);
  const sitUpsScore = sitUpsGetter(sitUpInput, sitUpWaiver);
  const runTimeScore = RunTimeGetter(runTimeInput, runWaiver);

  const firstScore = pushUpsScore;
  const secondScore = firstScore + sitUpsScore;
  let totalScore = secondScore + runTimeScore;

  if (pushUpWaiver && sitUpWaiver && runWaiver) {
    totalScore = 100;
  } else if (pushUpWaiver && sitUpWaiver) {
    totalScore = (totalScore / 60) * 100;
  } else if (pushUpWaiver && runWaiver) {
    totalScore = (totalScore / 20) * 100;
  } else if (runWaiver && sitUpWaiver) {
    totalScore = (totalScore / 20) * 100;
  } else if (runWaiver) {
    totalScore = (totalScore / 40) * 100;
  } else if (pushUpWaiver) {
    totalScore = (totalScore / 80) * 100;
  } else if (sitUpWaiver) {
    totalScore = (totalScore / 80) * 100;
  }

  return totalScore;
};

export {
  ageGetter,
  pushUpsGetter,
  sitUpsGetter as SitUpsGetter,
  RunTimeGetter,
  FinalScore,
};
