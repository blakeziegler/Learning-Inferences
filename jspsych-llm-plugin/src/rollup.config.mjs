import { makeRollupConfig } from "@jspsych/config/rollup";
import path from "path";

export default makeRollupConfig({
    input: path.resolve("./index.ts"),
    name: "jsPsychSummarizeGrader",
});