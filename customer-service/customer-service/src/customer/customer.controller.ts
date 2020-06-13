import { Controller, Post, Get, Body } from '@nestjs/common';
import { plainToClass } from "class-transformer";
import { CustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';


@Controller('customer')
export class CustomerController{

    constructor(private readonly service: CustomerService){}

    @Post()
    save(@Body()CustomerDto: CustomerDto){
        const Customer = plainToClass(Customer, CustomerDto);
        return this.service.save(Customer);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }
}