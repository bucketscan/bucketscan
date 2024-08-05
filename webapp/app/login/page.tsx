'use client';

import { getURL } from '@/utils/helpers';
import { supabaseClient } from "@/app/api/supabaseClient"
import { useUser } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const user = useUser();

  useEffect(() => {
    debugger;
    if (user) {
      redirect('/dashboard');
    }
  }, [user]);

  if (!user)
    return (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 h-full">
          <div className="flex justify-center pb-12 ">
          </div>
          <div className="flex flex-col space-y-4 h-full">
            <Auth
              supabaseClient={supabaseClient}
              view="sign_in"
              providers={['google', 'github']}
              redirectTo={`http://localhost:3000/auth/callback`}
              magicLink={true}
              appearance={{ theme: ThemeSupa }}
              theme="light"
            />
          </div>
        </div>
      </div>
    );

  return (
    <div className="m-6">
    </div>
  );
};
