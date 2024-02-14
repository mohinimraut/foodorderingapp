import { render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
//global object
//fetch function return a promise and promise return a json
//I am trying to make exactlly fetch dummy function which browser gives us.then that store in json and then convert into json.
//dummy fetch function.It take a callback function
//fetch function resolved with json and return a promise once again.
// global.fetch = jest.fn(() => {
//   return Promise.resolve();
// });

//this test case run even wifi disconnect
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with Search ", () => {
  render(<Body />);
});
