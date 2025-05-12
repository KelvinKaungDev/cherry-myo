import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TablesService } from './tables.service';
import { RequestTableDto } from './dto/req-table.dto';

@Controller('tables')
export class TablesController {
    constructor(private readonly tablesService: TablesService) {}

    @Get()
    async getAllTables() {
        return this.tablesService.findAll();
    }

    @Get(':id')
    async getTableById(@Param('id') id: string) {
        return this.tablesService.findOne(id);
    }

    @Post()
    async createTable(@Body() requestTableDto: RequestTableDto) {
        return this.tablesService.create(requestTableDto);

    }
}
