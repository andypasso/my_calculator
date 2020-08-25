import React from 'react';
import Button from './Button';
import './buttonPanel.css';

export default function ButtonPanel() {
  return (
    <div>
      <div className="row">
        <Button color="yes" name="AC" />
        <Button color="yes" name="+/-" />
        <Button color="yes" name="%" />
        <Button name="÷" />
      </div>
      <div className="row">
        <Button color="yes" name="7" />
        <Button color="yes" name="8" />
        <Button color="yes" name="9" />
        <Button name="X" />
      </div>
      <div className="row">
        <Button color="yes" name="4" />
        <Button color="yes" name="5" />
        <Button color="yes" name="6" />
        <Button name="-" />
      </div>
      <div className="row">
        <Button color="yes" name="1" />
        <Button color="yes" name="2" />
        <Button color="yes" name="3" />
        <Button name="+" />
      </div>
      <div className="row">
        <Button color="yes" wide name="0" />
        <Button color="yes" name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
