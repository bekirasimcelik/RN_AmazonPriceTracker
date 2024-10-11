import React, {useContext, useEffect, useState} from 'react';
import {createContext} from 'react';
import {Session} from '@supabase/supabase-js';
import {supabase} from '../utils/supabase';

const AuthContext = createContext({});

export default function AuthContextProvider({children}) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
    });

    const {data: authListener} = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{session, user: session?.user}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
