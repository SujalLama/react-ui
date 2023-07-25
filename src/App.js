import Accordion from "./components/Accordion";
import "./app.css";
import {MdArrowDropDownCircle} from "react-icons/md";

function App() {
  return (
    <>
    <h1>React UI Library</h1>
    <hr />
    <h3>Accordion</h3>
    <Accordion className="accordion" defaultKey=''>
      <Accordion.Item eventKey={0} disabled>
        <Accordion.Header className="accord-header">
          Header
          <MdArrowDropDownCircle />
        </Accordion.Header>
        <Accordion.Body className="accord-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam. Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere viverra sit amet in mi. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={1}>
        <Accordion.Header>
          Header
        </Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam. Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere viverra sit amet in mi. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey={2}>
        <Accordion.Header>
          Header
        </Accordion.Header>
        <Accordion.Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam. Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere viverra sit amet in mi. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default App;
