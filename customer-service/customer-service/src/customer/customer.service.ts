import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    findAll() {
        return this.customer;
    }

    save(customer: Customer) {
        this.customer.push(customer);
    }
}
