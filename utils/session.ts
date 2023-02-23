import nextSession from "next-session";

export interface AppSession {
  username?: string
};

type NextSessionInstance = ReturnType<typeof nextSession>;
type GetSessionArgs = Parameters<NextSessionInstance>;
type GetSessionReturn = Pick<Awaited<ReturnType<NextSessionInstance>>, "cookie" | "id">;

export const getSession: (
  ...args: GetSessionArgs
) => Promise<GetSessionReturn & AppSession> = nextSession();

export default nextSession({
  name: "NEXT_SESSION",
  cookie: {
    httpOnly: true,
    maxAge: 60*60*2
  }
});
