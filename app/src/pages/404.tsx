import Button from "@/components/Button";
import { locale, translate } from "@/locales";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
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
        <Button text="Home" link="/" size="large" />
      </div>
    </>
  );
}
