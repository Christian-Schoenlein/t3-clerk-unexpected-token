import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { isSignedIn } = useUser();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <span>{isSignedIn ? "Signed in" : "Not signed in"}</span>

        <span>
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </span>

        <SignInButton />

        <SignOutButton />
      </div>
    </div>
  );
};

export default Home;
