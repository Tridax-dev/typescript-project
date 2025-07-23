import { HasFormatter } from "./interfaces/Hasformatter.js";
export class invoice implements HasFormatter{
    constructor(
          readonly clients: string,
        private details: string,
        public amout:number
    ){}
    format(): string {
        return '${this.client} owes ${this.amout} for ${this.details}';
    }
}
    