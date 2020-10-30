// eslint-disable-next-line import/no-unresolved
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';
import PropTypes from 'prop-types';
import React from 'react';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
}).format;

function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h1>
        {type.title} - {value ? formatMoney(value / 100) : ''}
      </h1>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.propTypes = {
  inputComponent: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.shape({
    description: PropTypes.any,
    name: PropTypes.any,
    title: PropTypes.any,
  }),
  value: PropTypes.number,
};

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
