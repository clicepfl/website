import { DIRECTUS_URL, directus } from "@/directus";
import { readSingleton } from "@directus/sdk";
import { GetServerSideProps } from "next";

export default function Page() {}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  if (context.query.name === "logo.png") {
    const assoc = await directus().request(
      readSingleton("association", { fields: ["mail_signature"] })
    );

    return {
      redirect: {
        destination: `${DIRECTUS_URL}/assets/${assoc.mail_signature}`,
        permanent: false,
      },
    };
  }

  return { notFound: true };
};
