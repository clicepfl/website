import ICBDDisplay from "@/components/Icbd";
import { directus, populateLayoutProps } from "@/directus";
import { ICBD } from "@/types/aliases";
import { readItems } from "@directus/sdk";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function ICBDPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <ICBDDisplay icbd={props.icbd} />;
}

export const getServerSideProps: GetServerSideProps<{
  icbd: ICBD;
}> = populateLayoutProps(async (_) => {
  return {
    props: {
      icbd: (
        await directus().request<ICBD[]>(
          readItems("icbd", {
            sort: "-date",
            fields: [
              "logo",
              "presentation_video",
              "date",
              "place",
              "start_time",
              "end_time",
              { partners_images: ["*"] },
              {
                translations: ["*"],
              },
              {
                speakers: ["*"],
              },
              {
                phds: ["*"],
              },
              {
                activities: ["*", { translations: ["*"], hosts: ["*"] }],
              },
            ],
          })
        )
      )[0],
    },
  };
});
