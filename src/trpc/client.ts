import { createTRPCReact } from "@trpc/react-query";
import { TAppRoter } from ".";

export const trpc = createTRPCReact<TAppRoter>({});

