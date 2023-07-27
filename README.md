# React UI library

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

**use case:**

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

**use case:**

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
