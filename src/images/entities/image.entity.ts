import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  alt: string;

  @Column()
  title: string;

  @Column()
  name: string;
}
