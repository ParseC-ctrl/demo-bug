import calendarIcon from "@/svgs/calendarIcon.svg";
import calendarIconLight from "@/svgs/calendarIconLight.svg";
import { IconButton } from "./components/IconButton";
export default function Home() {
  return (
    <>
      <IconButton variant="grey" size="md" icon={calendarIcon}>
        <span style={{ marginLeft: "20px" }}>123</span>
      </IconButton>
      <IconButton variant="dark" size="md" icon={calendarIconLight}>
        <span style={{ marginLeft: "20px" }}>456</span>
      </IconButton>
    </>
  );
}
