class addNewProd {
  get #openProductList() {
    return $("id:products");
  }

  get #addProduct() {
    return $("id:addProductButton");
  }

  get #chooseSimple() {
    return $('android=new UiSelector().text("Simple physical product")');
  }

  get #addImage() {
    return $("id:addImageContainer");
  }

  get #choosePics() {
    return $("id:textWPMediaLibrary");
  }

  get #scrollPicList() {
    return $(
      'android=new UiScrollable(new UiSelector().className("androidx.recyclerview.widget.RecyclerView")).scrollToEnd(15)'
    );
  }

  get #addPicSelection() {
    return $("id:mnu_confirm_selection");
  }

  get #returnButton() {
    return $(
      'android=new UiSelector().className("android.widget.ImageButton")'
    );
  }

  get #enterTitle() {
    return $("id:editText");
  }

  get #enterDescription() {
    return $('android=new UiSelector().text("Describe your product")');
  }

  get #inputText() {
    return $("id:visualEditor");
  }

  get #enterPriceValue() {
    return $('android=new UiSelector().text("Add price")');
  }

  get #inputPrice() {
    return $("id:edit_text");
  }

  get #publishProd() {
    return $("id:menu_publish");
  }

  async goProductArea() {
    await this.#openProductList.click();
    await this.#addProduct.click();
  }

  async addSimpleProd() {
    await this.#chooseSimple.click();
  }

  async addPrdImage() {
    await this.#addImage.click();
  }

  async selectPic() {
    await this.#choosePics.click();
  }

  async searchPic() {
    await this.#scrollPicList.touchAction("tap", -25, 450);
  }

  async addSelection() {
    await this.#addPicSelection.click();
    await this.#returnButton.click();
  }

  async prodTitle(title) {
    await this.#enterTitle.click();
    await this.#enterTitle.setValue(title);
  }

  async prodDescribe(description) {
    await this.#enterDescription.click();
    await this.#inputText.addValue(description);
    await this.#returnButton.click();
  }

  async prodPrice(value) {
    await this.#enterPriceValue.click();
    await this.#inputPrice.addValue(value);
    await this.#returnButton.click();
  }

  async publishNew() {
    await this.#publishProd.click();
  }
}

module.exports = new addNewProd();
