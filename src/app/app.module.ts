import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './Components/Titles/title/title.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ToolbarComponent } from './Components/Navigators/toolbar/toolbar.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { OurModelsComponent } from './Components/our-models/our-models.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ShopPageComponent } from './Pages/Shop Pages/shop-page/shop-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ButtonComponent } from './Components/Buttons/button/button.component';
import { AboutUsButtonComponent } from './Components/Buttons/about-us-button/about-us-button.component';
import { OurModelButtonComponent } from './Components/Buttons/our-model-button/our-model-button.component';
import { ItemsHeadwearComponent } from './Components/Items/items-headwear/items-headwear.component';
import { ItemsShirtsComponent } from './Components/Items/items-shirts/items-shirts.component';
import { ItemsPantsComponent } from './Components/Items/items-pants/items-pants.component';
import { ItemsShoesComponent } from './Components/Items/items-shoes/items-shoes.component';
import { ItemsBuildComponent } from './Components/Items/items-build/items-build.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeTitleComponent } from './Components/Titles/home-title/home-title.component';
import { AboutTitleComponent } from './Components/Titles/about-title/about-title.component';
import { ShopTitleComponent } from './Components/Titles/shop-title/shop-title.component';
import { ContactTitleComponent } from './Components/Titles/contact-title/contact-title.component';
import { RecommendedCarouselComponent } from './Components/recommended-carousel/recommended-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuyNowButtonComponent } from './Components/Buttons/buy-now-button/buy-now-button.component';
import { ShopNavigatorComponent } from './Components/Navigators/shop-navigator/shop-navigator.component';
import { ShopHeadwearComponent } from './Pages/Shop Pages/shop-headwear/shop-headwear.component';
import { ShopShirtsComponent } from './Pages/Shop Pages/shop-shirts/shop-shirts.component';
import { ShopPantsComponent } from './Pages/Shop Pages/shop-pants/shop-pants.component';
import { ShopFootWearComponent } from './Pages/Shop Pages/shop-foot-wear/shop-foot-wear.component';
import { AddtocartButtonComponent } from './Components/Buttons/addtocart-button/addtocart-button.component';
import { ItemsAllComponent } from './Components/Items/items-all/items-all.component';
import { ShopAllComponent } from './Pages/Shop Pages/shop-all/shop-all.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { LoginButtonComponent } from './Components/Buttons/login-button/login-button.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { LoginTitleComponent } from './Components/Titles/login-title/login-title.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisitingAgentComponent } from './Components/visiting-agent/visiting-agent.component';
import { ErrorInterceptor } from './Services/ErrorInterceptor/ErrorInterceptor.service';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { Auth0LoginBtnComponent } from './Components/auth0/auth0-login-btn/auth0-login-btn.component';
import { Auth0SignupBtnComponent } from './Components/auth0/auth0-signup-btn/auth0-signup-btn.component';
import { Auth0LogoutBtnComponent } from './Components/auth0/auth0-logout-btn/auth0-logout-btn.component';
import { Auth0AllComponent } from './Components/auth0/auth0-all/auth0-all.component';

@NgModule({
    declarations: [
      
      VisitingAgentComponent,
        AppComponent,
        ButtonComponent,
        TitleComponent,
        FooterComponent,
        ToolbarComponent,
        AboutUsComponent,
        OurModelsComponent,
        AboutUsButtonComponent,
        OurModelButtonComponent,
        AboutPageComponent,
        HomePageComponent,
        ShopPageComponent,
        ContactPageComponent,
        ItemsHeadwearComponent,
        ItemsShirtsComponent,
        ItemsPantsComponent,
        ItemsShoesComponent,
        ItemsBuildComponent,
        ContactUsComponent,
        HomeTitleComponent,
        AboutTitleComponent,
        ShopTitleComponent,
        ContactTitleComponent,
        RecommendedCarouselComponent,
        BuyNowButtonComponent,
        ShopNavigatorComponent,
        ShopHeadwearComponent,
        ShopShirtsComponent,
        ShopPantsComponent,
        ShopFootWearComponent,
        AddtocartButtonComponent,
        ItemsAllComponent,
        ShopAllComponent,
        LoginFormComponent,
        LoginButtonComponent,
        LoginPageComponent,
        LoginTitleComponent,
        Auth0LoginBtnComponent,
        Auth0SignupBtnComponent,
        Auth0LogoutBtnComponent,
        Auth0AllComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent, RecommendedCarouselComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthModule.forRoot({
          ...environment.auth,
        }),        
        
    ]
})
export class AppModule {}
