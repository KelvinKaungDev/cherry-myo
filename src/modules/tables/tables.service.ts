import { Injectable, NotFoundException } from '@nestjs/common';
import { Table } from './entities/table.entity';
import { RequestTableDto } from './dto/req-table.dto';

@Injectable()
export class TablesService {
    readonly tables: Table[] = [];

    findAll(): Table[] {
        return this.tables;
    }

    findOne(id: string): Table {
      const table = this.tables.find(table => table.id === id);
      if (!table) {
        throw new NotFoundException(`Table with ID ${id} not found`);
      }
      return table;
    }

    create(createTableDto: RequestTableDto): Table {
        const newTable = new Table();
        newTable.name = createTableDto.name;
        this.tables.push(newTable);
        return newTable;
    }
}
