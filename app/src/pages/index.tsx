import Background from "@/assets/background.svg";
import CLICLogo from "@/assets/clic_color_info.svg";
import NavigationBar from "@/components/NavigationBar";

export default function Home() {
  return (
    <div className="main">
      <NavigationBar />
      <div className="background">
        <CLICLogo className="CLICLogo" />
        <Background className="background" />
      </div>
    </div>
  );
}
