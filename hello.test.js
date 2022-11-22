const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual(
      "Hola Mundo desde Costa Rica, el miercoles 23 de Noviembre jugamos contra Espanna en el Mundial de Qatar 2022"
    );
  });
});
