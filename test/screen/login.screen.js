class loginScreen {
  get #urlSite() {
    return $("id:input");
  }

  get #email() {
    return $('android=new UiSelector().text("Email address")');
  }

  get #loginContinueButton() {
    return $("id:login_continue_button");
  }

  get #password() {
    return $('android=new UiSelector().text("Password")');
  }

  get #continueButton() {
    return $("id:bottom_button");
  }

  async inputUrlSite(url) {
    await this.#urlSite.setValue(url);
    await this.#continueButton.click();
  }

  async inputEmail(email) {
    await this.#email.setValue(email);
    await this.#loginContinueButton.click();
  }

  async inputPassword(password) {
    await this.#password.setValue(password);
    await this.#continueButton.click();
  }
}
module.exports = new loginScreen();

//We are working with page units idea.
//# -> private elements
