import { getDegrees, getMajors } from "../api/utils/degrees";
import "./degreePlanner.css";
import FormDetails from "./formDetails";

export default async function DegreePlanner() {
    const degrees = await getDegrees();
    return <FormDetails degrees={degrees} />;
}
