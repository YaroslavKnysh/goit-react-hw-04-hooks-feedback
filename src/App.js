import React, { useState } from 'react';
import _ from 'lodash';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = _.sum(_.values(state));
  const totalPositive = total ? Math.round((state.good / total) * 100) : 0;

  return (
    <div className="App">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onAddFeedback={key => {
            setState({ ...state, [key]: state[key] + 1 });
          }}
          options={Object.keys(state)}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <div>
            <p>There is no feedback</p>
          </div>
        ) : (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            countTotal={total}
            percentage={totalPositive}
          />
        )}
      </Section>
    </div>
  );
};
export default App;
