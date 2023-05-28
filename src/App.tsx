// import Message from './message';

import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

// import ListGroup from './components/ListGroup';
function App() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'Paris', 'Lodon'];
  // const itemsTwo = ['Ikram', 'Rawi', 'Bilal', 'Abeni', 'Abel'];

  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}{' '}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      /> */}
    </div>
  );
}

export default App;
