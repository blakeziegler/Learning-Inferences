import { JsPsychPlugin } from "jspsych";

declare global {
    interface Window {
        jsPsych?: {
            plugins: { [key: string]: JsPsychPlugin<any> };
        };
    }
}

export {};