
import React, { Component } from "react";

import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback() {
    const {good, neutral, bad  } = this.state
    return good + neutral + bad 
  }


  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
  
    return Math.round((good * 100) / totalFeedback);
  };

  render() {
    return (
      <div>
        <Section title="Please Leave feedback">

        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
        </Section>
      </div>
    );
  }
}

export default App;
