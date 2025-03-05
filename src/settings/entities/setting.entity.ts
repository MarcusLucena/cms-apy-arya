import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  maintenanceMode: boolean;

  @Column()
  contactEmailOn: boolean;

  @Column()
  whatsappOn: boolean;
}
