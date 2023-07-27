# React UI library

This is a react component library which only covers the most essential components along with some custom hooks. There are only few stylings to the components. The idea is to only provide functionality and only bare minimum style, so that you can make the component as per your design.

**List of components:**

1. [Accordion](/#accordion)
2. [Carousel](/#carousel)
3. [Dropdown](/#dropdown)
4. [Modal](/#modal)
5. [Tabs](/#tabs)

**List of Hooks:**

1. [useToggle](/#usetoggle)

---

---

## Components

---

### Accordion

Following are the components in accordion:

- Accordion
  - Main wrapper of accordion
  - Props:
    - defaultKey -> sets which accordion item to show
    - className -> to add custom styles
- Accordion.Item
  - Wrapper to create Item
  - Props:
    - eventKey -> sets the unique key that represents the item
    - disabled -> defaults to false, disables the click event
- Accordion.Header
  - Wrapper to create header
  - accepts className props for styling purpose
- Accordion.Body
  - Wrapper to create body
  - accepts className props for styling purpose

**Example**

```js
<Accordion className="accordion" defaultKey="">
  <Accordion.Item eventKey={0} disabled>
    <Accordion.Header className="accord-header">
      Header
      <MdArrowDropDownCircle />
    </Accordion.Header>
    <Accordion.Body className="accord-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
      convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt
      ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam.
      Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque
      tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur
      tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere
      viverra sit amet in mi.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey={1}>
    <Accordion.Header>Header</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
      convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt
      ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam.
      Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque
      tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur
      tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere
      viverra sit amet in mi.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey={2}>
    <Accordion.Header>Header</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
      convallis metus, ut finibus elit. Nulla dictum, tellus quis tincidunt
      ultricies, ante ipsum laoreet magna, eget porta ex enim sit amet quam.
      Duis sed metus vehicula, lacinia enim sit amet, efficitur massa. Quisque
      tincidunt eros vitae vehicula mattis. Aliquam erat volutpat. Curabitur
      tristique ipsum nec diam rhoncus semper. Duis ut dui sed quam posuere
      viverra sit amet in mi.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
```

---

### Carousel

Following are the components in Carousel:

- Carousel
  - Main wrapper of carousel
  - Props:
    - interval -> Accepts number which represents milliseconds to autoplay slider
    - className -> to add custom styles; defaults: carousel-wrapper
    - showButton -> Accepts boolean which shows or hide next or previous button; defaults: true
    - showIndicator -> Accepts boolean which shows or hide indicators; defaults: true
    - button -> Accepts icon for next or prev button; Please provide only one previous icon which will be converted to next icon also
    - indicator -> Accepts icon for indicator
- Carousel.Item
  - Wrapper to create carousel Item
  - Props:
    - className -> to add custom styles; defaults: carousel-item

**Example**

```js
<Carousel className="carousel-wrapper" indicator={<FaCircleDot />}>
  <Carousel.Item>
    <div className="carousel-item">
      <img
        src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
        alt="desk"
      />
      <h2>This first slide</h2>
      <p>Lorem</p>
    </div>
  </Carousel.Item>
</Carousel>
```

---

### Modal

Following are the components in Modal:

- Modal
  - Main wrapper of Modal
  - Props:
    - show -> accepts boolean which shows the state of modal
    - onClose -> accepts function that is used to close modal; the function should change the state that is passed in show prop to false
    - className -> to add custom styles; defaults: overlay -> that only adds the black overlay
- Carousel.Button
  - Wrapper to create button that closes the modal
  - Props:
    - className -> to add custom styles; defaults: btn -> which strips down all the default styling of button

**Example**

```js
    <button onClick={openHandler}>Show Modal</button>
    <Modal show={toggle} onClose={closeHandler} className="modal-wrapper">
      <div className="modal-content">
        <div className="modal-header">
          <h2>
            This is header
          </h2>
          <Modal.Button className="modal-close">X</Modal.Button>
        </div>
        <div className="modal-button">
          <Modal.Button className="modal-close">X</Modal.Button>
        </div>
      </div>
    </Modal>
```

---

### Dropdown

Following are the components in Dropdown:

- Dropdown
  - Main wrapper of Dropdown
  - Props:
    - className -> to add custom styles
- Dropdown.Toggle
  - Wrapper to create button that closes the dropdown
  - Props:
    - className -> to add custom styles
- Dropdown.Menu
  - Wrapper for the menu box
  - Props:
    - className -> to add custom styles

**Example**

```js
<Dropdown className="dropdown">
  <Dropdown.Toggle className="dropdown-toggle">Open dropdown</Dropdown.Toggle>
  <Dropdown.Menu className="dropdown-menu">
    <ul>
      <li>Home</li>
      <li>Contact</li>
      <li>About</li>
    </ul>
  </Dropdown.Menu>
</Dropdown>
```

---

### Tabs

Following are the components in Tabs:

- Tabs
  - Main wrapper of Tabs
  - Props:
    - defaultkey: to show the default content
- Tabs.Header
  - Wrapper to create list of buttons that switch the content
  - Props:
    - className -> to add custom styles; default classname -> tab-header
- Tabs.Head
  - Wrapper to show individual button
  - Props:
    - className -> to add custom styles; default classname -> tab-head; active classname -> tab-active
- Tabs.Tab
  - Wrapper to show content
  - Props:
    - className -> to add custom styles; default classname -> tab-item

```js
<Tabs defaultKey="profile">
  <Tabs.Header>
    {[
      { eventKey: "profile", title: "Profile" },
      { eventKey: "contact", title: "Contact" },
      { eventKey: "service", title: "Service" },
      { eventKey: "about", title: "About" },
    ].map((item) => {
      return (
        <Tabs.Head key={item.eventKey} eventKey={item.eventKey}>
          {item.title}
        </Tabs.Head>
      );
    })}
  </Tabs.Header>

  <Tabs.Tab eventKey="profile">Profile</Tabs.Tab>
  <Tabs.Tab eventKey="contact">contact</Tabs.Tab>
  <Tabs.Tab eventKey="service">service</Tabs.Tab>
  <Tabs.Tab eventKey="about">about</Tabs.Tab>
</Tabs>
```

---

---

## Custom Hooks

---

### useToggle

This hook provides four values to be used. You can pass the intial value as parameter which is either true or false in useToggle

- toggle -> the state which could be true or false
- toggleHandler -> function that changes the state of toggle to true or false based on previous toggle value
- openHandler -> functon that changes the state of toggle to true
- closeHandler -> functon that changes the state of toggle to false

**Example**

```js
const { toggle, toggleHandler, openHandler, closeHandler } = useToggle(false);
```
