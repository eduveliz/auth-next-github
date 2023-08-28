"use client";

import { signIn, signOut } from "next-auth/react";
import styles from "@/app/page.module.css";
import Button from "@mui/material/Button";
import Image from "next/image";
import Typography from "@mui/material/Typography";

export const GithubAuth = () => {
  return (
    <div>
      <div className={styles.center}>
        <Button onClick={() => signIn("github")}>
          <Image
            className={styles.logo}
            src="/github-mark.svg"
            alt="github logo"
            width={200}
            height={200}
            priority
          />
        </Button>
      </div>

      <Typography variant="h4">Press the icon for login with github</Typography>
    </div>
  );
};

export const SignOut = () => {
  return (
    <div className={styles.center}>
      <Button variant="contained" onClick={() => signOut()}>
        <Typography fontWeight="bold">Sign Out</Typography>
      </Button>
    </div>
  );
};
