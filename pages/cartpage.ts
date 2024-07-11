import { expect , type Locator , type Page } from "@playwright/test";

export class CartsPage {

    readonly page: Page;
    readonly placeOrderBtn: Locator;
    readonly name: Locator;
    readonly country: Locator;
    readonly city: Locator;
    readonly card: Locator;
    readonly month: Locator;
    readonly year: Locator;
    readonly purchaseBtn: Locator;

    constructor(page){
        this.page = page;
        this.placeOrderBtn = page.locator("xpath=//button[@data-toggle='modal']");
        this.name = page.locator('#name');
        this.country =  page.locator('#country');
        this.city =  page.locator('#city');
        this.card =  page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchaseBtn = page.getByText('Purchase');
    }

    async placeOrder(){
        await this.placeOrderBtn.click();
        await this.name.fill("12345");
        await this.country.fill("12345");
        await this.city.fill("12345");
        await this.card.fill("12345");
        await this.month.fill("12345");
        await this.year.fill("12345");
        await this.purchaseBtn.click();
    }
}