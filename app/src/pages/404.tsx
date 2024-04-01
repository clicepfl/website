import Button from "@/components/Button";
import TabTitle from "@/components/TabTitle";
import { locale, translate } from "@/locales";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <TabTitle title="Not found" />

      <div className="page">
        <h1>
          {translate("error404", locale(router), {
            capitalize: true,
            plural: false,
          })}
        </h1>
        <h4>
          {translate("error404desc", locale(router), {
            capitalize: true,
            plural: false,
          })}
        </h4>
        <Button text="Home" onClick={() => router.push("/")} />
      </div>
    </>
  );
}
