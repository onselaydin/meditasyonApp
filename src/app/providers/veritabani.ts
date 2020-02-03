import {Injectable} from "@angular/core";
import {SQLite,SQLiteObject} from "@ionic-native/sqlite";
import {Platform} from "ionic-angular";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Meditasyon} from "../../entities/meditasyon";

@Injectable()
export class VeritabaniProvider {
    private veritabani: SQLiteObject;
    private veritabaniHazir: BehaviorSubject<boolean>;
    ms: Meditasyon[];
    constructor(
        private storage: Storage,
        private platform: Platform,
        private sqlite: SQLite ){

    }

}