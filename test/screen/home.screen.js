class homeScreen {
  get #enterInicialScreen() {
    return $("id:button_skip");
  }

  get #enterStore() {
    return $("id:button_login_store");
  }

  async gotToLogin() {
    await this.#enterInicialScreen.click();
    await this.#enterStore.click();
  }
}
module.exports = new homeScreen();

//We are working with page units idea.
//# -> private elements
