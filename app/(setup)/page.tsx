import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          id: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/channels/${server.id}`);
  }

  return <div>Create A server</div>;
};

export default SetupPage;
