import { render, screen, cleanup } from "@testing-library/react";
import Elevator from "../Elevator";

// this only tests for the component to render but more tests can be added to test the initialization and the end product
test('should render Elevator component', ()=>{
    render(<Elevator/>);
    const ElevatorElement = screen.getByTestId('elevator-1');
    expect(ElevatorElement).toBeInTheDocument();
    expect(ElevatorElement).toHaveTextContent('Elevator Simulator');
});

