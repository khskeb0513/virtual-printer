import { Printer } from './printer/printer';

const printer = new Printer();

printer.on('bonjourPublish', () => console.log('hi'));