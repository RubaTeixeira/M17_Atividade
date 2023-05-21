const homeScreen = require("../screen/home.screen");
const loginScreen = require("../screen/login.screen");
const mystoreScreen = require("../screen/mystore.screen");
const newprodScreen = require("../screen/newprod.screen");

let url = "http://lojaebac.ebaconline.art.br/";
let email = "lojaebacqe@gmail.com";
let senha = "GD*peToHNJ1#c$sgk08EaYJQ";

let title = "Produto Teste - QA";
let description = "Inclusão apenas para teste, deve ser excluído.";
let value = "25.00";

describe("Access dashboard to add product", () => {
  it("Should login", async () => {
    await homeScreen.gotToLogin();
    await loginScreen.inputUrlSite(url);
    await loginScreen.inputEmail(email);
    await loginScreen.inputPassword(senha);

    expect(await mystoreScreen.getStoreName()).toEqual("EBAC - Shop");
  });

  it("Add a new product to store", async () => {
    await newprodScreen.goProductArea();
    await newprodScreen.addSimpleProd();
    await newprodScreen.addPrdImage();
    await newprodScreen.selectPic();
    await newprodScreen.searchPic();
    await newprodScreen.addSelection();
    await newprodScreen.prodTitle(title);
    await newprodScreen.prodDescribe(description);
    await newprodScreen.prodPrice(value);
    await newprodScreen.publishNew();
  });
});
