import './Styles.css';
import { useState } from 'react';

export default function Accordion({ data }) {
  const [id, setId] = useState(data[0].id);

  function handleToggle(selId) {
    if (selId === id) {
      setId(undefined);
    } else {
      setId(selId);
    }
  }

  const accordion = data.map((topic) => {
    return (
      <>
        <Header
          headerText={topic.header}
          keyId={topic.id}
          onToggle={handleToggle}
        />
        {id === topic.id && (
          <Description keyId={topic.id} descText={topic.description} />
        )}
      </>
    );
  });

  return <>{accordion}</>;
}

function Header({ headerText, keyId, onToggle }) {
  return (
    <header key={keyId} id={keyId} onClick={(e) => onToggle(keyId)}>
      {headerText}
    </header>
  );
}

function Description({ descText }) {
  return <p>{descText}</p>;
}
