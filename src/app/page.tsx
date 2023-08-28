import styles from "@/app/page.module.css";
import { GithubAuth, SignOut } from "../../components/auth";
import { getServerSession } from "next-auth";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    const { user } = session;

    return (
      <main className={styles.main}>
        <Avatar
          sx={{ width: 200, height: 200 }}
          alt={user?.name || undefined}
          src={user?.image || undefined}
        />

        <Typography variant="h2">Hello {user?.name}</Typography>
        <Typography variant="h4">{user?.email}</Typography>

        <SignOut />
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <GithubAuth />
    </main>
  );
}
