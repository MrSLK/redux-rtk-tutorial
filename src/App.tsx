import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useUsersQuery, useUserQuery } from './services/api';

function App() {
  const { data, error, isLoading, isFetching, isSuccess} = useUsersQuery();
  return (
    <div className="App">
      <h1>Shiba's Redux RTK Tutorial</h1>
      {isLoading && <h2>still loading....</h2>}
      {isFetching && <h2>Fetching....</h2>}
      {error && <h2>Ooooops, something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(user => {
            return <div className='data' key={user.id}>
              <span>{user.name}</span>
              <span>
                <UserDetail id={user.id}/>
              </span>
            </div>
          })}
        </div>
      )}
    </div>
  );
}

export const UserDetail = ({id}: {id: string}) => {
  const {data} = useUserQuery(id)

  return (
    <pre>{JSON.stringify(data, undefined, 2)}</pre>
  )
}

export default App;
