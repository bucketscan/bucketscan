'use client';

import { getURL } from '@/utils/helpers';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

export default function Page() {
  const user = useUser();
  const supabase = createClientComponentClient()

  if (!user)
    return (
      <div className="flex justify-center height-screen-helper">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 h-full">
          <div className="flex justify-center pb-12 ">
          </div>
          <div className="flex flex-col space-y-4 h-full">
            <Auth
              supabaseClient={supabase}
              view="sign_in"
              providers={['google', 'github']}
              redirectTo={`${getURL()}auth/callback`}
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
