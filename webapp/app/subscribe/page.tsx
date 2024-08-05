<<<<<<< HEAD
import { memo } from "react"
import { supabaseClient } from "@/app/api/supabaseClient"
=======
import { memo } from "react";
import { createClient } from "@/utils/supabase/client";
>>>>>>> origin/dev

const validEmailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const isValidEmail = (email: string): boolean =>
  !!email && validEmailRegex.test(email);

<<<<<<< HEAD
const doesEntryExistAlready = async (email: string): Promise<boolean> => {
  const { data: existingEntry } = await supabaseClient.from("mailinglist")
=======
const supabase = createClient();

const doesEntryExistAlready = async (email: string): Promise<boolean> => {
  const { data: existingEntry } = await supabase
    .from("mailinglist")
>>>>>>> origin/dev
    .select()
    .filter("email", "eq", email)
    .single();

  return !!existingEntry;
};

const createNewEntry = async (email: string): Promise<boolean> => {
<<<<<<< HEAD
  const { error, status } = await supabaseClient.from("mailinglist")
=======
  const { error, status } = await supabase
    .from("mailinglist")
>>>>>>> origin/dev
    .insert({
      email,
    })
    .single();

  if (error) {
    console.error(error);

    return false;
  }

  if (status < 200 || status > 299) {
    console.error("Failed to insert the email with status code", status);

    return false;
  }

  return true;
};

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

type Props = {
  searchParams: SearchParams;
};

const Page = async ({ searchParams }: Props) => {
  const email = (searchParams.email as string) || "";

  if (!isValidEmail(email)) {
    return <p>Email is invalid!</p>;
  }

  if (!(await doesEntryExistAlready(email))) {
    if (!(await createNewEntry(email))) {
      return <p>Sorry, something went wrong!</p>;
    }
  }

  return (
    <div className="-z-[100] bg-gray-900">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Thank you for joining our mailing list!
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              We will be in touch once we have a launch date planned!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Page);
