import React from 'react';
import ListItem from 'components/membersList/ListItem';


const MembersList = ({ list, onSelect }) => {
  if (!list.length) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {list.map((member) => <ListItem {...member} onSelect={onSelect} key={member.id} />)}
    </ul>
  );
};

export default MembersList;
