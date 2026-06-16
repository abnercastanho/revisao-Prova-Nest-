import { Column } from "sequelize-typescript/dist/model/column/column";
import { DataType } from "sequelize-typescript/dist/sequelize/data-type/data-type";

  export class UserDto {
  
  @Column ({type: DataType.STRING})
    nome!: string;

    @Column ({type: DataType.STRING})
    cpf!: string;

     @Column ({type: DataType.STRING})
    telefone!: string;

     @Column ({type: DataType.STRING})
    matricula!: string;
}    