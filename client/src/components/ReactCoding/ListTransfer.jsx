import React, { useState } from 'react';

export default function ListTransfer() {
  const [leftList, setLeftList] = useState([
    'HTML',
    'Javascript',
    'CSS',
    'Typescript',
  ]);
  const [righList, setRightList] = useState([
    'React',
    'Angular',
    'Node',
    'Vue',
  ]);

  const [moveLeftList, setMoveLeftList] = useState([]);
  const [moveRigthList, setMoveRigthList] = useState([]);


  const isHasDisable = (item) => {
      return item.length == 0; 
  }

  const moveLeft = () => {
    let move = moveRigthList;
    setLeftList([...leftList, ...move]);
    setRightList(righList.filter((item) => !move.includes(item)));
    setMoveRigthList([]);
  };

  const moveAllItem = (srcList, setSrcList , desList , setDesList ) => {
    setDesList((prevItem) => [...prevItem, ...srcList]);
    setSrcList([]);
  };

  const moveRight = () => {
    let move = moveLeftList;
    setRightList([...righList, ...move]);
    setLeftList(leftList.filter((item) => !move.includes(item)));
    setMoveLeftList([]);
  };

  const toggleSelect = (item, selected, setSelected) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    }
  };

  return (
    <div>
      <h1>List Transfer - </h1>
      <ul>
        <span> Left List </span>
        {leftList.length > 0 &&
          leftList.map((item) => (
            <li key={item}>
              {' '}
              <input
                type="checkbox"
                checked={moveLeftList.includes(item)}
                onChange={() =>
                  toggleSelect(item, moveLeftList, setMoveLeftList)
                }
              />{' '}
              {item}
            </li>
          ))}
      </ul>
      <button 
      disabled={leftList.length === 0}
      onClick={() => moveAllItem(leftList, setLeftList,righList, setRightList  )}>{'>>'}</button>
      <button 
       disabled={moveLeftList.length === 0}
      onClick={moveRight}>{'>'}</button>
      <ul>
        <span> Right List </span>
        {righList.length > 0 ?  righList.map((item) => (
          <li key={item}>
            {' '}
            <input
              type="checkbox"
              checked={moveRigthList.includes(item)}
              onChange={() =>
                toggleSelect(item, moveRigthList, setMoveRigthList)
              }
            />{' '}
            {item} 
          </li>
        )) : <span>List is empty.....</span>}
      </ul>
      
      <button 
       disabled={moveRigthList.length === 0}
      onClick={moveLeft}>{'<'}</button>
      <button 
      disabled={righList.length <= 0 }
      onClick={() => moveAllItem(righList, setRightList, leftList, setLeftList,)}>{'<<'}</button>
    </div>
  );
}


