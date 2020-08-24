import React from 'react';
import Button from './Button';
import './buttonPanel.css';

export default function ButtonPanel() {
  return (
    <div>
      <div className="row">
        <Button color="yes" wide={false} name="AC" />
        <Button color="yes" wide={false} name="+/-" />
        <Button color="yes" wide={false} name="%" />
        <Button wide={false} name="÷" />
      </div>
      <div className="row">
        <Button color="yes" wide={false} name="7" />
        <Button color="yes" wide={false} name="8" />
        <Button color="yes" wide={false} name="9" />
        <Button wide={false} name="X" />
      </div>
      <div className="row">
        <Button color="yes" wide={false} name="4" />
        <Button color="yes" wide={false} name="5" />
        <Button color="yes" wide={false} name="6" />
        <Button wide={false} name="-" />
      </div>
      <div className="row">
        <Button color="yes" wide={false} name="1" />
        <Button color="yes" wide={false} name="2" />
        <Button color="yes" wide={false} name="3" />
        <Button wide={false} name="+" />
      </div>
      <div className="row">
        <Button color="yes" wide name="0" />
        <Button color="yes" wide={false} name="." />
        <Button wide={false} name="=" />
      </div>
    </div>
  );
}
