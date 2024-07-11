import { expect , type Locator , type Page } from "@playwright/test";

export class OrdersPage {

    readonly page: Page;
    readonly addToCart: Locator;
    readonly confirmCart: Locator;

    constructor(page: Page){
        this.page = page;
        this.addToCart = page.getByText('Add to cart');
        this.confirmCart = page.locator('#cartur');
    }

    async addItemToCart(){
        await this.addToCart.click();
        await this.confirmCart.click();
    }

}   