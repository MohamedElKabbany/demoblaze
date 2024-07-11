import { expect , type Locator , type Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly usernameR: Locator;
    readonly passwordR: Locator;
    readonly usernameL: Locator;
    readonly passwordL: Locator;
    readonly loginBtn: Locator;
    readonly registerBtn: Locator;
    readonly submitLoginBtn: Locator;
    readonly submitRegisterBtn: Locator;
    readonly logoutBtn: Locator;
    readonly monitorsBtn: Locator;
    readonly appleMonitor: Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameR = page.locator('#sign-username');
        this.passwordR = page.locator('#sign-password');
        this.usernameL = page.locator('#loginusername');
        this.passwordL = page.locator('#loginpassword');
        this.loginBtn = page.locator('#login2');
        this.registerBtn = page.locator('#signin2');
        this.submitLoginBtn = page.locator("xpath=//button[@onclick='logIn()']");
        this.submitRegisterBtn = page.locator("xpath=//button[@onclick='register()']");
        this.logoutBtn = page.locator("#logout2");
        this.monitorsBtn = page.getByText('Monitors');
        this.appleMonitor = page.getByText('Apple monitor 24');
    }

    async successfulLogin(){
        await this.loginBtn.click();
        await this.usernameL.fill("Mohamed1100112334545666");
        await this.passwordL.fill("12345");
        await this.submitLoginBtn.click();
    }

    async register(){
        await this.registerBtn.click();
        await this.usernameR.fill("Mohamed1100112334545666");
        await this.passwordR.fill("12345");
        await this.submitRegisterBtn.click();
    }

    async logout(){
        await this.logoutBtn.click();
    }

    async chooseItem(){
        await this.monitorsBtn.click();
        await this.appleMonitor.click();
    }
}