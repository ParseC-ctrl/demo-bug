import calendarIcon from "@/svgs/calendarIcon.svg";
import { Button } from "./components/IconButton";
// import { Button } from "./components/recipes/Button";
export default function Home() {
  return (
    <>
      <Button variant="grey" size="md">
        <span style={{ marginLeft: "20px" }}>123</span>
      </Button>
      <Button variant="dark" size="md">
        <span style={{ marginLeft: "20px" }}>456</span>
      </Button>
      {/* <Button variant={"dark"} size={"sm"}></Button>
      <Button variant={"grey"} size={"sm"}></Button> */}
    </>
  );
}
