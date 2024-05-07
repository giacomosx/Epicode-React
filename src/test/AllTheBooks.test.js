import { renderWithProviders } from "./test-utils";
import { screen } from "@testing-library/react";
import AllTheBooks from "../components/allthebooks/AllTheBooks";

import fantasy from '../fantasy.json'

test("cards count", () => {

  
  renderWithProviders(<AllTheBooks data={fantasy}/>);

  const numberOfCards = screen.getAllByTestId("card");
  expect(numberOfCards).toHaveLength(150);
});

