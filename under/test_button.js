'use strict';

const e = React.createElement;

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: false};
  }

  render() {
    if (this.state.test) {
      return 'You Test this.';
    }

    return e(
        'button',
        {onClick: () => this.setState({test: true})},
        'Test'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.test_button_container')
    .forEach(domContainer => {
      // Read the comment ID from a data-* attribute.
      const testID = parseInt(domContainer.dataset.testID, 10);
      ReactDOM.render(
          e(TestButton, { testID: testID }),
          domContainer
      );
    });