/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function UserDetails({ userId, onCancel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function getUserId() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/' + userId
        );
        if (!response.ok) {
          throw new Error('Reponse failed.');
        }
        const targetUser = await response.json();
        setIsLoading(false);
        setUser(targetUser);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getUserId();
    return () => {
      setUser();
    };
  }, [userId]);


  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error.message}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
