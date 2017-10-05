import { Component, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl, NG_VALIDATORS } from '@angular/forms';

declare interface User {
    number?: number;
    number2?: number;
    optionsRadios?: string;
}

@Component({
    selector: 'app-analysis',
    templateUrl: './analysis.component.html'
})

export class AnalysisComponent implements OnInit {
    public user: User;
    public typeValidation: User;
    public show: boolean;
    public rows: any;
    public execusions = [
        'Simple',
        'Complex'
    ];

    ngOnInit() {
        this.user = {
            optionsRadios: '',
            number: null,
            number2: null,
        };
        this.typeValidation = {
            optionsRadios: '',
            number: null,
            number2: null,
        };
        this.show = false;
        this.rows = [];
    }

    save(model: User, isValid: boolean) {
        // call API to save
        console.log(model, isValid);

        this.show = true;

        console.log('Form Data: ');

        const timeoutId = setTimeout(() => {
            const objDate = Date.now();
            this.rows.push(
                {
                    date: objDate,
                    perc: '%' + this.getRandomInt(20, 80),
                    retention: model.number
                }
            );
            this.show = false;
            console.log('after 3 seconds');
        }, 3000);

    }

    getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
