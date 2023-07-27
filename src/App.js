import "./app.css";
import Accordion from "./components/Accordion";
import {MdArrowDropDownCircle} from "react-icons/md";
import Carousel from "./components/Carousel";
import {FaCircleDot} from "react-icons/fa6";

function App() {
  return (
    <>
    <h1>React UI Library</h1>
    <hr />
    {/* <h3>Accordion</h3>
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
    </Accordion> */}
    <h3>Carousel</h3>
    <Carousel className='carousel-wrapper' indicator={<FaCircleDot />}>
      <Carousel.Item>
        <div className="carousel-item">
        <img src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80" alt="desk" />
        <h2>This first slide</h2>
        <p>Lorem</p>
        </div>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default App;
