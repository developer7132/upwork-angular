export interface Job {
    id: Number,
    title: String,
    summary: String,
    jobType: String,
    expertLevel: String,
    projectLength: String,
    estimatedShift: String,
    paymentVerified: Boolean,
    requiredSkills: String[],
    businessSize: String[],
    postedTime: String,
}
export class JobObject implements Job {
    id: Number = new Number;
    title: String = new String;
    summary: String = new String;
    jobType: String = new String;
    expertLevel: String = new String;
    projectLength: String = new String;
    estimatedShift: String = new String;
    paymentVerified: Boolean = new Boolean;
    requiredSkills: String[] = new Array<String>();
    businessSize: String[] = new Array<String>();
    postedTime: String = new String;
}