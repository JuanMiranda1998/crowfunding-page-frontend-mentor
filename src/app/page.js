import Header from "./components/Header/Header";
import MainComponent from "./components/MainSection/MainComponent";
import { cx } from "./utils";

export default function Home() {
  return (
    <main className={cx("flex min-h-screen flex-col items-center font-cm bg-[#fafafa] relative")}>
        <Header />
        <MainComponent />
    </main>
  );
}
