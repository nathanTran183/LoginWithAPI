import { Injectable, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { AuthService } from './auth.service';
import { Account } from '../models/account';

const langs = ['en', 'fr', 'ru', 'he', 'zh'];
const langmatch = /en|fr|ru|he|zh/;

@Injectable()
export class AdminLTETranslateService implements OnInit {
    private lang: string = 'us';

    constructor( private translate: TranslateService ) {
        translate.addLangs( langs );
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang( 'en' );

            // the lang to use, if the lang isn't available, it will use the current loader to get them
            let browserLang = this.translate.getBrowserLang();
            let browserCultureLang = this.translate.getBrowserCultureLang();
            console.log( 'Detected browser language: "' + browserCultureLang + '"' );

            // check if current User has a Preferred Language set, and it differs from his browser lang
            let useLang = 'en';
            let prefLang = 'en';
            this.translate.use( useLang );
            console.log( 'Translation language has been set to: "' + useLang + '"' );

    }

    public ngOnInit() {
        // TODO
    }

    public getTranslate(): TranslateService {
        return this.translate;
    }

}
