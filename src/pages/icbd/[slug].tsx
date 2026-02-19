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
}> = populateLayoutProps(async (context) => {
  if (typeof context.params?.slug !== "string") {
    return { notFound: true };
  }

  const found = await directus().request<ICBD[]>(
    readItems("icbd", {
      filter: {
        slug: {
          _eq: context.params.slug,
        },
      },
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
          activities: [
            "*",
            {
              translations: ["*"],
              hosts: ["*", { icbd_speakers_id: ["*"] }],
            },
          ],
        },
      ],
    })
  );
  if (found.length == 0) {
    return { notFound: true };
  }

  return {
    props: {
      icbd: found[0],
    },
  };
});
