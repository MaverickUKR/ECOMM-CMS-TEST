import React from 'react';
import {json, LoaderFunctionArgs} from '@remix-run/node';
import {authenticator} from '~/.server/admin/services/auth.service';
import {useLoaderData} from '@remix-run/react';

export async function loader({request}: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/admin/auth/login',
  });

  return json({user})
}

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Admin</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}