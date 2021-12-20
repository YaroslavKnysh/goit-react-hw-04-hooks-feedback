import React from 'react';
import _ from 'lodash';

const FeedbackOptions = ({ onAddFeedback, options }) => (
  <div>
    {options.map(option => (
      <button type="button" onClick={e => onAddFeedback(option)}>
        {_.capitalize(option)}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
