import { ValidatorFn, AbstractControl } from '@angular/forms'

export function isNotNegativePrice(): ValidatorFn {
    return (control: AbstractControl) => {
        const currentPrice = control.value as string;
        if (!currentPrice) { return null; }
        if (parseInt(currentPrice, 10) < 0) {
            return {
                negativePrice: true
            };
        }
        return null;
    }
}